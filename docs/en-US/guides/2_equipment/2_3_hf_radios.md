# HF Transceivers

HF (High Frequency) transceivers operate on the 1.8–30 MHz bands and are the gateway to worldwide amateur radio communication. By bouncing signals off the ionosphere, HF operators can contact stations on the other side of the planet using modest power and simple antennas. Whether you are chasing DX (long-distance contacts), participating in contests, rag-chewing on SSB, or exploring digital modes like FT8 and JS8Call, an HF radio is where the magic of propagation truly comes alive.

## Understanding HF Bands

HF amateur bands each have distinct propagation characteristics:

| Band | Frequency | Character |
|---|---|---|
| 160 m | 1.8–2.0 MHz | "Top Band." Nighttime propagation, challenging, large antennas needed |
| 80 m | 3.5–4.0 MHz | Regional nighttime, good for nets and ragchewing |
| 60 m | 5 MHz (channelized) | Limited channels, shared with government, USB only |
| 40 m | 7.0–7.3 MHz | Workhorse band, day and night, worldwide at night |
| 30 m | 10.1–10.15 MHz | Narrow, digital and CW only, excellent propagation |
| 20 m | 14.0–14.35 MHz | The premier DX band, daytime worldwide propagation |
| 17 m | 18.068–18.168 MHz | Similar to 20 m, less crowded |
| 15 m | 21.0–21.45 MHz | Excellent during solar maximum, daytime DX |
| 12 m | 24.89–24.99 MHz | Similar to 15 m, less crowded |
| 10 m | 28.0–29.7 MHz | Wide band, spectacular during high solar activity, also supports FM and repeaters |

## Key Features to Evaluate

### Receiver Architecture

Modern HF transceivers use one of two main receiver architectures:

- **Superheterodyne:** The traditional design. Incoming signals are mixed down to one or more intermediate frequencies (IF) where filtering occurs. Mature, well-understood, and still used in many current radios.
- **Direct-sampling SDR:** The RF signal is digitized directly by a high-speed ADC and all filtering and demodulation happens in software/firmware. This enables real-time spectrum displays (waterfalls), extremely sharp and adjustable filters, and advanced noise reduction. The ICOM IC-7300 popularized this approach.

### Filtering

Good filtering is essential for pulling weak signals out of a crowded band:

- **Roofing filters:** In superheterodyne receivers, narrow crystal filters at the first IF reject strong nearby signals before they can overload later stages. Widths of 15 kHz, 6 kHz, 3 kHz, and even 500/250 Hz are available.
- **DSP filtering:** Digital signal processing provides adjustable passband width, notch filters, noise reduction, and noise blanking. SDR-based radios can offer extremely narrow DSP filters with very steep skirts.

### Power Output

Most HF transceivers output 100 W, which is sufficient for almost all operating scenarios. Some radios offer 200 W (Kenwood TS-890S) and amplifiers can boost output to the legal limit (typically 1–1.5 kW depending on your country).

### Built-in Antenna Tuner

Many HF radios include an automatic antenna tuner (ATU) that can compensate for moderate impedance mismatches between the radio and antenna. A built-in tuner is extremely convenient, though its matching range is usually limited to about 3:1 SWR. An external tuner offers wider matching range.

### Digital Mode Integration

Modern HF operating increasingly involves digital modes. Features that support digital operation include:

- **USB audio codec:** A built-in USB sound card that connects directly to your computer, eliminating the need for external interfaces
- **CI-V / CAT control:** Computer control of frequency, mode, and other parameters
- **ACC port:** Dedicated accessory jack with audio and PTT lines for external interfaces

## Entry-Level HF Transceivers

### ICOM IC-7300

The IC-7300 revolutionized entry-level HF radio when it launched. It was the first affordable transceiver to use a direct-sampling SDR architecture, and it remains the most popular first HF radio sold today.

**Key Features:**
- Direct-sampling SDR receiver
- Real-time spectrum scope and waterfall display with touchscreen
- 100 W output on HF + 6 m (50 MHz)
- Built-in automatic antenna tuner
- Built-in USB audio codec for digital modes
- Sharp, adjustable DSP filtering
- Multi-function touchscreen
- Compact form factor

