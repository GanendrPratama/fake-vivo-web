'use client';

import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SectionNavigator from "./components/layout/SectionNavigator";
import ScrollCover from "./components/sections/ScrollCover";
import HeroSection from "./components/sections/HeroSection";
import QuickNav from "./components/sections/QuickNav";
import XSeriesSection from "./components/sections/XSeriesSection";
import VSeriesSection from "./components/sections/VSeriesSection";
import YSeriesSection from "./components/sections/YSeriesSection";
import TSeriesSection from "./components/sections/TSeriesSection";
import IQooSection from "./components/sections/IQooSection";
import CTASection from "./components/sections/CTASection";
import PriceTable from "./components/sections/PriceTable";
import ProductModal, { Product } from "./components/product/ProductModal";
import ProductListButton from "./components/product/ProductListButton";
import { products } from "./data/products";
import { DarkModeProvider } from "./hooks/useDarkMode";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <DarkModeProvider>
      <Header />
      <ScrollCover />
      <main className="flex-grow">
        <section id="hero" className="min-h-screen">
          <HeroSection />
        </section>
        <section id="quick-nav" className="min-h-screen">
          <QuickNav />
        </section>
        <section id="x-series" className="min-h-screen">
          <XSeriesSection products={products.xSeries} onSelectProduct={setSelectedProduct} />
        </section>
        <section id="v-series" className="min-h-screen">
          <VSeriesSection products={products.vSeries} onSelectProduct={setSelectedProduct} />
        </section>
        <section id="y-series" className="min-h-screen">
          <YSeriesSection products={products.ySeries} onSelectProduct={setSelectedProduct} />
        </section>
        <section id="t-series" className="min-h-screen">
          <TSeriesSection products={products.tSeries} onSelectProduct={setSelectedProduct} />
        </section>
        <section id="iqoo" className="min-h-screen">
          <IQooSection products={products.iqoo} onSelectProduct={setSelectedProduct} />
        </section>
        <section id="price-table" className="min-h-screen">
          <PriceTable />
        </section>
        <section id="cta" className="min-h-screen">
          <CTASection />
        </section>
      </main>
      <Footer />
      <ProductListButton onSelectProduct={setSelectedProduct} />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      <SectionNavigator />
    </DarkModeProvider>
  );
}