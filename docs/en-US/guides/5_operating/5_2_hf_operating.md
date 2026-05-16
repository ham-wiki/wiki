# HF Operating Basics

Operating on the HF (High Frequency) bands -- 1.8 MHz to 30 MHz -- is where amateur radio truly becomes a global pursuit. HF signals can bounce off the ionosphere, allowing communication across continents with modest equipment. This guide covers the fundamental skills for making HF contacts.

## The HF Experience

Unlike VHF/UHF repeater operation where contacts are reliable and predictable, HF is dynamic and sometimes magical. Propagation conditions change constantly -- affected by the solar cycle, time of day, season, and space weather. A station you cannot hear at noon may be booming in at sunset. This unpredictability is a large part of what makes HF fascinating.

## Band Characteristics

Each HF band has its own personality:

| Band | Best Time | Typical Range | Character |
|---|---|---|---|
| **160m** (1.8 MHz) | Night | Regional to continental | "Top Band" -- challenging, noisy, but rewarding |
| **80m** (3.5 MHz) | Evening/Night | Regional to continental | Popular ragchew band; noisy in summer |
| **60m** (5 MHz) | Evening/Night | Regional | Limited channels; channelized in many countries |
| **40m** (7 MHz) | Day and Night | Regional (day), DX (night) | Workhorse band; excellent all-around |
| **30m** (10 MHz) | Day and Night | DX | CW and digital only; quiet and productive |
| **20m** (14 MHz) | Daytime | DX worldwide | The "king of DX"; most active DX band |
| **17m** (18 MHz) | Daytime | DX | Smaller allocation; less crowded |
| **15m** (21 MHz) | Daytime (solar max) | DX | Excellent when open; follows solar cycle |
| **12m** (24 MHz) | Daytime (solar max) | DX | Smaller allocation; sporadic openings |
| **10m** (28 MHz) | Daytime (solar max) | DX and local | Wide band; amazing when open, dead when closed |

## Making a Contact (QSO)

### Calling CQ

CQ is the universal invitation to any station to make contact. When you call CQ, you are announcing that you are available and inviting anyone who hears you to respond.

**Standard CQ call on SSB (voice):**

> *"CQ CQ CQ, this is [your callsign], [phonetically]. Calling CQ and standing by."*

Example:

> *"CQ CQ CQ, this is W1ABC, Whiskey One Alpha Bravo Charlie. Calling CQ and standing by."*

Tips for calling CQ:

- **Say CQ three times**, followed by your callsign twice (once phonetically at minimum).
- **Keep it brief.** A CQ call should be 15--20 seconds long, not a minute-long speech.
- **Listen between calls.** After calling CQ, listen for at least 5--10 seconds before calling again. A station may be trying to respond.
- **Direct your CQ** if desired: *"CQ DX"* (seeking long-distance contacts), *"CQ Europe"*, *"CQ Japan"*, etc.

### Responding to a CQ

When you hear a station calling CQ and want to make contact:

1. **Wait for the calling station to finish** and say "standing by" or similar.
2. **Give your callsign clearly**, once or twice, using phonetics:

> *"W1ABC, this is [your callsign], [phonetically]."*

1. Wait for the calling station to acknowledge you.

### The Standard Exchange

A basic HF contact includes:

1. **Callsigns** -- Confirmed at the beginning of the contact.
2. **Signal report** -- How well you hear the other station (see RST system below).
3. **Name and location** -- Your first name and city/state or grid square.
4. **Equipment and conditions** -- Optional but common: what radio and antenna you're using, propagation observations.
5. **Sign-off** -- Thank the other station and exchange final callsigns.

**Example of a minimal contact:**

> *"W2XYZ, this is W1ABC. You're 59 into Boston, Massachusetts. Name here is Alex. Back to you."*
>
> *"W1ABC from W2XYZ. Thanks, Alex. You're also 59 into New York City. Name is Mike. 73 and good DX."*
>
> *"W2XYZ, 73, this is W1ABC clear."*

## The RST System

The **RST** (Readability, Strength, Tone) system is the standard method for reporting signal quality in amateur radio.

### Readability (R)

| R | Meaning |
|---|---|
| 1 | Unreadable |
| 2 | Barely readable, occasional words distinguishable |
| 3 | Readable with considerable difficulty |
| 4 | Readable with practically no difficulty |
| 5 | Perfectly readable |

### Strength (S)

| S | Meaning |
|---|---|
| 1 | Faint, barely perceptible |
| 2 | Very weak |
| 3 | Weak |
| 4 | Fair |
| 5 | Fairly good |
| 6 | Good |
| 7 | Moderately strong |
| 8 | Strong |
| 9 | Extremely strong |

### Tone (T) -- CW Only

The T component is used for CW (Morse code) signals to describe the quality of the tone:

