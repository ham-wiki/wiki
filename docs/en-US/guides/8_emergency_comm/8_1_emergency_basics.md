# Emergency Communication Basics

When disaster strikes and normal communications fail, amateur radio operators provide a critical link between affected areas and the outside world. This guide covers the fundamental knowledge and procedures for amateur radio emergency communication.

## The Role of Amateur Radio in Emergencies

Amateur radio serves several distinct functions during emergencies:

### Health and Welfare Traffic

Passing messages about the safety and well-being of individuals to their families. After a disaster, one of the most overwhelming demands on communication systems is people trying to reach loved ones.

### Tactical Communication

Direct, real-time communication supporting emergency response operations:

- Coordination between shelters, hospitals, and emergency management
- Search and rescue coordination
- Damage assessment reports
- Resource requests and logistics

### Formal Message Traffic (Radiograms)

Structured messages using the ARRL radiogram format that ensure critical information is transmitted accurately and can be relayed across multiple stations without loss of meaning.

### Skywarn and Weather Reporting

Trained amateur radio operators provide real-time severe weather reports to the National Weather Service (in the US) through the Skywarn program. Ground-truth reports of tornadoes, hail, flooding, and wind damage save lives by confirming radar observations.

## Emergency Organizations

### ARES (Amateur Radio Emergency Service)

- Organized by the ARRL at the local and state level
- Volunteers register with their local Emergency Coordinator (EC)
- Provides communication support during events and disasters
- Trains regularly through nets, exercises, and drills

### RACES (Radio Amateur Civil Emergency Service)

- Federally authorized (in the US) under FEMA
- Activated by a state or local government official during a declared emergency
- Participants must be registered with their local civil defense or emergency management agency
- May operate on specific RACES frequencies during activation

### SKYWARN

- A volunteer program of the National Weather Service (US)
- Trained spotters report severe weather observations
- Many Skywarn nets operate on amateur radio repeaters
- Free training available (online and in-person) through local NWS offices

### SATERN (Salvation Army Team Emergency Radio Network)

- Amateur radio operators supporting Salvation Army disaster relief
- Provides communication for disaster response and health and welfare traffic

## Emergency Frequencies

### Calling and Emergency Frequencies

Certain frequencies are recognized for emergency and calling purposes. In a real emergency, any frequency may be used, but these are the conventional starting points:

#### VHF/UHF

| Frequency | Mode | Use |
|---|---|---|
| **146.520 MHz** | FM Simplex | National 2m calling frequency (US). First place to try for local simplex communication. |
| **446.000 MHz** | FM Simplex | National 70cm calling frequency (US). |
| **144.200 MHz** | SSB | 2m SSB calling frequency. Useful for extended-range simplex. |
| **Local repeaters** | FM | Know your local repeaters, especially those with emergency power. |

#### HF

| Frequency | Mode | Use |
|---|---|---|
| **7.240 MHz** | LSB | 40m emergency/traffic frequency (Region 2). |
| **7.290 MHz** | LSB | National Traffic System (NTS) traffic. |
| **3.860 MHz** | LSB | 80m emergency/traffic frequency. |
| **3.993 MHz** | LSB | ARES/emergency net activity. |
| **14.300 MHz** | USB | 20m emergency/maritime mobile. |
| **14.265 MHz** | USB | Salvation Army (SATERN). |

### Winlink Frequencies

Winlink provides email over radio, which is invaluable for sending detailed messages during emergencies. Winlink gateways operate on various HF and VHF frequencies. A current list is maintained in the Winlink Express software.

## Operating Procedures

### Declaring an Emergency

If you are in a life-threatening emergency and need immediate assistance:

1. **On a repeater or net:** Say **"BREAK BREAK"** or **"EMERGENCY"** to interrupt ongoing traffic. State your callsign and the nature of the emergency clearly.
2. **On an open frequency:** Transmit **"MAYDAY MAYDAY MAYDAY, this is [your callsign]."** State your location, the nature of the emergency, and what assistance is needed.
3. **Any station hearing an emergency call** should immediately stop transmitting and stand by to assist.

