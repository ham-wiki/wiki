# C4FM 與 D-STAR

C4FM（System Fusion）和 D-STAR 是兩種主要由日系品牌開發的業餘無線電數位語音系統。它們各有特色，都提供了透過網際網路實現全球互連的能力。

## C4FM / Yaesu System Fusion

### 概述

C4FM 是 Yaesu 開發的數位語音系統，使用 C4FM（Continuous 4-level FM）調變技術。Yaesu 將整個生態系統稱為「System Fusion」，強調類比 FM 和數位 C4FM 模式之間的無縫切換。

### 技術特性

- **調變方式**：C4FM（4 階連續頻率調變）
- **頻寬**：12.5 kHz（與 FM 相同）
- **語音編解碼**：AMBE+2（與 DMR 相同的語音編碼器）
- **資料速率**：9.6 kbps
- **模式**：
  - **V/D（Voice/Data）**：語音 + 低速資料（常用模式）
  - **Voice FR（Full Rate）**：全速率語音，音質最佳
  - **Data FR**：全速率資料傳輸
  - **AMS（Automatic Mode Select）**：自動偵測類比/數位模式

### C4FM 的優勢

- **AMS 相容性**：中繼站可以同時接受 FM 和 C4FM 信號，類比使用者不會被排除
- **操作簡單**：不需要像 DMR 那樣編寫複雜的 Code Plug
- **良好的語音品質**：Full Rate 模式下語音品質優秀
- **GPS 內建**：許多 C4FM 設備內建 GPS，支援位置傳輸

### C4FM 設備

**手持機**：
- Yaesu FT-70DR：入門級 C4FM 手持機
- Yaesu FT-5DR：進階款，觸控螢幕、APRS

**車機**：
- Yaesu FTM-200DR：中階車機
- Yaesu FTM-300DR：多功能車機
- Yaesu FTM-500DR：旗艦車機

**中繼站**：
- Yaesu DR-2X：專用 C4FM/FM 中繼站

### WIRES-X 網路

WIRES-X（Wide-coverage Internet Repeater Enhancement System）是 Yaesu 的網路互連系統：

- 中繼站透過網際網路互連
- 使用「房間」（Room）和「節點」（Node）的概念
- 使用者可以透過 DTMF 或電台選單連接到不同的房間
- 支援文字訊息和圖像傳輸

**常用 WIRES-X 房間**：
- 可以在 WIRES-X 網頁上搜尋活躍的房間
- 部分房間與其他數位系統（如 BrandMeister DMR）橋接

### C4FM 操作方式

1. 將電台切換到 C4FM 模式（或 AMS 模式）
2. 設定好中繼站頻率和頻差
3. 按 PTT 發射即可——不需要設定 Color Code 或 Talkgroup
4. 如果中繼站支援 WIRES-X，可以在電台選單中連接到不同的房間

## D-STAR

### 概述

D-STAR（Digital Smart Technologies for Amateur Radio）是由日本業餘無線電聯盟（JARL）主導開發的開放標準數位通信系統。ICOM 是主要的設備製造商，但其他品牌（如 Kenwood、FlexRadio）也有支援 D-STAR 的產品。

### 技術特性

- **調變方式**：GMSK（Gaussian Minimum Shift Keying）
- **語音編解碼**：AMBE（DV 模式）
- **語音模式（DV）**：4.8 kbps，其中 2.4 kbps 語音 + 1.2 kbps FEC + 1.2 kbps 資料
- **高速資料模式（DD）**：128 kbps，用於網路連接（1.2 GHz 頻段）
- **頻寬**：6.25 kHz（DV 模式，比 FM 窄一半）

### D-STAR 的網路架構

D-STAR 擁有最成熟的網路互連系統：

- **中繼站（Repeater）**：本地的 D-STAR 中繼站
- **Gateway**：將中繼站連接到網際網路
- **Reflector**：類似 DMR 的 Talkgroup，用於多站互連
- **DCS / REF / XRF / XLX**：不同類型的 Reflector 伺服器

### 呼號路由（Callsign Routing）

