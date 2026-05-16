# C4FM 与 D-STAR

C4FM（System Fusion）和 D-STAR 是业余无线电领域两种重要的数字语音模式，分别由 Yaesu（八重洲）和 ICOM 开发。它们各有特色，都拥有活跃的用户社区。

## C4FM / Yaesu System Fusion

### 什么是 C4FM

C4FM（Continuous 4-level Frequency Modulation）是 Yaesu 开发的数字语音系统，商业名称为 **System Fusion**。它使用 C4FM 调制方式，在 12.5 kHz 信道带宽内传输数字语音和数据。

### 技术特点

| 参数 | 值 |
|------|-----|
| 调制方式 | C4FM（4 级连续频率调制） |
| 数据速率 | 9600 bps |
| 语音编解码器 | AMBE+2 |
| 信道带宽 | 12.5 kHz |
| 模式 | DN（Digital Narrow）/ VW（Voice Wide）/ DW（Data Wide） |

### C4FM 通信模式

C4FM 提供三种通信模式：

| 模式 | 说明 | 用途 |
|------|------|------|
| **DN（Digital Narrow）** | 半速率语音 + 数据 | 最常用模式，支持同时传输语音和 GPS 位置等数据 |
| **VW（Voice Wide）** | 全速率语音 | 音质最好，但不支持同时传数据 |
| **DW（Data Wide）** | 全速率数据 | 用于高速数据传输，如图片 |

> **推荐：** 日常通联使用 **DN 模式**，它在语音质量和数据功能之间取得了最佳平衡。

### AMS（自动模式选择）

System Fusion 的一大特色是 **AMS（Automatic Mode Select）** 功能：

- Fusion 中继器可以自动识别接收到的信号是模拟 FM 还是数字 C4FM
- 使用模拟 FM 电台也可以通过 Fusion 中继器通信
- 极大降低了从模拟到数字的过渡门槛

### 常见 C4FM 设备

**手持台：**

| 型号 | 特点 |
|------|------|
| **Yaesu FT5D** | 最新旗舰手持，彩色触屏，C4FM + APRS，蓝牙 |
| **Yaesu FT3D** | 双频手持，C4FM + APRS，触摸屏 |
| **Yaesu FT2D** | 双频手持，C4FM，GPS |
| **Yaesu FT-70D** | 入门级 C4FM 手持，价格实惠 |

**车载/固定台：**

| 型号 | 特点 |
|------|------|
| **Yaesu FTM-500D** | 最新车载台，C4FM，50W |
| **Yaesu FTM-400XD** | 车载台，C4FM + APRS，触摸屏 |
| **Yaesu FTM-300D** | 车载台，C4FM，蓝牙 |
| **Yaesu FTM-100D** | 紧凑型车载台，C4FM |
| **Yaesu DR-2X** | System Fusion 中继器 |

## Wires-X

### 什么是 Wires-X

Wires-X（Wide-coverage Internet Repeating Enhancement System）是 Yaesu 开发的通过互联网连接 C4FM 中继器和节点的网络系统。

**功能：**
- 将世界各地的 C4FM 中继器和节点通过互联网互联
- 用户可以连接到不同的"房间（Room）"进行群组通话
- 支持语音、文字消息和图片传输
- 类似于 D-STAR 的反射器概念

### Wires-X 的组成

- **节点（Node）** — 连接到互联网的 C4FM 电台或中继器
- **房间（Room）** — 虚拟聊天室，多个节点可以连接到同一个房间
- **PDN（Portable Digital Node）** — 使用 HRI-200 接口盒将 C4FM 手持/车载台变成网络节点

### 常用 Wires-X 房间

| 房间名 | 编号 | 说明 |
|--------|------|------|
| America-LINK | 21080 | 北美活跃房间 |
| BM-China | — | 中国相关房间 |
| CQ-UK | 27649 | 英国活跃房间 |
| YSF-APAC | — | 亚太地区房间 |

> **提示：** 房间列表在不断变化，建议通过 Wires-X 搜索功能实时查找活跃的房间。

### 如何使用 Wires-X

**通过中继器接入：**

