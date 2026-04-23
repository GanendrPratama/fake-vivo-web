interface HeroSectionProps {
  onExploreClick?: () => void;
}

function handleExploreClick() {
  window.dispatchEvent(new CustomEvent("nav-scroll", { 
    detail: { href: "x-series", target: "x-series" } 
  }));
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen border-b-4 border-on-surface bg-primary flex items-center">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-6 border-b-4 md:border-b-0 md:border-r-4 border-white">
          <h1 className="font-display-2xl text-white uppercase leading-none animate-slide-up">
            Absolute<br />Precision
          </h1>
          <p className="font-body-lg text-white max-w-md animate-slide-up delay-100">
            ENGINEERED FOR THE AVANT-GARDE. THE NEW STANDARD IN MOBILE ARCHITECTURE.
          </p>
          <button 
            onClick={onExploreClick || handleExploreClick}
            className="w-fit font-label-bold uppercase border-4 border-white text-white px-6 py-3 hover:bg-white hover:text-primary transition-colors animate-slide-up delay-200"
          >
            Explore Architecture
          </button>
        </div>
        <div className="h-[50vh] md:h-auto min-h-[400px] border-4 border-white bg-surface flex items-center justify-center p-8">
          <img 
            src="/Vivo_logo_2019.svg"
            alt="Vivo Logo"
            className="w-full max-w-[400px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}