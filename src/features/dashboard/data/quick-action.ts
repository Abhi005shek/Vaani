export interface QuickAction {
  title: string;
  description: string;
  gradient: string;
  href: string;
}

export const quickActions: QuickAction[] = [
  {
    title: "Narrate a story",
    description: "Bring characters to life with expressive AI narration.",
    gradient: "from-cyan-400 to-cyan-50",
    href: "/text-to-speech?text=In a village tucked between mist-covered mountains, a young girl discovers an ancient bell that can summon forgotten spirits of the forest.",
  },
  {
    title: "Guide a meditation",
    description: "Create calm, grounding experiences for your listeners.",
    gradient: "from-emerald-400 to-emerald-50",
    href: "/text-to-speech?text=Take a deep breath. Feel the air fill your lungs as your shoulders relax and your thoughts begin to slow down.",
  },
  {
    title: "Introduce your podcast",
    description: "Give your show a professional, memorable opening.",
    gradient: "from-violet-400 to-violet-50",
    href: "/text-to-speech?text=Welcome to Vaani, the show where we explore the stories behind the most innovative creators, builders, and dreamers.",
  },
  {
    title: "Voice a game character",
    description: "Design bold personalities for NPCs and heroes.",
    gradient: "from-amber-400 to-amber-50",
    href: "/text-to-speech?text=You dare enter my domain? Many have tried before you, but none have returned to tell the tale.",
  },
  {
    title: "Direct a movie scene",
    description: "Add dramatic flair to key cinematic moments.",
    gradient: "from-rose-400 to-rose-50",
    href: "/text-to-speech?text=Rain hammered the rooftop as the city lights flickered in the distance. This was their last chance to make things right.",
  },
  {
    title: "Record an ad",
    description: "Write compelling promos with clear call-to-actions.",
    gradient: "from-sky-400 to-sky-50",
    href: "/text-to-speech?text=Meet your new AI voice studio. Create realistic voiceovers, clone your voice, and ship production-ready audio in minutes with Resonance.",
  },
];

