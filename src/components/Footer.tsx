import Image from "next/image";
import { FOOTER } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-3">
              <Image
                src="/logo-site.png"
                alt="Ayahubs"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              {FOOTER.tagline}
            </p>
          </div>

          {/* Link columns */}
          {FOOTER.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-semibold text-slate-900 mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
                      target={link.target || "_self"}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 text-xs text-slate-400">
          © {FOOTER.year} {FOOTER.logo}, All rights reserved.
        </div>
      </div>
    </footer>
  );
}