| T | Meaning |
|---|---|
| 1 | Extremely rough, hissing |
| 9 | Perfect tone, no hum or ripple |

**Common reports:**

- **59** -- Full readability, extremely strong signal. This is the most commonly given report (sometimes too generously).
- **57** -- Perfectly readable, moderately strong. A more honest report for a solid signal.
- **33** -- Readable with difficulty, weak signal. Challenging but workable.

::: tip
Be honest with signal reports. Giving "59" when the signal is really a "55" or "44" doesn't help anyone. Accurate reports help the other station understand their actual performance.
:::

## QSL Cards

A **QSL card** is a written confirmation of a two-way contact. Exchanging QSL cards is one of amateur radio's oldest traditions and is required for most operating awards.

### Paper QSL Cards

Traditional QSL cards are postcards that include:

- Your callsign, name, and address
- The other station's callsign
- Date and time (UTC) of the contact
- Frequency or band
- Mode (SSB, CW, FT8, etc.)
- Signal report exchanged
- Your signature

**Methods of exchange:**

- **Direct:** Mail a QSL card directly to the other station's address (include a self-addressed stamped envelope or IRC for international).
- **Bureau:** Send cards through the QSL bureau system -- a volunteer-run network that batches and distributes cards. Slower (months to years) but cheaper than direct mail.

### Electronic QSL

- **Logbook of The World (LoTW):** The ARRL's electronic QSL system. Both stations upload their logs, and when the system finds a matching contact, it confirms the QSO. LoTW confirmations are accepted for DXCC, WAS, and other major awards.
- **eQSL:** An independent electronic QSL system. Widely used but not accepted for all awards.
- **QRZ Logbook:** QRZ.com's built-in logging and QSL confirmation system.

## Logging

Keeping an accurate log of your contacts is essential. In many countries, maintaining a station log is a legal requirement.

### What to Log

At minimum, record:

- **Date and time** (always in UTC)
- **Callsign** of the other station
- **Frequency** or band
- **Mode** (SSB, CW, FT8, etc.)
- **Signal reports** sent and received

### Logging Software

| Software | Platform | Cost | Notes |
|---|---|---|---|
| **Log4OM** | Windows | Free | Feature-rich, LoTW integration |
| **N1MM+** | Windows | Free | Contest-oriented; also good for general logging |
| **DXKeeper** (DXLab Suite) | Windows | Free | Part of a comprehensive suite |
| **MacLoggerDX** | macOS | Paid | Best native macOS option |
| **CQRLOG** | Linux | Free | GTK-based, good Linux option |
| **CloudLog** | Web (self-hosted) | Free | PHP-based; accessible from any device |
| **Wavelog** | Web (self-hosted) | Free | Modern fork of CloudLog |

Most logging software can:

- Export in ADIF format (the universal amateur radio log exchange format)
- Upload directly to LoTW, eQSL, and QRZ
- Track progress toward awards (DXCC, WAS, etc.)
- Interface with your radio for automatic frequency and mode logging

## Band Plans and Frequencies

Each band is divided into segments for different modes. While the exact allocations vary by country, the general structure is similar worldwide:

- **CW (Morse code)** occupies the lowest portion of each band
- **Digital modes** (FT8, RTTY, PSK31, etc.) sit above CW
- **SSB voice** occupies the upper portion
- **USB** (Upper Sideband) is used on 20m and above
- **LSB** (Lower Sideband) is used on 40m and below

### Common Calling Frequencies

| Band | Frequency | Mode | Notes |
|---|---|---|---|
| 40m | 7.200 MHz | LSB | Ragchew |
| 20m | 14.300 MHz | USB | Maritime mobile and general calling |
| 20m | 14.230 MHz | USB | SSTV calling frequency |
| 14.074 MHz | - | FT8 | FT8 activity center |
| 10m | 28.400 MHz | USB | SSB calling |

## Tips for New HF Operators

1. **Start by listening.** Spend days or weeks listening before transmitting. Learn how QSOs flow, how pileups work, and what different propagation sounds like.
2. **Begin on 20m or 40m.** These bands have the most activity and the most forgiving propagation. You will find contacts almost any time of day.
3. **Use phonetics consistently.** On HF, with noise and fading, phonetics are not optional -- they are essential.
4. **Learn to handle QSB (fading).** HF signals fade in and out. If a signal drops, wait; it will likely come back. Don't give up on a contact because of a brief fade.
5. **Watch the DX clusters.** Websites and software like DX Summit, DXWatch, and the PSK Reporter show real-time spots of stations heard worldwide. They are invaluable for knowing what bands are open.
6. **Be patient in pileups.** When a rare station is on the air, dozens or hundreds of stations may be calling simultaneously. This is a pileup. Give your callsign once, listen, and try again. Do not call continuously -- it only adds to the chaos.
7. **Keep a logbook from day one.** You will be glad you did when you start chasing awards.
