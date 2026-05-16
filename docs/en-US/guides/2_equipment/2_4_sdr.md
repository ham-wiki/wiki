# Software Defined Radio (SDR)

Software Defined Radio moves the signal processing that traditionally happened in analog hardware into the digital domain — using software on a computer, smartphone, or embedded processor. Instead of fixed filters, mixers, and demodulators built from discrete components, an SDR digitizes the radio signal as early as possible and performs all processing mathematically. This makes SDR incredibly flexible: the same hardware can demodulate FM broadcast, decode aircraft ADS-B, receive amateur radio SSB, analyze spectrum occupancy, and much more — simply by changing software.

## How SDR Works

A traditional radio receiver follows a chain: antenna, bandpass filter, low-noise amplifier, mixer(s) to convert to intermediate frequency, IF filter, demodulator, and audio amplifier. Each stage is built from fixed hardware.

An SDR replaces most of this chain with:

1. **Antenna** — still analog, still required
2. **RF front end** — minimal filtering and amplification
3. **Analog-to-Digital Converter (ADC)** — digitizes the RF signal
4. **Digital Signal Processing (DSP)** — filtering, mixing, demodulation, and decoding all happen in software

The result is a receiver (or transceiver) whose capabilities are limited primarily by software, not hardware. New modes and features can be added with a software update.

## Receive-Only SDR Dongles

### RTL-SDR

The RTL-SDR is the entry point into software defined radio and one of the best values in all of radio.

**What it is:** A USB dongle based on the Realtek RTL2832U chip paired with a Rafael Micro R820T2 tuner. Originally designed as a DVB-T television receiver, the open-source community discovered it could be used as a general-purpose wideband SDR receiver.

**Specifications:**
- Frequency range: 24 MHz to 1.766 GHz (with some gaps)
- Bandwidth: up to 2.4 MHz (stable at ~2 MHz)
- Resolution: 8-bit ADC
- Interface: USB 2.0
- Price: ~$25–35 (RTL-SDR Blog V4 recommended)

**What you can do with it:**
- Listen to amateur radio VHF/UHF (FM, SSB with appropriate software)
- Receive FM broadcast radio
- Decode aircraft ADS-B transponders (track flights in real time)
- Receive weather satellite images (NOAA APT, Meteor M2 LRPT)
- Decode digital signals (DMR, P25, NXDN with DSD+/OP25)
- Monitor trunked radio systems
- Receive marine AIS ship tracking
- Receive ISS SSTV transmissions
- Spectrum analysis and RF survey work

**Limitations:**
- 8-bit ADC limits dynamic range (~50 dB)
- No transmit capability
- Limited bandwidth (2 MHz) means you see only a narrow slice of spectrum at a time
- No HF coverage without an upconverter (the V4 adds direct sampling for HF but performance is basic)

**Recommended version:** The RTL-SDR Blog V4 dongle includes a built-in LNA, improved shielding, SMA connector, and HF direct sampling mode. It is the best RTL-SDR available.

### SDRPlay RSP1dx / RSPdx-R2

SDRPlay makes a line of higher-performance SDR receivers.

**Specifications:**
- Frequency range: 1 kHz to 2 GHz (continuous)
- Bandwidth: up to 10 MHz
- Resolution: 12-bit / 14-bit ADC (depending on model)
- Multiple antenna ports with selectable filters (RSPdx)
- Interface: USB 2.0/3.0
- Price: RSP1dx ~$80, RSPdx-R2 ~$220

**Advantages over RTL-SDR:**
- Wider bandwidth (10 MHz vs 2 MHz) — see more spectrum at once
- Higher dynamic range from 12/14-bit ADC
- Continuous coverage from 1 kHz to 2 GHz, including HF with good performance
- Selectable preamp and attenuation
- Better filtering and selectivity

**Best for:** Hams who want to monitor HF bands, do wideband spectrum monitoring, or need better performance than an RTL-SDR in strong-signal environments.

### Airspy HF+ Discovery

Designed specifically for HF and VHF reception with extremely high dynamic range.

**Specifications:**
- HF: 0.5 kHz to 31 MHz
- VHF: 60–260 MHz
- 18-bit effective resolution
- Polyphase harmonic rejection mixer
- ~$170

**Best for:** Serious HF listeners and shortwave enthusiasts who want the best possible receive performance. Not suitable for UHF or wideband monitoring.

### Airspy R2 / Mini

Wideband SDR receivers with excellent performance.

- Frequency: 24 MHz to 1.8 GHz
- Bandwidth: up to 10 MHz (R2) or 6 MHz (Mini)
- 12-bit ADC
- ~$170 (R2) / $100 (Mini)

**Best for:** Wideband VHF/UHF monitoring, ADS-B, trunked radio decoding, and applications where you need better performance than RTL-SDR.

## Transmit-Capable SDR Platforms

### HackRF One

The HackRF One is a half-duplex SDR transceiver covering an enormous frequency range.

**Specifications:**
- Frequency: 1 MHz to 6 GHz
- Bandwidth: up to 20 MHz
- Resolution: 8-bit ADC/DAC
- Half-duplex (transmit or receive, not simultaneously)
- Transmit power: approximately 0–15 dBm depending on frequency (very low — milliwatts)
- Open-source hardware and firmware
- Interface: USB 2.0
- Price: ~$300 (original) / ~$50–80 (clones, with caveats)

**Use cases:**
- RF research and experimentation
- Protocol analysis
- Replay and signal analysis
- Amateur radio experimentation (with appropriate filtering and amplification)
- Building custom transmitters and receivers

