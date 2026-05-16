# DMR 數碼中繼

DMR（Digital Mobile Radio）係一種開放嘅數碼無線電標準，最初為商業同公共安全通信而設計，後來被業餘無線電界廣泛採用。DMR 提供清晰嘅數碼語音、短消息功能同全球互聯嘅能力。

## DMR 嘅基本概念

### TDMA 技術

DMR 使用時分多址（TDMA）技術，將一個 12.5 kHz 嘅頻道分成兩個時隙（Time Slot）：

```text
|----時隙1----|----時隙2----|----時隙1----|----時隙2----|
     通話A          通話B         通話A          通話B
```

呢個意味住一個頻率可以同時承載兩個獨立嘅通話。

### 重要概念

#### DMR ID

每個 DMR 用家都需要一個唯一嘅數碼 ID：

- 喺 [radioid.net](https://radioid.net) 免費申請
- 需要提供有效嘅業餘無線電呼號
- 一個呼號可以申請多個 ID（用於唔同設備）

#### 通話群組（Talk Group / TG）

通話群組係 DMR 嘅「頻道」概念：

- 呼叫特定嘅通話群組 = 同該群組嘅所有人通話
- 常見嘅通話群組：
  - TG 460：中國
  - TG 454：香港
  - TG 1：全球
  - TG 2：歐洲
  - TG 3：北美

#### 時隙（Time Slot）

- TS1（時隙1）：通常用於廣域通話群組
- TS2（時隙2）：通常用於本地通話群組

#### Color Code

類似於 CTCSS 碼，用嚟區分唔同嘅中繼器系統。

## DMR 網絡

### BrandMeister

BrandMeister 係目前最大嘅業餘 DMR 網絡：

- 全球覆蓋
- 網頁控制面板
- 支持 HotSpot 連接
- 動態通話群組
- Self-Care 管理介面

### TGIF

另一個較新嘅 DMR 網絡：

- 設定相對簡單
- 社群活躍
- 支持自定義功能

### FreeDMR

開源嘅 DMR 網絡解決方案。

## DMR 設備

### 手持機

| 型號 | 價格（HK$） | 特點 |
|------|------------|------|
| 寶鋒 DM-1801 | 300-500 | 入門首選，OpenGD77 韌體 |
| Anytone AT-D878UV | 1500-2500 | 功能豐富，APRS 支持 |
| Anytone AT-D578UV | 2500-3500 | 車機/基地台，功率大 |
| Ailunce HD1 | 1000-1500 | GPS 內置 |

### 推薦入門設備

**寶鋒 DM-1801 + OpenGD77 韌體**：

- 價格最低嘅 DMR 入門方案
- OpenGD77 韌體大幅改善使用體驗
- 支持 DMR 同 FM 雙模式

**Anytone AT-D878UV II Plus**：

- 如果預算充足，呢個係最受歡迎嘅 DMR 手持機
- 功能全面
- 藍牙支持
- APRS 內置

## HotSpot（熱點）

如果你附近冇 DMR 中繼器，可以用 HotSpot 透過互聯網連接到 DMR 網絡。

### 咩係 HotSpot

HotSpot 係一個低功率嘅微型收發器，連接到互聯網：

```text
你嘅 DMR 電台 ←(無線電)→ HotSpot ←(互聯網)→ DMR 網絡 ←→ 全球
```

### 常見 HotSpot 硬件

| 產品 | 價格（HK$） | 特點 |
|------|------------|------|
| MMDVM HotSpot | 200-500 | 最常見，DIY 方案 |
| Pi-Star + RPi | 400-800 | 穩定可靠 |
| SharkRF openSPOT | 1500-2500 | 獨立運行，唔需要電腦 |
| ZUMspot | 300-600 | 即插即用 |

### Pi-Star 設定

Pi-Star 係最常用嘅 HotSpot 軟件：

1. 將 Pi-Star 影像寫入 MicroSD 卡
2. 設定 WiFi 連接
3. 透過瀏覽器訪問 Pi-Star 管理介面
4. 輸入你嘅呼號同 DMR ID
5. 選擇 DMR 網絡（BrandMeister 等）
6. 設定頻率同 Color Code
7. 保存並重啟

## DMR 電台編程

DMR 電台嘅編程比 FM 電台複雜：

### 需要設定嘅項目

1. **DMR ID**：你嘅數碼 ID
2. **聯絡人列表**：其他 DMR 用家嘅 ID 同呼號
3. **通話群組列表**：你想使用嘅 TG
4. **頻道設定**：每個頻道嘅頻率、時隙、TG、Color Code
5. **Zone**：頻道嘅分組

### Codeplug

DMR 電台嘅設定文件叫做 Codeplug。你可以：

- 自己由零開始建立
- 下載社群分享嘅 Codeplug 模板
- 用 CPS（Customer Programming Software）軟件編輯

### 編程軟件

- **原廠 CPS**：每個品牌都有自己嘅編程軟件
- **OpenGD77 CPS**：用於 OpenGD77 韌體嘅電台
- **D878UV CPS**：Anytone 嘅編程軟件

## DMR 操作

### 基本通話流程

1. 選擇合適嘅頻道（中繼器 + 通話群組 + 時隙）
2. 按下 PTT 鍵（稍等一秒讓系統連接）
3. 開始講話
4. 鬆開 PTT 等待回覆

### 好嘅操作習慣

- 按 PTT 後等約 1 秒先開始講話
- 發射同接收之間留少少間隙
- 使用合適嘅通話群組（唔好用全球 TG 做長時間閒聊）
- 定期報呼號

## 常見問題

### DMR 同 FM 可以互通嗎？

唔可以直接互通。DMR 用數碼編碼，FM 用類比信號。但部分中繼器設有雙模式轉換功能。

### 我需要互聯網先可以用 DMR 嗎？

唔需要。DMR 可以喺直通模式（Simplex）同本地中繼器上使用。但如果想連接到全球網絡，就需要互聯網（透過中繼器或 HotSpot）。

### DMR 嘅語音質素點樣？

DMR 使用 AMBE+2 語音編碼，喺信號良好時音質清晰。喺信號邊緣，數碼信號會出現突然斷裂（Cliff Effect），而唔似 FM 咁漸進衰減。
