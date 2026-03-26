import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowLeft, Shield, Fingerprint } from "lucide-react";

export default function Login() {
  const [, navigate] = useLocation();
  const [email, setEmail] = useState("alexandre.dupont@example.com");
  const [password, setPassword] = useState("••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      navigate("/app");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Left — Branding panel */}
      <div className="hidden lg:flex flex-col w-1/2 bg-card/30 border-r border-white/5 p-12 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <Link href="/" className="flex items-center gap-2 relative z-10 group">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <span className="font-bold text-primary-foreground">N</span>
          </div>
          <span className="font-bold text-xl">NeoBank</span>
        </Link>

        <div className="flex-1 flex flex-col justify-center relative z-10">
          <div className="mb-10">
            <div className="text-4xl font-bold leading-tight mb-4">
              Votre argent,<br />
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                vos règles.
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Accédez à votre espace bancaire sécurisé. Gérez votre argent, suivez vos dépenses, envoyez des virements en quelques secondes.
            </p>
          </div>

          {/* Feature pills */}
          <div className="space-y-3">
            {[
              { icon: Shield, text: "Connexion chiffrée de bout en bout" },
              { icon: Fingerprint, text: "Authentification biométrique disponible" },
            ].map((f) => (
              <div key={f.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-4 h-4 text-primary" />
                </div>
                {f.text}
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground relative z-10">
          © 2024 NeoBank · Agréé ACPR · Dépôts garantis jusqu'à 100 000€
        </p>
      </div>

      {/* Right — Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12">
        {/* Mobile logo */}
        <Link href="/" className="lg:hidden flex items-center gap-2 mb-10 self-start">
          <ArrowLeft className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Retour</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-1">
              {isSignup ? "Créer un compte" : "Bon retour,"}
            </h1>
            <p className="text-muted-foreground text-sm">
              {isSignup
                ? "Rejoignez NeoBank en moins de 2 minutes."
                : "Connectez-vous à votre espace bancaire."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Nom complet</label>
                <input
                  type="text"
                  placeholder="Alexandre Dupont"
                  className="w-full bg-card/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50"
                />
              </div>
            )}

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Adresse email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-card/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-medium text-muted-foreground">Mot de passe</label>
                {!isSignup && (
                  <a href="#" className="text-xs text-primary hover:underline">Mot de passe oublié ?</a>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-card/50 border border-white/10 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-all disabled:opacity-70 flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                  Connexion en cours…
                </>
              ) : (
                isSignup ? "Créer mon compte" : "Se connecter"
              )}
            </button>

            <div className="relative flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-white/8" />
              <span className="text-xs text-muted-foreground">ou</span>
              <div className="flex-1 h-px bg-white/8" />
            </div>

            <button
              type="button"
              onClick={() => { setIsLoading(true); setTimeout(() => navigate("/app"), 800); }}
              className="w-full border border-white/10 py-3 rounded-xl font-medium text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <Fingerprint className="w-4 h-4 text-primary" />
              {isSignup ? "Continuer sans inscription" : "Accès démo"}
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            {isSignup ? "Vous avez déjà un compte ?" : "Pas encore de compte ?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              className="text-primary hover:underline font-medium"
            >
              {isSignup ? "Se connecter" : "S'inscrire gratuitement"}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
