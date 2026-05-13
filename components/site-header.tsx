"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, Search, ChevronDown, Menu, X } from "lucide-react";
import { categories } from "@/data/calculators";

const SITE_NAME = "CalcAdvisor";

// Quick-access categories shown as direct links in desktop nav
const QUICK_CATS = ["financial", "health", "math", "tax"];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const quickCategories = categories.filter((c) =>
    QUICK_CATS.includes(c.slug)
  );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-slate-900"
          onClick={() => setMobileOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
            <Calculator className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-lg">{SITE_NAME}</span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 text-sm text-slate-600 md:flex"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Home
          </Link>

          {/* All Categories dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              All Categories
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-150 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                <div className="grid grid-cols-1 gap-0.5">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/categories/${cat.slug}`}
                      className="rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick category links */}
          {quickCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {cat.name}
            </Link>
          ))}

          <Link
            href="/about"
            className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
          >
            About
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link
            href="/#search"
            className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 sm:inline-flex"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search tools
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden">
          <div className="mt-3 space-y-1">
            <Link
              href="/"
              className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* All 12 categories grid */}
          <div className="mt-3 border-t border-slate-100 pt-3">
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              All Categories
            </p>
            <div className="grid grid-cols-2 gap-1">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Search CTA */}
          <div className="mt-3 border-t border-slate-100 pt-3">
            <Link
              href="/#search"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 py-2.5 text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              <Search className="h-4 w-4" aria-hidden="true" />
              Search tools
            </Link>
          </div>
        </div>
      )}
    </header>
  );
          }
