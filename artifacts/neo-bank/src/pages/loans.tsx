import { motion } from "framer-motion";
import { Link } from "wouter";
import { PublicNavbar, PublicFooter } from "@/components/layout/PublicLayout";
import {
  Home, Car, GraduationCap, Wrench, RefreshCw, Wallet,
  Building2, Briefcase, TrendingUp, Package, ArrowRight,
  CheckCircle, Clock, ShieldCheck, Calculator, ChevronRight,
  Stethoscope, Scale, Sprout, Store, Palette, FlaskConical,
  Truck, Utensils, Code2, HeartHandshake,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

/* ─── Particuliers ─── */
const particulierLoans = [
  {
    icon: Home,
    title: "Prêt immobilier",
    desc: "Achat de résidence principale, secondaire ou investissement locatif. Taux fixes ou variables à partir de 3,45 %.",
    tag: "Jusqu'à 30 ans",
    color: "blue",
  },
  {
    icon: Car,
    title: "Prêt automobile",
    desc: "Financement de voiture neuve ou d'occasion, véhicule électrique ou hybride. Réponse en ligne en 48 h.",
    tag: "De 6 mois à 7 ans",
    color: "purple",
  },
  {
    icon: Wrench,
    title: "Prêt travaux",
    desc: "Rénovation, extension, isolation, installation d'équipements. Profitez des aides éco-énergie cumulables.",
    tag: "Jusqu'à 75 000 €",
    color: "orange",
  },
  {
    icon: Wallet,
    title: "Prêt personnel",
    desc: "Financement de tout projet personnel sans justificatif d'utilisation. Déblocage des fonds sous 24 h.",
    tag: "De 1 000 à 75 000 €",
    color: "pink",
  },
  {
    icon: GraduationCap,
    title: "Prêt étudiant",
    desc: "Financez vos études, frais de scolarité et coût de la vie étudiante. Remboursement différé jusqu'à la fin des études.",
    tag: "Taux préférentiel",
    color: "cyan",
  },
  {
    icon: RefreshCw,
    title: "Rachat de crédits",
    desc: "Regroupez tous vos crédits en un seul pour réduire votre mensualité et simplifier votre gestion.",
    tag: "Jusqu'à -60 % de mensualité",
    color: "green",
  },
];

/* ─── Professionnels ─── */
const proProfiles = [
  { icon: Briefcase, label: "Auto-entrepreneur", desc: "Micro-entreprise" },
  { icon: Wrench, label: "Artisan", desc: "BTP, métiers du bâtiment, artisanat de service" },
  { icon: Store, label: "Commerçant", desc: "Commerce de détail et de gros" },
  { icon: Stethoscope, label: "Profession libérale médicale", desc: "Médecin, chirurgien, dentiste, kinésithérapeute, pharmacien, vétérinaire, sage-femme" },
  { icon: Scale, label: "Profession libérale juridique", desc: "Avocat, notaire, huissier, expert-comptable, commissaire aux comptes" },
  { icon: FlaskConical, label: "Profession libérale technique", desc: "Architecte, ingénieur-conseil, géomètre-expert, designer industriel" },
  { icon: Sprout, label: "Agriculteur & Exploitant", desc: "Exploitation agricole, viticulture, élevage, maraîchage" },
  { icon: Truck, label: "Transporteur & Logistique", desc: "Transport routier, coursier, déménagement, logistique" },
  { icon: Utensils, label: "Restaurateur & Hôtelier", desc: "Restauration, hôtellerie, café, traiteur" },
  { icon: Code2, label: "Startup & Jeune entreprise innovante", desc: "JEI, deeptech, SaaS, scaleup" },
  { icon: Building2, label: "TPE / PME", desc: "Toute structure de 1 à 250 salariés, tous secteurs" },
  { icon: TrendingUp, label: "Franchisé", desc: "Ouverture ou reprise d'une franchise nationale ou internationale" },
  { icon: Palette, label: "Artiste & Intermittent du spectacle", desc: "Artiste auteur, musicien, comédien, technicien du spectacle" },
  { icon: HeartHandshake, label: "Association loi 1901", desc: "Association, fondation, organisme à but non lucratif" },
  { icon: Home, label: "SCI & Investisseur immobilier", desc: "Société Civile Immobilière, marchand de biens, promoteur" },
  { icon: GraduationCap, label: "Profession de l'éducation", desc: "Formateur indépendant, organisme de formation, consultant RH" },
];

const proLoans = [
  {
    icon: Wallet,
    title: "Prêt de trésorerie",
    desc: "Gérez vos décalages de trésorerie, préfinancez des marchés ou faites face à un pic d'activité saisonnier.",
    tag: "Court terme",
    color: "blue",
  },
  {
    icon: Package,
    title: "Financement de matériel",
    desc: "Achat d'équipements, machines-outils, véhicules utilitaires, matériel informatique ou médical.",
    tag: "Crédit-bail disponible",
    color: "purple",
  },
  {
    icon: Building2,
    title: "Prêt immobilier professionnel",
    desc: "Acquisition de locaux commerciaux, entrepôts, bureaux ou cabinets. Financement jusqu'à 100 %.",
    tag: "Jusqu'à 25 ans",
    color: "orange",
  },
  {
    icon: TrendingUp,
    title: "Financement de croissance",
    desc: "Soutien à l'expansion, rachat de fonds de commerce, financement d'une acquisition ou d'une fusion.",
    tag: "Sur mesure",
    color: "green",
  },
  {
    icon: RefreshCw,
    title: "Découvert professionnel",
    desc: "Ligne de crédit permanente pour absorber les imprévus sans bloquer votre activité.",
    tag: "Flexible",
    color: "pink",
  },
  {
    icon: ShieldCheck,
    title: "Prêt garanti Bpifrance",
    desc: "Bénéficiez de la garantie d'État via notre partenariat Bpifrance pour faciliter l'accès au crédit.",
    tag: "Jusqu'à 90 % garanti",
    color: "cyan",
  },
];

const colorMap: Record<string, { card: string; icon: string; tag: string }> = {
  blue:   { card: "border-blue-500/20 bg-blue-500/5",   icon: "bg-blue-500/15 text-blue-400 border-blue-500/20",   tag: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
  purple: { card: "border-purple-500/20 bg-purple-500/5", icon: "bg-purple-500/15 text-purple-400 border-purple-500/20", tag: "bg-purple-500/15 text-purple-300 border-purple-500/20" },
  orange: { card: "border-orange-500/20 bg-orange-500/5", icon: "bg-orange-500/15 text-orange-400 border-orange-500/20", tag: "bg-orange-500/15 text-orange-300 border-orange-500/20" },
  pink:   { card: "border-pink-500/20 bg-pink-500/5",   icon: "bg-pink-500/15 text-pink-400 border-pink-500/20",   tag: "bg-pink-500/15 text-pink-300 border-pink-500/20" },
  cyan:   { card: "border-cyan-500/20 bg-cyan-500/5",   icon: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",   tag: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20" },
  green:  { card: "border-green-500/20 bg-green-500/5", icon: "bg-green-500/15 text-green-400 border-green-500/20", tag: "bg-green-500/15 text-green-300 border-green-500/20" },
};

function LoanCard({ loan, i }: { loan: typeof particulierLoans[0]; i: number }) {
  const c = colorMap[loan.color];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.07, duration: 0.4 }}
      className={`p-6 rounded-2xl border ${c.card} hover:scale-[1.02] transition-transform duration-300 flex flex-col gap-4`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${c.icon}`}>
          <loan.icon className="w-5 h-5" />
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${c.tag}`}>{loan.tag}</span>
      </div>
      <div>
        <h3 className="font-semibold text-base mb-1.5">{loan.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{loan.desc}</p>
      </div>
      <Link href="/login" className="mt-auto flex items-center gap-1 text-xs font-medium text-primary hover:underline group">
        Simuler mon prêt <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </motion.div>
  );
}

