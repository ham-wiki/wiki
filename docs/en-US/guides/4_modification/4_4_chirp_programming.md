# CHIRP Programming Guide

CHIRP is a free, open-source tool for programming amateur radios. It supports an enormous range of radios from virtually every manufacturer and provides a consistent, spreadsheet-like interface for managing channels, settings, and configurations. If you own an amateur radio, CHIRP is one of the first pieces of software you should install.

## What CHIRP Can Do

- Read and write channel memories (frequencies, names, tones, power levels, etc.)
- Edit radio settings (squelch, backlight, key assignments, scan lists, etc.)
- Import and export channel data in CSV format for sharing and backup
- Import frequencies from online databases (RepeaterBook, RFinder, RadioReference)
- Copy channel configurations between different radio models
- Manage hundreds of channels quickly through a spreadsheet interface

## Installation

### Windows

1. Download the latest CHIRP installer from `https://chirpmyradio.com/projects/chirp/wiki/Download`
2. CHIRP has transitioned from a legacy Python 2 version to a new version called **CHIRP-next** (based on wxPython). Download **CHIRP-next** unless you specifically need the legacy version for an unsupported radio.
3. Run the installer and follow the prompts.
4. Install your programming cable's USB driver if needed:
   - **CH340/CH341** -- Common in Baofeng and Quansheng cables. Driver available from the manufacturer's site or included with the cable.
   - **Prolific PL2303** -- Common in older programming cables. Use the driver version specifically recommended for your cable; newer Prolific drivers may reject clone chips.
   - **FTDI FT232** -- Common in higher-quality cables (Yaesu, ICOM). Usually plug-and-play on Windows 10/11.

### macOS

1. Download the macOS `.dmg` from the CHIRP website.
2. Open the DMG and drag CHIRP to your Applications folder.
3. On first launch, you may need to right-click and select **Open** to bypass Gatekeeper, then approve it in System Preferences > Security & Privacy.
4. Install USB drivers if needed (same chipsets as Windows -- CH340 and FTDI are most common).

### Linux

CHIRP-next can be installed via Flatpak or from source:

```bash
# Flatpak (recommended)
flatpak install flathub com.danplanet.chirp

# Or install from pip
pip install chirp

# Or on Debian/Ubuntu-based systems, the legacy version may be in repos
sudo apt install chirp
```

On Linux, you will also need serial port access. Add your user to the `dialout` group:

```bash
sudo usermod -aG dialout $USER
```

Log out and log back in for the group change to take effect.

## Connecting Your Radio

### Step 1: Identify Your Cable

Programming cables are **not universal**. Different radios use different connectors:

| Radio Family | Connector Type | Cable Notes |
|---|---|---|
| Baofeng UV-5R / UV-82 | Kenwood 2-pin (2.5mm + 3.5mm) | Cheap and widely available |
| Quansheng UV-K5 | Kenwood 2-pin to USB-C | Must be data-capable USB-C |
| Yaesu FT-60R / FT-65R | Yaesu CT-42 compatible (3.5mm) | Single 3.5mm jack |
| Yaesu FTM-300/400 | Mini-DIN 10-pin or USB | Model-specific |
| ICOM ID-52A | Micro-USB or Bluetooth | USB cable is standard |
| ICOM IC-2730A | ICOM OPC-478 compatible | CI-V interface |
| Kenwood TM-D710 | Serial or USB | Built-in USB on some models |

### Step 2: Connect the Cable

1. **Turn the radio off** before connecting the cable.
2. Plug the cable's connector firmly into the radio's programming port (or speaker/mic jack, depending on the radio).
3. Plug the USB end into your computer.
4. **Wait a few seconds** for the OS to recognize the device.

### Step 3: Identify the Serial Port

- **Windows:** Open Device Manager > Ports (COM & LPT). Look for your cable (e.g., "USB-Serial CH340 (COM3)"). Note the COM port number.
- **macOS:** Open Terminal and run `ls /dev/tty.usb*` to find the port name.
- **Linux:** Run `ls /dev/ttyUSB*` or `ls /dev/ttyACM*`.

### Step 4: Read from the Radio

1. **Turn the radio on.**
2. In CHIRP, go to **Radio > Download From Radio**.
3. Select:
   - **Port:** Your serial port (e.g., COM3, /dev/ttyUSB0)
   - **Vendor:** The radio manufacturer (e.g., Baofeng, Yaesu)
   - **Model:** Your exact radio model
4. Click **OK** to start the download.
5. CHIRP will communicate with the radio and download all channel and settings data. This typically takes 10--60 seconds depending on the radio.

::: tip
If the download fails, try these steps in order:

1. Make sure the radio is turned on and on the home screen (not in a menu).
2. Try a different USB port (avoid hubs).
3. Close any other software that might be using the serial port.
4. Check the cable connection at both ends.
5. Try a lower baud rate if the option is available.
6. Restart your computer (serial drivers can sometimes get stuck).
:::

## Editing Frequencies

Once you've downloaded your radio's data, CHIRP displays it in a spreadsheet format. Each row is a memory channel.

### Key Columns

