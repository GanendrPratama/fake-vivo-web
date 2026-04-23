import { Product } from "../product/ProductModal";
import ProductCard from "../product/ProductCard";

interface TSeriesSectionProps {
  products: Product[];
  onSelectProduct?: (product: Product) => void;
}

export default function TSeriesSection({ products, onSelectProduct }: TSeriesSectionProps) {
  return (
    <section id="t-series" className="min-h-screen border-b-4 border-on-surface flex flex-col">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-6 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b-4 md:border-b-0 md:border-r-4 border-on-surface">
          <div>
            <div className="border-b-4 border-on-surface pb-4 mb-4 flex justify-between items-center">
              <h2 className="font-headline-lg text-primary uppercase">T Series</h2>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 32 }}>sports_esports</span>
            </div>
            <h3 className="font-headline-md uppercase animate-slide-left">
              TURBO CHARGED.<br />UNYIELDING POWER.
            </h3>
          </div>
          <p className="font-body-lg mt-8">
            Gaming smartphones dengan performa tertinggi.
          </p>
        </div>
        
        <div className="col-span-1 md:col-span-6 bg-primary p-8 md:p-12 flex items-center justify-center">
          <div className="w-full h-48 border-4 border-white bg-surface flex items-center justify-center overflow-hidden">
            <span className="font-display-2xl text-primary font-black tracking-tighter animate-pulse-border">
              TURBO
            </span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t-4 border-on-surface">
        {products.slice(0, 4).map((product, index) => (
          <div 
            key={product.name}
            className={`border-r-4 border-on-surface ${index === 3 ? 'lg:border-r-0' : ''}`}
          >
            <ProductCard product={product} onSelect={onSelectProduct} />
          </div>
        ))}
      </div>
    </section>
  );
}