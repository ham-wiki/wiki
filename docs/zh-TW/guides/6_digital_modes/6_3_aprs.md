# APRS 系統

APRS（Automatic Packet Reporting System，自動封包回報系統）是由 Bob Bruninga（WB4APR）在 1980 年代開發的即時戰術通信系統。它結合了無線電封包通信和 GPS 定位，可以在地圖上即時顯示各電台的位置，並傳輸文字訊息、氣象資料等多種資訊。

## APRS 的功能

### 位置追蹤

APRS 最常見的用途是位置追蹤：

- 車輛行進路線追蹤
- 登山健行的路徑記錄
- 活動中的參與者位置監控
- 應急通信中的資源調度

### 訊息傳遞

APRS 支援站對站的文字訊息，類似簡訊功能。

### 氣象資料

許多 APRS 氣象站會定期回報溫度、濕度、風速、雨量等氣象資料。

### 遙測資料

APRS 可以傳輸各種遙測資料，如電池電壓、溫度感測器讀數等。

### 物件與公告

可以在 APRS 地圖上放置物件（如活動地點、臨時中繼站位置）和公告。

## APRS 的工作原理

### 基本架構

1. **行動台**：裝有 GPS 和 APRS 功能的電台，定期發射位置封包
2. **數位中繼站（Digipeater）**：接收 APRS 封包並轉發，擴大覆蓋範圍
3. **I-Gate（Internet Gateway）**：將無線電上的 APRS 封包轉發到網際網路
4. **APRS-IS 伺服器**：全球聯網的 APRS 資料伺服器
5. **顯示平台**：aprs.fi、APRS Direct 等網站和 App 顯示即時資料

### 工作頻率

- **台灣**：144.640 MHz（VHF）
- **中國大陸**：144.640 MHz
- **日本**：144.660 MHz
- **北美**：144.390 MHz
- **歐洲**：144.800 MHz
- **澳洲**：145.175 MHz

所有 APRS 操作都使用 **1200 baud AFSK**（Audio Frequency Shift Keying）調變，頻率為 1200 Hz 和 2200 Hz。

### 封包格式

APRS 使用 AX.25 封包協定。一個典型的 APRS 位置封包包含：

- 來源呼號和 SSID（如 BV2XXX-9 表示車載站）
- 目的地呼號（通常為 APxxxx，表示軟體版本）
- 數位中繼路徑（如 WIDE1-1,WIDE2-1）
- 位置資料（經緯度）
- 符號（車輛、房屋、氣象站等圖標）
- 備註文字

### SSID 慣例

APRS 呼號後面的 SSID 數字代表不同的站台類型：

| SSID | 類型 |
|------|------|
| -0 | 固定站 |
| -1 | 數位中繼站 |
| -2 | I-Gate |
| -5 | 智慧型手機 |
| -7 | 手持機 |
| -8 | 船舶 |
| -9 | 車載站 |
| -10 | 網路連接 |
| -14 | 卡車 |
| -15 | 通用 |

## 所需設備

### 方案一：專用 APRS 電台

- **Kenwood TM-D710GA**：內建完整 APRS TNC 和 GPS，最佳選擇
- **Kenwood TH-D75A**：手持機，內建 APRS 和 D-STAR
- **Yaesu FTM-400XDR / FTM-200DR**：支援 APRS 功能
- **Yaesu FT-5DR**：手持機，支援 APRS

### 方案二：電台 + TNC

使用一般的 VHF FM 電台搭配外接 TNC（Terminal Node Controller）：

- **Mobilinkd TNC3/TNC4**：藍牙 TNC，連接手持機和手機
- **Argent Data Tracker 系列**：專用 APRS 追蹤器
- **DIY Arduino TNC**：使用 Arduino 自製簡易 TNC

### 方案三：電台 + 音頻介面 + 電腦/手機

- 將電台的音頻輸出/輸入連接到電腦或手機
- 使用 APRS 軟體進行編碼和解碼

### 方案四：純網路 APRS

不需要無線電設備，透過手機 App 直接連接 APRS-IS：

- **APRSdroid**（Android）
- **APRS.fi App**（iOS/Android）

但這不是真正的無線電 APRS，只是利用行動數據網路。

## 軟體資源

### 地圖顯示

- **aprs.fi**：最受歡迎的 APRS 即時地圖網站
- **APRS Direct**：另一個即時地圖平台
- **OpenAPRS**：開源的 APRS 地圖

### 電腦軟體

- **YAAC（Yet Another APRS Client）**：跨平台 Java APRS 客戶端
- **UI-View32**：經典的 Windows APRS 軟體（已停止更新但仍可用）
- **Xastir**：Linux 上的 APRS 軟體
- **APRSIS32**：Windows APRS 客戶端

### 手機 App

- **APRSdroid**：Android 上功能最完整的 APRS App
- **APRS Pro Ultimate**：iOS APRS App

## 設定與操作

### 基本設定

1. **呼號與 SSID**：設定你的呼號和適當的 SSID（車載用 -9，手持用 -7）
2. **APRS 路徑**：設定數位中繼路徑
   - 推薦路徑：`WIDE1-1,WIDE2-1`（適合大多數情況）
   - 都市區域：`WIDE1-1,WIDE2-1` 或更短
   - 偏遠地區：可能需要 `WIDE1-1,WIDE2-2`
3. **信標間隔**：設定位置回報的頻率
   - 車載移動：1-3 分鐘
   - 固定站：10-30 分鐘
   - 也可以使用智慧信標（SmartBeaconing）根據速度和方向變化自動調整

### SmartBeaconing

SmartBeaconing 是一種智慧信標演算法：

- 高速行駛時，信標間隔短
- 低速或靜止時，信標間隔長
- 轉彎時自動增加信標頻率
- 可以在有效追蹤的同時減少頻道佔用

### 發送訊息

APRS 支援站對站的訊息功能：

1. 在 APRS 軟體中選擇「Send Message」
2. 輸入對方呼號（含 SSID）
3. 輸入訊息文字（最多 67 個字元）
4. 發送

APRS 訊息具有確認機制，對方收到後會自動回覆 ACK。

## APRS 的應用場景

### 車隊管理

多車出行時，每台車都可以透過 APRS 在地圖上即時顯示位置，方便管理和協調。

### 戶外活動

登山、自行車、馬拉松等活動中，參與者攜帶 APRS 設備可以讓支援團隊掌握每個人的即時位置。

### 應急通信

在自然災害中，APRS 可以用於：
- 追蹤救援車輛和人員位置
- 標記避難所、醫療站等重要地點
- 傳遞簡短的文字訊息

### 氣象監測

APRS 氣象站可以自動回報氣象資料，建立社群氣象觀測網路。

## APRS 操作禮儀

1. **信標間隔不要太短**：過頻繁的信標會佔用頻道資源
2. **使用適當的路徑**：不要使用過長的路徑（如 WIDE1-1,WIDE2-2 通常已足夠）
3. **訊息簡短**：APRS 頻道頻寬有限，訊息應簡潔
4. **避免重複**：不要在固定站設定過短的信標間隔

::: tip 入門建議
如果你想體驗 APRS，最簡便的方式是在手機上安裝 APRSdroid（Android）或 APRS.fi App，先觀察你所在地區的 APRS 活動。當你準備好進入無線電 APRS 時，一台支援 APRS 的手持機（如 Yaesu FT-5DR）搭配內建 GPS 是最方便的入門方案。
:::
