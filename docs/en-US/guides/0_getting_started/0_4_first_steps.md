# First Steps

You have read about what amateur radio is, learned the basic concepts, and explored the frequency bands. Now it is time for the practical part: getting on the air. This guide walks you through every step from studying for your license to completing your first contact (QSO).

## Step 1: Get Your License

Operating an amateur radio transmitter without a license is illegal in virtually every country. The licensing process ensures you understand basic radio theory, regulations, and safe operating practices.

### General Process

1. **Study** the material for your country's entry-level exam (see [License & Exams](../1_license_exam/index.md))
2. **Take the exam** -- formats vary by country (in-person, online, or both)
3. **Receive your callsign** -- this is your unique identity on the air
4. If required, **register your station** with the relevant authority

### How Long Does It Take?

For most entry-level exams:
- **China (CRAC A class)**: 1-2 weeks of study
- **United States (FCC Technician)**: 1-3 weeks of study
- **United Kingdom (Foundation)**: A weekend course plus exam
- **Japan (4th class)**: A few weeks of study

Do not be intimidated -- entry-level exams are designed to be accessible to motivated beginners. Thousands of people pass them every year with no prior electronics background.

## Step 2: Buy Your First Radio

### Recommended First Radio: A Dual-Band Handheld (HT)

For most new HAMs, a VHF/UHF handheld transceiver (HT) is the best first radio. Here is why:

- **Affordable**: Entry-level HTs cost as little as $25-50 (USD)
- **Portable**: Take it anywhere -- to a hilltop, a park, or a hamfest
- **Practical**: Access local repeaters immediately for voice communication
- **Simple**: FM operation is straightforward, with no complex tuning required

Popular entry-level HTs include models from Baofeng (e.g., UV-5R), Yaesu (e.g., FT-65R), and Kenwood (e.g., TH-D75A). More expensive radios generally offer better receivers, build quality, and features, but even a budget HT will get you on the air.

### What About HF Radios?

If your license class permits HF operation, you may want to explore HF transceivers later. HF radios are more expensive (typically $500-3000+ USD for new units) and require external antennas, but they open the door to worldwide communication. Popular beginner HF radios include the Yaesu FT-891, ICOM IC-7300, and Xiegu G90.

### Essential Accessories

- **Better antenna**: Replacing the stock rubber duck antenna on an HT with an aftermarket whip antenna can noticeably improve performance
- **SMA adapter / antenna cable**: Useful for connecting external antennas
- **Programming cable**: Many HTs are much easier to program via computer software (such as CHIRP) than by hand
- **Extra battery or battery eliminator**: Extends operating time
- **SWR meter**: Essential once you start using external antennas or HF equipment

## Step 3: Program Your Radio and Find Repeaters

### What is a Repeater?

A repeater is an automated radio station, usually installed on a hilltop or tall building, that receives signals on one frequency and simultaneously retransmits them on another. Repeaters dramatically extend the range of low-power handheld and mobile radios.

To use a repeater, you need to program your radio with:
- **Receive frequency**: The repeater's output frequency (what you listen to)
- **Transmit frequency**: The repeater's input frequency (what you transmit on), which is offset from the receive frequency
- **Offset direction**: Whether the transmit frequency is above (+) or below (-) the receive frequency
- **CTCSS tone** (also called PL tone): A sub-audible tone your radio must transmit for the repeater to accept your signal. This prevents the repeater from being triggered by stray signals.

### How to Find Local Repeaters

- **RepeaterBook** (repeaterbook.com): A comprehensive global directory of amateur repeaters
- **Your national amateur radio organization's website**: Many publish repeater lists
- **Local radio clubs**: Club members can tell you which repeaters are active in your area
- **Listening**: Tune around the 2-meter and 70-centimeter bands and listen for activity

### Programming Tips

