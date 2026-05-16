# Mobile Radio Guide

Mobile transceivers are designed to be installed in vehicles but serve equally well as base station radios at home. Compared to handhelds, mobile radios offer significantly higher power output (25–50 W typical, up to 100 W on some VHF models), better receivers, larger displays, and richer feature sets. If you want reliable local and regional communications, a mobile radio paired with a decent external antenna is a major upgrade from any HT.

## Why Choose a Mobile Radio?

- **More power:** 50 W versus 5 W means roughly 10 dB more signal — the difference between a scratchy contact and a full-quieting signal into a repeater.
- **Better receivers:** Mobile radios have room for better front-end filtering and shielding, resulting in fewer intermodulation problems.
- **Better audio:** Larger speakers and more powerful audio amplifiers produce clearer, louder sound.
- **Dual-band monitoring:** Most dual-band mobiles can simultaneously receive on two frequencies, letting you monitor a repeater and a simplex frequency at the same time.
- **External antenna connection:** Mobile radios connect to external antennas via standard SO-239/PL-259 connectors, giving you vastly better antenna options than a handheld's rubber duck.

## Key Features to Consider

### Power Output

Most VHF/UHF mobile radios output 50 W on VHF and 35–50 W on UHF. Some single-band VHF radios reach 65–100 W. Adjustable power settings let you reduce output to conserve current draw when full power is unnecessary.

### Single-Band vs. Dual-Band

- **Single-band (VHF only):** Less common today but useful for specific applications (packet, APRS dedicated rigs).
- **Dual-band (VHF + UHF):** The standard choice. Most repeaters operate on 2 m (VHF) or 70 cm (UHF), and a dual-band radio covers both.

### Digital Voice Modes

Several digital voice systems are available in mobile radios:

- **C4FM (System Fusion):** Yaesu's digital standard. Offers digital voice and data, automatic mode selection (AMS), and Wires-X internet linking.
- **D-STAR:** ICOM's digital protocol. Provides digital voice with built-in callsign routing and gateway linking.
- **DMR:** Some mobile radios (AnyTone AT-D578UVIII, for example) support DMR Tier II.
- **APRS:** Some radios have built-in APRS modems, sending and receiving position reports and messages.

### Detachable Faceplates

Many mobile radios allow the front panel to separate from the main body via an extension cable. This is extremely useful for vehicle installations where dashboard space is limited — you can tuck the main body under a seat and mount only the small faceplate in a convenient location.

### Cross-Band Repeat

Some mobile radios can act as cross-band repeaters, retransmitting signals received on one band (e.g., UHF) out on the other band (e.g., VHF). This effectively extends the range of a handheld by using the mobile radio's higher power and better antenna as a relay.

## Popular Models

### Yaesu FTM-300DR

The FTM-300DR is one of the most popular dual-band mobile radios currently in production.

**Key Features:**
- 50 W VHF / 40 W UHF
- C4FM digital voice (System Fusion) + conventional FM
- Built-in GPS and full APRS functionality (both analog APRS and digital C4FM)
- Band scope display
- Wires-X capable (connects C4FM to the internet via a computer or dedicated node)
- Detachable front panel with extension cable option
- Bluetooth via optional BU-2 module
- MicroSD card slot for memory and recording
- Dual receive (V+V, U+U, V+U)

**Price:** ~$300–370

**Verdict:** The go-to recommendation for most hams who want a do-everything dual-band mobile. Excellent receiver, feature-rich, well-supported.

### Yaesu FTM-500DR

The FTM-500DR is the step-up from the FTM-300DR, adding a full-color touch panel, higher-resolution display, and improved audio processing.

**Key Features:**
- All FTM-300DR features plus full-color touchscreen
- Enhanced C4FM with smart navigation
- Improved audio DSP
- Band scope with waterfall display

**Price:** ~$450–530

**Verdict:** Worth the premium if the touchscreen interface and enhanced display appeal to you. Otherwise the FTM-300DR covers the same core functionality.

### ICOM IC-2730A

The IC-2730A is a straightforward, no-nonsense dual-band analog mobile.

**Key Features:**
- 50 W VHF / 35 W UHF
- Dual receive with independent band controls
- Detachable front panel (standard)
- Large, easy-to-read display
- V/V, U/U, V/U simultaneous receive
- Simple, intuitive operation

**Price:** ~$220–280

**Verdict:** If you just want solid analog FM dual-band performance with an excellent user interface and do not need digital modes, the IC-2730A is hard to beat. It is one of the easiest mobile radios to operate.

### ICOM ID-5100A

