# Emergency Go Bag

An emergency go bag (also called a "jump kit" or "rapid deployment kit") is a pre-packed collection of radio equipment and supplies that allows you to set up a functional amateur radio station anywhere, on short notice. When an emergency strikes, there is no time to gather equipment -- your go bag should be ready to grab and go.

## Design Philosophy

A good go bag balances four factors:

1. **Capability** -- It must allow meaningful communication (local and, ideally, long-distance).
2. **Portability** -- You must be able to carry it. If it's too heavy or bulky, it won't come with you.
3. **Self-sufficiency** -- It must operate independently of external infrastructure for at least 24--72 hours.
4. **Simplicity** -- In a stressful situation, complex setups fail. Favor equipment you can deploy quickly and operate confidently.

## Equipment Checklist

### Radio Equipment

#### VHF/UHF Handheld (Essential)

Your first priority. A VHF/UHF handheld provides immediate local communication.

- **Radio:** A dual-band (2m/70cm) handheld transceiver. Examples: Yaesu FT-65R, Yaesu FT-5D, ICOM ID-52A, Kenwood TH-D75A, Anytone AT-D878UVII.
- **Spare battery:** At minimum one fully charged spare. Two spares is better.
- **AA battery case:** Most quality handhelds have an optional AA battery case. AA batteries are the most widely available battery type in any emergency.
- **Upgraded antenna:** Replace the stock rubber duck with a higher-gain flexible antenna (e.g., Diamond SRH77CA, Nagoya NA-771). The stock antenna is the single biggest performance limiter on any handheld.
- **Speaker-microphone:** Allows you to operate the radio while it's in the bag or clipped to your pack, and keeps the radio's speaker clear of body obstruction.
- **Programming cable:** In case you need to reprogram channels in the field (bring a laptop or smartphone with CHIRP).

#### HF Portable Radio (Highly Recommended)

An HF radio enables communication beyond your local area -- across the state, across the country, or around the world.

- **Radio:** A portable or compact HF transceiver. Popular choices:
  - **Yaesu FT-891** -- 100W all-band HF/50 MHz; compact mobile form factor, widely used for portable operation
  - **ICOM IC-705** -- 10W QRP HF/VHF/UHF; built-in battery, touchscreen, Bluetooth, D-STAR; premium but extremely capable
  - **Xiegu G90** -- 20W HF with built-in tuner; budget-friendly
  - **Elecraft KX2/KX3** -- High-performance QRP; lightweight; premium price
- **Antenna tuner:** If not built into the radio, a small manual or automatic tuner (e.g., Elecraft T1, LDG Z-11 Pro II) allows you to use non-resonant wire antennas.
- **Headphones:** Essential for HF operation in noisy environments. Also improves weak-signal copy.

### Antennas

Antennas are the most critical and often most overlooked component of a go bag. Without a functional antenna, your radio is useless.

#### VHF/UHF Antennas

| Antenna | Type | Gain | Notes |
|---|---|---|---|
| **Upgraded whip** (e.g., NA-771) | Flexible whip | ~3 dBi | Attaches directly to the radio; significant improvement over stock |
| **Roll-up J-pole** | Wire antenna | ~3 dBi | Lightweight; hang from a tree, pole, or building; excellent for go bags |
| **Slim Jim** | Wire antenna | ~4 dBi | Similar to J-pole; slightly more gain; easy to make from 300-ohm twin lead |
| **Arrow II satellite antenna** | Yagi | ~10 dBi | Primarily for satellite work, but also excellent for extending simplex range in a specific direction |

A **roll-up J-pole** or **slim Jim** is the top recommendation for a go bag VHF/UHF antenna. They are lightweight, compact when rolled up, and dramatically outperform a handheld's whip antenna. Hang one from a tree branch at 20 feet and you will be amazed at the difference.

#### HF Antennas