1. Use **CHIRP** (free, open-source software) with a programming cable -- it is far faster and less error-prone than manual programming
2. Start by programming the most active local repeaters
3. Also program some simplex frequencies (e.g., 146.520 MHz, the US 2-meter calling frequency, or your country's equivalent)

## Step 4: Listen First

Before you transmit, spend time **listening**. This is one of the most valuable things a new operator can do.

- Learn the rhythm and etiquette of conversations on your local repeaters
- Notice how operators identify themselves (callsign at the beginning and end of transmissions)
- Pay attention to how operators join an ongoing conversation
- Familiarize yourself with local conventions and customs
- Get comfortable with your radio's controls

There is no minimum listening period required -- but even a few days of careful listening will make your first transmission much smoother.

## Step 5: Make Your First QSO (Contact)

### What is a QSO?

A QSO is a two-way radio contact between two or more stations. The term comes from the Q-code system (see below). Your first QSO is a milestone moment in amateur radio.

### How to Call on a Repeater

1. **Listen first** to make sure the frequency is clear
2. **Key up** (press the PTT button) and say: *"This is [your callsign], listening"* or *"[Your callsign], monitoring"*
3. **Wait** for a response. If someone comes back to you, you are in a QSO!
4. **Exchange** basic information: name, location (QTH), signal report, what radio you are using
5. **End the contact** by saying something like: *"Thanks for the QSO, 73. This is [your callsign], clear."*

### How to Call CQ (General Call)

On simplex frequencies or HF bands, you can call CQ to invite anyone to respond:

1. *"CQ CQ CQ, this is [your callsign], [your callsign], [your callsign], calling CQ and standing by"*
2. Wait 5-10 seconds for a response
3. If no one responds, try again. Move to a different frequency if needed.

### Basic QSO Exchange

A typical casual QSO includes:

| Item | Example |
|------|---------|
| **Callsigns** | "This is W1ABC" |
| **Name** | "My name is John" |
| **Location (QTH)** | "I'm in Boston, Massachusetts" |
| **Signal report** | "You're 59 into Boston" (see RST system below) |
| **Equipment** | "I'm running a Yaesu FT-891 with a dipole antenna" |
| **Closing** | "Thanks for the contact, 73!" |

### Signal Reports: The RST System

Signal reports use the **RST** system:

- **R (Readability)**: 1-5 scale (1 = unreadable, 5 = perfectly readable)
- **S (Signal Strength)**: 1-9 scale (1 = barely perceptible, 9 = extremely strong)
- **T (Tone)**: 1-9 scale (used for CW only; 9 = perfect tone)

For voice contacts, you give an RS report (e.g., "five nine" or "five seven"). For CW contacts, you give a full RST report (e.g., "599" or "579").

## Essential Q-Codes

Q-codes originated in maritime telegraphy and are still widely used in amateur radio, especially in CW communication. Here are the most important ones:

| Q-Code | Meaning |
|--------|---------|
| **QRG** | Your exact frequency is... |
| **QRH** | Your frequency varies |
| **QRI** | Your tone is... |
| **QRK** | Your signal readability is... |
| **QRL** | This frequency is in use (always ask "QRL?" before transmitting on a frequency) |
| **QRM** | I am being interfered with (man-made interference) |
| **QRN** | I am troubled by static (natural noise) |
| **QRO** | Increase power |
| **QRP** | Decrease power / low-power operation (typically 5W or less on HF) |
| **QRS** | Send more slowly |
| **QRT** | Stop sending / I am shutting down |
| **QRV** | I am ready |
| **QRX** | Stand by / Wait |
| **QRZ** | Who is calling me? |
| **QSB** | Your signals are fading |
| **QSL** | I confirm receipt / QSL card (written confirmation of a contact) |
| **QSO** | A two-way contact |
| **QSY** | Change frequency to... |
| **QTH** | My location is... |

## Common Abbreviations and Jargon

| Term | Meaning |
|------|---------|
| **73** | Best regards (the standard sign-off in amateur radio) |
| **88** | Love and kisses (sometimes used humorously) |
| **CQ** | General call ("seeking you") -- an invitation for anyone to respond |
| **DX** | Long distance / a distant station |
| **HT** | Handheld transceiver |
| **OM** | Old man (friendly term for a male operator) |
| **YL** | Young lady (friendly term for a female operator) |
| **XYL** | Ex-young lady (wife) |
| **Rig** | Radio equipment |
| **Shack** | The room or space where you operate your station |
| **Ragchew** | A long, casual conversation |
| **Elmer** | A mentor in amateur radio |
| **Lid** | A poor or inconsiderate operator |
| **Pileup** | Many stations calling one station simultaneously (common in DX and contests) |

## The Phonetic Alphabet (NATO/ICAO)

When spelling out callsigns or words over the air, use the standard phonetic alphabet to avoid confusion:

| Letter | Phonetic | Letter | Phonetic |
|--------|----------|--------|----------|
| A | Alfa | N | November |
| B | Bravo | O | Oscar |
| C | Charlie | P | Papa |
| D | Delta | Q | Quebec |
| E | Echo | R | Romeo |
| F | Foxtrot | S | Sierra |
| G | Golf | T | Tango |
| H | Hotel | U | Uniform |
| I | India | V | Victor |
| J | Juliet | W | Whiskey |
| K | Kilo | X | X-ray |
| L | Lima | Y | Yankee |
| M | Mike | Z | Zulu |

**Example**: The callsign W1ABC would be spoken as *"Whiskey One Alfa Bravo Charlie."*

## What's Next?

After your first contact, the world of amateur radio opens up in many directions:

- **Join a local club**: Meet other HAMs, learn from experienced operators (Elmers), and participate in club activities
- **Get on HF**: If your license permits, explore the HF bands for worldwide communication
- **Try digital modes**: FT8 is an excellent entry point -- contacts can be made with very low power and simple antennas
- **Participate in a contest**: Even casual participation is fun and helps you improve your operating skills
- **Pursue awards**: Work toward DXCC (contacting 100 countries), WAS (Worked All States), or other awards
- **Experiment**: Build antennas, try portable operation (SOTA/POTA), explore satellite communications

Welcome to the hobby. 73!
