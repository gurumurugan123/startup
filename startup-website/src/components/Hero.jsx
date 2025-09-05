import { hero } from "../data/content";

export default function Hero() {
  return (
    <div className="relative bg-background">
      <div className="section relative z-10 min-h-[70vh] flex flex-col items-center justify-center text-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold" data-aos="fade-up">{hero.headline}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl" data-aos="fade-up" data-aos-delay="200">{hero.subtext}</p>
        <div className="flex gap-3" data-aos="fade-up" data-aos-delay="400">
          {hero.ctas.map(cta => (
            <a key={cta.label} href={cta.href}
               className={`px-6 py-3 rounded-md text-sm font-medium transition
               ${cta.variant === "primary"
                 ? "bg-primary text-primary-foreground hover:opacity-90"
                 : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
