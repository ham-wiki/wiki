# Basic Concepts

Before you dive into the world of amateur radio, you need to understand some fundamental radio concepts. These are not just exam topics -- they are the foundation you'll rely on every time you operate a radio, build an antenna, or troubleshoot a problem.

## Frequency and Wavelength

### Frequency

Frequency is the number of times an electromagnetic wave oscillates per second. The unit of measurement is the hertz (Hz).

| Unit | Abbreviation | Equivalent |
|------|-------------|------------|
| Hertz | Hz | 1 cycle per second |
| Kilohertz | kHz | 1,000 Hz |
| Megahertz | MHz | 1,000,000 Hz |
| Gigahertz | GHz | 1,000,000,000 Hz |

For example, FM broadcast stations operate between 88 and 108 MHz, while the popular amateur 2-meter band centers around 145 MHz.

### Wavelength

Wavelength is the physical distance one complete cycle of an electromagnetic wave occupies in space. Frequency and wavelength are inversely related:

```
Wavelength (meters) = Speed of light / Frequency = 300,000,000 / Frequency (Hz)
```

Simplified formula:

```
Wavelength (meters) = 300 / Frequency (MHz)
```

**Examples**:
- 144 MHz: wavelength = 300 / 144 = 2.08 m --> hence the "**2-meter band**"
- 430 MHz: wavelength = 300 / 430 = 0.70 m --> hence the "**70-centimeter band**"
- 7 MHz: wavelength = 300 / 7 = 42.8 m --> hence the "**40-meter band**"

This is why amateur radio bands are commonly referred to by their approximate wavelength.

### Spectrum Designations

The radio spectrum is divided into ranges by frequency:

| Band Name | Abbreviation | Frequency Range | Wavelength Range |
|-----------|-------------|----------------|-----------------|
| Medium Frequency | MF | 300 kHz - 3 MHz | 1000 m - 100 m |
| High Frequency | HF | 3 MHz - 30 MHz | 100 m - 10 m |
| Very High Frequency | VHF | 30 MHz - 300 MHz | 10 m - 1 m |
| Ultra High Frequency | UHF | 300 MHz - 3 GHz | 1 m - 10 cm |
| Super High Frequency | SHF | 3 GHz - 30 GHz | 10 cm - 1 cm |

## Modulation

Modulation is the process of encoding information (voice, data, etc.) onto a radio carrier wave. Different modulation methods have different strengths and are suited to different situations.

### AM (Amplitude Modulation)

AM encodes information by varying the **amplitude** (signal strength) of the carrier wave.

- **Advantages**: Simple circuitry, easy to receive
- **Disadvantages**: Poor spectrum efficiency, susceptible to noise and interference, low power efficiency
- **Uses**: AM broadcast radio, aviation communications; rarely used in amateur radio today

An AM signal occupies a bandwidth roughly twice the audio bandwidth (typically about 6 kHz), because it contains the carrier plus both upper and lower sidebands.

### FM (Frequency Modulation)

FM encodes information by varying the **frequency** of the carrier wave while keeping the amplitude constant.

- **Advantages**: Strong resistance to noise, good audio quality
- **Disadvantages**: Wider bandwidth (narrowband FM occupies about 12.5-25 kHz)
- **Uses**: VHF/UHF local communications (especially through repeaters), FM broadcast radio

In amateur radio, virtually all VHF/UHF voice communication uses FM. When you talk through a handheld radio (HT) via a repeater, you are using FM.

### SSB (Single Sideband)

SSB is an improved version of AM. It transmits only one sideband, discarding the carrier and the other sideband. This makes it far more efficient.

- **USB (Upper Sideband)**: Transmits the sideband above the carrier frequency
- **LSB (Lower Sideband)**: Transmits the sideband below the carrier frequency

**Convention**:
- **Below 10 MHz** (7 MHz and lower HF bands): Use **LSB**
- **Above 10 MHz** (14 MHz and higher HF bands): Use **USB**
- **VHF/UHF** SSB operation: Use **USB**

SSB characteristics:
- **Advantages**: High spectrum efficiency (bandwidth of only about 2.4 kHz), high power efficiency (all power goes to carrying information)
- **Disadvantages**: Requires precise tuning, needs some operator skill
- **Uses**: The preferred mode for long-distance HF voice communication

### CW (Continuous Wave / Morse Code)

Strictly speaking, CW is not a modulation method -- it works by switching the carrier on and off to send Morse code.

