<template>
  <main class="landing">
    <!-- Cursor personalizado -->
    <div class="cursor" ref="cursor"></div>
    <div class="cursor-dot" ref="cursorDot"></div>

    <!-- Fondo animado -->
    <div class="bg-grid"></div>
    <div class="bg-glow glow-1"></div>
    <div class="bg-glow glow-2"></div>

    <!-- NAV -->
    <nav class="nav" :class="{ scrolled: isScrolled }">
      <span class="nav-logo">TU NOMBRE</span>
      <div class="nav-links">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#skills">Skills</a>
        <a href="#contacto" class="nav-cta">Hablemos →</a>
      </div>
    </nav>

    <!-- HERO -->
    <section class="hero" id="inicio">
      <div class="hero-tag" :class="{ visible: heroVisible }">
        <span class="tag-dot"></span>
        Disponible para proyectos
      </div>

      <h1 class="hero-title" :class="{ visible: heroVisible }">
        <span class="line">Diseño &amp;</span>
        <span class="line accent">desarrollo</span>
        <span class="line">digital.</span>
      </h1>

      <p class="hero-sub" :class="{ visible: heroVisible }">
        Creo experiencias web que combinan <em>diseño cuidado</em><br />
        con <em>código limpio</em> y orientado a resultados.
      </p>

      <div class="hero-actions" :class="{ visible: heroVisible }">
        <a href="#sobre-mi" class="btn-primary">Ver mi trabajo</a>
        <a href="#contacto" class="btn-ghost">Contactar</a>
      </div>

      <div class="hero-scroll-hint" :class="{ visible: heroVisible }">
        <span>scroll</span>
        <div class="scroll-line"></div>
      </div>

      <!-- Marquee decorativo -->
      <div class="marquee-wrap">
        <div class="marquee-track">
          <span v-for="i in 8" :key="i">Vue.js &nbsp;·&nbsp; UI/UX &nbsp;·&nbsp; Frontend &nbsp;·&nbsp; Diseño Web &nbsp;·&nbsp; JavaScript &nbsp;·&nbsp;</span>
        </div>
      </div>
    </section>

    <!-- SOBRE MÍ -->
    <section class="section sobre-mi" id="sobre-mi" ref="sobreRef">
      <div class="section-inner">
        <div class="sobre-text" :class="{ visible: sobreVisible }">
          <p class="section-label">/ sobre mí</p>
          <h2>Hola, soy<br /><strong>Tu Nombre</strong></h2>
          <p class="sobre-desc">
            Desarrollador frontend con pasión por construir interfaces que no solo funcionan bien,
            sino que se sienten bien. Combino criterio de diseño con precisión técnica para
            entregar productos que destacan.
          </p>
          <p class="sobre-desc">
            Actualmente enfocado en <strong>Vue.js</strong>, <strong>design systems</strong>
            y experiencias de usuario memorables.
          </p>
          <a href="#contacto" class="btn-primary mt">Trabajemos juntos →</a>
        </div>

        <div class="sobre-card" :class="{ visible: sobreVisible }">
          <div class="card-photo">
            <div class="photo-placeholder">
              <svg viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="32" r="16" stroke="currentColor" stroke-width="2"/>
                <path d="M10 72c0-16.569 13.431-30 30-30s30 13.431 30 30" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="card-badge">✦ Open to work</div>
          </div>
          <div class="card-stats">
            <div class="stat" v-for="s in stats" :key="s.label">
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
          >
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
    </section>

    <!-- PRÓXIMAMENTE -->
    <section class="section coming-soon" ref="comingRef">
      <div class="section-inner" :class="{ visible: comingVisible }">
        <p class="section-label">/ próximamente</p>
        <h2>Portafolio &amp;<br />proyectos <span class="accent">en camino</span></h2>
        <p class="coming-desc">
          Estoy preparando casos de estudio detallados de mis proyectos.<br />
          Mientras tanto, escríbeme directamente.
        </p>
        <div class="coming-chips">
          <span v-for="c in chips" :key="c">{{ c }}</span>
        </div>
      </div>
    </section>

    <!-- CONTACTO -->
    <section class="section contacto" id="contacto" ref="contactoRef">
      <div class="section-inner" :class="{ visible: contactoVisible }">
        <p class="section-label">/ contacto</p>
        <h2>¿Tienes un proyecto<br />en mente?</h2>
        <a href="mailto:tu@email.com" class="email-link">
          tu@email.com
          <span class="email-arrow">↗</span>
        </a>

        <div class="social-links">
          <a href="#" class="social-pill">GitHub</a>
          <a href="#" class="social-pill">LinkedIn</a>
          <a href="#" class="social-pill">Twitter / X</a>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <span>© {{ new Date().getFullYear() }} Tu Nombre</span>
      <span>Hecho con Vue.js ✦</span>
    </footer>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Cursor
