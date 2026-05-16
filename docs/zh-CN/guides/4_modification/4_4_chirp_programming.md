# CHIRP 编程指南

CHIRP 是一款免费、开源的跨平台业余无线电编程软件，支持数百种电台型号。它为不同品牌、不同型号的电台提供了统一的操作界面，是业余无线电爱好者的必备工具。

## 软件简介

- **官方网站**：https://chirp.danplanet.com
- **开源协议**：GPL v3
- **支持平台**：Windows、macOS、Linux
- **当前版本**：CHIRP-next（基于 Python 3 + wxPython 的新版本）

## 安装步骤

### Windows 安装

1. 访问 CHIRP 官方网站下载页面：https://chirp.danplanet.com/projects/chirp/wiki/Download
2. 下载 Windows 安装包（`.exe` 文件）。
3. 运行安装程序，按照向导完成安装。
4. 安装完成后，从开始菜单启动 CHIRP。

### macOS 安装

1. 下载 macOS 版本的 `.dmg` 安装包。
2. 打开 `.dmg` 文件，将 CHIRP 拖到 Applications 文件夹。
3. 首次运行时，右键点击 CHIRP → "打开"，确认安全提示。

### Linux 安装

**使用 pip 安装（推荐）：**

```bash
# 确保已安装 Python 3 和 pip
pip3 install chirp

# 或使用 pipx 隔离安装
pipx install chirp
```

**使用 Flatpak 安装：**

```bash
flatpak install flathub com.danplanet.chirp
```

**Arch Linux / NixOS：**

```bash
# Arch Linux (AUR)
yay -S chirp

# NixOS
nix-env -iA nixpkgs.chirp
```

### 安装编程线驱动

CHIRP 本身不包含 USB 串口驱动，需要单独安装：

