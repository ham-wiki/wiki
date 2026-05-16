# DMR Digital Radio

DMR (Digital Mobile Radio) is an open digital radio standard originally developed for commercial two-way radio. It has been widely adopted by the amateur radio community for its efficient use of spectrum, global networking capabilities, and the availability of affordable equipment.

## How DMR Works

### TDMA (Time Division Multiple Access)

DMR uses TDMA to fit **two simultaneous conversations** into a single 12.5 kHz channel:

- The channel is divided into two **time slots** (TS1 and TS2), each 30 milliseconds long, alternating rapidly.
- Each time slot carries an independent voice or data stream.
- From the user's perspective, each time slot behaves like a separate channel.
- This doubles the capacity of each frequency compared to analog FM.

### Vocoder

DMR uses the **AMBE+2** vocoder (Advanced Multi-Band Excitation) to compress voice into approximately 3.6 kbps. This is efficient enough for clear voice at low data rates but can sound "robotic" or exhibit artifacts when signal levels are marginal.

### Digital vs. Analog

| Aspect | Analog FM | DMR |
|---|---|---|
| Audio quality at full signal | Natural, warm | Clear but digitally compressed |
| Audio at weak signal | Gradual degradation (noise) | Clean until "digital cliff" -- then total loss |
| Spectrum efficiency | One conversation per channel | Two conversations per channel |
| Features | Basic | Encryption, text messaging, GPS, talk groups |
| Interoperability | Universal | Requires compatible DMR equipment |

## Key DMR Concepts

### Color Codes

A **color code** (CC) is DMR's equivalent of a CTCSS tone. It prevents your radio from hearing transmissions from repeaters on the same frequency that use a different color code.

- Color codes range from **0 to 15**.
- You must set your radio to the same color code as the repeater you want to use.
- Most amateur DMR repeaters use **Color Code 1**, but always verify.

### Talk Groups

A **talk group** (TG) is a virtual "channel" that groups users together. When you transmit on a talk group, only radios monitoring that talk group hear you -- even if other talk groups are active on the same repeater and time slot.

Talk groups are how DMR organizes its global network. Common talk groups include:

| Talk Group | Name | Description |
|---|---|---|
| TG 1 | Worldwide | Global; all regions |
| TG 2 | Europe | European stations |
| TG 3 | North America | US, Canada, Mexico |
| TG 91 | Worldwide English | English-language worldwide |
| TG 93 | North America English | English-language NA |
| TG 310 | TAC 310 | Tactical/general purpose |
| TG 311 | TAC 311 | Tactical/general purpose |
| TG 3100 | USA | United States |
| TG 3023 | Ohio | State-level talk group (varies by state) |

Local and regional talk groups vary by area. Check with your local DMR repeater or network for their talk group lineup.

### Time Slot Usage

Repeaters typically assign different categories of talk groups to each time slot:

- **Time Slot 1 (TS1):** Wide-area talk groups (worldwide, continental, national)
- **Time Slot 2 (TS2):** Local and regional talk groups, plus general-purpose channels

This is a convention, not a technical requirement. Always check the specific repeater's configuration.

### Static vs. Dynamic Talk Groups

- **Static talk groups** are always active on a repeater. They are permanently connected.
- **Dynamic talk groups** are activated on demand. When you key up on a dynamic talk group, the repeater connects to it and keeps it active for a timeout period (typically 10--15 minutes after the last transmission).

Dynamic talk groups are preferred on busy repeaters to avoid tying up time slots with idle talk groups.

## DMR Networks

Amateur DMR repeaters connect to each other through internet-linked networks:

### Brandmeister

The largest amateur DMR network worldwide. Features:
- Global network of thousands of repeaters
- Self-service dashboard (`https://brandmeister.network`)
- Supports hotspot connections
- SIP/VoIP gateway for phone patching
- API for integration with other systems
- Talk group directory and real-time activity monitoring

### TGIF (The Gathering Is Fun)

