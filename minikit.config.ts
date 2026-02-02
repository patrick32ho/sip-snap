const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const minikitConfig = {
  accountAssociation: {
    header: "",
    payload: "",
    signature: "",
  },
  miniapp: {
    version: "1",
    name: "SipSnap",
    subtitle: "Water in one tap",
    description: "A tiny hydration arcade — tap to log a glass and hit your daily goal.",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#E6F6FF",
    homeUrl: ROOT_URL,
    primaryCategory: "health",
    tags: ["hydration", "habit", "miniapp", "sip", "water"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "Tap. Sip. Repeat.",
    ogTitle: "SipSnap",
    ogDescription: "Tap to log a glass and stay hydrated.",
    ogImageUrl: `${ROOT_URL}/og.png`,
  },
} as const;
