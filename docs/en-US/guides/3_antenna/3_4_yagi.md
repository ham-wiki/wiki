# Yagi Antennas

The Yagi-Uda antenna — universally called simply a "Yagi" — is the most popular directional antenna in amateur radio. If you have ever seen a TV antenna on a rooftop, you have seen a Yagi. By arranging multiple parallel elements along a boom, a Yagi concentrates radiation in one direction, providing gain, directional selectivity, and front-to-back rejection. On VHF and UHF, Yagis are essential for weak-signal work, satellite contacts, and contests. On HF, large Yagis on towers enable competitive DX stations.

## How a Yagi Works

A Yagi consists of three types of elements, all parallel to each other and mounted perpendicular to a boom:

### Driven Element

The driven element is the one directly connected to the feedline. It is typically a half-wave dipole or a folded dipole. This is the only element that receives power from the transmitter — all other elements are parasitic (they are excited by mutual coupling from the electromagnetic field, not by a direct electrical connection).

### Reflector

The reflector is a single element placed behind the driven element (opposite the desired direction of radiation). It is slightly longer than the driven element — typically 5% longer. The reflector's function is to redirect energy that would radiate backward, sending it forward instead. It acts like a mirror for radio waves.

### Directors

Directors are placed in front of the driven element (in the direction of desired radiation). They are slightly shorter than the driven element — typically 5% shorter for the first director, with each subsequent director slightly shorter still. Directors guide and focus the electromagnetic wave forward, increasing gain and narrowing the beam.

A Yagi must have at least a driven element and one parasitic element (reflector or director) to function as a directional antenna. Adding more directors increases gain and narrows the beam, but with diminishing returns — each additional director adds less gain than the previous one.

### Element Count and Performance

| Configuration | Approximate Gain (dBd) | Beamwidth | Front-to-Back |
|---|---|---|---|
| 2 elements (driven + reflector) | 3–4 dB | ~120 degrees | 10–12 dB |
| 3 elements | 5–6 dB | ~70 degrees | 15–20 dB |
| 5 elements | 7–9 dB | ~50 degrees | 20–25 dB |
| 7 elements | 9–11 dB | ~40 degrees | 20–25 dB |
| 10+ elements | 11–14 dB | ~30 degrees | 20–30 dB |

## Yagi Design Parameters

Several dimensions define a Yagi's performance:

- **Element lengths:** Determine resonant frequency and coupling. The driven element is close to a half wavelength; the reflector is about 5% longer; directors are progressively shorter.
- **Element spacing:** The distance between elements along the boom significantly affects gain, impedance, bandwidth, and front-to-back ratio. Typical spacing is 0.15–0.25 wavelength between elements. Wider spacing generally gives more gain but requires a longer boom.
- **Boom length:** The overall boom length (from reflector to last director) is the primary determinant of gain. More boom length = more gain. A 1-wavelength boom yields about 10 dBd of gain regardless of how many elements are on it (though more elements provide better pattern and bandwidth control).
- **Element diameter:** Thicker elements increase bandwidth. HF Yagis often use tapered aluminum tubing (larger diameter at the center, smaller at the tips) for both structural strength and bandwidth.

## Feeding a Yagi

### Impedance

A simple dipole driven element in a Yagi has a feedpoint impedance significantly lower than the ~73 ohms of a dipole in free space, often in the range of 15–30 ohms depending on spacing and element configuration. This poor match to 50-ohm coax needs to be addressed.

### Common Feed Methods

- **Gamma match:** A single rod runs parallel to one half of the driven element, connected between the boom (ground) and a point on the element. A series capacitor (or adjustable stub) tunes out the reactance. The gamma match allows direct connection to 50-ohm coax and enables the driven element to be electrically connected to (grounded on) the boom, simplifying construction. This is the most common feed method on commercial HF Yagis.

- **T-match / Omega match:** Similar principle to the gamma match but uses two rods, one on each side of the element. Provides a balanced match.

- **Folded dipole driven element:** A folded dipole has approximately four times the impedance of a regular dipole (~280 ohms in free space). In a Yagi, where element interaction lowers impedance, a folded dipole can bring the feedpoint impedance up to a more convenient range. A 4:1 balun then matches to 50-ohm coax. This approach also broadens bandwidth.

- **Hairpin match:** A shorted stub (a U-shaped piece of wire or rod) is placed across the feedpoint terminals. It acts as an inductor that, combined with the naturally capacitive impedance of a short driven element, creates a match to 50 ohms. Used on many commercial VHF/UHF Yagis.

- **Direct 50-ohm feed:** By carefully optimizing element lengths and spacing, some designs achieve a direct 50-ohm match at the driven element feedpoint with no matching network. The DK7ZB design philosophy emphasizes this approach.

## VHF/UHF Yagis

Yagis truly shine on VHF and UHF where the wavelength is short enough that multi-element antennas are physically compact. A 5-element 2 m Yagi is about 6 feet long — manageable for a rooftop or even handheld use.

### Applications

- **Weak-signal SSB/CW on 2 m and 70 cm:** Horizontal Yagis pointed toward the other station. EME (Earth-Moon-Earth) communication uses large Yagi arrays.
- **Satellite contacts:** Yagis for the VHF uplink and UHF downlink, often on a lightweight azimuth-elevation mount. Hand-held "arrow" style antennas work for LEO satellite passes.
- **Direction finding (fox hunting):** A small handheld Yagi helps locate hidden transmitters.
- **Contests and grid square chasing:** VHF contesters use horizontally polarized Yagis on towers, often stacking multiple Yagis for additional gain.

