export default function Home() {
  const useCases = [
    {
      title: "Cartographier les risques",
      text: "Identifiez les risques majeurs, émergents ou systémiques, reliez-les aux objectifs et hiérarchisez les expositions critiques pour la gouvernance.",
    },
    {
      title: "Cadrer une mission d’audit",
      text: "Préparez le périmètre, les questions d’audit, les critères d’appréciation, les tests prioritaires et les capacités à examiner.",
    },
    {
      title: "Analyser causes et capacités",
      text: "Reliez les constats, incidents ou contre-performances à leurs causes racines et aux déficits de capacités qui entretiennent durablement les risques.",
    },
    {
      title: "Auditer les risques de fraude",
      text: "Structurez les scénarios de fraude, les red flags, les facteurs de risque, les contrôles anti-fraude, les tests d’audit et les priorités de maîtrise.",
    },
    {
      title: "Produire des synthèses board-level",
      text: "Transformez les constats d’audit en messages clairs pour la direction générale, le comité d’audit ou le conseil.",
    },
    {
      title: "Automatiser la routine d’audit",
      text: "Accélérez le cadrage, la structuration, la documentation, la consolidation et le reporting pour laisser plus de place au jugement professionnel.",
    },
  ];
  const advancedFeatures = [
    {
      title: "Fonction conseil",
      text: "Structurez des notes de conseil, des options de transformation, des lectures de gouvernance et des recommandations d’amélioration sans vous substituer à la décision du management.",
    },
    {
      title: "Rapports périodiques",
      text: "Préparez des synthèses trimestrielles, semestrielles ou annuelles pour la direction, le comité d’audit ou le conseil, avec suivi des risques, recommandations ouvertes et priorités d’attention.",
    },
    {
      title: "Audit des risques de fraude",
      text: "Analysez les scénarios de fraude, les red flags, les vulnérabilités de contrôle, les facteurs de risque et les priorités de maîtrise dans une logique d’audit rigoureuse et défendable.",
    },
    {
      title: "Outils et matrices d’audit",
      text: "Générez des matrices objectifs-risques-contrôles, matrices de traçabilité, programmes de travail, tableaux de suivi et supports méthodologiques pour accélérer les missions.",
    },
    {
      title: "Suivi des recommandations",
      text: "Structurez le suivi des recommandations critiques, identifiez les retards, les actions à vérifier et les tendances récurrentes pour renforcer la redevabilité et la gouvernance.",
    },
    {
      title: "Automatisation des tâches d’audit",
      text: "Réduisez la charge de cadrage, structuration, documentation, consolidation et reporting afin de laisser plus de place au jugement professionnel et à l’investigation.",
    },
    {
      title: "Synthèses board-level",
      text: "Transformez les constats, risques et déficits de capacités en messages clairs, hiérarchisés et utiles pour les instances de gouvernance.",
    },
    {
      title: "Préparation au déploiement technique",
      text: "Analysez un dépôt GitHub, sa configuration et ses workflows CI/CD pour préparer un déploiement plus sûr, avec checklist, go/no-go et étapes manuelles si nécessaire.",
    },
  ];
  const capabilityItems = [
    "Gouvernance",
    "Pilotage",
    "Exécution",
    "Contrôle interne",
    "Données et information",
    "Apprentissage et adaptation",
  ];

  const valueItems = [
    {
      title: "Cartographier",
      text: "Identifier les risques majeurs et structurer une lecture claire des expositions critiques.",
    },
    {
      title: "Expliquer",
      text: "Relier les risques à leurs causes profondes, aux faiblesses de contrôle et aux déficits de capacités.",
    },
    {
      title: "Transformer",
      text: "Produire des recommandations hiérarchisées, actionnables et orientées gouvernance, résilience et performance.",
    },
  ];

  const differentiators = [
    "Audit fondé sur les risques enrichi par une lecture des capacités.",
    "Approche adaptée au niveau board et comité d’audit.",
    "Traitement conjoint de la fraude, de la gouvernance, de la transformation et de la performance.",
    "Accélération des travaux d’audit à faible valeur ajoutée.",
    "Livrables plus rapides, plus structurés et plus crédibles.",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <div>
            <p className="text-lg font-bold tracking-tight text-slate-950">
              MissionPro Audit
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Risk & Capacity Audit
            </p>
          </div>

          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#apropos" className="hover:text-slate-950">
              À propos
            </a>
            <a href="#cas-usage" className="hover:text-slate-950">
              Cas d’usage
            </a>
            <a href="#capacites" className="hover:text-slate-950">
              Capacités
            </a>
            <a href="#valeur" className="hover:text-slate-950">
              Valeur
            </a>
            <a href="#contact" className="hover:text-slate-950">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Demander une démo
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
              Plateforme intelligente d’audit interne fondé sur les risques
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              L’IA board-level de l’audit interne, des risques, de la fraude et
              des capacités
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              MissionPro Audit aide les dirigeants, auditeurs, inspections et
              comités d’audit à relier les objectifs, les risques, les causes,
              les capacités critiques, les contrôles et les priorités de
              transformation.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              La plateforme permet de cartographier les risques, cadrer les
              missions, analyser les vulnérabilités, auditer les risques de
              fraude, produire des synthèses board-level et automatiser une
              large part des travaux d’audit les plus répétitifs.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Demander une démonstration
              </a>
              <a
                href="#cas-usage"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Découvrir les cas d’usage
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Chaîne méthodologique
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                Objectifs → Risques → Causes
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                Capacités → Contrôles → Transformation
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                Gouvernance → Résilience → Valeur
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apropos" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              À propos
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Une approche d’audit plus stratégique que le simple contrôle
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              MissionPro Audit dépasse la lecture classique des risques en
              aidant à comprendre pourquoi ils persistent, quelles capacités
              organisationnelles sont insuffisantes et quelles transformations
              peuvent renforcer durablement la maîtrise, la performance et la
              création de valeur.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Cette approche permet de passer d’un audit descriptif à un audit
              explicatif, orienté causes profondes, vulnérabilités
              structurelles et priorités d’action.
            </p>
          </div>
        </div>
      </section>

      <section id="cas-usage" className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Cas d’usage
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
            Ce que MissionPro Audit permet de faire concrètement
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section id="fonctionnalites-avancees" className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Fonctionnalités avancées
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
            Fonctionnalités et cas d’usage avancés
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            Au-delà de la cartographie des risques et du cadrage des missions,
            MissionPro Audit peut assister les fonctions d’audit, d’inspection et
            de gouvernance sur des travaux plus avancés de conseil, de reporting,
            de structuration méthodologique et d’automatisation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advancedFeatures.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section id="capacites" className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Capacités critiques
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
            Une lecture structurée de la maturité organisationnelle
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            MissionPro Audit analyse les risques non seulement par les
            contrôles, mais aussi par les capacités qui rendent une organisation
            robuste, cohérente et durablement maîtrisée.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilityItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Analysez la maturité, les fragilités et les priorités de
                renforcement pour cette capacité clé.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="valeur" className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Valeur
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Moins de routine, plus d’architecture d’audit
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              MissionPro Audit automatise une large part des tâches de cadrage,
              structuration, consolidation et reporting afin de permettre aux
              auditeurs de se concentrer sur l’analyse, l’investigation, le
              jugement professionnel et la création de valeur.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {valueItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Différenciation
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
            Pourquoi MissionPro Audit se distingue
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {differentiators.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-sm leading-7 text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Échangeons sur votre dispositif d’audit, de risque et de
              transformation
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Que vous prépariez un plan d’audit, une cartographie des risques,
              une mission ciblée, un audit de fraude, une synthèse au comité
              d’audit ou une réflexion de transformation, MissionPro Audit peut
              vous aider à structurer une lecture plus claire, plus rigoureuse
              et plus stratégique.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:contact@missionpro-audit.com"
                className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Contacter MissionPro
              </a>
              <a
                href="#top"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Revenir en haut
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
