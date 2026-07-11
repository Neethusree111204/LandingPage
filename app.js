const { useState, useMemo, useEffect, useRef } = React;

/* ---------------- data ---------------- */
const PRODUCTS = [
  {
    id: "sol-002", ref: "REF. 002", name: "Solstice Chronograph", collection: "Chronograph",
    desc: "Brass-cased chronograph on a hand-stitched leather strap. Domed sapphire crystal.",
    price: 1240, trending: false,
    img: "https://images.pexels.com/photos/1034065/pexels-photo-1034065.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "iro-014", ref: "REF. 014", name: "Ironbeam Steel", collection: "Chronograph",
    desc: "Brushed stainless steel case, tachymeter bezel. Built for the everyday commute.",
    price: 980, trending: false,
    img: "https://images.pexels.com/photos/128206/pexels-photo-128206.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "mer-027", ref: "REF. 027", name: "Meridian Link", collection: "Dress",
    desc: "Articulated silver bracelet with a fine-brushed dial. Our most requested piece.",
    price: 1560, trending: true,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "way-031", ref: "REF. 031", name: "Wayfarer Classic", collection: "Minimalist",
    desc: "A round, unfussy silhouette. The watch you reach for when in doubt.",
    price: 890, trending: false,
    img: "https://images.pexels.com/photos/552598/pexels-photo-552598.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "her-005", ref: "REF. 005", name: "Heritage Pocket", collection: "Vintage",
    desc: "Open-lid pocket watch in polished gold. A tribute to the pre-wristwatch era.",
    price: 2100, trending: false,
    img: "https://images.pexels.com/photos/2922718/pexels-photo-2922718.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "aur-019", ref: "REF. 019", name: "Aurum Vintage", collection: "Vintage",
    desc: "Aged gold finish with roman numerals. Small-batch, individually numbered.",
    price: 1780, trending: true,
    img: "https://images.pexels.com/photos/325845/pexels-photo-325845.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "qui-044", ref: "REF. 044", name: "Quietude", collection: "Minimalist",
    desc: "Beige leather strap, whisper-thin case. Designed to disappear under a cuff.",
    price: 760, trending: false,
    img: "https://images.pexels.com/photos/3490349/pexels-photo-3490349.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "pol-008", ref: "REF. 008", name: "Polaris Steel", collection: "Dress",
    desc: "Cool-toned steel case on a matching bracelet. Reads sharp in any light.",
    price: 1120, trending: false,
    img: "https://images.pexels.com/photos/20118030/pexels-photo-20118030.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "noc-052", ref: "REF. 052", name: "Nocturne", collection: "Chronograph",
    desc: "Blackened steel and a monochrome dial. Our darkest, quietest reference.",
    price: 1050, trending: true,
    img: "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "reg-063", ref: "REF. 063", name: "Regent Link", collection: "Dress",
    desc: "Gold link bracelet with a calendar complication. The dress-watch upgrade.",
    price: 1890, trending: true,
    img: "https://images.pexels.com/photos/190581/pexels-photo-190581.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "sap-071", ref: "REF. 071", name: "Sapphire Line", collection: "Dress",
    desc: "A blue sapphire dial on a fine mesh strap. Cool, quiet, and formal.",
    price: 1420, trending: true,
    img: "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "fla-082", ref: "REF. 082", name: "Flatline", collection: "Minimalist",
    desc: "Low-profile steel case with a matte dial. Nothing on it that doesn't need to be.",
    price: 940, trending: false,
    img: "https://images.pexels.com/photos/3766113/pexels-photo-3766113.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "tra-091", ref: "REF. 091", name: "Trailhand", collection: "Field",
    desc: "Oversized field case on rugged leather. Built to take a knock and keep time.",
    price: 1080, trending: false,
    img: "https://images.pexels.com/photos/34535049/pexels-photo-34535049.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "ske-012", ref: "REF. 012", name: "Openwork Skeleton", collection: "Vintage",
    desc: "Fully exposed movement under a domed crystal. Watchmaking with nothing to hide.",
    price: 2350, trending: true,
    img: "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "bra-097", ref: "REF. 097", name: "Brassline", collection: "Dress",
    desc: "Warm brass-toned metal bracelet with a fine engraved dial. Understated formal wear.",
    price: 1340, trending: false,
    img: "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "obs-103", ref: "REF. 103", name: "Obsidian Face", collection: "Sport",
    desc: "All-black metallic dial on a textured strap. Low-key and hard to scratch.",
    price: 1010, trending: false,
    img: "https://images.pexels.com/photos/16739804/pexels-photo-16739804.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "tor-118", ref: "REF. 118", name: "Torque Sport", collection: "Sport",
    desc: "Carbon-cased outdoor watch with compass and altimeter displays. Built for the trail.",
    price: 1190, trending: true,
    img: "https://images.pexels.com/photos/28676317/pexels-photo-28676317.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "mid-127", ref: "REF. 127", name: "Midnight Vintage", collection: "Automatic",
    desc: "Hand-wound movement in a weathered case. Runs on nothing but its own mainspring.",
    price: 1560, trending: false,
    img: "https://images.pexels.com/photos/449131/pexels-photo-449131.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "cas-134", ref: "REF. 134", name: "The Selection", collection: "Dress",
    desc: "Polished gold case on a matched link bracelet. Chosen by hand from the display case.",
    price: 1950, trending: false,
    img: "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "flt-142", ref: "REF. 142", name: "Flatlay Steel", collection: "Minimalist",
    desc: "Slim steel case with a clean matte dial. No date window, no clutter, just time.",
    price: 870, trending: false,
    img: "https://images.pexels.com/photos/9528219/pexels-photo-9528219.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "gil-149", ref: "REF. 149", name: "Gilded Heritage", collection: "Vintage",
    desc: "Open-lid gold pocket watch with an engraved case back. A keepsake piece, not a daily one.",
    price: 2280, trending: false,
    img: "https://images.pexels.com/photos/34055864/pexels-photo-34055864.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const COLLECTIONS = ["All", ...Array.from(new Set(PRODUCTS.map(p => p.collection)))];
const TRENDING = PRODUCTS.filter(p => p.trending);

/* deterministic "rating" for each product */
function hashStr(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; }
function ratingFor(id) { return (4.1 + (hashStr(id) % 9) / 10).toFixed(1); }
function reviewsFor(id) { return 38 + (hashStr(id + "r") % 260); }

/* Each product has exactly one real photo. Rather than swapping in a
   different watch's photo for "other angles" (misleading), we crop/zoom
   into that same photo — full shot, dial close-up, strap/case close-up —
   so every view shown is genuinely that watch, just framed differently. */
const DETAIL_VIEWS = [
  { label: "Full",  position: "center 45%", scale: 1 },
  { label: "Dial",  position: "center 22%", scale: 2.1 },
  { label: "Strap", position: "center 82%", scale: 2.1 }
];

const ACCENT_PRESETS = [
  { name: "Brass",    hex: "#C6A15B" },
  { name: "Rose Gold",hex: "#B76E56" },
  { name: "Platinum", hex: "#C7CDD6" },
  { name: "Emerald",  hex: "#2F6F5E" },
  { name: "Midnight", hex: "#4C5F8A" }
];

const RAZORPAY_KEY_ID = ""; // <-- add your rzp_test_/rzp_live_ key here to enable live payment capture

const money = (n) => "$" + n.toLocaleString("en-US");

/* ---------------- icons ---------------- */
const IconBag = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M6 8h12l-1 12H7L6 8Z" strokeLinejoin="round"/>
    <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round"/>
  </svg>
);
const IconPalette = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.3-.5-.8-.5-1.2 0-.9.7-1.5 1.5-1.5H16a3 3 0 0 0 3-3c0-5-3-9-7-9Z"/>
    <circle cx="7.5" cy="10.5" r="1"/><circle cx="10.5" cy="7" r="1"/><circle cx="15" cy="8" r="1"/>
  </svg>
);
const IconChevronL = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>);
const IconChevronR = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>);

