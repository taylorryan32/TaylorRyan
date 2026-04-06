export type BlogCategory =
  | "Fundamentals"
  | "Strategy"
  | "Training"
  | "Coaching";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: BlogCategory;
  image: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "5-mistakes-beginner-pickleball-players-make",
    title: "5 Mistakes Beginner Pickleball Players Make (And How to Fix Them)",
    excerpt:
      "Most beginners lose points for the same handful of reasons. Here’s what to watch for—and the simple adjustments that clean up your game fast.",
    date: "2025-02-18",
    readTime: "6 min read",
    category: "Fundamentals",
    image:
      "https://images.unsplash.com/photo-1622163642998-1ea56b3f5728?w=1200&q=80",
    content: `
## 1. Standing too close to the baseline after the serve

Beginners often camp near the baseline and never fully commit to the kitchen line. That leaves you reacting late on short balls and missing easy put-aways.

**Fix:** Make “get to the kitchen” a non-negotiable habit after your third shot. Split-step as you approach so you’re balanced when the ball comes back.

## 2. Overhitting on defense

When you’re uncomfortable, it’s tempting to swing harder. On defense, that usually means pop-ups and easy smashes for your opponents.

**Fix:** Prioritize a high, deep reset over power. Think “lift and land” rather than “crush it.”

## 3. Ignoring footwork

If your feet are flat, your contact point drifts—and so does your consistency.

**Fix:** Small, quick steps beat long lunges. Stay on the balls of your feet and keep your paddle ready in front of your body.

## 4. Poor communication in doubles

Silent doubles tennis is chaotic doubles pickleball. You’ll collide, leave balls, or both.

**Fix:** Call “mine,” “yours,” and “switch” early and loud. Decide who takes lobs before the point starts.

## 5. Practicing random instead of repeating good reps

Mindless drilling without feedback builds bad habits as fast as good ones.

**Fix:** Pick one focus per session—dinks, drops, or serves—and measure progress in quality reps, not time spent.

---

Ready for feedback tailored to *your* swing and movement patterns? [Book a private lesson](/contact) and we’ll build a simple plan you can trust on game day.
    `.trim(),
  },
  {
    slug: "how-to-improve-your-third-shot-drop",
    title: "How to Improve Your Third-Shot Drop",
    excerpt:
      "The third-shot drop is the bridge between defense and offense. Here’s a practical progression to make it reliable under pressure.",
    date: "2025-02-04",
    readTime: "8 min read",
    category: "Fundamentals",
    image:
      "https://images.unsplash.com/photo-1595435934249-20675b2b5f0a?w=1200&q=80",
    content: `
A great third-shot drop buys you time to get forward and turns a defensive start into neutral—or even offensive—court position.

## Start with contact height

If you’re hitting from below your knees without a plan, you’ll pop the ball up. Work drops from a comfortable contact zone first, then gradually lower your starting position.

## Shape matters more than pace

Think soft arc that lands in the kitchen, not “barely clearing the net.” Visualize the apex: slightly higher over the net, descending into the kitchen with minimal bounce.

## Train with constraints

- Drop from the baseline to a target zone in the kitchen  
- Add a feeder who varies depth so you learn adjustment  
- Finish with a live-ball drill: serve → return → drop → play out the point  

## Track what breaks under pressure

Most players miss long when they rush the swing, or miss short when they decelerate. Video helps—so does a coach’s eye on your timing chain.

[Schedule a session](/contact) and we’ll diagnose whether your issue is grip tension, swing path, or footwork timing—then drill the fix.
    `.trim(),
  },
  {
    slug: "pickleball-doubles-strategy-tips",
    title: "Pickleball Doubles Strategy Tips That Win More Points",
    excerpt:
      "Doubles is a positioning and patience game. Use these ideas to pressure opponents without taking unnecessary risks.",
    date: "2025-01-22",
    readTime: "7 min read",
    category: "Strategy",
    image:
      "https://images.unsplash.com/photo-1552674605-5d2178b85608?w=1200&q=80",
    content: `
## Control the kitchen line

The team that owns the net usually wins the rally. Your job is to earn your way forward with disciplined returns and quality drops—not to rush and donate easy balls.

## Target the feet and body

When opponents are stacked or moving, middle balls create confusion. When they’re balanced, low targets at the feet force upward replies you can attack.

## Stack intentionally

If one partner has a stronger forehand down the middle, use stacking on return games to keep that weapon in play. It should look organized, not accidental.

## Reset beats hero ball

If you’re out of position, the smartest play is often a high, deep reset that lets you reload—not a low-percentage speed-up.

Want a doubles-specific game plan? I coach teams on patterns, communication, and role clarity—[book a strategy session](/contact).
    `.trim(),
  },
  {
    slug: "best-drills-for-better-footwork",
    title: "Best Drills for Better Footwork on the Pickleball Court",
    excerpt:
      "Footwork is your consistency engine. These drills build balance, spacing, and recovery so you’re set for every shot.",
    date: "2025-01-08",
    readTime: "6 min read",
    category: "Training",
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&q=80",
    content: `
## Split-step + shadow movement

Practice split-step timing as your opponent contacts the ball. Shadow lateral movement along the kitchen line while keeping your paddle ready.

## Figure-eight volleys

With a partner at the net, move the ball in a figure-eight pattern. This trains quick feet and controlled hands at the same time.

## Baseline-to-kitchen transitions

Feed deep, then approach with a third-shot drop or drive-and-drop pattern. Focus on small adjustment steps—not large lunges.

## Recovery sprints (controlled)

After a wide ball, recover to a neutral ready position every time. Quality repetition beats sloppy speed.

Bring your movement questions to a [lesson](/contact)—we’ll film short clips, spot patterns, and give you a drill menu for the week ahead.
    `.trim(),
  },
  {
    slug: "how-private-coaching-improves-your-game-faster",
    title: "How Private Coaching Improves Your Game Faster Than Open Play Alone",
    excerpt:
      "Open play is fun—but it rarely fixes the one or two habits holding you back. Here’s why targeted coaching accelerates improvement.",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Coaching",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c62306601b7?w=1200&q=80",
    content: `
## Feedback in real time

A coach can catch grip pressure, contact point, and footwork issues the moment they show up—before they become “your style.”

## A plan beats random reps

We prioritize what moves your rating and your confidence: serve reliability, return depth, third-ball patterns, and net stability.

## Accountability

Weekly homework and check-ins keep improvement from stalling between sessions.

## Safer progressions

We scale difficulty so you’re challenged without building panic mechanics.

If you’re tired of guessing, [book a lesson](/contact). We’ll clarify your goals, assess your game honestly, and build a roadmap you can feel on the court.
    `.trim(),
  },
];

export const blogCategories: BlogCategory[] = [
  "Fundamentals",
  "Strategy",
  "Training",
  "Coaching",
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRecentPosts(count: number): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
