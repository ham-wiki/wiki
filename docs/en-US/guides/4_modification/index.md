# Modification Tutorials

Welcome to the radio modification section of HAM.Wiki. This area covers firmware upgrades, hardware modifications, and programming techniques for popular amateur radio equipment.

## What You'll Find Here

- **[Quansheng UV-K5 Firmware](./4_1_uv_k5_firmware.md)** -- Custom firmware options for the UV-K5 series, including the popular egzumer/OEFW builds
- **[Baofeng Radio Modifications](./4_2_baofeng_mods.md)** -- Frequency expansion, antenna upgrades, and other hardware mods for the UV-5R and UV-82 series
- **[Mobile Radio Modifications](./4_3_mobile_radio_mods.md)** -- Jumper settings, frequency expansion, and programming tricks for mobile transceivers
- **[CHIRP Programming Guide](./4_4_chirp_programming.md)** -- Step-by-step guide to using CHIRP software for radio programming

## Safety Warnings

::: danger IMPORTANT SAFETY INFORMATION
Radio modifications can permanently damage your equipment. Before attempting any modification:

1. **Understand the risks.** Incorrect modifications can render your radio non-functional, cause RF burns, create harmful interference, or present electrical shock hazards.
2. **Static discharge kills components.** Always work on an anti-static mat and use a grounding wrist strap when handling circuit boards.
3. **Use proper tools.** A temperature-controlled soldering iron (not a soldering gun), proper flux, and appropriately sized solder are essential for board-level work.
4. **Back up before flashing.** Always save a copy of your radio's original firmware before writing any custom firmware. If the flash fails, you may need the backup to recover.
5. **Double-check your work.** Verify solder joints under magnification. Cold joints and solder bridges are the most common causes of post-modification failures.
6. **Modifications void your warranty.** Most manufacturers will refuse warranty service on modified equipment.
:::

## Legal Disclaimer

::: warning LEGAL NOTICE
The information provided in this section is for **educational purposes only**. It is your responsibility to comply with all applicable laws and regulations in your jurisdiction.

**Key legal points to understand:**

- **Transmitting on frequencies you are not licensed for is illegal** in virtually every country. Frequency expansion modifications that unlock out-of-band transmit capability do not grant you legal permission to use those frequencies.
- **Type acceptance and certification** -- In many countries (e.g., FCC Part 97 in the United States, IC in Canada, CE in Europe), transmitting equipment must meet specific technical standards. Modifying a radio may invalidate its type acceptance, making it illegal to use on certain services.
- **Part 90 and commercial frequencies** -- Using modified amateur radios on commercial, public safety, or government frequencies is a serious offense that can result in significant fines and criminal prosecution.
- **Amateur radio privileges** -- Even on amateur bands, you must hold the appropriate license class for the frequency and mode you wish to use. Modifications do not change your license privileges.
- **Receive-only use** -- In most jurisdictions, receiving (listening) on any frequency is legal. Modifications that only expand receive coverage generally do not raise legal issues.

HAM.Wiki, its contributors, and its maintainers assume **no liability** for any damage to equipment, legal consequences, interference caused, or personal injury resulting from the use of information in this section. **You modify your equipment at your own risk.**
:::

## Before You Begin

We recommend that anyone considering radio modifications:

1. **Read your country's regulations** thoroughly. Know exactly what frequencies and power levels your license permits.
2. **Start with software modifications** (firmware, programming) before attempting hardware changes. Software changes are generally reversible.
3. **Practice soldering on junk boards** before working on your radio. A $5 practice kit is far cheaper than replacing a damaged transceiver.
4. **Join a local ham club or online community** where experienced operators can guide you through your first modifications.
5. **Document everything.** Take photos before, during, and after modifications so you can reverse changes if needed.