**Price:** ~$1,000–1,150

**Verdict:** The default recommendation for a first HF radio. The spectrum display and waterfall make band activity visible at a glance, the built-in USB codec simplifies digital mode setup, and the receiver performance is competitive with radios costing twice as much.

### Yaesu FT-991A

The FT-991A is Yaesu's all-in-one transceiver covering HF, 6 m, 2 m (VHF), and 70 cm (UHF) in a single box.

**Key Features:**
- HF + 6 m + 2 m + 70 cm coverage (the only current radio to do this)
- 100 W HF/6 m, 50 W VHF/UHF
- Built-in automatic antenna tuner
- Real-time spectrum scope
- C4FM digital voice on VHF/UHF
- Built-in USB audio codec
- Compact and portable-friendly

**Price:** ~$1,200–1,400

**Verdict:** An excellent choice if you want HF and VHF/UHF in one radio, especially for portable and field operations. The VHF/UHF capability means you may not need a separate mobile radio. The receiver is good but not quite at the IC-7300's level on HF.

### Yaesu FT-710 AESS

Yaesu's direct competitor to the IC-7300, featuring a direct-sampling SDR architecture.

**Key Features:**
- Direct-sampling SDR receiver
- HF + 6 m, 100 W
- Large 4.3-inch color touchscreen with spectrum scope and waterfall
- Built-in ATU
- Narrow roofing filter (300 Hz, 500 Hz, 1.2 kHz, 2.4 kHz, 4 kHz)
- USB audio codec
- Dedicated digital mode settings memory
- Portable-friendly with internal battery option

**Price:** ~$1,100–1,300

**Verdict:** A strong alternative to the IC-7300 with a more modern design and some features the IC-7300 lacks. Test both and see which user interface you prefer.

### Xiegu G90

A compact, portable-friendly HF transceiver at a budget price point.

**Key Features:**
- HF only (0.5–30 MHz), 20 W output
- Built-in automatic antenna tuner with wide matching range
- Small form factor, suitable for portable/POTA/SOTA operations
- Spectrum display
- CW keyer built-in

**Price:** ~$400–500

**Verdict:** A solid budget option for getting on HF, especially popular with portable operators. The 20 W power limit is manageable for digital modes and CW but may feel limiting for SSB voice.

## Mid-Range HF Transceivers

### ICOM IC-7610

The IC-7610 is a dual-receiver, direct-sampling SDR transceiver that represents a major step up from the IC-7300.

**Key Features:**
- Dual independent direct-sampling SDR receivers
- Two real-time spectrum scopes (one per receiver)
- 100 W, HF + 6 m
- Superior large-signal handling and dynamic range
- DIGI-SEL preselector on each band for strong-signal environments
- Dual watch with full independent receiver (not just a sub-receiver)

**Price:** ~$3,000–3,400

**Verdict:** The serious contester's and DXer's choice in the mid-range. Two fully independent receivers is a massive advantage in contests (SO2R) and DX pileups.

### Kenwood TS-890S

Kenwood's flagship superheterodyne transceiver with a hybrid approach.

**Key Features:**
- Hybrid superheterodyne + DSP architecture
- 200 W output on HF + 6 m
- Exceptional receiver performance — among the best measured dynamic range figures in its class
- Narrow roofing filters down to 270 Hz
- Band scope and waterfall display
- Built-in ATU
- Dedicated IF DSP for filtering and noise reduction

**Price:** ~$3,500–4,000

**Verdict:** One of the best-measuring receivers available, with outstanding strong-signal handling. Preferred by serious DXers and contesters who operate in noisy RF environments.

## Advanced / High-End HF Transceivers

### ICOM IC-7851

ICOM's top-of-the-line transceiver.

**Key Features:**
- Dual direct-sampling SDR receivers
- +40 dB 3rd-order intercept point with DIGI-SEL
- 200 W output
- 7-inch color display
- Premium build quality and components
- ~$12,000–14,000

### Yaesu FTDX101MP

Yaesu's flagship with hybrid SDR architecture and dual receivers.

**Key Features:**
- Dual-channel direct-sampling SDR
- Narrow-band roofing filters (300 Hz / 600 Hz / 1.2 kHz / 3 kHz)
- 200 W output
- 7-inch color display with waterfall
- ~$5,500–6,500

