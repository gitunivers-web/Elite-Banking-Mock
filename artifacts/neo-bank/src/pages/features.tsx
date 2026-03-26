import { motion } from "framer-motion";
import { Link } from "wouter";
import { PublicNavbar, PublicFooter } from "@/components/layout/PublicLayout";
import {
  CreditCard, Zap, Shield, Globe, BarChart3, Smartphone,
  PiggyBank, Bell, RefreshCw, Lock, Fingerprint, Eye,
  ArrowRight, Check, Wifi, MapPin, Gift,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const features = [
  {
    category: "Paiement & Carte",
    color: "blue",
    items: [
      { icon: CreditCard, title: "Carte Visa Premium", desc: "Payez partout dans le monde, en ligne et en magasin. Disponible en version physique et virtuelle instantanément dès l'ouverture du compte." },
      { icon: Globe, title: "Zéro frais à l'étranger", desc: "Retraits et paiements sans frais de change dans plus de 150 pays. Le taux de change officiel Visa s'applique, sans commission cachée." },
      { icon: Wifi, title: "Paiement sans contact", desc: "Apple Pay, Google Pay et Samsung Pay inclus. Réglez vos achats d'un simple geste depuis votre téléphone ou votre montre connectée." },
      { icon: Gift, title: "Cashback sur vos achats", desc: "Gagnez jusqu'à 1% de cashback sur tous vos achats avec l'offre Metal. Crédité automatiquement chaque mois sur votre compte." },
    ],
  },
  {
    category: "Virements & Transactions",
    color: "purple",
    items: [
      { icon: Zap, title: "Virements instantanés SEPA", desc: "Envoyez de l'argent à n'importe quel compte SEPA en quelques secondes, 24h/24, 7j/7, jours fériés inclus." },
      { icon: RefreshCw, title: "Virements programmés", desc: "Automatisez vos paiements récurrents : loyer, abonnements, remboursements. Créez des virements permanents en quelques clics." },
      { icon: MapPin, title: "Paiements internationaux", desc: "Envoyez de l'argent vers 30+ pays hors SEPA à des taux compétitifs, directement depuis l'application." },
      { icon: ArrowRight, title: "Demande d'argent", desc: "Envoyez un lien de paiement à vos amis ou collègues pour récupérer facilement les dépenses partagées." },
    ],
  },
  {
    category: "Épargne & Budget",
    color: "green",
    items: [
      { icon: PiggyBank, title: "Espaces d'épargne", desc: "Créez jusqu'à 10 espaces d'épargne dédiés à vos projets : vacances, voiture, urgences. Définissez un objectif et suivez votre progression." },
      { icon: BarChart3, title: "Analyse des dépenses", desc: "Vos transactions sont automatiquement catégorisées. Visualisez vos habitudes de consommation et fixez des budgets mensuels par catégorie." },
      { icon: Bell, title: "Alertes intelligentes", desc: "Recevez une notification instantanée pour chaque transaction. Soyez alerté en cas de dépassement de budget ou de dépense inhabituelle." },
      { icon: Eye, title: "Tableau de bord financier", desc: "Une vue d'ensemble de votre situation financière en temps réel : solde, dépenses, revenus et épargne réunis sur un seul écran." },
    ],
  },
  {
    category: "Sécurité & Contrôle",
    color: "red",
    items: [
      { icon: Lock, title: "Gel de carte instantané", desc: "Bloquez votre carte en cas de perte ou de vol en un seul clic dans l'application. Débloquez-la tout aussi facilement si vous la retrouvez." },
      { icon: Fingerprint, title: "Authentification biométrique", desc: "Connectez-vous et validez vos paiements avec votre empreinte digitale ou Face ID. Plus sûr qu'un mot de passe, plus rapide qu'un code PIN." },
      { icon: Shield, title: "Limites personnalisables", desc: "Définissez vos propres plafonds de paiement et de retrait. Ajustez-les à la volée selon vos besoins, en temps réel." },
      { icon: Smartphone, title: "Authentification 3D Secure", desc: "Chaque paiement en ligne est validé par une notification push sur votre téléphone. Fini les codes SMS interceptables." },
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; headerBg: string }> = {
  blue:   { bg: "bg-blue-500/10",   border: "border-blue-500/20",   text: "text-blue-400",   headerBg: "bg-blue-500/5" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400", headerBg: "bg-purple-500/5" },
  green:  { bg: "bg-green-500/10",  border: "border-green-500/20",  text: "text-green-400",  headerBg: "bg-green-500/5" },
  red:    { bg: "bg-red-500/10",    border: "border-red-500/20",    text: "text-red-400",    headerBg: "bg-red-500/5" },
};

export default function Features() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicNavbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />
        </div>
        <motion.div {...fadeUp} className="max-w-3xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
            <Zap className="w-3 h-3" /> Tout inclus, aucun compromis
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Des fonctionnalités pensées pour vous
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            NeoBank réunit dans une seule application tous les outils pour gérer votre argent intelligemment, en toute sécurité.
          </p>
          <Link href="/login" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/25 group">
            Ouvrir un compte gratuitement
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* Feature categories */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto space-y-20">
          {features.map((cat) => {
            const c = colorMap[cat.color];
            return (
              <div key={cat.category}>
                <motion.div {...fadeUp} className="mb-8">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${c.border} ${c.bg} ${c.text} text-xs font-medium mb-3`}>
                    {cat.category}
                  </div>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.items.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className={`p-5 rounded-2xl border ${c.border} ${c.headerBg} hover:scale-[1.02] transition-transform duration-300`}
                    >
                      <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                        <item.icon className={`w-5 h-5 ${c.text}`} />
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary/5 border-y border-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Convaincu ? Rejoignez-nous.</h2>
            <p className="text-muted-foreground mb-8">Ouverture de compte en 2 minutes, sans paperasse.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-all group">
                Commencer gratuitement <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center gap-2 border border-white/10 px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-white/5 transition-all">
                Voir les tarifs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
