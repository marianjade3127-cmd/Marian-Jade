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
            Programmer Profile
          </h1>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className={`${menuOpen ? "flex" : "hidden"} md:flex gap-6`}>
            <a href="#home" className="hover:text-cyan-400">Home</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#education" className="hover:text-cyan-400">Education</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Home */}
      <section
        id="home"
        className="flex min-h-[85vh] items-center justify-center px-6"
      >
        <div className="max-w-3xl text-center">
          <p className="mb-3 text-cyan-400">Hello, I'm</p>

          <h2 className="text-4xl font-bold sm:text-6xl">
            Your Name
          </h2>

          <p className="mt-5 text-lg text-slate-300">
            3rd Year Information Technology Student
          </p>

          <p className="mt-3 text-slate-400">
            Network Design and Management major | Aspiring IT Professional
          </p>

          <a
            href="#projects"
            className="mt-8 inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            View My Projects
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-cyan-400">About Me</h2>

          <p className="mt-6 leading-8 text-slate-300">
            I am a 3rd year Information Technology student majoring in
            Network Design and Management. I am interested in networking,
            programming, system development, and cybersecurity. I enjoy
            learning new technologies and creating projects that can help
            students and communities.
          </p>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-cyan-400">Education</h2>

          <div className="mt-8 rounded-xl border border-white/10 bg-slate-950 p-6">
            <h3 className="text-xl font-semibold">
              Bachelor of Science in Information Technology
            </h3>

            <p className="mt-2 text-slate-300">
              Nueva Vizcaya State University
            </p>

            <p className="mt-2 text-slate-400">
              Major: Network Design and Management
            </p>

            <p className="mt-2 text-slate-400">
              College Level: 3rd Year
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-cyan-400">Projects</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">
                Participants Registration System
              </h3>
              <p className="mt-3 text-slate-400">
                A system designed to manage participant registration and
                monitoring for college events.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">
                Campus Computer Laboratory Network
              </h3>
              <p className="mt-3 text-slate-400">
                A network design project focused on providing reliable
                connectivity for computer laboratory users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-cyan-400">Contact</h2>

          <div className="mt-6 space-y-3 text-slate-300">
            <p>Email: your-email@example.com</p>
            <p>GitHub: github.com/yourusername</p>
            <p>Location: Nueva Vizcaya, Philippines</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-6 text-center text-slate-500">
        © 2026 Programmer Profile. All rights reserved.
      </footer>
    </main>
  );
}