1. 找到一个支持 Wires-X 的本地中继器
2. 在你的电台上长按 **DX 键**（或对应按键）进入 Wires-X 搜索界面
3. 搜索目标房间名或编号
4. 选择并连接
5. 连接成功后即可在该房间中通话

**通过热点接入：**

- 使用支持 YSF 协议的热点（如 Pi-Star 配置为 YSF 模式）
- 连接到 YSF 反射器或 FCS 房间
- 部分 YSF 反射器与 Wires-X 房间有桥接

## D-STAR

### 什么是 D-STAR

D-STAR（Digital Smart Technologies for Amateur Radio）是由 JARL（日本业余无线电联盟）发起，ICOM 公司实现的数字语音和数据通信标准。它是业余无线电领域最早的数字语音标准之一。

### 技术特点

| 参数 | DV（数字语音） | DD（数字数据） |
|------|--------------|--------------|
| 调制方式 | GMSK | GMSK |
| 数据速率 | 4800 bps | 128 kbps |
| 语音编解码器 | AMBE | — |
| 语音数据速率 | 3600 bps | — |
| 低速数据 | 1200 bps | — |
| 信道带宽 | 6.25 kHz | 150 kHz |

### D-STAR 的核心概念

**呼号路由：**

D-STAR 最重要的特性是**呼号路由（Callsign Routing）**。在 D-STAR 网络中，你可以：

- 通过呼号直接呼叫特定的 HAM，无论他连接到哪个中继器
- 系统会自动找到对方最后注册的中继器并路由你的通话
- 这在其他数字模式中是独特的功能

**注册：**

使用 D-STAR 网络前需要在 D-STAR 网关注册你的呼号：

1. 找到一个 D-STAR 中继器
2. 将你的呼号设置到电台中
3. 在中继器上发射一次（Key up）
4. 中继器管理员审核后将你的呼号加入系统
5. 或者通过在线注册页面提交注册申请

### D-STAR 中继器结构

一个完整的 D-STAR 中继器通常包含多个模块：

| 模块 | 频段 | 用途 |
|------|------|------|
| **模块 A** | 23cm（1.2 GHz） | 数字语音 |
| **模块 B** | 70cm（430 MHz） | 数字语音（最常用） |
| **模块 C** | 2m（144 MHz） | 数字语音 |
| **模块 D** | 23cm（1.2 GHz） | 高速数字数据 |

> **注意：** 并非所有 D-STAR 中继器都配备全部模块，很多只有模块 B（70cm）或模块 C（2m）。

### 常见 D-STAR 设备

**ICOM 手持台：**

| 型号 | 特点 |
|------|------|
| **ICOM ID-52A** | 最新旗舰手持，彩色触屏，D-STAR，GPS，蓝牙 |
| **ICOM ID-52Plus** | ID-52A 升级版 |
| **ICOM ID-51A Plus2** | 双频手持，D-STAR，GPS |
| **ICOM ID-31A Plus** | 单频（UHF）手持，小巧 |

**ICOM 车载/固定台：**

| 型号 | 特点 |
|------|------|
| **ICOM IC-9700** | VHF/UHF/23cm 全模式台，D-STAR |
| **ICOM ID-5100A** | 车载台，D-STAR，触摸屏 |
| **ICOM IC-905** | VHF/UHF/SHF 台，D-STAR |

**其他品牌：**

- **Kenwood TH-D75A** — 支持 D-STAR 的 Kenwood 手持台
- 部分 DMR 电台刷入 OpenGD77 固件后也可以访问 D-STAR 热点

## D-STAR 反射器（Reflector）

### 什么是反射器

反射器（Reflector）是 D-STAR 网络中的虚拟会议室。多个中继器可以连接到同一个反射器，实现跨区域的群组通话。

反射器名称格式为 `REFxxx`（如 REF001）加上一个模块字母（A-Z）。

### 常用反射器

| 反射器 | 说明 |
|--------|------|
| **REF001 C** | 全球最活跃的英语反射器之一 |
| **REF003 C** | 同样非常活跃 |
| **REF014 C** | 亚太地区常用 |
| **XLX/XRF** | 扩展反射器系统，功能更丰富 |

### 连接到反射器

在 D-STAR 电台上，通过设置 **URCALL（目标呼号）** 来连接或断开反射器：

