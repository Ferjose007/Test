<template>
  <main class="landing" :class="{ 'light-mode': isLight }">
    <div class="cursor" ref="cursor"></div>
    <div class="cursor-dot" ref="cursorDot"></div>
    <div class="cursor-trail" ref="cursorTrail"></div>

    <div class="bg-grid"></div>
    <div class="bg-glow glow-1"></div>
    <div class="bg-glow glow-2"></div>
    <div class="bg-glow glow-3"></div>
    <canvas class="bg-particles" ref="particlesCanvas"></canvas>

    <!-- NAV -->
    <nav class="nav" :class="{ scrolled: isScrolled }">
      <span class="nav-logo">
        <span class="logo-bracket">[</span>TU NOMBRE<span class="logo-bracket">]</span>
      </span>
      <div class="nav-links">
        <a href="#sobre-mi" class="nav-link"><span class="nav-num">01</span>Sobre mí</a>
        <a href="#skills" class="nav-link"><span class="nav-num">02</span>Skills</a>
        <button class="theme-toggle" @click="toggleTheme" :title="isLight ? 'Modo oscuro' : 'Modo claro'">
          <span class="toggle-icon">
            <svg v-if="isLight" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          </span>
        </button>
        <a href="#contacto" class="nav-cta">Hablemos →<span class="nav-cta-shine"></span></a>
      </div>
    </nav>

    <!-- HERO -->
    <section class="hero" id="inicio">
      <div class="hero-deco-num" :class="{ visible: heroVisible }">Portfolio</div>

      <div class="hero-content">
        <div class="hero-tag" :class="{ visible: heroVisible }">
          <span class="tag-dot"></span>
          Disponible para proyectos
          <span class="tag-year">2025</span>
        </div>

        <h1 class="hero-title" :class="{ visible: heroVisible }">
          <span class="line"><span class="word-reveal">Diseño</span> <span class="word-reveal d1">&amp;</span></span>
          <span class="line"><span class="word-reveal d2 accent">desarrollo</span></span>
          <span class="line"><span class="word-reveal d3">digital.</span></span>
        </h1>

        <p class="hero-sub" :class="{ visible: heroVisible }">
          Creo experiencias web que combinan <em>diseño cuidado</em><br />
          con <em>código limpio</em> y orientado a resultados.
        </p>

        <div class="hero-actions" :class="{ visible: heroVisible }">
          <a href="#sobre-mi" class="btn-primary"><span class="btn-text">Ver mi trabajo</span><span class="btn-shine"></span></a>
          <a href="#contacto" class="btn-ghost">Contactar</a>
        </div>

        <div class="hero-chips" :class="{ visible: heroVisible }">
          <span class="chip" v-for="(c, i) in heroChips" :key="c" :style="{ '--ci': i }">{{ c }}</span>
        </div>
      </div>

      <div class="hero-bottom">
        <div class="hero-scroll-hint" :class="{ visible: heroVisible }">
          <span>scroll</span><div class="scroll-line"></div>
        </div>

        <div class="marquee-wrap">
          <div class="marquee-track">
            <span v-for="i in 8" :key="i">Vue.js &nbsp;·&nbsp; UI/UX &nbsp;·&nbsp; Frontend &nbsp;·&nbsp; Diseño Web &nbsp;·&nbsp; JavaScript &nbsp;·&nbsp;</span>
          </div>
        </div>
      </div><!-- hero-bottom -->
    </section>

    <!-- SOBRE MÍ -->
    <section class="section sobre-mi" id="sobre-mi" ref="sobreRef">
      <div class="section-inner">
        <div class="sobre-text" :class="{ visible: sobreVisible }">
          <p class="section-label">/ sobre mí</p>
          <h2>Hola, soy<br /><strong>Tu Nombre</strong></h2>
          <p class="sobre-desc">
            Desarrollador frontend con pasión por construir interfaces que no solo funcionan bien,
            sino que se sienten bien. Combino criterio de diseño con precisión técnica para entregar productos que destacan.
          </p>
          <p class="sobre-desc">
            Actualmente enfocado en <strong>Vue.js</strong>, <strong>design systems</strong>
            y experiencias de usuario memorables.
          </p>
          <a href="#contacto" class="btn-primary mt"><span class="btn-text">Trabajemos juntos →</span><span class="btn-shine"></span></a>
        </div>

        <div class="sobre-card" :class="{ visible: sobreVisible }">
          <div class="card-photo">
            <div class="photo-placeholder">
              <svg viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="32" r="16" stroke="currentColor" stroke-width="2"/>
                <path d="M10 72c0-16.569 13.431-30 30-30s30 13.431 30 30" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="orbit">
              <div class="orbit-dot" v-for="n in 4" :key="n" :style="{ '--on': n }"></div>
            </div>
            <div class="card-badge">✦ Open to work</div>
          </div>
          <div class="card-stats">
            <div class="stat" v-for="(s, i) in stats" :key="s.label" :style="{ '--si': i }">
              <span class="stat-num">{{ s.num }}</span>
              <span class="stat-label">{{ s.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="section skills" id="skills" ref="skillsRef">
      <div class="section-inner">
        <div class="section-header" :class="{ visible: skillsVisible }">
          <p class="section-label">/ habilidades</p>
          <h2>Mi stack<br />tecnológico</h2>
        </div>
        <div class="skills-grid" :class="{ visible: skillsVisible }">
          <div
            class="skill-card"
            v-for="(skill, i) in skills"
            :key="skill.name"
            :style="{ '--i': i }"
            @mousemove="tiltCard($event, `sc${i}`)"
            @mouseleave="resetCard(`sc${i}`)"
            :ref="el => { if(el) cardRefs[`sc${i}`] = el }"
          >
            <div class="skill-card-inner">
              <div class="skill-glow"></div>
              <div class="skill-icon">{{ skill.icon }}</div>
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" :style="{ '--pct': skill.pct + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PRÓXIMAMENTE -->
    <section class="section coming-soon" ref="comingRef">
      <div class="section-inner" :class="{ visible: comingVisible }">
        <p class="section-label">/ próximamente</p>
        <h2>Portafolio &amp;<br />proyectos <span class="accent">en camino</span></h2>
        <p class="coming-desc">Estoy preparando casos de estudio detallados de mis proyectos.<br />Mientras tanto, escríbeme directamente.</p>
        <div class="coming-chips">
          <span v-for="(c, i) in chips" :key="c" :style="{ '--ci': i }">{{ c }}</span>
        </div>
      </div>
    </section>

    <!-- CONTACTO -->
    <section class="section contacto" id="contacto" ref="contactoRef">
      <div class="section-inner" :class="{ visible: contactoVisible }">
        <p class="section-label">/ contacto</p>
        <h2>¿Tienes un proyecto<br />en mente?</h2>
        <a href="mailto:tu@email.com" class="email-link"
          @mousemove="magnetEmail" @mouseleave="resetEmail" ref="emailBtn">
          tu@email.com<span class="email-arrow">↗</span>
        </a>
        <div class="social-links">
          <a href="#" class="social-pill" v-for="s in socials" :key="s">{{ s }}</a>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <span>© {{ new Date().getFullYear() }} Tu Nombre</span>
      <span>Hecho con Vue.js ✦</span>
      <button class="back-top" @click="scrollTop">↑ Top</button>
    </footer>
  </main>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

// ── Theme ─────────────────────────────────────────
const isLight = ref(false)
const toggleTheme = () => {
  isLight.value = !isLight.value
  localStorage.setItem('theme', isLight.value ? 'light' : 'dark')
}

// ── Cursor ────────────────────────────────────────
const cursor      = ref(null)
const cursorDot   = ref(null)
const cursorTrail = ref(null)
let trailX = 0, trailY = 0, curX = 0, curY = 0, rafTrail

const moveCursor = (e) => {
  curX = e.clientX; curY = e.clientY
  if (cursor.value)    cursor.value.style.transform    = `translate(${curX-16}px,${curY-16}px)`
  if (cursorDot.value) cursorDot.value.style.transform = `translate(${curX-3}px,${curY-3}px)`
}
const animTrail = () => {
  trailX += (curX - trailX) * 0.11
  trailY += (curY - trailY) * 0.11
  if (cursorTrail.value)
    cursorTrail.value.style.transform = `translate(${trailX-20}px,${trailY-20}px)`
  rafTrail = requestAnimationFrame(animTrail)
}

// ── Scroll ────────────────────────────────────────
const isScrolled = ref(false)
const handleScroll = () => { isScrolled.value = window.scrollY > 40 }
const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

// ── Visibility ────────────────────────────────────
const heroVisible     = ref(false)
const sobreVisible    = ref(false)
const skillsVisible   = ref(false)
const comingVisible   = ref(false)
const contactoVisible = ref(false)

const sobreRef    = ref(null)
const skillsRef   = ref(null)
const comingRef   = ref(null)
const contactoRef = ref(null)
const emailBtn    = ref(null)

// ── Data ──────────────────────────────────────────
const heroChips = ['Vue.js', 'UI/UX', 'Frontend', 'Creative Dev']
const stats = [
  { num: '3+',   label: 'años de experiencia' },
  { num: '20+',  label: 'proyectos completados' },
  { num: '100%', label: 'dedicación' },
]
const skills = [
  { icon: '⚡', name: 'Vue.js',          level: 'Avanzado',    pct: 90 },
  { icon: '🎨', name: 'CSS / Tailwind',  level: 'Avanzado',    pct: 88 },
  { icon: '🔧', name: 'JavaScript',      level: 'Avanzado',    pct: 85 },
  { icon: '🖼️', name: 'UI / UX Design', level: 'Intermedio',  pct: 75 },
  { icon: '🗃️', name: 'Node.js',         level: 'Intermedio',  pct: 65 },
  { icon: '📦', name: 'Git / GitHub',    level: 'Avanzado',    pct: 82 },
]
const chips   = ['Proyectos reales', 'Casos de estudio', 'Process work', 'Side projects']
const socials = ['GitHub', 'LinkedIn', 'Twitter / X']

// ── 3D tilt ───────────────────────────────────────
const cardRefs = reactive({})
const tiltCard = (e, key) => {
  const el = cardRefs[key]
  if (!el) return
  const r = el.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width  - 0.5
  const y = (e.clientY - r.top)  / r.height - 0.5
  el.style.transform = `perspective(600px) rotateY(${x*14}deg) rotateX(${-y*14}deg) scale(1.04)`
}
const resetCard = (key) => {
  const el = cardRefs[key]
  if (el) el.style.transform = ''
}

// ── Magnetic email ────────────────────────────────
const magnetEmail = (e) => {
  const el = emailBtn.value
  if (!el) return
  const r = el.getBoundingClientRect()
  const x = (e.clientX - r.left - r.width  / 2) * 0.22
  const y = (e.clientY - r.top  - r.height / 2) * 0.22
  el.style.transform = `translate(${x}px,${y}px)`
}
const resetEmail = () => { if (emailBtn.value) emailBtn.value.style.transform = '' }

// ── Particles ─────────────────────────────────────
const particlesCanvas = ref(null)
let rafParticles
const initParticles = () => {
  const canvas = particlesCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
  resize()
  window.addEventListener('resize', resize)

  const pts = Array.from({ length: 55 }, () => ({
    x: Math.random() * canvas.width,  y: Math.random() * canvas.height,
    r: Math.random() * 1.4 + 0.3,
    dx: (Math.random() - 0.5) * 0.32, dy: (Math.random() - 0.5) * 0.32,
    o: Math.random() * 0.35 + 0.06,
  }))

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const rgb = isLight.value ? '60,60,60' : '200,240,77'
    pts.forEach(p => {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${rgb},${p.o})`
      ctx.fill()
      p.x += p.dx; p.y += p.dy
      if (p.x < 0 || p.x > canvas.width)  p.dx *= -1
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1
    })
    rafParticles = requestAnimationFrame(draw)
  }
  draw()
}

// ── Intersection observer ─────────────────────────
let observers = []
const observe = (el, flag, threshold = 0.18) => {
  if (!el) return
  const obs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) flag.value = true }, { threshold }
  )
  obs.observe(el)
  observers.push(obs)
}

onMounted(() => {
  if (localStorage.getItem('theme') === 'light') isLight.value = true
  window.addEventListener('mousemove', moveCursor)
  window.addEventListener('scroll', handleScroll)
  animTrail()
  initParticles()
  setTimeout(() => { heroVisible.value = true }, 120)
  observe(sobreRef.value,    sobreVisible)
  observe(skillsRef.value,   skillsVisible)
  observe(comingRef.value,   comingVisible)
  observe(contactoRef.value, contactoVisible)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor)
  window.removeEventListener('scroll', handleScroll)
  cancelAnimationFrame(rafTrail)
  cancelAnimationFrame(rafParticles)
  observers.forEach(o => o.disconnect())
})
</script>

<style scoped>
/* ══ CSS Variables ══════════════════════════════ */
.landing {
  --bg:         #080a0e;
  --bg-soft:    #0f1117;
  --surface:    rgba(255,255,255,0.04);
  --border:     rgba(255,255,255,0.08);
  --text:       #e8eaf0;
  --muted:      rgba(232,234,240,0.52);
  --accent:     #c8f04d;
  --accent-dim: rgba(200,240,77,0.11);
  --accent-rgb: 200,240,77;
  --nav-blur:   rgba(8,10,14,0.84);
  transition: background 0.5s, color 0.5s;
}
.landing.light-mode {
  --bg:         #f4f3ee;
  --bg-soft:    #eceae1;
  --surface:    rgba(0,0,0,0.04);
  --border:     rgba(0,0,0,0.09);
  --text:       #191919;
  --muted:      rgba(25,25,25,0.52);
  --accent:     #4e7c00;
  --accent-dim: rgba(78,124,0,0.09);
  --accent-rgb: 78,124,0;
  --nav-blur:   rgba(244,243,238,0.9);
}

/* ══ Reset ══════════════════════════════════════ */
.landing *, .landing *::before, .landing *::after {
  box-sizing: border-box; margin: 0; padding: 0;
}
.landing {
  background: var(--bg); color: var(--text);
  font-family: 'DM Sans', sans-serif;
  min-height: 100vh; width: 100%; max-width: 100% !important;
  overflow-x: hidden; position: relative;
  padding: 0 !important; display: block !important;
}

/* ══ Cursor ═════════════════════════════════════ */
.cursor {
  position: fixed; top: 0; left: 0; z-index: 9999;
  width: 32px; height: 32px; border-radius: 50%;
  border: 1.5px solid var(--accent); pointer-events: none;
  transition: transform 0.1s ease, border-color 0.4s;
  mix-blend-mode: difference;
}
.cursor-dot {
  position: fixed; top: 0; left: 0; z-index: 9999;
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--accent); pointer-events: none;
  transition: background 0.4s;
}
.cursor-trail {
  position: fixed; top: 0; left: 0; z-index: 9998;
  width: 40px; height: 40px; border-radius: 50%;
  border: 1px solid rgba(var(--accent-rgb),0.18);
  pointer-events: none;
}

/* ══ Background ═════════════════════════════════ */
.bg-particles { position: fixed; inset: 0; z-index: 0; pointer-events: none; }
.bg-grid {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 60px 60px;
}
.bg-glow {
  position: fixed; z-index: 0; border-radius: 50%;
  filter: blur(130px); pointer-events: none; opacity: 0.15;
  transition: opacity 0.5s;
}
.glow-1 { width:600px;height:600px;top:-200px;right:-150px; background:radial-gradient(circle,var(--accent) 0%,transparent 70%); animation:floatGlow 8s ease-in-out infinite; }
.glow-2 { width:500px;height:500px;bottom:10%;left:-100px; background:radial-gradient(circle,#4d8cf0 0%,transparent 70%); animation:floatGlow 11s ease-in-out infinite reverse; }
.glow-3 { width:350px;height:350px;top:50%;right:10%; background:radial-gradient(circle,#f04d8c 0%,transparent 70%); animation:floatGlow 14s ease-in-out infinite 3s; opacity:0.08; }
@keyframes floatGlow {
  0%,100% { transform:translateY(0) scale(1); }
  50%     { transform:translateY(-45px) scale(1.1); }
}

/* ══ Nav ════════════════════════════════════════ */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 22px 60px;
  transition: background 0.35s, border-color 0.35s;
  font-family: 'Syne', sans-serif;
}
.nav.scrolled {
  background: var(--nav-blur); backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--border);
}
.nav-logo { font-weight: 800; font-size: 0.82rem; letter-spacing: 0.14em; color: var(--text); }
.logo-bracket { color: var(--accent); }
.nav-links { display: flex; gap: 26px; align-items: center; }
.nav-link {
  color: var(--muted); text-decoration: none; font-size: 0.82rem;
  display: flex; align-items: center; gap: 5px; transition: color 0.2s;
}
.nav-link:hover { color: var(--text); background: none; }
.nav-num { font-size: 0.6rem; color: var(--accent); font-weight: 700; }

.theme-toggle {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 50%; width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--text);
  transition: border-color 0.2s, transform 0.3s, background 0.3s;
}
.theme-toggle:hover { border-color: var(--accent); transform: rotate(25deg) scale(1.12); }
.toggle-icon svg { width: 15px; height: 15px; stroke: var(--text); transition: stroke 0.4s; }

.nav-cta {
  background: var(--accent) !important; color: #0a0a0a !important;
  padding: 8px 20px; border-radius: 100px; font-weight: 700;
  font-size: 0.82rem !important; text-decoration: none;
  position: relative; overflow: hidden;
  transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s;
}
.nav-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(var(--accent-rgb),0.4); }
.nav-cta-shine {
  position: absolute; inset: 0;
  background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%);
  transform: translateX(-100%); transition: transform 0.4s;
}
.nav-cta:hover .nav-cta-shine { transform: translateX(100%); }

/* ══ Hero ═══════════════════════════════════════ */
.hero {
  position: relative; z-index: 1;
  min-height: 100vh;
  display: flex; flex-direction: column;
  justify-content: space-between;
  padding-top: 120px;
}

/* Contenido central del hero */
.hero-content {
  flex: 1;
  display: flex; flex-direction: column;
  justify-content: center; align-items: flex-start;
  padding: 0 60px;
  padding-bottom: 80px; /* espacio antes del hero-bottom */
}

/* Zona inferior: scroll hint + marquee */
.hero-bottom {
  position: relative;
  width: 100%;
  border-top: 1px solid var(--border);
}

.hero-deco-num {
  position: absolute; right: 5vw; top: 50%;
  transform: translateY(-50%) translateX(60px);
  font-family: 'Syne', sans-serif;
  font-size: clamp(5rem, 14vw, 14rem);
  font-weight: 800; letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 1px var(--border);
  pointer-events: none; user-select: none;
  opacity: 0; transition: opacity 0.9s ease 0.8s, transform 0.9s ease 0.8s;
  /* keep it within hero-content visually */
  bottom: 80px;
}
.hero-deco-num.visible { opacity: 1; transform: translateY(-50%) translateX(0); }

.hero-tag {
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--accent-dim); border: 1px solid rgba(var(--accent-rgb),0.28);
  border-radius: 100px; padding: 8px 16px; font-size: 0.79rem; color: var(--accent);
  opacity: 0; transform: translateY(24px);
  transition: all 0.65s cubic-bezier(0.34,1.56,0.64,1) 0.1s;
  margin-bottom: 28px;
}
.hero-tag.visible { opacity: 1; transform: translateY(0); }
.tag-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--accent); animation: pulse 2s infinite;
}
.tag-year {
  margin-left: 4px; padding: 2px 8px;
  background: rgba(var(--accent-rgb),0.15);
  border-radius: 100px; font-size: 0.68rem; font-weight: 600;
}
@keyframes pulse {
  0%,100% { opacity:1; box-shadow:0 0 0 0 rgba(var(--accent-rgb),0.5); }
  50%     { opacity:.4; box-shadow:0 0 0 7px rgba(var(--accent-rgb),0); }
}

/* Word-reveal hero title */
.hero-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(3.5rem, 8vw, 7.5rem);
  font-weight: 800; line-height: 0.95;
  letter-spacing: -0.03em; margin-bottom: 28px;
}
.hero-title .line { display: block; overflow: hidden; }
.word-reveal {
  display: inline-block;
  opacity: 0; transform: translateY(105%);
  transition: opacity 0.7s ease, transform 0.75s cubic-bezier(0.22,1,0.36,1);
}
.hero-title.visible .word-reveal    { opacity:1; transform:translateY(0); transition-delay:.28s; }
.hero-title.visible .word-reveal.d1 { transition-delay:.38s; }
.hero-title.visible .word-reveal.d2 { transition-delay:.46s; }
.hero-title.visible .word-reveal.d3 { transition-delay:.56s; }
.accent { color: var(--accent); }

.hero-sub {
  font-size: clamp(1rem, 1.5vw, 1.18rem);
  color: var(--muted); line-height: 1.75; max-width: 480px; margin-bottom: 40px;
  opacity: 0; transform: translateY(18px); transition: all 0.7s ease 0.65s;
}
.hero-sub.visible { opacity: 1; transform: translateY(0); }
.hero-sub em { font-style: normal; color: var(--text); font-weight: 500; }

.hero-actions {
  display: flex; gap: 16px; align-items: center; margin-bottom: 36px;
  opacity: 0; transform: translateY(18px); transition: all 0.7s ease 0.78s;
}
.hero-actions.visible { opacity: 1; transform: translateY(0); }

.hero-chips {
  display: flex; gap: 10px; flex-wrap: wrap;
  opacity: 0; transform: translateY(16px); transition: all 0.6s ease 0.92s;
}
.hero-chips.visible { opacity: 1; transform: translateY(0); }
.chip {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 100px; padding: 6px 14px;
  font-size: 0.74rem; color: var(--muted); font-family: 'Syne', sans-serif;
  animation: chipFloat 4s ease-in-out infinite;
  animation-delay: calc(var(--ci) * 0.6s);
}
@keyframes chipFloat {
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-5px); }
}

/* Buttons */
.btn-primary {
  background: var(--accent); color: #0a0a0a;
  padding: 14px 28px; border-radius: 100px;
  font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.9rem;
  text-decoration: none; letter-spacing: 0.02em;
  position: relative; overflow: hidden; display: inline-flex; align-items: center;
  transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s;
}
.btn-primary:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 12px 35px rgba(var(--accent-rgb),0.4); background: var(--accent); }
.btn-shine {
  position: absolute; inset: 0;
  background: linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.28) 50%, transparent 62%);
  transform: translateX(-100%); transition: transform 0.5s ease;
}
.btn-primary:hover .btn-shine { transform: translateX(100%); }
.btn-primary.mt { margin-top: 32px; }

.btn-ghost {
  color: var(--muted); padding: 14px 24px; border-radius: 100px;
  border: 1px solid var(--border); font-family: 'Syne', sans-serif;
  font-weight: 600; font-size: 0.9rem; text-decoration: none;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}
.btn-ghost:hover { border-color: var(--accent); color: var(--text); background: var(--accent-dim); }

.hero-scroll-hint {
  display: inline-flex; align-items: center; gap: 12px;
  padding: 16px 60px;
  font-size: 0.7rem; letter-spacing: 0.14em; color: var(--muted); text-transform: uppercase;
  opacity: 0; transition: opacity 0.8s ease 1.1s;
}
.hero-scroll-hint.visible { opacity: 1; }
.scroll-line { width: 40px; height: 1px; background: currentColor; animation: scrollLine 2s ease infinite; }
@keyframes scrollLine {
  0%  { transform:scaleX(0); transform-origin:left; }
  50% { transform:scaleX(1); transform-origin:left; }
  51% { transform:scaleX(1); transform-origin:right; }
  100%{ transform:scaleX(0); transform-origin:right; }
}

.marquee-wrap { overflow:hidden; border-top:1px solid var(--border); padding:14px 0; }
.marquee-track {
  display:flex;white-space:nowrap;
  animation: marquee 28s linear infinite;
  font-size:0.72rem;letter-spacing:0.12em;color:var(--muted);font-family:'Syne',sans-serif;
}
@keyframes marquee { 0%{transform:translateX(0);}100%{transform:translateX(-50%);} }

/* ══ Sections ═══════════════════════════════════ */
.section { position: relative; z-index: 1; padding: 120px 60px; }
.section-inner { max-width: 1100px; margin: 0 auto; }
.section-label { font-size:0.72rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--accent);font-family:'Syne',sans-serif;margin-bottom:14px; }
.section h2 {
  font-family:'Syne',sans-serif; font-size:clamp(2.4rem,5vw,4rem);
  font-weight:800;line-height:1.05;letter-spacing:-0.025em;
  margin-bottom:32px;color:var(--text);
}
.section h2 .accent { color: var(--accent); }

/* Sobre mí */
.sobre-mi .section-inner { display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center; }
.sobre-text { opacity:0;transform:translateX(-32px);transition:all 0.85s cubic-bezier(0.22,1,0.36,1); }
.sobre-text.visible { opacity:1;transform:translateX(0); }
.sobre-desc { color:var(--muted);line-height:1.82;margin-bottom:16px;font-size:1.05rem; }
.sobre-desc strong { color:var(--text);font-weight:500; }

.sobre-card { opacity:0;transform:translateX(32px) scale(0.97);transition:all 0.85s cubic-bezier(0.22,1,0.36,1) 0.15s; }
.sobre-card.visible { opacity:1;transform:translateX(0) scale(1); }

.card-photo {
  position:relative;background:var(--surface);border:1px solid var(--border);
  border-radius:24px;padding:48px;
  display:flex;align-items:center;justify-content:center;
  margin-bottom:20px;min-height:240px;overflow:hidden;
}
.card-photo::before {
  content:'';position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(circle at 70% 30%, rgba(var(--accent-rgb),0.07) 0%, transparent 65%);
}
.photo-placeholder { width:80px;height:80px;color:var(--border);position:relative;z-index:1; }
.photo-placeholder svg { width:100%;height:100%; }

.orbit { position:absolute;inset:0;pointer-events:none; }
.orbit-dot {
  position:absolute;top:50%;left:50%;
  width:6px;height:6px;border-radius:50%;
  background:var(--accent);opacity:0.45;
  animation:orbitDot 6s linear infinite;
  animation-delay:calc((var(--on)-1)*-1.5s);
}
@keyframes orbitDot {
  0%  { transform:rotate(0deg)   translateX(78px) rotate(0deg);   }
  100%{ transform:rotate(360deg) translateX(78px) rotate(-360deg);}
}

.card-badge {
  position:absolute;bottom:18px;right:18px;
  background:var(--accent-dim);border:1px solid rgba(var(--accent-rgb),0.3);
  color:var(--accent);padding:6px 14px;border-radius:100px;
  font-size:0.76rem;font-family:'Syne',sans-serif;
}

.card-stats { display:grid;grid-template-columns:repeat(3,1fr);gap:14px; }
.stat {
  background:var(--surface);border:1px solid var(--border);
  border-radius:14px;padding:18px 14px;text-align:center;
  opacity:0;transform:translateY(16px);
  transition:all 0.5s ease calc(var(--si)*0.1s + 0.3s);
}
.sobre-card.visible .stat { opacity:1;transform:translateY(0); }
.stat-num { display:block;font-family:'Syne',sans-serif;font-size:1.6rem;font-weight:800;color:var(--accent); }
.stat-label { display:block;font-size:0.68rem;color:var(--muted);margin-top:4px; }

/* Skills */
.skills { background: var(--bg-soft); }
.section-header { opacity:0;transform:translateY(22px);transition:all 0.75s ease;margin-bottom:52px; }
.section-header.visible { opacity:1;transform:translateY(0); }
.skills-grid { display:grid;grid-template-columns:repeat(2,1fr);gap:16px;opacity:0;transform:translateY(32px);transition:all 0.8s ease 0.18s; }
.skills-grid.visible { opacity:1;transform:translateY(0); }

.skill-card {
  border-radius:18px;
  transition:transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s;
  will-change:transform;
  opacity:0;transform:translateY(24px) scale(0.96);
}
.skills-grid.visible .skill-card {
  opacity:1;transform:translateY(0) scale(1);
  transition: opacity 0.5s ease calc(var(--i)*0.08s),
              transform 0.6s cubic-bezier(0.22,1,0.36,1) calc(var(--i)*0.08s),
              box-shadow 0.3s;
}
.skill-card:hover { box-shadow:0 20px 50px rgba(0,0,0,0.2); }

.skill-card-inner {
  background:var(--surface);border:1px solid var(--border);
  border-radius:18px;padding:22px 24px;
  display:flex;flex-direction:column;gap:12px;
  transition:border-color 0.3s;position:relative;overflow:hidden;
}
.skill-card:hover .skill-card-inner { border-color:rgba(var(--accent-rgb),0.3); }

.skill-glow {
  position:absolute;inset:0;border-radius:18px;pointer-events:none;
  background:radial-gradient(circle at 50% 50%,rgba(var(--accent-rgb),0.08),transparent 70%);
  opacity:0;transition:opacity 0.4s;
}
.skill-card:hover .skill-glow { opacity:1; }

.skill-icon { font-size:1.4rem; }
.skill-info { display:flex;justify-content:space-between;align-items:center; }
.skill-name { font-family:'Syne',sans-serif;font-weight:600;font-size:0.95rem;color:var(--text); }
.skill-level { font-size:0.73rem;color:var(--muted); }
.skill-bar { height:4px;background:var(--border);border-radius:100px;overflow:hidden; }
.skill-fill {
  height:100%;background:linear-gradient(90deg,var(--accent),rgba(var(--accent-rgb),0.6));
  border-radius:100px;width:0;
  transition:width 1.3s cubic-bezier(0.4,0,0.2,1) calc(var(--i)*0.1s + 0.5s);
}
.skills-grid.visible .skill-fill { width:var(--pct); }

/* Coming soon */
.coming-soon .section-inner { opacity:0;transform:translateY(28px);transition:all 0.8s ease; }
.coming-soon .section-inner.visible { opacity:1;transform:translateY(0); }
.coming-desc { color:var(--muted);font-size:1.1rem;line-height:1.72;margin-bottom:36px; }
.coming-chips { display:flex;flex-wrap:wrap;gap:12px; }
.coming-chips span {
  background:var(--surface);border:1px solid var(--border);
  border-radius:100px;padding:8px 20px;
  font-size:0.83rem;color:var(--muted);font-family:'Syne',sans-serif;
  opacity:0;transform:translateY(12px);
  transition:opacity 0.45s ease calc(var(--ci)*0.08s + 0.3s),
             transform 0.45s ease calc(var(--ci)*0.08s + 0.3s);
}
.coming-soon .section-inner.visible .coming-chips span { opacity:1;transform:translateY(0); }

/* Contacto */
.contacto { background:var(--bg-soft);text-align:center; }
.contacto .section-inner {
  opacity:0;transform:translateY(28px);transition:all 0.8s ease;
  display:flex;flex-direction:column;align-items:center;
}
.contacto .section-inner.visible { opacity:1;transform:translateY(0); }

.email-link {
  display:inline-flex;align-items:center;gap:12px;
  font-family:'Syne',sans-serif;
  font-size:clamp(1.4rem,3.5vw,2.7rem);
  font-weight:700;color:var(--text);
  text-decoration:none;margin:8px 0 48px;
  transition:color 0.25s, transform 0.35s cubic-bezier(0.22,1,0.36,1);
  will-change:transform;
}
.email-link:hover { color:var(--accent);background:none; }
.email-arrow { display:inline-block;transition:transform 0.3s; }
.email-link:hover .email-arrow { transform:translate(5px,-5px); }

.social-links { display:flex;gap:12px;flex-wrap:wrap;justify-content:center; }
.social-pill {
  border:1px solid var(--border);border-radius:100px;padding:10px 22px;
  font-size:0.83rem;color:var(--muted);text-decoration:none;
  font-family:'Syne',sans-serif;
  transition:border-color 0.2s, color 0.2s, background 0.2s, transform 0.22s;
}
.social-pill:hover { border-color:var(--accent);color:var(--accent);background:var(--accent-dim);transform:translateY(-2px); }

/* Footer */
.footer {
  position:relative;z-index:1;
  display:flex;justify-content:space-between;align-items:center;
  padding:26px 60px;border-top:1px solid var(--border);
  font-size:0.78rem;color:var(--muted);font-family:'Syne',sans-serif;letter-spacing:0.04em;
}
.back-top {
  background:var(--surface);border:1px solid var(--border);border-radius:100px;
  padding:7px 16px;cursor:pointer;font-family:'Syne',sans-serif;
  font-size:0.75rem;color:var(--muted);
  transition:border-color 0.2s,color 0.2s,transform 0.22s;
}
.back-top:hover { border-color:var(--accent);color:var(--accent);transform:translateY(-2px); }

/* ══ Responsive ══════════════════════════════════ */
@media(max-width:768px){
  .nav { padding:18px 24px; }
  .nav-link { display:none; }
  .hero { padding-top: 80px; }
  .hero-content { padding: 0 24px; padding-bottom: 60px; }
  .hero-scroll-hint { padding: 14px 24px; }
  .hero-deco-num { display:none; }
  .section { padding:80px 24px; }
  .sobre-mi .section-inner { grid-template-columns:1fr;gap:44px; }
  .skills-grid { grid-template-columns:1fr; }
  .footer { padding:22px 24px;flex-direction:column;gap:10px;text-align:center; }
}
</style>