A smaller, community-focused network:
- Less formal than Brandmeister
- Emphasis on experimentation and community
- Popular for special-interest talk groups

### DMR-MARC / c-Bridge

The original amateur DMR network, now somewhat merged with or supplemented by Brandmeister in many areas.

## Getting a DMR ID

Before using DMR, you need a **DMR ID** -- a unique numeric identifier tied to your callsign:

1. Visit `https://radioid.net`
2. Create an account with your callsign.
3. Submit a request for a DMR ID. You will need to provide proof of your amateur radio license.
4. Once approved (typically within 24--48 hours), you will receive a 7-digit DMR ID.
5. Program this ID into your DMR radio as your **Radio ID**.

## DMR Radios

### Popular Amateur DMR Handhelds

| Radio | Price Range | Features |
|---|---|---|
| **Anytone AT-D878UVII Plus** | Mid-range | Dual-band, APRS, Bluetooth, large memory |
| **Anytone AT-D578UV** | Mid-range | Mobile/base, dual-band, cross-mode |
| **TYT MD-UV380** | Budget | Dual-band, basic but functional |
| **Radioddity GD-77** | Budget | Popular, supported by OpenGD77 firmware |
| **Ailunce HD1** | Mid-range | GPS, dual-band, waterproof |

### Programming DMR Radios

DMR radios require more complex programming than analog radios. You will need to configure:

1. **Your DMR ID** (Radio ID)
2. **Channels** -- Each channel defines a frequency, time slot, color code, and talk group combination.
3. **Zones** -- Groups of channels organized by purpose or location.
4. **Contact list** -- A database of DMR IDs and callsigns for private calls and talk group names.
5. **Scan lists** -- Groups of channels to scan.

Most DMR radios come with manufacturer-specific CPS (Customer Programming Software). Community-generated code plugs (pre-built configuration files) are available for many areas and can save hours of manual programming.

## DMR Hotspots

A **hotspot** is a low-power personal DMR gateway that connects your DMR radio to the DMR network via the internet. Hotspots are ideal when you are not within range of a DMR repeater.

### Popular Hotspot Hardware

- **MMDVM (Multi-Mode Digital Voice Modem)** boards paired with a Raspberry Pi
- **Pi-Star** -- The most popular hotspot software, providing a web-based configuration interface
- **WPSD** -- A fork/alternative to Pi-Star
- **OpenSpot** -- A standalone commercial hotspot (no Raspberry Pi required)
- **ZUMspot, MMDVM_HS_Hat** -- Popular MMDVM hat boards for the Raspberry Pi

### Setting Up a Pi-Star Hotspot

1. Flash the Pi-Star image to a microSD card.
2. Insert the card into a Raspberry Pi with an MMDVM hat installed.
3. Boot the Pi and connect to its Wi-Fi access point for initial configuration.
4. Configure your callsign, DMR ID, network (Brandmeister or TGIF), and frequency.
5. Set the hotspot frequency to a clear frequency in the 70cm band (e.g., 438.800 MHz in regions where this is permitted for hotspot use). **Do not use a frequency occupied by a repeater.**
6. Program a channel in your DMR radio matching the hotspot's frequency, color code, and time slot.
7. Key up -- your transmission will be routed through the internet to the DMR network.

## DMR Operating Tips

1. **Keep transmissions short** on wide-area talk groups. Thousands of people may be listening.
2. **Pause between transmissions** to let the repeater and network catch up. A 2-second pause prevents clipping.
3. **Use the right talk group** for your audience. Don't chat on Worldwide (TG 1) about local topics; use a local or regional talk group.
4. **Monitor before transmitting.** Unlike analog FM where you can hear all activity, you only hear the talk group you are monitoring. Someone may be using the time slot on a different talk group.
5. **Identify with your callsign** as you would on analog. DMR transmits your callsign in the data stream, but voice identification is still required by regulation.
6. **Private calls** are possible on DMR (like a phone call to one specific DMR ID), but they tie up a repeater time slot for just two people. Use them sparingly on repeaters; they are more appropriate on hotspots.
