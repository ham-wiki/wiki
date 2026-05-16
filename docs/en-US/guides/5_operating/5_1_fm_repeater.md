# FM Repeater Operations

FM repeaters are the backbone of local amateur radio communication. They extend the range of low-power handheld and mobile radios by receiving signals on one frequency and simultaneously retransmitting them on another from a high, well-located site. For most new hams, repeaters are the first and most frequently used part of amateur radio.

## How Repeaters Work

A repeater is a radio system consisting of:

1. **A receiver** tuned to the repeater's **input frequency** (the frequency you transmit on)
2. **A transmitter** operating on the repeater's **output frequency** (the frequency you listen on)
3. **A controller** that manages the repeater's logic (timers, identification, courtesy tones, etc.)
4. **An antenna** (usually at a high elevation -- hilltop, tall building, or tower)
5. **A duplexer** that allows the receiver and transmitter to share a single antenna without interfering with each other

When you transmit on the repeater's input frequency, the repeater receives your signal, and its transmitter immediately re-broadcasts it on the output frequency at higher power and from a superior location. Other stations listen on the output frequency and hear your retransmitted signal.

### Simplex vs. Repeater

- **Simplex:** Both stations transmit and receive on the **same** frequency. Range is limited by the stations' power and antenna height.
- **Repeater (duplex):** You transmit on one frequency and listen on another. The repeater relays your signal, dramatically extending range.

## Frequency Offset

The difference between a repeater's input (your transmit) and output (your receive) frequencies is called the **offset**. Standard offsets vary by band:

| Band | Standard Offset | Direction Convention |
|---|---|---|
| 10 meters (29 MHz) | 100 kHz | Varies |
| 6 meters (52 MHz) | 1 MHz | Varies |
| 2 meters (144 MHz) | 600 kHz (0.6 MHz) | - below 147 MHz, + above (general US rule) |
| 1.25 meters (222 MHz) | 1.6 MHz | - (typically) |
| 70 centimeters (440 MHz) | 5 MHz | + (typically in the US) |

**Example:** A 2-meter repeater with an output frequency of 147.060 MHz and a positive (+) offset:

