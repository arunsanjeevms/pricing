const PACKAGE_CONTENT = {
  starter: {
    pillLabel: "Starter",
    name: "Starter Package",
    badge: "Economic",
    price: "₹4,999",
    tagline: "For Basic Online Presence & Local Visibility",
    intro: "A focused launch package to establish your digital presence and capture local leads.",
    quickHighlights: [
      "1 Page High-Converting Landing Page",
      "Mobile-First Responsive Design",
      "WhatsApp API Integration (Direct Lead Capture)",
    ],
    features: [
      "Basic On-Page SEO (Google Indexing Setup)",
      "Fast Loading Optimization",
      "Call-to-Action Focused UI (Lead Conversion Design)",
    ],
    outcome: "Get discovered online + start receiving customer inquiries",
    trendCaption: "Projected weekly enquiry trend after launch.",
    channelCaption: "Expected lead source split.",
    trendLabels: ["W1", "W2", "W3", "W4", "W5", "W6"],
    trendValues: [7, 10, 13, 16, 20, 24],
    channelLabels: ["Search", "WhatsApp", "Calls"],
    channelValues: [35, 45, 20],
    demoUrl: "https://poorvi.triospark.in",
    accentHex: "#10b981",
    badgeClass: "border-emerald-400/40 bg-emerald-500/20 text-emerald-200",
    priceClass: "text-emerald-300",
    iconClass: "text-emerald-300",
    primaryButtonClass: "bg-emerald-600 text-white hover:bg-emerald-700",
  },
  growth: {
    pillLabel: "Growth",
    name: "Growth Package",
    badge: "Top Selling",
    price: "₹9,999",
    tagline: "For Customer Acquisition & Brand Visibility",
    intro: "Built for businesses aiming to increase trust and convert more visitors into customers.",
    quickHighlights: [
      "4-5 Pages Business Website",
      "Conversion-Focused UI/UX Design",
      "WhatsApp Chat + Click-to-Call Integration",
    ],
    features: [
      "Google Maps & Local SEO Optimization",
      "Lead Capture Forms (Enquiry Funnel Setup)",
      "Performance Optimization (Speed + Mobile Score)",
      "1 Month Support & Optimization",
    ],
    outcome: "Increase walk-ins, calls, and customer trust",
    trendCaption: "Projected monthly lead growth during the first quarter.",
    channelCaption: "Primary channel performance mix.",
    trendLabels: ["M1", "M2", "M3", "M4", "M5", "M6"],
    trendValues: [20, 27, 33, 42, 49, 57],
    channelLabels: ["Organic", "WhatsApp", "Referral"],
    channelValues: [40, 38, 22],
    demoUrl: "https://zionhr.in",
    accentHex: "#0ea5e9",
    badgeClass: "border-sky-400/40 bg-sky-500/20 text-sky-200",
    priceClass: "text-sky-300",
    iconClass: "text-sky-300",
    primaryButtonClass: "bg-sky-600 text-white hover:bg-sky-700",
  },
  pro: {
    pillLabel: "Pro Business",
    name: "Pro Business Package",
    badge: "Business Intelligence",
    price: "₹19,999",
    tagline: "For Scaling Business & Lead Generation",
    intro: "A scale-ready package designed for stronger brand positioning and consistent lead flow.",
    quickHighlights: [
      "6-10 Pages Custom Website",
      "Advanced UI/UX (Brand Positioning Design)",
      "Dynamic Content Management (Admin Panel)",
    ],
    features: [
      "Advanced SEO Setup (Keyword + Metadata Optimization)",
      "Lead Funnel System (Forms + WhatsApp Automation)",
      "Speed Optimization + Core Web Vitals Focus",
      "3 Months Technical Support",
    ],
    outcome: "Consistent lead generation + strong online brand authority",
    trendCaption: "Projected qualified lead trend after optimization cycles.",
    channelCaption: "Lead mix for multi-channel growth.",
    trendLabels: ["M1", "M2", "M3", "M4", "M5", "M6"],
    trendValues: [36, 45, 58, 69, 81, 96],
    channelLabels: ["Organic", "Paid", "Automation"],
    channelValues: [34, 29, 37],
    demoUrl: "https://afdc.co.in",
    accentHex: "#d946ef",
    badgeClass: "border-fuchsia-400/40 bg-fuchsia-500/20 text-fuchsia-200",
    priceClass: "text-fuchsia-300",
    iconClass: "text-fuchsia-300",
    primaryButtonClass: "bg-fuchsia-600 text-white hover:bg-fuchsia-700",
  },
  ecommerce: {
    pillLabel: "E-Commerce",
    name: "E-Commerce Package",
    badge: "Top Selling",
    price: "₹29,999+",
    tagline: "For Revenue Generation & Online Sales",
    intro: "A commerce-focused package to build a smooth shopping flow and maximize online sales.",
    quickHighlights: [
      "Product Catalog System",
      "Secure Payment Gateway Integration (UPI / Razorpay)",
      "Cart + Checkout Optimization (Conversion Flow)",
    ],
    features: [
      "ERP Management",
      "CRM Management",
      "Inventory Management",
      "Payroll Management",
      "Order & Inventory Management Dashboard",
      "Customer Data & Sales Tracking",
      "Performance Optimization (Fast Checkout Experience)",
    ],
    outcome: "Turn your business into a 24/7 revenue machine",
    trendCaption: "Projected monthly revenue momentum post-launch.",
    channelCaption: "Expected order source distribution.",
    trendLabels: ["M1", "M2", "M3", "M4", "M5", "M6"],
    trendValues: [55, 73, 88, 112, 138, 166],
    channelLabels: ["Direct", "Search", "Ads"],
    channelValues: [31, 36, 33],
    demoUrl: "https://www.natrilnaturals.com",
    accentHex: "#f43f5e",
    badgeClass: "border-rose-400/40 bg-rose-500/20 text-rose-200",
    priceClass: "text-rose-300",
    iconClass: "text-rose-300",
    primaryButtonClass: "bg-rose-600 text-white hover:bg-rose-700",
  },
};