export default function Loans() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicNavbar />

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/7 rounded-full blur-[120px]" />
        </div>
        <motion.div {...fadeUp} className="max-w-3xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
            <Calculator className="w-3 h-3" /> Réponse de principe en 24 h
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Le crédit au service <br className="hidden md:block" />de vos projets
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Particuliers ou professionnels, NeoBank finance vos ambitions avec des offres personnalisées, des taux compétitifs et une réponse rapide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/25 group">
              Faire une simulation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#professionnels" className="inline-flex items-center justify-center gap-2 border border-white/10 px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-white/5 transition-all">
              Espace professionnel
            </a>
          </div>
        </motion.div>

        {/* Trust row */}
        <motion.div {...fadeUp} className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          {[
            { icon: CheckCircle, label: "Aucuns frais de dossier" },
            { icon: Clock, label: "Réponse de principe en 24 h" },
            { icon: ShieldCheck, label: "Données sécurisées & confidentielles" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-green-400" />
              {item.label}
            </div>
          ))}
        </motion.div>
      </section>

      {/* ─── Particuliers ─── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-3">
              Particuliers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Financer votre vie</h2>
            <p className="text-muted-foreground mt-2">Des solutions adaptées à chaque étape de votre vie.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {particulierLoans.map((loan, i) => <LoanCard key={loan.title} loan={loan} i={i} />)}
          </div>
        </div>
      </section>

      {/* ─── Professionnels ─── */}
      <section id="professionnels" className="py-20 px-6 border-t border-white/5 bg-white/1">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-medium mb-3">
              Professionnels
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Financer votre activité</h2>
            <p className="text-muted-foreground mt-2">Des offres de crédit professionnel pour tous les statuts et tous les secteurs.</p>
          </motion.div>

          {/* Loan types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {proLoans.map((loan, i) => <LoanCard key={loan.title} loan={loan} i={i} />)}
          </div>

          {/* Profile grid */}
          <motion.div {...fadeUp}>
            <h3 className="text-xl font-semibold mb-6">Tous les profils professionnels éligibles</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {proProfiles.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.35 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/8 bg-card/20 hover:bg-card/35 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <p.icon className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium leading-snug">{p.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Processus ─── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="text-3xl font-bold mb-3">Comment ça marche ?</h2>
            <p className="text-muted-foreground">Obtenir un crédit n'a jamais été aussi simple.</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Simulation", desc: "Configurez votre besoin en quelques clics — montant, durée, projet." },
              { step: "02", title: "Dossier en ligne", desc: "Déposez vos pièces justificatives directement dans l'application." },
              { step: "03", title: "Réponse rapide", desc: "Réponse de principe en 24 h, offre définitive sous 5 jours ouvrés." },
              { step: "04", title: "Déblocage", desc: "Fonds versés sur votre compte NeoBank dès la signature électronique." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-left"
              >
                <div className="text-4xl font-bold text-primary/30 mb-3">{s.step}</div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 px-6 bg-primary/5 border-y border-primary/10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold mb-3">Un projet ? Parlons-en.</h2>
            <p className="text-muted-foreground mb-8">Simulation gratuite, sans engagement, sans impact sur votre score de crédit.</p>
            <Link href="/login" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/25 group">
              Démarrer ma simulation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-xs text-muted-foreground mt-4">Toute offre de crédit est soumise à acceptation du dossier. Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.</p>
          </motion.div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
