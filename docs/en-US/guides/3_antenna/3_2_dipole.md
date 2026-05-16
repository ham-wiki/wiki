# Dipole Antennas

The half-wave dipole is the most fundamental antenna in amateur radio. It is simple to build, easy to understand, effective on the air, and serves as the reference against which other antennas are measured. If you are new to HF, a dipole should be your first antenna project.

## How a Dipole Works

A half-wave dipole consists of two conductive elements, each approximately one-quarter wavelength long, connected at a central feedpoint. The total length is approximately one-half wavelength at the desired operating frequency.

When RF energy is applied at the feedpoint, current flows outward along both elements. The current is maximum at the center (feedpoint) and falls to zero at the tips. The voltage is the opposite — minimum at the center and maximum at the tips. This current distribution creates the dipole's characteristic figure-eight radiation pattern with maximum radiation broadside (perpendicular) to the wire and nulls off the ends.

## Calculating Dipole Length

The theoretical half-wavelength in free space is:

```text
Length (feet) = 492 / frequency (MHz)
```

In practice, the ends of the antenna have a capacitive loading effect (end effect), and the wire's diameter and proximity to ground affect the resonant length. A commonly used formula that accounts for these effects is:

```text
Length (feet) = 468 / frequency (MHz)
```

This gives the **total** length of both elements combined. Each element is half this value.

**Examples:**

| Band | Center Freq | Total Length | Each Leg |
|---|---|---|---|
| 80 m | 3.75 MHz | 124.8 ft (38.0 m) | 62.4 ft (19.0 m) |
| 40 m | 7.15 MHz | 65.5 ft (20.0 m) | 32.7 ft (10.0 m) |
| 20 m | 14.175 MHz | 33.0 ft (10.1 m) | 16.5 ft (5.0 m) |
| 15 m | 21.225 MHz | 22.1 ft (6.7 m) | 11.0 ft (3.4 m) |
| 10 m | 28.5 MHz | 16.4 ft (5.0 m) | 8.2 ft (2.5 m) |
| 2 m | 146 MHz | 38.4 in (97.5 cm) | 19.2 in (48.8 cm) |

**Important:** These are starting points. Always cut the wire slightly longer than calculated (add 2–3% extra) and trim to resonance using an antenna analyzer. It is easy to trim wire shorter but impossible to make it longer.

## Building a Half-Wave Dipole

### Materials

- **Wire:** Stranded copper wire works well. Common choices:
  - 14 AWG stranded THHN (hardware store wire) — inexpensive and easy to work with
  - 12 or 14 AWG insulated flex-weave antenna wire — more flexible, available from ham radio suppliers
  - 18 AWG speaker wire or hookup wire — lighter weight, good for portable use
  - Bare copper or copperweld wire — traditional but harder to handle
- **Center insulator / feedpoint:** You can purchase a commercial center connector (they include an SO-239 jack and strain relief) or build your own from a piece of plastic or PVC with appropriate connections.
- **End insulators:** Commercial egg-style insulators or simply tie a loop knot in the wire.
- **Coaxial cable:** RG-8X or RG-58 for runs under 50 feet at HF frequencies. LMR-400 for longer runs.
- **Support rope:** Dacron or polyester rope (UV-resistant, low stretch). Avoid nylon, which stretches when wet.

### Construction Steps

1. **Calculate the total length** using the formula above for your target frequency. Add 6 inches to each leg for attachment and trimming.

2. **Cut two pieces of wire** to the calculated leg length plus extra.

3. **Prepare the center feedpoint:**
   - If using a commercial center insulator, strip the wire ends and attach them to the terminals on each side.
   - If building your own, solder the coax center conductor to one wire and the coax shield to the other wire. Provide strain relief so tension on the wire does not stress the solder joints. A loop of wire through holes in a plastic plate works well.

4. **Install a 1:1 choke balun** at the feedpoint. The simplest method: wind 10–12 turns of your coax into a coil about 6 inches in diameter, secured with cable ties. This choke prevents common-mode current on the coax shield. For a more effective choke, wind the coax through a FT-240-31 ferrite toroid (10–12 turns for HF).

5. **Attach end insulators** to the wire tips. Loop the wire through the insulator and twist/solder it back on itself.

6. **Tie support ropes** to the end insulators.

7. **Hoist the antenna.** The center should be as high as possible. Ideally, the dipole should be at least a quarter-wavelength above ground (33 feet for 40 m, 17 feet for 20 m), but any height is better than no antenna.

### Tuning

1. Start with the wires slightly longer than the formula suggests.
2. Connect your antenna analyzer (NanoVNA) to the coax at the shack end.
3. Sweep the frequency range and find the point of minimum SWR.
4. If the resonant frequency is too low, the antenna is too long — trim equal amounts from each end (start with 1 inch at a time on HF).
5. If the resonant frequency is too high, the antenna is too short — you will need to add wire by splicing.
6. Repeat until the SWR minimum falls at your desired frequency.

**Tip:** You can shift the resonant frequency down by adding a few inches of wire to each end. Keep trimmed pieces in case you cut too much.

## Radiation Pattern and Performance

A horizontal dipole in free space produces a figure-eight (bidirectional) pattern with:

- Maximum radiation broadside to the wire (perpendicular)
- Deep nulls off the wire ends
- Gain of 2.15 dBi (0 dBd by definition)

Over real ground, the pattern changes depending on height:

