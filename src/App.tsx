import { useState, useEffect } from 'react';
import { ExternalLink, Mail } from 'lucide-react';

interface TypingTextProps {
  text: string;
  delay?: number;
}

function TypingText({ text, delay = 0 }: TypingTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(iv);
    }, 60);
    return () => clearInterval(iv);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {started && displayed.length < text.length && (
        <span style={{ animation: 'blink 1s infinite' }}>|</span>
      )}
    </span>
  );
}

const articles = [
  {
    title: 'Nvida overtakes Apple Microsoft',
    description: 'Nvida overtakes Apple Microsoft as a first 4 trillion public titan.',
    category: 'Market Analysis',
    link: 'https://www.cybertecwiz.com/nvidia-overtakes-apple-microsoft-as-first-4-trillion-public-tech-titan/',
    image: '/Apple-icon.jpeg',
  },
  {
    title: 'Over $1.9B ETH Set to Exit Ethereum Network',
    description: 'Technical deep-dive on blockchain mechanics.',
    category: 'Technical Analysis',
    link: 'https://www.cybertecwiz.com/over-1-9b-in-eth-set-to-exit-ethereum-network-amid-longest-validator-queue/',
    image: '/ETHER.webp',
  },
  {
    title: 'Ethereum to Hit $10,000: Arthur Hayes Flips Ultra Bullish',
    description: 'Expert analysis on forward-looking market commentary.',
    category: 'Price Forecast',
    link: 'https://www.cybertecwiz.com/ethereum-to-hit-10000-arthur-hayes-flips-ultra-bullish/',
    image: '/Aurthur-Hayes.webp',
  },
  {
    title: 'Dormant Ethereum Whale Cashes Out $399M',
    description: 'Data-driven story capturing major market movements.',
    category: 'On-Chain Analysis',
    link: 'https://www.cybertecwiz.com/dormant-ethereum-whale-cashes-out-399m-in-eth-massive-profit-after-1817-gain/',
    image: '/Profit.jpeg',
  },
  {
    title: "Trump Media Launches Bitcoin 300m Strategy",
    description: 'Connecting macroeconomic trends to crypto adoption.',
    category: 'Industry Trends',
    link: 'https://www.cybertecwiz.com/trump-media-launches-300m-bitcoin-options-strategy-backed-by-2b-in-crypto/',
    image: '/trump-media.webp',
  },
];

const skills = [
  { category: 'Content Writing', items: ['Blog & Article Writing', 'SEO Optimization', 'Technical Documentation'] },
  { category: 'Copywriting', items: ['Brand Messaging', 'Email Campaigns', 'Landing Pages'] },
  { category: 'Specializations', items: ['Cryptocurrency & DeFi', 'Blockchain Technology', 'Fintech Markets'] },
  { category: 'Tools', items: ['Google Docs', 'Twitter/X', 'CoinMarketCap'] },
];

