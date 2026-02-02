const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const minikitConfig = {
  accountAssociation: {
    header:
      "eyJmaWQiOjIzNTA5OTAsInR5cGUiOiJhdXRoIiwia2V5IjoiMHg4MDUwOTYyYjEyMkIzMDFGQjIyM0FCNzMwYUIyRGRFNjNlNTAxZmNmIn0",
    payload: "eyJkb21haW4iOiJzaXAtc25hcC52ZXJjZWwuYXBwIn0",
    signature:
      "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABTt5_fCB5kardHmQN673RopRfjVBhs9_y9eQZwtgzqvkv5M-YGlJEU5ScOEpcrXFGwYIUEPmhS001avFLB-NYagAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAl8ZgIay2xclZzG8RWZzuWvO8j9R0fus3XxDee9lRlVy8dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACKeyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiVkgyNGNpWkdseURNUnF1VkppblpYR3RUaFQwcUNrb0xVMll2UkJtRjZGayIsIm9yaWdpbiI6Imh0dHBzOi8va2V5cy5jb2luYmFzZS5jb20iLCJjcm9zc09yaWdpbiI6ZmFsc2V9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
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
