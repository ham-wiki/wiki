<a id="readme-top"></a>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MPL-2.0 License][license-shield]][license-url]

</div>

<br />

<div align="center">
  <a href="https://github.com/ham-wiki/wiki">
    <img src="docs/public/logos/logo.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">HAM.Wiki</h3>
  <p align="center">
    业余无线电百科 - Amateur Radio Encyclopedia
    <br />
    <a href="https://ham.wiki"><strong>访问网站 >></strong></a>
    <br />
    <br />
    <a href="https://github.dev/ham-wiki/wiki">在线编辑</a>
    ·
    <a href="https://github.com/ham-wiki/wiki/issues">报告错误/提交建议</a>
  </p>

</div>

<details>
  <summary>目录</summary>
  <ol>
    <li><a href="#关于本项目">关于本项目</a></li>
    <li><a href="#内容结构">内容结构</a></li>
    <li><a href="#本地开发">本地开发</a></li>
    <li><a href="#参与贡献">参与贡献</a></li>
    <li><a href="#完善路线">完善路线</a></li>
  </ol>
</details>

# 关于本项目

**HAM.Wiki** 是一个开源的业余无线电（Amateur Radio / HAM Radio）中文百科项目，为全球中文业余无线电爱好者提供全面、准确、易懂的知识库。

- 从入门到进阶的系统化学习路径
- 设备选购指南与改装教程
- 天线原理与 DIY 制作
- 数字模式（DMR/FT8/APRS/C4FM/D-STAR）详解
- 考试攻略与执照指南
- 书籍推荐与在线资源汇总
- 应急通信准备与实践
- 多语言支持（简体中文/繁体中文/English）

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# 内容结构

| 章节 | 内容 |
|------|------|
| 入门指南 | 什么是业余无线电、基础概念、频段概览 |
| 考试与执照 | CRAC A/B/C 类考试、国际执照、备考攻略 |
| 设备指南 | 手持台、车载台、短波台、SDR、配件 |
| 天线与制作 | 天线理论、偶极/垂直/八木天线 DIY |
| 改装教程 | UV-K5 固件、宝锋改装、CHIRP 编程 |
| 操作指南 | FM 中继、短波操作、竞赛、Q 码 |
| 数字模式 | DMR、FT8、APRS、C4FM、D-STAR |
| 书籍资源 | 推荐书籍、在线资源、术语表 |
| 应急通信 | 应急基础、应急背包 |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# 本地开发

```bash
# 安装依赖
bun install

# 启动开发服务器
bun run docs:dev

# 构建
bun run docs:build

# 预览构建结果
bun run docs:preview
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# 参与贡献

欢迎所有业余无线电爱好者参与贡献：

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-guide`)
3. 提交你的修改 (`git commit -m 'Add some amazing guide'`)
4. 推送到分支 (`git push origin feature/amazing-guide`)
5. 开启一个 Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# 完善路线

- [x] 入门指南
- [x] 考试与执照
- [x] 设备指南
- [x] 天线与制作
- [x] 改装教程
- [x] 操作指南
- [x] 数字模式
- [x] 书籍与资源
- [x] 应急通信
- [ ] 卫星通信
- [ ] 月面反射通信 (EME)
- [ ] 业余电视 (ATV)
- [ ] 无线电测向 (ARDF)
- [ ] 更多改装教程

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/ham-wiki/wiki.svg?style=for-the-badge
[contributors-url]: https://github.com/ham-wiki/wiki/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ham-wiki/wiki.svg?style=for-the-badge
[forks-url]: https://github.com/ham-wiki/wiki/network/members
[stars-shield]: https://img.shields.io/github/stars/ham-wiki/wiki.svg?style=for-the-badge
[stars-url]: https://github.com/ham-wiki/wiki/stargazers
[issues-shield]: https://img.shields.io/github/issues/ham-wiki/wiki.svg?style=for-the-badge
[issues-url]: https://github.com/ham-wiki/wiki/issues
[license-shield]: https://img.shields.io/github/license/ham-wiki/wiki.svg?style=for-the-badge
[license-url]: https://github.com/ham-wiki/wiki/blob/main/LICENSE
