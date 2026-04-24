export interface Product {
  name: string;
  price: string;
  specs: string;
  description: string;
  image: string;
}

export const products = {
  xSeries: [
    {
      name: "X300 Pro",
      price: "Rp 18.999.000",
      specs: "Dimensity 9500, 6.78\" LTPO AMOLED 144Hz, 200MP, 7100mAh, 90W+40W",
      description: "Flagship dengan kamera 200MP untuk fotografi profesional",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/X300_Pro.png",
    },
    {
      name: "X300",
      price: "Rp 14.999.000",
      specs: "Dimensity 9400+, 6.67\" AMOLED, 50MP triple, 6200mAh",
      description: "Flagship dengan Zeiss optics",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/X300.png",
    },
    {
      name: "X200 FE",
      price: "Rp 13.999.000",
      specs: "LTPO AMOLED 6.31\", Dimensity 9300+, 50MP",
      description: "Compact flagship",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/X200_FE.png",
    },
    {
      name: "X80",
      price: "Rp 11.999.000",
      specs: "Dimensity 9000, 50MP IMX866, 80W, ZEISS",
      description: "Flagship dengan ZEISS optics",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/X80.png",
    },
    {
      name: "X Fold5",
      price: "Rp 24.999.000",
      specs: "Foldable, Snapdragon 8 series",
      description: "Hp lipat premium",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/X_Fold5.png",
    },
  ] as Product[],
  
  vSeries: [
    {
      name: "V70",
      price: "Rp 8.999.000",
      specs: "Snapdragon 7 Gen 4, 6.59\" AMOLED 120Hz, 50MP, 6500mAh",
      description: "Best mid-range Vivo",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/V70.png",
    },
    {
      name: "V70 FE",
      price: "Rp 7.199.000",
      specs: "Mid-range specs, good performance",
      description: "Affordable V70 variant",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/V70_FE.png",
    },
    {
      name: "V60",
      price: "Rp 6.999.000",
      specs: "AMOLED 120Hz, Dimensity, 50MP",
      description: "Elegant mid-range",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/V60.png",
    },
    {
      name: "V27 5G",
      price: "Rp 5.999.000",
      specs: "Dimensity 7200, 6.78\" FHD+, 50MP OIS, 66W",
      description: "5G dengan Aura Light",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/V27_5G.png",
    },
    {
      name: "V25 Pro",
      price: "Rp 5.999.000",
      specs: "Dimensity 1300, 6.56\" AMOLED, 64MP OIS",
      description: "Best camera in class",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/V25_Pro.png",
    },
  ] as Product[],

  ySeries: [
    {
      name: "Y31d Pro",
      price: "Mulai Rp 4.3 juta",
      specs: "Dimensity 7300, 7000mAh, IP68, 50MP",
      description: "Battery king",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/Y31d_Pro.png",
    },
    {
      name: "Y05",
      price: "Rp 1.899.000",
      specs: "Entry-level",
      description: "Most affordable",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/Y05.png",
    },
    {
      name: "Y36",
      price: "Rp 2.999.000",
      specs: "Snapdragon 680, 6.64\" FHD+, 50MP, 5000mAh",
      description: "Dynamic Glass design",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/Y36.png",
    },
    {
      name: "Y400",
      price: "Rp 3.499.000",
      specs: "AMOLED, decent battery",
      description: "Balanced option",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/Y400.png",
    },
  ] as Product[],

  tSeries: [
    {
      name: "T4 Pro",
      price: "Rp 5.999.000",
      specs: "AMOLED 6.77\", powerful gaming processor",
      description: "Ultimate gaming",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/T4_Pro.png",
    },
    {
      name: "T4 Lite",
      price: "Rp 3.999.000",
      specs: "Affordable gaming",
      description: "Budget gaming",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/T4_Lite.png",
    },
    {
      name: "T4R",
      price: "Rp 4.499.000",
      specs: "Gaming-focused",
      description: "Sporty design",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/T4R.png",
    },
    {
      name: "Y6t 5G",
      price: "Rp 3.299.000",
      specs: "Snapdragon 4 Gen 2, 6500mAh, 120Hz",
      description: "New 5G option",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/Y6t_5G.png",
    },
  ] as Product[],

  iqoo: [
    {
      name: "iQOO Z10 Turbo Plus",
      price: "Rp 7.999.000",
      specs: "High-end gaming, fast charging",
      description: "Extreme performance",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/iQOO_Z10_Turbo_Plus.png",
    },
    {
      name: "iQOO Z10R",
      price: "Rp 5.999.000",
      specs: "Gaming capabilities",
      description: "Powerful gaming",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/iQOO_Z10R.png",
    },
    {
      name: "iQOO Pad5",
      price: "Rp 11.999.000",
      specs: "Gaming tablet",
      description: "Immersive gaming",
      image: "https://ganendrpratama.github.io/fake-vivo-web/images/phones/iQOO_Pad5.png",
    },
  ] as Product[],
};