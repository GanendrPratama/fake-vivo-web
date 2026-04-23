import { Product } from "./ProductModal";

interface ProductCardProps {
  product: Product;
  onSelect?: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <button 
      onClick={() => onSelect?.(product)}
      className="group border-4 border-on-surface bg-surface hover:bg-surface-container transition-colors duration-0 cursor-pointer h-full w-full text-left"
    >
      <div className="relative h-48 overflow-hidden border-b-4 border-on-surface bg-surface-container-low">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-headline-md uppercase">{product.name}</h3>
        <p className="font-body-md font-bold text-primary">{product.price}</p>
        <p className="font-label-bold text-xs opacity-80 line-clamp-2">{product.specs}</p>
      </div>
    </button>
  );
}