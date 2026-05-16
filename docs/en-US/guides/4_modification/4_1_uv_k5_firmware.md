# Quansheng UV-K5 Firmware

The Quansheng UV-K5 is a budget handheld transceiver that has gained enormous popularity in the amateur radio community, not for its stock capabilities, but for its open and hackable architecture. A community of developers has reverse-engineered the radio's firmware and produced custom builds that dramatically expand the radio's functionality.

## Why Custom Firmware?

The stock UV-K5 firmware is functional but limited. Custom firmware unlocks capabilities that the hardware supports but the factory software does not expose:

| Feature | Stock Firmware | egzumer/OEFW |
|---|---|---|
| Frequency range (RX) | 50--520 MHz | 18--1300 MHz |
| Spectrum analyzer | No | Yes |
| AM reception | Limited | Full support |
| SSB reception | No | Yes (with limitations) |
| Channel memory | 200 | 200 |
| Scanning speed | Slow | Significantly faster |
| Custom boot screen | No | Yes |
| S-Meter accuracy | Poor | Improved |
| Squelch levels | Basic | Fine-grained |
| FM broadcast radio | Yes | Yes (improved) |

## Popular Firmware Options

### egzumer Firmware (Recommended for Beginners)

The **egzumer** firmware is a fork of the original open-source OEFW (Open Edition Firmware) project. It is widely considered the most stable and feature-rich option for general use.

**Key features:**
- Spectrum analyzer with adjustable bandwidth
- Improved AM/FM reception
- Faster scanning
- Configurable squelch levels (0--9)
- Custom startup logo support
- NOAA weather channel reception (where applicable)
- Improved S-meter calibration
- Backlight timeout options
- Copy/paste channel settings

**Repository:** `https://github.com/egzumer/uv-k5-firmware-custom`

### OEFW (Original Open Edition Firmware)

The original open-source firmware project that spawned most forks. Development has slowed as most contributors have moved to forks like egzumer's.

**Repository:** `https://github.com/DualTachyon/uv-k5-firmware`

### RE Firmware (Tunas1629)

A more experimental fork focused on pushing the hardware limits. Includes features like:
- SSB demodulation (narrow-band)
- Si4732 chip direct control
- Extended modulation options
- Experimental digital mode decoding

Best suited for advanced users comfortable with potential instability.

## What You Need

Before flashing, gather the following:

1. **Quansheng UV-K5 radio** (or UV-K5(8), UV-K6, UV-5R Plus -- check firmware compatibility notes)
2. **USB-C programming cable** -- The Quansheng-specific cable with the Kenwood-style 2-pin connector on the radio end and USB-C on the computer end. Generic Kenwood cables may also work, but the official cable is recommended.
3. **A computer** running Windows, macOS, or Linux
4. **The firmware binary file** (.bin) downloaded from the firmware project's GitHub releases page
5. **A flashing tool** (see below)

## Flashing Tools

### Web Flasher (Easiest Method)

The community has built browser-based flashing tools that require no software installation:

**UV-K5 Web Flasher:** `https://egzumer.github.io/uvtools/`

This tool runs directly in your web browser using the Web Serial API. Requirements:
- A Chromium-based browser (Google Chrome, Microsoft Edge, Brave). Firefox does **not** support Web Serial.
- USB cable connected and recognized by your OS

### k5prog (Command Line)

For Linux users or those who prefer command-line tools:

```bash
# Clone the repository
git clone https://github.com/sq5bpf/k5prog.git
cd k5prog

# Build
make

# Flash firmware
./k5prog -F -YYY -b firmware.bin
```

The `-YYY` flag confirms you want to proceed (triple-Y to prevent accidental flashing). The `-F` flag specifies a firmware flash operation.

### QUV-K5 Toolbox (Windows GUI)

A Windows-based GUI tool that provides firmware flashing along with other configuration options. Download from the project's releases page on GitHub.

## Step-by-Step Flashing Guide

### Step 1: Download the Firmware