| Antenna | Type | Bands | Notes |
|---|---|---|---|
| **End-fed half-wave (EFHW)** | Wire | Multi-band | Lightweight; one end ties to a support, the other hangs free or connects to a ground stake. Popular kits available (e.g., MyAntennas EFHW). |
| **Linked dipole** | Wire | Multi-band | A dipole with detachable sections for different bands. Requires a center support. |
| **Random wire + tuner** | Wire | All bands (with tuner) | The simplest option: throw a long wire (30--60 feet) over a tree and use a tuner. Not as efficient as a resonant antenna but extremely versatile. |
| **Vertical (portable)** | Whip/telescoping | Multi-band | Self-supporting; no trees needed. Heavier and bulkier than wire antennas. Examples: Wolf River Coils, Buddipole. |
| **NVIS dipole** | Wire | 40m/80m | A dipole hung low (10--15 feet) for reliable regional coverage (0--500 km). Ideal for emergency communications within a state. |

**Recommended go-bag HF antenna:** A 40-meter EFHW or linked dipole. The 40-meter band provides both regional (daytime) and long-distance (nighttime) coverage and is the most versatile single band for emergency communications.

#### Antenna Deployment Supplies

- **Paracord or lightweight rope** (50--100 feet) for hoisting wire antennas into trees
- **Throw line and weight** (arborist throw bag) for getting a line over a high branch
- **Telescoping mast** (optional) -- 20-foot fiberglass poles (e.g., Jackite, SOTAbeams) for self-supporting antenna deployment where trees are not available
- **Stakes and guy lines** for securing masts
- **Coaxial cable** -- 25--50 feet of RG-8X or RG-58 with appropriate connectors. Pre-terminated and tested.
- **Adapters** -- SMA to BNC, BNC to SO-239, SO-239 to PL-259 barrel connectors. Carry a small bag of common adapters.

### Power Solutions

Power is the limiting factor for extended emergency operations. Plan for multiple sources:

#### Batteries

| Battery Type | Capacity | Weight | Notes |
|---|---|---|---|
| **Radio's internal battery** | Varies (1800--3400 mAh for HTs) | Light | Good for 8--24 hours of monitoring with occasional transmit |
| **Spare radio batteries** | Same | Light | Carry at least one spare; two if possible |
| **AA battery case** | Depends on cells | Light | Use lithium AA cells (Energizer Ultimate Lithium) for best performance; they work in extreme temperatures and have 10+ year shelf life |
| **LiFePO4 portable battery** | 6--50 Ah | 2--15 lbs | The best option for HF portable operation. 12V output, safe chemistry, thousands of charge cycles. Bioenno and Dakota Lithium are popular brands. |
| **USB power bank** | 10,000--26,800 mAh | Light | For charging devices, phones, and radios with USB charging (e.g., IC-705). |

#### Solar Charging

A portable solar panel extends your operating time indefinitely (weather permitting):

- **20--30W folding panel** -- Sufficient to charge a small LiFePO4 battery or USB power bank during the day while operating at night.
- **50--100W panel** -- For more demanding setups (100W HF radio) or faster charging.
- **Solar charge controller** -- Required between the panel and a LiFePO4 battery. Many portable batteries include a built-in controller.

::: tip
Test your solar charging setup at home before you need it. Understand how many hours of sunlight you need to recharge your battery for a day's operation. In cloudy conditions, expect 50--70% less output.
:::

#### Other Power Options

- **Vehicle power:** A cigarette lighter adapter or Anderson Powerpole connection can power your radio from a vehicle battery. This is often the most practical power source for the first hours of an emergency.
- **Generator:** Small inverter generators (e.g., Honda EU2200i) provide AC and DC power but add weight, noise, and fuel dependency. Best for fixed-location operations, not go-bag deployment.

### Accessories and Supplies

#### Communication Accessories
- **Paper and pens** -- For writing messages, logging contacts, recording information. Include a small clipboard.
- **Printed frequency reference** -- A laminated card with your local repeaters, simplex frequencies, HF emergency frequencies, and net schedules. Do not rely on your phone for this; it may be dead.
- **Printed contact list** -- Names and phone numbers of your ARES/RACES team, local emergency management, and family members.
- **ICS forms** -- Printed copies of ICS-213 (General Message), ICS-214 (Activity Log), and ICS-309 (Communication Log).
- **Clock/watch set to UTC** -- Accurate timekeeping is essential for logging. A watch with UTC display is ideal.