- **Low height (< 0.25 wavelength):** High-angle radiation, best for short-range (NVIS) communication on 80 m and 40 m. Good for regional nets and emergency communication.
- **Medium height (0.25–0.5 wavelength):** Mixed pattern with both low-angle and high-angle lobes. Versatile.
- **High height (> 0.5 wavelength):** Predominantly low-angle radiation, best for DX (long-distance) communication.

For 20 m DX, try to get the antenna at least 30–35 feet high. For 40 m NVIS, even 25–30 feet works well. Do not let height limitations discourage you — a low dipole on 40 m or 80 m is actually a great NVIS antenna for reliable regional contacts within a few hundred miles.

## The Inverted-V Dipole

The inverted-V is the most popular variation of the dipole. Instead of hanging the wire perfectly horizontal, you support only the center on a single high point (mast, tree branch, building peak) and let the two legs angle downward to anchor points near the ground.

### Advantages of the Inverted-V

- **Only one high support point needed** instead of three (two for the ends and one for the center of a flat dipole)
- **Broader radiation pattern** — the drooping elements fill in the end nulls of a flat dipole, making it more omnidirectional
- **Lower impedance** — the feedpoint impedance drops from ~73 ohms to ~50 ohms when the included angle between the legs is about 90–120 degrees, providing an even better match to 50-ohm coax
- **Self-supporting with minimal hardware** — just one mast or rope at the apex

### Design Considerations

- The included angle between the legs should be **90 degrees or greater**. If the angle is too narrow (legs hanging nearly straight down), radiation efficiency drops and the pattern becomes unpredictable.
- The wire tips should be at least **6–8 feet above ground** for safety and to minimize ground losses.
- Because the legs droop, the antenna is electrically shorter than a flat dipole at the same apex height. You may need to make the wires **2–3% longer** than the flat dipole formula suggests.
- Resonant frequency may shift slightly compared to a flat dipole — always tune with an analyzer.

### A Practical 40-Meter Inverted-V

Here is a concrete example:

1. Calculate: 468 / 7.15 = 65.5 feet total. Add 3% for inverted-V effect: ~67.5 feet total. Cut each leg to 33.75 feet (plus 6 inches for attachment).
2. Install a mast, push-up pole, or rope in a tree at 30–40 feet.
3. Attach the center feedpoint (with choke balun) to the top.
4. Run each leg downward at roughly 45 degrees from horizontal.
5. Stake or tie the ends at 6–8 feet above ground.
6. Measure with an analyzer and trim to resonance at 7.15 MHz.

This simple antenna will let you work stations across your continent during the day and around the world at night on 40 meters, using 100 W or even less.

## Multi-Band Dipoles

A single dipole is resonant on one band (it also works on its odd harmonics — a 40 m dipole works on 15 m — but with different patterns). To cover multiple bands, several approaches exist:

### Fan Dipole

Hang multiple dipole elements from the same feedpoint, one pair for each desired band. The elements interact slightly, so you will need to tune them iteratively (adjust one, recheck the others, repeat). Fan dipoles work well for 2–4 bands.

### Trap Dipole

Parallel LC circuits (traps) are inserted into the wire at specific points. The traps act as electrical switches — they block current at the trap's resonant frequency, making the antenna appear shorter on that band. Below the trap frequency, the full wire length is active.

Traps add weight, cost, and some loss, but they allow multi-band operation from a single wire.

### Linked Dipole

Removable links (alligator clips, Anderson Powerpoles, or banana plugs) are inserted at calculated points. To change bands, you climb up and add or remove links to change the wire length. Simple and lossless, but not convenient for frequent band changes.

### Off-Center-Fed Dipole (OCFD / Windom)

Instead of feeding at the center, the feedpoint is offset (typically about 1/3 from one end). This presents a higher impedance (~200–300 ohms) requiring a 4:1 balun, but the antenna can achieve reasonable SWR on multiple harmonically related bands. The popular MyAntennas EFHW (end-fed half-wave) antenna uses a variation of this concept.

### End-Fed Half-Wave (EFHW)

Fed at one end through a matching transformer (typically 49:1), the EFHW is extremely popular for portable and stealth installations because it needs only one support point and no radials. Despite having a voltage antinode at the feedpoint (which makes it sensitive to common-mode issues and requires careful choke placement), the EFHW works very well in practice and is one of the most popular portable HF antennas.

## Tips and Troubleshooting

- **SWR is good but I can't hear anyone:** The antenna is probably working but at a suboptimal height or orientation. Try raising it higher or reorienting it.
- **SWR drifts in rain:** Water on the wire changes its electrical length slightly. This is normal and usually not a problem. Using insulated wire reduces the effect.
- **RF in the shack (getting shocked, computer acting up):** You have common-mode current on your feedline. Install a choke balun at the feedpoint and another where the coax enters the shack.
- **Can't get SWR below 2:1:** Check all connections. Verify your coax is not damaged. Ensure the antenna is not too close to metal objects. Re-measure the wire length.
- **Not enough space for a full-size dipole:** Consider a shortened (loaded) dipole using loading coils, a folded configuration, or an end-fed wire that runs along a non-straight path (bending the wire is fine — the far-field pattern is determined primarily by the overall aperture, not the exact wire path).

## Summary

The half-wave dipole and its inverted-V variant are where most HF operators should start. They are cheap, simple, forgiving, and genuinely effective. Build one, get it in the air, and start making contacts. You can always build more sophisticated antennas later — but you may find that the humble dipole is all you need.
