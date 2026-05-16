# Vertical Antennas

Vertical antennas are popular for their omnidirectional radiation pattern, low-angle radiation that favors DX (long-distance) contacts, and compact footprint. A vertical antenna takes up very little horizontal space, making it ideal for operators with limited yard area. The tradeoff is that verticals require a good ground system to work efficiently, and they tend to pick up more noise than horizontal antennas.

## How a Vertical Antenna Works

The basic vertical antenna is a quarter-wave monopole mounted over a ground plane. The radiating element is one-quarter wavelength tall, and the ground plane (earth, radials, or a vehicle roof) acts as a mirror, creating a virtual image of the element below ground. Together, the real element and its image form the equivalent of a half-wave dipole — but only the real element needs to be physically present.

The feedpoint impedance of an ideal quarter-wave vertical over a perfect ground plane is approximately **36 ohms** — a reasonable match to 50-ohm coax (SWR about 1.4:1). With real-world ground, the impedance varies depending on ground conductivity and the radial system.

## Radiation Pattern

A vertical antenna radiates omnidirectionally in the horizontal plane — it transmits and receives equally well in all compass directions without the need for rotation. This is a major advantage over directional antennas when you want to communicate in all directions or when the direction of incoming signals is unknown.

The vertical radiation pattern depends critically on the ground system:

- **With a perfect ground plane:** Maximum radiation occurs at the horizon (0 degrees elevation), which is ideal for DX via ionospheric skip.
- **With poor or no ground plane:** The radiation angle rises, directing energy upward at high angles — wasteful for DX and similar to the performance of a cloud-warmer dipole at low height.
- **Over real earth:** Most of the radiation is concentrated between 10 and 30 degrees elevation, depending on ground conductivity and radial system quality.

## The Quarter-Wave Ground Plane Antenna

### For VHF/UHF

The simplest vertical antenna for VHF or UHF is a quarter-wave ground plane. It consists of a vertical radiating element and three or four horizontal (or slightly drooped) radials at the feedpoint.

**Calculating element length:**

```text
Quarter wavelength (inches) = 2808 / frequency (MHz)
```

**Examples:**

| Band | Frequency | Vertical Element | Each Radial |
|---|---|---|---|
| 2 m | 146 MHz | 19.2 inches (48.8 cm) | 19.2 inches (48.8 cm) |
| 70 cm | 440 MHz | 6.4 inches (16.2 cm) | 6.4 inches (16.2 cm) |

**Construction:**

1. Use a chassis-mount SO-239 connector as the base.
2. Solder a 19.2-inch (for 2 m) piece of stiff copper wire or brass rod to the center pin — this is the vertical radiating element.
3. Solder four 19.2-inch pieces of wire or rod to the ground tabs (shield connection) — these are the radials. Angle them downward at approximately 45 degrees from horizontal.
4. Mount the assembly on a mast with the vertical element pointing up.

**Why droop the radials?** When radials are horizontal, the feedpoint impedance is approximately 36 ohms. Drooping them to 45 degrees raises the impedance to approximately 50 ohms, providing a near-perfect match to 50-ohm coax without any matching network.

This simple antenna is cheap to build, performs well, and is an excellent first VHF/UHF antenna project.

### For HF

A quarter-wave vertical for HF is physically much larger:

| Band | Frequency | Element Height |
|---|---|---|
| 10 m | 28.5 MHz | 8.2 ft (2.5 m) |
| 20 m | 14.175 MHz | 16.5 ft (5.0 m) |
| 40 m | 7.15 MHz | 32.8 ft (10.0 m) |
| 80 m | 3.75 MHz | 62.4 ft (19.0 m) |

For the higher HF bands (10 m, 15 m, 20 m), a quarter-wave vertical is manageable. For 40 m and 80 m, the height becomes challenging but not impossible — many operators use telescoping aluminum tubing, fiberglass push-up poles, or wire supported by a fiberglass mast.

## Ground Systems and Radials

The ground system is the single most important factor determining a vertical antenna's efficiency. Without adequate ground, a significant portion of your transmit power is dissipated as heat in the ground resistance rather than being radiated.

### Types of Ground Systems

**Elevated radials:** Three or four radials, each a quarter-wavelength long, mounted at the feedpoint 8–10 feet above ground. This is the simplest effective ground system. The radials do not need to be horizontal — they can slope downward. Elevated radials are significantly better than a single ground rod and are the recommended approach for most amateur vertical installations.

**Ground-mounted radials (buried or on-surface):** For verticals mounted at ground level, lay radials on the ground or bury them shallowly. More radials are better:

| Number of Radials | Approximate Ground Loss |
|---|---|
| 4 | Very high — inefficient |
| 16 | Moderate improvement |
| 32 | Significant improvement |
| 60 | Good |
| 120 | Very good (diminishing returns beyond this) |

