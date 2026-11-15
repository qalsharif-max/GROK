import { useMemo, useState } from 'react'
import {
  ORGANIC_POSTS,
  PILLARS,
  PLATFORMS,
  buildWorkshopDraft,
  type OrganicPost,
  type Pillar,
  type Platform,
} from './data/posts'
import './App.css'

function fullCaption(post: OrganicPost) {
  return `${post.hook}\n\n${post.body}\n\n${post.cta}\n\n${post.hashtags.join(' ')}`
}

export default function App() {
  const [pillar, setPillar] = useState<Pillar | 'all'>('all')
  const [platform, setPlatform] = useState<Platform | 'all'>('all')
  const [language, setLanguage] = useState<'all' | 'ar' | 'en'>('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const [wsPillar, setWsPillar] = useState<Pillar>('lifestyle')
  const [wsPlatform, setWsPlatform] = useState<Platform>('instagram')
  const [wsLanguage, setWsLanguage] = useState<'ar' | 'en'>('ar')
  const [wsTopic, setWsTopic] = useState('نظارات للصيف')
  const [wsAudience, setWsAudience] = useState('متابعينا في جدة والرياض')
  const [draft, setDraft] = useState<OrganicPost | null>(null)

  const posts = useMemo(() => {
    return ORGANIC_POSTS.filter((post) => {
      if (pillar !== 'all' && post.pillar !== pillar) return false
      if (platform !== 'all' && !post.platforms.includes(platform)) return false
      if (language !== 'all' && post.language !== language) return false
      return true
    })
  }, [pillar, platform, language])

  async function copyPost(post: OrganicPost) {
    const text = fullCaption(post)
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(post.id)
      window.setTimeout(() => setCopiedId((id) => (id === post.id ? null : id)), 1800)
    } catch {
      const area = document.createElement('textarea')
      area.value = text
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      document.body.removeChild(area)
      setCopiedId(post.id)
    }
  }

  function generateDraft() {
    setDraft(
      buildWorkshopDraft({
        pillar: wsPillar,
        platform: wsPlatform,
        language: wsLanguage,
        topic: wsTopic,
        audience: wsAudience,
      }),
    )
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#library">
        Skip to posts
      </a>

      <header className="site-header">
        <a className="brand-mark" href="#top">
          <strong>HNAK</strong>
          <span>Organic Studio</span>
        </a>
        <div className="header-actions">
          <a className="btn btn-ghost btn-small" href="#workshop">
            Workshop
          </a>
          <a className="btn btn-primary btn-small" href="#library">
            Browse posts
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-kicker">Be HNAK · كون هناك</p>
          <h1>Organic posts that feel native.</h1>
          <p className="hero-lead">
            Ready-to-publish captions for Instagram, Snapchat, TikTok, X, and LinkedIn —
            built for HNAK’s local-meets-global voice, not hard-sell ads.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#library">
              Open post library
            </a>
            <a className="btn btn-ghost" href="#workshop">
              Draft a new post
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="playbook">
        <div className="section-head">
          <h2>Organic first. Offer later.</h2>
          <p>
            Use these pillars to stay useful and human. Soft discovery posts warm the audience
            so paid and promo content convert cleaner.
          </p>
        </div>
        <div className="playbook">
          <article className="play-item">
            <strong>Help</strong>
            <p>Teach a decision, myth, or seasonal habit before mentioning a SKU.</p>
          </article>
          <article className="play-item">
            <strong>Belong</strong>
            <p>Lead with Saudi context, Min Hena craft, and Jeddah-everyday scenes.</p>
          </article>
          <article className="play-item">
            <strong>Invite</strong>
            <p>Ask one clear question. Reply fast. Let comments become the content.</p>
          </article>
        </div>
      </section>

      <section className="section" id="library">
        <div className="section-head">
          <h2>Post library</h2>
          <p>
            Sixteen starter organic drafts in Arabic and English. Filter by pillar, platform,
            or language, then copy the full caption.
          </p>
        </div>

        <div className="pillars" role="list">
          <button
            type="button"
            className={`pillar-chip ${pillar === 'all' ? 'active' : ''}`}
            onClick={() => setPillar('all')}
          >
            <strong>All pillars</strong>
            <span>Full starter pack</span>
          </button>
          {PILLARS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`pillar-chip ${pillar === item.id ? 'active' : ''}`}
              onClick={() => setPillar(item.id)}
            >
              <strong>
                {item.labelEn} · {item.labelAr}
              </strong>
              <span>{item.blurb}</span>
            </button>
          ))}
        </div>

        <div className="filters" aria-label="Platform and language filters">
          <button
            type="button"
            className={`chip ${platform === 'all' ? 'active' : ''}`}
            onClick={() => setPlatform('all')}
          >
            All platforms
          </button>
          {PLATFORMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`chip ${platform === item.id ? 'active' : ''}`}
              onClick={() => setPlatform(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            className={`chip ${language === 'all' ? 'active' : ''}`}
            onClick={() => setLanguage('all')}
          >
            AR + EN
          </button>
          <button
            type="button"
            className={`chip ${language === 'ar' ? 'active' : ''}`}
            onClick={() => setLanguage('ar')}
          >
            العربية
          </button>
          <button
            type="button"
            className={`chip ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            English
          </button>
        </div>

        <div className="post-grid">
          {posts.map((post) => {
            const pillarLabel = PILLARS.find((p) => p.id === post.pillar)
            return (
              <article
                key={post.id}
                className="post-card"
                dir={post.language === 'ar' ? 'rtl' : 'ltr'}
              >
                <div className="post-meta">
                  <span className="tag">{pillarLabel?.labelEn}</span>
                  <span className="tag">{post.language.toUpperCase()}</span>
                  {post.platforms.map((p) => (
                    <span className="tag" key={p}>
                      {PLATFORMS.find((x) => x.id === p)?.label}
                    </span>
                  ))}
                </div>
                <h3>{post.hook}</h3>
                <p className="post-body">{post.body}</p>
                <p className="hashtags">{post.hashtags.join(' ')}</p>
                <p className="visual-note">
                  <strong>Visual: </strong>
                  {post.visual}
                </p>
                <p className="why-note">
                  <strong>Why it works: </strong>
                  {post.whyItWorks}
                </p>
                <div className="post-actions">
                  <button type="button" className="btn btn-ink btn-small" onClick={() => copyPost(post)}>
                    Copy caption
                  </button>
                  {copiedId === post.id ? <span className="copied">Copied</span> : null}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section" id="workshop">
        <div className="section-head">
          <h2>Draft workshop</h2>
          <p>
            Pick a pillar, platform, and topic. Get a fresh organic draft in HNAK’s tone —
            then copy and adapt for your calendar.
          </p>
        </div>

        <div className="workshop">
          <form
            className="workshop-panel"
            onSubmit={(event) => {
              event.preventDefault()
              generateDraft()
            }}
          >
            <div className="form-grid">
              <div className="field">
                <label htmlFor="ws-pillar">Pillar</label>
                <select
                  id="ws-pillar"
                  value={wsPillar}
                  onChange={(e) => setWsPillar(e.target.value as Pillar)}
                >
                  {PILLARS.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.labelEn} · {item.labelAr}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="ws-platform">Platform</label>
                <select
                  id="ws-platform"
                  value={wsPlatform}
                  onChange={(e) => setWsPlatform(e.target.value as Platform)}
                >
                  {PLATFORMS.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="ws-language">Language</label>
                <select
                  id="ws-language"
                  value={wsLanguage}
                  onChange={(e) => {
                    const next = e.target.value as 'ar' | 'en'
                    setWsLanguage(next)
                    if (next === 'ar') {
                      setWsTopic('نظارات للصيف')
                      setWsAudience('متابعينا في جدة والرياض')
                    } else {
                      setWsTopic('summer sunglasses')
                      setWsAudience('shoppers in Jeddah and Riyadh')
                    }
                  }}
                >
                  <option value="ar">العربية</option>
                  <option value="en">English</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="ws-topic">Topic</label>
                <input
                  id="ws-topic"
                  value={wsTopic}
                  onChange={(e) => setWsTopic(e.target.value)}
                  placeholder="Min Hena gifts, perfume tips, travel bags…"
                />
              </div>
              <div className="field">
                <label htmlFor="ws-audience">Audience cue</label>
                <input
                  id="ws-audience"
                  value={wsAudience}
                  onChange={(e) => setWsAudience(e.target.value)}
                  placeholder="Who is this for?"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Generate organic draft
              </button>
            </div>
          </form>

          {draft ? (
            <article className="workshop-result post-card" dir={draft.language === 'ar' ? 'rtl' : 'ltr'}>
              <div className="post-meta">
                <span className="tag">Workshop</span>
                <span className="tag">{draft.language.toUpperCase()}</span>
                <span className="tag">{PLATFORMS.find((p) => p.id === draft.platforms[0])?.label}</span>
              </div>
              <h3>{draft.hook}</h3>
              <p className="post-body">{draft.body}</p>
              <p className="hashtags">{draft.hashtags.join(' ')}</p>
              <p className="visual-note">
                <strong>Visual: </strong>
                {draft.visual}
              </p>
              <p className="why-note">
                <strong>Why it works: </strong>
                {draft.whyItWorks}
              </p>
              <div className="post-actions">
                <button type="button" className="btn btn-ink btn-small" onClick={() => copyPost(draft)}>
                  Copy caption
                </button>
                {copiedId === draft.id ? <span className="copied">Copied</span> : null}
              </div>
            </article>
          ) : (
            <div className="workshop-result empty">
              <p>Your generated draft will land here — ready to copy into the publishing calendar.</p>
            </div>
          )}
        </div>
      </section>

      <footer className="site-footer">
        HNAK Organic Studio · starter social helper for native captions, visual briefs, and weekly drafting.
        Next: calendar view, approval flow, and performance notes.
      </footer>
    </div>
  )
}
