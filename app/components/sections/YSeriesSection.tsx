import { Product } from "../product/ProductModal";
import ProductCard from "../product/ProductCard";

interface YSeriesSectionProps {
  products: Product[];
  onSelectProduct?: (product: Product) => void;
}

export default function YSeriesSection({ products, onSelectProduct }: YSeriesSectionProps) {
  return (
    <section id="y-series" className="min-h-screen border-b-4 border-[#15803d] bg-surface flex flex-col">
      <div className="flex-1 p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-12 mb-8 gap-6">
          <div className="col-span-12 md:col-span-6">
            <h2 className="font-headline-lg uppercase text-[#15803d]">Y Series</h2>
            <p className="font-body-lg max-w-md mt-2">
              ESSENTIAL PERFORMANCE. ENDURING BATTERY LIFE.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.slice(0, 4).map((product, index) => (
            <div key={product.name}>
              <ProductCard product={product} onSelect={onSelectProduct} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}