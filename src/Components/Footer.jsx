// Footer.jsx

import {
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B1120] text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

      {/* TOP CTA */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 py-14 lg:flex-row lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-300 backdrop-blur-xl">
              🚀 AI Powered Guidance
            </div>

            <h2 className="max-w-3xl text-4xl font-black leading-tight">
              Start Your Journey With{" "}
              <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                SuggestMyCollege
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Compare colleges, predict admissions, discover scholarships,
              explore placements, and get personalized AI career guidance.
            </p>
          </div>

          <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 via-purple-600 to-cyan-500 px-8 py-5 text-sm font-black text-white shadow-2xl shadow-purple-900/40 transition duration-300 hover:scale-105">
            Get Started Free
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-5">
        {/* BRAND */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 via-purple-600 to-cyan-500 shadow-xl">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>

            <div>
              <h3 className="bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400 bg-clip-text text-3xl font-black text-transparent">
                SuggestMyCollege
              </h3>

              <p className="text-sm text-gray-400">
                AI Powered College Discovery
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-md text-base leading-8 text-gray-400">
            India’s smartest AI-powered platform for college discovery,
            admission prediction, career guidance, scholarships, placements,
            rankings, and educational insights.
          </p>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-3 gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <h4 className="text-2xl font-black text-orange-400">
                10K+
              </h4>

              <p className="mt-1 text-sm text-gray-400">
                Colleges
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <h4 className="text-2xl font-black text-purple-400">
                2M+
              </h4>

              <p className="mt-1 text-sm text-gray-400">
                Students
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <h4 className="text-2xl font-black text-cyan-400">
                98%
              </h4>

              <p className="mt-1 text-sm text-gray-400">
                Accuracy
              </p>
            </div>
          </div>
</div>
      {/* SOCIAL ICONS */}
<div className="mt-10 flex items-center gap-4">

  <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold text-gray-300 transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white">
    F
  </button>

  <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold text-gray-300 transition duration-300 hover:-translate-y-1 hover:bg-pink-500 hover:text-white">
    IG
  </button>

  <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold text-gray-300 transition duration-300 hover:-translate-y-1 hover:bg-sky-500 hover:text-white">
    X
  </button>

  <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold text-gray-300 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:text-white">
    IN
  </button>

  <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold text-gray-300 transition duration-300 hover:-translate-y-1 hover:bg-red-500 hover:text-white">
    YT
  </button>

</div><div></div>

        {/* COLUMN 1 */}
        <div>
          <h4 className="mb-6 text-lg font-black text-white">
            Explore
          </h4>

          <div className="space-y-4 text-gray-400">
            <a href="#" className="block transition hover:text-orange-400">
              Top Colleges
            </a>

            <a href="#" className="block transition hover:text-orange-400">
              Courses
            </a>

            <a href="#" className="block transition hover:text-orange-400">
              Exams
            </a>

            <a href="#" className="block transition hover:text-orange-400">
              Rankings
            </a>

            <a href="#" className="block transition hover:text-orange-400">
              Compare Colleges
            </a>

            <a href="#" className="block transition hover:text-orange-400">
              College Predictor
            </a>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 className="mb-6 text-lg font-black text-white">
            Resources
          </h4>

          <div className="space-y-4 text-gray-400">
            <a href="#" className="block transition hover:text-purple-400">
              Scholarships
            </a>

            <a href="#" className="block transition hover:text-purple-400">
              Career Guidance
            </a>

            <a href="#" className="block transition hover:text-purple-400">
              Placement Reports
            </a>

            <a href="#" className="block transition hover:text-purple-400">
              Cutoffs
            </a>

            <a href="#" className="block transition hover:text-purple-400">
              Admission News
            </a>

            <a href="#" className="block transition hover:text-purple-400">
              Study Abroad
            </a>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4 className="mb-6 text-lg font-black text-white">
            Company
          </h4>

          <div className="space-y-4 text-gray-400">
            <a href="#" className="block transition hover:text-cyan-400">
              About Us
            </a>

            <a href="#" className="block transition hover:text-cyan-400">
              Contact
            </a>

            <a href="#" className="block transition hover:text-cyan-400">
              Privacy Policy
            </a>

            <a href="#" className="block transition hover:text-cyan-400">
              Terms & Conditions
            </a>

            <a href="#" className="block transition hover:text-cyan-400">
              Careers
            </a>

            <a href="#" className="block transition hover:text-cyan-400">
              Advertise With Us
            </a>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 py-10 lg:flex-row lg:items-center">
          <div>
            <h3 className="text-2xl font-black">
              Stay Updated
            </h3>

            <p className="mt-2 text-gray-400">
              Get latest admission updates, exam alerts & AI insights.
            </p>
          </div>

          <div className="flex w-full max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-2xl border border-white/10 bg-white/5 px-6 text-white outline-none placeholder:text-gray-500"
            />

            <button className="rounded-2xl bg-gradient-to-r from-orange-500 via-purple-600 to-cyan-500 px-8 py-4 font-bold text-white transition duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 text-sm text-gray-500 lg:flex-row">
          <p>
            © 2026 SuggestMyCollege. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="transition hover:text-orange-400">
              Privacy
            </a>

            <a href="#" className="transition hover:text-orange-400">
              Terms
            </a>

            <a href="#" className="transition hover:text-orange-400">
              Cookies
            </a>

            <a href="#" className="transition hover:text-orange-400">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}