D-STAR 最獨特的功能之一是呼號路由：

- 系統會記錄每個使用者最後使用的中繼站
- 你可以直接輸入對方的呼號進行呼叫
- 系統會自動將你的信號路由到對方所在的中繼站
- 類似手機的「撥號就能找到人」的體驗

### D-STAR 設備

**手持機**：
- ICOM ID-52A：旗艦手持機，彩色觸控螢幕、GPS、藍牙
- ICOM ID-31A Plus：輕便的 UHF D-STAR 手持機
- ICOM ID-51A Plus 2：雙頻 D-STAR 手持機

**車機**：
- ICOM ID-5100A：觸控螢幕雙頻車機
- ICOM IC-9700：全模式 VHF/UHF/1.2 GHz 電台

**其他**：
- Kenwood TH-D75A：支援 D-STAR 和 APRS 的手持機

### D-STAR 註冊

使用 D-STAR 需要在 D-STAR Gateway 上註冊你的呼號：

1. 找到你當地的 D-STAR 中繼站
2. 在該中繼站的 Gateway 管理員處註冊
3. 或使用線上註冊系統（如 D-STAR.su）
4. 註冊後你的呼號就能在全球 D-STAR 網路中被識別

### D-STAR 操作

1. 設定「MY」呼號（你的呼號）
2. 設定「UR」呼號（對方呼號或 CQCQCQ）
3. 設定「RPT1」（你使用的中繼站模組）
4. 設定「RPT2」（中繼站的 Gateway）
5. 按 PTT 發射

**連接 Reflector**：
- 使用特定的呼號格式連接到 Reflector
- 例如：UR 設為「REF001 CL」連接到 REF001 的 C 模組

## C4FM vs D-STAR 比較

| 項目 | C4FM | D-STAR |
|------|------|--------|
| 開發者 | Yaesu | JARL / ICOM |
| 語音品質 | 好（Full Rate 模式優秀） | 中等 |
| 頻寬 | 12.5 kHz | 6.25 kHz |
| 操作複雜度 | 低 | 中 |
| FM 相容性 | 優秀（AMS 模式） | 無 |
| 呼號路由 | 無（使用 WIRES-X 房間） | 有 |
| 設備價格 | 中等 | 中高 |
| 全球覆蓋 | 中等 | 良好 |
| 開放標準 | 否（Yaesu 專有） | 是（開放標準） |

## Hotspot 支援

C4FM 和 D-STAR 都可以透過 MMDVM Hotspot 使用：

- **Pi-Star**：支援 DMR、C4FM、D-STAR 等多種模式
- **MMDVM_HS 板**：配合 Raspberry Pi 使用
- Hotspot 讓你在收不到中繼站的地方也能連接到全球網路

### Pi-Star 設定要點

1. 下載 Pi-Star 映像並燒錄到 SD 卡
2. 設定 Wi-Fi 連線
3. 在 Pi-Star 網頁介面中配置：
   - 你的呼號和 DMR ID
   - 選擇要使用的模式（D-STAR、C4FM、DMR）
   - 設定 Reflector 或 WIRES-X 房間
4. 設定電台頻率與 Hotspot 頻率匹配

## 跨系統橋接

不同的數位語音系統之間可以透過軟體橋接互通：

- **DMR ↔ C4FM**：部分 BrandMeister Talkgroup 與 WIRES-X 房間橋接
- **DMR ↔ D-STAR**：部分 Talkgroup 與 D-STAR Reflector 橋接
- **C4FM ↔ D-STAR**：透過中間系統橋接
- **AllStar / EchoLink**：可以與多種數位系統橋接

::: tip 如何選擇？
- 如果你主要在意**操作簡便性**和**FM 相容性**：選擇 C4FM
- 如果你主要在意**呼號路由**和**全球覆蓋**：選擇 D-STAR
- 如果你主要在意**設備選擇多**和**價格**：選擇 DMR
- 如果你猶豫不決：買一個 Pi-Star Hotspot，它可以同時支援所有三種系統
:::
