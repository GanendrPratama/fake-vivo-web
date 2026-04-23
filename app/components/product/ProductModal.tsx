"use client";

import { useState } from "react";

export interface Product {
  name: string;
  price: string;
  specs: string;
  description: string;
  image: string;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-surface border-4 border-on-surface w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-on-surface text-surface p-4 flex justify-between items-center sticky top-0">
          <h2 className="font-headline-lg uppercase">{product.name}</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 border-2 border-surface flex items-center justify-center hover:bg-surface hover:text-on-surface transition-colors"
          >
            ✕
          </button>
        </div>
        
        {/* Image */}
        <div className="bg-surface-container p-8 flex justify-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="max-h-48 object-contain"
          />
        </div>
        
        {/* Details */}
        <div className="p-6 flex flex-col gap-4">
          <div className="border-b-4 border-on-surface pb-4">
            <span className="font-display-2xl text-primary">{product.price}</span>
          </div>
          
          <div>
            <h3 className="font-label-bold uppercase mb-2">Spesifikasi</h3>
            <p className="font-body-md">{product.specs}</p>
          </div>
          
          <div>
            <h3 className="font-label-bold uppercase mb-2">Deskripsi</h3>
            <p className="font-body-md opacity-80">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}