**Important warnings:**
- The HackRF's transmit output is broadband and unfiltered. **You must add band-pass filters before connecting to an antenna to avoid transmitting harmonics and spurious emissions.** Operating without filters likely violates regulations.
- Transmit power is very low; an amplifier is needed for practical communication.
- 8-bit resolution limits dynamic range for receive.

### ADALM-PLUTO (PlutoSDR)

Analog Devices' educational SDR platform.

**Specifications:**
- Frequency: 325 MHz to 3.8 GHz (expandable to 70 MHz – 6 GHz with firmware mods)
- Bandwidth: up to 20 MHz
- 12-bit ADC/DAC
- Full duplex
- USB 2.0 with libiio framework
- ~$150–200

**Best for:** Digital communications experimentation, QO-100 satellite work (popular in Europe), and learning DSP. The full-duplex capability sets it apart from HackRF.

### LimeSDR

A full-duplex, MIMO-capable SDR.

**Specifications:**
- Frequency: 100 kHz to 3.8 GHz
- Bandwidth: up to 61.44 MHz
- 12-bit ADC/DAC
- Full duplex, 2x2 MIMO
- ~$300 (LimeSDR Mini 2.0)

**Best for:** Advanced experimentation, MIMO research, building custom LTE/GSM base stations (in lab environments), wideband applications.

## SDR Software

### For Windows

- **SDR# (SDRSharp):** The most popular Windows SDR application. Free, supports RTL-SDR natively, with plugins for many features. Clean interface, good performance. Excellent starting point.
- **SDR++:** Cross-platform, open-source, supports a wide range of hardware. Modern UI, actively developed.
- **HDSDR:** Longstanding free SDR software with a traditional radio feel. Good for HF listening.

### For Linux

- **GQRX:** The standard Linux SDR receiver application. Open-source, based on GNU Radio. Supports RTL-SDR, Airspy, HackRF, and more. Simple, clean interface.
- **SDR++:** Also available on Linux. Increasingly popular as a cross-platform alternative to GQRX.
- **CubicSDR:** Cross-platform, open-source. Good for casual listening and exploration.

### For macOS

- **SDR++** and **CubicSDR** both run on macOS.
- **GQRX** can be installed via Homebrew.

### Specialized Software

- **SDRAngel:** Advanced multi-channel SDR application supporting both receive and transmit for capable hardware. Supports many digital decoders built-in.
- **GNU Radio:** A free, open-source software development toolkit for signal processing. Not a radio application per se — it is a visual programming environment for building custom SDR applications. Extremely powerful but has a significant learning curve.
- **Universal Radio Hacker (URH):** Focused on analyzing and reverse-engineering wireless protocols.
- **DSD+ / OP25:** Digital voice decoders for DMR, P25, NXDN, and other digital radio protocols.
- **Trunk Recorder:** Automatically records and archives trunked radio system transmissions.
- **JAERO / SatDump:** For decoding satellite signals.
- **WSJT-X:** While not an SDR application per se, it is the essential software for FT8/FT4 digital modes and works with SDR receivers via virtual audio cables.

## Getting Started with RTL-SDR

Here is a step-by-step guide to your first SDR session:

1. **Purchase an RTL-SDR Blog V4 dongle** (~$35). It comes with basic dipole antenna kit.
2. **Install drivers:** On Windows, install the Zadig USB driver. On Linux, install `rtl-sdr` from your package manager. On macOS, install via Homebrew.
3. **Install SDR# (Windows) or GQRX (Linux/macOS).**
4. **Connect the dongle and launch the software.**
5. **Tune to a known FM broadcast station** (88–108 MHz) to verify everything works. Select WFM (wideband FM) mode.
6. **Explore:** Tune to the amateur 2 m band (144–148 MHz), aircraft band (118–136 MHz AM), weather satellites (137 MHz), or NOAA weather radio (162.4–162.55 MHz).
7. **Try ADS-B:** Install `dump1090` or use an online ADS-B decoder. With the included antenna, you should see aircraft within 50–100 miles.

## Tips for Better SDR Performance

- **Use a good antenna.** The antenna matters as much for receiving as it does for transmitting. A purpose-built antenna for your frequency of interest will dramatically outperform the small included dipole.
- **Add a bandpass filter** if you are in a strong-signal environment. FM broadcast and cell tower signals can overwhelm the RTL-SDR's limited dynamic range, causing spurious signals. An FM notch filter or bandpass filter for your band of interest helps enormously.
- **Use a low-noise amplifier (LNA)** for weak signals, especially for satellite and ADS-B reception. Place the LNA at the antenna, not at the computer, to maximize signal-to-noise ratio.
- **Manage gain carefully.** More gain is not always better. Start with automatic gain and then reduce gain manually until noise drops without losing your desired signal.
- **Use USB 3.0 extension cables** to move the dongle away from your computer, which is a significant source of RF interference.

## SDR vs. Traditional Radios

| Aspect | Traditional Radio | SDR |
|---|---|---|
| Ease of use | Turn on and operate | Requires computer, software setup |
| Portability | Self-contained | Needs a computer |
| Flexibility | Fixed modes and bands | Any mode the software supports |
| Cost | Higher for equivalent performance | Lower hardware cost |
| Learning curve | Lower | Higher |
| Transmit | Built-in, filtered, legal | Requires filters, amps, careful legal compliance |

For most amateur radio operators, the ideal setup combines both: a traditional transceiver for operating and an SDR for monitoring, experimentation, and learning.