1. Navigate to the firmware project's GitHub releases page (e.g., `https://github.com/egzumer/uv-k5-firmware-custom/releases`).
2. Download the latest `.bin` file. Pay attention to the version notes -- some releases target specific hardware revisions.
3. Save the file somewhere you can easily find it.

### Step 2: Back Up Your Current Firmware

::: warning
Always back up your existing firmware and channel data before flashing. If something goes wrong, you will need the backup to restore your radio.
:::

Using the web flasher:
1. Connect your radio to the computer via the USB programming cable.
2. Turn the radio **off**.
3. Open the web flasher in Chrome/Edge.
4. Click **Read EEPROM** (or the equivalent backup option).
5. Hold the **PTT button** while turning the radio **on**. The radio should enter bootloader mode (the screen will be blank or show a minimal display).
6. Click **Connect** and select the serial port corresponding to your cable.
7. Wait for the backup to complete and save the resulting file.

### Step 3: Flash the New Firmware

1. With the radio still in bootloader mode (or re-enter it by turning off, holding PTT, and turning on).
2. In the web flasher, click **Flash Firmware**.
3. Select the `.bin` file you downloaded.
4. Click **Connect** if not already connected.
5. Wait for the flashing process to complete. **Do not disconnect the cable or turn off the radio during flashing.** This process typically takes 30--60 seconds.
6. Once complete, the tool will confirm success.

### Step 4: Verify the Flash

1. Turn the radio off and back on normally (without holding PTT).
2. The radio should boot with the new firmware. You may see a new boot screen or version information.
3. Check that basic functions work: tune to a known frequency, verify transmit (into a dummy load if possible), check that the spectrum analyzer and other new features are accessible.

### Step 5: Restore Your Channels (If Needed)

Custom firmware may or may not preserve your existing channel memories. If your channels are gone:
1. Use the web flasher's **Write EEPROM** function to restore from your backup, **or**
2. Re-program channels using CHIRP (see the [CHIRP Programming Guide](./4_4_chirp_programming.md))

## Troubleshooting

### Radio won't enter bootloader mode
- Make sure you are holding **PTT** before and while turning the radio on.
- Try a different USB cable. Some cables are charge-only and do not carry data.
- Check that your OS recognizes the USB serial device. On Windows, you may need to install a driver (typically a CH340 or Prolific PL2303 driver). On Linux, the device should appear as `/dev/ttyUSB0` or `/dev/ttyACM0`.

### Flashing fails or times out
- Close any other applications that might be using the serial port (CHIRP, terminal emulators, etc.).
- Try a different USB port. Avoid USB hubs -- connect directly to the computer.
- Reduce the baud rate if the flashing tool offers that option.
- On Linux, ensure your user has permission to access serial ports: `sudo usermod -aG dialout $USER` (then log out and back in).

### Radio is bricked (won't turn on or stuck on boot)
- Don't panic. The bootloader is stored in a protected area and is very difficult to overwrite.
- Re-enter bootloader mode (PTT + power on) and flash the stock firmware or a known-good custom firmware.
- If the bootloader itself is corrupted (extremely rare), the radio will need a JTAG/SWD recovery, which requires specialized equipment.

### Audio quality is different after flashing
- Custom firmware may have different default audio processing settings. Explore the firmware's menu options for squelch type, bandwidth, and audio gain settings.

## Tips and Best Practices

- **Stay on stable releases.** Nightly or development builds may have unresolved bugs. Unless you are specifically testing, stick with tagged releases.
- **Read the changelog** before updating. New firmware versions occasionally change menu layouts or default settings.
- **Join the community.** The UV-K5 modding community is active on Reddit (r/QuanshengUVK5), Discord, and GitHub. These are excellent resources for troubleshooting and discovering new features.
- **Calibration matters.** After flashing, you may want to recalibrate the S-meter and TX power levels using the firmware's built-in calibration tools and a power meter.
- **Remember the legal limits.** Custom firmware can unlock wide-band transmit. Just because you *can* transmit on a frequency does not mean you *may*. Always operate within your license privileges.