::: tip
Under virtually all amateur radio regulations, any licensed operator may use any means of radio communication at their disposal in the event of an immediate threat to life or property. Regulations that normally apply (frequency limits, mode restrictions, etc.) are suspended during a genuine emergency.
:::

### Net Operations

Most organized emergency communication happens through **nets** -- structured on-air meetings managed by a **Net Control Station (NCS)**.

#### How an Emergency Net Works

1. The NCS opens the net, identifies the net's purpose, and takes check-ins.
2. Stations check in with their callsign, location, and any traffic they have.
3. The NCS directs traffic, assigning stations to relay messages, change frequencies, or handle specific tasks.
4. All stations remain silent unless directed by the NCS (this is a **directed net**).
5. The NCS periodically calls for emergency traffic, priority traffic, and routine traffic (in that order).

#### Net Discipline

- **Do not transmit unless directed by NCS** (in a directed net).
- **Keep transmissions brief and to the point.**
- **Use plain language.** In an emergency, clarity trumps brevity. Say "I need medical assistance at the community center" not "Need medico at CC."
- **Write messages down** before transmitting. Pre-written messages are more accurate and concise.
- **Confirm receipt** of messages. Use "Roger" or "Copied" to confirm, or request a repeat if you did not copy correctly.

### Formal Message Handling (Radiograms)

The ARRL radiogram format is the standard for formal message traffic. A radiogram consists of:

1. **Preamble:** Message number, precedence (Emergency, Priority, Welfare, Routine), handling instructions, station of origin, check (word count), place of origin, time filed, date.
2. **Address:** The intended recipient's name, address, and phone number.
3. **Text:** The message content, limited to 25 words or less for easy copy (longer messages are split).
4. **Signature:** The sender's name.

Learning to send and receive radiograms accurately is a core emergency communication skill. Practice by participating in the **National Traffic System (NTS)** nets.

## Preparing for Emergency Communication

### Personal Preparation

1. **Know your frequencies.** Program your local repeaters, simplex frequencies, and HF emergency frequencies into your radio before an emergency.
2. **Have backup power.** Batteries die, generators run out of fuel. Have multiple power options (see [Emergency Go Bag](./8_2_go_bag.md)).
3. **Keep your radio charged and ready.** A dead battery during an emergency is useless.
4. **Practice regularly.** Participate in weekly ARES/RACES nets, Field Day, and Simulated Emergency Tests.
5. **Complete ICS training.** FEMA's online courses (IS-100, IS-200, IS-700, IS-800) are free and teach you how emergency management works. Without this knowledge, you may be more of a hindrance than a help.

### Station Preparation

1. **Emergency power:** Battery backup, solar panels, generators. Your station should be able to operate for at least 72 hours without mains power.
2. **Antenna independence:** Have at least one antenna that does not require mains power to deploy (no antenna rotors, no electrically operated tuners that lack battery backup).
3. **Portable capability:** Have a go bag (see next section) ready for deployment away from home.
4. **Documentation:** Keep printed copies of important frequencies, net schedules, contact numbers for your ARES/RACES group, and local emergency management contacts.

### Communication Plan

Create a personal and family communication plan:

1. **Designate meeting points** and check-in times.
2. **Identify a distant relay** -- a friend or family member outside the likely disaster area who can serve as a message hub.
3. **Establish primary and backup communication methods** (repeater, simplex, HF, Winlink).
4. **Brief your family** on the plan and practice it.

## Common Mistakes in Emergency Communications

1. **Transmitting without listening.** Always listen before transmitting. You may be stepping on critical traffic.
2. **Freelancing.** Showing up at an emergency scene without coordination. Always check in with the local ARES/RACES leadership or NCS.
3. **Over-communicating.** Reporting every minor observation clogs the frequency. Report significant, actionable information.
4. **Under-preparing.** The time to learn emergency procedures is not during the emergency. Train and practice now.
5. **Equipment failure from lack of maintenance.** Test your emergency equipment regularly. Batteries self-discharge, antennas corrode, cables develop faults.
6. **Ignoring the Incident Command System.** Amateur radio operators supporting emergency management must work within the ICS structure. Going rogue undermines the response effort and discredits the amateur radio community.
