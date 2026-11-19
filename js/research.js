(function () {
  'use strict';

  const PUBLICATIONS = [
    {
      id: 'bravo-2010-extractive-dwc',
      title: 'Extractive Dividing Wall Column: Design and Optimization',
      authors: ['C. Bravo-Bravo', 'J.G. Segovia-Hernández', 'C. Gutiérrez-Antonio', 'A.L. Durán', 'A. Bonilla-Petriciolet', 'A. Briones-Ramírez'],
      year: 2010,
      type: 'journal',
      venue: 'Industrial & Engineering Chemistry Research',
      volIssuePages: '49(8), 3672–3688',
      doi: '10.1021/ie9006936',
      citations: 191,
      pdf: './papers/bravo-bravo-2010-extractive-dwc-design-optimization.pdf',
      topics: ['dwc', 'moo', 'ga-ai'],
      resultTag: 'Single-Shell Extractive DWC',
      resume: 'Introduces an extractive dividing-wall column (EDWC) that consolidates extractive distillation and solvent recovery into a single thermally coupled shell. A constrained multi-objective genetic algorithm coupled directly to Aspen Plus simultaneously minimizes heat duty and total annualized cost across non-ideal and azeotropic mixtures, demonstrating major energy and capital reductions over conventional two-column extractive trains.',
      highlights: [
        'Couples a constrained multi-objective GA with rigorous Aspen Plus simulation to handle non-convex extractive separation landscapes.',
        'Consolidates extractive and solvent-recovery columns into one dividing-wall shell without sacrificing product purity.',
        'Group flagship publication with 191+ Google Scholar citations in ACS Industrial & Engineering Chemistry Research (Q1).'
      ],
      structured: {
        problem: 'Extractive distillation of non-ideal and azeotropic mixtures typically requires two separate columns (extractive + solvent recovery) with high reboiler energy and capital cost.',
        methodology: 'Constrained multi-objective genetic algorithm coupled directly to rigorous Aspen Plus steady-state models minimizing heat duty and total annualized cost.',
        contribution: 'Demonstrated a feasible single-shell extractive dividing-wall column (EDWC) design workflow achieving significant energy and capital reductions.',
        relevance: 'Establishes a generalizable blueprint for combining thermal coupling with solvent-assisted separations in energy-intensive chemical plants.',
        myContribution: 'Co-authored research.'
      },
      bib: { type: 'article', key: 'bravo2010extractive', journal: 'Industrial \\& Engineering Chemistry Research', volume: '49', number: '8', pages: '3672--3688', publisher: 'American Chemical Society' }
    },
    {
      id: 'gomez-castro-2008-dwc-control',
      title: 'Dividing Wall Distillation Columns: Optimization and Control Properties',
      authors: ['F.I. Gómez-Castro', 'J.G. Segovia-Hernández', 'S. Hernández', 'C. Gutiérrez-Antonio', 'A. Briones-Ramírez'],
      year: 2008,
      type: 'journal',
      venue: 'Chemical Engineering & Technology',
      volIssuePages: '31(9), 1246–1260',
      doi: '10.1002/ceat.200800116',
      citations: 125,
      pdf: './papers/gomez-castro-2008-dwc-optimization-control-properties.pdf',
      topics: ['dwc', 'ga-ai', 'control'],
      resultTag: 'Single & Double DWC Control',
      resume: 'Establishes the foundational genetic-algorithm-plus-Aspen-Plus methodology for optimizing single- and double-dividing-wall columns while evaluating their theoretical dynamic controllability. Compares energy consumption and singular-value-decomposition (SVD) control metrics across multiple feed compositions, showing intensified designs remain controllable under disturbance.',
      highlights: [
        'Optimizes both single- and double-dividing-wall columns across multiple ternary and quaternary hydrocarbon mixtures.',
        'Evaluates open-loop controllability via SVD condition numbers alongside steady-state energy savings.',
        'Foundational methodology paper with 125+ Google Scholar citations in Wiley Chemical Engineering & Technology.'
      ],
      structured: {
        problem: 'Dividing-wall columns save energy but introduce tight thermal coupling that can degrade operability and make optimal sizing non-convex.',
        methodology: 'Genetic algorithm interfaced with Aspen Plus for design optimization, paired with singular value decomposition (SVD) for open-loop controllability analysis.',
        contribution: 'Established that optimized single- and double-dividing-wall columns can achieve substantial energy savings while maintaining favorable theoretical control properties.',
        relevance: 'Demonstrates the importance of evaluating dynamic controllability alongside steady-state cost before deploying intensified industrial equipment.',
        myContribution: 'Co-authored research.'
      },
      bib: { type: 'article', key: 'gomezcastro2008dividing', journal: 'Chemical Engineering \\& Technology', volume: '31', number: '9', pages: '1246--1260', publisher: 'Wiley-VCH' }
    },
    {
      id: 'gutierrez-antonio-2009-petlyuk-pareto',
      title: 'Pareto Front of Ideal Petlyuk Sequences Using a Multiobjective Genetic Algorithm with Constraints',
      authors: ['C. Gutiérrez-Antonio', 'A. Briones-Ramírez'],
      year: 2009,
      type: 'journal',
      venue: 'Computers & Chemical Engineering',
      volIssuePages: '33(2), 454–464',
      doi: '10.1016/j.compchemeng.2008.11.004',
      citations: 110,
      pdf: './papers/gutierrez-antonio-2009-pareto-front-petlyuk-genetic-algorithm.pdf',
      topics: ['dwc', 'moo', 'ga-ai'],
      resultTag: 'Full Pareto-Optimal Front',
      resume: 'Develops a constrained multi-objective genetic algorithm directly interfaced with Aspen Plus to map the complete Pareto front of Petlyuk distillation sequences. Instead of collapsing design trade-offs into a single weighted scalar, the algorithm jointly minimizes total stages and reboiler heat duty under strict purity constraints.',
      highlights: [
        'Two-author core algorithmic paper introducing the constrained MOGA–Aspen Plus architecture reused across the research line.',
        'Traces full trade-off curves between capital complexity (stage count) and operating energy (heat duty).',
        '110+ Google Scholar citations in Elsevier Computers & Chemical Engineering (Q1).'
      ],
      structured: {
        problem: 'Designing Petlyuk distillation sequences involves discrete structural choices and continuous operating variables under strict purity constraints, where scalarized solvers miss trade-offs.',
        methodology: 'Constrained multi-objective genetic algorithm (MOGA) coupled directly to rigorous Aspen Plus models to minimize stage count and heat duty simultaneously.',
        contribution: 'Produced complete Pareto-optimal fronts for ideal Petlyuk sequences, giving engineers a full spectrum of capital-vs-energy trade-offs.',
        relevance: 'Formed the core simulator-in-the-loop multi-objective optimization framework reused across subsequent distillation, biofuel, and surrogate-modeling studies.',
        myContribution: 'Co-authored research (two-author study with Claudia Gutiérrez-Antonio).'
      },
      bib: { type: 'article', key: 'gutierrezantonio2009pareto', journal: 'Computers \\& Chemical Engineering', volume: '33', number: '2', pages: '454--464', publisher: 'Elsevier' }
    },
    {
      id: 'vazquez-castillo-2009-quaternary-ga',
      title: 'Design and Optimization, Using Genetic Algorithms, of Intensified Distillation Systems for a Class of Quaternary Mixtures',
      authors: ['J.A. Vázquez-Castillo', 'J.A. Venegas-Sánchez', 'J.G. Segovia-Hernández', 'H. Hernández-Escoto', 'S. Hernández', 'C. Gutiérrez-Antonio', 'A. Briones-Ramírez'],
      year: 2009,
      type: 'journal',
      venue: 'Computers & Chemical Engineering',
      volIssuePages: '33(11), 1841–1850',
      doi: '10.1016/j.compchemeng.2009.04.011',
      citations: 104,
      pdf: './papers/vazquez-castillo-2009-quaternary-distillation-genetic-algorithms.pdf',
      topics: ['dwc', 'ga-ai', 'control'],
      resultTag: 'Quaternary Energy & Exergy',
      resume: 'Extends genetic-algorithm-driven process intensification from ternary to four-component (quaternary) distillation systems across varying relative feed volatilities. Evaluates energy demand, second-law thermodynamic efficiency, total annual cost, and theoretical control properties to identify when thermally coupled quaternary trains outperform conventional sequences.',
      highlights: [
        'Benchmarks intensified quaternary sequences on heat duty, second-law efficiency, TAC, and SVD controllability.',
        'Quantifies how feed volatility ratios dictate which thermally coupled topology is most advantageous.',
        '104+ Google Scholar citations in Elsevier Computers & Chemical Engineering (Q1).'
      ],
      structured: {
        problem: 'Extending thermally coupled distillation from three-component to four-component mixtures dramatically expands the topological and operational search space.',
        methodology: 'Genetic-algorithm optimization coupled to Aspen Plus across varying feed relative volatilities, evaluating energy, second-law efficiency, TAC, and SVD control metrics.',
        contribution: 'Mapped how feed volatility profiles govern which intensified quaternary sequence outperforms conventional distillation trains.',
        relevance: 'Provides quantitative selection criteria for multi-product industrial fractionation trains beyond ternary textbook cases.',
        myContribution: 'Co-authored research.'
      },
      bib: { type: 'article', key: 'vazquezcastillo2009quaternary', journal: 'Computers \\& Chemical Engineering', volume: '33', number: '11', pages: '1841--1850', publisher: 'Elsevier' }
    },
    {
      id: 'gutierrez-antonio-2016-biojet-jatropha',
      title: 'Simultaneous Energy Integration and Intensification of the Hydrotreating Process to Produce Biojet Fuel from Jatropha curcas',
      authors: ['C. Gutiérrez-Antonio', 'A.G. Romero-Izquierdo', 'F.I. Gómez-Castro', 'S. Hernández', 'A. Briones-Ramírez'],
      year: 2016,
      type: 'journal',
      venue: 'Chemical Engineering and Processing: Process Intensification',
      volIssuePages: '110, 134–145',
      doi: '10.1016/j.cep.2016.10.007',
      citations: 55,
      pdf: './papers/gutierrez-antonio-2016-biojet-jatropha-energy-integration.pdf',
      topics: ['biojet', 'dwc', 'moo'],
      resultTag: 'Lower Utility & CO₂ Footprint',
      resume: 'Combines pinch-style energy integration with thermally coupled distillation intensification for hydrotreating Jatropha curcas oil into renewable aviation fuel. Demonstrates substantial cuts in external utility demand and CO₂ emissions while keeping total annual cost and minimum biojet selling price competitive.',
      highlights: [
        'Simultaneously optimizes heat-exchanger network integration and intensified separation for Jatropha biojet production.',
        'Achieves significant reductions in heating/cooling utilities and process CO₂ emissions without materially raising fuel price.',
        '55+ Google Scholar citations in Elsevier Chemical Engineering and Processing: Process Intensification.'
      ],
      structured: {
        problem: 'Renewable biojet fuel hydrotreating processes face high utility demand and tight economic margins that hinder industrial adoption.',
        methodology: 'Simultaneous heat-exchanger energy integration and thermally coupled process intensification modeled rigorously for Jatropha curcas oil hydrotreating.',
        contribution: 'Demonstrated meaningful cuts in external utility demand and CO₂ emissions while keeping total annual cost and minimum selling price competitive.',
        relevance: 'Shows how systems-level process integration can improve sustainability metrics without undermining industrial economics.',
        myContribution: 'Co-authored research.'
      },
      bib: { type: 'article', key: 'gutierrezantonio2016simultaneous', journal: 'Chemical Engineering and Processing: Process Intensification', volume: '110', pages: '134--145', publisher: 'Elsevier' }
    },
    {
      id: 'gutierrez-antonio-2015-biojet-thermally-coupled',
      title: 'Intensification of a Hydrotreating Process to Produce Biojet Fuel Using Thermally Coupled Distillation',
      authors: ['C. Gutiérrez-Antonio', 'F.I. Gómez-Castro', 'S. Hernández', 'A. Briones-Ramírez'],
      year: 2015,
      type: 'journal',
      venue: 'Chemical Engineering and Processing: Process Intensification',
      volIssuePages: '88, 29–36',
      doi: '10.1016/j.cep.2014.12.002',
      citations: 49,
      pdf: './papers/gutierrez-antonio-2015-hydrotreating-biojet-thermally-coupled.pdf',
      topics: ['biojet', 'dwc', 'moo'],
      resultTag: 'Turbine + Coupled Biojet Train',
      resume: 'Redesigns the downstream purification section of a vegetable-oil hydrotreating biojet process using thermally coupled distillation sequences paired with an expansion turbine on the reactor effluent. Cuts separation energy demand and recovers mechanical energy from high-pressure process streams.',
      highlights: [
        'Integrates thermally coupled distillation with effluent energy recovery via a turbine in renewable jet-fuel refining.',
        'Uses multi-objective genetic optimization to balance equipment investment against separation energy savings.',
        '49+ Google Scholar citations in Elsevier Chemical Engineering and Processing: Process Intensification.'
      ],
      bib: { type: 'article', key: 'gutierrezantonio2015intensification', journal: 'Chemical Engineering and Processing: Process Intensification', volume: '88', pages: '29--36', publisher: 'Elsevier' }
    },
    {
      id: 'gomez-castro-2011-multiple-dwc',
      title: 'Optimal Designs of Multiple Dividing Wall Columns',
      authors: ['F.I. Gómez-Castro', 'M.A. Rodríguez-Ángeles', 'J.G. Segovia-Hernández', 'C. Gutiérrez-Antonio', 'A. Briones-Ramírez'],
      year: 2011,
      type: 'journal',
      venue: 'Chemical Engineering & Technology',
      volIssuePages: '34(12), 2051–2058',
      doi: '10.1002/ceat.201100176',
      citations: 48,
      pdf: './papers/gomez-castro-2011-optimal-designs-multiple-dwc.pdf',
      topics: ['dwc', 'moo', 'ga-ai'],
      resultTag: 'Multi-Wall Column TAC Analysis',
      resume: 'Extends stochastic multi-objective optimization to complex dividing-wall columns incorporating two internal dividing walls for four-product separations. Compares single-wall and double-wall topologies on total annual cost and energy demand, showing operating utility savings dominate overall economic differences.',
      highlights: [
        'Handles the highly nonlinear, multi-variable design space of double-dividing-wall columns using constrained MOGA.',
        'Demonstrates that TAC advantages between one-wall and two-wall shells are primarily driven by reboiler energy reductions.',
        '48+ Google Scholar citations in Wiley Chemical Engineering & Technology.'
      ],
      bib: { type: 'article', key: 'gomezcastro2011multiple', journal: 'Chemical Engineering \\& Technology', volume: '34', number: '12', pages: '2051--2058', publisher: 'Wiley-VCH' }
    },
    {
      id: 'miranda-galindo-2011-reactive-pareto',
      title: 'Reactive Thermally Coupled Distillation Sequences: Pareto Front',
      authors: ['E.Y. Miranda-Galindo', 'J.G. Segovia-Hernández', 'S. Hernández', 'C. Gutiérrez-Antonio', 'A. Briones-Ramírez'],
      year: 2011,
      type: 'journal',
      venue: 'Industrial & Engineering Chemistry Research',
      volIssuePages: '50(2), 926–938',
      doi: '10.1021/ie101290t',
      citations: 42,
      pdf: './papers/miranda-galindo-2011-reactive-thermally-coupled-distillation.pdf',
      topics: ['dwc', 'moo', 'biojet', 'ga-ai'],
      resultTag: 'Reactive Coupling Pareto Front',
      resume: 'Applies the constrained multi-objective genetic algorithm to reactive distillation sequences with thermal coupling, using fatty-ester (biodiesel) synthesis as the industrial benchmark. Maps the complete Pareto front between energy consumption and equipment structure across non-convex reactive-separation equilibria.',
      highlights: [
        'Combines chemical reaction and thermally coupled distillation inside a single stochastic multi-objective optimization loop.',
        'Reveals trade-off families rather than single point designs for biodiesel/fatty-ester reactive sequences.',
        '42+ Google Scholar citations in ACS Industrial & Engineering Chemistry Research (Q1).'
      ],
      bib: { type: 'article', key: 'mirandagalindo2011reactive', journal: 'Industrial \\& Engineering Chemistry Research', volume: '50', number: '2', pages: '926--938', publisher: 'American Chemical Society' }
    },
    {
      id: 'gutierrez-antonio-2011-petlyuk-opt',
      title: 'Optimization of Petlyuk Sequences Using a Multi-Objective Genetic Algorithm with Constraints',
      authors: ['C. Gutiérrez-Antonio', 'A. Briones-Ramírez', 'A. Jiménez-Gutiérrez'],
      year: 2011,
      type: 'journal',
      venue: 'Computers & Chemical Engineering',
      volIssuePages: '35(2), 236–244',
      doi: '10.1016/j.compchemeng.2010.10.007',
      citations: 36,
      pdf: './papers/gutierrez-antonio-2011-petlyuk-optimization-genetic-algorithm.pdf',
      topics: ['dwc', 'moo', 'ga-ai'],
      resultTag: '4-Stage Interconnect Discovery',
      resume: 'Benchmarks the constrained multi-objective genetic algorithm on rigorous Petlyuk column models against previously published optimal structures. Uncovers lower-energy topologies featuring four distinct interconnecting stages rather than the conventional two-stage pairing.',
      highlights: [
        'Discovers more energy-efficient Petlyuk designs than prior literature benchmarks across multiple case studies.',
        'Demonstrates that decoupling vapor and liquid interconnection stages unlocks lower reboiler heat duties.',
        '36+ Google Scholar citations in Elsevier Computers & Chemical Engineering (Q1).'
      ],
      bib: { type: 'article', key: 'gutierrezantonio2011petlyuk', journal: 'Computers \\& Chemical Engineering', volume: '35', number: '2', pages: '236--244', publisher: 'Elsevier' }
    },
    {
      id: 'gutierrez-antonio-2015-ann-surrogate',
      title: 'Multiobjective Stochastic Optimization of Dividing-Wall Distillation Columns Using a Surrogate Model Based on Neural Networks',
      authors: ['C. Gutiérrez-Antonio', 'A. Briones-Ramírez'],
      year: 2015,
      type: 'journal',
      venue: 'Chemical and Biochemical Engineering Quarterly',
      volIssuePages: '29(4), 491–504',
      doi: '10.15255/CABEQ.2014.2132',
      citations: 34,
      pdf: './papers/gutierrez-antonio-2015-surrogate-neural-network-dwc-optimization.pdf',
      topics: ['ga-ai', 'dwc', 'moo'],
      resultTag: 'ANN Surrogate Acceleration',
      resume: 'Integrates artificial neural networks as fast surrogate models inside a multi-objective genetic algorithm optimizing dividing-wall distillation columns. Substantially reduces both the wall-clock runtime and the number of expensive Aspen Plus evaluations needed to converge to the Pareto front.',
      highlights: [
        'Replaces costly full-simulator objective and constraint evaluations with trained ANN surrogates inside the GA loop.',
        'Delivers major reductions in computational time while preserving Pareto-front accuracy on rigorous DWC designs.',
        '34+ Google Scholar citations — a direct applied-AI precursor to later industrial machine-learning systems.'
      ],
      structured: {
        problem: 'Evaluating every candidate dividing-wall column design inside a full physical simulator makes multi-objective genetic algorithms computationally expensive.',
        methodology: 'Artificial neural networks (ANNs) trained as surrogate models embedded within a constrained multi-objective stochastic optimization loop.',
        contribution: 'Significantly reduced wall-clock runtime and simulator calls needed to converge to the Pareto front without sacrificing design fidelity.',
        relevance: 'Illustrates practical surrogate-assisted optimization—a direct conceptual bridge between classical process modeling and modern applied machine learning.',
        myContribution: 'Co-authored research (two-author study with Claudia Gutiérrez-Antonio).'
      },
      bib: { type: 'article', key: 'gutierrezantonio2015surrogate', journal: 'Chemical and Biochemical Engineering Quarterly', volume: '29', number: '4', pages: '491--504', publisher: 'Croatian Society of Chemical Engineers' }
    },
    {
      id: 'gutierrez-antonio-2013-escape23-biojet',
      title: 'Simulation and Optimization of a Biojet Fuel Production Process',
      authors: ['C. Gutiérrez-Antonio', 'F.I. Gómez-Castro', 'J.G. Segovia-Hernández', 'A. Briones-Ramírez'],
      year: 2013,
      type: 'proceedings',
      venue: 'Computer Aided Chemical Engineering (Proc. ESCAPE 23)',
      volIssuePages: '32, 13–18',
      doi: '10.1016/B978-0-444-63234-0.50003-8',
      citations: 30,
      pdf: './papers/gutierrez-antonio-2013-biojet-fuel-simulation-optimization.pdf',
      topics: ['biojet', 'moo', 'ga-ai'],
      resultTag: 'Castor Oil → Biojet Route',
      resume: 'Models and optimizes a UOP-style hydrotreating route converting renewable vegetable oil (castor oil) into biojet fuel and green diesel fractions. Applies the group’s multi-objective genetic algorithm to the purification train, confirming high renewable aviation fuel conversion yields.',
      highlights: [
        'Rigorous Aspen Plus simulation of hydrotreating and fractionation for renewable aviation fuel.',
        'Optimizes separation train design to reduce downstream energy consumption and emissions.',
        '30+ OpenAlex citations in Elsevier Computer Aided Chemical Engineering (ESCAPE 23).'
      ],
      bib: { type: 'incollection', key: 'gutierrezantonio2013simulation', booktitle: 'Computer Aided Chemical Engineering (23rd European Symposium on Computer Aided Process Engineering)', volume: '32', pages: '13--18', publisher: 'Elsevier' }
    },
    {
      id: 'gomez-castro-2013-dynamic-mdwc',
      title: 'Analysis of Dynamic Performance for Multiple Dividing Wall Distillation Columns',
      authors: ['F.I. Gómez-Castro', 'M.A. Rodríguez-Ángeles', 'J.G. Segovia-Hernández', 'S. Hernández', 'C. Gutiérrez-Antonio', 'A. Briones-Ramírez', 'A.R. Uribe-Ramírez'],
      year: 2013,
      type: 'journal',
      venue: 'Industrial & Engineering Chemistry Research',
      volIssuePages: '52(29), 9922–9929',
      doi: '10.1021/ie401332p',
      citations: 22,
      pdf: './papers/gomez-castro-2013-dynamic-performance-multiple-dwc.pdf',
      topics: ['dwc', 'control'],
      resultTag: 'Open-Loop Dynamic Control',
      resume: 'Evaluates whether the extra energy savings of double-dividing-wall columns come at the expense of harder operational control. Compares open-loop dynamic responses and closed-loop control metrics of single- and double-wall columns under feed composition and flow disturbances.',
      highlights: [
        'Dynamic simulation study comparing single-wall vs. multiple-dividing-wall distillation columns.',
        'Assesses disturbance rejection and control-loop pairing to validate real-world operability.',
        '22+ OpenAlex citations in ACS Industrial & Engineering Chemistry Research (Q1).'
      ],
      bib: { type: 'article', key: 'gomezcastro2013dynamic', journal: 'Industrial \\& Engineering Chemistry Research', volume: '52', number: '29', pages: '9922--9929', publisher: 'American Chemical Society' }
    },
    {
      id: 'acosta-solorzano-2016-controllability-biojet',
      title: 'Controllability Analysis of Distillation Sequences for the Separation of Bio-Jet Fuel and Green Diesel Fractions',
      authors: ['A.D.A. Acosta-Solórzano', 'O. Guerrero-Farfán', 'C. Ramírez-Márquez', 'F.I. Gómez-Castro', 'J.G. Segovia-Hernández', 'S. Hernández', 'C. Gutiérrez-Antonio', 'A. Briones-Ramírez'],
      year: 2016,
      type: 'journal',
      venue: 'Chemical Engineering & Technology',
      volIssuePages: '39(12), 2273–2283',
      doi: '10.1002/ceat.201600095',
      citations: 18,
      pdf: './papers/acosta-solorzano-2016-controllability-biojet-green-diesel.pdf',
      topics: ['biojet', 'control', 'dwc'],
      resultTag: 'Biojet Train Controllability',
      resume: 'Compares the dynamic controllability of conventional and thermally coupled distillation trains separating renewable bio-jet fuel and green diesel cuts. Identifies which intensified configurations remain easiest to operate reliably under setpoint changes and feed disturbances, rather than optimizing capital cost alone.',
      highlights: [
        'Bridges steady-state biojet process intensification with dynamic operability and control analysis.',
        'Benchmarks conventional vs. thermally coupled fractionation trains using closed-loop control indices.',
        '18+ OpenAlex citations in Wiley Chemical Engineering & Technology.'
      ],
      bib: { type: 'article', key: 'acostasolorzano2016controllability', journal: 'Chemical Engineering \\& Technology', volume: '39', number: '12', pages: '2273--2283', publisher: 'Wiley-VCH' }
    },
    {
      id: 'gomez-castro-2015-biodiesel-noncatalytic',
      title: 'Analysis of Alternative Non-Catalytic Processes for the Production of Biodiesel Fuel',
      authors: ['F.I. Gómez-Castro', 'J.G. Segovia-Hernández', 'S. Hernández', 'V. Rico-Ramírez', 'C. Gutiérrez-Antonio', 'A. Briones-Ramírez', 'I. Cano-Rodríguez', 'Z. Gamiño-Arroyo'],
      year: 2015,
      type: 'journal',
      venue: 'Clean Technologies and Environmental Policy',
      volIssuePages: '17(7), 2041–2054',
      doi: '10.1007/s10098-015-0933-x',
      citations: 16,
      pdf: './papers/gomez-castro-2015-non-catalytic-biodiesel-processes.pdf',
      topics: ['biojet', 'moo'],
      resultTag: '4 Supercritical Routes Compared',
      resume: 'Performs a rigorous multi-criteria comparison of four non-catalytic supercritical biodiesel production pathways evaluating energy consumption, total annual cost, and CO₂ emissions. Shows that no single route dominates every sustainability and economic metric simultaneously, clarifying key process trade-offs.',
      highlights: [
        'Evaluates four catalyst-free supercritical biodiesel architectures under unified rigorous simulation.',
        'Quantifies trade-offs across energy intensity, economic cost, and greenhouse-gas footprint.',
        '16+ OpenAlex citations in Springer Clean Technologies and Environmental Policy.'
      ],
      bib: { type: 'article', key: 'gomezcastro2015noncatalytic', journal: 'Clean Technologies and Environmental Policy', volume: '17', number: '7', pages: '2041--2054', publisher: 'Springer' }
    },
    {
      id: 'bravo-2013-hybrid-crystallization',
      title: 'Hybrid Distillation/Melt Crystallization Process Using Thermally Coupled Arrangements: Optimization with Evolutive Algorithms',
      authors: ['C. Bravo-Bravo', 'J.G. Segovia-Hernández', 'S. Hernández', 'F.I. Gómez-Castro', 'C. Gutiérrez-Antonio', 'A. Briones-Ramírez'],
      year: 2013,
      type: 'journal',
      venue: 'Chemical Engineering and Processing: Process Intensification',
      volIssuePages: '67, 25–38',
      doi: '10.1016/j.cep.2012.11.007',
      citations: 16,
      pdf: './papers/bravo-bravo-2013-hybrid-distillation-melt-crystallization.pdf',
      topics: ['dwc', 'moo', 'ga-ai', 'control'],
      resultTag: 'Hybrid Distillation + Crystallization',
      resume: 'Optimizes a hybrid separation flowsheet combining thermally coupled distillation with melt crystallization for close-boiling isomer mixtures. Evolutionary multi-objective optimization confirms that thermally coupled hybrid configurations outperform standalone routes on energy savings, capital cost, and controllability.',
      highlights: [
        'Targets difficult close-boiling and azeotropic separations where conventional distillation is prohibitively energy-intensive.',
        'Jointly evaluates energy demand, capital investment, and dynamic control properties of hybrid flowsheets.',
        '16+ OpenAlex citations in Elsevier Chemical Engineering and Processing: Process Intensification.'
      ],
      bib: { type: 'article', key: 'bravo2013hybrid', journal: 'Chemical Engineering and Processing: Process Intensification', volume: '67', pages: '25--38', publisher: 'Elsevier' }
    },
    {
      id: 'gutierrez-antonio-2010-escape20-ann',
      title: 'Speeding Up a Multiobjective Genetic Algorithm with Constraints through Artificial Neuronal Networks',
      authors: ['C. Gutiérrez-Antonio', 'A. Briones-Ramírez'],
      year: 2010,
      type: 'proceedings',
      venue: 'Computer Aided Chemical Engineering (Proc. ESCAPE 20)',
      volIssuePages: '28, 391–396',
      doi: '10.1016/S1570-7946(10)28066-5',
      citations: 15,
      pdf: './papers/gutierrez-antonio-2010-speeding-up-ga-neural-networks.pdf',
      topics: ['ga-ai', 'moo'],
      resultTag: 'First ANN-Accelerated MOGA',
      resume: 'Introduces artificial neural networks as fast surrogate approximations inside the group’s constrained multi-objective genetic algorithm. Demonstrates substantial reductions in both simulator evaluations and wall-clock time required to approximate the true Pareto front.',
      highlights: [
        'Earliest work in the collection combining artificial neural networks with evolutionary process optimization.',
        'Cuts expensive Aspen Plus simulator calls while retaining Pareto-front fidelity.',
        '15+ OpenAlex citations in Elsevier Computer Aided Chemical Engineering (ESCAPE 20).'
      ],
      bib: { type: 'incollection', key: 'gutierrezantonio2010speeding', booktitle: 'Computer Aided Chemical Engineering (20th European Symposium on Computer Aided Process Engineering)', volume: '28', pages: '391--396', publisher: 'Elsevier' }
    },
    {
      id: 'briones-ramirez-2018-matlab-aspen',
      title: 'Multiobjective Optimization of Chemical Processes with Complete Models using MATLAB and Aspen Plus',
      authors: ['A. Briones-Ramírez', 'C. Gutiérrez-Antonio'],
      leadAuthor: true,
      year: 2018,
      type: 'journal',
      venue: 'Computación y Sistemas',
      volIssuePages: '22(4), 1157–1170',
      doi: '10.13053/CyS-22-4-3087',
      citations: 13,
      pdf: './papers/briones-ramirez-2018-multiobjective-matlab-aspen-plus.pdf',
      topics: ['moo', 'ga-ai'],
      resultTag: 'Lead Author · MATLAB–Aspen Bridge',
      resume: 'Presents a reusable, step-by-step software integration architecture connecting MATLAB’s multi-objective optimization toolkits directly to full Aspen Plus process models via COM automation. Eliminates the accuracy loss of reduced-order shortcuts and includes automated generation of optimal .bkp simulation files.',
      highlights: [
        'Lead-authored by Abel Briones-Ramírez; serves as a practical engineering blueprint for simulator-in-the-loop optimization.',
        'Enables any MATLAB multi-objective algorithm to drive rigorous, complete chemical process models directly.',
        'Automates export of optimal Pareto designs into ready-to-run Aspen Plus backup (.bkp) files; 13+ OpenAlex citations.'
      ],
      structured: {
        problem: 'Many optimization studies rely on simplified reduced-order models because connecting general-purpose numerical toolkits to full industrial process simulators is error-prone.',
        methodology: 'Software integration architecture linking MATLAB optimization algorithms directly to complete Aspen Plus models via COM automation with automated .bkp export.',
        contribution: 'Provided a reusable, step-by-step engineering procedure enabling any MATLAB multi-objective solver to drive rigorous process simulations directly.',
        relevance: 'Demonstrates clean software-engineering integration between computational optimization libraries and industrial simulation platforms.',
        myContribution: 'Lead author (first author, two-author paper with Claudia Gutiérrez-Antonio).'
      },
      bib: { type: 'article', key: 'brionesramirez2018multiobjective', journal: 'Computaci\\\'on y Sistemas', volume: '22', number: '4', pages: '1157--1170', publisher: 'Instituto Polit\\\'ecnico Nacional' }
    },
    {
      id: 'gomez-castro-2015-nonequilibrium',
      title: 'Design of Non-Equilibrium Stage Separation Systems by a Stochastic Optimization Approach for a Class of Mixtures',
      authors: ['F.I. Gómez-Castro', 'J.G. Segovia-Hernández', 'S. Hernández', 'C. Gutiérrez-Antonio', 'Z. Gamiño-Arroyo', 'A. Briones-Ramírez'],
      year: 2015,
      type: 'journal',
      venue: 'Chemical Engineering and Processing: Process Intensification',
      volIssuePages: '88, 58–69',
      doi: '10.1016/j.cep.2014.11.001',
      citations: 10,
      pdf: './papers/gomez-castro-2015-non-equilibrium-stochastic-optimization.pdf',
      topics: ['moo', 'ga-ai', 'dwc'],
      resultTag: 'Rate-Based Non-Equilibrium Design',
      resume: 'Investigates whether optimizing distillation sequences directly against rigorous rate-based (non-equilibrium) tray models changes optimal column designs compared to standard equilibrium-plus-efficiency shortcuts. Clarifies the operating regimes where full mass- and heat-transfer modeling materially shifts design decisions.',
      highlights: [
        'Couples stochastic optimization directly with rate-based non-equilibrium column simulations.',
        'Quantifies structural and energy deviations between equilibrium-stage shortcuts and rigorous rate-based optima.',
        '10+ OpenAlex citations in Elsevier Chemical Engineering and Processing: Process Intensification.'
      ],
      bib: { type: 'article', key: 'gomezcastro2015nonequilibrium', journal: 'Chemical Engineering and Processing: Process Intensification', volume: '88', pages: '58--69', publisher: 'Elsevier' }
    },
    {
      id: 'cortez-gonzalez-2012-less-than-n-1',
      title: 'Optimal Design of Distillation Systems with Less than N−1 Columns for a Class of Four-Component Mixtures',
      authors: ['J. Cortez-Gonzalez', 'J.G. Segovia-Hernández', 'S. Hernández', 'C. Gutiérrez-Antonio', 'A. Briones-Ramírez', 'B.-G. Rong'],
      year: 2012,
      type: 'journal',
      venue: 'Chemical Engineering Research and Design',
      volIssuePages: '90(10), 1425–1447',
      doi: '10.1016/j.cherd.2012.02.004',
      citations: 9,
      pdf: './papers/cortez-gonzalez2012.pdf',
      topics: ['dwc', 'moo', 'ga-ai'],
      resultTag: '< N−1 Column Intensification',
      resume: 'Explores intensified quaternary distillation architectures using fewer than the conventional N−1 columns via thermal coupling and stochastic multi-objective optimization. Reveals systematic design tendencies governed by mixture volatility and feed composition rather than a single universal heuristic.',
      highlights: [
        'International collaboration with Prof. Ben-Guang Rong (University of Southern Denmark) on compact column synthesis.',
        'Maps Pareto-optimal flowsheets achieving four-product purity in fewer than three shells.',
        '9+ OpenAlex citations in IChemE / Elsevier Chemical Engineering Research and Design.'
      ],
      bib: { type: 'article', key: 'cortezgonzalez2012optimal', journal: 'Chemical Engineering Research and Design', volume: '90', number: '10', pages: '1425--1447', publisher: 'Elsevier' }
    },
    {
      id: 'briones-ramirez-2009-escape19-azeotropic',
      title: 'Dividing Wall Distillation Columns for Separation of Azeotropic Mixtures: Feasibility Procedure and Rigorous Optimization',
      authors: ['A. Briones-Ramírez', 'C. Gutiérrez-Antonio'],
      leadAuthor: true,
      year: 2009,
      type: 'proceedings',
      venue: 'Computer Aided Chemical Engineering (Proc. ESCAPE 19)',
      volIssuePages: '26, 555–560',
      doi: '10.1016/S1570-7946(09)70093-8',
      citations: 8,
      pdf: './papers/briones-ramirez-2009-dwc-azeotropic-mixtures-feasibility.pdf',
      topics: ['dwc', 'moo', 'ga-ai'],
      resultTag: 'Lead Author · Up to 50% Energy Savings',
      resume: 'Introduces a material-balance feasibility screening procedure followed by rigorous constrained GA optimization for applying dividing-wall columns to industrially important azeotropic mixtures. Reports up to 50% energy savings relative to conventional azeotropic distillation sequences.',
      highlights: [
        'Lead-authored by Abel Briones-Ramírez; establishes a structured feasibility check for azeotropic DWC separation.',
        'Demonstrates up to 50% energy savings on industrial azeotropic mixtures with a single distillation boundary.',
        '8+ OpenAlex citations in Elsevier Computer Aided Chemical Engineering (ESCAPE 19).'
      ],
      structured: {
        problem: 'Applying dividing-wall columns to non-ideal azeotropic mixtures is constrained by distillation boundaries that can render naive designs thermodynamically infeasible.',
        methodology: 'Material-balance feasibility screening coupled with constrained multi-objective genetic algorithm optimization in Aspen Plus.',
        contribution: 'Established a structured feasibility-plus-optimization workflow reporting up to 50% energy savings on industrial azeotropic mixtures.',
        relevance: 'Shows the value of embedding hard physical feasibility constraints ahead of stochastic search.',
        myContribution: 'Lead author (first author, two-author proceedings paper with Claudia Gutiérrez-Antonio).'
      },
      bib: { type: 'incollection', key: 'brionesramirez2009azeotropic', booktitle: 'Computer Aided Chemical Engineering (19th European Symposium on Computer Aided Process Engineering)', volume: '26', pages: '555--560', publisher: 'Elsevier' }
    },
    {
      id: 'gutierrez-antonio-2014-nrtl-parameters',
      title: 'Effect of Using Adjusted Parameters, Local and Global Optimums, for Phase Equilibrium Prediction on the Synthesis of Azeotropic Distillation Columns',
      authors: ['C. Gutiérrez-Antonio', 'A. Ojeda-Gasca', 'A. Bonilla-Petriciolet', 'J.G. Segovia-Hernández', 'A. Briones-Ramírez'],
      year: 2014,
      type: 'journal',
      venue: 'Industrial & Engineering Chemistry Research',
      volIssuePages: '53(4), 1489–1502',
      doi: '10.1021/ie4019885',
      citations: 6,
      pdf: './papers/gutierrez-antonio-2014-adjusted-parameters-azeotropic-columns.pdf',
      topics: ['moo', 'ga-ai', 'control'],
      resultTag: 'Global vs. Local NRTL Fitting',
      resume: 'Demonstrates that the numerical optimization strategy used to regress thermodynamic phase-equilibrium parameters (local vs. global fitting of NRTL) measurably alters the synthesized azeotropic distillation column design, capital cost, and dynamic performance. Argues for global parameter estimation prior to process synthesis.',
      highlights: [
        'Propagates thermodynamic parameter-fitting uncertainty directly into rigorous azeotropic column optimization.',
        'Compares energy requirements, capital costs, and dynamic controllability under locally vs. globally fitted NRTL models.',
        'Published in ACS Industrial & Engineering Chemistry Research (Q1).'
      ],
      bib: { type: 'article', key: 'gutierrezantonio2014adjusted', journal: 'Industrial \\& Engineering Chemistry Research', volume: '53', number: '4', pages: '1489--1502', publisher: 'American Chemical Society' }
    },
    {
      id: 'miranda-galindo-2009-escape19-biodiesel',
      title: 'Design of Reactive Distillation with Thermal Coupling for the Synthesis of Biodiesel Using Genetic Algorithms',
      authors: ['E.Y. Miranda-Galindo', 'J.G. Segovia-Hernández', 'S. Hernández', 'G. de la Rosa-Álvarez', 'C. Gutiérrez-Antonio', 'A. Briones-Ramírez'],
      year: 2009,
      type: 'proceedings',
      venue: 'Computer Aided Chemical Engineering (Proc. ESCAPE 19)',
      volIssuePages: '26, 549–554',
      doi: '10.1016/S1570-7946(09)70092-6',
      citations: 6,
      pdf: './papers/miranda-galindo-2009-conf-escape19-biodiesel-reactive-distillation.pdf',
      topics: ['biojet', 'dwc', 'ga-ai'],
      resultTag: 'Reactive Biodiesel Side-Rectifier',
      resume: 'Applies constrained genetic algorithms to design reactive distillation sequences with a thermally coupled side rectifier for biodiesel synthesis. Shows substantial reductions in energy consumption and corresponding CO₂ emissions compared with conventional reactive distillation.',
      highlights: [
        'Couples reactive distillation with side-rectifier thermal integration for fatty-ester biodiesel production.',
        'Conference precursor to the 2011 I&ECR reactive Pareto-front journal study.',
        '6+ OpenAlex citations in Elsevier Computer Aided Chemical Engineering (ESCAPE 19).'
      ],
      bib: { type: 'incollection', key: 'mirandagalindo2009biodiesel', booktitle: 'Computer Aided Chemical Engineering (19th European Symposium on Computer Aided Process Engineering)', volume: '26', pages: '549--554', publisher: 'Elsevier' }
    },
    {
      id: 'gomez-castro-2016-escape26-maps',
      title: 'Energy Consumption Maps for Quaternary Distillation Sequences',
      authors: ['F.I. Gómez-Castro', 'N.E. Ramírez-Vallejo', 'J.G. Segovia-Hernández', 'C. Gutiérrez-Antonio', 'M. Errico', 'A. Briones-Ramírez', 'J. Sánchez-Aguilar'],
      year: 2016,
      type: 'proceedings',
      venue: 'Computer Aided Chemical Engineering (Proc. ESCAPE 26)',
      volIssuePages: '38, 121–126',
      doi: '10.1016/B978-0-444-63428-3.50025-4',
      citations: 4,
      pdf: './papers/gomez-castro-2016-energy-consumption-maps-quaternary.pdf',
      topics: ['dwc', 'moo'],
      resultTag: 'Quaternary Energy Maps',
      resume: 'Constructs visual energy-consumption maps across five quaternary feed compositions and four distillation topologies, extending a screening methodology previously limited to ternary mixtures. Helps process engineers rapidly select energy-efficient sequences before full rigorous optimization.',
      highlights: [
        'Evaluates four column configurations across five representative four-component feed regions.',
        'International collaboration with Prof. Massimiliano Errico (University of Southern Denmark).',
        'Published in Elsevier Computer Aided Chemical Engineering (ESCAPE 26).'
      ],
      bib: { type: 'incollection', key: 'gomezcastro2016maps', booktitle: 'Computer Aided Chemical Engineering (26th European Symposium on Computer Aided Process Engineering)', volume: '38', pages: '121--126', publisher: 'Elsevier' }
    },
    {
      id: 'gutierrez-antonio-2012-escape22-trains',
      title: 'Optimal Design and Control of Trains of Dividing Wall Columns for the Separation of Petrochemical Mixtures',
      authors: ['C. Gutiérrez-Antonio', 'S. Hernández', 'F.I. Gómez-Castro', 'J.G. Segovia-Hernández', 'J.O. Campos-Vargas', 'A. Briones-Ramírez'],
      year: 2012,
      type: 'proceedings',
      venue: 'Computer Aided Chemical Engineering (Proc. ESCAPE 22)',
      volIssuePages: '30, 742–746',
      doi: '10.1016/B978-0-444-59520-1.50007-5',
      citations: 3,
      pdf: './papers/gutierrez-antonio-2012-optimal-design-control-trains-dwc.pdf',
      topics: ['dwc', 'control', 'moo'],
      resultTag: 'Petrochemical DWC Trains',
      resume: 'Scales dividing-wall column design and controllability analysis from single ideal-mixture units to multi-column trains processing realistic petrochemical refinery cuts. Evaluates both energy efficiency and dynamic control behavior across complete separation trains.',
      highlights: [
        'Extends DWC optimization beyond single ternary columns to industrial petrochemical fractionation trains.',
        'Jointly assesses energy consumption, CO₂ emissions, and closed-loop control properties.',
        'Published in Elsevier Computer Aided Chemical Engineering (ESCAPE 22).'
      ],
      bib: { type: 'incollection', key: 'gutierrezantonio2012trains', booktitle: 'Computer Aided Chemical Engineering (22nd European Symposium on Computer Aided Process Engineering)', volume: '30', pages: '742--746', publisher: 'Elsevier' }
    },
    {
      id: 'rodriguez-angeles-2014-escape24-trays',
      title: 'Mechanical Design and Hydraulic Analysis of Sieve Trays in Dividing Wall Columns',
      authors: ['M.A. Rodríguez-Ángeles', 'F.I. Gómez-Castro', 'J.G. Segovia-Hernández', 'C. Gutiérrez-Antonio', 'A. Briones-Ramírez'],
      year: 2014,
      type: 'proceedings',
      venue: 'Computer Aided Chemical Engineering (Proc. ESCAPE 24)',
      volIssuePages: '33, 1375–1380',
      doi: '10.1016/B978-0-444-63455-9.50064-7',
      citations: 2,
      pdf: './papers/rodriguez-angeles-2014-mechanical-design-sieve-trays-dwc.pdf',
      topics: ['dwc'],
      resultTag: 'CFD Sieve-Tray Hydraulics',
      resume: 'Moves beyond steady-state process simulation into mechanical hardware design by performing computational fluid dynamics (CFD) hydraulic analysis of sieve trays inside a dividing-wall column. Checks for flooding, weeping, and vapor-liquid maldistribution that 1D process models cannot detect.',
      highlights: [
        'Bridges process intensification optimization with detailed mechanical tray sizing and CFD validation.',
        'Inspects two-phase hydraulic regimes across partitioned DWC sections to ensure buildable equipment.',
        'Published in Elsevier Computer Aided Chemical Engineering (ESCAPE 24).'
      ],
      bib: { type: 'incollection', key: 'rodriguezangeles2014mechanical', booktitle: 'Computer Aided Chemical Engineering (24th European Symposium on Computer Aided Process Engineering)', volume: '33', pages: '1375--1380', publisher: 'Elsevier' }
    },
    {
      id: 'cortez-gonzalez-2012-escape22-quaternary',
      title: 'Genetic Algorithms in the Design of Configurations for Distillation of Quaternary Mixtures Using Less than N−1 Columns with Thermally Coupling',
      authors: ['J. Cortez-Gonzalez', 'J.G. Segovia-Hernández', 'S. Hernández', 'C. Gutiérrez-Antonio', 'A. Briones-Ramírez', 'B.-G. Rong'],
      year: 2012,
      type: 'proceedings',
      venue: 'Computer Aided Chemical Engineering (Proc. ESCAPE 22)',
      volIssuePages: '30, 677–681',
      doi: '10.1016/B978-0-444-59519-5.50136-2',
      citations: 1,
      pdf: './papers/cortez-gonzalez-2012-conf-precursor-escape22.pdf',
      topics: ['dwc', 'ga-ai', 'moo'],
      resultTag: 'ESCAPE 22 · Compact Quaternary',
      resume: 'Applies multi-objective genetic algorithms to synthesize thermally coupled quaternary distillation configurations using fewer than N−1 columns. Captures the full Pareto optimal front where traditional gradient-based solvers stall in local minima.',
      highlights: [
        'Demonstrates global Pareto-front capture on highly nonlinear thermally coupled quaternary schemes.',
        'ESCAPE 22 proceedings companion to the 2012 ChERD journal article.',
        'Published in Elsevier Computer Aided Chemical Engineering (ESCAPE 22).'
      ],
      bib: { type: 'incollection', key: 'cortezgonzalez2012escape22', booktitle: 'Computer Aided Chemical Engineering (22nd European Symposium on Computer Aided Process Engineering)', volume: '30', pages: '677--681', publisher: 'Elsevier' }
    },
    {
      id: 'vazquez-castillo-2009-escape19-quaternary',
      title: 'Design and Control of New Intensified Distillation Systems for Quaternary Separations Using Genetic Algorithms',
      authors: ['J.A. Vázquez-Castillo', 'J.A. Venegas-Sánchez', 'J.G. Segovia-Hernández', 'S. Hernández', 'H. Hernández', 'C. Gutiérrez-Antonio', 'A. Briones-Ramírez'],
      year: 2009,
      type: 'proceedings',
      venue: 'Computer Aided Chemical Engineering (Proc. ESCAPE 19)',
      volIssuePages: '26, 543–548',
      doi: '10.1016/S1570-7946(09)70091-4',
      citations: 1,
      pdf: './papers/vazquez-castillo-2009-conf-escape19-quaternary-ga.pdf',
      topics: ['dwc', 'ga-ai', 'control'],
      resultTag: 'ESCAPE 19 · Quaternary Control',
      resume: 'Conference-length study introducing genetic-algorithm optimization and controllability screening for intensified four-component distillation sequences. Evaluates energy reduction potential and open-loop dynamic metrics across representative hydrocarbon feeds.',
      highlights: [
        'Applies the GA–Aspen Plus workflow to intensified quaternary separation topologies.',
        'ESCAPE 19 proceedings precursor to the 104-citation Computers & Chemical Engineering journal article.',
        'Published in Elsevier Computer Aided Chemical Engineering (ESCAPE 19).'
      ],
      bib: { type: 'incollection', key: 'vazquezcastillo2009escape19', booktitle: 'Computer Aided Chemical Engineering (19th European Symposium on Computer Aided Process Engineering)', volume: '26', pages: '543--548', publisher: 'Elsevier' }
    },
    {
      id: 'briones-ramirez-2019-degruyter-azeotropic',
      title: 'Optimal Design Methodology for Homogeneous Azeotropic Distillation Columns',
      authors: ['A. Briones-Ramírez', 'C. Gutiérrez-Antonio'],
      leadAuthor: true,
      year: 2019,
      type: 'chapter',
      venue: 'Process Intensification (De Gruyter, Chapter 5)',
      volIssuePages: 'pp. 125–143',
      doi: '10.1515/9783110596120-005',
      citations: 0,
      pdf: null,
      topics: ['dwc', 'moo', 'ga-ai'],
      resultTag: 'Lead Author · De Gruyter Chapter',
      resume: 'Synthesizes a comprehensive, end-to-end design methodology for homogeneous azeotropic distillation columns in De Gruyter’s Process Intensification volume. Consolidates feasibility screening, thermodynamic model selection, and constrained multi-objective genetic optimization into a unified engineering workflow.',
      highlights: [
        'Lead-authored book chapter in De Gruyter’s edited reference volume Process Intensification (2019).',
        'Integrates thermodynamic feasibility analysis with rigorous multi-objective optimization for azeotropic separations.',
        'Indexed via CrossRef and OpenAlex (publisher edition; no local preprint stored).'
      ],
      structured: {
        problem: 'Designing homogeneous azeotropic distillation columns requires coordinating thermodynamic phase-equilibrium modeling, feasibility screening, and rigorous optimization.',
        methodology: 'End-to-end engineering methodology unifying thermodynamic boundary analysis with constrained multi-objective genetic-algorithm synthesis.',
        contribution: 'Consolidated a decade of azeotropic column synthesis principles into a structured reference chapter in De Gruyter’s Process Intensification volume.',
        relevance: 'Serves as a systematic engineering reference for translating complex separation theory into repeatable design workflows.',
        myContribution: 'Lead author (first author, two-author book chapter with Claudia Gutiérrez-Antonio).'
      },
      bib: { type: 'incollection', key: 'brionesramirez2019azeotropic', booktitle: 'Process Intensification', pages: '125--143', publisher: 'De Gruyter' }
    },
    {
      id: 'bravo-2012-ijee-hybrid',
      title: 'Optimization with Genetic Algorithms of a Hybrid Distillation/Melt Crystallization Process',
      authors: ['C. Bravo-Bravo', 'J.G. Segovia-Hernández', 'S. Hernández', 'F.I. Gómez-Castro', 'C. Gutiérrez-Antonio', 'A. Briones-Ramírez'],
      year: 2012,
      type: 'journal',
      venue: 'International Journal of Evolution Equations (Nova Science Publishers)',
      volIssuePages: '8(2/3), 91–110 · ISSN 1549-2907',
      doi: null,
      citations: 0,
      pdf: './papers/bravo-bravo-2012-ijee-hybrid-distillation-crystallization-ga.pdf',
      topics: ['dwc', 'ga-ai', 'moo'],
      resultTag: 'Hybrid Process GA Study',
      resume: 'Applies multi-objective genetic algorithms to optimize a hybrid distillation and melt-crystallization separation train for close-boiling mixtures. Confirms that coupling thermal integration with melt crystallization yields economically viable energy and capital savings.',
      highlights: [
        'Explores evolutionary optimization of hybrid distillation/crystallization flowsheets for close-boiling isomers.',
        'Published in Nova Science Publishers’ International Journal of Evolution Equations (ISSN 1549-2907).',
        'No DOI assigned by publisher; verified directly from the archived journal PDF.'
      ],
      bib: { type: 'article', key: 'bravo2012ijee', journal: 'International Journal of Evolution Equations', volume: '8', number: '2/3', pages: '91--110', publisher: 'Nova Science Publishers' }
    },
    {
      id: 'gomez-castro-2011-escape21-gp',
      title: 'Optimal Design of Multiple Dividing Wall Columns Based on Genetic Programming',
      authors: ['F.I. Gómez-Castro', 'M.A. Rodríguez-Ángeles', 'J.G. Segovia-Hernández', 'C. Gutiérrez-Antonio', 'A. Briones-Ramírez'],
      year: 2011,
      type: 'proceedings',
      venue: 'Computer Aided Chemical Engineering (Proc. ESCAPE 21)',
      volIssuePages: '29, 176–180',
      doi: '10.1016/B978-0-444-53711-9.50036-5',
      citations: 0,
      pdf: null,
      topics: ['dwc', 'ga-ai', 'moo'],
      resultTag: 'ESCAPE 21 · Genetic Programming',
      resume: 'Applies evolutionary optimization to synthesize multiple-dividing-wall column configurations for complex multi-component separations. Companion proceedings study to the 2011 Chemical Engineering & Technology journal paper on multi-wall DWC design.',
      highlights: [
        'Evaluates evolutionary search strategies for multi-partitioned dividing-wall distillation shells.',
        'Published in Elsevier Computer Aided Chemical Engineering (ESCAPE 21).',
        'Indexed via CrossRef and OpenAlex (publisher edition; no local preprint stored).'
      ],
      bib: { type: 'incollection', key: 'gomezcastro2011escape21', booktitle: 'Computer Aided Chemical Engineering (21st European Symposium on Computer Aided Process Engineering)', volume: '29', pages: '176--180', publisher: 'Elsevier' }
    }
  ];

  const TOPIC_LABELS = {
    all: 'All Topics',
    dwc: 'Dividing Wall Columns',
    moo: 'Multi-Objective Optimization',
    biojet: 'Biojet Fuel & Energy',
    'ga-ai': 'Genetic Algorithms & AI',
    control: 'Control Systems'
  };

  const TYPE_LABELS = {
    journal: 'Journal Article',
    proceedings: 'Proceedings',
    chapter: 'Book Chapter'
  };

  const COAUTHORS = [
    { key: 'Gutiérrez-Antonio', name: 'Claudia Gutiérrez-Antonio', inst: 'UAQ / CIATEQ' },
    { key: 'Segovia-Hernández', name: 'Juan Gabriel Segovia-Hernández', inst: 'Universidad de Guanajuato' },
    { key: 'Gómez-Castro', name: 'Fernando Israel Gómez-Castro', inst: 'Universidad de Guanajuato' },
    { key: 'Hernández', name: 'Salvador Hernández', inst: 'Universidad de Guanajuato' },
    { key: 'Bonilla-Petriciolet', name: 'Adrián Bonilla-Petriciolet', inst: 'IT Aguascalientes' },
    { key: 'Bravo-Bravo', name: 'Cristofer Bravo-Bravo', inst: 'Universidad de Guanajuato' },
    { key: 'Jiménez-Gutiérrez', name: 'Arturo Jiménez-Gutiérrez', inst: 'IT Celaya' }
  ];

  const state = {
    query: '',
    topic: 'all',
    type: 'all',
    year: 'all',
    sort: 'citations',
    coauthor: ''
  };

  // DOM elements
  const repoDisclosure = document.getElementById('repo-disclosure');
  const listEl = document.getElementById('pub-list');
  const searchEl = document.getElementById('pub-search');
  const clearSearchEl = document.getElementById('search-clear');
  const typeEl = document.getElementById('pub-type');
  const yearEl = document.getElementById('pub-year');
  const sortEl = document.getElementById('pub-sort');
  const countEl = document.getElementById('pub-count');
  const activeFiltersEl = document.getElementById('active-filters');
  const resetAllBtn = document.getElementById('reset-all-btn');
  const topicPills = document.querySelectorAll('.topic-pill');
  const coauthorPillsWrap = document.getElementById('coauthor-pills');
  const toggleAllBtn = document.getElementById('toggle-all-btn');
  const bibDialog = document.getElementById('bibtex-dialog');
  const bibTitleEl = document.getElementById('bibtex-title');
  const bibSubEl = document.getElementById('bibtex-sub');
  const bibCodeEl = document.getElementById('bibtex-code');

  if (!listEl) return;

  function syncDatasetCounts() {
    const total = PUBLICATIONS.length;
    const journals = PUBLICATIONS.filter(p => p.type === 'journal').length;
    const proceedings = PUBLICATIONS.filter(p => p.type === 'proceedings').length;
    const chapters = PUBLICATIONS.filter(p => p.type === 'chapter').length;
    const pdfs = PUBLICATIONS.filter(p => Boolean(p.pdf)).length;
    const breakdown = `${journals} journal · ${proceedings} proceedings · ${chapters} chapter`;

    document.querySelectorAll('[data-metric="total"]').forEach(el => { el.textContent = String(total); });
    document.querySelectorAll('[data-metric="pdfs"]').forEach(el => { el.textContent = String(pdfs); });
    document.querySelectorAll('[data-metric="breakdown"]').forEach(el => { el.textContent = breakdown; });

    if (typeEl) {
      const labels = {
        all: `All Types (${total})`,
        journal: `Journal Articles (${journals})`,
        proceedings: `Conference Proceedings (${proceedings})`,
        chapter: `Book Chapters (${chapters})`,
        pdf: `Downloadable PDF (${pdfs})`
      };
      Array.from(typeEl.options).forEach(opt => {
        if (labels[opt.value]) opt.textContent = labels[opt.value];
      });
    }
  }

  function openRepository(opts) {
    const { focusSearch = false, scroll = true } = opts || {};
    if (repoDisclosure) repoDisclosure.open = true;
    if (scroll) {
      document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' });
    }
    if (focusSearch && searchEl) {
      requestAnimationFrame(() => searchEl.focus({ preventScroll: true }));
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function formatBibTeX(pub) {
    const b = pub.bib;
    const authorStr = pub.authors.join(' and ');
    const lines = [`@${b.type}{${b.key},`];
    lines.push(`  author    = {${authorStr}},`);
    lines.push(`  title     = {${pub.title}},`);
    if (b.journal) lines.push(`  journal   = {${b.journal}},`);
    if (b.booktitle) lines.push(`  booktitle = {${b.booktitle}},`);
    lines.push(`  year      = {${pub.year}},`);
    if (b.volume) lines.push(`  volume    = {${b.volume}},`);
    if (b.number) lines.push(`  number    = {${b.number}},`);
    if (b.pages) lines.push(`  pages     = {${b.pages}},`);
    if (b.publisher) lines.push(`  publisher = {${b.publisher}},`);
    if (pub.doi) lines.push(`  doi       = {${pub.doi}},`);
    lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, '');
    lines.push('}');
    return lines.join('\n');
  }

  function populateYears() {
    const years = Array.from(new Set(PUBLICATIONS.map(p => p.year))).sort((a, b) => b - a);
    years.forEach(y => {
      const opt = document.createElement('option');
      opt.value = String(y);
      opt.textContent = String(y);
      yearEl.appendChild(opt);
    });
  }

  function renderCoauthorPills() {
    if (!coauthorPillsWrap) return;
    coauthorPillsWrap.innerHTML = COAUTHORS.map(ca => {
      const count = PUBLICATIONS.filter(p =>
        p.authors.some(a => a.includes(ca.key) && !(ca.key === 'Hernández' && a.includes('Segovia-Hernández')))
      ).length;
      const pressed = state.coauthor === ca.key ? 'true' : 'false';
      return `<button type="button" class="coauthor-pill" data-coauthor="${escapeHtml(ca.key)}" aria-pressed="${pressed}">
        <span>${escapeHtml(ca.name)}</span>
        <span class="co-inst">${escapeHtml(ca.inst)}</span>
        <span class="co-count">${count}</span>
      </button>`;
    }).join('');
  }

  function matchesCoauthor(pub, key) {
    if (!key) return true;
    return pub.authors.some(a => {
      if (key === 'Hernández') {
        return a === 'S. Hernández' || a.includes('S. Hernández');
      }
      return a.includes(key);
    });
  }

  function getFiltered() {
    const q = state.query.trim().toLowerCase();
    return PUBLICATIONS.filter(pub => {
      if (state.topic !== 'all' && !pub.topics.includes(state.topic)) return false;
      if (state.type === 'journal' && pub.type !== 'journal') return false;
      if (state.type === 'proceedings' && pub.type !== 'proceedings') return false;
      if (state.type === 'chapter' && pub.type !== 'chapter') return false;
      if (state.type === 'pdf' && !pub.pdf) return false;
      if (state.year !== 'all' && String(pub.year) !== state.year) return false;
      if (state.coauthor && !matchesCoauthor(pub, state.coauthor)) return false;
      if (q) {
        const structuredText = pub.structured
          ? Object.values(pub.structured).join(' ')
          : '';
        const hay = [
          pub.title,
          pub.authors.join(' '),
          pub.venue,
          String(pub.year),
          pub.doi || '',
          pub.resultTag,
          pub.resume,
          pub.highlights.join(' '),
          structuredText
        ].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    }).sort((a, b) => {
      if (state.sort === 'citations') {
        if (b.citations !== a.citations) return b.citations - a.citations;
        return b.year - a.year;
      }
      if (b.year !== a.year) return b.year - a.year;
      return b.citations - a.citations;
    });
  }

  function renderActiveChips() {
    if (!activeFiltersEl) return;
    const chips = [];
    if (state.topic !== 'all') {
      chips.push({ label: `Topic: ${TOPIC_LABELS[state.topic]}`, clear: () => setTopic('all') });
    }
    if (state.type !== 'all') {
      const labels = { journal: 'Journal Articles', proceedings: 'Conference Proceedings', chapter: 'Book Chapters', pdf: 'PDF Available' };
      chips.push({ label: `Filter: ${labels[state.type]}`, clear: () => { state.type = 'all'; typeEl.value = 'all'; render(); } });
    }
    if (state.year !== 'all') {
      chips.push({ label: `Year: ${state.year}`, clear: () => { state.year = 'all'; yearEl.value = 'all'; render(); } });
    }
    if (state.coauthor) {
      const ca = COAUTHORS.find(c => c.key === state.coauthor);
      chips.push({ label: `Co-Author: ${ca ? ca.name : state.coauthor}`, clear: () => { state.coauthor = ''; renderCoauthorPills(); render(); } });
    }
    if (state.query.trim()) {
      chips.push({ label: `Search: "${state.query.trim()}"`, clear: () => { state.query = ''; searchEl.value = ''; clearSearchEl.hidden = true; render(); } });
    }
    activeFiltersEl.innerHTML = '';
    chips.forEach(c => {
      const span = document.createElement('span');
      span.className = 'active-chip';
      span.innerHTML = `${escapeHtml(c.label)} <button type="button" aria-label="Remove ${escapeHtml(c.label)}">×</button>`;
      span.querySelector('button').addEventListener('click', c.clear);
      activeFiltersEl.appendChild(span);
    });
    if (resetAllBtn) resetAllBtn.hidden = chips.length === 0;
  }

  function render() {
    const items = getFiltered();
    countEl.textContent = `Showing ${items.length} of ${PUBLICATIONS.length} indexed publications`;
    renderActiveChips();

    if (items.length === 0) {
      listEl.innerHTML = `
        <div class="empty-state">
          <h3>No publications match the current filters</h3>
          <p>Try clearing a topic pill, co-author filter, or search term to view the full repository.</p>
          <button type="button" class="btn btn-primary" id="reset-empty-btn">Reset All Filters</button>
        </div>`;
      const resetBtn = document.getElementById('reset-empty-btn');
      if (resetBtn) resetBtn.addEventListener('click', resetAll);
      syncToggleAllState();
      return;
    }

    listEl.innerHTML = items.map(pub => {
      const authorsHtml = pub.authors.map(a =>
        a.includes('Briones-Ramírez') ? `<strong>${escapeHtml(a)}</strong>` : escapeHtml(a)
      ).join(', ');

      const citationsBadge = pub.citations > 0
        ? `<span class="stat-pill citations" title="Verified citations (Google Scholar / OpenAlex)">★ ${pub.citations}+ citations</span>`
        : `<span class="stat-pill" title="Indexed publication">Indexed</span>`;

      const doiPill = pub.doi
        ? `<span class="stat-pill doi-pill">DOI: ${escapeHtml(pub.doi)}</span>`
        : `<span class="stat-pill">ISSN 1549-2907</span>`;

      const doiAction = pub.doi
        ? `<a class="action-btn doi-btn" href="https://doi.org/${encodeURIComponent(pub.doi).replace(/%2F/g, '/')}" target="_blank" rel="noopener">Publisher / DOI ↗</a>`
        : `<a class="action-btn doi-btn" href="https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}" target="_blank" rel="noopener">Google Scholar ↗</a>`;

      const pdfAction = pub.pdf
        ? `<a class="action-btn pdf-btn" href="${escapeHtml(pub.pdf)}" target="_blank" rel="noopener" title="Author's accepted manuscript / personal research copy">Download Preprint / PDF ⬇</a>`
        : '';

      const topicChips = pub.topics.map(t => `<span class="chip">${escapeHtml(TOPIC_LABELS[t])}</span>`).join('');
      const highlightsHtml = pub.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('');
      const structuredHtml = pub.structured ? `
        <dl class="pub-structured">
          <div class="pub-structured-row"><dt>Research Problem</dt><dd>${escapeHtml(pub.structured.problem)}</dd></div>
          <div class="pub-structured-row"><dt>Methodology</dt><dd>${escapeHtml(pub.structured.methodology)}</dd></div>
          <div class="pub-structured-row"><dt>Research Contribution</dt><dd>${escapeHtml(pub.structured.contribution)}</dd></div>
          <div class="pub-structured-row"><dt>Practical Relevance</dt><dd>${escapeHtml(pub.structured.relevance)}</dd></div>
          <div class="pub-structured-row"><dt>My Contribution</dt><dd>${escapeHtml(pub.structured.myContribution)}</dd></div>
        </dl>` : '';

      return `
        <article class="pub-card" data-id="${escapeHtml(pub.id)}">
          <div class="pub-card-top">
            <span class="pub-year-badge">${pub.year}</span>
            <span class="pub-type-badge">${escapeHtml(TYPE_LABELS[pub.type])}</span>
            ${pub.leadAuthor ? '<span class="pub-lead-badge">Lead Author</span>' : ''}
          </div>
          <h3 class="pub-title">${escapeHtml(pub.title)}</h3>
          <p class="pub-authors">${authorsHtml}</p>
          <p class="pub-venue"><em>${escapeHtml(pub.venue)}</em>${pub.volIssuePages ? ' · ' + escapeHtml(pub.volIssuePages) : ''}</p>
          <div class="pub-stats-strip">
            ${citationsBadge}
            <span class="stat-pill result-tag">${escapeHtml(pub.resultTag)}</span>
            ${doiPill}
          </div>
          <details class="pub-details">
            <summary>${pub.structured ? 'Research Breakdown &amp; Executive Summary' : 'Executive Summary &amp; Technical Highlights'}</summary>
            <div class="pub-resume-body">
              ${structuredHtml}
              <p class="pub-resume-text">${escapeHtml(pub.resume)}</p>
              <ul class="pub-highlights">${highlightsHtml}</ul>
              <div class="pub-topic-tags">${topicChips}</div>
            </div>
          </details>
          <div class="pub-actions">
            ${doiAction}
            ${pdfAction}
            <button type="button" class="action-btn cite-btn" data-cite-id="${escapeHtml(pub.id)}">Cite (BibTeX)</button>
            ${pub.pdf ? '<span class="pdf-note">Author’s accepted manuscript / personal research copy</span>' : ''}
          </div>
        </article>`;
    }).join('');

    syncToggleAllState();
  }

  function setTopic(topic) {
    state.topic = topic;
    topicPills.forEach(btn => {
      const active = btn.getAttribute('data-topic') === topic;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    render();
  }

  function resetAll() {
    state.query = '';
    state.topic = 'all';
    state.type = 'all';
    state.year = 'all';
    state.coauthor = '';
    searchEl.value = '';
    clearSearchEl.hidden = true;
    typeEl.value = 'all';
    yearEl.value = 'all';
    renderCoauthorPills();
    setTopic('all');
  }

  // Event listeners for filters (auto-expand publication list on interaction)
  searchEl.addEventListener('input', () => {
    state.query = searchEl.value;
    clearSearchEl.hidden = !state.query;
    if (state.query.trim() && repoDisclosure) repoDisclosure.open = true;
    render();
  });

  clearSearchEl.addEventListener('click', () => {
    state.query = '';
    searchEl.value = '';
    clearSearchEl.hidden = true;
    searchEl.focus();
    render();
  });

  typeEl.addEventListener('change', () => {
    state.type = typeEl.value;
    if (repoDisclosure) repoDisclosure.open = true;
    render();
  });

  yearEl.addEventListener('change', () => {
    state.year = yearEl.value;
    if (repoDisclosure) repoDisclosure.open = true;
    render();
  });

  sortEl.addEventListener('change', () => {
    state.sort = sortEl.value;
    if (repoDisclosure) repoDisclosure.open = true;
    render();
  });

  topicPills.forEach(btn => {
    btn.addEventListener('click', () => {
      if (repoDisclosure) repoDisclosure.open = true;
      setTopic(btn.getAttribute('data-topic'));
    });
  });

  if (resetAllBtn) {
    resetAllBtn.addEventListener('click', resetAll);
  }

  // Hero / Jump-bar actions that open the expandable repository on demand
  document.querySelectorAll('[data-action="open-repo"]').forEach(el => {
    el.addEventListener('click', () => {
      openRepository({ focusSearch: false, scroll: true });
    });
  });

  document.querySelectorAll('[data-action="open-search"]').forEach(el => {
    el.addEventListener('click', () => {
      openRepository({ focusSearch: true, scroll: true });
    });
  });

  // Level 2 Research Contribution theme buttons filter publications & expand repository
  document.querySelectorAll('[data-filter-topic]').forEach(btn => {
    btn.addEventListener('click', () => {
      setTopic(btn.getAttribute('data-filter-topic'));
      openRepository({ focusSearch: false, scroll: true });
    });
  });

  // Interactive Co-Author pills filter publications, expand repository & jump
  if (coauthorPillsWrap) {
    coauthorPillsWrap.addEventListener('click', e => {
      const btn = e.target.closest('.coauthor-pill');
      if (!btn) return;
      const key = btn.getAttribute('data-coauthor');
      state.coauthor = state.coauthor === key ? '' : key;
      renderCoauthorPills();
      render();
      if (state.coauthor) {
        openRepository({ focusSearch: false, scroll: true });
      }
    });
  }

  // Expand All / Collapse All via Invoker Commands + fallback (modern-web-guidance: accordion)
  function runToggleAll(button, container) {
    const expand = button.getAttribute('aria-expanded') !== 'true';
    if (expand && repoDisclosure) repoDisclosure.open = true;
    for (const details of container.querySelectorAll('details.pub-details')) {
      details.open = expand;
    }
    syncToggleAllState();
  }

  function syncToggleAllState() {
    if (!toggleAllBtn) return;
    const items = listEl.querySelectorAll('details.pub-details');
    const allOpen = items.length > 0 && Array.prototype.every.call(items, d => d.open);
    toggleAllBtn.setAttribute('aria-expanded', allOpen ? 'true' : 'false');
  }

  document.addEventListener('toggle', event => {
    if (event.target.matches('#pub-list details.pub-details')) {
      syncToggleAllState();
    }
  }, { capture: true });

  // BibTeX modal open handler
  listEl.addEventListener('click', e => {
    const citeBtn = e.target.closest('.cite-btn');
    if (!citeBtn || !bibDialog) return;
    const pub = PUBLICATIONS.find(p => p.id === citeBtn.getAttribute('data-cite-id'));
    if (!pub) return;
    bibTitleEl.textContent = pub.title;
    bibSubEl.textContent = `${pub.venue} (${pub.year})${pub.doi ? ' · DOI: ' + pub.doi : ''}`;
    bibCodeEl.textContent = formatBibTeX(pub);
    bibDialog.showModal();
  });

  if (bibDialog) {
    // Reset returnValue on close (modern-web-guidance: dialog)
    bibDialog.addEventListener('close', () => {
      bibDialog.returnValue = '';
    });

    // Light-dismiss fallback for browsers without closedby (modern-web-guidance: dialog / light-dismiss-a-dialog)
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const outside = (e, dialog) => {
        const r = dialog.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };
      let pressedOutside = false;
      bibDialog.addEventListener('pointerdown', e => { pressedOutside = outside(e, bibDialog); });
      bibDialog.addEventListener('pointerup', e => { if (pressedOutside && outside(e, bibDialog)) bibDialog.close(); });
    }
  }

  // Copy button logic with Invoker Commands + fallback + VoiceOver dedup (modern-web-guidance: copy-button)
  const copyTimers = new WeakMap();
  let lastCopyMessage = '';

  function reportCopy(button, ok) {
    const tip = button.nextElementSibling;
    if (!tip) return;
    clearTimeout(copyTimers.get(button));
    button.removeAttribute('data-copied');
    button.removeAttribute('data-failed');
    let message = ok ? 'Copied BibTeX' : 'Copy failed';
    if (message === lastCopyMessage) message += '\u00A0';
    lastCopyMessage = message;
    tip.textContent = '';
    void button.offsetWidth;
    button.setAttribute(ok ? 'data-copied' : 'data-failed', '');
    requestAnimationFrame(() => { tip.textContent = message; });
    copyTimers.set(button, setTimeout(() => {
      button.removeAttribute('data-copied');
      button.removeAttribute('data-failed');
      tip.textContent = '';
    }, 2200));
  }

  async function copyTarget(button, target) {
    const text = target.matches('input, textarea') ? target.value : target.innerText.trim();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      reportCopy(button, true);
    } catch {
      reportCopy(button, false);
    }
  }

  // Register only one path (native CommandEvent vs click fallback) so commands never fire twice
  if ('CommandEvent' in window) {
    document.addEventListener('command', event => {
      if (event.command === '--copy') {
        copyTarget(event.source, event.target);
      } else if (event.command === '--toggle-all') {
        runToggleAll(event.source, event.target);
      }
    }, true);
  } else {
    document.addEventListener('click', event => {
      const btn = event.target.closest('button[command]');
      if (!btn) return;
      const cmd = btn.getAttribute('command');
      const target = document.getElementById(btn.getAttribute('commandfor'));
      if (!target) return;
      if (cmd === '--copy') copyTarget(btn, target);
      if (cmd === '--toggle-all') runToggleAll(btn, target);
    });
  }

  function applyUrlState() {
    const params = new URLSearchParams(window.location.search);
    const rawQuery = params.get('search');
    const safeQuery = rawQuery ? rawQuery.trim().slice(0, 160) : '';
    const hasPubHash = window.location.hash === '#publications';

    if (safeQuery) {
      state.query = safeQuery;
      searchEl.value = safeQuery;
      clearSearchEl.hidden = false;
      render();
      openRepository({ focusSearch: false, scroll: true });
    } else if (hasPubHash) {
      openRepository({ focusSearch: false, scroll: false });
    }
  }

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#publications') {
      openRepository({ focusSearch: false, scroll: false });
    }
  });

  // Initialize
  syncDatasetCounts();
  populateYears();
  renderCoauthorPills();
  render();
  applyUrlState();
})();
