import { motion } from "framer-motion";
import { Link } from "wouter";
import { PublicNavbar, PublicFooter } from "@/components/layout/PublicLayout";
import { Check, X, ArrowRight, Zap, HelpCircle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const plans = [
  {
    name: "Standard",
    tagline: "Pour commencer",
    price: "0",
    color: "border-white/10",
    cta: "Commencer gratuitement",
    highlighted: false,
  },
  {
    name: "Premium",
    tagline: "Le plus populaire",
    price: "9,99",
    color: "border-primary/40",
    cta: "Essayer 1 mois offert",
    highlighted: true,
    badge: "Recommandé",
  },
  {
    name: "Metal",
    tagline: "L'expérience ultime",
    price: "19,99",
    color: "border-white/10",
    cta: "Choisir Metal",
    highlighted: false,
  },
];

const rows = [
  { category: "Compte & IBAN", features: [
    { label: "IBAN français", values: [true, true, true] },
    { label: "Carte Visa", values: ["Virtuelle", "Physique", "Metal"] },
    { label: "Comptes secondaires", values: ["1", "3", "Illimités"] },
    { label: "Espaces d'épargne", values: ["1", "5", "Illimités"] },
  ]},
  { category: "Paiements", features: [
    { label: "Paiements en zone euro", values: [true, true, true] },
    { label: "Paiements hors zone euro", values: ["Frais 1.7%", true, true] },
    { label: "Retraits en euro", values: ["3 gratuits/mois", "5 gratuits/mois", "Illimités"] },
    { label: "Retraits hors zone euro", values: [false, true, true] },
    { label: "Cashback", values: [false, false, "1% sur tout"] },
  ]},
  { category: "Services", features: [
    { label: "Apple Pay / Google Pay", values: [true, true, true] },
    { label: "Virements SEPA instantanés", values: [true, true, true] },
    { label: "Virements internationaux", values: [false, true, true] },
    { label: "Analyse des dépenses", values: ["Basique", "Avancée", "Avancée + IA"] },
    { label: "Assurance voyage", values: [false, "Basique", "Premium"] },
    { label: "Assurance achat", values: [false, false, true] },
  ]},
  { category: "Support", features: [
    { label: "Chat in-app", values: [true, true, true] },
    { label: "Support prioritaire", values: [false, true, true] },
    { label: "Support 24/7", values: [false, false, true] },
    { label: "Conseiller dédié", values: [false, false, true] },
  ]},
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-green-400 mx-auto" />;
  if (value === false) return <X className="w-4 h-4 text-white/20 mx-auto" />;
  return <span className="text-sm text-foreground font-medium">{value}</span>;
}

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicNavbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/8 rounded-full blur-[100px]" />
        </div>
        <motion.div {...fadeUp} className="max-w-2xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
            <Zap className="w-3 h-3" /> Transparence totale, zéro surprise
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Choisissez votre plan</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aucun frais caché. Résiliez à tout moment. Changez de plan en un clic.
          </p>
        </motion.div>
      </section>

      {/* Plan cards */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-6 rounded-2xl border ${plan.color} ${plan.highlighted ? "bg-primary/5" : "bg-card/20"}`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-xs text-muted-foreground mb-1">{plan.tagline}</div>
                  <div className="text-2xl font-bold">{plan.name}</div>
                  <div className="flex items-end gap-1 mt-3">
                    <span className="text-4xl font-bold">{plan.price}€</span>
                    <span className="text-muted-foreground pb-1">/mois</span>
                  </div>
                </div>
                <Link
                  href="/login"
                  className={`block text-center py-2.5 rounded-xl text-sm font-medium transition-all ${plan.highlighted ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-white/10 hover:bg-white/5"}`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Comparison table */}
          <motion.div {...fadeUp} className="rounded-2xl border border-white/8 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 bg-white/3 border-b border-white/8">
              <div className="p-4 text-sm font-medium text-muted-foreground">Fonctionnalité</div>
              {plans.map((p) => (
                <div key={p.name} className={`p-4 text-center text-sm font-semibold ${p.highlighted ? "text-primary" : ""}`}>
                  {p.name}
                </div>
              ))}
            </div>

            {rows.map((row) => (
              <div key={row.category}>
                <div className="grid grid-cols-4 bg-white/2 border-y border-white/5">
                  <div className="p-3 pl-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider col-span-4">
                    {row.category}
                  </div>
                </div>
                {row.features.map((feat, fi) => (
                  <div key={feat.label} className={`grid grid-cols-4 border-b border-white/5 hover:bg-white/2 transition-colors ${fi % 2 === 0 ? "" : "bg-white/1"}`}>
                    <div className="p-3 pl-4 text-sm text-muted-foreground flex items-center gap-1">
                      {feat.label}
                    </div>
                    {feat.values.map((val, vi) => (
                      <div key={vi} className="p-3 flex items-center justify-center text-center">
                        <CellValue value={val} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium mb-3">
              <HelpCircle className="w-4 h-4" /> Questions fréquentes
            </div>
            <h2 className="text-3xl font-bold">Tout ce que vous devez savoir</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "Puis-je changer de plan à tout moment ?", a: "Oui, vous pouvez passer à un plan supérieur ou inférieur à tout moment depuis l'application. Le changement est effectif immédiatement, et la facturation est calculée au prorata." },
              { q: "Y a-t-il des frais d'ouverture de compte ?", a: "Non, l'ouverture de compte est entièrement gratuite. Le plan Standard est sans frais mensuels sans condition de revenus ni de dépenses minimales." },
              { q: "Comment fonctionne l'essai gratuit Premium ?", a: "Lors de l'inscription, vous pouvez activer 1 mois offert sur le plan Premium sans carte de crédit. À l'issue du mois, vous pouvez conserver Premium ou revenir au plan Standard." },
              { q: "Mes dépôts sont-ils garantis ?", a: "Oui. En tant qu'établissement de crédit agréé par l'ACPR, vos dépôts sont garantis jusqu'à 100 000€ par le Fonds de Garantie des Dépôts et de Résolution (FGDR)." },
            ].map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-2xl border border-white/8 bg-card/20 hover:bg-card/30 transition-colors"
              >
                <div className="font-medium mb-2">{faq.q}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
            <p className="text-muted-foreground mb-8">Ouvrez votre compte en 2 minutes, sans engagement.</p>
            <Link href="/login" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/25 group">
              Commencer gratuitement <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
