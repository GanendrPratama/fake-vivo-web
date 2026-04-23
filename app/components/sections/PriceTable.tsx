const priceData = [
  { series: "X Series", price: "Rp 11 - 25 juta" },
  { series: "V Series", price: "Rp 5 - 11 juta" },
  { series: "Y Series", price: "Rp 1.5 - 5 juta" },
  { series: "T Series", price: "Rp 3 - 6 juta" },
  { series: "iQOO", price: "Rp 4 - 12 juta" },
];

import { useDarkMode } from "../../hooks/useDarkMode";

export default function PriceTable() {
  const { isDarkMode } = useDarkMode();

  return (
    <section className={`border-b-4 ${isDarkMode ? "border-white bg-black" : "border-black bg-surface"}`}>
      <div className="max-w-[1440px] mx-auto p-8 md:p-12 lg:p-16">
        <h2 className={`font-headline-lg text-center mb-8 md:mb-12 ${isDarkMode ? "text-white" : "text-on-surface"}`}>
          RINGKASAN HARGA VIVO INDONESIA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {priceData.map((item, index) => (
            <div 
              key={item.series}
              className={`border-4 ${isDarkMode ? "border-white text-white" : "border-on-surface text-on-surface"} p-4 flex flex-col gap-2 hover:bg-on-surface hover:text-surface transition-colors cursor-pointer`}
            >
              <span className="font-label-bold uppercase">{item.series}</span>
              <span className="font-body-md font-bold">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}