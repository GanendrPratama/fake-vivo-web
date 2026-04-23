const footerLinks = {
    "Products": [
      { href: "#x-series", label: "X Series" },
      { href: "#v-series", label: "V Series" },
      { href: "#y-series", label: "Y Series" },
      { href: "#t-series", label: "T Series" },
      { href: "#iqoo", label: "iQOO" },
    ],
    "Company": [
      { href: "#", label: "Philosophy" },
      { href: "#", label: "Support" },
      { href: "#", label: "Careers" },
    ],
  };

export default function Footer() {
  return (
    <footer className="border-t-4 border-on-surface bg-surface-container-low mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 py-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
          <div className="font-headline-lg text-primary font-black">
            VIVO
          </div>
          <p className="font-body-md opacity-70">© 2024 VIVO INDONESIA.<br />MATHEMATICAL PRECISION.</p>
        </div>
        
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="col-span-6 md:col-span-4 lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-label-bold uppercase opacity-100">{title}</h4>
            {links.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="font-label-bold uppercase opacity-70 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}