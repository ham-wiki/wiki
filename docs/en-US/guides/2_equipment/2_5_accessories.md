# Accessories

A radio and antenna are only part of a station. The cables, connectors, meters, power supplies, and ancillary equipment that tie everything together are just as important to reliable operation. Poor-quality accessories can introduce loss, noise, and frustration that no amount of expensive radio can overcome. This guide covers the essential accessories every ham should understand.

## Coaxial Cable (Feedline)

Coaxial cable carries RF energy between your radio and antenna. Choosing the right coax is critical because all coax introduces loss — and loss increases with frequency and cable length.

### Common Coax Types

| Cable | Impedance | Outer Diameter | Loss at 146 MHz (per 100 ft) | Loss at 440 MHz (per 100 ft) | Typical Use |
|---|---|---|---|---|---|
| RG-174 | 50 ohm | 2.8 mm (0.11") | 8.4 dB | 14.5 dB | Short jumpers only, test leads |
| RG-58 | 50 ohm | 5 mm (0.20") | 4.9 dB | 8.5 dB | Short runs, HF only |
| RG-8X / LMR-240 | 50 ohm | 6.1 mm (0.24") | 3.6 dB | 6.2 dB | Good general purpose, moderate runs |
| RG-213 / RG-8 | 50 ohm | 10.3 mm (0.41") | 2.2 dB | 3.9 dB | Good for HF and VHF, heavier |
| LMR-400 | 50 ohm | 10.3 mm (0.41") | 1.5 dB | 2.7 dB | Best common choice for longer runs |
| LMR-600 | 50 ohm | 14.99 mm (0.59") | 1.0 dB | 1.8 dB | Long runs, tower installations |
| Hardline (7/8") | 50 ohm | 22 mm (0.87") | 0.4 dB | 0.7 dB | Commercial, tower, very low loss |

### Rules of Thumb

- **For VHF/UHF:** Use LMR-400 or equivalent for any run over 25 feet. Every dB of feedline loss is a dB of signal you will never get back — on both transmit and receive.
- **For HF:** RG-8X is acceptable for runs up to 50 feet. Loss at HF frequencies is much lower, so thinner cables are more practical.
- **Keep runs as short as possible.** Every extra foot of coax adds loss.
- **Avoid RG-58 for permanent installations.** It is fine for short jumpers and test setups but too lossy for longer runs, especially at UHF.
- **Use quality cable.** No-name coax from unknown sources may have inconsistent impedance, poor shielding, or higher loss than rated. Stick to known brands (Times Microwave LMR series, Belden, DX Engineering).

### Coax Care

- Weatherproof outdoor connections with self-amalgamating tape (also called self-vulcanizing or rubber splicing tape) wrapped over the connector, then a layer of electrical tape or Scotch 33+ over that.
- Create a drip loop before the cable enters your building so water runs off rather than following the cable inside.
- Do not exceed the minimum bend radius — sharp bends damage the cable's geometry and increase loss. The minimum bend radius is typically 5-10 times the cable diameter.
- Inspect connectors periodically for corrosion, especially in marine or humid environments.

## RF Connectors

### Common Connector Types

- **PL-259 / SO-239 (UHF connector):** The most common connector in amateur radio despite its misleading "UHF" name (it performs poorly above 300 MHz). PL-259 is the male plug; SO-239 is the female chassis-mount jack. Used on most HF and VHF radios, antennas, and accessories. Adequate through 2 m (146 MHz); use N-type for 70 cm and above.

- **N-type:** A precision 50-ohm connector that performs well through 11 GHz. Used on UHF antennas, higher-quality VHF/UHF equipment, and commercial installations. Always preferred over PL-259/SO-239 at 440 MHz and above.

- **BNC:** A quick-connect bayonet connector common on test equipment, some HTs, and measurement instruments. Rated to 4 GHz. Convenient for connections that need to be made and broken frequently.

- **SMA / RP-SMA:** Small connectors used on handheld radios (SMA-female on the radio is standard for most Chinese HTs; SMA-male on the radio is standard for Kenwood and ICOM HTs), SDR dongles, and Wi-Fi equipment. RP-SMA (reverse polarity) is used in Wi-Fi and is not compatible with standard SMA without an adapter.

### Adapter Tips

- Every adapter introduces a small amount of loss and is a potential point of failure. Minimize adapters.
- Use barrel connectors (PL-259 to PL-259 barrel, N to N barrel) to join two cables of the same connector type.
- Keep a few common adapters on hand: SMA to BNC, N to PL-259/SO-239, BNC to PL-259.

### Installing PL-259 Connectors

Soldering PL-259 connectors is a fundamental ham radio skill. Here is the process:

1. Strip the coax: remove the outer jacket, fold back the braid, strip the dielectric to expose the center conductor.
2. Slide the connector coupling ring onto the cable.
3. Screw the connector body onto the cable so the center conductor protrudes through the center pin.
4. Solder the center pin — use a hot iron and work quickly to avoid melting the dielectric.
5. Solder through the holes in the connector body to bond to the braid (or use crimp-style connectors if available for your cable type).
6. Screw on the coupling ring.

Crimp connectors are available for LMR-400 and other cables and are faster and more repeatable than solder connectors, but they require the correct crimp tool.

## SWR Meters and Antenna Analyzers

### SWR Meters

A Standing Wave Ratio (SWR) meter measures how well your antenna system is matched to your transmitter. An SWR of 1:1 is perfect (all power is radiated); 2:1 means about 11% of power is reflected back; 3:1 means 25% reflected. Most radios reduce power automatically above 2:1 or 3:1 SWR to protect the output transistors.

**Popular SWR meters:**

- **Diamond SX-series (SX-20C, SX-400):** Cross-needle meters that show forward power, reflected power, and SWR simultaneously. The SX-20C covers HF through 200 MHz; the SX-400 covers 140–525 MHz. ~$80–120.
- **MFJ-862 / MFJ-812:** Simple, affordable SWR/power meters. ~$40–70.
- **Inline wattmeter (Bird 43 style):** Professional-grade directional wattmeters. Available on the used market. Accurate and reliable.

### Antenna Analyzers

An antenna analyzer is a far more powerful tool than a simple SWR meter. It generates its own signal and measures SWR, impedance (R + jX), and return loss across a range of frequencies — without needing to transmit.

**Popular models:**

- **NanoVNA (V2 / V2 Plus4):** An incredibly affordable vector network analyzer. Measures SWR, impedance, S-parameters, and generates Smith charts. Covers 50 kHz to 3 GHz (V2 Plus4). ~$50–80. Essential tool for any ham who builds or adjusts antennas.
- **RigExpert AA-55 ZOOM / AA-230 ZOOM:** Dedicated antenna analyzers with excellent software and displays. ~$200–450.
- **MFJ-259C / MFJ-269D:** Classic standalone antenna analyzers. ~$200–350.

**Recommendation:** The NanoVNA V2 Plus4 is the best value in RF measurement today. Every ham who works with antennas should own one.

## Power Supplies

Mobile and HF transceivers require a 13.8 V DC power supply. Choosing the right one avoids noise problems and ensures reliable operation.

### Linear vs. Switching Power Supplies

- **Linear power supplies** use a heavy transformer and are inherently quiet (low RF noise). They are large, heavy, and less efficient but produce the cleanest power. Good examples: Astron RS-35M (35 A), MFJ-4035MV.
- **Switching power supplies** use high-frequency switching regulators and are compact, lightweight, and efficient. However, cheaper switching supplies can produce RF interference (switching noise on HF bands). Quality switching supplies with good filtering are fine for most applications. Examples: Powerwerx SS-30DV (30 A), Samlex SEC-1235M.

### Sizing Your Power Supply

Choose a supply rated for at least 120% of your radio's maximum current draw:

| Radio Type | Typical Max Current | Recommended Supply |
|---|---|---|
| VHF/UHF mobile (50 W) | 10–12 A | 15–20 A supply |
| HF 100 W transceiver | 20–23 A | 25–30 A supply |
| HF 200 W transceiver | 35–40 A | 40–50 A supply |

### Power Supply Tips

- Use short, heavy-gauge cables between the supply and radio.
- Add ferrite chokes to the DC cable if you hear switching noise on HF.
- Do not daisy-chain multiple radios from an undersized supply.
- Keep the supply ventilated — they produce heat.

## Dummy Loads

A dummy load (also called a dummy antenna or termination) is a non-radiating resistive load that absorbs your transmitter's output as heat. It lets you test and tune your radio without transmitting a signal over the air.

**Why you need one:**

- Testing a new radio or repair work
- Adjusting power output and modulation
- Programming and alignment
- Transmitting during troubleshooting without causing interference

**Types:**

- **Low-power (5–25 W):** Small, inexpensive loads suitable for HT and QRP testing. Often BNC or SMA terminated. ~$10–20.
- **Medium-power (100 W):** Handle a 100 W transceiver for brief transmissions. Often air-cooled. ~$20–50.
- **High-power (1 kW+):** Oil-filled or fan-cooled loads for sustained high-power testing. ~$50–200+.

**Popular choices:**

- Bird Termaline 8135 (oil-cooled, 150 W continuous, widely available used)
- MFJ-260C (300 W intermittent)
- Low-cost 50-ohm BNC/SMA loads for QRP

## Other Useful Accessories

### Headphones

A good set of headphones transforms your HF operating experience. You hear weak signals that are invisible through a speaker, and you reduce noise pollution for others in the room. Many HF operators prefer single-ear headsets with a boom mic for contests.

- **Heil Pro 7:** Standard amateur radio headset, comfortable for long sessions, ~$120
- **Any quality closed-back headphones** work fine for casual operating

### Logging Software

Keep a log of your contacts. It is legally required in some jurisdictions and always good practice.

- **WSJT-X:** Built-in logging for FT8/FT4 contacts
- **Log4OM:** Free, full-featured logging with award tracking (Windows)
- **CQRLOG:** Free, open-source logging for Linux
- **Ham Radio Deluxe (HRD):** Commercial suite with logging, rig control, and digital modes
- **N1MM+:** The standard for contest logging (free)

### Grounding

Proper station grounding protects equipment from static buildup and lightning-induced surges, and can reduce noise.

- Bond all equipment chassis together with short, heavy braid or strap.
- Connect the common ground bus to an external ground rod using heavy copper wire or braid.
- Install lightning arrestors (gas discharge or MOV type) on coax lines entering the building.
- Grounding does **not** replace a good lightning protection plan — disconnect antennas during thunderstorms.

### Ferrite Chokes and RF Interference Mitigation

Snap-on ferrite chokes (Fair-Rite mix 31 for HF, mix 43 for VHF) suppress common-mode RF current on cables. Place them on:

- Coaxial feedlines at the point of entry to the shack
- Power supply cables
- USB cables to your computer (reduces noise ingress and prevents RF from crashing USB devices)
- Speaker cables and monitor cables if you experience RFI

### Antenna Switches

If you have multiple antennas, a coax switch lets you select between them without unplugging cables.

- **Manual switches:** MFJ-1702C (2-position), DX Engineering DXE-RAS-2 (2-position), Alpha Delta 2B (2-position). ~$30–80.
- **Remote/automated switches:** For stations with antennas on a tower, remote switches controlled from the shack. More expensive but eliminate long coax runs.

## Building Your Accessory Kit

Here is a recommended accessory shopping list for a new ham setting up their first station:

| Item | Recommendation | Approx. Cost |
|---|---|---|
| Coax (VHF/UHF) | 50 ft LMR-400 with connectors | $50–70 |
| Coax (HF or short runs) | 25 ft RG-8X | $15–25 |
| Antenna analyzer | NanoVNA V2 Plus4 | $50–80 |
| Power supply (HF) | Powerwerx SS-30DV or Astron RS-35M | $120–200 |
| Dummy load | 100 W air-cooled | $25–40 |
| SWR meter | Diamond SX-20C | $80–100 |
| Adapter assortment | SMA/BNC/N/PL-259 adapters | $15–25 |
| Ferrite chokes | Fair-Rite snap-on mix 31 (6 pack) | $15–25 |
| Self-amalgamating tape | 1 roll | $8–12 |
| Programming cable | USB to radio (for your specific model) | $10–20 |

Investing in quality accessories from the start saves time, frustration, and money in the long run. A NanoVNA alone will pay for itself many times over by helping you build, tune, and troubleshoot antennas efficiently.
