// ============================================================
//  POSTS DATA  —  edit this file to add / update your posts
// ============================================================

window.POSTS_DATA = {

  // ----------------------------------------------------------
  //  SUBSTACK CONFIG
  //  Set your Substack publication URL below.
  //  Posts are fetched live from the RSS feed.
  // ----------------------------------------------------------
  substack: {
    rssUrl: "https://tulsimishra.substack.com/feed",   // ← set your Substack RSS URL
    publicUrl: "https://tulsimishra.substack.com",
    authorName: "Tulsi Mishra"
  },

  // ----------------------------------------------------------
  //  LINKEDIN POSTS
  //  Add your LinkedIn posts here. Fields:
  //    id       — unique string
  //    date     — display date string  e.g. "Apr 28, 2026"
  //    type     — "Post" | "Article" | "Poll" | "Repost"
  //    text     — full post text (newlines ok)
  //    link     — direct URL to the LinkedIn post
  //    likes    — number (optional)
  //    comments — number (optional)
  //    image    — image URL or null (optional)
  //    tags     — array of topic strings (optional)
  // ----------------------------------------------------------
  linkedin: [

    // ── EXAMPLE — replace with your real posts ──────────────
    {
      id: "li-1",
      date: "Apr 24, 2026",
      type: "Post",
      text: "HPC is no longer just about raw compute — it's about the software stack that makes that compute usable at scale.\n\nAt HPE, we're seeing customers push boundaries in AI training, climate modeling, and genomics. The common thread? They all need software-defined infrastructure that adapts as fast as their science does.\n\nThree things I keep coming back to:\n\n1. Workload schedulers (Slurm, PBS Pro) are becoming the orchestration layer for hybrid AI-HPC\n2. Container-native HPC is no longer a nice-to-have\n3. The PM's job in this space is to translate petaflops into business outcomes\n\nExcited about where this is heading. Drop a comment if you're working on any of these problems.",
      link: "https://www.linkedin.com/in/tmishra1992",
      likes: 187,
      comments: 31,
      image: null,
      tags: ["HPC", "AI", "Product Management"]
    },
    {
      id: "li-2",
      date: "Apr 10, 2026",
      type: "Article",
      text: "Why Product Managers in deep-tech need to go deeper than the roadmap.\n\nI've spent the last four years in HPC product management, and the biggest unlock for me wasn't a framework or a certification — it was learning enough of the underlying technology to have a real conversation with my engineering team.\n\nYou don't need to write kernel code. But you do need to understand why a customer's MPI job hangs at 512 nodes, what that means for your roadmap, and how to prioritize it against a cloud-native feature request.\n\nDeep-tech PM is a different discipline. Here's how I think about it.",
      link: "https://www.linkedin.com/in/tmishra1992",
      likes: 324,
      comments: 58,
      image: null,
      tags: ["Product Management", "HPC", "Career"]
    },
    {
      id: "li-3",
      date: "Mar 28, 2026",
      type: "Post",
      text: "Relocated from Dallas to Stockholm 🇸🇪 — six months in, a few honest observations:\n\n→ Work-life balance here is not a slogan. It's infrastructure.\n→ The tech ecosystem is genuinely world-class and still hungry.\n→ Everyone codes. Everyone bikes. Often simultaneously (kidding).\n→ Winters are dark. Summers are magic.\n\nGrowing up in India, studying in Arizona, working across the US — each place shaped how I think. Stockholm is adding a new layer.\n\nIf you're thinking about making a move abroad: do it. The discomfort is the point.",
      link: "https://www.linkedin.com/in/tmishra1992",
      likes: 512,
      comments: 74,
      image: null,
      tags: ["Life", "Career", "Stockholm"]
    },
    {
      id: "li-4",
      date: "Mar 14, 2026",
      type: "Post",
      text: "GMAT 700 + MBA + MS + engineering background — and the most useful skill I use every day in product management?\n\nListening.\n\nNot the polite, wait-for-your-turn kind. The kind where you're trying to understand what someone actually needs, not what they're asking for.\n\nCustomers ask for features. What they mean is: 'I have this problem and I'm not sure you understand it.'\n\nEvery roadmap decision I've made that aged well started with better listening.",
      link: "https://www.linkedin.com/in/tmishra1992",
      likes: 441,
      comments: 62,
      image: null,
      tags: ["Product Management", "Leadership"]
    },
    {
      id: "li-5",
      date: "Feb 22, 2026",
      type: "Post",
      text: "Stoicism at work — three things Marcus Aurelius would say about product management:\n\n1. 'You have power over your mind, not outside events.' → You can't control the market. Control your process.\n\n2. 'The impediment to action advances action.' → Every blocker is a prioritisation signal.\n\n3. 'Waste no more time arguing what a good man should be. Be one.' → Stop debating what good PM looks like. Ship, learn, repeat.\n\nI come back to Meditations constantly. Not for inspiration — for recalibration.",
      link: "https://www.linkedin.com/in/tmishra1992",
      likes: 389,
      comments: 47,
      image: null,
      tags: ["Stoicism", "Product Management", "Philosophy"]
    }

    // Add more posts above this line ↑
  ]

};
