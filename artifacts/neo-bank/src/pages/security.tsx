import { motion } from "framer-motion";
import { Link } from "wouter";
import { PublicNavbar, PublicFooter } from "@/components/layout/PublicLayout";
import {
  Shield, Lock, Fingerprint, Eye, EyeOff, Bell, RefreshCw,
  Server, Key, CheckCircle, ArrowRight, Zap,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Security() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicNavbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-green-500/5 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-medium mb-6">
              <Shield className="w-3 h-3" /> Votre sécurité, notre priorité absolue
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Protégé à chaque instant
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              NeoBank a été conçu avec la sécurité bancaire comme fondation. Chaque fonctionnalité est pensée pour protéger votre argent et votre identité.
            </p>
          </motion.div>

          {/* Trust badges */}
          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Agréé ACPR", sublabel: "Autorité de contrôle bancaire française" },
              { label: "FGDR", sublabel: "Dépôts garantis jusqu'à 100 000€" },
              { label: "PCI DSS", sublabel: "Certification sécurité des paiements" },
              { label: "ISO 27001", sublabel: "Sécurité des systèmes d'information" },
            ].map((badge) => (
              <div key={badge.label} className="p-4 rounded-2xl border border-green-500/20 bg-green-500/5 text-center">
                <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="font-semibold text-sm">{badge.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{badge.sublabel}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main features */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {[
              {
                icon: Fingerprint,
                title: "Authentification biométrique",
                desc: "Connectez-vous et validez vos paiements grâce à votre empreinte digitale ou à la reconnaissance faciale (Face ID). Votre biométrie ne quitte jamais votre appareil — elle n'est ni stockée sur nos serveurs, ni transmise à des tiers.",
                side: "right",
              },
              {
                icon: Lock,
                title: "Chiffrement de bout en bout",
                desc: "Toutes les communications entre votre application et nos serveurs sont chiffrées avec le protocole TLS 1.3, le standard le plus sécurisé du marché. Vos données financières sont illisibles pour toute personne non autorisée, y compris sur un réseau Wi-Fi public.",
                side: "left",
              },
              {
                icon: EyeOff,
                title: "Gel de carte en un clic",
                desc: "En cas de perte ou de vol de votre carte, bloquez-la immédiatement depuis l'application sans attendre. Aucune transaction ne peut être effectuée durant le gel. Vous pouvez débloquer votre carte tout aussi instantanément si vous la retrouvez.",
                side: "right",
              },
              {
                icon: Bell,
                title: "Notifications en temps réel",
                desc: "Recevez une alerte push sur votre téléphone pour chaque transaction sur votre compte, dans la seconde qui suit. Si vous ne reconnaissez pas un paiement, signalez-le directement depuis la notification pour déclencher une enquête.",
                side: "left",
              },
              {
                icon: Key,
                title: "3D Secure nouvelle génération",
                desc: "Chaque achat en ligne est validé par une notification push sur votre téléphone plutôt qu'un SMS. Les SMS sont interceptables — les notifications push chiffrées ne le sont pas. Vous gardez le contrôle total sur chaque paiement à distance.",
                side: "right",
              },
              {
                icon: Server,
                title: "Infrastructure sécurisée",
                desc: "Nos serveurs sont hébergés en France, dans des datacenters certifiés ISO 27001 avec redondance géographique. Des audits de sécurité indépendants sont réalisés trimestriellement par des équipes spécialisées en cybersécurité bancaire.",
                side: "left",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: item.side === "right" ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`flex gap-6 p-6 rounded-2xl border border-white/8 bg-card/20 hover:bg-card/30 transition-colors ${item.side === "left" ? "flex-row-reverse" : ""}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we protect section */}
      <section className="py-20 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ce qui se passe derrière les coulisses</h2>
            <p className="text-muted-foreground">Une architecture de sécurité multicouche, invisible mais permanente.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: RefreshCw, title: "Surveillance 24/7", desc: "Nos systèmes de détection des fraudes analysent chaque transaction en temps réel grâce à des algorithmes de machine learning entraînés sur des milliards de points de données.", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
              { icon: Eye, title: "Monitoring continu", desc: "Une équipe dédiée surveille nos infrastructures en permanence. En cas d'anomalie, des procédures d'urgence automatisées se déclenchent en moins de 30 secondes.", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
              { icon: Zap, title: "Tests de pénétration", desc: "Des hackers éthiques testent régulièrement nos systèmes pour identifier et corriger les vulnérabilités avant qu'elles puissent être exploitées par des acteurs malveillants.", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
            ].map((item) => (
              <motion.div key={item.title} {...fadeUp} className={`p-6 rounded-2xl border ${item.color.split(" ").slice(1).join(" ")}`}>
                <div className={`w-12 h-12 rounded-xl ${item.color.split(" ").slice(1).join(" ")} flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 ${item.color.split(" ")[0]}`} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Votre argent entre de bonnes mains</h2>
            <p className="text-muted-foreground mb-8">Ouvrez votre compte en toute confiance.</p>
            <Link href="/login" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/25 group">
              Ouvrir un compte sécurisé <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
