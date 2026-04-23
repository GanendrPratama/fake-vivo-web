"use client";

import { useState } from "react";

const allProducts = [
  // X Series
  { id: "x300-pro", series: "x-series", name: "X300 Pro", price: "Rp 18.999.000", specs: "Dimensity 9500, 6.78\" LTPO AMOLED 144Hz, 200MP, 7100mAh, 90W+40W", description: "Flagship with 200MP camera for professional photography", image: "/images/phones/X300_Pro.png" },
  { id: "x300", series: "x-series", name: "X300", price: "Rp 14.999.000", specs: "Dimensity 9400+, 6.67\" AMOLED, 50MP triple, 6200mAh", description: "Flagship with Zeiss optics for amazing photos", image: "/images/phones/X300.png" },
  { id: "x200-fe", series: "x-series", name: "X200 FE", price: "Rp 13.999.000", specs: "LTPO AMOLED 6.31\", Dimensity 9300+, 50MP", description: "Compact flagship for premium experience", image: "/images/phones/X200_FE.png" },
  { id: "x80", series: "x-series", name: "X80", price: "Rp 11.999.000", specs: "Dimensity 9000, 50MP IMX866, 80W, ZEISS", description: "Flagship with ZEISS optics and V1+ chip", image: "/images/phones/X80.png" },
  { id: "x-fold5", series: "x-series", name: "X Fold5", price: "Rp 24.999.000", specs: "Foldable, Snapdragon 8 series", description: "Premium foldable phone", image: "/images/phones/X_Fold5.png" },
  // V Series
  { id: "v70", series: "v-series", name: "V70", price: "Rp 8.999.000", specs: "Snapdragon 7 Gen 4, 6.59\" AMOLED 120Hz, 50MP, 6500mAh, 90W", description: "Best mid-range with powerful battery", image: "/images/phones/V70.png" },
  { id: "v70-fe", series: "v-series", name: "V70 FE", price: "Rp 7.199.000", specs: "Mid-range specs, good performance", description: "Affordable V70 variant", image: "/images/phones/V70_FE.png" },
  { id: "v60", series: "v-series", name: "V60", price: "Rp 6.999.000", specs: "AMOLED 120Hz, Dimensity, 50MP", description: "Elegant mid-range phone", image: "/images/phones/V60.png" },
  { id: "v27-5g", series: "v-series", name: "V27 5G", price: "Rp 5.999.000", specs: "Dimensity 7200, 6.78\" FHD+, 50MP OIS, 66W", description: "5G with Aura Light Portrait", image: "/images/phones/V27_5G.png" },
  { id: "v25-pro", series: "v-series", name: "V25 Pro", price: "Rp 5.999.000", specs: "Dimensity 1300, 6.56\" AMOLED, 64MP OIS", description: "Best camera in class", image: "/images/phones/V25_Pro.png" },
  // Y Series
  { id: "y31d-pro", series: "y-series", name: "Y31d Pro", price: "Mulai Rp 4.3 juta", specs: "Dimensity 7300, 7000mAh, IP68, 50MP", description: "Battery king with 7000mAh", image: "/images/phones/Y31d_Pro.png" },
  { id: "y05", series: "y-series", name: "Y05", price: "Rp 1.899.000", specs: "Entry-level", description: "Most affordable Vivo", image: "/images/phones/Y05.png" },
  { id: "y36", series: "y-series", name: "Y36", price: "Rp 2.999.000", specs: "Snapdragon 680, 6.64\" FHD+, 50MP, 5000mAh", description: "Dynamic Glass design", image: "/images/phones/Y36.png" },
  { id: "y400", series: "y-series", name: "Y400", price: "Rp 3.499.000", specs: "AMOLED, decent battery", description: "Balanced option", image: "/images/phones/Y400.png" },
  // T Series
  { id: "t4-pro", series: "t-series", name: "T4 Pro", price: "Rp 5.999.000", specs: "AMOLED 6.77\", powerful gaming processor", description: "Ultimate gaming phone", image: "/images/phones/T4_Pro.png" },
  { id: "t4-lite", series: "t-series", name: "T4 Lite", price: "Rp 3.999.000", specs: "Affordable gaming", description: "Budget gaming", image: "/images/phones/T4_Lite.png" },
  { id: "t4r", series: "t-series", name: "T4R", price: "Rp 4.499.000", specs: "Gaming-focused", description: "Sporty design", image: "/images/phones/T4R.png" },
  // iQOO
  { id: "iqoo-z10-turbo-plus", series: "iqoo", name: "iQOO Z10 Turbo Plus", price: "Rp 7.999.000", specs: "High-end gaming, fast charging", description: "Extreme performance", image: "/images/phones/iQOO_Z10_Turbo_Plus.png" },
  { id: "iqoo-z10r", series: "iqoo", name: "iQOO Z10R", price: "Rp 5.999.000", specs: "Gaming capabilities", description: "Powerful gaming", image: "/images/phones/iQOO_Z10R.png" },
  { id: "iqoo-pad5", series: "iqoo", name: "iQOO Pad5", price: "Rp 11.999.000", specs: "Gaming tablet", description: "Immersive gaming tablet", image: "/images/phones/iQOO_Pad5.png" },
];

interface ProductListButtonProps {
  onSelectProduct: (product: typeof allProducts[0]) => void;
}

export default function ProductListButton({ onSelectProduct }: ProductListButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);

  const seriesList = ["x-series", "v-series", "y-series", "t-series", "iqoo"];
  const seriesNames: Record<string, string> = {
    "x-series": "X Series",
    "v-series": "V Series", 
    "y-series": "Y Series",
    "t-series": "T Series",
    "iqoo": "iQOO"
  };

  const filteredProducts = selectedSeries 
    ? allProducts.filter(p => p.series === selectedSeries)
    : allProducts;

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 bottom-4 z-50 bg-on-surface text-surface border-4 border-on-surface px-4 py-3 font-label-bold uppercase hover:bg-surface hover:text-on-surface transition-colors lg:left-16"
      >
        {isOpen ? "✕ Products" : "Products"}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[70] bg-black/80 lg:inset-16">
          <div className="h-full flex flex-col bg-surface border-4 border-on-surface">
            {/* Header */}
            <div className="bg-on-surface text-surface p-4 flex justify-between items-center">
              <h2 className="font-headline-lg uppercase">All Products</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 border-2 border-surface flex items-center justify-center hover:bg-surface hover:text-on-surface transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Series Filter */}
            <div className="flex flex-wrap gap-2 p-4 border-b-4 border-on-surface">
              <button 
                onClick={() => setSelectedSeries(null)}
                className={`px-3 py-1 font-label-bold uppercase border-2 border-on-surface ${
                  !selectedSeries ? "bg-on-surface text-surface" : "hover:bg-on-surface hover:text-surface"
                }`}
              >
                ALL
              </button>
              {seriesList.map(series => (
                <button 
                  key={series}
                  onClick={() => setSelectedSeries(series)}
                  className={`px-3 py-1 font-label-bold uppercase border-2 border-on-surface ${
                    selectedSeries === series ? "bg-on-surface text-surface" : "hover:bg-on-surface hover:text-surface"
                  }`}
                >
                  {seriesNames[series]}
                </button>
              ))}
            </div>

            {/* Product List */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                  <button 
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      setIsOpen(false);
                    }}
                    className="border-2 border-on-surface p-3 hover:bg-on-surface hover:text-surface transition-colors text-left"
                  >
                    <div className="font-label-bold uppercase text-xs mb-1">{product.name}</div>
                    <div className="font-body-md text-primary text-sm">{product.price}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}