- **You listen on:** 147.060 MHz (the repeater's output)
- **You transmit on:** 147.660 MHz (147.060 + 0.600 = 147.660, the repeater's input)

::: tip
When programming a repeater into your radio, you enter the **output** frequency as the main frequency and set the offset direction and amount. The radio automatically calculates your transmit frequency.
:::

## CTCSS and DCS Tones

Most repeaters require a **tone** to activate. This prevents the repeater from being triggered by noise, interference, or signals from distant repeaters on the same frequency.

### CTCSS (Continuous Tone-Coded Squelch System)

CTCSS, also called **PL tone** (Motorola's trademark "Private Line"), is a sub-audible tone transmitted continuously along with your voice signal. The repeater's receiver checks for this tone and only activates the transmitter when the correct tone is present.

- CTCSS tones range from **67.0 Hz to 254.1 Hz** (below the normal voice range, so you don't hear them)
- There are **50 standard CTCSS tones**
- Common tones include 100.0, 103.5, 107.2, 110.9, 114.8, 118.8, 123.0, 127.3, 131.8, 136.5 Hz
- If you transmit without the correct tone, the repeater will ignore your signal entirely

### DCS (Digital-Coded Squelch)

DCS, also called **DPL** (Motorola's "Digital Private Line"), serves the same purpose as CTCSS but uses a digital code instead of an analog tone.

- DCS codes are three-digit numbers (e.g., 023, 025, 026, 031, etc.)
- There are **104 standard DCS codes**
- DCS can be set to **normal (N)** or **inverted (I)** polarity
- DCS is less common on amateur repeaters than CTCSS but is used in some areas

### Tone Modes in Your Radio

| Setting | Meaning |
|---|---|
| **None / Off** | No tone sent or required |
| **Tone** (or **Encode**) | Send CTCSS tone on transmit only; receive squelch is open |
| **TSQL** (Tone Squelch) | Send and require CTCSS tone; your receiver only opens when the correct tone is present |
| **DCS** / **DTCS** | Send and/or require DCS code |

For accessing a repeater, you typically only need **Tone** (encode on transmit). **TSQL** is useful if you want to only hear traffic through the repeater and not stray signals.

## Operating Procedures

### Making a Call

1. **Listen first.** Monitor the repeater for a few seconds to make sure no one is in the middle of a conversation.
2. **Key up and identify.** Press PTT and say your callsign clearly: *"This is [your callsign], listening."* or *"[Your callsign], monitoring."*
3. **Wait.** If someone is available and wants to talk, they will respond with their callsign.
4. **Begin the conversation.** Exchange names, locations, signal reports, and whatever else you'd like to discuss.

### Joining an Ongoing Conversation

If you hear a conversation and want to join:

1. **Wait for a pause** between transmissions (when neither station is transmitting).
2. **Quickly give your callsign** during the pause: *"[Your callsign]."*
3. **Wait for acknowledgment.** One of the stations will invite you into the conversation.
4. If the conversation is a directed net or emergency traffic, follow the net control's instructions instead.

### Kerchunking

**Kerchunking** -- keying up the repeater without identifying -- is poor practice and, in many countries, illegal. Always identify when you transmit.

### The Courtesy Tone

Many repeaters emit a short beep or tone after a station finishes transmitting. This **courtesy tone** signals:

1. The repeater's timer has reset.
2. It is now appropriate for the next station to transmit.

Wait for the courtesy tone before transmitting. This ensures the repeater timer doesn't time out and gives other stations a chance to break in.

### Repeater Timeout

Repeaters have a **timeout timer** (typically 2--3 minutes) that cuts off the transmitter if a single station transmits continuously for too long. This prevents the repeater from being tied up by a stuck microphone or a single excessively long transmission.

If the repeater times out on you:

1. Release PTT immediately.
2. Wait for the repeater to reset (usually a few seconds).
3. Continue your transmission in shorter segments.

Keep your transmissions to **under 60 seconds** at a time as a general courtesy, giving others a chance to break in if needed.

## Repeater Etiquette

- **Identify at the beginning and end** of a contact, and at least every 10 minutes during extended conversations.
- **Keep transmissions brief.** Long monologues tie up the repeater and prevent others from using it.
- **Use simplex when possible.** If you can hear the other station without the repeater, move to a simplex frequency. Repeaters are a shared resource.
- **Yield to emergency traffic.** If someone calls for emergency assistance, all other traffic should cease immediately.
- **Avoid controversial topics.** Politics, religion, and other divisive subjects are best avoided on repeaters. Remember that anyone can listen.
- **No commercial activity.** Amateur radio is for personal, non-commercial use. Do not conduct business over the repeater.
- **Respect net schedules.** Many repeaters host scheduled nets (regular group check-ins). Avoid casual use of the repeater during net times.

## Finding Repeaters

### RepeaterBook

**RepeaterBook** (`https://www.repeaterbook.com`) is the most comprehensive database of amateur radio repeaters worldwide. You can search by:

- Location (city, state, country)
- Frequency band
- Proximity to your coordinates
- Features (linked, IRLP, EchoLink, etc.)

### ARRL Repeater Directory

The ARRL publishes an annual repeater directory for the United States and Canada, available in print and digital formats.

### Local Radio Clubs

Your local amateur radio club will know which repeaters are active and well-maintained in your area. Club repeaters are often the most reliable and best-maintained.

### Scanning

If all else fails, set your radio to scan across the repeater sub-band. When it stops on an active signal, you've found an active repeater.

## Linked Repeater Systems

Some repeaters are **linked** together via the internet or dedicated radio links, forming networks that extend coverage over very large areas.

### IRLP (Internet Radio Linking Project)

IRLP connects repeaters over the internet. Each IRLP-connected repeater has a **node number**. To connect to another node, you enter the node number using your radio's DTMF keypad.

### EchoLink

EchoLink is similar to IRLP but also allows connection from a computer or smartphone app. This means you can access EchoLink-connected repeaters from anywhere with an internet connection (after verifying your amateur license).

### AllStar Link

AllStar is an open-source system for linking repeaters and nodes via the internet. It uses the Asterisk telephony engine and is popular for building private or community-wide linked networks.
