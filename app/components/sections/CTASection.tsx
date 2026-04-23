export default function CTASection() {
  return (
    <div id="cta" className="bg-primary min-h-screen flex items-center justify-center p-8 md:p-12">
      <div className="text-center max-w-2xl">
        <h2 className="font-headline-lg text-white mb-4 animate-scale-in">
          READY TO EXPERIENCE PRECISION?
        </h2>
        <p className="font-body-lg text-white mb-8 max-w-xl mx-auto animate-scale-in delay-100">
          Explore our collection of cutting-edge smartphones designed for every lifestyle.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="font-label-bold uppercase border-4 border-white text-white px-8 py-3 hover:bg-white hover:text-primary transition-colors animate-scale-in delay-200">
            Shop Now
          </button>
          <button className="font-label-bold uppercase border-4 border-white text-white px-8 py-3 hover:bg-white hover:text-primary transition-colors animate-scale-in delay-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}