| 操作 | URCALL 设置 |
|------|------------|
| 连接到 REF001 模块 C | `REF001CL`（最后的 L 表示 Link） |
| 断开当前反射器 | `       U`（7 个空格 + U，表示 Unlink） |
| 查询当前连接状态 | `       I`（7 个空格 + I，表示 Info） |

连接成功后，将 URCALL 改回 `CQCQCQ` 即可正常通话。

## XLX 反射器

XLX 是 D-STAR 反射器的扩展系统，功能比传统 REF 反射器更丰富：

- 支持 D-STAR、DMR、YSF、P25 等多种模式桥接
- 每个 XLX 反射器有 26 个模块（A-Z）
- 全球有大量 XLX 反射器运行
- 可以在 xlxreflector.com 查看各反射器状态

## 使用热点接入 C4FM / D-STAR

如果你所在地区没有 C4FM 或 D-STAR 中继器，可以通过热点接入。

### Pi-Star 配置

Pi-Star 支持 D-STAR 和 YSF（C4FM）模式：

**D-STAR 配置：**

1. 在 Pi-Star 中启用 D-STAR 模式
2. 设置你的呼号
3. 选择 D-STAR 网关服务器
4. 配置默认反射器
5. 设置频率（选择不干扰其他电台的频率）

**YSF（C4FM）配置：**

1. 在 Pi-Star 中启用 YSF 模式
2. 设置你的呼号
3. 选择 YSF 反射器或 FCS 房间
4. 配置频率

### YSF 反射器

YSF 反射器是独立于 Wires-X 的 C4FM 网络互联系统：

- 免费开源
- 全球有大量 YSF 反射器
- 部分 YSF 反射器与 Wires-X 房间或其他网络（DMR、D-STAR）有桥接
- 可以在 ysfreflector.de 查看反射器列表

### FCS（Fusion Connect System）

FCS 是另一个 C4FM 反射器系统：

- 与 YSF 反射器兼容
- 提供额外的房间和功能
- 部分 Pi-Star 用户偏好 FCS

## C4FM 与 D-STAR 对比

| 特性 | C4FM (System Fusion) | D-STAR |
|------|---------------------|--------|
| 开发者 | Yaesu | ICOM (JARL) |
| 语音编解码器 | AMBE+2 | AMBE |
| 信道带宽 | 12.5 kHz | 6.25 kHz |
| 模拟兼容 | 是（AMS） | 否 |
| 呼号路由 | 不支持 | 支持 |
| 互联网互联 | Wires-X / YSF 反射器 | D-STAR 网关 / 反射器 |
| 设备品牌 | 仅 Yaesu | 主要是 ICOM，Kenwood 部分支持 |
| 入门成本 | 中等（FT-70D 较便宜） | 中高（ICOM 设备价格较高） |
| 热点支持 | 良好 | 良好 |
| 中国用户数量 | 较多 | 中等 |

## 如何选择

选择 C4FM 还是 D-STAR 取决于多个因素：

1. **当地中继器** — 查看你所在地区有哪种模式的中继器
2. **朋友使用什么** — 与同城 HAM 使用相同的系统更方便日常通联
3. **设备偏好** — 如果你已经有 Yaesu 或 ICOM 的设备
4. **预算** — C4FM 入门设备（如 FT-70D）价格相对友好
5. **功能需求** — 如果需要呼号路由，选择 D-STAR；如果需要模拟兼容，选择 C4FM

> **建议：** 如果你已经有一个 MMDVM 热点，它同时支持 DMR、C4FM 和 D-STAR。你可以先用热点体验不同模式，再决定投入哪个系统。使用热点时，一台支持对应模式的入门手持台即可。

## 跨模式桥接

现代数字业余无线电的一个趋势是跨模式桥接。通过 XLX 反射器、BrandMeister 网络等，DMR、C4FM 和 D-STAR 用户可以互相通联：

- 许多 XLX 反射器同时支持 D-STAR 和 DMR
- BrandMeister 网络可以桥接到 YSF 反射器
- 一些活跃的通话组/房间/反射器是多模式桥接的

这意味着即使你和对方使用不同的数字模式，通过合适的桥接通道也有可能实现通联。