/* ---------------- scroll reveal hook ---------------- */
function useReveal(deps) {
  useEffect(() => {
    // small delay so freshly-filtered cards exist in the DOM before we query them
    const t = setTimeout(() => {
      const els = document.querySelectorAll(".reveal:not(.in-view)");
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
        });
      }, { threshold: 0.1 });
      els.forEach(el => io.observe(el));
    }, 30);
    return () => clearTimeout(t);
  }, deps || []);
}

/* ---------------- hero carousel ---------------- */
function HeroCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex(i => (i + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [paused, items.length]);

  const current = items[index];

  return (
    <div className="hero-media-col">
      <div className="hero-ref">Trending — {current.name}</div>
      <div
        className="hero-visual bezel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="bezel-inner" style={{position:"relative", width:"100%", height:"100%"}}>
          {items.map((it, i) => (
            <div key={it.id} className={"hero-carousel-slide" + (i === index ? " active" : "")}>
              <img src={it.img} alt={it.name} style={{width:"100%",height:"100%",objectFit:"cover"}} />
            </div>
          ))}
        </div>
      </div>
      <div className="hero-caption">
        <div className="name">{current.name}</div>
        <div className="price">{money(current.price)}</div>
      </div>
      <div className="hero-dots">
        {items.map((it, i) => (
          <button key={it.id} className={"hero-dot" + (i === index ? " active" : "")} onClick={() => setIndex(i)} aria-label={"Show " + it.name}/>
        ))}
      </div>
    </div>
  );
}

