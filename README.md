# Rainbow Innovative Academy — Official Website

A complete, creative, responsive website for **Rainbow Innovative Academy**, Bengaluru. Built as an interactive storybook of learning, combining school information with whimsical animations, modern responsive design, and parent-friendly navigation.

---

## 🌟 Creative Concept & Theme

- **Website Theme:** *“A world of learning, growing, and discovering.”*
- **Hero Headline:** *“Where curious minds grow.”*
- **Hero Subtitle:** *“A joyful place to learn, explore, create, and shine.”*
- **Design Aesthetic:** Storybook-inspired illustrations, warm paper texture, rounded typography, chalk-style titles, and rainbow transitions.
- **Palette:**
  - Deep Navy: `#173D55`
  - Warm Cream: `#FFFAF2`
  - Soft Mint: `#E9F3ED`
  - Golden Yellow: `#F5C94C`
  - Warm Orange: `#ED8B37`
  - White: `#FFFFFF`

---

## 🏫 Verified School Information

All information on the website has been gathered directly from the official school presence:
- **School Name:** Rainbow Innovative Academy (RIA)
- **Affiliation:** Central Board of Secondary Education (CBSE), New Delhi (Affiliation No: 831372, School Code: 46162)
- **Governing Trust:** RIA Educational Trust
- **Founder & Chairman:** Mrs. Varalakshmi B.S.
- **Principal:** Mr. Manjunatha R.A. (M.B.A., B.Ed.)
- **Campus Address:** Erappa Garden, Konadasapura, Bengaluru, Karnataka – 560049 (Near Hoskote Road / Budigere Cross)
- **Helpline Numbers:** +91 70907 96666, +91 70909 96666
- **Email:** rainbowinnovativeacademy@gmail.com
- **Campus Area:** 4,000+ sq. meters green campus
- **Key Accolades:**
  - *Best School in Academic Excellence 2024* (State Education Board)
  - *ISO 9001:2015 Certified*
  - *Digital School & Smart Learning Award*
  - *Outstanding Co-Curricular Programs*
  - *Green School Eco-Initiative*

---

## 🎬 Classroom Intro Video

- **Video Asset:** `public/videos/classroom-intro.mp4`
- **Features:**
  - Full-screen classroom intro video
  - Muted autoplay
  - "Skip Intro" button in top-right
  - Persisted in `sessionStorage` (`ria_intro_seen`) so it plays only once per browsing session
  - Graceful chalkboard animation fallback if video is blocked or unsupported
  - Respects `prefers-reduced-motion` accessibility preferences
  - Expanding rainbow transition reveal into the homepage

---

## 🚀 Creative Animations & Interactions

1. **Rocket Navigation:**
   - Clicking navigation links or action cards launches an illustrated rocket with an exhaust trail that flies toward the selected section.
2. **Chalk Drawing Effects:**
   - SVG chalk-stroke animations underlining headings, drawing playful doodles, and highlighting important school facts.
3. **Rainbow Transitions:**
   - Expanding multi-band rainbow wipe during the intro exit and section reveals.
4. **Accessible Photo Lightbox:**
   - Fullscreen keyboard-navigable image modal with left/right arrows, escape key, and category tagging.

---

## 📂 Project Architecture

```
innovative_school/
├── public/
│   ├── favicon.svg             # Custom RIA crest favicon
│   ├── images/
│   │   └── school-logo.svg     # Stylized RIA brand emblem
│   └── videos/
│       └── classroom-intro.mp4 # Fullscreen classroom intro video
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive header with rocket navigation & mobile drawer
│   │   ├── Footer.jsx          # Comprehensive footer with contact info & newsletter
│   │   ├── IntroVideo.jsx      # Video intro with skip button & chalkboard fallback
│   │   ├── RocketAnimation.jsx # Whimsical flying rocket interaction
│   │   ├── ChalkHeading.jsx    # SVG chalk animated titles
│   │   ├── RainbowTransition.jsx # Rainbow wipe transition
│   │   ├── Lightbox.jsx        # Keyboard-friendly photo modal
│   │   └── ScrollToTop.jsx     # Route change scroll reset
│   ├── data/
│   │   └── schoolData.js       # Verified RIA data repository
│   ├── pages/
│   │   ├── Home.jsx            # Hero, welcome, previews, awards, and FAQs
│   │   ├── AboutUs.jsx         # Genesis, vision & mission, leadership & values
│   │   ├── Academics.jsx       # CBSE pathways, NEP framework & lab facilities
│   │   ├── CampusLife.jsx      # Sports, arts, clubs & GPS-monitored buses
│   │   ├── Admissions.jsx      # 4-step process, checklist & validated enquiry form
│   │   ├── Gallery.jsx         # Filterable photo & event gallery
│   │   └── Contact.jsx         # Campus coordinates, map & message form
│   ├── styles/
│   │   └── index.css           # Global tokens, typography & storybook styles
│   ├── App.jsx                 # Router & layout provider
│   └── main.jsx                # React root mount
├── package.json
└── vite.config.js              # Vite config with optimized code chunking
```

---

## 🛠️ Development & Build Commands

- **Start Development Server:**
  ```bash
  npm run dev
  ```
- **Build Production Bundle:**
  ```bash
  npm run build
  ```
- **Preview Production Bundle:**
  ```bash
  npm run preview
  ```

