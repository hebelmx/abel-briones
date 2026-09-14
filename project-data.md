# Project Data — Extracted from Reseñas decks

Each record below is sourced directly from the corresponding Exxerpro "Reseña de Proyecto" PDF in `/Reseñas`. Images are curated (top 4 largest embedded photos/diagrams per PDF, resized to max 1600px, JPEG q82) at `site/assets/projects/<slug>/`.

---

## 1. slug: motion-control-migration-fandfold
- title: Motion Control Migration — Surgical-Drape Folding Machine (FandFold)
- title_es: Migración de Sistema de Control de Movimiento en Máquina FandFold
- client_or_industry: Semi-pharmaceutical industry — manufacturer of surgical operating-room drapes (client name not stated in deck)
- summary: A surgical-drape folding machine ran on discontinued Allen-Bradley SLC 500 + 1394 motion drives, creating high risk of unplanned downtime from unavailable spare parts. Exxerpro migrated the entire 8-axis motion-control system to a modern ControlLogix/Kinetix 6500 platform without reducing the machine's production rate.
- scope:
  - Migrate SLC 500 PLC to ControlLogix 1756-L71
  - Migrate PanelView 1000 (10") HMI
  - Migrate 13 servo drives (1394 family) to Kinetix 6500
  - Migrate 13 servomotors (1326 family) and 3 AC induction motor drives
  - Design, fabricate and install new control panel; freight from Exxerpro shop to plant
  - Commission within 14 days with zero reduction in production capability
- tech_stack: Allen-Bradley ControlLogix 1756-L71, Kinetix 6500, PowerFlex 525, 1326 AB servomotors, EtherNet/IP, CIP-Motion, remote I/O (FlexIO) star/ring network
- architecture_notes: 8 coordinated axes — Unwinder, Folders/AuxPull, Main Pull (master axis), Cross-Cutter (electronic-cam non-linear profile), Separator, Diverter, Crossfolder 1 & 2, PlateFolders, Stackers, Collector — synchronized off the Main Pull master axis running up to 40 sheets/minute.
- metrics_or_outcome: 14-day commissioning window met; 40 sheets/min production rate maintained; full electrical/mechanical diagrams, operating manual and troubleshooting guide delivered.
- images: assets/projects/motion-control-migration-fandfold/ (4 images)

---

## 2. slug: steering-gear-assembly-migration
- title: Control Migration — Automotive Power-Steering Gear Assembly Machine
- title_es: Migración de sistema en máquina de ensamble de piñón y armadura
- client_or_industry: Automotive hydraulic power-steering gear manufacturer (client name not stated in deck)
- summary: A pinion-and-yoke assembly/torque-calibration machine for hydraulic steering gears ran on an obsolete PLC 5/30 platform with DC drives, capping output at 15–25 pieces/hour. Exxerpro migrated the control and motion system to ControlLogix/Kinetix and redesigned the torque-nut and lock-nut mechanical subsystems.
- scope:
  - Migrate PLC 5/30 to ControlLogix 1756-L71
  - Replace PC-based monitoring with PanelView Plus 1500
  - Migrate 1394/DC drives to Kinetix 6500 with MPL servomotors
  - Design custom flanges, mechanical couplings and gearboxes for new servomotors
  - Redesign torque-nut and lock-nut mechanical subsystems
- tech_stack: ControlLogix 1756-L71, Kinetix 6500, PanelView Plus 1500, EtherNet/IP, MPL servomotors, load-cell torque measurement
- architecture_notes: ControlLogix communicates over EtherNet/IP to a PanelView Plus 1500 HMI and Kinetix 6500 drives powering custom-coupled MPL servomotors.
- metrics_or_outcome: Production increased from 15–25 to 35–40 pieces/hour after migration (roughly 60–130% throughput gain).
- images: assets/projects/steering-gear-assembly-migration/ (4 images)

---

## 3. slug: reflector-metallizing-migration
- title: Control Migration — Automotive Headlamp Reflector Metallizer
- title_es: Migración de sistema de control de Metalizadora de reflectores
- client_or_industry: "Empresa líder en manufactura de sistemas de iluminación para autos" — automotive lighting manufacturer (client name not stated in deck)
- summary: A vacuum-metallizing machine that aluminizes plastic headlamp reflectors ran on an obsolete Siemens TI 545 PLC with an aging UniOP HMI. Exxerpro migrated control to Allen-Bradley CompactLogix with a larger PanelView Plus 6 touchscreen, replicating the multi-stage vacuum sequence.
- scope:
  - Migrate Siemens TI500 PLC to CompactLogix L3ER
  - Migrate UniOP HMI to PanelView Plus 6 (15")
  - Replicate multi-stage vacuum-metallizing sequence (rough vacuum → crossover → fine vacuum → preheat → flashing → plasil coat → vent)
  - Commission within 5 days without reducing throughput
- tech_stack: Allen-Bradley CompactLogix L3ER, PanelView Plus 6, EtherNet/IP
- architecture_notes: Vacuum-chamber sequence (rough/fine vacuum, glow discharge, filament preheat, flashing/evaporation, plasil top-coat, chamber vent) monitored from one PanelView screen with live vacuum gauges and pump/valve states.
- metrics_or_outcome: 5-day commissioning target met; improved fault diagnostics on an open, supportable architecture replacing an obsolete platform.
- images: assets/projects/reflector-metallizing-migration/ (4 images)

---

## 4. slug: textile-warping-machine-migration
- title: Control Migration — Textile Yarn-Warping Machine
- title_es: Migración de sistema de control en máquina Urdidora
- client_or_industry: Textile manufacturer — yarn warping/winding (client name not stated in deck)
- summary: A yarn-warping machine's Siemens S7-200 PLC was password-locked with no recoverable credentials, blocking maintenance. Exxerpro reverse-engineered the control logic and re-implemented it on S7-1200/TP700, reusing the existing drives/motors to fit budget.
- scope:
  - Reprogram machine control from scratch (original PLC inaccessible/locked)
  - Migrate Siemens S7-200 to S7-1200 with TP700 panel
  - Reuse existing Fuji servo drive, Meiden AC drive and motors to control project cost
  - Improve fault/alarm capture versus the original system
- tech_stack: Siemens S7-1200, TP700 HMI, Fuji Electronic servo drive, Meiden AC drive, EtherNet/IP
- architecture_notes: S7-1200 controls the winding drum, thread-tensioning brake, horizontal drum traverse and fold-plate hydraulics, connected to the TP700 HMI over Ethernet.
- metrics_or_outcome: Delivered an open, fully documented control system replacing a machine that had become unmaintainable due to a lost PLC password.
- images: assets/projects/textile-warping-machine-migration/ (4 images)

---

## 5. slug: steering-torque-tester-migration
- title: Motion Control Migration — Truck Steering-Gear Torque Test Rig
- title_es: Migración de control de probadora de direcciones de camiones
- client_or_industry: Automotive — truck steering-gear test equipment (client name not stated in deck)
- summary: A truck steering-gear torque-test rig — applying servo-driven torque through a reducer while hydraulically circulating oil and reading load-cell torque against pass/fail limits — ran on an obsolete PLC5/1394 platform. Exxerpro migrated the 3-servo motion, hydraulic control and part-marking/scanning systems to ControlLogix/Kinetix 6500.
- scope:
  - Remove obsolete control/motion/electrical equipment; install new hardware
  - Full PLC logic reprogramming
  - Commissioning and post-startup support
- tech_stack: ControlLogix, Kinetix 6500, 3-axis motion-control libraries, hydraulic proportional-valve control, Telesis part marking, barcode scanning, encoders
- architecture_notes: Three coordinated servo axes apply and measure torque via a load cell while a hydraulic subsystem circulates oil through the steering gear under test; results are marked (Telesis) and logged per part.
- metrics_or_outcome: Implemented December 2018; 4-day commissioning plus 2 days of on-site post-implementation support.
- images: assets/projects/steering-torque-tester-migration/ (4 images)

---

## 6. slug: oee-production-reporting-system
- title: Multi-Machine OEE Data Collection & Reporting Platform
- title_es: Desarrollo e implementación de sistema para obtener indicadores OEE
- client_or_industry: Steel/wire-products manufacturer — galvanized welded-mesh production (client name not stated in deck)
- summary: A steel-mesh manufacturer had no OEE visibility across 6 mesh-weaving machines. Exxerpro built a full VB.NET application suite plus a SQL Server backend that talks to each machine's PLC, captures piece counts/cycle times/downtime/operator logins, and serves live OEE dashboards.
- scope:
  - VB.NET applications communicating with each machine's PLC
  - Central SQL Server database for production, downtime, maintenance and operator data
  - Application suite: Catálogos (catalog admin), Ideas (improvement suggestions), Mantenimiento (maintenance scheduling), Monitor (dev diagnostics), Paros (downtime logging), Publisher (OTA app updates), Producción (production scheduling), Raw Material, Main (live operator HMI), Reports (auto-emailed), Turnos (shift scheduling)
  - Live OEE dashboards per machine (availability / performance / quality / OEE %)
- tech_stack: VB.NET, Microsoft SQL Server, PLC-to-PC communication, desktop/web dashboards
- architecture_notes: Each of 6 machines has its own PLC+PC pair feeding a central SQL Server, which drives both real-time dashboards and scheduled emailed reports.
- metrics_or_outcome: Delivered a complete data-management system across 6 machines; client satisfaction rated "muy alto" despite a 1-month schedule extension from client-requested feature additions.
- images: assets/projects/oee-production-reporting-system/ (4 images)

---

## 7. slug: headlamp-traceability-jetta
*(already fully read earlier in the parent conversation — included here for completeness; images pre-extracted by coordinator at assets/projects/headlamp-traceability-jetta/)*
- title: Automated Traceability System — Automotive Headlamp Assembly (VW Jetta)
- title_es: Implementación de sistema de trazabilidad para líneas de ensamble de faros
- client_or_industry: Automotive lighting manufacturer — headlamp assembly for VW Jetta model year 2019 (client name not stated in deck)
- summary: Built and deployed a part-level traceability system across two 20-station PLC-controlled headlamp assembly lines, capturing cycle data, pass/fail test results and serial-number genealogy at every station.
- scope: Ethernet network install (cable trays, conduit, network cabinet, IP addressing); PLC programming for cycle-data capture; HMI updates; custom VB.NET data-acquisition app; SQL Server database; spreadsheet reporting
- tech_stack: Siemens S7-1200, PanelView KTP600, Atlas Copco screwdrivers, Dajac photometric alignment, Cognex Dataman scanners, VB.NET, SQL Server
- architecture_notes: Each of 20 stations scans a part serial number; the PLC collects cycle/test data and scanner reads; a VB.NET app ("HxH EP DAQ") aggregates over Ethernet into a local SQL Server DB.
- metrics_or_outcome: 2 full assembly lines (20 stations each) instrumented for complete genealogy traceability.
- images: assets/projects/headlamp-traceability-jetta/ (5 images)

---

## 8. slug: chromatic-label-gateway-valeo
- title: Chromatic Classification Gateway & Label-Printing System
- title_es: Gateway para gestión, procesamiento de datos e impresión de etiquetas con marca cromática
- client_or_industry: Valeo Special Products (automotive lighting) — Querétaro plant. Responsables: Ing. Fabián Hernández Ramos, Ing. Lisset Camacho
- summary: Built a Linux-based gateway that reads photometry results from Valeo's Edixia measurement system, classifies each lighting unit into a color-coded quality band, and automatically prints a matching color label on the Red Lux and BRP lines — replacing manual classification.
- scope: Linux software development; comparison logic against Edixia photometry results; ZPL label design/printing; gateway installation in production control panels; functional validation; documentation and operator training
- tech_stack: Linux, Epson ColorWorks C6500 label printer, ZPL, integration with Edixia photometry system
- architecture_notes: Gateway receives luminosity coordinates from the Edixia system, classifies them against predefined tolerance ranges (color-coded: green/yellow/orange/white/purple), and drives a ZPL-programmed label printer in real time.
- metrics_or_outcome: Reduced manual processing/labeling time; standardized QC classification by color code; compact, portable hardware adaptable to different lines. Executed April–July 2023.
- images: assets/projects/chromatic-label-gateway-valeo/ (4 images)

---

## 9. slug: photometry-inspection-station-valeo
- title: Automated Photometric Inspection Station
- title_es: Fabricación de máquina de fotometría en Valeo Planta 1
- client_or_industry: Valeo Sistemas Eléctricos (automotive lighting), Querétaro. Responsable: Ing. Fabián Hernández Ramos
- summary: Designed, built and programmed a 4-position indexing photometric test station to automatically inspect 3 automotive headlamp models (LB Spot, LB Wide, HB) — including validating and correcting a client-supplied design that had deficiencies.
- scope: Mechanical design/fabrication of 4-station index table with quick-disconnect nests and Dajac alignment; electrical panel design/assembly; pneumatic system; PLC/HMI programming (manual & automatic sequences); safety light-curtain and e-stop integration
- tech_stack: Siemens S7-1200, safety light curtain, Dajac alignment sensors, pneumatic clamping, PanelView-style Simatic HMI
- architecture_notes: A 4-position indexing table carries 2 part nests per station; each position aligns the lamp via Dajac sensors before photometric measurement; the PLC drives indexing, clamping and safety interlocks, with HMI screens for process/manual/alarms/I-O.
- metrics_or_outcome: Delivered December 2022–April 2023; validated against Valeo Sistemas Eléctricos engineering standards.
- images: assets/projects/photometry-inspection-station-valeo/ (4 images)

---

## 10. slug: plunger-plv-assembly-tremec
- title: Automated Plunger & Park-Lock-Valve Assembly Station
- title_es: Diseño y fabricación de máquina ensambladora de Plunger y PLV
- client_or_industry: Tremec (manual transmission manufacturer), Querétaro. Responsable: Ing. Sergio Luján García
- summary: Designed, built and programmed an automated station that presses a plunger and Park Lock Valve (PLV) together with a dowel pin and retaining ring, replacing a manual operation, with full Datamatrix part traceability into Tremec's existing system.
- scope: Bosch-profile structural frame; pneumatic pin/ring insertion tooling; PLC/HMI programming; Cognex Datamatrix scanning integrated with Tremec's traceability system; electrical panel build and wiring; FAT/SAT and commissioning
- tech_stack: Siemens S7-1200, TP700 HMI, Cognex barcode/Datamatrix scanner, pneumatic actuators, dowel-pin/retaining-ring press tooling
- architecture_notes: A pneumatically actuated press station inserts a dowel pin and safety ring joining plunger and PLV, verified by a digital probe measurement; Datamatrix codes are read and pushed to Tremec's traceability system via PLC logic.
- metrics_or_outcome: Delivered July–October 2024; consistent cycle-to-cycle fixation verified by digital probe measurement.
- images: assets/projects/plunger-plv-assembly-tremec/ (4 images)

---

## 11. slug: vertical-press-clipping-valeo
- title: Vertical Press for Automotive Light-Guide Component Clipping
- title_es: Diseño, fabricación y programación de prensa vertical para clipado de componentes en Valeo Special Products
- client_or_industry: Valeo Special Products, for the Stellantis Jeep production line. Responsable: Ing. Fabián Hernández Ramos
- summary: Designed, built and programmed a vertical press with modular interchangeable tooling to clip PCB/Carrier/LG components for Jeep light-guide assemblies, cutting cycle time and defects versus the prior process.
- scope: PTR structural frame; vertical press with modular upper/lower tooling for multiple part variants; acrylic guarding; pneumatic actuation; PLC/HMI programming for manual/automatic sequencing; safety light curtains and e-stops
- tech_stack: Siemens S7-1200, safety light curtains, pneumatic press actuators, modular tooling
- architecture_notes: A vertical press mechanism indexes interchangeable upper/lower tool sets to clip different part variants; the PLC monitors clip distance and pneumatic pressure each cycle and verifies OK/NOK before releasing the part.
- metrics_or_outcome: Executed September 2023–July 2024; standardized, faster tool-change procedure reducing changeover downtime.
- images: assets/projects/vertical-press-clipping-valeo/ (4 images)

---

## 12. slug: traceability-system-valeo-lighting
- title: Multi-Line Traceability System — Automotive Lighting Assembly
- title_es: Desarrollo de sistema de trazabilidad para líneas de ensamble en Valeo Special Products
- client_or_industry: Valeo Special Products, Querétaro. Responsable: Ing. Fabián Hernández Ramos
- summary: Developed and deployed an integrated traceability system across three assembly lines (CHMSL Q5, Bumper Lamp, Spoiler), capturing component genealogy in real time from Siemens S7-1200 PLCs and generating production/quality reports.
- scope: Network cabling/canalization for Ethernet backbone; server/node configuration; code-reader and label-printer mounting hardware; PLC/HMI programming for data capture; FAT/SAT and operator training
- tech_stack: Siemens S7-1200, Ethernet networking, barcode/label-printing hardware, SQL-based reporting
- architecture_notes: Each line's PLC pushes component and process data over a dedicated Ethernet backbone into a central traceability server, which flags out-of-spec parameters in real time and generates scrap/cycle-time reports.
- metrics_or_outcome: Delivered July–November 2023 across 3 production lines; real-time defect detection reducing rework.
- images: assets/projects/traceability-system-valeo-lighting/ (4 images)

---

## 13. slug: uncoiler-cupper-migration-ball
- title: Control System Migration — Cupper & Uncoiler Aluminum Can-Stock Line
- title_es: Migración de sistema de control en máquinas Cupper 1 y Uncoiler
- client_or_industry: Ball Corporation (aluminum beverage / personal-care / household packaging), Querétaro. Responsable: Ing. Sergio Luján
- summary: Migrated the Cupper 1 and Uncoiler machines (24oz cup-blanking area) from an obsolete Modicon PLC and Parker HMI to Allen-Bradley ControlLogix L81 and PanelView Plus 1000, integrated over EtherNet/IP with the line's master PLC.
- scope: Process/network/electrical audit and legacy program review; logic migration to Studio 5000 v33; new PanelView 1000 HMI application (screens, alarms, recipes); panel installation and Ethernet cabling; manual/automatic sequence testing with product; FAT; documentation and training
- tech_stack: Allen-Bradley ControlLogix L81, PanelView Plus 1000, Studio 5000 v33, EtherNet/IP
- architecture_notes: Cupper 1 and Uncoiler PLCs communicate with the line's master "Line Control" PLC over EtherNet/IP; the HMI exposes motor status, main/manual drive speed, coil count and fault diagnostics (e.g. "Falla de comunicación con Line Control").
- metrics_or_outcome: Delivered May–July 2023; eliminated dependency on an obsolete, hard-to-source Modicon/Parker platform.
- images: assets/projects/uncoiler-cupper-migration-ball/ (4 images)

---

## Client testimonial letters (from Google Drive, not part of Reseñas PDFs)
Real, signed "carta de recomendación" letters found in Drive — genuine client endorsements, all confirming Exxerpro/Abel Briones delivered engineering/automation projects "en tiempo, calidad y forma":
1. **Prettl de México** — Ing. Juan Guzmán, Gte. Ingeniería y Proyectos: "...ha desarrollado proyectos de ingeniería y automatización en nuestra compañía, así como dar servicio de apoyo en restablecimiento de fallas, consultoría, mantenimiento preventivo y/o correctivo con calidad y excelencia."
2. **Valeo Sylvania Iluminación** — Ing. Mario Reséndiz, Ing. de Proyectos (03-Aug-2012): "...constantemente desarrolla proyectos para nuestra compañía en tiempo, calidad y forma, mostrando una excelente actitud de servicio con responsabilidad y excelencia."
3. **Mabe** — Ing. Huemak Almaraz Medina, Jefe de Mantenimiento UDN 127 (08-Aug-2012): "...ha desarrollado proyectos en nuestra compañía en tiempo, calidad y forma, así como apoyo en corrección y eliminación de fallas en diferentes equipos con distintas plataformas de control, mostrando una excelente actitud al trabajo, una gran responsabilidad y apego a los lineamientos de seguridad."
4. **Condutel (Grupo Condumex)** — Alejandro Ramírez Reynoso, Compras (07-Aug-2012): "...recomendar ampliamente a la Empresa Exxerpro Solutions S.A de C.V representada por M en C Abel Briones Ramírez quien ha prestado servicios de ingeniería y automatización a nuestra compañía."

## Current service offering (from Drive, 2025 deck, not a completed case study)
**Intelligent PTAR (wastewater treatment plant) monitoring service** — AI + cloud-based system measuring pH, ORP, turbidity, BOD/COD, TSS, chlorine, conductivity, N/P, flow/pressure/temperature, sulfates. Predictive analytics, remote dashboards, quoted ROI: 15% reduction in chemical dosing, +20% filter life, +20% reduction in unplanned maintenance, +40% faster response to deviations. Good evidence for the "evolved into AI/Industry 5.0" narrative — position as a current capability, not a named client project.