#### General Supplies
- **Headlamp or flashlight** -- With spare batteries. You may be operating in the dark.
- **Multi-tool or knife**
- **Electrical tape and zip ties**
- **Small first aid kit**
- **Water bottle and snack bars** -- You cannot operate effectively if you are dehydrated or hungry.
- **Weather-appropriate clothing** -- Emergency deployment may mean sitting outdoors for hours.
- **Ear protection** -- If operating near generators.

### Digital Mode Capability (Optional but Valuable)

Adding digital mode capability to your go bag significantly expands what you can do:

- **Winlink:** Send and receive email over radio. Requires a laptop or tablet, a sound card interface (or radio with built-in USB audio), and Winlink Express software. Invaluable for sending detailed reports, forms, and even small attachments.
- **JS8Call:** Keyboard-to-keyboard HF messaging with store-and-forward capability. Works at signal levels too weak for voice.
- **APRS:** Position reporting and messaging. A Bluetooth TNC and smartphone running APRSDroid can add APRS capability to any 2-meter FM radio.

**Laptop/tablet considerations:**
- Ensure the device has sufficient battery life (or bring a means to charge it).
- Pre-install all software and test the complete setup before packing.
- Store critical documents, frequency lists, and references on the device (accessible offline).

## Packing and Organization

### Container Options

- **Backpack** -- For foot-mobile deployment. Look for a pack with good padding, multiple compartments, and a hip belt for weight distribution. A 30--40 liter pack accommodates a full go-bag setup.
- **Pelican case or similar** -- For vehicle deployment or when maximum protection is needed. Waterproof, crushproof, and dust-tight. Heavier than a backpack.
- **Toolbox or tote** -- A practical option for vehicle-based deployment on a budget.

### Organization Tips

1. **Use labeled pouches or bags** inside the main container. Group items by function: radio, power, antennas, accessories.
2. **Cables and adapters** in a clearly labeled zippered pouch.
3. **Keep batteries separate** from equipment and in a protective case. Prevent short circuits.
4. **Antenna components** in a protective tube or long pouch to prevent tangling and damage.
5. **Heaviest items** nearest your back (backpack) or at the bottom (case).
6. **Quick-access items** (handheld radio, spare battery, frequency card) should be reachable without unpacking everything.

## Maintenance and Readiness

A go bag is only useful if it's ready when you need it:

1. **Charge batteries monthly.** LiFePO4 batteries should be stored at 50--60% charge and topped off before expected use. Lithium-ion batteries self-discharge over time.
2. **Test equipment quarterly.** Turn on each radio, verify programming, check antennas, and ensure all cables and adapters work.
3. **Rotate perishable items.** Replace batteries and food/water on a schedule.
4. **Update frequencies and documentation.** Repeaters change, nets change, contact information changes. Update your printed references at least annually.
5. **Practice deployment.** Set up your entire go-bag station at least twice a year. Time yourself. Identify bottlenecks and simplify.
6. **After every use**, repack and recharge. Do not put off restocking a depleted go bag.

## Sample Go Bag Configurations

### Minimal (VHF/UHF Only, Under $200)

- Baofeng UV-5R or UV-82 with upgraded antenna
- Two spare batteries + AA battery case
- Roll-up J-pole antenna with 25 feet of RG-58
- 50 feet of paracord
- Speaker-microphone
- Laminated frequency card
- Notepad and pens
- All in a small daypack

### Intermediate (VHF/UHF + HF, Under $1000)

Everything above, plus:
- Xiegu G90 (20W HF) or similar portable HF radio
- EFHW wire antenna for 40m
- 12V 6Ah LiFePO4 battery
- Anderson Powerpole cables
- Throw line for antenna deployment
- USB power bank for charging accessories

### Full Capability (Under $3000)

Everything above, plus:
- Yaesu FT-891 (100W HF) or ICOM IC-705
- 12V 20Ah LiFePO4 battery
- 50W folding solar panel with charge controller
- Laptop with Winlink Express, JS8Call, WSJT-X
- Sound card interface (Digirig or SignaLink)
- Bluetooth TNC for APRS
- 20-foot telescoping fiberglass mast
- Complete ICS form kit
- Pelican case for transport
