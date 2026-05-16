# Antenna Fundamentals

Understanding how antennas work — even at a basic level — transforms you from someone who buys antennas to someone who can design, build, modify, and troubleshoot them. This page covers the essential theory that underpins every antenna type.

## How Antennas Work

An antenna is a transducer: it converts between electrical signals traveling in a transmission line (your coax cable) and electromagnetic waves propagating through space. The physics are reciprocal — an antenna that transmits well in a given direction also receives well from that direction. This is the principle of reciprocity, and it means you only need to analyze an antenna once; its transmit and receive patterns are identical.

When alternating current flows through a conductor, it creates time-varying electric and magnetic fields around it. If the conductor's length is a significant fraction of the wavelength, these fields detach from the conductor and propagate outward as electromagnetic waves. That is radiation, and that conductor is now an antenna.

The key dimension is **wavelength**, which is related to frequency by:

```text
wavelength (meters) = 300 / frequency (MHz)
```

For example:

- 146 MHz (2 m band): wavelength = 2.05 m
- 440 MHz (70 cm band): wavelength = 0.68 m
- 14.2 MHz (20 m band): wavelength = 21.1 m
- 7.1 MHz (40 m band): wavelength = 42.3 m

Antenna elements are typically sized as fractions of the wavelength: half-wave (lambda/2), quarter-wave (lambda/4), and so on.

## Impedance

Every antenna presents an impedance at its feedpoint — the point where the transmission line connects. Impedance is a complex number with a resistive part (R) and a reactive part (X), measured in ohms:

```text
Z = R + jX
```

- **Radiation resistance** is the portion of R that represents power actually radiated as electromagnetic waves. This is what you want to be large.
- **Loss resistance** is the portion of R that represents power dissipated as heat in the antenna, ground system, and surrounding structures. This should be small.
- **Reactance (X)** stores energy rather than radiating it. A positive X means the antenna is inductive (too long); a negative X means it is capacitive (too short).

At resonance, X = 0, and the impedance is purely resistive. A half-wave dipole in free space has a feedpoint impedance of approximately 73 ohms at resonance — close to the 50-ohm standard used in amateur radio, which is why dipoles work so well with a direct coax feed.

### Impedance Matching

Your radio expects to see 50 ohms (50 + j0). When the antenna impedance differs, some power is reflected back toward the radio rather than being radiated. The Standing Wave Ratio (SWR) quantifies this mismatch:

- **SWR 1.0:1** — Perfect match, zero reflected power
- **SWR 1.5:1** — Excellent, 4% reflected power
- **SWR 2.0:1** — Good, 11% reflected power
- **SWR 3.0:1** — Acceptable, 25% reflected power (most radios begin reducing power)
- **SWR 5.0:1 or higher** — Poor, significant reflected power, potential radio damage

Impedance matching can be achieved by:

- **Adjusting antenna dimensions** to bring it to resonance at the desired frequency
- **Using a matching network** (antenna tuner, balun, matching transformer)
- **Using a specific feedpoint technique** (gamma match, T-match, hairpin match)

## Radiation Patterns

An antenna's radiation pattern is a three-dimensional representation of how it distributes radiated energy. We typically view it as two 2D slices:

- **Azimuth (horizontal) pattern:** A top-down view showing directionality around the compass
- **Elevation pattern:** A side view showing the vertical angle of radiation

### Key Pattern Terms

- **Main lobe:** The direction of maximum radiation
- **Side lobes:** Secondary radiation peaks in undesired directions
- **Null:** A direction with minimal radiation
- **Front-to-back ratio:** For directional antennas, the ratio of gain in the forward direction to gain in the backward direction, expressed in dB
- **Beamwidth:** The angular width of the main lobe, typically measured between the -3 dB (half-power) points

### Patterns of Common Antennas

- **Isotropic radiator:** A theoretical point source that radiates equally in all directions. Used as a reference (0 dBi) but does not physically exist.
- **Dipole:** A figure-eight pattern in the plane of the antenna, with maximum radiation broadside (perpendicular) to the wire and nulls off the ends. Gain: 2.15 dBi.
- **Vertical (quarter-wave with ground plane):** Omnidirectional in azimuth (equal in all horizontal directions), with a radiation pattern that depends on ground quality and radial system. Ideal for communication in all horizontal directions without rotating the antenna.
- **Yagi:** Strongly directional with a single main lobe. Gain increases with the number of elements, typically 6–15 dBi for amateur Yagis.

## Gain

Antenna gain is one of the most misunderstood specifications. **An antenna does not amplify signals.** Gain is a measure of how effectively an antenna concentrates energy in a particular direction compared to a reference antenna.

Think of it like a light bulb versus a flashlight. A bare bulb sends light in all directions. A flashlight uses a reflector to concentrate the same amount of light into a narrow beam, making it brighter in that direction but dark everywhere else. The flashlight has "gain" in the forward direction.

Gain is expressed in two units:

- **dBi:** Gain relative to an isotropic radiator. A dipole has 2.15 dBi of gain.
- **dBd:** Gain relative to a dipole. By definition, a dipole has 0 dBd. To convert: dBi = dBd + 2.15.

Watch for manufacturers quoting gain in dBi to make numbers look bigger. A "7 dBi" antenna sounds better than a "4.85 dBd" antenna, but they are the same thing.

### The Gain–Pattern Tradeoff

Higher gain always means a narrower beamwidth. A 3-element Yagi might have 8 dBi gain with a 60-degree beamwidth. A 10-element Yagi might have 14 dBi gain but only a 30-degree beamwidth. The high-gain antenna must be aimed precisely at the other station — if it is pointed the wrong way, it is worse than a dipole.

