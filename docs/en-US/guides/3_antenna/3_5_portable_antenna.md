# Portable Antennas

Portable operation — whether for Parks on the Air (POTA), Summits on the Air (SOTA), field day, emergency communications, or simply operating from a campsite — requires antennas that are lightweight, compact when stowed, quick to deploy, and effective on the air. This guide covers the most popular portable antenna types for both VHF/UHF and HF.

## VHF/UHF Portable Antennas

### Aftermarket Whip Antennas

The single biggest improvement you can make to a handheld radio's performance is replacing the stock rubber duck antenna with a better whip.

**Popular upgrades:**

- **Nagoya NA-771:** A 15.3-inch flexible whip that significantly outperforms the stock antenna on most HTs. Dual-band (2 m / 70 cm). Available in SMA-male and SMA-female versions — check your radio's connector type. ~$10–15.
- **Signal Stick:** A lightweight, extremely flexible whip made in the USA. Very popular in the POTA/SOTA community. Dual-band. ~$25.
- **Diamond SRH77CA / SRH320A:** Higher-quality dual-band whips from Diamond. ~$25–35.
- **Comet SMA-24:** A long (24-inch) whip with excellent gain on 2 m. ~$20–30.

**Why they work better:** Stock rubber duck antennas are shortened to be compact, which reduces their efficiency (often 50–80% of the signal is lost as heat in the loading coil). A longer whip is closer to a proper quarter-wave, radiates more efficiently, and has a better radiation pattern.

### Telescoping Whip Antennas

Telescoping antennas extend for use and collapse for transport. They are popular for VHF/UHF and can be tuned to different bands by adjusting the extended length.

- **Diamond RH-795:** A wideband telescoping whip for handhelds. Extends to about 17 inches. Covers 70 cm, 2 m, and has receive-only coverage on other bands. ~$30–40.
- **Generic BNC telescoping whips:** Available cheaply and connect to radios with BNC adapters. Useful for HF receive on wideband portables.

### Magnetic Mount Antennas (Mag-Mount)

When operating from a vehicle or near a metal surface, a magnetic mount antenna provides a dramatic improvement over any handheld whip.

**Popular models:**

- **Tram 1185:** Dual-band (2 m / 70 cm), NMO-style mag mount with 3.5-inch magnet. ~$25.
- **Diamond MR77SMA / MR77B:** Compact dual-band mag mount. Good for quick vehicle setups. ~$40–50.
- **Comet M-24M:** Dual-band mag mount with a strong magnet. ~$30.
- **Nagoya UT-72:** Affordable dual-band mag mount. ~$20.

**Tips for mag-mount use:**
- Place the antenna on the center of the vehicle roof for the best ground plane.
- The metal surface acts as the ground plane — no metal surface, no ground plane. Mag mounts do not work well on non-metallic surfaces.
- Route the coax cable through a door or window jamb. The thin RG-174 cable used on most mag mounts is designed to handle this.
- Do not underestimate a mag mount — even a cheap one will dramatically outperform a handheld's rubber duck because of the elevated position and metal ground plane.

### Portable Yagi (Tape Measure Yagi)

The tape measure Yagi is a classic DIY project that creates a lightweight, collapsible, directional antenna for 2 m.

**Design:** Three elements (reflector, driven, director) made from steel tape measure strips mounted on a PVC boom. The tape measure elements can be rolled up or flexed for transport and snap straight when deployed.

**Materials:**
- A 1-inch steel tape measure (the retractable kind from a hardware store)
- 3-foot piece of 3/4-inch PVC pipe (boom)
- Three PVC tee fittings
- Hose clamps
- SO-239 or BNC connector
- Short coax jumper

**Dimensions (for 146 MHz center frequency):**
- Reflector: 41.5 inches (105.4 cm)
- Driven element: 35.5 inches total (two halves of 17.75 inches with a gap at the center) (90.2 cm total)
- Director: 35 inches (88.9 cm)
- Reflector to driven element spacing: 12 inches (30.5 cm)
- Driven element to director spacing: 10.5 inches (26.7 cm)

**Performance:**
- Approximately 7 dBi gain
- Highly directional — useful for satellite work, direction finding (fox hunts), and reaching distant repeaters
- Collapses to a bundle about 3 feet long and a few inches across

This antenna is one of the best amateur radio DIY projects for beginners. Total cost is under $15 if you have the tools.

### Roll-Up J-Pole