- **Advantages**: Extremely narrow bandwidth (about 100-500 Hz), works at very low signal-to-noise ratios, highest power efficiency of any mode
- **Disadvantages**: Requires learning Morse code
- **Uses**: HF long-distance communication, DX (long-distance contacts), contests

### Digital Modes

Modern amateur radio makes extensive use of digital modulation:

- **FT8**: Currently the most popular digital mode, developed by Joe Taylor (K1JT). Capable of completing contacts with extremely weak signals (-24 dB below the noise floor)
- **FT4**: A faster variant of FT8, designed for contest use
- **RTTY** (Radioteletype): A classic digital mode using frequency-shift keying
- **PSK31**: A narrowband digital mode ideal for keyboard-to-keyboard chat
- **Winlink**: A radio-based email system used for emergency communications
- **JS8Call**: A keyboard-to-keyboard messaging mode built on the FT8 engine

## Power

### Watts

The basic unit of power is the watt (W), representing energy transferred per second. In amateur radio:

- **Handheld transceivers (HTs)**: Typically 1-8 W
- **Mobile radios**: Typically 25-75 W
- **HF transceivers**: Typically 5-200 W
- **High-power linear amplifiers**: Can reach 1000 W or more (requires appropriate license class)

### Decibels (dB)

The decibel is a **relative** unit used to describe the ratio between two power levels or signal levels.

```
dB = 10 x log10(P2 / P1)
```

Commonly used dB conversions:

| dB Value | Power Ratio | Meaning |
|----------|------------|---------|
| +3 dB | 2x | Power doubles |
| +6 dB | 4x | Power quadruples |
| +10 dB | 10x | Power increases tenfold |
| +20 dB | 100x | Power increases 100-fold |
| -3 dB | 0.5x | Power halves |
| -10 dB | 0.1x | Power drops to one-tenth |

### dBm and dBW

- **dBm**: Decibels referenced to 1 milliwatt. 0 dBm = 1 mW
- **dBW**: Decibels referenced to 1 watt. 0 dBW = 1 W

**Conversion examples**:
- 1 W = 30 dBm = 0 dBW
- 5 W = 37 dBm = 7 dBW
- 100 W = 50 dBm = 20 dBW

Understanding decibels is essential because they come up constantly in discussions about antenna gain, feedline loss, and receiver sensitivity.

## SWR (Standing Wave Ratio)

### What is SWR?

Standing Wave Ratio (SWR) is a critical metric for measuring how well your antenna system is matched. When RF energy travels from your transmitter through the feedline to the antenna, any impedance mismatch between the feedline and the antenna causes some energy to be reflected back, creating standing waves.

```
SWR = (1 + |reflection coefficient|) / (1 - |reflection coefficient|)
```

### Understanding SWR Values

| SWR | Reflected Power | Status |
|-----|----------------|--------|
| 1.0:1 | 0% | Perfect match (theoretical ideal) |
| 1.5:1 | 4% | Good |
| 2.0:1 | 11% | Acceptable |
| 3.0:1 | 25% | Needs improvement |
| 5.0:1 | 44% | Poor -- may damage the transmitter |
| Infinite | 100% | Complete mismatch (open or short circuit) |

**In practice**, an SWR below **1.5:1** is ideal, and below **2.0:1** is acceptable. Most modern radios automatically reduce power when SWR exceeds **3.0:1** to protect their power amplifier.

### How to Measure SWR

Use an **SWR meter** (also called a VSWR meter) or your radio's built-in SWR measurement function. Always measure SWR after installing a new antenna or replacing feedline.

## Antenna Gain

### What is Gain?

Antenna gain describes how effectively an antenna concentrates radiated energy in a particular direction. Gain does not mean the antenna "amplifies" the signal -- antennas are passive devices and do not generate energy. Instead, they focus energy in certain directions at the expense of others, like a flashlight focuses light into a beam.

### Units of Gain

- **dBi**: Gain relative to an isotropic antenna (a theoretical perfect omnidirectional antenna)
- **dBd**: Gain relative to a half-wave dipole antenna
- Conversion: **dBi = dBd + 2.15**

**Gain of common antennas**:

| Antenna Type | Gain (dBi) |
|-------------|-----------|
| Isotropic antenna | 0 dBi |
| Half-wave dipole | 2.15 dBi (0 dBd) |
| Quarter-wave vertical | 2-5 dBi |
| 3-element Yagi | ~8 dBi |
| 10-element Yagi | ~13 dBi |
| Parabolic dish (at microwave) | 20-40+ dBi |

## Polarization

Polarization refers to the orientation of the electric field of an electromagnetic wave.

