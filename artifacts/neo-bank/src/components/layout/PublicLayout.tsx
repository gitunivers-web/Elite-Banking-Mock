import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageSelector } from "@/components/LanguageSelector";

export function PublicNavbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/features", label: "Fonctionnalités" },
    { href: "/prets", label: "Prêts" },
    { href: "/security", label: "Sécurité" },
    { href: "/pricing", label: "Tarifs" },
    { href: "/about", label: "À propos" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-bold text-primary-foreground text-sm">N</span>
          </div>
          <span className="font-bold text-xl tracking-tight">NeoBank</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors ${location === l.href ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSelector />
          <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
            Se connecter
          </Link>
          <Link href="/login" className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Ouvrir un compte
          </Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground py-2">
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
            <Link href="/login" className="text-sm text-center py-2.5 rounded-lg border border-white/10 hover:bg-white/5">Se connecter</Link>
            <Link href="/login" className="text-sm text-center py-2.5 rounded-lg bg-primary text-primary-foreground font-medium">Ouvrir un compte</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function PublicFooter() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-bold text-primary-foreground text-xs">N</span>
              </div>
              <span className="font-bold tracking-tight">NeoBank</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">La banque en ligne haut de gamme qui simplifie votre vie financière.</p>
          </div>
          <div className="grid grid-cols-3 gap-8 text-sm">
            <div>
              <div className="font-medium mb-3">Produit</div>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">Fonctionnalités</Link></li>
                <li><Link href="/prets" className="text-muted-foreground hover:text-foreground transition-colors">Prêts & Crédits</Link></li>
                <li><Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Tarifs</Link></li>
                <li><Link href="/security" className="text-muted-foreground hover:text-foreground transition-colors">Sécurité</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Application mobile</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-3">Entreprise</div>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">À propos</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Presse</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Carrières</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-3">Support</div>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Centre d'aide</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Conditions</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Confidentialité</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <span>© 2024 NeoBank. Tous droits réservés.</span>
          <span>Agréé par l'ACPR · Dépôts garantis jusqu'à 100 000€ par le FGDR</span>
        </div>
      </div>
    </footer>
  );
}
