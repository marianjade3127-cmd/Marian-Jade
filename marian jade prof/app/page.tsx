"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-cyan-400">
            Marian Jade
          </h1>

          <button
            className="text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col gap-4 md:flex md:flex-row md:gap-6`}
          >
            <a href="#home" className="hover:text-cyan-400">Home</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#education" className="hover:text-cyan-400">Education</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" class
