"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const navigation = [
  { name: "首页", nameEn: "Home", href: "/" },
  { name: "核心平台", nameEn: "Core Platform", href: "/platform" },
  { name: "技术能力", nameEn: "Technology", href: "/technology" },
  { name: "行业与网络", nameEn: "Industries & Network", href: "/industries" },
  { name: "关于九烨", nameEn: "About", href: "/about" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <Logo size={36} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm transition-colors rounded-lg ${
                    isActive
                      ? "text-white bg-zinc-800/70"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                  }`}
                >
                  <span className="block">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/about#contact"
              className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium text-zinc-950 bg-white hover:bg-zinc-100 rounded-lg transition-colors"
            >
              商务咨询
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 sm:p-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 active:bg-zinc-700/50 rounded-lg transition-colors touch-target"
            aria-label={isOpen ? "关闭菜单" : "打开菜单"}
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden border-t border-zinc-800/50 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100 py-3 sm:py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="flex flex-col space-y-0.5 sm:space-y-1">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 sm:px-4 py-3 sm:py-4 rounded-lg transition-all duration-200 touch-target ${
                    isActive
                      ? "text-white bg-zinc-800/70"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/50 active:bg-zinc-800/70"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="block font-medium text-sm sm:text-base">{item.name}</span>
                  <span className="text-[10px] sm:text-xs text-zinc-600">{item.nameEn}</span>
                </Link>
              );
            })}
            <div className="pt-3 sm:pt-4 px-3 sm:px-4">
              <Link
                href="/about#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 sm:px-5 py-3 sm:py-4 text-center text-sm sm:text-base font-medium text-zinc-950 bg-white hover:bg-zinc-100 active:bg-zinc-200 rounded-lg transition-colors touch-target"
              >
                商务咨询
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