const experiences = [
  {
    title: 'Senior Content Writer & Social Media Manager',
    company: 'Cybertechwhiz',
    year: '2023 – 2025',
    points: [
      'Authored 50+ high-performing news articles on cryptocurrency',
      'Managed social media including CoinMarketCap',
      'Produced data-driven market analysis',
    ],
  },
  {
    title: 'Content Writer & Copywriter',
    company: 'Coinrena',
    year: '2024 – 2025',
    points: [
      'Created educational content simplifying crypto concepts',
      'Developed compelling copy for campaigns',
      'Built Twitter strategy generating viral engagement',
    ],
  },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', fontFamily: 'Georgia, serif' }}>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, backgroundColor: 'rgba(10,10,10,0.95)', borderBottom: '2px solid #d4af37', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64 }}>
          <span style={{ fontSize: 28, fontWeight: 900, color: '#d4af37' }}>DG</span>
          <div style={{ display: 'flex', gap: 32 }}>
            {[
              { label: 'Home', id: 'home' },
              { label: 'Work', id: 'work' },
              { label: 'Skills', id: 'skills' },
              { label: 'Contact', id: 'contact' },
            ].map(item => (
              <span
                key={item.label}
                onClick={() => scrollTo(item.id)}
                style={{ fontSize: 14, fontWeight: 500, color: '#ffffff', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#d4af37')}
                onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 80,
          padding: '80px 24px 60px',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url("/Content-writer.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10,10,10,0.78)' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 860, width: '100%', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.15, color: '#ffffff', marginBottom: 24 }}>
            <span style={{ display: 'block', marginBottom: 12 }}>
              <TypingText text="Transform Ideas into Stories" delay={0} />
            </span>
            <span style={{ display: 'block', color: '#d4af37' }}>
              <TypingText text="Connect Directly To Your Audience" delay={2500} />
            </span>
          </h1>

          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.88)', marginBottom: 40, maxWidth: 600, margin: '0 auto 40px' }}>
            I craft compelling narratives that educate, engage, and inspire. Specializing in cryptocurrency,
            fintech, and technical content that drives real impact.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => scrollTo('work')}
              style={{ padding: '13px 32px', backgroundColor: '#d4af37', color: '#0a0a0a', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(212,175,55,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              style={{ padding: '13px 32px', backgroundColor: 'transparent', border: '2px solid #d4af37', color: '#ffffff', borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: 'pointer', transition: 'background-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(212,175,55,0.15)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section id="work" style={{ padding: '96px 24px', backgroundColor: '#0a0a0a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#ffffff', marginBottom: 12 }}>
            Featured <span style={{ color: '#d4af37' }}>Articles</span>
          </h2>
          <p style={{ fontSize: 17, color: '#b8b8b8', marginBottom: 64 }}>Crafted with research, precision, and storytelling excellence</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 32 }}>
            {articles.map((article, idx) => (
              <a
                key={idx}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textDecoration: 'none', border: '2px solid #d4af37', borderRadius: 16, overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(212,175,55,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10,10,10,0.35)' }} />
                  <div style={{ position: 'absolute', top: 14, left: 14 }}>
                    <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 999, fontSize: 11, fontWeight: 700, color: '#0a0a0a', backgroundColor: '#d4af37' }}>
                      {article.category}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '20px 22px', backgroundColor: '#1a1a1a' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: '#ffffff', marginBottom: 10, lineHeight: 1.4 }}>
                    {article.title}
                  </h3>
                  <p style={{ fontSize: 13, color: '#b8b8b8', marginBottom: 18, lineHeight: 1.6 }}>
                    {article.description}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#d4af37', fontWeight: 700, fontSize: 14 }}>
                    Read Article <ExternalLink size={15} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: '96px 24px', backgroundColor: '#0f0f0f' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#ffffff', marginBottom: 64 }}>
            Skills & <span style={{ color: '#d4af37' }}>Expertise</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 24 }}>
            {skills.map((skill, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: '#1a1a1a', border: '2px solid #d4af37', borderRadius: 16, padding: '28px 24px', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 24px rgba(212,175,55,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                <h3 style={{ fontSize: 16, fontWeight: 800, color: '#d4af37', marginBottom: 16 }}>{skill.category}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {skill.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: '#b8b8b8', marginBottom: 10, fontSize: 14 }}>
                      <span style={{ color: '#d4af37', fontWeight: 900, marginTop: 1 }}>›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section style={{ padding: '96px 24px', backgroundColor: '#0a0a0a' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: 64, color: '#d4af37' }}>
            Experience
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {experiences.map((exp, idx) => (
              <div key={idx} style={{ borderLeft: '4px solid #d4af37', paddingLeft: 28 }}>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: '#ffffff', marginBottom: 6 }}>{exp.title}</h3>
                <p style={{ fontWeight: 700, color: '#d4af37', marginBottom: 16 }}>{exp.company} · {exp.year}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {exp.points.map((point, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#b8b8b8', marginBottom: 10, fontSize: 15, lineHeight: 1.6 }}>
                      <span style={{ color: '#d4af37', fontWeight: 900, marginTop: 2 }}>•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" style={{ padding: '96px 24px', backgroundColor: '#d4af37', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0a0a0a', marginBottom: 16 }}>
            Ready to Collaborate?
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(10,10,10,0.8)', marginBottom: 48 }}>
            Let's create content that stands out and makes an impact
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:dlghtchinecherem@gmail.com"
              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 32px', backgroundColor: '#0a0a0a', color: '#d4af37', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'transform 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <Mail size={18} /> Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/delight-chinecherem/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 32px', backgroundColor: 'transparent', border: '2px solid #0a0a0a', color: '#0a0a0a', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'background-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(10,10,10,0.12)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '48px 24px', backgroundColor: '#000000', textAlign: 'center' }}>
        <p style={{ color: '#d4af37', fontSize: 14 }}>© 2025 Delight Grandeur. All rights reserved.</p>
      </footer>

    </div>
  );
}