Each radial should ideally be a quarter-wavelength, but studies (N6LF and others) show that even short radials (1/8 wavelength or less) improve performance significantly when you use many of them. The total area covered matters as much as individual radial length.

**Practical recommendation for ground-mounted verticals:** Lay at least 16 radials, preferably 32 or more. Use inexpensive bare or insulated wire. They do not need to be straight — route them around obstacles. Bury them just below the surface or secure with landscape staples so they are not tripped over.

**Saltwater:** Saltwater is an extraordinarily good ground plane. Verticals at the beach or on a dock perform exceptionally well, often matching or exceeding the performance of elaborate home installations.

## Commercial Vertical Antennas

### Single-Band Verticals

- **Hustler BTV series:** Trapped verticals covering multiple bands. Simple installation with a single ground-mounted base. Add band segments for the bands you want.

### Multi-Band Verticals

- **Cushcraft R8 / MA8040V:** Multi-band trapped verticals requiring no radials (they use an elevated counterpoise system). Decent performance with minimal installation footprint.
- **Butternut HF9V:** Covers nine bands (80–6 m) using a combination of traps and shunt-fed elements. Requires a radial system.
- **DX Commander:** A fan-vertical design with multiple quarter-wave wire elements hanging from a fiberglass pole, each cut for a different band. Requires elevated radials. Very popular for its effectiveness and reasonable cost. Works well as both a home station and portable antenna.
- **Hustler 6-BTV / 5-BTV:** Classic trapped verticals covering 6 or 5 bands respectively. Ground-mounted, requires radials.

### Considerations When Buying a Commercial Vertical

- **Radials are not optional** regardless of what marketing materials suggest. Even "no-radial" verticals benefit from at least a few elevated radials or a good ground connection.
- **Check the bandwidth.** Trapped verticals often have narrow usable bandwidth on each band. You may need a tuner to cover an entire band.
- **Plan the installation.** Ground-mounted verticals need radials and a clear area. Roof-mounted verticals need structural support and an appropriate counterpoise.

## End-Fed Vertical (Sloper Configuration)

You can turn a half-wave end-fed wire into a vertical by running it up a pole or along a building wall vertically, fed at the bottom through a 49:1 transformer. This is similar to the popular EFHW horizontal antenna but oriented vertically for omnidirectional, low-angle radiation. No radials are strictly necessary with a half-wave end-fed, though a counterpoise wire improves common-mode suppression.

## Vertical Dipole

A vertical dipole is a full half-wave element oriented vertically, fed at the center. It does not require a ground plane or radials because both halves of the dipole are present. The feedpoint impedance is approximately 73 ohms (like a horizontal dipole).

**Advantages:** No radial system needed, clean omnidirectional pattern.

**Disadvantages:** The antenna is twice as tall as a quarter-wave vertical for the same frequency. Getting a half-wave vertical for 20 m (33 feet) into the air with the feedpoint at the midpoint (16.5 feet) is feasible; for 40 m (65 feet) it becomes challenging.

A vertical dipole is an excellent choice for higher HF bands (10 m, 15 m, 17 m, 20 m) and especially good for portable operations where it can be supported by a telescoping mast.

## Verticals vs. Dipoles

| Aspect | Vertical | Horizontal Dipole |
|---|---|---|
| Radiation angle | Low (favors DX) | Depends on height (low at height > 0.5 wavelength) |
| Directional pattern | Omnidirectional | Bidirectional (broadside to wire) |
| Space required | Minimal horizontal footprint | Needs horizontal span |
| Ground system | Critical (radials needed) | Not critical |
| Noise pickup | Higher (verticals hear more man-made noise) | Lower (horizontal polarization rejects some noise) |
| Best for | DX, all-direction coverage, limited space | General purpose, nets, contests, quieter receive |

Many operators use both: a vertical for DX and casual contacts (no need to rotate), and a directional or horizontal antenna for contests and when they need to favor a particular direction or reject noise.

## Tips for Vertical Antenna Success

1. **Invest in ground radials.** This cannot be overstated. The most expensive vertical with a poor ground system will be outperformed by a cheap vertical with a good one.

2. **Use a choke at the feedpoint.** Common-mode current is a significant problem with verticals. A good choke balun (wound on a FT-240-31 toroid) at the base prevents coax shield radiation.

3. **Keep the vertical element straight and plumb.** A tilting vertical changes the radiation pattern and impedance. Use guy lines if necessary.

4. **Elevate if possible.** Even a few feet of elevation above surrounding terrain helps. Rooftop installations work well — the metal roof can serve as part of the ground plane.

5. **Be realistic about noise.** Verticals pick up more man-made noise (power lines, electronics, motors) than horizontal antennas because man-made noise is predominantly vertically polarized. If your noise floor is high, a horizontal antenna may hear better even if the vertical has a better radiation pattern.

6. **Consider a ground-mounted vertical for field day and portable use.** Verticals are quick to set up, need no trees, and provide omnidirectional coverage — ideal for activations in open fields.
