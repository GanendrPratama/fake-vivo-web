import { Product } from "../product/ProductModal";
import ProductCard from "../product/ProductCard";

interface XSeriesSectionProps {
  products: Product[];
  onSelectProduct?: (product: Product) => void;
}

export default function XSeriesSection({ products, onSelectProduct }: XSeriesSectionProps) {
  return (
    <section id="x-series" className="min-h-screen border-b-4 border-on-surface bg-secondary flex flex-col">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-8 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b-4 md:border-b-0 md:border-r-4 border-white">
          <div>
            <div className="border-b-4 border-white pb-4 mb-4 flex justify-between items-end flex-wrap gap-4">
              <h2 className="font-headline-lg text-white uppercase">X Series</h2>
              <span className="font-label-bold border-4 border-white text-white px-3 py-1">FLAGSHIP</span>
            </div>
            <h3 className="font-headline-md text-white max-w-lg animate-slide-up">
              OPTICAL MASTERY.<br />CO-ENGINEERED WITH ZEISS.
            </h3>
          </div>
          <p className="font-body-lg text-white mt-8 max-w-xl">
            Flagship smartphones dengan teknologi kamera tercanggih.
          </p>
        </div>
        
        <div className="col-span-1 md:col-span-4 bg-primary p-8 flex items-center justify-center">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_esiUJXII6ha3OBbWFZl1QjoBU1drYCLCZR4VN-ayBXCDSyqnAnqVPJDXDUNMvY1h96Z5vqClvc74bH0Q28-yzRgltXYy6zdpdHPS17FYsAlSdd44PSPBpFp_CUksQ7ufSq53GkcIqtmaOkvsiS2GhAQL-Qficsym_cPr_o7sJpZ3JtWcYzGgOTt8eL8z1Pu2oHSXMOySztvGAZlsB4IvnQfvhV6uoHgMTEmIGMzC5MsUYGb5BisaZ8GQa4VEOu0GpuKn2BmHyLZw"
            alt="Zeiss Camera"
            className="w-full h-48 object-cover border-4 border-white grayscale contrast-150"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-t-4 border-white">
        {products.slice(0, 5).map((product, index) => (
          <div 
            key={product.name} 
            className={`border-r-4 border-white ${index === 4 ? 'md:border-r-0' : ''}`}
          >
            <ProductCard product={product} onSelect={onSelectProduct} />
          </div>
        ))}
      </div>
    </section>
  );
}