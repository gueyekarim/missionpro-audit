export default function Home() {
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
              Plateforme intelligente d’audit fondé sur les risques
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              L’IA board-level de l’audit interne, des risques et des capacités
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              MissionPro aide les dirigeants, auditeurs, inspections et comités
              d’audit à relier les objectifs, les risques, les causes, les
              capacités critiques et les actions de transformation.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Demander une démonstration
              </a>
              <a
                href="#valeur"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Découvrir la plateforme
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
                Performance → Résilience → Valeur
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
              Une approche plus stratégique que le simple contrôle
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              MissionPro dépasse la lecture classique des risques en aidant à
              comprendre pourquoi ils persistent, quelles capacités sont
              insuffisantes et quelles transformations peuvent créer une maîtrise
              plus durable et une meilleure performance.
            </p>
          </div>
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
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Gouvernance",
            "Pilotage",
            "Exécution",
            "Contrôle interne",
            "Données et information",
            "Apprentissage et adaptation",
          ].map((item) => (
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
              MissionPro automatise une large part des tâches de cadrage,
              structuration, consolidation et reporting afin de permettre aux
              auditeurs de se concentrer sur le jugement professionnel, l’analyse
              des causes racines et la création de valeur.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
              <h3 className="text-lg font-semibold">Cartographier</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Identifier les risques majeurs, émergents et systémiques.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
              <h3 className="text-lg font-semibold">Expliquer</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Relier les risques à leurs causes profondes et aux déficits de capacités.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
              <h3 className="text-lg font-semibold">Transformer</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Produire des recommandations hiérarchisées et actionnables.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Échangeons sur votre dispositif d’audit et de gestion des risques
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Que vous prépariez un plan d’audit, une cartographie des risques,
              une mission spécifique ou une réflexion de transformation,
              MissionPro peut vous aider à structurer une lecture plus claire,
              plus rigoureuse et plus stratégique.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:contact@missionpro-audit.com"
                className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Contacter MissionPro
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white"
              >
                Télécharger la présentation
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>© 2026 MissionPro Audit. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#apropos" className="hover:text-slate-900">
              À propos
            </a>
            <a href="#capacites" className="hover:text-slate-900">
              Capacités
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}