| 编程线芯片 | 驱动下载 | 备注 |
|-----------|----------|------|
| CH340 / CH341 | [CH340 驱动](http://www.wch.cn/download/CH341SER_EXE.html) | 国产编程线最常用 |
| CP2102 | [Silicon Labs 驱动](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers) | 质量较好的编程线 |
| FTDI FT232 | [FTDI 驱动](https://ftdichip.com/drivers/) | 专业级编程线 |
| PL2303 | [Prolific 驱动](http://www.prolific.com.tw/US/ShowProduct.aspx?p_id=225) | 老款编程线，Win10/11 兼容性差 |

::: tip Linux 用户注意
Linux 系统通常已内置上述驱动，无需额外安装。但需要确保当前用户有权限访问串口设备：

```bash
sudo usermod -aG dialout $USER
# 需要注销并重新登录生效
```
:::

## 连接电台

### 步骤

1. **关闭电台电源**。
2. 将编程线的 K 头（或其他接口）插入电台的编程 / 耳麦接口。
3. 将 USB 端插入电脑。
4. **打开电台电源**，调到一个空闲频率（避免发射干扰）。
5. 打开 CHIRP 软件。

### 确认串口

- **Windows**：打开设备管理器 → "端口(COM 和 LPT)"，记下 COM 口号（如 COM3）。
- **macOS**：终端执行 `ls /dev/cu.usb*`，记下设备路径。
- **Linux**：终端执行 `ls /dev/ttyUSB*` 或 `ls /dev/ttyACM*`，记下设备路径。

## 基本操作

### 从电台读取数据

1. 点击菜单 `Radio` → `Download From Radio`。
2. 在弹出的对话框中：
   - **Port**：选择编程线对应的串口。
   - **Vendor**：选择电台品牌（如 Baofeng）。
   - **Model**：选择电台型号（如 UV-5R）。
3. 点击 `OK`，等待读取完成。
4. 读取成功后，信道列表将显示在主界面中。

::: warning 读取失败怎么办
- 确认串口选择正确。
- 确认电台已开机且音量不为零（部分电台需要音量旋钮打开才能通信）。
- 尝试降低通信速率：某些克隆版电台需要更低的波特率。
- 检查编程线连接是否牢固。
:::

### 编辑频率

读取数据后，主界面会显示一个类似电子表格的信道列表。各列含义如下：

| 列名 | 说明 |
|------|------|
| Loc | 信道编号 |
| Frequency | 接收频率（MHz） |
| Name | 信道名称（最多 6-8 个字符，取决于电台型号） |
| Duplex | 双工方向：Off（单工）、+（正偏移）、-（负偏移） |
| Offset | 频率偏移量（MHz），用于中继台 |
| Tone | 亚音频类型：Tone（仅发送 CTCSS）、TSQL（收发均使用 CTCSS）、DTCS（DCS 码） |
| rToneFreq | 发射 CTCSS 亚音频频率 |
| cToneFreq | 接收 CTCSS 亚音频频率 |
| DtcsCode | DCS 码 |
| Mode | 调制模式：FM（宽带）、NFM（窄带）、AM |
| TStep | 调谐步进（kHz） |
| Power | 发射功率：High / Mid / Low |

**编辑方法：**

1. 双击需要编辑的单元格。
2. 输入或从下拉菜单选择值。
3. 按 `Enter` 确认。
4. 重复操作直到完成所有信道的编辑。

### 添加中继台信道示例

以北京地区某 VHF 中继台为例：

| 项目 | 值 |
|------|-----|
| Frequency | 145.350 |
| Name | BJ RPT |
| Duplex | - |
| Offset | 0.600 |
| Tone | Tone |
| rToneFreq | 88.5 |
| Mode | FM |
| Power | High |

这表示：接收频率 145.350 MHz，发射频率 144.750 MHz（负偏移 0.6 MHz），发射时附加 88.5 Hz CTCSS 亚音频。

### 写入电台

1. 编辑完成后，点击 `Radio` → `Upload To Radio`。
2. 确认串口和电台型号。
3. 点击 `OK`，等待写入完成。
4. 写入完成后在电台上确认信道数据是否正确。

::: danger 重要提醒
写入操作会覆盖电台中的所有信道数据。如需保留原有数据，请先读取再修改，不要使用空白模板直接写入。
:::

## 导入与导出

### 导出为文件

1. 点击 `File` → `Save As`。
2. 选择保存格式：
   - `.img` — CHIRP 原生格式，保留所有电台特有的设置。
   - `.csv` — CSV 格式，方便用 Excel 编辑或在不同电台之间共享信道。
   - `.chirp` — CHIRP 项目格式。
3. 选择保存位置，点击保存。

### 导入文件

1. 点击 `File` → `Open`，打开之前保存的文件。
2. 如果要将其他来源的信道导入当前电台配置：
   - 打开目标电台的配置（已从电台读取）。
   - 点击 `File` → `Import`，选择要导入的 `.csv` 或 `.img` 文件。
   - 选择要导入的信道，确认目标信道位置。
   - 写入电台。

### 从网络导入频率

CHIRP 支持从在线数据库导入频率信息：

1. 点击 `Radio` → `Query Source`。
2. 选择数据源（如 RepeaterBook、RadioReference 等）。
3. 输入搜索条件（位置、频率范围等）。
4. 选择需要的频率，导入到当前配置中。

::: tip 提示
在线数据库主要收录北美和欧洲的中继台信息。国内中继台信息可以从各地业余无线电协会获取，手动录入或通过 CSV 文件导入。
:::

## 支持的电台列表

CHIRP 支持的电台型号非常多，以下列出国内常见的型号：

### 宝锋（Baofeng）

- UV-5R / UV-5R Plus / UV-5RTP
- UV-82 / UV-82HP
- BF-888S
- BF-F8HP
- UV-9R / UV-9R Plus
- BF-9500（车载台）
- GT-3TP

### 泉盛（Quansheng）

- UV-K5 / UV-K5(8) / UV-K6
- TG-UV2 / TG-UV2Plus（车载台）

### TYT

- TH-UV88
- TH-9800（车载台）
- MD-380 / MD-UV380（DMR 数字电台）
- MD-9600（DMR 车载台）

### 八重洲（Yaesu）

- FT-60R
- FT-8900R（车载台）
- FT-2980R（车载台）
- VX-6R / VX-7R / VX-8R

### 建伍（Kenwood）

- TM-V71A（车载台）
- TM-D710（车载台）
- TH-D72A

### 艾可慕（ICOM）

- IC-2730（车载台）
- ID-5100（车载台）

### 其他品牌

- Anytone AT-778UV
- Retevis RT-95 / RT-98
- Leixen VV-898

::: tip 查看完整列表
完整的支持电台列表请访问：https://chirp.danplanet.com/projects/chirp/wiki/Home
在网页中搜索你的电台型号即可确认是否支持。
:::

## 常见问题

### CHIRP 找不到我的电台型号

- 确保使用的是最新版本的 CHIRP。新电台的支持会在新版本中添加。
- 尝试选择同系列的其他型号（如 UV-5R 的衍生版本通常可以选择 UV-5R）。
- 查看 CHIRP 官方 wiki 确认该型号是否已被支持。

### 读取 / 写入过程中报错 "Clone failed"

- 这是最常见的错误。可能的原因和解决方法：
  1. **串口选择错误**：重新确认正确的串口号。
  2. **编程线接触不良**：重新拔插编程线的 K 头。
  3. **电台型号选择错误**：确认选择了正确的品牌和型号。
  4. **驱动问题**：重新安装编程线驱动。
  5. **电台未就绪**：确认电台已开机，音量旋钮已打开。

### 中文信道名称显示乱码

- 部分电台不支持中文信道名称（硬件限制，仅支持 ASCII 字符）。
- 支持中文的电台（如部分 TYT 和泉盛型号）需要使用 UTF-8 编码。
- 建议使用英文或拼音缩写作为信道名称以确保兼容性。

### 如何在两台不同型号的电台之间复制信道

1. 从源电台读取数据，导出为 `.csv` 文件。
2. 从目标电台读取数据。
3. 使用 `File` → `Import` 导入之前导出的 `.csv` 文件。
4. 根据提示调整信道映射。
5. 写入目标电台。

::: warning 注意
不同型号电台的功能和参数范围可能不同（如信道名称长度、功率档位等）。导入时 CHIRP 会自动适配，但建议导入后检查一遍各信道的设置是否正确。
:::

### CHIRP 在 Linux 上无法访问串口

```bash
# 检查串口设备权限
ls -la /dev/ttyUSB0

# 将当前用户添加到 dialout 组
sudo usermod -aG dialout $USER

# 注销并重新登录，或执行以下命令使组变更立即生效
newgrp dialout
```

如果使用 Flatpak 版本，还需要授予串口访问权限：

```bash
flatpak override --user --device=all com.danplanet.chirp
```
