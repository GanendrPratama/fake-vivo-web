import { Product } from "../product/ProductModal";
import ProductCard from "../product/ProductCard";

interface IQooSectionProps {
  products: Product[];
  onSelectProduct?: (product: Product) => void;
}

export default function IQooSection({ products, onSelectProduct }: IQooSectionProps) {
  return (
    <section id="iqoo" className="min-h-screen border-b-4 border-[#1e3a8a] flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#1e3a8a] flex flex-col justify-center p-8 md:p-12 lg:p-16 border-b-4 md:border-b-0 md:border-r-4 border-on-surface">
          <h2 className="font-display-2xl text-white font-black italic tracking-tighter uppercase animate-slide-left">
            iQOO
          </h2>
          <p className="font-label-bold text-white mt-2 animate-slide-left delay-100">MONSTER INSIDE.</p>
          <p className="font-body-lg text-white mt-4 max-w-md">
            Sub-brand gaming Vivo dengan performa extreme.
          </p>
        </div>
        
        <div className="bg-primary flex items-center justify-center p-8 md:p-12 lg:p-16 relative group cursor-pointer hover:bg-[#7f1d1d] transition-colors">
          <span className="font-headline-lg text-white font-black uppercase z-10 animate-slide-right">
            ACTIVATE PERFORMANCE
          </span>
          <div className="absolute inset-0 bausch-pattern"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 border-t-4 border-on-surface">
        {products.slice(0, 3).map((product, index) => (
          <div 
            key={product.name}
            className={`border-r-4 border-on-surface ${index === 2 ? 'md:border-r-0' : ''}`}
          >
            <ProductCard product={product} onSelect={onSelectProduct} />
          </div>
        ))}
      </div>
    </section>
  );
}