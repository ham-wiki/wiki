import { defineConfig } from "vitepress";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

function hasGitCommits(): boolean {
  try {
    execSync("git rev-parse HEAD", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

// Only import git changelog when commits exist (avoids crash on empty repos)
const gitChangelogPlugins = hasGitCommits()
  ? await import("@nolebase/vitepress-plugin-git-changelog/vite").then(m => [
      m.GitChangelog({ repoURL: () => "https://github.com/ham-wiki/wiki" }),
      m.GitChangelogMarkdownSection(),
    ])
  : [
      // Stub virtual module so client-side imports don't break
      {
        name: 'nolebase-git-changelog-stub',
        resolveId(id: string) {
          if (id === 'virtual:nolebase-git-changelog') return id;
        },
        load(id: string) {
          if (id === 'virtual:nolebase-git-changelog') {
            return 'export default []';
          }
        },
      },
    ];

const __dirname = dirname(fileURLToPath(import.meta.url));

function extractFirstHeading(filePath: string): string {
  try {
    const content = readFileSync(filePath, "utf-8");
    const match = content.match(/^#\s+(.+)$/m);
    return match ? match[1].trim() : "";
  } catch {
    return "";
  }
}

function getCleanCategoryPath(category: string): string {
  return category
    .replace(/^\d+_/, "")
    .replace(/_/g, "-");
}

function getCleanFileName(fileName: string): string {
  return fileName
    .replace(/^\d+_\d+_/, "")
    .replace(/^\d+_/, "")
    .replace(/_/g, "-");
}

function generateRewrites() {
  const rewrites: Record<string, string> = {};

  const zhCNDir = join(__dirname, "../zh-CN");

  if (existsSync(join(zhCNDir, 'index.md'))) {
    rewrites['zh-CN/index.md'] = 'index.md';
  }

  if (existsSync(join(zhCNDir, 'about.md'))) {
    rewrites['zh-CN/about.md'] = 'about.md';
  }

  const zhCNGuidesDir = join(zhCNDir, "guides");
  if (existsSync(zhCNGuidesDir)) {
    if (existsSync(join(zhCNGuidesDir, 'index.md'))) {
      rewrites['zh-CN/guides/index.md'] = 'guides/index.md';
    }

    const categories = readdirSync(zhCNGuidesDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    for (const category of categories) {
      const cleanCategoryPath = getCleanCategoryPath(category);
      const categoryPath = join(zhCNGuidesDir, category);

      rewrites[`zh-CN/guides/${category}/index.md`] = `guides/${cleanCategoryPath}/index.md`;

      if (existsSync(categoryPath)) {
        const files = readdirSync(categoryPath).filter(
          (file) => file.endsWith(".md") && file !== "index.md"
        );

        for (const file of files) {
          const cleanFileName = getCleanFileName(file.replace(".md", ""));
          rewrites[`zh-CN/guides/${category}/${file}`] = `guides/${cleanCategoryPath}/${cleanFileName}.md`;
        }
      }
    }
  }

  const locales = ['zh-TW', 'zh-HK', 'en-US'];

  for (const locale of locales) {
    const localeDir = join(__dirname, `../${locale}`);

    if (existsSync(localeDir)) {
      const localeGuidesDir = join(localeDir, 'guides');
      if (existsSync(localeGuidesDir)) {
        const categories = readdirSync(localeGuidesDir, { withFileTypes: true })
          .filter((dirent) => dirent.isDirectory())
          .map((dirent) => dirent.name);

        for (const category of categories) {
          const cleanCategoryPath = getCleanCategoryPath(category);
          const categoryPath = join(localeGuidesDir, category);

          rewrites[`${locale}/guides/${category}/index.md`] = `${locale}/guides/${cleanCategoryPath}/index.md`;

          if (existsSync(categoryPath)) {
            const files = readdirSync(categoryPath).filter(
              (file) => file.endsWith(".md") && file !== "index.md"
            );

            for (const file of files) {
              const cleanFileName = getCleanFileName(file.replace(".md", ""));
              rewrites[`${locale}/guides/${category}/${file}`] = `${locale}/guides/${cleanCategoryPath}/${cleanFileName}.md`;
            }
          }
        }
      }
    }
  }

  return rewrites;
}

function generateSidebar(locale: string = 'zh-CN') {
  const baseDir = join(__dirname, `../${locale}`);
  const guidesDir = join(baseDir, "guides");

  if (!existsSync(guidesDir)) {
    return [];
  }

  const categories = readdirSync(guidesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort();

  const sidebarItems: Array<{
    text: string;
    collapsed: boolean;
    items: Array<{ text: string; link: string }>;
  }> = [];

  const localeTexts = {
    'zh-CN': { intro: '章节简介' },
    'zh-TW': { intro: '章節簡介' },
    'zh-HK': { intro: '章節簡介' },
    'en-US': { intro: 'Introduction' }
  };

  const currentLocaleText = localeTexts[locale as keyof typeof localeTexts] || localeTexts['zh-CN'];

  for (const category of categories) {
    const categoryPath = join(guidesDir, category);
    const indexPath = join(categoryPath, "index.md");
    const cleanCategoryPath = getCleanCategoryPath(category);

    let categoryTitle = "";
    if (existsSync(indexPath)) {
      categoryTitle = extractFirstHeading(indexPath);
    }
    if (!categoryTitle) {
      categoryTitle = category.replace(/^\d+_/, "").replace(/_/g, " ");
    }

    const items: Array<{ text: string; link: string }> = [];

    const linkPrefix = locale === 'zh-CN' ? '' : `/${locale}`;
    items.push({
      text: currentLocaleText.intro,
      link: `${linkPrefix}/guides/${cleanCategoryPath}/`,
    });

    if (existsSync(categoryPath)) {
      const files = readdirSync(categoryPath)
        .filter((file) => file.endsWith(".md") && file !== "index.md")
        .sort();

      for (const file of files) {
        const filePath = join(categoryPath, file);
        const title = extractFirstHeading(filePath) || file.replace(/\.md$/, "").replace(/^\d+_\d+_/, "").replace(/^\d+_/, "").replace(/_/g, " ");
        const cleanFileName = getCleanFileName(file.replace(".md", ""));

        items.push({
          text: title,
          link: `${linkPrefix}/guides/${cleanCategoryPath}/${cleanFileName}`,
        });
      }
    }

    sidebarItems.push({
      text: categoryTitle,
      collapsed: true,
      items,
    });
  }

  return sidebarItems;
}

export default defineConfig({
  rewrites: generateRewrites(),
  cleanUrls: true,
  ignoreDeadLinks: true,

  sitemap: {
    hostname: 'https://ham.wiki',
    lastmodDateOnly: false,
  },

  head: [["link", { rel: "icon", href: "/logos/logo.png" }]],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "HAM.Wiki",
      description: '业余无线电百科 - 从入门到精通的 HAM Radio 中文知识库',
      themeConfig: {
        nav: [
          { text: "首页", link: "/" },
          { text: "知识库", link: "/guides/" },
          { text: "关于", link: "/about" },
        ],
        sidebar: {
          "/guides/": generateSidebar('zh-CN'),
        },
      }
    },
    'zh-TW': {
      label: '繁體中文（台灣）',
      lang: 'zh-TW',
      title: "HAM.Wiki",
      description: '業餘無線電百科 - 從入門到精通的 HAM Radio 中文知識庫',
      themeConfig: {
        nav: [
          { text: "首頁", link: "/zh-TW/" },
          { text: "知識庫", link: "/zh-TW/guides/" },
          { text: "關於", link: "/zh-TW/about" },
        ],
        sidebar: {
          "/zh-TW/guides/": generateSidebar('zh-TW'),
        },
      }
    },
    'zh-HK': {
      label: '繁體中文（香港）',
      lang: 'zh-HK',
      title: "HAM.Wiki",
      description: '業餘無線電百科 - 從入門到精通嘅 HAM Radio 中文知識庫',
      themeConfig: {
        nav: [
          { text: "首頁", link: "/zh-HK/" },
          { text: "知識庫", link: "/zh-HK/guides/" },
          { text: "關於", link: "/zh-HK/about" },
        ],
        sidebar: {
          "/zh-HK/guides/": generateSidebar('zh-HK'),
        },
      }
    },
    'en-US': {
      label: 'English',
      lang: 'en-US',
      title: "HAM.Wiki",
      description: 'Amateur Radio Encyclopedia - Your comprehensive HAM Radio knowledge base',
      themeConfig: {
        nav: [
          { text: "Home", link: "/en-US/" },
          { text: "Guides", link: "/en-US/guides/" },
          { text: "About", link: "/en-US/about" },
        ],
        sidebar: {
          "/en-US/guides/": generateSidebar('en-US'),
        },
      }
    }
  },

  themeConfig: {
    logo: "/logos/logo.png",

    footer: {
      message: "HAM.Wiki - 业余无线电爱好者的知识家园",
      copyright: "Copyright © 2025-Now HAM.Wiki Contributors",
    },

    editLink: {
      pattern: "https://github.com/ham-wiki/wiki/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short" as const,
        timeStyle: "medium" as const,
      },
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    socialLinks: [
      { icon: "github", link: "https://github.com/ham-wiki/wiki" },
    ],

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
  },

  vite: {
    plugins: [
      ...gitChangelogPlugins,
    ],
    optimizeDeps: {
      exclude: [
        "@nolebase/vitepress-plugin-enhanced-readabilities/client",
        "@nolebase/vitepress-plugin-git-changelog/client",
        "vitepress",
        "@nolebase/ui",
      ],
    },
    ssr: {
      noExternal: [
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/vitepress-plugin-git-changelog",
        "@nolebase/ui",
      ],
    },
  },
});
