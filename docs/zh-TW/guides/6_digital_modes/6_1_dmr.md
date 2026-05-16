# DMR 數位中繼

DMR（Digital Mobile Radio）是由歐洲電信標準協會（ETSI）制定的數位無線電標準。它最初為商業無線電市場設計，後來被業餘無線電社群廣泛採用，成為目前最流行的數位語音模式之一。

## DMR 基本概念

### 時分多工（TDMA）

DMR 使用時分多工（Time Division Multiple Access）技術，在一個 12.5 kHz 的頻寬內提供兩個獨立的時槽（Time Slot）：

- **時槽 1（TS1）**：第一個通話頻道
- **時槽 2（TS2）**：第二個通話頻道

這意味著一個 DMR 中繼站可以同時容納兩組獨立的通話，頻譜效率是類比 FM 的兩倍。

### 通話群組（Talkgroup, TG）

通話群組是 DMR 中用於組織通信的邏輯分組。你可以將它理解為不同的「頻道」或「聊天室」：

- **TG 1**：全球通話群組（Worldwide）
- **TG 460**：中國大陸通話群組
- **TG 466**：台灣通話群組
- **TG 91**：全球英語通話群組
- **TG 9**：本地通話群組

不同的中繼站可能連接不同的通話群組，操作前需要確認。

### Color Code

Color Code（色碼）類似於類比 FM 中的 CTCSS 亞音，用於區分同頻率上的不同 DMR 系統。常見值為 1。

### DMR ID

每個 DMR 使用者需要一個唯一的 DMR ID（7 位數字），類似於數位世界中的呼號。DMR ID 需要在 RadioID.net 網站上申請註冊。

## DMR 網路

### BrandMeister

BrandMeister 是全球最大的業餘無線電 DMR 網路：

- 連接全球數千台中繼站
- 支援動態通話群組切換
- 提供網頁控制台（Self-Care Dashboard）
- 支援 Hotspot 連線
- 使用者可以透過網頁或 App 監聽

### TGIF

另一個受歡迎的 DMR 網路：

- 規模小於 BrandMeister 但社群活躍
- 有一些獨特的通話群組和功能

### DMR-MARC

較早建立的 DMR 網路，主要在北美地區使用。

## 所需設備

### DMR 手持機

- **寶鋒 DM-1801**：入門級 DMR 手持機
- **Anytone AT-D878UVII Plus**：中高階，功能豐富，支援 APRS
- **Anytone AT-D578UV**：車機型，功率更大
- **Radioddity GD-77**：入門級，支援 OpenGD77 開源韌體
- **TYT MD-380 / MD-UV380**：經典入門機型

### Hotspot（熱點）

如果你的位置收不到 DMR 中繼站的信號，可以使用 Hotspot 設備透過網際網路連接到 DMR 網路：

- **Pi-Star**：基於 Raspberry Pi 的開源 Hotspot 系統
- **MMDVM 板**：Multi-Mode Digital Voice Modem，支援 DMR、C4FM、D-STAR 等
- **SharkRF openSPOT**：商業 Hotspot 產品，設定簡單
- **ZUMspot / MMDVM_HS**：常見的 MMDVM 硬體

Hotspot 的工作原理：

1. 你的 DMR 手持機發射信號到 Hotspot（距離通常幾公尺到幾十公尺）
2. Hotspot 透過 Wi-Fi 或有線網路將信號傳送到 DMR 伺服器
3. DMR 伺服器將信號轉發到目標通話群組
4. 反方向亦然

## 設定步驟

### 1. 申請 DMR ID

1. 前往 RadioID.net
2. 使用你的業餘無線電呼號註冊
3. 申請一個 DMR ID
4. 通常在 24-48 小時內核發

### 2. 編寫 Code Plug

DMR 電台的設定檔稱為「Code Plug」，包含：

- **通訊錄（Contacts）**：DMR 使用者和通話群組的清單
- **頻道（Channels）**：每個頻道的頻率、時槽、通話群組等設定
- **區域（Zones）**：頻道的分組
- **掃描清單（Scan Lists）**：掃描監聽的頻道組合

### 3. Code Plug 編程

使用電台對應的 CPS（Customer Programming Software）軟體：

1. 下載對應機型的 CPS 軟體
2. 設定基本資訊（你的 DMR ID、呼號）
3. 新增通話群組到通訊錄
4. 建立頻道，設定頻率、時槽、色碼和通話群組
5. 將頻道分配到區域
6. 寫入電台

### 4. 下載通訊錄

DMR 電台可以載入全球 DMR 使用者的通訊錄，這樣在收到對方信號時會直接顯示對方的呼號和名字。

- 從 RadioID.net 下載最新的使用者資料庫
- 使用 CPS 軟體匯入到電台
- 注意電台的記憶容量限制

## 操作方式

### 透過中繼站

1. 設定好對應中繼站的頻率、時槽和色碼
2. 選擇要使用的通話群組
3. 按下 PTT 發射，像使用 FM 中繼一樣通話
4. 螢幕上會顯示對方的 DMR ID 和呼號

### 透過 Hotspot

1. 確認 Hotspot 已連接到 DMR 網路（BrandMeister 或 TGIF）
2. 將電台設定到 Hotspot 的頻率
3. 選擇通話群組
4. 開始通話

### 呼叫特定的人

DMR 支援「個人呼叫」（Private Call），可以直接呼叫指定 DMR ID 的使用者，類似打電話。但這個功能在某些網路上可能有限制。

## DMR 的優缺點

### 優點

- **語音品質**：在信號良好時，數位語音清晰度高
- **頻譜效率**：TDMA 技術使頻譜利用率翻倍
- **全球互連**：透過網路可與全球火腿通聯
- **通訊錄**：自動識別對方的呼號和名字
- **設備豐富**：市場上有大量 DMR 設備可選

### 缺點

- **懸崖效應**：信號衰減到一定程度時會突然斷裂（不像 FM 會逐漸變差）
- **設定複雜**：Code Plug 的編寫對新手來說有一定門檻
- **依賴網路**：Hotspot 方式需要網際網路
- **不相容**：與 C4FM、D-STAR 等其他數位系統不直接相容

::: tip 入門建議
新手建議從 BrandMeister 網路開始，它的社群最大、文件最豐富。如果當地沒有 DMR 中繼站，購買一個 Pi-Star Hotspot 是最經濟的方案。Anytone AT-D878UVII Plus 是目前功能與價格兼顧的最佳 DMR 手持機選擇。
:::
