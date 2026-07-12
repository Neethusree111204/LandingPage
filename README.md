<div align="center">

# AURELIA

### Time, kept deliberately.

**[ View the live experience → ](https://neethusree111204.github.io/LandingPage/)**

</div>

---

## The page
- **Hero** — auto-rotating carousel of trending pieces, one headline
- **Features / specs** — collection filters across 7 watch categories (Chronograph, Dress, Vintage, Minimalist, Field, Sport, Automatic)
- **Gallery** — click any watch for a detail view with multiple image angles
- **Reviews** — star rating + review count on every product
- **Price + Buy Now** — cart, checkout, and order confirmation
- **FAQ + Footer**

## Screenshots

**Desktop view**

<img src="screenshot-desktop.png" width="500" alt="Aurelia desktop view">

**Mobile view**

<img src="screenshot-mobile.jpg" width="220" alt="Aurelia mobile view">

> Save your two screenshots into this repo using the exact filenames above (`screenshot-desktop.png` and `screenshot-mobile.jpg`) and they'll render at this size automatically.

## Design notes
Product chosen: luxury watch
References: Pexels (product photography), Awwwards-style dark/gold editorial layout
Signature effect recreated: circular "bezel" frame motif around product imagery + auto-rotating hero carousel — built with AI assistance.

## Stack
HTML5 · CSS3 · React (via CDN, no build step) · Clerk authentication · Razorpay-ready checkout · GitHub Pages

## 🤖 AI usage · 📚 What I learned
Built iteratively with Claude (Anthropic) over a single extended conversation — starting from a plain product landing page brief and evolving into a full catalog with cart, real Clerk sign-in/sign-up (including 2FA handling), and a Razorpay-ready checkout. Along the way I learned:
- Why `file://` pages can't run real authentication (cookies and redirects need `http(s)`), and how to actually serve a static site locally and via GitHub Pages
- How Clerk's sign-in flow branches through first-factor and second-factor verification, and why a custom auth form needs to explicitly handle each one
- Git basics — init, remote, add, commit, push — and how to debug common failures like "repository not found" and split/broken commands in the terminal
- That AI-assisted development still requires reading error messages carefully and iterating — most fixes came from feeding real browser screenshots and console errors back in, not guessing

---

## 🎓 About TAP Academy

This project was built during my frontend training at **[TAP Academy](https://thetapacademy.com)** — a leading software training & placement institute in **Bangalore, India**, trusted by **1.5+ lakh students**.

**Why students choose TAP Academy:**
- 🚀 **Get placed in 60 days** — dedicated placement track with daily placement drives
- 🥽 **Augmented Reality (AR) classrooms** — concepts you can see, not just read
- 🎤 **Weekly mock interviews** with real-time feedback
- 👨‍🏫 **1-on-1 mentorship** and round-the-clock doubt support
- 💻 Courses in **Java, Python, Full Stack Development, Data Science & AI**

### ❓ FAQ

**What is TAP Academy?**
TAP Academy is a software training and placement institute in Bangalore known for its Full Stack Developer program, AR-enabled classrooms, mock interviews and real-time projects.

**Does TAP Academy provide placement support?**
Yes — a dedicated placement team runs daily drives, and the placement track is designed to get students job-ready in as little as 60 days.

**Where can I learn more?**
🔗 [Website](https://thetapacademy.com) · [Placements](https://thetapacademy.com/placements) · [LinkedIn](https://in.linkedin.com/company/thetapacademy) · [YouTube](https://www.youtube.com/tapacademy)

---
*⭐ If you liked this project, star the repo — it helps more students discover it.*
