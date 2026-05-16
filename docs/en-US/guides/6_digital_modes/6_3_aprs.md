# APRS System

APRS (Automatic Packet Reporting System) is a tactical communication system that combines amateur radio with digital data to provide real-time information sharing. Originally developed by Bob Bruninga (WB4APR, SK), APRS is used for position tracking, two-way messaging, weather reporting, telemetry, and more.

## What APRS Does

APRS is not just GPS tracking -- though that is its most visible application. The system supports:

- **Position reporting** -- Stations beacon their location, displayed on maps
- **Messaging** -- Two-way text messages between stations (like SMS over radio)
- **Weather stations** -- Automated weather data reporting
- **Telemetry** -- Remote sensor data (voltage, temperature, etc.)
- **Object placement** -- Marking locations of interest on the map (e.g., emergency shelters, road closures)
- **Direction finding** -- Tracking signal sources
- **Announcements and bulletins** -- Group messages and local information

## How APRS Works

### The Basics

1. An APRS station generates a **packet** containing its data (position, message, weather data, etc.).
2. The packet is transmitted on the **APRS frequency** using **AX.25 packet radio** at **1200 baud** (Bell 202 AFSK modulation).
3. **Digipeaters** (digital repeaters) hear the packet and retransmit it, extending its range.
4. **iGates** (internet gateways) hear the packet and forward it to **APRS-IS** (APRS Internet System), a network of servers that distribute APRS data worldwide.
5. Anyone can view APRS data on mapping websites (e.g., `https://aprs.fi`) or through APRS-capable software.

### APRS Frequencies

| Region | Frequency |
|---|---|
| North America | **144.390 MHz** |
| Europe | **144.800 MHz** |
| Australia | **145.175 MHz** |
| Japan | **144.640 MHz** |
| China | **144.640 MHz** |
| South America | **145.570 MHz** |

These are shared, simplex frequencies. All APRS traffic in a region shares one channel.

### Path and Digipeating

When an APRS packet is transmitted, it includes a **path** that determines how many times it should be relayed by digipeaters:

| Path | Meaning | Recommended Use |
|---|---|---|
| `WIDE1-1` | Relay through one fill-in digipeater | Urban areas with good digipeater coverage |
| `WIDE1-1,WIDE2-1` | One fill-in hop, then one wide-area hop | Most common; good for general use |
| `WIDE1-1,WIDE2-2` | One fill-in hop, then two wide-area hops | Rural areas with sparse coverage |

::: warning
**Never use paths wider than necessary.** Every digipeater retransmission uses shared channel time. Excessive path settings (e.g., `WIDE2-5`) flood the channel and degrade performance for everyone. In most areas, `WIDE1-1,WIDE2-1` is the maximum recommended path.
:::

## APRS Equipment

### Dedicated APRS Radios

Some radios have built-in APRS capability:

| Radio | Type | APRS Features |
|---|---|---|
| **Yaesu FT5D** | Handheld | Full APRS with GPS, messaging, SmartBeaconing |
| **Yaesu FT3DR** | Handheld | Full APRS with GPS |
| **Yaesu FTM-400XDR** | Mobile | Full APRS with GPS, large display |
| **Yaesu FTM-300DR** | Mobile | Full APRS with GPS |
| **Kenwood TM-D710GA** | Mobile | Full APRS with GPS, considered the gold standard |
| **Kenwood TH-D75A** | Handheld | Full APRS with GPS, Bluetooth, D-STAR |

### TNC (Terminal Node Controller) + Radio

A TNC is a modem that sits between a radio and a computer (or GPS), handling the AX.25 packet encoding/decoding:

- **Mobilinkd TNC4** -- Bluetooth TNC; pairs with a smartphone running APRSDroid or similar apps
- **Coastal ChipWorks TNCPi** -- Raspberry Pi-based TNC
- **Argent Data Tracker3** -- Standalone APRS tracker (GPS + TNC + radio interface)
- **Byonics TinyTrak4** -- Compact GPS tracker/TNC

### Software TNC (Sound Card Packet)

Instead of dedicated hardware, a sound card interface and software can provide TNC functionality:

