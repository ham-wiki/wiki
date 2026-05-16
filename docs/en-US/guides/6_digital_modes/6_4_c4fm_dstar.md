# C4FM & D-STAR

C4FM (System Fusion) and D-STAR are manufacturer-specific digital voice systems for amateur radio. Unlike DMR (which is an open standard used by many manufacturers), C4FM is Yaesu's system and D-STAR is ICOM's. Both offer digital voice, data capabilities, and internet linking, but they are not directly compatible with each other.

## C4FM / Yaesu System Fusion

### What is C4FM?

C4FM stands for **Continuous 4-level Frequency Modulation**, which describes the modulation scheme. **System Fusion** is Yaesu's marketing name for their digital radio system built around C4FM.

Key characteristics:

- Uses the same 12.5 kHz channel spacing as analog FM
- **Automatic Mode Select (AMS)** allows a System Fusion repeater to accept both analog FM and digital C4FM transmissions, switching automatically
- No equivalent of DMR's talk groups or color codes -- the system is simpler but less flexible
- Supports voice, data, and simultaneous voice+data modes

### C4FM Modes

| Mode | Voice | Data | Bandwidth | Notes |
|---|---|---|---|---|
| **DN (Digital Narrow)** | Yes | Yes (simultaneously) | 12.5 kHz | Voice + GPS/data. Most common mode |
| **VW (Voice Wide)** | Yes (higher quality) | No | 12.5 kHz | Full bandwidth for voice; best audio quality |
| **DW (Data Wide)** | No | Yes (high speed) | 12.5 kHz | Data-only mode |
| **FM (Analog)** | Yes | No | 12.5 kHz | Standard analog FM for backward compatibility |

For general use, **DN mode** is recommended as it provides good voice quality while also transmitting GPS position and other data.

### Wires-X

**Wires-X** (Wide-coverage Internet Repeater Enhancement System) is Yaesu's internet linking system for System Fusion. It connects repeaters and nodes into a global network.

#### Rooms and Nodes

- A **room** is a conference server where multiple stations and repeaters can connect simultaneously (similar to a DMR talk group).
- A **node** is a single repeater or hotspot connected to Wires-X.
- Users can connect to rooms or directly to other nodes from their radio's front panel (if the local repeater supports Wires-X) or through a hotspot.

#### Connecting to a Wires-X Room

1. Press the **DX** button (or equivalent) on your Yaesu radio while connected to a Wires-X-enabled repeater.
2. The radio displays a list of available rooms and nodes.
3. Select the desired room and press **Connect**.
4. Once connected, all voice traffic passes through the room.
5. To disconnect, press **DX** again and select **Disconnect**.

#### Popular Wires-X Rooms

| Room | Name | Description |
|---|---|---|
| 21080 | America Link | General North American room |
| 27159 | Fusion Reflector | International English |
| 40880 | YSF2DMR | Cross-mode gateway to DMR |

The room list changes frequently. Use the Wires-X search function on your radio or check online directories.

### System Fusion Repeaters

System Fusion repeaters are widely deployed worldwide. Many operate in **AMS mode**, accepting both analog FM and C4FM digital signals. This makes them backward-compatible with any analog FM radio -- you don't need a Fusion radio to use a Fusion repeater (though you won't get digital features with an analog radio).

Find System Fusion repeaters at:

- `https://www.yaesu.com/jp/en/wires-x/id/active_node.php`
- RepeaterBook (filter by System Fusion)

### Popular C4FM Radios

| Radio | Type | Key Features |
|---|---|---|
| **Yaesu FT-70DR** | Handheld | Budget entry into C4FM |
| **Yaesu FT-5D** | Handheld | Top-of-line; C4FM + APRS + GPS + Bluetooth |
| **Yaesu FT-3DR** | Handheld | Full-featured; GPS + touch screen |
| **Yaesu FTM-300DR** | Mobile | C4FM + APRS + GPS; dual receive |
| **Yaesu FTM-500DR** | Mobile | Latest mobile; improved display and features |

## D-STAR (Digital Smart Technologies for Amateur Radio)

### What is D-STAR?

D-STAR is a digital voice and data protocol developed by **JARL** (Japan Amateur Radio League) and implemented primarily by **ICOM**. It was the first commercially available digital voice system for amateur radio.

Key characteristics:

- Uses **GMSK modulation** (Gaussian Minimum Shift Keying) on VHF/UHF
- Voice codec: **AMBE** (original) or **AMBE+2** (newer radios)
- Supports simultaneous voice and low-speed data (GPS position, text)
- Callsign-based routing: you can call a specific station by callsign, and the network routes your call to the repeater where that station was last heard
- Slower adoption than DMR due to higher equipment cost and ICOM-centric ecosystem