/* ---------------- trending row (auto-scrolling carousel) ---------------- */
function TrendingRow({ items, onOpenDetail }) {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const scrollBy = (dir) => {
    if (trackRef.current) trackRef.current.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const timer = setInterval(() => {
      if (pausedRef.current || !track) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: 262, behavior: "smooth" });
      }
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // double the list so the loop reads as a continuous carousel
  const loopItems = [...items, ...items];

  return (
    <section className="trending">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Trending Now</h2>
          <div className="carousel-arrows">
            <button className="carousel-arrow" onClick={() => scrollBy(-1)} aria-label="Scroll left"><IconChevronL/></button>
            <button className="carousel-arrow" onClick={() => scrollBy(1)} aria-label="Scroll right"><IconChevronR/></button>
          </div>
        </div>
        <div
          className="trend-track"
          ref={trackRef}
          onMouseEnter={() => pausedRef.current = true}
          onMouseLeave={() => pausedRef.current = false}
        >
          {loopItems.map((p, i) => (
            <div className="trend-card" key={p.id + "-" + i} onClick={() => onOpenDetail(p)}>
              <span className="trend-badge">Trending</span>
              <div className="trend-media"><img src={p.img} alt={p.name} loading="lazy" /></div>
              <div className="trend-info">
                <h4>{p.name}</h4>
                <div className="price">{money(p.price)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- newsletter form ---------------- */
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | invalid | subscribed

  const handleSubscribe = (e) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) { setStatus("invalid"); return; }
    setStatus("subscribed");
    // Note: this confirms in the UI only. Actually emailing this address
    // requires a mail/CRM service (e.g. Mailchimp, EmailJS) wired in with
    // its own API key — happy to connect one if you want live delivery.
  };

  if (status === "subscribed") {
    return <div className="newsletter-note success">You're subscribed — watch {email} for the next drop.</div>;
  }

  return (
    <form className="newsletter-row" onSubmit={handleSubscribe}>
      <input
        type="email"
        placeholder="you@example.com"
        aria-label="Email for newsletter"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
      />
      <button type="submit">Subscribe</button>
      {status === "invalid" && <div className="newsletter-note error">Enter a valid email first.</div>}
    </form>
  );
}

/* ---------------- theme customizer ---------------- */
function ThemeCustomizer({ accent, setAccent }) {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <button className="customizer-toggle" onClick={() => setOpen(!open)} aria-label="Customize accent color">
        <IconPalette />
      </button>
      {open && (
        <div className="customizer-panel">
          <h4>Case Finish</h4>
          <div className="swatches">
            {ACCENT_PRESETS.map(p => (
              <button
                key={p.hex}
                className={"swatch" + (accent.toLowerCase() === p.hex.toLowerCase() ? " active" : "")}
                style={{ background: p.hex }}
                title={p.name}
                onClick={() => setAccent(p.hex)}
                aria-label={p.name}
              />
            ))}
          </div>
          <div className="color-input-row">
            <input type="color" value={accent} onChange={(e) => setAccent(e.target.value)} aria-label="Custom accent color" />
            <label>Custom shade</label>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

/* ---------------- Clerk sign-in (uses Clerk's own overlay — avoids
   any custom routing/navigation issues) ---------------- */
function waitForClerk() {
  return new Promise((resolve) => {
    const check = () => {
      if (window.Clerk && window.Clerk.loaded) resolve(window.Clerk);
      else setTimeout(check, 150);
    };
    check();
  });
}

/* Custom-built sign-in / sign-up form using Clerk's low-level client API
   (signIn.create / signUp.create) instead of Clerk's own hosted widget.
   Nothing here ever navigates the page — everything happens via fetch calls
   under the hood, so it can't land you on a "/" redirect. Note: the very
   last step (setActive, which writes Clerk's session cookie) still needs
   the page to be served over http(s) to fully persist — that part of the
   browser's cookie rules can't be worked around from file://. */
function CustomAuthModal({ onClose }) {
  const [mode, setMode] = useState("signin"); // signin | signup | verify
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [pendingAuth, setPendingAuth] = useState(null); // { type: 'signup' | 'signin', obj }

  const finishWithSession = async (clerk, sessionId) => {
    try {
      await clerk.setActive({ session: sessionId });
      onClose();
    } catch (e) {
      setError("Signed in, but this browser couldn't save the session (needs http/https, not a local file). Try again once this page is served, not opened directly.");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const clerk = await waitForClerk();
      const result = await clerk.client.signIn.create({ identifier: email, password });
      if (result.status === "complete") {
        await finishWithSession(clerk, result.createdSessionId);
      } else if (result.status === "needs_first_factor") {
        const factors = result.supportedFirstFactors || [];
        const emailCodeFactor = factors.find(f => f.strategy === "email_code");
        const emailLinkFactor = factors.find(f => f.strategy === "email_link");
        if (emailCodeFactor) {
          await clerk.client.signIn.prepareFirstFactor({
            strategy: "email_code",
            emailAddressId: emailCodeFactor.emailAddressId
          });
          setPendingAuth({ type: "signin", obj: result });
          setMode("verify");
        } else if (emailLinkFactor) {
          setError("This account verifies by email link, not a code — check that inbox for a sign-in link and click it (this form can't embed that step).");
        } else {
          const strategies = factors.map(f => f.strategy).join(", ") || "none listed";
          setError("This account requires: " + strategies + " — this form doesn't support that method yet. Tell the developer this exact list so it can be added.");
        }
      } else if (result.status === "needs_second_factor") {
        const factors2 = result.supportedSecondFactors || [];
        const totpFactor = factors2.find(f => f.strategy === "totp");
        const backupFactor = factors2.find(f => f.strategy === "backup_code");
        const emailFactor2 = factors2.find(f => f.strategy === "email_code");
        if (totpFactor) {
          setPendingAuth({ type: "signin_2fa_totp", obj: result });
          setMode("verify");
        } else if (emailFactor2) {
          await clerk.client.signIn.prepareSecondFactor({ strategy: "email_code" });
          setPendingAuth({ type: "signin_2fa_email", obj: result });
          setMode("verify");
        } else if (backupFactor) {
          setPendingAuth({ type: "signin_2fa_backup", obj: result });
          setMode("verify");
        } else {
          const strategies = factors2.map(f => f.strategy).join(", ") || "none listed";
          setError("This account's second factor is: " + strategies + " — this form doesn't support that method yet. Tell the developer this exact list so it can be added.");
        }
      } else {
        setError("Unexpected sign-in status: " + result.status + ". Tell the developer this exact value.");
      }
    } catch (err) {
      setError((err && err.errors && err.errors[0] && err.errors[0].longMessage) || "Couldn't sign in with those details.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const clerk = await waitForClerk();
      const signUp = await clerk.client.signUp.create({ emailAddress: email, password });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingAuth({ type: "signup", obj: signUp });
      setMode("verify");
    } catch (err) {
      setError((err && err.errors && err.errors[0] && err.errors[0].longMessage) || "Couldn't create that account.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const clerk = await waitForClerk();
      let result;
      if (pendingAuth.type === "signup") {
        result = await pendingAuth.obj.attemptEmailAddressVerification({ code });
      } else if (pendingAuth.type === "signin") {
        result = await clerk.client.signIn.attemptFirstFactor({ strategy: "email_code", code });
      } else if (pendingAuth.type === "signin_2fa_totp") {
        result = await clerk.client.signIn.attemptSecondFactor({ strategy: "totp", code });
      } else if (pendingAuth.type === "signin_2fa_email") {
        result = await clerk.client.signIn.attemptSecondFactor({ strategy: "email_code", code });
      } else if (pendingAuth.type === "signin_2fa_backup") {
        result = await clerk.client.signIn.attemptSecondFactor({ strategy: "backup_code", code });
      }
      if (result.status === "complete") {
        await finishWithSession(clerk, result.createdSessionId);
      } else {
        setError("That code didn't complete verification — double-check it and try again.");
      }
    } catch (err) {
      setError((err && err.errors && err.errors[0] && err.errors[0].longMessage) || "That code didn't work.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <div className="overlay" onClick={onClose} />
      <div className="modal-card">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <span className="eyebrow">Member Access</span>
        <h3 style={{marginTop:8}}>
          {mode !== "verify"
            ? (mode === "signin" ? "Sign in to Aurelia" : "Create your account")
            : (pendingAuth && pendingAuth.type === "signin_2fa_totp") ? "Enter your authenticator code"
            : (pendingAuth && pendingAuth.type === "signin_2fa_backup") ? "Enter a backup code"
            : "Check your email"}
        </h3>

        {/* Clerk's bot-protection challenge mounts into this invisible element
            during sign-up. Without it, signUp.create() throws a captcha error
            — this was the actual cause of "Create Account" failing. */}
        <div id="clerk-captcha"></div>

        {mode === "verify" ? (
          <form onSubmit={handleVerify}>
            <p>
              {pendingAuth && pendingAuth.type === "signin_2fa_totp"
                ? "Open your authenticator app (Google Authenticator, Authy, etc.) and enter the current 6-digit code."
                : pendingAuth && pendingAuth.type === "signin_2fa_backup"
                ? "Enter one of the backup codes you saved when you set up two-factor authentication."
                : "We sent a 6-digit code to " + email + "."}
            </p>
            <div className="field">
              <label>{pendingAuth && pendingAuth.type === "signin_2fa_backup" ? "Backup code" : "Verification code"}</label>
              <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="123456" required />
            </div>
            {error && <div className="auth-error">{error}</div>}
            <button className="btn-primary" style={{width:"100%"}} disabled={loading} type="submit">
              {loading ? "Verifying…" : "Verify & Continue"}
            </button>
          </form>
        ) : (
          <form onSubmit={mode === "signin" ? handleSignIn : handleSignUp}>
            <div className="field">
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required minLength={8} />
            </div>
            {error && <div className="auth-error">{error}</div>}
            <button className="btn-primary" style={{width:"100%"}} disabled={loading} type="submit">
              {loading ? "Please wait…" : mode === "signin" ? "Sign In" : "Create Account"}
            </button>
            <p style={{textAlign:"center", marginTop:14}}>
              {mode === "signin" ? "New here? " : "Already a member? "}
              <a href="#" onClick={(e) => { e.preventDefault(); setError(""); setMode(mode === "signin" ? "signup" : "signin"); }} style={{color:"var(--gold)", textDecoration:"underline"}}>
                {mode === "signin" ? "Create an account" : "Sign in"}
              </a>
            </p>
          </form>
        )}

        <div className="modal-note">
          Runs on Clerk. Full session persistence needs this page served over http(s) — see the banner above if you're on a local file.
        </div>
      </div>
    </React.Fragment>
  );
}

function UserButtonMount() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const tryMount = () => {
      if (window.Clerk && window.Clerk.loaded && el) {
        window.Clerk.mountUserButton(el, {
          appearance: { variables: { colorPrimary: "#C6A15B" } },
          userProfileMode: "modal",
          afterSignOutUrl: window.location.href
        });
      } else {
        setTimeout(tryMount, 200);
      }
    };
    tryMount();
    return () => { if (window.Clerk && el) { try { window.Clerk.unmountUserButton(el); } catch (e) {} } };
  }, []);
  return <div ref={ref}></div>;
}

/* ---------------- cart drawer ---------------- */
function CartDrawer({ items, onClose, updateQty, removeItem, onOrderPlaced }) {
  const [confirmed, setConfirmed] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [processing, setProcessing] = useState(false);
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  const finishOrder = () => {
    const id = "AUR-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setOrderId(id);
    setConfirmed(true);
    setProcessing(false);
    onOrderPlaced();
  };

  const handleCheckout = () => {
    if (items.length === 0) return;
    setProcessing(true);

    if (RAZORPAY_KEY_ID && window.Razorpay) {
      // Live Razorpay checkout. Note: for production, create the order
      // server-side via the Razorpay Orders API using your key secret —
      // this client-only flow is fine for testing.
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: Math.round(subtotal * 100),
        currency: "INR",
        name: "Aurelia Timepieces",
        description: items.map(i => i.name).join(", "),
        handler: function () { finishOrder(); },
        modal: { ondismiss: function () { setProcessing(false); } },
        theme: { color: "#C6A15B" }
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      // Demo mode — no Razorpay key connected yet, so we confirm the order directly.
      setTimeout(finishOrder, 700);
    }
  };

  return (
    <React.Fragment>
      <div className="overlay" onClick={onClose} />
      <div className="cart-drawer">
        <div className="cart-head">
          <h3>{confirmed ? "Order Confirmed" : "Your Selection"}</h3>
          <button className="close-crown" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        {confirmed ? (
          <div className="confirm-wrap">
            <div className="confirm-check">✓</div>
            <h3>Thank you</h3>
            <p>Your order has been placed and is being prepared.</p>
            <div className="confirm-id">{orderId}</div>
            <button className="btn-primary" onClick={onClose}>Continue Browsing</button>
          </div>
        ) : (
          <React.Fragment>
            <div className="cart-items">
              {items.length === 0 && <div className="cart-empty">Your case is empty.<br/>Browse the collection to add a piece.</div>}
              {items.map(it => (
                <div className="cart-item" key={it.id}>
                  <img src={it.img} alt={it.name} />
                  <div className="cart-item-info">
                    <h5>{it.name}</h5>
                    <div className="cart-item-price">{money(it.price)}</div>
                    <div className="qty-row">
                      <button className="qty-btn" onClick={() => updateQty(it.id, -1)} aria-label="Decrease quantity">–</button>
                      <span className="qty-val">{it.qty}</span>
                      <button className="qty-btn" onClick={() => updateQty(it.id, 1)} aria-label="Increase quantity">+</button>
                      <button className="remove-link" onClick={() => removeItem(it.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {items.length > 0 && (
              <div className="cart-footer">
                <div className="subtotal-row"><span>Shipping</span><span>Complimentary, insured</span></div>
                <div className="total-row"><span>Total</span><span>{money(subtotal)}</span></div>
                <button className="btn-primary checkout-btn" onClick={handleCheckout} disabled={processing}>
                  {processing ? "Processing…" : "Proceed to Checkout"}
                </button>
                <div className="pay-note">
                  {RAZORPAY_KEY_ID ? "Secured payment via Razorpay" : "Payment via Razorpay — connect a key to charge real cards"}
                </div>
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

/* ---------------- product card ---------------- */
function ProductCard({ product, onAdd, onOpenDetail }) {
  const [justAdded, setJustAdded] = useState(false);
  const handleAdd = (e) => {
    e.stopPropagation();
    onAdd(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };
  return (
    <div className="card reveal" onClick={() => onOpenDetail(product)}>
      {product.trending && <span className="card-badge">Trending</span>}
      <div className="card-media"><img src={product.img} alt={product.name} loading="lazy" /></div>
      <div className="card-ref">{product.ref}</div>
      <h3>{product.name}</h3>
      <div className="mini-rating">★ {ratingFor(product.id)} <span>({reviewsFor(product.id)})</span></div>
      <p className="card-desc">{product.desc}</p>
      <div className="card-footer">
        <span className="price">{money(product.price)}</span>
        <button className={"add-btn" + (justAdded ? " added" : "")} onClick={handleAdd}>
          {justAdded ? "Added ✓" : "Add to Case"}
        </button>
      </div>
    </div>
  );
}

/* ---------------- product detail modal ---------------- */
function ProductDetailModal({ product, onClose, onAdd }) {
  const [activeView, setActiveView] = useState(0);
  const [added, setAdded] = useState(false);
  const rating = ratingFor(product.id);
  const reviews = reviewsFor(product.id);
  const fullStars = Math.round(rating);
  const view = DETAIL_VIEWS[activeView];

  const handleAdd = () => {
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <React.Fragment>
      <div className="overlay" onClick={onClose} />
      <div className="detail-modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="detail-grid">
          <div className="detail-gallery">
            <div className="detail-main-img">
              <img
                src={product.img}
                alt={product.name + " — " + view.label}
                style={{ objectPosition: view.position, transform: "scale(" + view.scale + ")" }}
              />
            </div>
            <div className="detail-thumbs">
              {DETAIL_VIEWS.map((v, i) => (
                <button
                  key={v.label}
                  className={"detail-thumb" + (i === activeView ? " active" : "")}
                  onClick={() => setActiveView(i)}
                  aria-label={v.label + " view"}
                >
                  <img src={product.img} alt="" style={{ objectPosition: v.position, transform: "scale(" + v.scale + ")" }} />
                  <span className="detail-thumb-label">{v.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="detail-info">
            {product.trending && <span className="trend-badge" style={{position:"static", display:"inline-block", marginBottom:12}}>Trending</span>}
            <div className="card-ref">{product.ref} · {product.collection}</div>
            <h2>{product.name}</h2>
            <div className="detail-rating">
              <span className="stars">{"★".repeat(fullStars)}{"☆".repeat(5 - fullStars)}</span>
              <span className="rating-num">{rating}</span>
              <span className="review-count">({reviews} reviews)</span>
            </div>
            <div className="detail-price">{money(product.price)}</div>
            <p className="detail-desc">{product.desc}</p>
            <button className="btn-primary" style={{width:"100%"}} onClick={handleAdd}>
              {added ? "Added to Case ✓" : "Add to Case"}
            </button>
            <div className="detail-shipping">Complimentary, insured shipping · 2-year warranty</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

/* ---------------- app ---------------- */
function App() {
  const [accent, setAccent] = useState("#C6A15B");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [clerkUser, setClerkUser] = useState(null);
  const [activeCollection, setActiveCollection] = useState("All");
  const [detailProduct, setDetailProduct] = useState(null);
  const isFileProtocol = window.location.protocol === "file:";
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  useReveal([activeCollection]);

  useEffect(() => {
    document.documentElement.style.setProperty("--gold", accent);
  }, [accent]);

  useEffect(() => {
    let poll;
    const tryInit = async () => {
      if (window.Clerk) {
        await window.Clerk.load();
        setClerkUser(window.Clerk.user || null);
        window.Clerk.addListener(({ user }) => setClerkUser(user || null));
      } else {
        poll = setTimeout(tryInit, 200);
      }
    };
    tryInit();
    return () => clearTimeout(poll);
  }, []);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(it => it.id === product.id);
      if (existing) return prev.map(it => it.id === product.id ? { ...it, qty: it.qty + 1 } : it);
      return [...prev, { ...product, qty: 1 }];
    });
  };
  const updateQty = (id, delta) => {
    setCart(prev => prev.map(it => it.id === id ? { ...it, qty: it.qty + delta } : it).filter(it => it.qty > 0));
  };
  const removeItem = (id) => setCart(prev => prev.filter(it => it.id !== id));

  const itemCount = useMemo(() => cart.reduce((n, it) => n + it.qty, 0), [cart]);

  return (
    <React.Fragment>
      {isFileProtocol && !bannerDismissed && (
        <div className="proto-banner">
          <span>
            You're opening this as a local file (<code>file://</code>). Sign-in and payments need a real web address to work —
            open a terminal in this folder and run <code>npx serve</code> (or <code>python -m http.server 8000</code>), then
            visit the <code>http://localhost</code> link it prints instead of double-clicking the file.
          </span>
          <button onClick={() => setBannerDismissed(true)} aria-label="Dismiss">✕</button>
        </div>
      )}
      <header className="site-header">
        <div className="wrap">
          <div className="brand">AUR<span>E</span>LIA</div>
          <div className="nav-actions">
            {clerkUser
              ? <UserButtonMount />
              : <button className="member-btn" onClick={() => setAuthOpen(true)}>Member Access</button>
            }
            <button className="icon-btn" onClick={() => setCartOpen(true)} aria-label="Open cart">
              <IconBag />
              {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
            </button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg"></div>
        <div className="wrap">
          <div className="hero-copy">
            <h1>Time, kept <em>deliberately</em>.</h1>
            <p>Twenty-one timepieces, each cased and finished by hand. No quartz shortcuts, no seasonal drops — just watches built to be worn for decades, not quarters.</p>
            <button className="btn-primary" onClick={() => document.getElementById('catalog').scrollIntoView({behavior:'smooth'})}>View the Collection</button>
          </div>
          <HeroCarousel items={TRENDING} />
        </div>
      </section>

      <section className="video-showcase-wrap">
        <div className="wrap">
          <div className="video-showcase">
            <video autoPlay muted loop playsInline poster="https://images.pexels.com/videos/1034067/free-video-1034067.jpg?auto=compress&cs=tinysrgb&w=1400">
              <source src="https://videos.pexels.com/video-files/1034067/1034067-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
            <div className="video-showcase-copy">
              <span className="eyebrow">Aurelia in Motion</span>
              <h2>Every piece, built to be seen up close.</h2>
            </div>
          </div>
        </div>
      </section>

      <TrendingRow items={TRENDING} onOpenDetail={setDetailProduct} />

      <section className="catalog" id="catalog">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>The Collection</h2>
          </div>
          <div className="filter-row reveal">
            {COLLECTIONS.map(c => (
              <button
                key={c}
                className={"filter-chip" + (activeCollection === c ? " active" : "")}
                onClick={() => setActiveCollection(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid">
            {PRODUCTS
              .filter(p => activeCollection === "All" || p.collection === activeCollection)
              .map(p => <ProductCard key={p.id} product={p} onAdd={addToCart} onOpenDetail={setDetailProduct} />)}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-col footer-brand">
              <div className="brand">AUR<span>E</span>LIA</div>
              <p>Independent watchmakers since 2012. Twenty-one references, cased and finished by hand in small batches.</p>
              <div className="footer-social">
                <a href="#" aria-label="Instagram">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
                </a>
                <a href="#" aria-label="X / Twitter">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4l16 16M20 4L4 20"/></svg>
                </a>
                <a href="#" aria-label="Pinterest">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M9 17c1-3 1.5-6 2-9m2 4a3 3 0 1 0-3-3"/></svg>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h5>Shop</h5>
              <ul>
                {COLLECTIONS.filter(c => c !== "All").map(c => (
                  <li key={c}><a href="#catalog" onClick={(e) => { e.preventDefault(); setActiveCollection(c); document.getElementById('catalog').scrollIntoView({behavior:'smooth'}); }}>{c}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h5>Company</h5>
              <ul>
                <li><a href="#">About Aurelia</a></li>
                <li><a href="#">Our Craft</a></li>
                <li><a href="#">Journal</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Support</h5>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Shipping &amp; Returns</a></li>
                <li><a href="#">Warranty</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-col footer-newsletter">
              <h5>Stay Wound</h5>
              <p>New references and members-only previews, occasionally.</p>
              <NewsletterForm />
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Aurelia Timepieces. All rights reserved.</span>
            <div>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <ThemeCustomizer accent={accent} setAccent={setAccent} />
      {cartOpen && (
        <CartDrawer
          items={cart}
          onClose={() => setCartOpen(false)}
          updateQty={updateQty}
          removeItem={removeItem}
          onOrderPlaced={() => setCart([])}
        />
      )}
      {authOpen && <CustomAuthModal onClose={() => setAuthOpen(false)} />}
      {detailProduct && (
        <ProductDetailModal
          product={detailProduct}
          onClose={() => setDetailProduct(null)}
          onAdd={addToCart}
        />
      )}
      {/* Sign-in runs through the custom CustomAuthModal (built on Clerk's client API) */}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