const cursor = ref(null)
const cursorDot = ref(null)

// Scroll
const isScrolled = ref(false)

// Visibility flags
const heroVisible = ref(false)
const sobreVisible = ref(false)
const skillsVisible = ref(false)
const comingVisible = ref(false)
const contactoVisible = ref(false)

// Refs para intersección
const sobreRef = ref(null)
const skillsRef = ref(null)
const comingRef = ref(null)
const contactoRef = ref(null)

// Data
const stats = [
  { num: '3+', label: 'años de experiencia' },
  { num: '20+', label: 'proyectos completados' },
  { num: '100%', label: 'dedicación' },
]

const skills = [
  { icon: '⚡', name: 'Vue.js', level: 'Avanzado', pct: 90 },
  { icon: '🎨', name: 'CSS / Tailwind', level: 'Avanzado', pct: 88 },
  { icon: '🔧', name: 'JavaScript', level: 'Avanzado', pct: 85 },
  { icon: '🖼️', name: 'UI / UX Design', level: 'Intermedio', pct: 75 },
  { icon: '🗃️', name: 'Node.js', level: 'Intermedio', pct: 65 },
  { icon: '📦', name: 'Git / GitHub', level: 'Avanzado', pct: 82 },
]

const chips = ['Proyectos reales', 'Casos de estudio', 'Process work', 'Side projects']