For omnidirectional antennas like verticals, gain is achieved by compressing the vertical radiation pattern. A 5/8-wave vertical has more gain than a 1/4-wave vertical because it concentrates energy toward the horizon rather than wasting it at high angles.

## Polarization

The polarization of an electromagnetic wave describes the orientation of its electric field vector:

- **Vertical polarization:** Electric field is vertical. Produced by vertical antennas.
- **Horizontal polarization:** Electric field is horizontal. Produced by horizontal dipoles.
- **Circular polarization:** The electric field rotates as the wave propagates. Used in satellite communications (right-hand circular, RHCP, or left-hand circular, LHCP).

**Matching polarization matters.** If a vertically polarized signal meets a horizontally polarized antenna (or vice versa), there is a theoretical 20 dB cross-polarization loss. In practice, reflections and scattering reduce this penalty, especially on HF where ionospheric reflection scrambles polarization. But on VHF/UHF line-of-sight paths, polarization mismatch is significant.

Convention in amateur radio:

- **VHF/UHF FM (repeaters):** Vertical polarization (vertical antennas)
- **VHF/UHF SSB/CW (weak signal):** Horizontal polarization (horizontal Yagis)
- **HF:** Horizontal polarization is traditional, but ionospheric reflection randomizes polarization, so it matters less
- **Satellites:** Circular polarization is ideal; a linearly polarized antenna works but with some fading

## Bandwidth

Bandwidth is the range of frequencies over which an antenna maintains acceptable performance (typically SWR below 2:1). Bandwidth depends on several factors:

- **Element diameter:** Thicker elements produce wider bandwidth. A dipole made from 1-inch tubing has far more bandwidth than one made from #22 wire.
- **Antenna type:** Some designs are inherently broadband (fan dipoles, log-periodic arrays, cage dipoles) while others are narrow (small loops, short verticals).
- **Matching network:** A tuner can extend usable bandwidth at the cost of some efficiency.

For a typical wire dipole on 40 m (7.0–7.3 MHz), expect to cover about 100–200 kHz with SWR under 2:1. On 20 m, you might cover 200–300 kHz. On VHF/UHF, the percentage bandwidth is much larger, and covering an entire band with low SWR is straightforward.

## Feedlines and Baluns

### Unbalanced vs. Balanced

Coaxial cable is an **unbalanced** feedline — current flows on the center conductor and returns on the inside surface of the shield. The shield's outer surface is at ground potential.

A dipole is a **balanced** antenna — equal and opposite currents flow on each half.

Connecting an unbalanced feedline directly to a balanced antenna can cause **common-mode current** to flow on the outside of the coax shield. This current radiates, distorting the antenna's pattern, creating RF interference in the shack, and causing unpredictable SWR readings.

### Baluns and Chokes

A **balun** (balanced-to-unbalanced) prevents common-mode current:

- **Current balun (choke balun):** Presents high impedance to common-mode current while passing differential-mode current normally. Made from coax wound on a ferrite core or formed into an air-core choke. The most common and recommended type.
- **Voltage balun:** Forces equal voltages on each side of the balanced load. Less effective at suppressing common-mode current. 4:1 voltage baluns are common for feeding antennas with impedances around 200 ohms (folded dipoles, off-center-fed dipoles).

**Recommendation:** Use a 1:1 current balun (choke) at the feedpoint of any balanced antenna fed with coax. A simple and effective choke can be made by winding 10–12 turns of your coax through a Fair-Rite FT-240-31 ferrite toroid.

## Near Field vs. Far Field

Close to an antenna (within a few wavelengths), the electromagnetic fields are complex and do not behave like propagating waves. This is the **near field**. Objects in the near field — trees, buildings, other antennas, your own body — interact strongly with the antenna and affect its impedance, pattern, and efficiency.

Beyond a few wavelengths, the fields settle into a predictable wave pattern. This is the **far field**, where the radiation pattern is stable and meaningful.

**Practical implication:** Keep the antenna's radiating elements away from conductive objects. On VHF/UHF (short wavelengths), a few feet of clearance is sufficient. On HF low bands (long wavelengths), this becomes challenging — a 40 m dipole ideally wants to be a half-wavelength (66 feet) above ground, which is rarely practical. Do the best you can.

## Antenna Modeling Software

Before building an antenna, you can simulate its performance using modeling software:

- **MMANA-GAL:** Free, easy to use, based on the method of moments. Good for wire antennas. Runs on Windows (and Linux via Wine).
- **EZNEC:** The standard amateur antenna modeling tool. Commercial, but a free demo version is available with limited element count.
- **4NEC2:** Free NEC-2 based modeler with 3D visualization. Windows.
- **xnec2c:** Open-source NEC-2 modeler for Linux with real-time pattern updates as you adjust geometry.
- **OpenEMS:** Full 3D electromagnetic field solver (FDTD). More complex but handles structures NEC cannot model well.

Modeling lets you experiment with designs, predict performance, and optimize dimensions before cutting wire — a hugely valuable capability.

## What's Next

With these fundamentals in mind, explore the specific antenna types:

- [Dipole Antennas](./3_2_dipole.md) — the best starting point for HF
- [Vertical Antennas](./3_3_vertical.md) — omnidirectional coverage
- [Yagi Antennas](./3_4_yagi.md) — directional gain
- [Portable Antennas](./3_5_portable_antenna.md) — for field operations