### Flex Radio FLEX-6600 / FLEX-6700

Flex radios take SDR to its logical conclusion — the radio is essentially a box with an ADC and a network connection. All operation happens via SmartSDR software on your computer or iPad.

**Key Features:**
- Fully software-defined, no physical front panel
- Multiple independent receivers (panadapters)
- Operates over your local network — the radio can be in one room and the operator in another (or across the internet via SmartLink)
- Extremely flexible and configurable
- FLEX-6600: ~$4,500 | FLEX-6700: ~$7,500

**Verdict:** Ideal for operators who embrace computer-centric operation. Not for those who prefer knobs and buttons.

## QRP (Low Power) Transceivers

QRP operating means using low power, typically 5 W or less. There is an active QRP community, and several excellent purpose-built QRP transceivers exist:

### Elecraft KX3 / KX2

The gold standard in portable QRP.

- **KX3:** 160–6 m, 10 W, modular design, legendary receiver
- **KX2:** 160–10 m (no 6 m), 10 W, smaller and lighter
- Internal battery, ATU, CW keyer
- Superb receiver for their size
- ~$900 (KX2) / $1,100 (KX3)

### Icom IC-705

A wideband portable SDR transceiver.

- HF + 6 m + 2 m + 70 cm
- 10 W on HF (5 W on battery), 5 W VHF/UHF
- Touchscreen with spectrum scope and waterfall
- D-STAR digital voice on VHF/UHF
- Built-in battery, GPS, Bluetooth, Wi-Fi
- USB-C charging
- ~$1,200–1,400

**Verdict:** The most feature-rich QRP/portable radio available. Ideal for POTA (Parks on the Air) and SOTA (Summits on the Air) activations.

### QDX / QMX by QRP Labs

Ultra-low-cost digital-mode QRP transceivers sold as kits.

- **QDX:** Digital modes only (FT8, JS8Call, etc.), 5 W, 80/60/40/30/20 m, ~$55
- **QMX:** Adds CW mode, built-in CW decoder, wider band coverage, ~$75

**Verdict:** Remarkable value. The QDX is perhaps the most cost-effective way to get on HF digital modes.

## Setting Up Your HF Station

A basic HF station consists of:

1. **HF transceiver** (IC-7300, FT-991A, etc.)
2. **Power supply:** 13.8 V DC, at least 20–25 A for a 100 W radio. Linear supplies are quieter but heavier; switching supplies are lighter but may introduce RF noise.
3. **Antenna:** Even a simple wire dipole will get you on the air. See the [Antenna section](../3_antenna/index.md).
4. **Feedline:** Coaxial cable (RG-8X for short runs, LMR-400 for longer runs) with appropriate connectors.
5. **Antenna tuner (optional):** Helpful if your antenna is not resonant on all bands or if you are using a multi-band wire antenna.
6. **Computer (optional but recommended):** For digital modes (FT8, JS8Call, Winlink), logging, and rig control.

### Digital Mode Setup

For FT8 and other WSJT-X modes:

1. Connect the radio to your computer via USB (if the radio has a built-in codec) or via an external audio interface like a SignaLink USB.
2. Install WSJT-X (free software).
3. Configure the audio input/output to route through the radio's USB codec.
4. Configure CAT control for rig frequency tracking.
5. Set the radio to USB-D (USB Data) mode.
6. Set your computer clock accurately (within 1 second) using NTP.

## Summary Recommendations

| Budget | Model | Best For |
|---|---|---|
| ~$400–500 | Xiegu G90 | Budget HF, portable |
| ~$55–75 | QRP Labs QDX/QMX | Cheapest path to HF digital/CW |
| ~$1,000–1,150 | ICOM IC-7300 | Best first HF radio overall |
| ~$1,200–1,400 | Yaesu FT-991A | All-band (HF+VHF+UHF) in one box |
| ~$1,200–1,400 | ICOM IC-705 | Portable QRP with all bands |
| ~$900–1,100 | Elecraft KX2/KX3 | Premium portable QRP |
| ~$3,000–4,000 | IC-7610 / TS-890S | Serious contesting and DX |
