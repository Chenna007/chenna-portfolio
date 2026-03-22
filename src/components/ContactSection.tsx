import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Let's Bring Your Ideas to Life</h2>
      <p className="text-white/70 text-lg mb-10">Ready to elevate your brand? Drop me a message and let's start building something amazing together.</p>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
        <a
          href="mailto:ckrstudiodesign@gmail.com?subject=Let's%20Connect&body=Hi%20Keshava,%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
          className="px-8 py-4 bg-white text-black rounded-2xl font-semibold text-lg hover:bg-blue-500 hover:text-white transition-colors"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/chenna-keshava-10may2002/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 glass border border-white/10 rounded-2xl font-semibold text-lg text-white hover:bg-white/10 transition-colors"
        >
          LinkedIn
        </a>
      </div>
      {/* Email address is intentionally hidden for privacy */}
    </section>
  );
}
