import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  CreditCard,
  BarChart3,
  Smartphone,
  Check,
  Star,
  ChevronRight,
  Lock,
  RefreshCw,
  TrendingUp,
  Users,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ─── Navbar ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-bold text-primary-foreground text-sm">N</span>
            </div>
            <span className="font-bold text-xl tracking-tight">NeoBank</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Fonctionnalités</a>
            <a href="#how" className="hover:text-foreground transition-colors">Comment ça marche</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Tarifs</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Avis clients</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
              Se connecter
            </Link>
            <Link href="/login" className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Ouvrir un compte
            </Link>
          </div>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative">
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-8">
            <Zap className="w-3 h-3" />
            La banque nouvelle génération est arrivée
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
          >
            La banque qui vous{" "}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              comprend vraiment
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            NeoBank réinvente la relation bancaire. Sans frais cachés, sans paperasse,
            sans attente. Votre argent, sous contrôle, en temps réel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/login"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/25 group"
            >
              Ouvrir mon compte gratuitement
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#how"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-3.5"
            >
              Voir comment ça marche
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Aucun frais de tenue de compte
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              IBAN français
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Carte Visa incluse
            </div>
          </motion.div>
        </div>

        {/* Dashboard preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto mt-20 relative"
        >
          <div className="rounded-2xl border border-white/10 bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/50">
            {/* Browser-like top bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-black/20">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 ml-4 h-6 rounded-md bg-white/5 max-w-xs text-xs text-muted-foreground flex items-center px-3">
                app.neobank.fr
              </div>
            </div>
            {/* Mock dashboard content */}
            <div className="flex h-64 md:h-80">
              {/* Sidebar */}
              <div className="w-48 border-r border-white/5 bg-sidebar/30 p-4 hidden md:block">
                <div className="space-y-1 mt-4">
                  {["Dashboard", "Transactions", "Virement", "Épargne", "Cartes"].map((item, i) => (
                    <div key={item} className={`px-3 py-2 rounded-lg text-xs flex items-center gap-2 ${i === 0 ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              {/* Main content */}
              <div className="flex-1 p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Solde total</div>
                    <div className="text-3xl font-bold">4 847,32 €</div>
                    <div className="text-xs text-green-400 mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +1 240,50 € ce mois
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {["Envoyer", "Recharger", "Plus"].map((btn) => (
                      <div key={btn} className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs text-muted-foreground">
                        {btn}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Dépenses ce mois", value: "892 €", color: "text-red-400" },
                    { label: "Revenus ce mois", value: "4 050 €", color: "text-green-400" },
                    { label: "Épargne totale", value: "10 050 €", color: "text-blue-400" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/3 rounded-xl p-3 border border-white/5">
                      <div className="text-[10px] text-muted-foreground mb-1">{stat.label}</div>
                      <div className={`text-sm font-semibold ${stat.color}`}>{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none rounded-2xl" />
        </motion.div>
      </section>

      {/* ─── Stats ─── */}
      <section className="py-16 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2M+", label: "Clients actifs" },
              { value: "98%", label: "Satisfaction client" },
              { value: "30s", label: "Ouverture de compte" },
              { value: "0€", label: "Frais mensuels" },
            ].map((stat) => (
              <motion.div key={stat.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="text-primary text-sm font-medium mb-3">Fonctionnalités</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Tout ce dont vous avez besoin</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Une suite complète d'outils financiers conçue pour simplifier votre quotidien.</p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: CreditCard,
                title: "Carte Visa Premium",
                desc: "Payez partout dans le monde sans frais de change. Carte virtuelle disponible instantanément.",
                color: "text-blue-400",
                bg: "bg-blue-500/10 border-blue-500/20",
              },
              {
                icon: BarChart3,
                title: "Analyses & budget",
                desc: "Visualisez vos dépenses par catégorie, suivez votre budget et recevez des alertes intelligentes.",
                color: "text-purple-400",
                bg: "bg-purple-500/10 border-purple-500/20",
              },
              {
                icon: Zap,
                title: "Virements instantanés",
                desc: "Envoyez de l'argent en quelques secondes vers n'importe quel compte SEPA, 24h/24.",
                color: "text-yellow-400",
                bg: "bg-yellow-500/10 border-yellow-500/20",
              },
              {
                icon: Shield,
                title: "Sécurité maximale",
                desc: "Authentification biométrique, freezing de carte en un clic, notifications en temps réel.",
                color: "text-green-400",
                bg: "bg-green-500/10 border-green-500/20",
              },
              {
                icon: Globe,
                title: "Espaces d'épargne",
                desc: "Créez des poches dédiées pour chacun de vos projets. Définissez vos objectifs et suivez leur évolution.",
                color: "text-cyan-400",
                bg: "bg-cyan-500/10 border-cyan-500/20",
              },
              {
                icon: Smartphone,
                title: "App mobile native",
                desc: "Gérez votre argent n'importe où grâce à notre application iOS et Android primée.",
                color: "text-pink-400",
                bg: "bg-pink-500/10 border-pink-500/20",
              },
            ].map((f) => (
              <motion.div key={f.title} variants={fadeUp} className={`p-6 rounded-2xl border ${f.bg} group hover:scale-[1.02] transition-transform duration-300`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.bg}`}>
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── How it works ─── */}
      <section id="how" className="py-24 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="text-primary text-sm font-medium mb-3">Processus</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ouvert en 2 minutes</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Pas de paperasse, pas d'agence, pas d'attente.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            {[
              { step: "01", icon: Smartphone, title: "Créez votre compte", desc: "Téléchargez l'app et inscrivez-vous en saisissant votre email et numéro de téléphone." },
              { step: "02", icon: Lock, title: "Vérifiez votre identité", desc: "Prenez votre pièce d'identité en photo. Notre système vérifie votre identité en 60 secondes." },
              { step: "03", icon: CreditCard, title: "Utilisez votre carte", desc: "Votre IBAN est disponible immédiatement. Votre carte physique arrive en 5 jours ouvrés." },
            ].map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center relative">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-xs font-mono text-primary/60 mb-2">{step.step}</div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="text-primary text-sm font-medium mb-3">Tarifs</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple et transparent</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Aucun frais caché. Choisissez le plan qui vous correspond.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Standard",
                price: "0€",
                period: "/mois",
                desc: "Pour commencer",
                features: ["IBAN français", "Carte Visa", "Virements SEPA", "App mobile", "Notifications temps réel"],
                cta: "Commencer gratuitement",
                highlighted: false,
              },
              {
                name: "Premium",
                price: "9,99€",
                period: "/mois",
                desc: "Le plus populaire",
                features: ["Tout le plan Standard", "Retraits gratuits dans le monde", "Assurances voyage", "Épargne avec intérêts", "Support prioritaire 24/7"],
                cta: "Essayer 1 mois offert",
                highlighted: true,
              },
              {
                name: "Metal",
                price: "19,99€",
                period: "/mois",
                desc: "L'expérience ultime",
                features: ["Tout le plan Premium", "Carte Metal personnalisée", "Cashback 1% sur tous vos achats", "Conciergerie dédiée", "Assurances premium incluses"],
                cta: "Choisir Metal",
                highlighted: false,
              },
            ].map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border relative ${plan.highlighted ? "border-primary/50 bg-primary/5" : "border-white/10 bg-card/30"}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Recommandé
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-1">{plan.desc}</div>
                  <div className="text-2xl font-bold">{plan.name}</div>
                  <div className="flex items-end gap-1 mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground pb-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-green-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/login"
                  className={`block text-center py-2.5 rounded-xl text-sm font-medium transition-all ${plan.highlighted ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-white/10 hover:bg-white/5"}`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section id="testimonials" className="py-24 px-6 bg-white/2 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="text-primary text-sm font-medium mb-3">Avis clients</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ils nous font confiance</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Camille R.", role: "Designer indépendante", text: "Je gère mes revenus freelance et mes dépenses perso sur NeoBank. Les espaces d'épargne sont révolutionnaires.", stars: 5 },
              { name: "Thomas B.", role: "Développeur", text: "L'interface est incroyablement fluide. Aucune autre banque n'offre cette expérience. Je n'ai plus besoin de ma banque classique.", stars: 5 },
              { name: "Laure M.", role: "Consultante", text: "Les notifications en temps réel et le gel de carte instantané m'ont sauvé la mise lors d'une tentative de fraude. Merci NeoBank !", stars: 5 },
            ].map((t) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-white/10 bg-card/30">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Prêt à changer de banque ?</h2>
            <p className="text-muted-foreground mb-8 text-lg">Rejoignez 2 millions de clients qui ont déjà fait le choix de la liberté financière.</p>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-xl font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/30 group"
            >
              Ouvrir mon compte gratuitement
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                  <span className="font-bold text-primary-foreground text-xs">N</span>
                </div>
                <span className="font-bold tracking-tight">NeoBank</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">La banque en ligne haut de gamme qui simplifie votre vie financière.</p>
            </div>
            <div className="grid grid-cols-3 gap-8 text-sm">
              {[
                { title: "Produit", links: ["Fonctionnalités", "Tarifs", "Sécurité", "Application mobile"] },
                { title: "Entreprise", links: ["À propos", "Blog", "Presse", "Carrières"] },
                { title: "Support", links: ["Centre d'aide", "Contact", "Conditions", "Confidentialité"] },
              ].map((col) => (
                <div key={col.title}>
                  <div className="font-medium mb-3">{col.title}</div>
                  <ul className="space-y-2">
                    {col.links.map((l) => <li key={l}><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{l}</a></li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
            <span>© 2024 NeoBank. Tous droits réservés.</span>
            <span>Agréé par l'ACPR • Dépôts garantis jusqu'à 100 000€ par le FGDR</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
