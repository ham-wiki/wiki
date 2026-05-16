# Mobile Radio Modifications

Mobile radios -- those designed for vehicle installation -- often offer greater power output, better receivers, and more features than handhelds. Many mobile radios also have well-documented modification procedures for frequency expansion and configuration changes. This guide covers common modifications for popular mobile transceivers.

## General Principles

### Frequency Expansion: How It Works in Mobile Radios

Unlike handhelds where frequency limits are typically enforced purely in firmware, many mobile radios use a combination of:

1. **Hardware jumpers or diodes** on the main PCB that select a frequency plan (region)
2. **Firmware-level restrictions** based on those hardware settings
3. **Band-pass filters** tuned for the intended frequency range

By changing the hardware jumper configuration, you can switch the radio's region setting and access a different frequency plan. This is possible because manufacturers build a single hardware platform and configure it for different markets by changing jumper settings at the factory.

::: warning
Frequency expansion unlocks transmit capability on frequencies you may not be licensed to use. Receiving on expanded frequencies is generally legal; transmitting is not unless you hold the appropriate authorization. See the [legal disclaimer](./index.md) for details.
:::

### Before Modifying a Mobile Radio

1. **Record your radio's current settings.** Use CHIRP or the manufacturer's software to save a complete backup of channels, settings, and configuration.
2. **Photograph the PCB** before making any changes so you can restore the original configuration if needed.
3. **Identify your radio's exact model and hardware revision.** Jumper locations and configurations vary between hardware revisions of the same model.
4. **Have the service manual.** Many radio service manuals are available online and contain the exact jumper or diode configuration for each region. These are invaluable.

## Jumper Settings by Manufacturer

### ICOM Mobile Radios

ICOM radios commonly use **diode matrices** to configure the frequency range. The diodes are typically surface-mount components labeled D1 through D8 (or similar) on the logic board.

**ICOM IC-2730A / IC-2730E (Example):**

| Diode | Installed | Removed | Effect |
|---|---|---|---|
| D3 | USA version | - | 144--148 / 440--450 MHz |
| D4 | - | European version | 144--146 / 430--440 MHz |
| D3+D4 | Both removed | - | Extended range (varies) |

The specific diodes and their locations differ by model. Consult the service manual for your exact radio.

**General ICOM procedure:**
1. Remove the top or bottom cover of the radio (varies by model).
2. Locate the diode matrix on the main PCB. The diodes are often near the CPU or near a cluster labeled "D" followed by numbers.
3. Using the service manual's region chart, determine which diodes to add or remove.
4. To remove a diode: carefully heat both pads simultaneously and lift the component with tweezers.
5. To add a diode: solder a 0-ohm resistor or small solder bridge across the pads.
6. Reassemble and perform a factory reset (often required for the new frequency plan to take effect).

### Yaesu Mobile Radios

Yaesu radios often use a combination of **solder pads** (jumpers) and sometimes DIP switches.

**Yaesu FT-65R / FT-7900R / FT-8900R (General approach):**

- Look for solder pads or jumper points on the main board, typically labeled with letters or numbers.
- The service manual will show a chart mapping pad configurations to frequency ranges.
- Bridging or cutting traces between these pads changes the regional configuration.

**Yaesu FTM-300DR (Example):**
1. Open the radio case.
2. Locate the jumper pads on the main board (refer to service manual).
3. The radio has multiple regional variants. Changing to a different region setting may unlock wider VHF and UHF coverage.
4. After modification, perform a full reset from the radio's menu.

### Kenwood Mobile Radios

Kenwood radios typically use **solder jumpers** similar to Yaesu. Older models may use physical wire jumpers.

**General Kenwood procedure:**
1. Open the radio and locate the jumper area (usually near the microprocessor).
2. Consult the service manual for the jumper chart.
3. Modify jumpers as needed by adding or removing solder bridges.
4. Reassemble and reset the radio to factory defaults.

## Programming Mobile Radios

### Using the Front Panel

Most mobile radios can be fully programmed from the front panel, but this is tedious for anything beyond a few channels. Front-panel programming is useful for:
- Quick frequency changes in the field
- Setting up a single repeater while mobile
- Adjusting squelch, power, and scan settings

### Using Manufacturer Software

Each manufacturer provides (or sells) programming software:

| Manufacturer | Software | Notes |
|---|---|---|
| ICOM | CS-2730 (varies by model) | Often requires purchase; specific to each model |
| Yaesu | ADMS series | Model-specific; some are free downloads |
| Kenwood | MCP series (e.g., MCP-6A) | Free downloads available for most current models |

**Advantages of manufacturer software:**
- Access to all radio settings, including those not available from the front panel
- Reliable and tested with the specific radio
- Firmware updates (when available) are distributed through manufacturer tools

**Disadvantages:**
- Often Windows-only
- May require a specific (sometimes expensive) programming cable
- Interface can be unintuitive

### Using CHIRP

CHIRP is the universal alternative. See the [CHIRP Programming Guide](./4_4_chirp_programming.md) for detailed instructions. Most popular mobile radios are supported by CHIRP, though some very new models may require a development build.

## Antenna Considerations for Modified Mobiles

If you expand a mobile radio's frequency range, remember that your antenna must also cover those frequencies. A standard VHF/UHF dual-band mobile antenna is typically tuned for:
- 144--148 MHz (or 144--146 MHz)
- 430--450 MHz (or 440--450 MHz)

If you intend to operate outside these ranges, you will need:
- A **wideband antenna** that covers your desired frequencies, or
- A **separate antenna** for each band, or
- An **antenna tuner** (uncommon for VHF/UHF mobile use but available)

Using a mismatched antenna will result in:
- High SWR, which can damage the radio's final amplifier
- Poor signal radiation and reception
- Excessive RF energy reflected back into the transmitter

::: tip
Always check SWR with an antenna analyzer or SWR meter before transmitting on any new frequency with a modified radio. An SWR above 2:1 should be investigated; above 3:1, do not transmit.
:::

## Power Supply Considerations

Mobile radios are designed for 13.8V DC (nominal vehicle electrical system voltage). When modifying for use outside a vehicle:

- **Bench power supplies** should be rated for at least the radio's maximum current draw plus a 20% margin. A 100W radio may draw 20--22A on transmit.
- **Anderson Powerpole connectors** are the de facto standard for DC power distribution in amateur radio. Consider standardizing your installation on Powerpoles.
- **Fuse the power leads** as close to the battery or power supply as possible. Use the fuse rating specified in the radio's manual.
- **Use heavy-gauge wire** for power connections. For a 50W radio (approximately 10--12A draw), use at minimum 12 AWG wire. For a 100W radio, use 10 AWG or heavier.

## Common Mobile Radio Modification Pitfalls

1. **Wrong hardware revision.** Jumper locations change between hardware revisions. A modification procedure found online may not match your specific unit. Always verify against the service manual for your revision.
2. **Forgetting to reset.** After changing jumpers, most radios require a factory reset before the new frequency plan takes effect. Without the reset, the radio may behave erratically.
3. **Damaging SMD components.** The diodes and components used as jumpers are very small. Use magnification, a fine-tip iron, and patience.
4. **Ignoring filter limitations.** Even after frequency expansion, the radio's band-pass filters are still tuned for the original frequency range. Performance on far-out-of-band frequencies will be degraded, and spurious emission levels may exceed legal limits.
5. **Voiding warranty on expensive equipment.** Unlike a $25 Baofeng, a $300+ mobile radio represents a significant investment. Consider whether the modification is worth the warranty risk.
