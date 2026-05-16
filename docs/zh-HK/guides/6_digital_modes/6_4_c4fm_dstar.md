# C4FM 與 D-STAR

C4FM（System Fusion）同 D-STAR 係兩個主要嘅業餘無線電數碼語音系統。佢哋各有特色，由唔同嘅廠商主導，提供清晰嘅數碼語音同各種增值功能。

## C4FM / System Fusion

### 概述

C4FM 係八重洲（Yaesu）開發嘅數碼語音系統，全稱 System Fusion。

**技術特點**：

- 使用 C4FM（Continuous 4-level FM）調制
- 帶寬 12.5 kHz
- 支持語音同數據混合模式
- 可以同 FM 類比模式自動切換（AMS - Automatic Mode Select）

### 工作模式

| 模式 | 數據率 | 用途 |
|------|--------|------|
| DN（Digital Narrow） | 語音+數據 | 標準數碼語音+低速數據 |
| VW（Voice Wide） | 全語音 | 最佳語音質素 |
| DW（Data Wide） | 高速數據 | 圖片傳輸等 |
| FM（類比） | — | 兼容傳統 FM |

### AMS（自動模式選擇）

C4FM 嘅一大優勢係 AMS 功能：

- 電台可以自動偵測接收到嘅信號係 FM 定係 C4FM
- 你可以同用 FM 嘅電台同用 C4FM 嘅電台都通信
- 降低咗升級到數碼嘅門檻

### Wires-X 網絡

Wires-X 係八重洲嘅互聯網連接系統：

- 透過互聯網連接唔同嘅中繼器同電台
- 類似 DMR 嘅 BrandMeister 網絡
- 可以加入唔同嘅 Room（房間）同 Node（節點）
- 支持文字消息同位置分享

**常用 Room**：

- Room 21080：中國
- Room 27201：亞太地區

### C4FM 設備

| 型號 | 類型 | 特點 |
|------|------|------|
| 八重洲 FT-5DR | 手持機 | 觸摸屏、GPS、藍牙 |
| 八重洲 FT-3DR | 手持機 | 上一代旗艦 |
| 八重洲 FT-70DR | 手持機 | 入門 C4FM |
| 八重洲 FTM-300DR | 車機 | GPS、藍牙、Wires-X |
| 八重洲 FTM-500DR | 車機 | 觸摸屏、最新旗艦 |
| 八重洲 FTM-100DR | 車機 | 經典之選 |

### C4FM 嘅優缺點

**優點**：

- AMS 自動模式切換，兼容 FM
- 語音質素好（特別係 VW 模式）
- 設備選擇豐富（八重洲產品線齊全）
- Wires-X 系統成熟
- GPS 位置分享

**缺點**：

- 只有八重洲生產 C4FM 設備
- 中繼器數量比 DMR 少
- 唔係開放標準

## D-STAR

### 概述

D-STAR（Digital Smart Technologies for Amateur Radio）係由日本 JARL 開發、ICOM 主導推廣嘅數碼語音同數據通信標準。

**技術特點**：

- 使用 GMSK 調制（語音）同 OFDM（高速數據）
- 語音模式帶寬 6.25 kHz
- AMBE 語音編碼
- 支持呼號路由

### 工作模式

| 模式 | 數據率 | 帶寬 | 用途 |
|------|--------|------|------|
| DV（Digital Voice） | 4.8 kbps | 6.25 kHz | 語音+低速數據 |
| DD（Digital Data） | 128 kbps | 150 kHz | 高速數據 |

### 呼號路由

D-STAR 嘅獨特功能之一係呼號路由（Callsign Routing）：

- 系統記住每個呼號最後使用嘅中繼器
- 你可以直接呼叫某個呼號，系統會自動找到佢
- 唔需要知道對方喺邊個中繼器上

### 反射器（Reflector）系統

D-STAR 嘅互聯網連接系統：

- **DCS 反射器**：最常用嘅類型
- **REF 反射器**：傳統反射器
- **XLX 反射器**：支持多模式（D-STAR + DMR + C4FM）

### D-STAR 設備

| 型號 | 類型 | 特點 |
|------|------|------|
| ICOM ID-52A | 手持機 | 旗艦，觸摸屏 |
| ICOM ID-51A Plus2 | 手持機 | 經典之選 |
| ICOM ID-31A Plus | 手持機 | UHF only |
| ICOM IC-9700 | 基地台 | VHF/UHF/1.2G |
| ICOM IC-705 | 便攜 | HF-UHF，D-STAR |
| 建伍 TH-D75A | 手持機 | D-STAR + APRS |

### D-STAR 嘅優缺點

**優點**：

- 呼號路由功能獨特且實用
- 帶寬效率高（6.25 kHz）
- 支持同時傳輸語音同低速數據
- 歷史悠久，全球中繼器眾多
- 建伍亦有支持 D-STAR 嘅設備

**缺點**：

- 設備選擇主要限於 ICOM（同少量建伍）
- 語音編碼器（AMBE）係專利技術
- 喺信號邊緣嘅表現有「斷崖效應」
- FM 兼容性唔如 C4FM

## C4FM vs D-STAR vs DMR 對比

| 特性 | C4FM | D-STAR | DMR |
|------|------|--------|-----|
| 開發者 | 八重洲 | JARL/ICOM | ETSI（開放標準） |
| 語音編碼 | AMBE+2 | AMBE | AMBE+2 |
| FM 兼容 | AMS 自動切換 | 唔兼容 | 唔兼容 |
| 設備品牌 | 只有八重洲 | 主要 ICOM | 多品牌 |
| 設備價格 | 中-高 | 中-高 | 低-高 |
| 互聯網網絡 | Wires-X | 反射器 | BrandMeister等 |
| 全球中繼器數量 | 中等 | 多 | 最多 |
| 語音質素 | 好（VW最佳） | 好 | 好 |
| 時隙數量 | 1 | 1 | 2（TDMA） |

## HotSpot 多模式支持

如果你想嘗試多種數碼模式，一個 MMDVM HotSpot 可以同時支持 DMR、D-STAR 同 C4FM：

- 使用 Pi-Star 軟件
- 自動切換模式
- 一個設備支持三種數碼系統
- 成本低廉

## 點樣揀選

### 如果你嘅朋友用某個系統

跟佢哋用同一個系統係最實際嘅選擇。

### 如果你所在地區中繼器多

選擇當地中繼器最多嘅系統。

### 如果你想最大嘅靈活性

DMR 設備選擇最多、價格最低。

### 如果你已經有八重洲設備

C4FM 可能係最方便嘅選擇。

### 如果你已經有 ICOM 設備

D-STAR 可能係最自然嘅選擇。

### 如果你想要全部

一個 MMDVM HotSpot 加上一部支持 FM 嘅電台，就可以透過 HotSpot 使用全部三種數碼模式。

## 註冊要求

### D-STAR

需要喺相關嘅 D-STAR 網關系統中註冊你嘅呼號。

### C4FM / Wires-X

通常唔需要額外註冊，但某啲功能可能需要。

### DMR

需要喺 radioid.net 申請 DMR ID。
