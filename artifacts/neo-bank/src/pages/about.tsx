import { motion } from "framer-motion";
import { Link } from "wouter";
import { PublicNavbar, PublicFooter } from "@/components/layout/PublicLayout";
import { ArrowRight, Users, Target, Heart, MapPin, Linkedin, Twitter } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const team = [
  { name: "Sophie Marchand", role: "CEO & Co-fondatrice", bio: "Ancienne directrice chez BNP Paribas, Sophie a passé 15 ans dans la banque traditionnelle avant de décider de la réinventer.", initials: "SM", color: "bg-blue-500/20 text-blue-400" },
  { name: "Lucas Bernard", role: "CTO & Co-fondateur", bio: "Ex-ingénieur chez Stripe et PayPal, Lucas a construit des systèmes de paiement traitant des milliards de transactions.", initials: "LB", color: "bg-purple-500/20 text-purple-400" },
  { name: "Emma Petit", role: "Chief Design Officer", bio: "Designer primée, Emma a redéfini l'expérience bancaire en plaçant l'utilisateur au centre de chaque décision de design.", initials: "EP", color: "bg-pink-500/20 text-pink-400" },
  { name: "Thomas Lefebvre", role: "Chief Risk Officer", bio: "Ancien régulateur à l'ACPR, Thomas garantit que NeoBank opère dans le respect absolu de la réglementation bancaire européenne.", initials: "TL", color: "bg-green-500/20 text-green-400" },
  { name: "Camille Rousseau", role: "VP Produit", bio: "Passionnée par les fintech, Camille orchestre la roadmap produit avec une obsession : simplifier la vie financière des Français.", initials: "CR", color: "bg-orange-500/20 text-orange-400" },
  { name: "Julien Moreau", role: "Head of Growth", bio: "Vétéran du growth hacking, Julien a permis à NeoBank de passer de 0 à 2 millions de clients en moins de 4 ans.", initials: "JM", color: "bg-cyan-500/20 text-cyan-400" },
];

const timeline = [
  { year: "2019", title: "La genèse", desc: "Sophie et Lucas, frustrés par leurs banques respectives, commencent à esquisser NeoBank sur des post-its dans un café parisien." },
  { year: "2020", title: "Les premiers fonds", desc: "NeoBank lève 12M€ en seed round et obtient son agrément d'établissement de crédit auprès de l'ACPR." },
  { year: "2021", title: "Le lancement", desc: "NeoBank ouvre ses portes au grand public. 50 000 clients rejoignent la liste d'attente en 48 heures." },
  { year: "2022", title: "L'accélération", desc: "500 000 clients actifs. Lancement des espaces d'épargne et du plan Premium. Levée de série B de 80M€." },
  { year: "2023", title: "L'expansion", desc: "1 million de clients. Lancement en Belgique et en Espagne. Introduction de la carte Metal et du cashback." },
  { year: "2024", title: "Aujourd'hui", desc: "2 millions de clients dans 6 pays européens. NeoBank est la fintech à la croissance la plus rapide de France." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicNavbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-primary/6 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
              <Heart className="w-3 h-3" /> Fondée à Paris en 2019
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Nous réinventons la relation entre les gens et leur argent
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              NeoBank est née d'une conviction simple : gérer son argent devrait être aussi simple et agréable que d'envoyer un message à un ami. Nous construisons la banque que nous aurions voulu avoir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5 bg-white/2">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2M+", label: "Clients actifs" },
              { value: "6", label: "Pays européens" },
              { value: "350+", label: "Employés" },
              { value: "2019", label: "Fondée à Paris" },
            ].map((stat) => (
              <motion.div key={stat.label} {...fadeUp}>
                <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & values */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="text-primary text-sm font-medium mb-3">Notre mission</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce en quoi nous croyons</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "L'humain d'abord", desc: "La technologie est un moyen, pas une fin. Chaque fonctionnalité que nous créons répond à un vrai besoin humain : accès, compréhension, contrôle.", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
              { icon: Target, title: "La transparence totale", desc: "Fini les frais cachés, les contrats illisibles et les conditions en petits caractères. Nous croyons en une relation bancaire honnête, claire et équitable.", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
              { icon: Heart, title: "L'accessibilité pour tous", desc: "La finance de qualité ne devrait pas être réservée à une élite. NeoBank offre des services bancaires premium à des tarifs accessibles à tous les Français.", color: "text-pink-400 bg-pink-500/10 border-pink-500/20" },
            ].map((v) => (
              <motion.div key={v.title} {...fadeUp} className={`p-6 rounded-2xl border ${v.color.split(" ").slice(1).join(" ")}`}>
                <div className={`w-12 h-12 rounded-xl ${v.color.split(" ").slice(1).join(" ")} flex items-center justify-center mb-4`}>
                  <v.icon className={`w-6 h-6 ${v.color.split(" ")[0]}`} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre histoire</h2>
            <p className="text-muted-foreground">De l'idée sur un post-it à 2 millions de clients.</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-white/8" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 relative"
                >
                  <div className="w-14 shrink-0 flex items-start pt-1">
                    <span className="text-xs font-mono font-bold text-primary">{item.year}</span>
                  </div>
                  <div className="absolute left-16 top-2 w-2 h-2 rounded-full bg-primary border-2 border-background -translate-x-1/2" />
                  <div className="flex-1 pl-6 pb-2">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">L'équipe dirigeante</h2>
            <p className="text-muted-foreground">Des experts de la finance, de la tech et du design unis par une même vision.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-2xl border border-white/8 bg-card/20 hover:bg-card/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${member.color} flex items-center justify-center font-semibold text-sm`}>
                    {member.initials}
                  </div>
                  <div>
                    <div className="font-semibold">{member.name}</div>
                    <div className="text-xs text-muted-foreground">{member.role}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                <div className="flex gap-2 mt-4">
                  <button className="p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground">
                    <Twitter className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="py-16 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div {...fadeUp} className="flex-1">
              <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
                <MapPin className="w-4 h-4" /> Paris, France
              </div>
              <h2 className="text-3xl font-bold mb-4">Basés à Paris, pensés pour l'Europe</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Notre siège est au cœur du 2e arrondissement de Paris. Nous avons aussi des bureaux à Berlin, Madrid et Amsterdam pour être au plus proche de nos clients européens.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium">
                Voir nos offres d'emploi <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.div {...fadeUp} className="flex-1 grid grid-cols-2 gap-3">
              {[
                { label: "Siège social", value: "12 rue du Louvre, Paris 75001" },
                { label: "Effectif", value: "350+ collaborateurs" },
                { label: "Marchés", value: "France, Belgique, Espagne, Pays-Bas, Allemagne, Italie" },
                { label: "Postes ouverts", value: "47 postes à pourvoir" },
              ].map((info) => (
                <div key={info.label} className="p-4 rounded-xl border border-white/8 bg-card/20">
                  <div className="text-xs text-muted-foreground mb-1">{info.label}</div>
                  <div className="text-sm font-medium">{info.value}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold mb-4">Rejoignez l'aventure NeoBank</h2>
            <p className="text-muted-foreground mb-8">En tant que client ou en tant que collaborateur.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all group">
                Ouvrir un compte <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#" className="inline-flex items-center justify-center gap-2 border border-white/10 px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-white/5 transition-all">
                Voir les offres d'emploi
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
