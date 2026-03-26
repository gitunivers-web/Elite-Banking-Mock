import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { useI18n, LANGUAGES } from "@/lib/i18n";

export function LanguageSelector() {
  const { lang, setLang, currentLanguage } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-sm text-muted-foreground hover:text-foreground"
        title="Changer de langue"
      >
        <span className="text-base leading-none">{currentLanguage.flag}</span>
        <span className="hidden sm:block text-xs font-medium">{currentLanguage.code.toUpperCase()}</span>
        <Globe className="w-3.5 h-3.5 opacity-50" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-white/10 bg-[#0f0f11] shadow-2xl shadow-black/60 z-50 overflow-hidden">
          <div className="px-3 py-2 border-b border-white/5">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Langue / Language</p>
          </div>
          <div className="max-h-72 overflow-y-auto py-1">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-white/5 transition-colors text-left ${lang === l.code ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <span className="text-base leading-none w-6 shrink-0">{l.flag}</span>
                <span className="flex-1">{l.label}</span>
                {lang === l.code && <Check className="w-3.5 h-3.5 text-primary shrink-0" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
