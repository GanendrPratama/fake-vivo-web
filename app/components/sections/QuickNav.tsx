const quickNavItems = [
  { href: "#x-series", label: "X Series", color: "bg-secondary", id: "x-series" },
  { href: "#v-series", label: "V Series", color: "bg-[#d97706]", id: "v-series" },
  { href: "#y-series", label: "Y Series", color: "bg-[#15803d]", id: "y-series" },
  { href: "#t-series", label: "T Series", color: "bg-primary", id: "t-series" },
];

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, targetId: string, href: string) {
  e.preventDefault();
  window.dispatchEvent(new CustomEvent("nav-scroll", { 
    detail: { href: targetId, target: targetId } 
  }));
}

export default function QuickNav() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4">
      {quickNavItems.map((item) => (
        <a 
          key={item.href}
          href={item.href}
          onClick={(e) => handleNavClick(e, item.id, item.href)}
          className={`${item.color} border-r-4 border-b-4 md:border-b-0 border-on-surface p-6 flex items-center justify-between hover:opacity-90 transition-opacity group cursor-pointer`}
        >
          <h2 className="font-headline-md uppercase text-white">
            {item.label}
          </h2>
          <span className="font-label-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
            →
          </span>
        </a>
      ))}
    </section>
  );
}