### Common Polarization Types

- **Vertical polarization**: The electric field is perpendicular to the ground. Vertical antennas (such as the rubber duck antenna on an HT) radiate vertically polarized waves.
- **Horizontal polarization**: The electric field is parallel to the ground. A horizontally mounted dipole antenna radiates horizontally polarized waves.
- **Circular polarization**: The electric field rotates as the wave travels, either left-hand or right-hand circular. Commonly used for satellite communications.

### Polarization Matching

The transmitting and receiving antennas should ideally have the same polarization. If the polarization is cross-polarized (one vertical, one horizontal), there is a theoretical signal loss of about **20 dB** (in practice, reflections and scattering reduce this somewhat, but it is still very significant).

**Conventions**:
- VHF/UHF FM communication (repeaters, HTs): **Vertical polarization**
- VHF/UHF SSB/CW communication: **Horizontal polarization**
- HF communication: Polarization changes during ionospheric reflection, so it is less critical
- Satellite communication: **Circular polarization**

## Radio Wave Propagation

Understanding how radio waves travel is one of the most important areas of amateur radio knowledge. Different frequency bands have very different propagation characteristics.

### Ground Wave Propagation

Electromagnetic waves travel along the Earth's surface. Medium wave (MF) and lower HF signals propagate primarily via ground wave during the daytime. Range depends on ground conductivity, frequency, and power -- typically tens to a few hundred kilometers.

### Sky Wave (Ionospheric) Propagation

This is the primary propagation mechanism for HF (shortwave) communication. Radio waves radiated upward are refracted (commonly called "reflected") by the ionosphere back to Earth, enabling long-distance communication.

The ionosphere is divided into several layers:

| Layer | Altitude | Characteristics |
|-------|----------|----------------|
| **D layer** | 60-90 km | Present during daytime; absorbs lower HF signals |
| **E layer** | 90-130 km | Moderately ionized during daytime; can reflect lower frequencies |
| **F1 layer** | 150-210 km | Present during daytime |
| **F2 layer** | 250-400 km | The most important reflecting layer; at night, F1 and F2 merge into a single F layer |

Factors affecting sky wave propagation:
- **Solar activity**: Higher sunspot numbers mean greater ionization, which raises the Maximum Usable Frequency (MUF)
- **Time of day**: Propagation conditions differ dramatically between day and night
- **Season**: Different seasons produce different propagation characteristics
- **Solar cycle**: Approximately 11-year cycle of solar activity

### Line-of-Sight Propagation

VHF and UHF signals travel primarily in straight lines, similar to light. Range is limited by antenna height and terrain.

Approximate formula (accounting for atmospheric refraction):

```
Maximum line-of-sight distance (km) = 4.12 x (sqrt(h1) + sqrt(h2))
```

Where h1 and h2 are the heights of the two antennas in meters.

### Other Propagation Modes

- **Tropospheric ducting/refraction**: Temperature and humidity variations in the atmosphere can cause VHF/UHF signals to travel beyond line of sight
- **Sporadic E (Es)**: Occasional patches of intense ionization in the E layer can cause VHF signals to propagate over abnormally long distances
- **Meteor scatter**: Using the ionized trails left by meteors entering the atmosphere to reflect signals
- **Moonbounce (EME)**: Transmitting signals to the Moon and receiving the reflected signal
- **Aurora reflection**: During aurora activity, VHF signals can be reflected by the aurora

## Impedance and Matching

### Impedance

In RF circuits, impedance is composed of resistance and reactance, measured in ohms. The most common standard impedance in amateur radio is **50 ohms** -- the design impedance of most transceivers and coaxial cables.

### Why Matching Matters

When the transmitter (50 ohms), feedline (50 ohms), and antenna all have the same impedance, energy transfer efficiency is maximized and SWR is at its lowest. Impedance mismatch causes:

- Energy reflection, reducing radiation efficiency
- Higher SWR
- Increased feedline losses
- Potential damage to the transmitter

### Antenna Tuners (ATU)

When the antenna's impedance does not perfectly match the feedline, an antenna tuner (Antenna Tuning Unit) can perform impedance transformation so the transmitter "sees" close to 50 ohms. However, an ATU does not reduce the mismatch loss at the antenna itself -- it simply allows the transmitter to operate safely and efficiently into the load presented by the feedline.

---

With these fundamental concepts under your belt, you have the basic tools to understand amateur radio technology. Next, let's explore [the characteristics and uses of each frequency band](./0_3_bands_overview.md).
