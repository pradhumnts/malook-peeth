export const ONBOARDING_STORAGE_KEY = "malook-peeth-onboarding-done";

export type OnboardingStep = {
  id: string;
  image: string;
  imageAlt: string;
  /** Text before the emphasized phrase */
  before: string;
  /** Emphasized (bold) phrase */
  emphasis: string;
  /** Text after the emphasized phrase */
  after?: string;
  subtitle: string;
};

export const onboardingSteps: OnboardingStep[] = [
  {
    id: "darshan",
    image: "/images/maharaj-ji-about-1.webp",
    imageAlt: "Shri Maharaj Ji · Malook Peeth",
    before: "Welcome to ",
    emphasis: "Malook Peeth",
    subtitle: "Darshan, satsang & the living stream of devotion",
  },
  {
    id: "library",
    image: "/images/maharaj-ji-katha.webp",
    imageAlt: "Katha & satsang with Maharaj Ji",
    before: "Explore the sacred ",
    emphasis: "Library",
    subtitle: "Listen and watch Katha with Maharaj Ji",
  },
  {
    id: "gau-seva",
    image: "/images/gau-6.webp",
    imageAlt: "Gau Sewa at Jadkhor Gaudham",
    before: "Serve ",
    emphasis: "Gau Mata",
    after: " with love",
    subtitle: "Join Gau Sewa across Jadkhor’s gaushalas",
  },
];

export function isOnboardingDone(): boolean {
  try {
    return window.localStorage.getItem(ONBOARDING_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function markOnboardingDone(): void {
  try {
    window.localStorage.setItem(ONBOARDING_STORAGE_KEY, "1");
  } catch {
    // Ignore quota / private-mode failures
  }
}