A J-pole antenna made from 300-ohm twin-lead (TV antenna flat wire) that rolls up to the size of a cigar for transport.

**Design:** The J-pole is a half-wave antenna with an integrated quarter-wave matching section. Made from ladder line, it is lightweight and can be hung from a tree branch, taped to a wall, or draped over a pack.

**Dimensions (for 146 MHz):**
- Radiating section: 38 inches (96.5 cm)
- Matching stub: 19 inches (48.3 cm)
- Both conductors connected (shorted) at the bottom of the stub
- Coax feedpoint tapped about 1–2 inches above the short, adjusted for best SWR

**Performance:** Roughly equivalent to a quarter-wave ground plane. The advantage is extreme portability — it weighs almost nothing and takes up no space.

These are commercially available pre-made (e.g., Ed Fong's dual-band J-pole, ~$30) or easily built from a few feet of 300-ohm ladder line.

## HF Portable Antennas

### End-Fed Half-Wave (EFHW)

The EFHW has become the dominant portable HF antenna. It consists of a single wire, approximately a half wavelength long on the lowest desired band, fed at one end through a 49:1 impedance transformer (unun). The wire can be deployed as a sloper (one end high, the other low), an inverted-L (part vertical, part horizontal), or strung between two trees.

**Why it is so popular for portable:**
- Only one elevated support point needed (throw a line over a tree branch)
- No radials required (though a short counterpoise wire improves performance)
- Multi-band operation on harmonically related bands (a 40 m EFHW works on 40, 20, 15, and 10 m)
- Lightweight — the entire antenna (wire + transformer) weighs a few ounces

**Commercial options:**
- **MyAntennas EFHW-4010:** Pre-built 40–10 m EFHW with a tuned transformer. ~$60–80.
- **PackTenna EFHW:** Lightweight end-fed kit designed for backpacking. ~$50–70.
- **QRP Guys EFHW:** Affordable kit with switchable bands. ~$35.

**DIY:** Wind a 49:1 transformer on a FT-140-43 toroid (about 3 turns primary, 21 turns secondary) and attach approximately 66 feet of wire for a 40 m half-wave. Total materials cost: under $15.

**Deployment tip:** Carry a throw line (a small weight on paracord) to get a rope over a tree branch. Hoist one end of the wire as high as possible (25–40 feet), run it horizontally or as a sloper to a second lower point, and connect the transformer at the lower end with a short coax run to your radio.

### Random Wire with Tuner

If you do not want to worry about specific wire lengths, simply throw any length of wire into a tree and use an antenna tuner to match it. This is not as efficient as a resonant antenna but is extremely flexible and works on any band the tuner can match.

**Best pairing:** An internal ATU (like in the Elecraft KX2/KX3 or Xiegu G90) or an external portable tuner (Elecraft T1, LDG Z-11 Pro II, or the built-in tuner on many QRP rigs) with a 30–60 foot wire and a counterpoise.

### Linked Dipole

A dipole with removable links at calculated points. By connecting or disconnecting links, you change the active wire length to resonate on different bands. No tuner needed on the linked bands.

**Example:** A 40 m linked dipole might have links at the 20 m, 15 m, and 10 m quarter-wave points on each leg. Deploy the full length for 40 m; disconnect the first link on each side for 20 m; and so on.

**Advantages:** Simple, efficient (no traps or loading coils), lightweight.
**Disadvantages:** Must physically change links to change bands; requires careful initial measurement and trimming.

### Telescoping Vertical Whip (HF)

Telescoping fiberglass or aluminum masts with loading coils enable portable vertical operation on HF.

**Popular options:**

- **Wolf River Coils Silver Bullet / TIA:** A telescoping whip with a tapped loading coil. Adjust the coil tap and whip length to resonate on 80–10 m. Mounts on a tripod or vehicle mount. Requires a counterpoise or ground radials. ~$100–150.
- **Chameleon MPAS 2.0:** A modular portable antenna system that configures as a vertical, horizontal, or sloper for 160–6 m. ~$300–400.
- **MFJ-1979:** A simple 17-foot telescoping whip that resonates on 40 m as a quarter-wave vertical with radials. Cheap (~$50) and effective.
- **Super Antenna MP1:** A compact, adjustable vertical with loading coils for 80–10 m. Tripod-mounted. ~$200.

### Portable Wire Vertical (Inverted-L / Sloper)

A wire cut to a quarter-wavelength, run up a fiberglass pole (like a Jackite 31-foot pole or SOTAbeams 10 m mast) and then bent horizontally for the remaining length, creates an inverted-L antenna. This is essentially a vertical with some horizontal component.

**Setup:**
1. Erect the fiberglass pole (do not guy it unless conditions demand it — most portable poles are free-standing up to 25–30 feet).
2. Run the wire up the pole as high as it goes.
3. If the wire is longer than the pole, run the remainder horizontally to an anchor point.
4. Connect the base to a matching transformer or tuner.
5. Lay 2–4 radials on the ground or use a counterpoise wire.

This is an excellent all-purpose portable HF antenna, especially for POTA activations where trees or supports may not be available.

## Portable Antenna Support Systems

### Fiberglass Masts

- **Jackite 31-foot fiberglass pole:** A telescoping crappie pole. Lightweight, cheap (~$50), and widely used by portable operators. Not designed for antennas but handles lightweight wire antennas well.
- **SOTAbeams 10 m (33 ft) mast:** Designed specifically for portable antenna use. More robust than a fishing pole. ~$80–120.
- **MFJ-1910:** A 33-foot telescoping fiberglass mast. ~$70.
- **DX Commander telescoping poles:** Designed for supporting fan-vertical and wire antennas. Various lengths available.

### Arborist Throw Lines

Getting a wire antenna into a tree is one of the most practical challenges of portable operation. An arborist throw line makes it easy:

- A 12-oz throw weight on a thin line (Dyneema or similar)
- Toss the weight over a tree branch at 25–40 feet
- Use the throw line to pull up a halyard rope
- Use the halyard to pull up your antenna wire

Alternatively, a small slingshot or even a water bottle on a string works in a pinch.

### Tripods and Mounts

For vertical antennas without trees, a camera tripod or portable drive-on mount provides a base:

- **Ram Mounting Systems / Harbor Freight tripod:** Inexpensive tripods that support lightweight verticals.
- **Drive-on mast mount:** A flat plate you drive a vehicle tire onto, with a vertical tube for a mast. ~$30–50.
- **Ground spike:** A pointed rod driven into the ground to support a vertical mast.

## Portable Antenna Comparison

| Antenna | Bands | Weight | Setup Time | Supports Needed | Performance |
|---|---|---|---|---|---|
| EFHW wire | 40–10 m (multi-band) | < 1 lb | 5–10 min | One tree or pole | Very good |
| Linked dipole | Selected bands | < 1 lb | 10–15 min | Two supports | Excellent |
| Random wire + tuner | Any | < 1 lb | 5 min | One support | Good (depends on length) |
| Telescoping vertical | 80–10 m (with coil) | 2–5 lbs | 5 min | Tripod/mount | Good (needs radials) |
| Inverted-L on pole | 40–20 m typical | 1–2 lbs | 5–10 min | Fiberglass mast | Good |
| Mag-mount (VHF/UHF) | 2 m / 70 cm | < 1 lb | 1 min | Vehicle roof | Very good |
| Tape measure Yagi | 2 m | < 2 lbs | 3 min | Handheld | Excellent (directional) |
| Roll-up J-pole | 2 m / 70 cm | < 2 oz | 2 min | Hang from anything | Good |

## Portable Operating Tips

1. **Always bring more antenna wire than you think you need.** Wire is light and cheap. Having extra lets you experiment or replace a damaged antenna.

2. **Practice setup at home.** Your first deployment should not be in the field. Time yourself and refine your process.

3. **Keep a go-bag.** Pack your complete portable antenna kit — wire, transformer/tuner, coax, throw line, rope, stakes, adapters — in a dedicated bag so you can grab it and go.

4. **Bring a NanoVNA.** Field conditions (tree proximity, ground type, antenna height) affect tuning. A quick SWR check ensures you are resonant before you start calling CQ.

5. **EFHW + fiberglass pole is the "meta" for POTA/SOTA.** The combination of a 40 m EFHW wire, a 49:1 transformer, and a 30-foot fiberglass pole covers 40/20/15/10 m with a single lightweight setup. Thousands of successful POTA and SOTA activations use exactly this combination.

6. **Bring a backup antenna.** For critical operations (emergency comms, activations you traveled far to reach), a backup antenna — even just a roll of wire and a tuner — ensures you get on the air even if your primary antenna fails.

7. **Respect leave-no-trace principles.** Remove all wire, rope, stakes, and hardware when you pack up. Do not damage trees or vegetation.