ICOM's D-STAR capable dual-band mobile.

**Key Features:**
- 50 W VHF / 35 W UHF
- D-STAR digital voice and data with DR mode for easy repeater access
- GPS built-in
- D-PRS (D-STAR position reporting, compatible with APRS network)
- Touchscreen display
- Dual receive
- microSD slot for recording and D-STAR data

**Price:** ~$480–560

**Verdict:** The best mobile choice if you are invested in the D-STAR ecosystem. Excellent receiver and build quality.

### Kenwood TM-D710GA

A legendary radio among APRS enthusiasts.

**Key Features:**
- 50 W VHF / 35 W UHF
- Built-in full-featured TNC (Terminal Node Controller)
- Native APRS with SmartBeaconing
- Packet radio capable (1200/9600 baud)
- EchoLink memory operation
- Detachable front panel with control head extension
- Dual receive

**Price:** ~$480–550 (when available; Kenwood has had supply issues)

**Verdict:** If APRS is a priority, the TM-D710GA's built-in TNC and full APRS implementation are unmatched. Also excellent for packet radio and Winlink.

### AnyTone AT-D578UVIII Plus

A tri-band mobile with DMR capability.

**Key Features:**
- VHF / UHF / 220 MHz (1.25 m band)
- DMR Tier II + analog FM
- APRS (analog and DMR)
- GPS and Bluetooth
- Cross-band repeat
- Air band receive
- ~$300–380

**Verdict:** The primary choice for hams who want DMR in a mobile form factor, with the bonus of tri-band coverage.

## Vehicle Installation Tips

### Power Wiring

**Always wire your mobile radio directly to the vehicle battery**, not to an accessory circuit. Use appropriately sized wire (10–12 AWG for a 50 W radio) and install an inline fuse near the battery terminal. Poor power wiring is the number one cause of alternator whine and RF noise problems.

- Run the positive and negative leads directly to the battery terminals.
- Keep leads as short as practical.
- Use ring terminals with proper crimps (or solder and heat shrink).
- Install fuses within 12 inches of the battery on both the positive lead. The negative lead fuse is optional but recommended.

### Antenna Mounting

For vehicle use, the most common antenna options are:

- **Magnetic mount (mag-mount):** Easy to install and remove, no holes to drill. Performance is slightly reduced compared to permanent mounts because ground plane coupling is imperfect, but for most VHF/UHF use this is perfectly adequate.
- **NMO (New Motorola) mount:** A permanent through-hole mount that provides the best ground plane connection. Requires drilling a hole in the vehicle roof. This is the professional standard.
- **Lip mount / trunk lip mount:** Clamps to the edge of a trunk lid or hatchback. No drilling required, good performance.
- **Stake-hole mount:** For pickup trucks, mounts in the bed stake pockets.

Route coax cable away from power wiring and computer/control modules to minimize noise pickup.

### Faceplate Placement

Use the detachable faceplate option to place the control head where you can see and reach it safely while driving. Common mounting locations:

- Dashboard using adhesive mounts or RAM mounts
- A-pillar mount
- Center console or transmission tunnel
- Overhead using a headliner mount

The main radio body can go under a seat, behind a panel, or in the trunk.

### Noise Suppression

If you encounter alternator whine or ignition noise:

1. Verify direct battery wiring with short leads
2. Add ferrite chokes to the power cable and coax near the radio
3. Check ground connections — ensure the antenna mount has good electrical contact with the vehicle body
4. Try a DC power line filter if problems persist

## Using a Mobile Radio as a Base Station

A mobile radio makes an excellent and cost-effective base station. You will need:

- **A 13.8 V DC power supply:** Choose a switching or linear supply rated for at least the radio's maximum current draw (typically 10–15 A for a 50 W radio). Popular choices include the Powerwerx SS-30DV (switching, 30 A) and MFJ-4230MV.
- **An external antenna:** A base antenna like a Diamond X-50A or X-200A dual-band vertical, mounted as high as possible outside.
- **Coaxial cable:** Good quality low-loss coax like LMR-240 or LMR-400 to connect the radio to the antenna.

This setup will outperform any handheld radio by a wide margin and costs less than most premium HTs.

## Summary Recommendations

| Use Case | Recommended Model |
|---|---|
| Best all-around | Yaesu FTM-300DR |
| Simple analog only | ICOM IC-2730A |
| D-STAR focus | ICOM ID-5100A |
| APRS / packet focus | Kenwood TM-D710GA |
| DMR mobile | AnyTone AT-D578UVIII Plus |
| Premium with touchscreen | Yaesu FTM-500DR |
