import { Product } from "../product/ProductModal";
import ProductCard from "../product/ProductCard";

interface VSeriesSectionProps {
  products: Product[];
  onSelectProduct?: (product: Product) => void;
}

export default function VSeriesSection({ products, onSelectProduct }: VSeriesSectionProps) {
  return (
    <section id="v-series" className="min-h-screen border-b-4 border-[#d97706] bg-[#fef3c7] flex flex-col">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-4 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b-4 md:border-b-0 md:border-r-4 border-[#d97706]">
          <div>
            <div className="border-b-4 border-[#d97706] pb-4 mb-4">
              <h2 className="font-headline-lg text-[#d97706] uppercase">V Series</h2>
            </div>
            <h3 className="font-headline-md text-[#d97706] animate-slide-up">
              PORTRAIT EXPERT.<br />STUDIO LIGHTING.
            </h3>
          </div>
          <p className="font-body-lg text-[#92400e] mt-8">
            Mid-range smartphones dengan kamera terbaik untuk portrait.
          </p>
        </div>
        
        <div className="col-span-1 md:col-span-8 bg-surface-container p-8 relative overflow-hidden">
          <div className="absolute inset-0 bausch-pattern"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {products.slice(0, 3).map((product, index) => (
              <div key={product.name}>
                <ProductCard product={product} onSelect={onSelectProduct} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}