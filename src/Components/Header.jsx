function Header() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">

      {/* ================= TOP BAR ================= */}
      <div className="hidden border-b bg-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm">

          <div className="flex items-center gap-6 text-gray-600">
            <span className="font-medium">
              🎓 India’s Smartest AI College Discovery Platform
            </span>

            <span className="text-gray-300">|</span>

            <span>10,000+ Colleges</span>

            <span className="text-gray-300">|</span>

            <span>AI Predictor</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-medium text-gray-600 transition hover:text-orange-500"
            >
              Write a Review
            </a>

            <a
              href="#"
              className="font-medium text-gray-600 transition hover:text-orange-500"
            >
              Download App
            </a>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* LOGO */}
          <div>
            <h1 className="bg-gradient-to-r from-orange-500 via-purple-700 to-cyan-500 bg-clip-text text-3xl font-black tracking-tight text-transparent">
              SuggestMyCollege
            </h1>

            <p className="text-xs font-medium tracking-wide text-gray-500">
              AI Powered College Predictor
            </p>
          </div>

          {/* NAV LINKS */}
          <div className="hidden items-center gap-8 lg:flex">

            <a
              href="#"
              className="text-sm font-semibold text-gray-700 transition hover:text-orange-500"
            >
              Colleges
            </a>

            <a
              href="#"
              className="text-sm font-semibold text-gray-700 transition hover:text-orange-500"
            >
              Exams
            </a>

            <a
              href="#"
              className="text-sm font-semibold text-gray-700 transition hover:text-orange-500"
            >
              Courses
            </a>

            <a
              href="#"
              className="text-sm font-semibold text-gray-700 transition hover:text-orange-500"
            >
              Compare
            </a>

            <a
              href="#"
              className="text-sm font-semibold text-gray-700 transition hover:text-orange-500"
            >
              Predictors
            </a>

            <a
              href="#"
              className="text-sm font-semibold text-gray-700 transition hover:text-orange-500"
            >
              Scholarships
            </a>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-4">

            <button className="hidden rounded-xl border border-orange-200 px-5 py-2 text-sm font-bold text-orange-600 transition hover:bg-orange-50 md:block">
              Login
            </button>

            <button className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-300 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5B21B6] via-[#6D28D9] to-[#0F172A]"></div>

        {/* GLOW EFFECTS */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-400/30 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"></div>

        {/* CONTENT */}
        <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="text-white">

            {/* BADGE */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-orange-300/30 bg-orange-400/20 px-5 py-3 text-sm font-bold backdrop-blur-xl">
              🚀 AI Based Admission Predictor is Live
            </div>

            {/* HEADING */}
            <h1 className="mb-8 text-5xl font-black leading-tight lg:text-7xl">
              Find Your
              <span className="block bg-gradient-to-r from-orange-300 via-white to-cyan-300 bg-clip-text text-transparent">
                Dream College
              </span>
              in Seconds
            </h1>

            {/* DESCRIPTION */}
            <p className="mb-10 max-w-2xl text-lg leading-8 text-purple-100">
              Discover colleges, compare rankings, predict admissions,
              explore placements, scholarships, fees, and get
              AI-powered career guidance personalized for you.
            </p>

            {/* SEARCH BOX */}
            <div className="mb-8 rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-2xl">

              <div className="flex flex-col gap-4 lg:flex-row">

                <input
                  type="text"
                  placeholder="Search Colleges, Exams, Courses..."
                  className="flex-1 rounded-2xl border-none bg-white px-6 py-5 text-gray-700 outline-none"
                />

                <button className="rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-purple-600 px-10 py-5 font-bold text-white shadow-xl shadow-orange-400/30 transition duration-300 hover:scale-105">
                  Search
                </button>
              </div>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-4">

              <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-lg transition hover:bg-orange-400/20">
                Engineering
              </button>

              <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-lg transition hover:bg-orange-400/20">
                MBA
              </button>

              <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-lg transition hover:bg-orange-400/20">
                Medical
              </button>

              <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-lg transition hover:bg-orange-400/20">
                Law
              </button>

              <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-lg transition hover:bg-orange-400/20">
                Design
              </button>
            </div>

            {/* STATS */}
            <div className="mt-14 flex flex-wrap gap-10">

              <div>
                <h3 className="text-3xl font-black">10K+</h3>
                <p className="text-purple-100">
                  Colleges
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black">2M+</h3>
                <p className="text-purple-100">
                  Students Guided
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black">98%</h3>
                <p className="text-purple-100">
                  Prediction Accuracy
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">

            {/* MAIN CARD */}
            <div className="relative w-full max-w-md rounded-[32px] border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-2xl">

              {/* TOP */}
              <div className="mb-5 flex items-center justify-between">

                <div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Best Match
                  </h2>

                  <p className="text-sm text-gray-500">
                    AI Recommendation
                  </p>
                </div>

                <div className="rounded-2xl bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
                  96% Match
                </div>
              </div>

              {/* IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
                alt="College"
                className="mb-6 h-60 w-full rounded-3xl object-cover"
              />

              {/* INFO */}
              <div className="mb-5 flex items-start justify-between">

                <div>
                  <h3 className="text-3xl font-black">
                    IIT Delhi
                  </h3>

                  <p className="mt-1 text-gray-500">
                    Delhi, India
                  </p>
                </div>

                <div className="rounded-xl bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700">
                  NIRF #2
                </div>
              </div>

              {/* PROGRESS */}
              <div className="mb-6">

                <div className="mb-2 flex items-center justify-between text-sm font-semibold">
                  <span>Admission Probability</span>

                  <span className="text-orange-500">
                    Very High
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-orange-500 via-purple-600 to-cyan-500"></div>
                </div>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4">

                <div className="rounded-2xl bg-slate-50 p-4 text-center">
                  <h4 className="text-xl font-black text-orange-500">
                    ₹25L
                  </h4>

                  <p className="mt-1 text-xs text-gray-500">
                    Avg Package
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 text-center">
                  <h4 className="text-xl font-black text-purple-700">
                    99%
                  </h4>

                  <p className="mt-1 text-xs text-gray-500">
                    Placement
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 text-center">
                  <h4 className="text-xl font-black text-cyan-600">
                    AAA+
                  </h4>

                  <p className="mt-1 text-xs text-gray-500">
                    Rating
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="mt-7 flex gap-4">

                <button className="flex-1 rounded-2xl bg-gradient-to-r from-orange-500 to-purple-600 py-4 font-bold text-white shadow-lg shadow-orange-300 transition duration-300 hover:scale-[1.02]">
                  View Details
                </button>

                <button className="rounded-2xl border border-orange-200 px-5 text-xl text-orange-500 transition hover:bg-orange-50">
                  ❤️
                </button>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -left-8 top-10 hidden rounded-2xl border border-white/20 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl lg:block">

              <p className="text-sm font-bold text-gray-500">
                AI Prediction
              </p>

              <h3 className="mt-1 text-2xl font-black text-orange-500">
                98.2%
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header;