// Cursor tracking
const moveCursor = (e) => {
  if (!cursor.value || !cursorDot.value) return
  cursor.value.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`
  cursorDot.value.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
}

// Scroll handler
const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

// Intersection observer
let observers = []
const observe = (el, flagRef, threshold = 0.2) => {
  if (!el) return
  const obs = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) flagRef.value = true },
    { threshold }
  )
  obs.observe(el)
  observers.push(obs)
}

onMounted(() => {
  window.addEventListener('mousemove', moveCursor)
  window.addEventListener('scroll', handleScroll)

  setTimeout(() => { heroVisible.value = true }, 100)

  observe(sobreRef.value, sobreVisible)
  observe(skillsRef.value, skillsVisible)
  observe(comingRef.value, comingVisible)
  observe(contactoRef.value, contactoVisible)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor)
  window.removeEventListener('scroll', handleScroll)
  observers.forEach(o => o.disconnect())
})
</script>

<style scoped>
/* ── Variables ─────────────────────────────────── */
:root {
  --bg: #080a0e;
  --surface: #0f1117;
  --border: rgba(255,255,255,0.07);
  --text: #e8eaf0;
  --muted: #6b7280;
  --accent: #c8f04d;
  --accent-dim: rgba(200,240,77,0.12);
  --radius: 16px;
  --font-display: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}

/* ── Reset base ─────────────────────────────── */
.landing {
  background: #080a0e;
  color: #e8eaf0;
  font-family: 'DM Sans', sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

/* ── Cursor ─────────────────────────────────── */
.cursor {
  position: fixed; top: 0; left: 0; z-index: 9999;
  width: 32px; height: 32px; border-radius: 50%;
  border: 1.5px solid #c8f04d;
  pointer-events: none; transition: transform 0.12s ease;
  mix-blend-mode: difference;
}
.cursor-dot {
  position: fixed; top: 0; left: 0; z-index: 9999;
  width: 6px; height: 6px; border-radius: 50%;
  background: #c8f04d; pointer-events: none;
  transition: transform 0.06s ease;
}

/* ── Background ─────────────────────────────── */
.bg-grid {
  position: fixed; inset: 0; z-index: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}
.bg-glow {
  position: fixed; z-index: 0; border-radius: 50%;
  filter: blur(120px); pointer-events: none; opacity: 0.18;
}
.glow-1 {
  width: 600px; height: 600px; top: -200px; right: -150px;
  background: radial-gradient(circle, #c8f04d 0%, transparent 70%);
  animation: floatGlow 8s ease-in-out infinite;
}
.glow-2 {
  width: 500px; height: 500px; bottom: 0; left: -100px;
  background: radial-gradient(circle, #4d8cf0 0%, transparent 70%);
  animation: floatGlow 10s ease-in-out infinite reverse;
}
@keyframes floatGlow {
  0%,100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-40px) scale(1.08); }
}

/* ── Nav ────────────────────────────────────── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 24px 60px;
  transition: background 0.3s, backdrop-filter 0.3s, border-color 0.3s;
  font-family: 'Syne', sans-serif;
}
.nav.scrolled {
  background: rgba(8,10,14,0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.07);
}
.nav-logo {
  font-weight: 800; font-size: 0.85rem; letter-spacing: 0.15em;
  color: #c8f04d;
}
.nav-links { display: flex; gap: 32px; align-items: center; }
.nav-links a {
  color: rgba(232,234,240,0.7); text-decoration: none;
  font-size: 0.875rem; letter-spacing: 0.02em;
  transition: color 0.2s;
}
.nav-links a:hover { color: #e8eaf0; }
.nav-cta {
  background: #c8f04d !important; color: #080a0e !important;
  padding: 8px 20px; border-radius: 100px;
  font-weight: 600; font-size: 0.82rem !important;
  transition: opacity 0.2s !important;
}
.nav-cta:hover { opacity: 0.85; }

/* ── Hero ───────────────────────────────────── */
.hero {
  position: relative; z-index: 1;
  min-height: 100vh;
  display: flex; flex-direction: column;
  justify-content: center; align-items: flex-start;
  padding: 0 60px; padding-top: 120px;
}
.hero-tag {
  display: inline-flex; align-items: center; gap: 10px;
  background: rgba(200,240,77,0.1);
  border: 1px solid rgba(200,240,77,0.25);
  border-radius: 100px; padding: 8px 16px;
  font-size: 0.82rem; color: #c8f04d; letter-spacing: 0.05em;
  font-family: 'DM Sans', sans-serif;
  opacity: 0; transform: translateY(20px);
  transition: all 0.6s ease 0.1s;
  margin-bottom: 28px;
}
.hero-tag.visible { opacity: 1; transform: translateY(0); }
.tag-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #c8f04d;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%,100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.hero-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(3.5rem, 8vw, 7.5rem);
  font-weight: 800; line-height: 0.95;
  letter-spacing: -0.03em;
  margin-bottom: 28px;
  opacity: 0; transform: translateY(30px);
  transition: all 0.8s ease 0.3s;
}
.hero-title.visible { opacity: 1; transform: translateY(0); }
.hero-title .line { display: block; }
.hero-title .accent { color: #c8f04d; }

.hero-sub {
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: rgba(232,234,240,0.6);
  line-height: 1.7; max-width: 480px;
  margin-bottom: 40px;
  opacity: 0; transform: translateY(20px);
  transition: all 0.7s ease 0.5s;
}
.hero-sub.visible { opacity: 1; transform: translateY(0); }
.hero-sub em { font-style: normal; color: #e8eaf0; font-weight: 500; }

.hero-actions {
  display: flex; gap: 16px; align-items: center;
  opacity: 0; transform: translateY(20px);
  transition: all 0.7s ease 0.65s;
}
.hero-actions.visible { opacity: 1; transform: translateY(0); }

.btn-primary {
  background: #c8f04d; color: #080a0e;
  padding: 14px 28px; border-radius: 100px;
  font-family: 'Syne', sans-serif;
  font-weight: 700; font-size: 0.9rem;
  text-decoration: none; letter-spacing: 0.02em;
  transition: transform 0.2s, box-shadow 0.2s;
  display: inline-block;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(200,240,77,0.35);
}
.btn-primary.mt { margin-top: 32px; }

.btn-ghost {
  color: rgba(232,234,240,0.7);
  padding: 14px 24px; border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.12);
  font-family: 'Syne', sans-serif;
  font-weight: 600; font-size: 0.9rem;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s;
}
.btn-ghost:hover { border-color: rgba(255,255,255,0.3); color: #e8eaf0; }

.hero-scroll-hint {
  position: absolute; bottom: 48px; left: 60px;
  display: flex; align-items: center; gap: 12px;
  font-size: 0.72rem; letter-spacing: 0.15em;
  color: rgba(232,234,240,0.35); text-transform: uppercase;
  opacity: 0; transition: opacity 0.8s ease 1s;
}
.hero-scroll-hint.visible { opacity: 1; }
.scroll-line {
  width: 40px; height: 1px; background: currentColor;
  animation: scrollLine 2s ease infinite;
}
@keyframes scrollLine {
  0% { transform: scaleX(0); transform-origin: left; }
  50% { transform: scaleX(1); transform-origin: left; }
  51% { transform: scaleX(1); transform-origin: right; }
  100% { transform: scaleX(0); transform-origin: right; }
}

/* Marquee */
.marquee-wrap {
  position: absolute; bottom: 0; left: 0; right: 0;
  overflow: hidden; border-top: 1px solid rgba(255,255,255,0.06);
  padding: 16px 0;
}
.marquee-track {
  display: flex; white-space: nowrap;
  animation: marquee 25s linear infinite;
  font-size: 0.75rem; letter-spacing: 0.1em;
  color: rgba(232,234,240,0.2);
  font-family: 'Syne', sans-serif;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ── Sections ───────────────────────────────── */
.section { position: relative; z-index: 1; padding: 120px 60px; }
.section-inner {
  max-width: 1100px; margin: 0 auto;
}
.section-label {
  font-size: 0.75rem; letter-spacing: 0.18em;
  text-transform: uppercase; color: #c8f04d;
  font-family: 'Syne', sans-serif; margin-bottom: 16px;
}
.section h2 {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800; line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
}
.section h2 .accent { color: #c8f04d; }

/* Sobre mí */
.sobre-mi .section-inner {
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
  align-items: center;
}
.sobre-text {
  opacity: 0; transform: translateX(-30px);
  transition: all 0.8s ease;
}
.sobre-text.visible { opacity: 1; transform: translateX(0); }
.sobre-desc {
  color: rgba(232,234,240,0.65); line-height: 1.8;
  margin-bottom: 16px; font-size: 1.05rem;
}
.sobre-desc strong { color: #e8eaf0; font-weight: 500; }

.sobre-card {
  opacity: 0; transform: translateX(30px);
  transition: all 0.8s ease 0.2s;
}
.sobre-card.visible { opacity: 1; transform: translateX(0); }
.card-photo {
  position: relative;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px; padding: 48px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 20px; min-height: 240px;
}
.photo-placeholder {
  width: 80px; height: 80px; color: rgba(255,255,255,0.2);
}
.photo-placeholder svg { width: 100%; height: 100%; }
.card-badge {
  position: absolute; bottom: 20px; right: 20px;
  background: rgba(200,240,77,0.12);
  border: 1px solid rgba(200,240,77,0.3);
  color: #c8f04d; padding: 6px 14px; border-radius: 100px;
  font-size: 0.78rem; font-family: 'Syne', sans-serif;
  letter-spacing: 0.05em;
}
.card-stats {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
}
.stat {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px; padding: 20px 16px;
  text-align: center;
}
.stat-num {
  display: block; font-family: 'Syne', sans-serif;
  font-size: 1.6rem; font-weight: 800; color: #c8f04d;
}
.stat-label {
  display: block; font-size: 0.7rem;
  color: rgba(232,234,240,0.5); margin-top: 4px;
  letter-spacing: 0.03em;
}

/* Skills */
.skills { background: rgba(255,255,255,0.015); }
.section-header {
  opacity: 0; transform: translateY(20px);
  transition: all 0.7s ease; margin-bottom: 56px;
}
.section-header.visible { opacity: 1; transform: translateY(0); }

.skills-grid {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;
  opacity: 0; transform: translateY(30px);
  transition: all 0.8s ease 0.2s;
}
.skills-grid.visible { opacity: 1; transform: translateY(0); }

.skill-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px; padding: 22px 24px;
  display: flex; flex-direction: column; gap: 12px;
  transition: border-color 0.3s, background 0.3s;
  animation-delay: calc(var(--i) * 0.07s);
}
.skill-card:hover {
  border-color: rgba(200,240,77,0.25);
  background: rgba(200,240,77,0.04);
}
.skill-icon { font-size: 1.4rem; }
.skill-info {
  display: flex; justify-content: space-between; align-items: center;
}
.skill-name {
  font-family: 'Syne', sans-serif; font-weight: 600; font-size: 0.95rem;
}
.skill-level { font-size: 0.75rem; color: rgba(232,234,240,0.4); }
.skill-bar {
  height: 4px; background: rgba(255,255,255,0.08); border-radius: 100px;
  overflow: hidden;
}
.skill-fill {
  height: 100%; background: linear-gradient(90deg, #c8f04d, #8fd43a);
  border-radius: 100px; width: 0;
  transition: width 1.2s cubic-bezier(0.4,0,0.2,1) calc(var(--i) * 0.1s + 0.4s);
}
.skills-grid.visible .skill-fill { width: var(--pct); }

/* Coming soon */
.coming-soon .section-inner {
  opacity: 0; transform: translateY(30px);
  transition: all 0.8s ease;
}
.coming-soon .section-inner.visible { opacity: 1; transform: translateY(0); }
.coming-desc {
  color: rgba(232,234,240,0.6); font-size: 1.1rem;
  line-height: 1.7; margin-bottom: 36px;
}
.coming-chips { display: flex; flex-wrap: wrap; gap: 12px; }
.coming-chips span {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 100px; padding: 8px 20px;
  font-size: 0.85rem; color: rgba(232,234,240,0.65);
  font-family: 'Syne', sans-serif; letter-spacing: 0.03em;
}

/* Contacto */
.contacto {
  background: rgba(255,255,255,0.015);
  text-align: center;
}
.contacto .section-inner {
  opacity: 0; transform: translateY(30px);
  transition: all 0.8s ease;
  display: flex; flex-direction: column; align-items: center;
}
.contacto .section-inner.visible { opacity: 1; transform: translateY(0); }
.contacto .section-label { text-align: center; }
.email-link {
  display: inline-flex; align-items: center; gap: 12px;
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.5rem, 3.5vw, 2.8rem);
  font-weight: 700; color: #e8eaf0;
  text-decoration: none; margin: 8px 0 48px;
  transition: color 0.2s;
}
.email-link:hover { color: #c8f04d; }
.email-arrow {
  display: inline-block; transition: transform 0.3s;
}
.email-link:hover .email-arrow { transform: translate(4px, -4px); }
.social-links { display: flex; gap: 12px; }
.social-pill {
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 100px; padding: 10px 22px;
  font-size: 0.85rem; color: rgba(232,234,240,0.6);
  text-decoration: none; font-family: 'Syne', sans-serif;
  transition: border-color 0.2s, color 0.2s;
}
.social-pill:hover {
  border-color: rgba(200,240,77,0.4); color: #c8f04d;
}

/* Footer */
.footer {
  position: relative; z-index: 1;
  display: flex; justify-content: space-between; align-items: center;
  padding: 28px 60px;
  border-top: 1px solid rgba(255,255,255,0.06);
  font-size: 0.8rem; color: rgba(232,234,240,0.3);
  font-family: 'Syne', sans-serif; letter-spacing: 0.04em;
}

/* ── Responsive ─────────────────────────────── */
@media (max-width: 768px) {
  .nav { padding: 20px 24px; }
  .nav-links a:not(.nav-cta) { display: none; }
  .hero { padding: 0 24px; padding-top: 100px; }
  .hero-scroll-hint { left: 24px; }
  .section { padding: 80px 24px; }
  .sobre-mi .section-inner { grid-template-columns: 1fr; gap: 48px; }
  .skills-grid { grid-template-columns: 1fr; }
  .footer { padding: 24px; }
}
</style>