## HF Yagis

HF Yagis are physically large and require a tower and rotator, making them a significant investment. A 3-element 20 m Yagi has a boom length of about 24 feet and elements spanning 34 feet. Despite the size and cost, the performance gains are dramatic — 6 dB or more of gain over a dipole translates to the equivalent of quadrupling your transmit power and improving your receive by the same margin.

### Popular Commercial HF Yagis

- **Mosley TA-33:** Classic triband (20/15/10 m) trapped Yagi. Affordable, decent performance.
- **Cushcraft A3S:** Triband trapped Yagi, similar to the TA-33 with slightly different trade-offs.
- **SteppIR DB18E:** Uses motorized elements that physically adjust length for each band, eliminating traps and their losses. Covers 20–6 m with full-size performance on each band. Premium price.
- **OptiBeam OB11-3:** High-performance 3-element triband design from Germany.
- **Homebrew monobanders:** Many serious contesters build single-band Yagis from aluminum tubing. Monobanders outperform triband trapped designs because each antenna is optimized for one band without compromise.

## DIY: Building a 3-Element 2-Meter Yagi

Here is a practical build guide for a simple 3-element Yagi for the 2-meter band (144–148 MHz). This design uses a direct 50-ohm feed based on the DK7ZB design approach.

### Materials

- **Boom:** A 36-inch (91 cm) length of 3/4-inch or 1-inch square or round non-conductive material (wood dowel, PVC pipe, or fiberglass tube). If using a conductive boom (aluminum), elements must be insulated from it and element lengths adjusted (conductive booms slightly detune elements).
- **Elements:** Three pieces of 3/16-inch or 1/4-inch aluminum rod (or #8 to #10 AWG solid copper wire for a lighter build):
  - Reflector: 40.5 inches (102.9 cm)
  - Driven element: 38.2 inches (97.0 cm) — this is the total tip-to-tip length; the feedpoint gap at the center is about 1 inch
  - Director: 36.4 inches (92.5 cm)
- **Element mounting hardware:** Stainless steel U-bolts, hose clamps, or through-bolts with insulating bushings
- **Feedpoint connector:** An SO-239 or BNC chassis mount connector at the center of the driven element
- **Coaxial cable:** RG-58 or RG-8X with appropriate connector

### Element Spacing (from reflector)

- Reflector to driven element: 14 inches (35.6 cm)
- Driven element to director: 11 inches (27.9 cm)
- Total boom length: 25 inches (63.5 cm)

### Assembly

1. Mark element positions on the boom.
2. Mount the reflector and director directly to the boom (they are continuous rods, no feedpoint gap).
3. Mount the driven element as two halves, each 19.1 inches, with a 1-inch gap at the center. Secure both halves to the boom, insulated from it.
4. Connect the SO-239 or BNC connector at the driven element gap. Solder the center conductor to one half and the shield to the other half.
5. Connect coax and test.

### Tuning

1. Connect a NanoVNA to the coax.
2. Measure SWR across 144–148 MHz.
3. The SWR minimum should be near 146 MHz. If it is too low in frequency, trim the driven element slightly (1/4 inch from each end at a time). If too high, the element is too short.
4. Final SWR should be well below 1.5:1 at the target frequency.

### Expected Performance

- Gain: approximately 7 dBi (4.85 dBd)
- Front-to-back ratio: approximately 15 dB
- Beamwidth: approximately 70 degrees
- SWR bandwidth (< 2:1): the entire 2 m band (144–148 MHz)

This antenna is perfect for satellite work (hand-held), fox hunting, point-to-point simplex communication, and working distant repeaters. Mount it horizontally for SSB/CW weak-signal work, or vertically for FM (though vertical Yagis are less common).

## Stacking Yagis

Two or more identical Yagis can be **stacked** (mounted one above the other at a specific spacing) and fed in phase to increase gain by approximately 3 dB (for two antennas). Stacking compresses the elevation pattern, directing more energy toward the horizon.

The optimal stacking distance depends on the single antenna's beamwidth — typical stacking spacing is 0.5 to 1 wavelength. Stacking requires a power splitter/combiner (phasing harness) to distribute power equally and in-phase to both antennas.

Stacking is common in VHF/UHF contesting and EME, where every dB of gain matters.

## Safety Considerations

- **HF Yagis are heavy and mounted high.** Tower work is inherently dangerous. If you are not experienced with tower climbing, hire a professional.
- **Rotators and control cables** add complexity. Ensure the rotator is rated for the antenna's wind load and weight.
- **RF exposure:** Yagis concentrate energy. Maintain safe distances from the front of the antenna during transmission, per your country's RF exposure regulations.
- **Wind loading:** Calculate the wind survival rating for your antenna and ensure the tower and rotator can handle it. Ice loading can significantly increase weight and wind cross-section.

## Summary

The Yagi antenna offers the best directional gain-per-dollar of any amateur antenna type. On VHF/UHF, even a small homebrew Yagi provides a dramatic performance improvement over an omnidirectional antenna. On HF, a Yagi on a tower is the gold standard for DX and contesting. Start with a simple VHF Yagi project to learn the principles, and scale up from there as your station grows.