- **Direwolf** -- Open-source software TNC for Windows, Linux, and macOS. Connects to a radio via a sound card interface and provides full APRS encode/decode capability. Widely used for iGates and digipeaters.
- **UZ7HO SoundModem** -- Windows software TNC

### Smartphone APRS

With a Bluetooth TNC (like the Mobilinkd) or a cable connection, smartphones can serve as the APRS display and controller:

- **APRSDroid** (Android) -- Full-featured APRS client
- **APRS.fi** (iOS/Android) -- View APRS data (receive only via internet)

## APRS-IS (Internet System)

APRS-IS is a worldwide network of servers that collect and distribute APRS data received by iGates. This allows:

- Real-time viewing of all APRS stations worldwide on websites like `https://aprs.fi`
- Sending messages to RF stations from internet-connected clients
- Two-way messaging between RF and internet-connected stations
- Historical data queries and analysis

### Connecting to APRS-IS

You can connect to APRS-IS with software on your computer:

- **APRSISCE/32** (Windows) -- Full-featured APRS client with maps
- **Xastir** (Linux) -- Open-source APRS client with mapping
- **PinPoint APRS** (Windows) -- Lightweight APRS client

APRS-IS access requires a **passcode** derived from your callsign for transmitting (receiving is open to all). The passcode is a simple hash of your callsign and can be generated by most APRS software.

::: tip
You can view APRS data without any radio equipment at all. Visit `https://aprs.fi`, enter a callsign, and see its position, path, and message history. This is a great way to learn how APRS works before investing in equipment.
:::

## Setting Up an iGate

An **iGate** receives APRS packets on RF and forwards them to APRS-IS (receive-only iGate), or does both directions (two-way iGate). Running an iGate is a valuable service to the APRS network.

### Basic iGate Setup

1. **Radio:** A 2-meter FM radio tuned to the APRS frequency, connected to a reasonable antenna (a simple ground-plane or J-pole at a decent height works well).
2. **Interface:** A sound card interface connecting the radio's audio to a computer, or a hardware TNC.
3. **Software:** Direwolf is the most popular choice for iGate operation.
4. **Computer:** A Raspberry Pi is more than capable and is the most common choice for dedicated iGates.
5. **Internet connection:** The iGate needs a reliable internet connection to communicate with APRS-IS servers.

### Direwolf iGate Configuration

Direwolf is configured via a text file (`direwolf.conf`). Key settings include:

```bash
# Your callsign with SSID
MYCALL N0CALL-10

# Audio device
ADEVICE plughw:1,0

# iGate configuration
IGSERVER noam.aprs2.net
IGLOGIN N0CALL-10 12345

# Enable receive-only iGate
IGTXVIA 0
```

Replace `N0CALL-10` with your callsign and an appropriate SSID (see below), and `12345` with your APRS-IS passcode.

### APRS SSIDs

The SSID (Secondary Station Identifier) is the number after the dash in a callsign. Convention assigns meaning to SSID numbers:

| SSID | Typical Use |
|---|---|
| -0 or none | Home station, fixed |
| -1 | Digipeater, home station alternate |
| -2 | Digipeater (alternate) |
| -5 | Smartphone |
| -7 | Handheld radio |
| -8 | Boat, maritime |
| -9 | Car, primary mobile |
| -10 | iGate, internet only |
| -11 | Balloon, aircraft |
| -12 | Laptop, portable |
| -14 | Trucking |
| -15 | Generic, software on HF |

## APRS Best Practices

1. **Beacon rate:** Don't beacon too frequently. For a fixed station, once every 30 minutes is sufficient. For mobile, use SmartBeaconing (which adjusts rate based on speed and direction changes) or beacon every 1--2 minutes.
2. **Keep paths short.** `WIDE1-1,WIDE2-1` is appropriate for most situations.
3. **Use meaningful status text.** The comment field in your beacon can carry useful information (your name, QTH, email, or club affiliation).
4. **Choose the right symbol.** APRS has dozens of map symbols (house, car, truck, weather station, etc.). Use the one that matches your station type.
5. **Respond to messages.** If someone sends you an APRS message, reply. Unanswered messages clutter the channel with automatic retries.
6. **Run an iGate if you can.** The APRS network depends on iGates. Even a receive-only iGate running on a Raspberry Pi with a cheap radio contributes significantly.
