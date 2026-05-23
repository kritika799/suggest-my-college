// PersonalizedAdmissionSuite.jsx

import {
  Brain,
  Sparkles,
  GraduationCap,
  LineChart,
  ShieldCheck,
  ArrowRight,
  Bot,
  Trophy,
} from "lucide-react";

const features = [
  {
    title: "AI Career Mapping",
    desc: "Get career recommendations based on your interests, skills, and academic strengths.",
    icon: Brain,
    gradient:
      "from-orange-500 via-orange-400 to-purple-600",
    bg: "bg-orange-50",
  },
  {
    title: "College Match Engine",
    desc: "Discover colleges where your profile has the highest success probability.",
    icon: GraduationCap,
    gradient:
      "from-cyan-500 via-sky-500 to-purple-600",
    bg: "bg-cyan-50",
  },
  {
    title: "Admission Predictor",
    desc: "Predict admission chances using AI trained on previous year trends.",
    icon: LineChart,
    gradient:
      "from-purple-600 via-fuchsia-500 to-orange-500",
    bg: "bg-purple-50",
  },
  {
    title: "24x7 AI Counselor",
    desc: "Ask doubts about colleges, placements, scholarships, and careers instantly.",
    icon: Sparkles,
    gradient:
      "from-orange-500 via-pink-500 to-purple-600",
    bg: "bg-pink-50",
  },
];

export default function PersonalizedAdmissionSuite() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#F5F3FF] to-[#EEF6FF] py-28">

      {/* BACKGROUND GLOWS */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-300/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADING */}
        <div className="mx-auto mb-20 max-w-4xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-2 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-orange-500" />

            <span className="text-sm font-bold text-orange-600">
              Personalized AI Experience
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">

            Your{" "}

            <span className="bg-gradient-to-r from-orange-500 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Personalized
            </span>

            <br />

            Admission Suite
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            More than just college listings. Get AI-driven recommendations,
            career guidance, admission predictions, scholarships, and
            personalized insights designed specifically for your future.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

          {/* LEFT PREMIUM CARD */}
          <div className="lg:col-span-5">

            <div className="relative overflow-hidden rounded-[36px] border border-white/40 bg-white/70 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl">

              {/* INNER GLOW */}
              <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-orange-300/20 blur-3xl"></div>

              {/* HEADER */}
              <div className="relative z-10 flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-orange-500 via-purple-600 to-cyan-500 text-white shadow-xl shadow-purple-300">
                    <Bot className="h-8 w-8" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500">
                      AI Dashboard
                    </p>

                    <h3 className="text-3xl font-black text-slate-900">
                      Student DNA
                    </h3>
                  </div>
                </div>

                <div className="rounded-2xl bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
                  LIVE AI
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="relative z-10 mt-8 text-lg leading-8 text-slate-600">
                Your personalized student profile evolves with every search,
                exam score, and preference to give smarter recommendations.
              </p>

              {/* AI DASHBOARD */}
              <div className="relative z-10 mt-10 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#111827] p-6 shadow-2xl">

                {/* TOP */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5">

                  <div>
                    <p className="text-sm text-purple-200">
                      AI Profile Match
                    </p>

                    <h4 className="mt-1 text-2xl font-black text-white">
                      Computer Science
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-emerald-400/20 px-4 py-2 text-sm font-bold text-emerald-300">
                    94% Match
                  </div>
                </div>

                {/* PROGRESS */}
                <div className="mt-8 space-y-6">

                  {[
                    ["Career Fit", "95%"],
                    ["Admission Chance", "89%"],
                    ["Scholarship Probability", "82%"],
                  ].map(([title, value]) => (
                    <div key={title}>

                      <div className="mb-2 flex items-center justify-between">

                        <span className="text-sm font-semibold text-purple-100">
                          {title}
                        </span>

                        <span className="text-sm font-bold text-orange-300">
                          {value}
                        </span>
                      </div>

                      <div className="h-3 overflow-hidden rounded-full bg-white/10">

                        <div
                          className="h-full rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-cyan-400"
                          style={{ width: value }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* BOTTOM STATS */}
                <div className="mt-8 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                    <p className="text-sm text-purple-200">
                      Best Match
                    </p>

                    <h5 className="mt-2 text-xl font-black text-white">
                      IIT Bombay
                    </h5>

                    <p className="mt-1 text-sm text-cyan-300">
                      Top Engineering Fit
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                    <p className="text-sm text-purple-200">
                      Recommended
                    </p>

                    <h5 className="mt-2 text-xl font-black text-white">
                      Data Science
                    </h5>

                    <p className="mt-1 text-sm text-orange-300">
                      Fast Growing Career
                    </p>
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <button className="relative z-10 mt-8 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 via-purple-600 to-cyan-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-purple-300 transition duration-300 hover:scale-105">

                Explore AI Dashboard

                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-7">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/70 p-8 shadow-[0_15px_60px_rgba(15,23,42,0.06)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(15,23,42,0.12)]"
                >

                  {/* HOVER GLOW */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition duration-500 group-hover:opacity-10`}
                  ></div>

                  {/* ICON */}
                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-3xl ${feature.bg} shadow-sm`}
                  >
                    <Icon className="h-8 w-8 text-slate-900" />
                  </div>

                  {/* TITLE */}
                  <h3 className="relative mt-7 text-3xl font-black text-slate-900">
                    {feature.title}
                  </h3>

                  {/* DESC */}
                  <p className="relative mt-5 leading-8 text-slate-600">
                    {feature.desc}
                  </p>

                  {/* BUTTON */}
                  <button className="relative mt-8 flex items-center gap-2 text-sm font-black text-orange-500 transition group-hover:gap-4">

                    Learn More

                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {/* FLOATING BADGE */}
                  {index === 0 && (
                    <div className="absolute right-5 top-5 rounded-full bg-orange-100 px-4 py-2 text-xs font-black text-orange-600">
                      MOST USED
                    </div>
                  )}

                  {index === 1 && (
                    <div className="absolute right-5 top-5 rounded-full bg-cyan-100 px-4 py-2 text-xs font-black text-cyan-600">
                      SMART AI
                    </div>
                  )}

                  {index === 2 && (
                    <div className="absolute right-5 top-5 rounded-full bg-purple-100 px-4 py-2 text-xs font-black text-purple-600">
                      98% ACCURATE
                    </div>
                  )}

                  {index === 3 && (
                    <div className="absolute right-5 top-5 rounded-full bg-pink-100 px-4 py-2 text-xs font-black text-pink-600">
                      24x7 ACTIVE
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM BANNER */}
        <div className="relative mt-20 overflow-hidden rounded-[36px] bg-gradient-to-r from-orange-500 via-purple-700 to-cyan-500 p-10 text-white shadow-2xl">

          <div className="absolute right-0 top-0 h-full w-1/2 bg-white/10 blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">

                <Trophy className="h-4 w-4" />

                <span className="text-sm font-bold">
                  Trusted by 2M+ Students
                </span>
              </div>

              <h3 className="max-w-3xl text-4xl font-black leading-tight">
                Start Your AI Powered Admission Journey Today
              </h3>

              <p className="mt-4 max-w-2xl text-lg text-purple-100">
                Compare colleges, predict admissions, discover scholarships,
                and build your future with intelligent guidance.
              </p>
            </div>

            <button className="rounded-2xl bg-white px-8 py-5 text-sm font-black text-slate-900 shadow-2xl transition duration-300 hover:scale-105">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}