### D-STAR Concepts

#### Repeater Modules

D-STAR repeaters typically have multiple **modules** (essentially separate repeater units on different bands):

| Module | Band | Typical Use |
|---|---|---|
| **A** | 23 cm (1.2 GHz) | High-speed data (DD mode) |
| **B** | 70 cm (430 MHz) | Digital voice (DV mode) |
| **C** | 2 m (144 MHz) | Digital voice (DV mode) |

#### Reflectors

D-STAR **reflectors** are conference servers (similar to DMR talk groups or Wires-X rooms). Repeaters and hotspots connect to reflectors, and all connected stations hear each other.

- Reflectors are identified by three-letter designators: **REF**, **XRF**, **DCS**
- Each reflector has multiple **modules** (A through Z)
- Example: **REF001 C** is module C of reflector REF001

#### Gateway and Linking

D-STAR repeaters with an internet gateway can:

- Connect to reflectors
- Route calls to specific stations via **callsign routing**
- Link directly to other repeaters

#### Callsign Routing

One of D-STAR's unique features is callsign-based routing:

1. You program the **destination callsign** into your radio's URCALL field.
2. When you transmit, the D-STAR network looks up where that callsign was last active and routes your transmission to that repeater.
3. The other station hears your call, regardless of which repeater they are near.

This requires both stations to be registered in the D-STAR gateway system.

### D-STAR Registration

To use D-STAR's internet linking and routing features, you must register your callsign:

1. Visit a D-STAR registration page (varies by region; your local D-STAR repeater operator can direct you).
2. Create an account with your callsign, name, and a terminal/device identifier.
3. Your registration propagates across the D-STAR Trust servers.
4. Once registered, you can use callsign routing, connect to reflectors, and access the full D-STAR network.

### D-STAR Radio Programming

D-STAR radios require specific fields to be programmed for each repeater:

| Field | Description | Example |
|---|---|---|
| **Frequency** | Repeater output frequency | 146.610 MHz |
| **Offset** | Repeater offset | -0.600 MHz |
| **RPT1** | Local repeater module callsign | W1ABC C (module C) |
| **RPT2** | Gateway callsign | W1ABC G (G = gateway) |
| **MYCALL** | Your callsign | W2XYZ |
| **URCALL** | Destination | CQCQCQ (general call) or a specific callsign |

Setting **URCALL** to `CQCQCQ` makes a general call (like analog FM). Setting it to a specific callsign initiates callsign routing.

### Popular D-STAR Radios

| Radio | Type | Key Features |
|---|---|---|
| **ICOM ID-52A** | Handheld | Latest flagship; D-STAR + GPS + Bluetooth + microSD |
| **ICOM ID-51A Plus 2** | Handheld | Mature, well-supported |
| **ICOM ID-31A Plus** | Handheld | UHF only; compact |
| **ICOM IC-9700** | Base | VHF/UHF/1.2 GHz; D-STAR + analog; SDR architecture |
| **ICOM IC-705** | Portable | HF/VHF/UHF; D-STAR; portable QRP transceiver |
| **Kenwood TH-D75A** | Handheld | D-STAR + APRS (Kenwood's first D-STAR radio) |

## Cross-Mode Operation

One of the challenges of having multiple digital voice systems is that they are not natively compatible. Several solutions exist:

### Multi-Mode Hotspots

MMDVM-based hotspots (running Pi-Star or WPSD) can operate in **multiple modes**:

- DMR, C4FM, D-STAR, P25, and NXDN
- You can switch between modes by changing the hotspot's configuration or by having the hotspot monitor for all modes simultaneously

### Cross-Mode Bridges

Some repeaters and network operators run **bridges** that connect different digital voice systems:

- A DMR talk group may be bridged to a D-STAR reflector and a Wires-X room, so stations on all three systems can communicate.
- Audio quality may be slightly degraded when transcoding between vocoders.
- Bridge availability and reliability varies.

### Choosing a System

| Factor | DMR | C4FM | D-STAR |
|---|---|---|---|
| Equipment cost | Low--Mid | Mid | Mid--High |
| Repeater availability | High | Growing | Moderate |
| Complexity | Moderate (talk groups, code plugs) | Low (AMS simplifies things) | Moderate (registration, programming) |
| Open standard | Yes | No (Yaesu proprietary) | Partially (protocol is documented; AMBE codec is proprietary) |
| Unique feature | Talk groups, time slots | AMS analog/digital compatibility | Callsign routing |
| Hotspot support | Excellent | Good | Good |

For most new operators, the choice often comes down to:

- What system your local repeaters use
- What system your friends use
- What radio you already own or want to buy

All three systems work well, and multi-mode hotspots make it possible to access all of them from a single hotspot installation.
