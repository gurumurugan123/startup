import { hero } from "../data/content";

export default function Hero() {
  return (
    <div className="relative bg-gradient-animated text-white">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="section relative z-10 min-h-[70vh] flex flex-col items-center justify-center text-center gap-6">
        <h1 className="text-3xl md:text-5xl font-bold">{hero.headline}</h1>
        <p className="text-base md:text-lg opacity-90 max-w-2xl">{hero.subtext}</p>
        <div className="flex gap-3">
          {hero.ctas.map(cta => (
            <a key={cta.label} href={cta.href}
               className={`px-5 py-3 rounded-xl text-sm font-medium transition
               ${cta.variant === "primary"
                 ? "bg-white text-black hover:opacity-90"
                 : "bg-transparent border border-white hover:bg-white/10"}`}>
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