| Column | Description | Example |
|---|---|---|
| **Loc** | Memory channel number | 0, 1, 2, ... |
| **Frequency** | Receive frequency in MHz | 146.520 |
| **Name** | Channel label (character limit varies by radio) | SIMPLEX |
| **Duplex** | Offset direction: blank (simplex), +, -, or split | + |
| **Offset** | Repeater offset in MHz | 0.600 |
| **Tone** | Tone mode: (none), Tone, TSQL, DTCS | Tone |
| **rToneFreq** | Transmit CTCSS tone frequency | 100.0 |
| **cToneFreq** | Receive CTCSS tone frequency (for TSQL) | 100.0 |
| **DtcsCode** | DCS code (if using DTCS tone mode) | 023 |
| **Mode** | Modulation: FM, NFM, AM, DV | FM |
| **TStep** | Tuning step size in kHz | 5.0 |
| **Power** | Transmit power level | High |
| **Skip** | Scan behavior: blank (scan), S (skip), P (priority) | S |

### Adding a Repeater Channel

Let's program a typical 2-meter repeater:

1. Click on an empty row (e.g., channel 1).
2. Set **Frequency** to the repeater's **output** frequency (what you receive): `147.060`
3. Set **Name** to something descriptive: `W1AW RPT`
4. Set **Duplex** to `+` (positive offset, meaning you transmit higher than you receive)
5. Set **Offset** to `0.600` (standard 2-meter offset of 600 kHz)
6. Set **Tone** to `Tone` (this sends a CTCSS tone when you transmit)
7. Set **rToneFreq** to the repeater's required tone: e.g., `100.0`
8. Set **Mode** to `FM`
9. Set **Power** to `High` (or as appropriate)

Your transmit frequency will automatically be calculated as 147.060 + 0.600 = 147.660 MHz.

### Adding a Simplex Channel

For a simplex (direct radio-to-radio) channel:

1. Set **Frequency** to the simplex frequency: `146.520` (the 2-meter national calling frequency in the US)
2. Set **Name**: `2M CALL`
3. Leave **Duplex** blank (no offset)
4. Leave **Tone** as `(none)` unless you want tone squelch
5. Set **Mode** to `FM`

### Bulk Editing Tips

- **Copy/Paste:** Select a row, Ctrl+C to copy, select a destination row, Ctrl+V to paste. Then edit only the fields that differ.
- **Multi-select:** Hold Shift or Ctrl to select multiple rows for bulk operations (delete, move, etc.).
- **Sort and organize:** Consider grouping channels by purpose (repeaters, simplex, weather, GMRS, etc.) and leaving gaps between groups for future additions.

## Importing Frequencies

### From RepeaterBook

CHIRP can import repeater data directly from RepeaterBook:

1. Go to **Radio > Import from Data Source > RepeaterBook**.
2. Select your **Country**, **State/Province**.
3. Optionally filter by band, proximity to coordinates, etc.
4. Click **OK** to retrieve the data.
5. CHIRP will present a list of repeaters. Select the ones you want to import and assign them to channel numbers.

### From CSV Files

You can import and export channel data in CSV (comma-separated values) format:

- **Export:** Go to **File > Export** to save your channels as a CSV file. This is excellent for backup and sharing.
- **Import:** Go to **File > Import** and select a CSV file. CHIRP will show you the incoming data and let you map it to memory channels.

CSV files can be edited in any spreadsheet application (Excel, LibreOffice Calc, Google Sheets), making bulk edits easier for large channel lists.

### From Another CHIRP File

If you have a CHIRP image file (.img) from another radio:

1. Open both files in CHIRP (each opens in its own tab).
2. Select the channels you want to copy in the source tab.
3. Copy (Ctrl+C) and paste (Ctrl+V) into the destination tab.

Note that not all settings transfer between different radio models. CHIRP will do its best to map compatible fields and will warn you about incompatibilities.

## Writing to the Radio

Once you've finished editing:

1. Go to **Radio > Upload To Radio**.
2. Verify the port, vendor, and model are correct.
3. Click **OK**.
4. CHIRP will write all channel and settings data to the radio. **Do not disconnect the cable or turn off the radio during this process.**
5. Once complete, verify a few channels on the radio to confirm the programming was successful.

::: warning
Writing to the radio **overwrites all existing channel data** with whatever is in CHIRP. Make sure you have downloaded and saved the current configuration first if you want to preserve any existing channels.
:::

## Saving and Managing CHIRP Files

- **Save your work** frequently. Go to **File > Save** to save the current radio image as a `.img` file.
- **Use descriptive filenames** like `UV5R_2024-01-15_repeaters_and_simplex.img`.
- **Keep backups.** Before making major changes, save a copy with a different name.
- **Version your files.** If you maintain different channel sets (e.g., one for home, one for travel), keep separate files for each.

## Troubleshooting

### "No response from radio"

- Ensure the radio is turned on and idle (not in a menu or scanning).
- Check that you selected the correct serial port, vendor, and model.
- Try a different USB port or cable.
- On some Baofeng radios, you may need to start the download in CHIRP and then turn the radio on within 2--3 seconds.

### "Clone failed" or "Error during upload"

- Some radios are finicky about timing. Try again; intermittent failures are common with cheaper cables.
- Reduce cable length or avoid USB extension cables.
- Close all other applications that might access the serial port.

### Channels don't appear on the radio after writing

- Some radios require a power cycle after programming.
- Verify that the channels were not written to a memory bank that is not currently selected on the radio.
- Check that channel names don't contain characters the radio doesn't support (some radios only support uppercase letters and numbers).

### Tone squelch not working

- Verify you selected the correct tone mode. **Tone** sends a tone on transmit only. **TSQL** sends and receives with tone squelch. **DTCS** uses digital coded squelch.
- Double-check the tone frequency against the repeater's published information. A mismatch of even 0.1 Hz will prevent access.