const PILL_BASE_CLASS =
  "inline-flex w-full items-center justify-center rounded-full border px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.12em] transition sm:w-auto";
const PILL_ACTIVE_CLASS =
  "border-violetBrand bg-violetBrand text-white shadow-[0_8px_24px_-12px_rgba(139,28,249,0.9)]";
const PILL_INACTIVE_CLASS =
  "border-borderline bg-white/[0.02] text-zinc-300 hover:border-violetBrand/60 hover:text-violet-200";

function renderPricingWithChart(mountNode) {
  if (!mountNode) return;

  mountNode.innerHTML = `
    <div class="relative mx-auto w-full max-w-7xl px-3 py-8 sm:px-6 sm:py-10 lg:py-14">
      <div class="mx-auto mb-8 max-w-3xl text-center">
        <p class="inline-flex items-center rounded-full border border-violetBrand/40 bg-violetBrand/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-violet-200">
          Trio's Spark IT Solutions
        </p>
        <h1 class="mt-4 font-headline text-[clamp(1.85rem,8vw,3rem)] font-extrabold leading-tight tracking-tight text-white">
          <span
            data-headline-rotator
            data-no-text-load
            class="headline-rotator headline-visible"
          ></span>
        </h1>
        <p class="mt-4 text-sm text-zinc-400 sm:text-base">
          Choose your package with confidence using clear deliverables and projected growth signals.
        </p>
        <div class="mt-5 flex items-center justify-center">
          <p
            data-quote-rotator
            data-no-text-load
            class="quote-roller quote-visible max-w-2xl text-sm font-medium text-violet-100 sm:text-base"
          ></p>
        </div>
      </div>

      <section id="packageSelector" class="mx-auto mb-5 max-w-6xl px-1">
        <div class="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center">
          <button type="button" data-package-pill="starter">Starter</button>
          <button type="button" data-package-pill="growth">Growth</button>
          <button type="button" data-package-pill="pro">Pro Business</button>
          <button type="button" data-package-pill="ecommerce">E-Commerce</button>
        </div>
      </section>

      <section data-package-shell class="bg-panel grid min-w-0 overflow-hidden rounded-xl border border-borderline transition duration-200 ease-out sm:rounded-2xl md:grid-cols-6">
        <div class="flex min-w-0 flex-col justify-between border-b border-borderline p-4 sm:p-6 md:col-span-2 md:border-r md:border-b-0">
          <div class="space-y-4">
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <h2 data-plan-name class="text-2xl font-semibold text-white break-words"></h2>
                <span data-plan-badge class="inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]"></span>
              </div>
              <span data-plan-price class="my-3 block text-3xl font-bold sm:text-4xl"></span>
              <p data-plan-tagline class="text-sm text-zinc-400 break-words"></p>
            </div>

            <p data-plan-intro class="text-sm text-zinc-300 break-words"></p>

            <a
              data-primary-cta
              href="#"
              target="_blank"
              rel="noreferrer"
              class="inline-flex min-h-11 w-full max-w-full items-center justify-center rounded-md px-4 py-2 text-center text-sm font-semibold leading-tight break-words transition"
            >
              Start Package
            </a>

            <div class="my-2 h-px w-full bg-borderline"></div>

            <ul data-quick-list class="space-y-3 text-sm text-zinc-300 break-words"></ul>
          </div>
        </div>

        <div class="z-10 grid min-w-0 gap-6 p-4 sm:p-6 md:col-span-4 lg:grid-cols-2">
          <div class="space-y-4">
            <article class="rounded-xl border border-borderline bg-white/[0.02] p-3 shadow-[0_12px_30px_-24px_rgba(139,28,249,0.9)]">
              <header class="border-b border-borderline pb-3">
                <h3 class="text-lg font-semibold text-white">Lead Growth Projection</h3>
                <p data-trend-caption class="text-xs text-zinc-400 break-words"></p>
              </header>
              <div class="h-44 pt-3 sm:h-36">
                <canvas data-trend-chart class="h-full w-full"></canvas>
              </div>
            </article>

            <article class="rounded-xl border border-borderline bg-white/[0.02] p-3">
              <header class="border-b border-borderline pb-3">
                <h3 class="text-lg font-semibold text-white">Channel Mix</h3>
                <p data-channel-caption class="text-xs text-zinc-400 break-words"></p>
              </header>
              <div class="h-40 pt-3 sm:h-32">
                <canvas data-channel-chart class="h-full w-full"></canvas>
              </div>
            </article>
          </div>

          <div class="relative w-full min-w-0">
            <p class="text-sm font-semibold text-white">Everything included in this package:</p>
            <ul data-feature-list class="mt-4 space-y-3 text-sm text-zinc-300 break-words"></ul>

            <div class="mt-8">
              <a data-demo-cta href="#" target="_blank" rel="noreferrer" class="inline-flex h-11 w-full max-w-full items-center justify-center rounded-md border border-borderline px-3 text-center text-sm font-semibold leading-tight break-words text-white transition hover:border-zinc-500">
                Demo Page Link
              </a>
            </div>

            <div class="mt-5 rounded-lg border border-violetBrand/30 bg-violetBrand/10 p-3">
              <p class="text-xs font-semibold uppercase tracking-wide text-violet-200">Expected Outcome</p>
              <p data-plan-outcome class="mt-1 text-sm text-violet-100 break-words"></p>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-6 rounded-2xl border border-violetBrand/30 bg-panel p-4 sm:p-6">
        <div>
          <h3 class="text-xl font-semibold text-white">Growth Add-Ons (High Profit Zone)</h3>
        </div>
        <div class="mt-5 grid gap-3 md:grid-cols-2">
          <div class="flex flex-col gap-3 rounded-lg border border-borderline bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between">
            <p class="flex min-w-0 items-center gap-2 text-sm text-zinc-200"><i data-lucide="sparkles" class="h-4 w-4 shrink-0 text-violet-300"></i><span class="break-words">Domain + Hosting (Cloud Deployment)</span></p>
            <span class="shrink-0 text-sm font-semibold text-violet-200 sm:text-right">&#8377;3,500/year</span>
          </div>
          <div class="flex flex-col gap-3 rounded-lg border border-borderline bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between">
            <p class="flex min-w-0 items-center gap-2 text-sm text-zinc-200"><i data-lucide="sparkles" class="h-4 w-4 shrink-0 text-violet-300"></i><span class="break-words">Google Business Profile Optimization</span></p>
            <span class="shrink-0 text-sm font-semibold text-violet-200 sm:text-right">&#8377;1,500</span>
          </div>
        </div>
      </section>

      <section class="mt-6 rounded-2xl border border-borderline bg-panel p-4 sm:p-6">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 class="text-xl font-semibold text-white">Contact Us</h3>
            <p class="mt-1 text-sm text-zinc-400">For quick support and consultation, reach us on WhatsApp or call directly.</p>
          </div>
          <div class="grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            <a href="https://wa.me/919492633000" target="_blank" rel="noreferrer" class="inline-flex h-11 w-full min-w-0 items-center justify-center gap-2 rounded-md border border-emerald-500/40 bg-emerald-500/15 px-3 text-center text-sm font-semibold leading-tight break-words text-emerald-200 transition hover:bg-emerald-500/25">
              <i data-lucide="message-circle" class="h-4 w-4"></i>
              WhatsApp 9492633000
            </a>
            <a href="tel:+919492633000" class="inline-flex h-11 w-full min-w-0 items-center justify-center gap-2 rounded-md border border-sky-500/40 bg-sky-500/15 px-3 text-center text-sm font-semibold leading-tight break-words text-sky-200 transition hover:bg-sky-500/25">
              <i data-lucide="phone-call" class="h-4 w-4"></i>
              Call 9492633000
            </a>
          </div>
        </div>
      </section>
    </div>
  `;

  initHeadlineRotator(mountNode);
  initRollingQuotes(mountNode);
  initPackageExperience(mountNode);
  initTextLoadAnimations(mountNode);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initPackageExperience(rootNode) {
  const trendChart = createTrendChart(rootNode.querySelector("[data-trend-chart]"));
  const channelChart = createChannelChart(rootNode.querySelector("[data-channel-chart]"));
  const pills = rootNode.querySelectorAll("[data-package-pill]");
  const shellNode = rootNode.querySelector("[data-package-shell]");

  const applyPackage = (packageKey, animate = true) => {
    const packageContent = PACKAGE_CONTENT[packageKey] || PACKAGE_CONTENT.starter;

    pills.forEach((pill) => {
      const isActive = pill.dataset.packagePill === packageKey;
      pill.className = `${PILL_BASE_CLASS} ${isActive ? PILL_ACTIVE_CLASS : PILL_INACTIVE_CLASS}`;
      pill.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    if (animate && shellNode && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      shellNode.classList.add("opacity-80", "translate-y-1");
      window.setTimeout(() => {
        shellNode.classList.remove("opacity-80", "translate-y-1");
      }, 170);
    }

    const planNameNode = rootNode.querySelector("[data-plan-name]");
    const planBadgeNode = rootNode.querySelector("[data-plan-badge]");
    const planPriceNode = rootNode.querySelector("[data-plan-price]");
    const planTaglineNode = rootNode.querySelector("[data-plan-tagline]");
    const planIntroNode = rootNode.querySelector("[data-plan-intro]");
    const planOutcomeNode = rootNode.querySelector("[data-plan-outcome]");
    const trendCaptionNode = rootNode.querySelector("[data-trend-caption]");
    const channelCaptionNode = rootNode.querySelector("[data-channel-caption]");
    const primaryCtaNode = rootNode.querySelector("[data-primary-cta]");
    const demoCtaNode = rootNode.querySelector("[data-demo-cta]");
    const quickListNode = rootNode.querySelector("[data-quick-list]");
    const featureListNode = rootNode.querySelector("[data-feature-list]");

    planNameNode.textContent = packageContent.name;
    planBadgeNode.textContent = packageContent.badge;
    planBadgeNode.className = `inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${packageContent.badgeClass}`;
    planPriceNode.textContent = packageContent.price;
    planPriceNode.className = `my-3 block text-3xl font-bold sm:text-4xl ${packageContent.priceClass}`;
    planTaglineNode.textContent = packageContent.tagline;
    planIntroNode.textContent = packageContent.intro;
    planOutcomeNode.textContent = packageContent.outcome;
    trendCaptionNode.textContent = packageContent.trendCaption;
    channelCaptionNode.textContent = packageContent.channelCaption;

    primaryCtaNode.textContent = `Start ${packageContent.pillLabel}`;
    primaryCtaNode.className = `inline-flex min-h-11 w-full max-w-full items-center justify-center rounded-md px-4 py-2 text-center text-sm font-semibold leading-tight break-words transition ${packageContent.primaryButtonClass}`;
    primaryCtaNode.href = `https://wa.me/919492633000?text=${encodeURIComponent(`Hi, I am interested in ${packageContent.name} (${packageContent.price}). Please share more details.`)}`;
    primaryCtaNode.target = "_blank";
    primaryCtaNode.rel = "noreferrer";

    if (demoCtaNode) {
      demoCtaNode.href = packageContent.demoUrl || "#";
      demoCtaNode.target = "_blank";
      demoCtaNode.rel = "noreferrer";
    }

    quickListNode.innerHTML = packageContent.quickHighlights
      .map(
        (item) =>
          `<li class="flex items-start gap-2"><i data-lucide="check-circle-2" class="mt-0.5 h-4 w-4 shrink-0 ${packageContent.iconClass}"></i><span class="min-w-0 break-words">${item}</span></li>`,
      )
      .join("");

    featureListNode.innerHTML = packageContent.features
      .map(
        (item) =>
          `<li class="flex items-start gap-2"><i data-lucide="check-circle" class="mt-0.5 h-4 w-4 shrink-0 ${packageContent.iconClass}"></i><span class="min-w-0 break-words">${item}</span></li>`,
      )
      .join("");

    if (trendChart) {
      trendChart.data.labels = packageContent.trendLabels;
      trendChart.data.datasets[0].data = packageContent.trendValues;
      trendChart.data.datasets[0].borderColor = packageContent.accentHex;
      trendChart.data.datasets[0].backgroundColor = hexToRgba(packageContent.accentHex, 0.18);
      trendChart.update();
    }

    if (channelChart) {
      channelChart.data.labels = packageContent.channelLabels;
      channelChart.data.datasets[0].data = packageContent.channelValues;
      channelChart.data.datasets[0].backgroundColor = buildChartPalette(packageContent.accentHex);
      channelChart.update();
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  pills.forEach((pill) => {
    pill.className = `${PILL_BASE_CLASS} ${PILL_INACTIVE_CLASS}`;
    pill.addEventListener("click", () => {
      applyPackage(pill.dataset.packagePill);
    });
  });

  applyPackage("starter", false);
}

function createTrendChart(canvasNode) {
  if (!canvasNode || !window.Chart) return null;

  return new Chart(canvasNode, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Projected leads",
          data: [],
          borderColor: "#8b1cf9",
          backgroundColor: "rgba(139, 28, 249, 0.18)",
          fill: true,
          tension: 0.35,
          borderWidth: 2,
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          mode: "index",
          intersect: false,
          backgroundColor: "#0f0f15",
          borderColor: "rgba(255,255,255,0.15)",
          borderWidth: 1,
          titleColor: "#f5f5f5",
          bodyColor: "#d4d4d8",
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#a1a1aa",
          },
          border: {
            display: false,
          },
        },
        y: {
          grid: {
            color: "rgba(255,255,255,0.08)",
          },
          ticks: {
            color: "#a1a1aa",
          },
          border: {
            display: false,
          },
        },
      },
    },
  });
}

