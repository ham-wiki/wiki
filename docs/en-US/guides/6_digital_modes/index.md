# Digital Modes

Digital modes represent one of the most dynamic and rapidly evolving areas of amateur radio. By encoding information digitally -- rather than transmitting raw voice or Morse code -- digital modes can achieve reliable communication at signal levels far below what voice or CW requires, enable worldwide networking through radio, and open up entirely new ways to use the amateur radio spectrum.

## What You'll Find Here

- **[DMR Digital Radio](./6_1_dmr.md)** -- Digital Mobile Radio: time slots, color codes, talk groups, and hotspots for global digital voice communication
- **[FT8 Mode](./6_2_ft8.md)** -- The weak-signal mode that has transformed HF amateur radio, using WSJT-X software
- **[APRS System](./6_3_aprs.md)** -- Automatic Packet Reporting System for position tracking, messaging, and telemetry
- **[C4FM & D-STAR](./6_4_c4fm_dstar.md)** -- Yaesu System Fusion and ICOM D-STAR digital voice systems

## The Digital Mode Landscape

Digital modes in amateur radio can be broadly categorized:

### Digital Voice

These modes digitize and compress voice for transmission over radio:

- **DMR** -- Open standard, widely adopted, uses TDMA time slots
- **D-STAR** -- ICOM's proprietary digital voice and data system
- **C4FM / System Fusion** -- Yaesu's digital voice system
- **P25** -- Public safety standard; some amateur use
- **M17** -- Open-source digital voice mode (emerging)
- **Codec2 / FreeDV** -- Open-source voice codec for HF digital voice

### Weak-Signal and Data Modes

These modes encode text and data for HF communication, often at very low signal levels:

- **FT8 / FT4** -- Structured exchanges; excellent for weak signals and DX
- **JS8Call** -- Keyboard-to-keyboard messaging based on FT8's modulation
- **PSK31** -- Phase-shift keying for real-time keyboard-to-keyboard chat
- **RTTY** -- Radio teletype; the oldest digital mode still in active use
- **WSPR** -- Weak Signal Propagation Reporter; beacon mode for propagation study
- **Winlink** -- Email over radio (HF and VHF/UHF)

### Packet and Networking

These modes create data networks over radio:

- **APRS** -- Position reporting, messaging, telemetry, and weather
- **Packet Radio** -- AX.25-based data communication (largely replaced by internet, but still used for APRS)
- **VARA** -- High-speed HF modem used with Winlink
- **Mesh Networking (AREDN)** -- High-speed data networks using modified Wi-Fi equipment on amateur frequencies

## Getting Started with Digital Modes

Most digital modes require a few common elements:

1. **A radio** -- Any amateur radio that covers the appropriate bands. For HF digital modes, an SSB-capable HF transceiver is required. For digital voice (DMR, C4FM, D-STAR), you need a radio that supports the specific mode.
2. **A computer** -- For HF data modes (FT8, PSK31, RTTY, etc.), a computer runs the encoding/decoding software.
3. **An interface** -- A sound card interface or built-in USB audio connects the radio to the computer. Popular options include the SignaLink USB, Digirig, and radios with built-in USB sound cards.
4. **Software** -- Each mode has its own software (or multiple software options). Most are free and open-source.
5. **Accurate time** -- Many digital modes (especially FT8) require your computer's clock to be accurate within one second of UTC. Use NTP time synchronization.

## Why Digital?

- **Weak-signal performance:** FT8 can decode signals 24 dB below what SSB voice requires. This means contacts are possible when you can't even hear the other station.
- **Global reach with modest stations:** A 100W transceiver, a simple wire antenna, and FT8 software can work every continent.
- **Automated logging and confirmation:** Most digital mode software automatically logs contacts and can upload to LoTW, eQSL, and other services.
- **Accessibility:** Digital modes can make amateur radio more accessible to operators with hearing or speech difficulties.
- **Experimentation:** Digital modes represent a frontier of the hobby where new modes are constantly being developed and tested.