function createChannelChart(canvasNode) {
  if (!canvasNode || !window.Chart) return null;

  return new Chart(canvasNode, {
    type: "bar",
    data: {
      labels: [],
      datasets: [
        {
          data: [],
          borderRadius: 8,
          maxBarThickness: 26,
          backgroundColor: ["rgba(139, 28, 249, 0.92)", "rgba(139, 28, 249, 0.68)", "rgba(139, 28, 249, 0.45)"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "#0f0f15",
          borderColor: "rgba(255,255,255,0.15)",
          borderWidth: 1,
          titleColor: "#f5f5f5",
          bodyColor: "#d4d4d8",
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#a1a1aa",
          },
          border: {
            display: false,
          },
        },
        y: {
          suggestedMax: 60,
          grid: {
            color: "rgba(255,255,255,0.08)",
          },
          ticks: {
            color: "#a1a1aa",
            callback(value) {
              return `${value}%`;
            },
          },
          border: {
            display: false,
          },
        },
      },
    },
  });
}

function hexToRgba(hexColor, alpha) {
  const normalizedHex = hexColor.replace("#", "");
  const fullHex =
    normalizedHex.length === 3
      ? normalizedHex
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : normalizedHex;

  const colorValue = Number.parseInt(fullHex, 16);
  const red = (colorValue >> 16) & 255;
  const green = (colorValue >> 8) & 255;
  const blue = colorValue & 255;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function buildChartPalette(hexColor) {
  return [hexToRgba(hexColor, 0.92), hexToRgba(hexColor, 0.72), hexToRgba(hexColor, 0.52)];
}

function initHeadlineRotator(rootNode) {
  const headlineNode = rootNode.querySelector("[data-headline-rotator]");
  if (!headlineNode) return;

  const headlines = [
    "Your Business Deserves More Than Just a Website",
    "Turn Every Visitor Into a High-Intent Lead",
    "Be the Brand Customers Find First and Trust Fast",
    "Invest Once. Generate Enquiries Every Single Day",
  ];

  let headlineIndex = 0;
  headlineNode.textContent = headlines[headlineIndex];

  if (rootNode.__headlineIntervalId) {
    window.clearInterval(rootNode.__headlineIntervalId);
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const fadeDurationMs = 480;
  const headlineIntervalMs = 4200;

  rootNode.__headlineIntervalId = window.setInterval(() => {
    headlineNode.classList.remove("headline-visible");
    headlineNode.classList.add("headline-hidden");

    window.setTimeout(() => {
      headlineIndex = (headlineIndex + 1) % headlines.length;
      headlineNode.textContent = headlines[headlineIndex];
      headlineNode.classList.remove("headline-hidden");
      headlineNode.classList.add("headline-visible");
    }, fadeDurationMs);
  }, headlineIntervalMs);
}

function initRollingQuotes(rootNode) {
  const quoteNode = rootNode.querySelector("[data-quote-rotator]");
  if (!quoteNode) return;

  const quotes = [
    "Launch fast. Rank faster. Convert better.",
    "Every package is mapped to measurable growth outcomes.",
    "Design, SEO, and lead funnels aligned to your business stage.",
    "Choose confidently with data-backed projections.",
  ];

  let quoteIndex = 0;
  quoteNode.textContent = quotes[quoteIndex];

  if (rootNode.__quoteIntervalId) {
    window.clearInterval(rootNode.__quoteIntervalId);
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const fadeDurationMs = 420;
  const quoteIntervalMs = 3600;

  rootNode.__quoteIntervalId = window.setInterval(() => {
    quoteNode.classList.remove("quote-visible");
    quoteNode.classList.add("quote-hidden");

    window.setTimeout(() => {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      quoteNode.textContent = quotes[quoteIndex];
      quoteNode.classList.remove("quote-hidden");
      quoteNode.classList.add("quote-visible");
    }, fadeDurationMs);
  }, quoteIntervalMs);
}

function initTextLoadAnimations(rootNode) {
  const targets = rootNode.querySelectorAll("h1, h2, h3, p, li, a, span");

  targets.forEach((element, index) => {
    if (element.hasAttribute("data-no-text-load")) {
      return;
    }

    element.classList.add("text-load");
    element.style.animationDelay = `${Math.min(index * 55, 900)}ms`;
  });
}

window.renderPricingWithChart = renderPricingWithChart;
