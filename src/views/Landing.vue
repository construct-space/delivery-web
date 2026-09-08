<template>
  <div class="landing">
    <div class="landing-content">
      <!-- Hero -->
      <section class="hero">
        <p class="hero-label">CONSTRUCT<span class="accent">:DELIVERY</span></p>
        <h1 class="hero-title">Email that<br><span class="accent">arrives.</span></h1>
        <p class="hero-sub">Transactional email for the Construct ecosystem. DKIM signed, SPF verified, delivered to inbox — not spam.</p>
        <div class="hero-actions">
          <a href="https://my.lisaos.dev/account/services" class="btn btn-primary">Get started</a>
          <a href="https://my.lisaos.dev/delivery" class="btn btn-ghost">Dashboard</a>
        </div>
      </section>

      <!-- Code example -->
      <section class="code-section">
        <p class="section-label">SEND YOUR FIRST EMAIL</p>
        <div class="code-block">
          <div class="code-header">
            <span class="code-dot" style="background:#FF2D55"></span>
            <span class="code-dot" style="background:#fbbf24"></span>
            <span class="code-dot" style="background:#34C759"></span>
            <span class="code-lang">curl</span>
          </div>
          <pre class="code-body"><span class="c-muted">POST</span> https://delivery.lisaos.dev/api/emails
<span class="c-muted">Authorization:</span> Bearer cd_live_xxxxx

{
  <span class="c-accent">"from"</span>: <span class="c-str">"You &lt;hi@yourapp.com&gt;"</span>,
  <span class="c-accent">"to"</span>: <span class="c-str">"user@example.com"</span>,
  <span class="c-accent">"subject"</span>: <span class="c-str">"Welcome aboard"</span>,
  <span class="c-accent">"html"</span>: <span class="c-str">"&lt;h1&gt;Hello!&lt;/h1&gt;"</span>
}</pre>
        </div>
      </section>

      <!-- Features -->
      <section class="features">
        <p class="section-label">WHY CONSTRUCT DELIVERY</p>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>DKIM + SPF + DMARC</h3>
            <p>Per-domain DKIM signing with automatic DNS verification. Your emails pass authentication.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3>Instant delivery</h3>
            <p>Queue-based sending with automatic retries and exponential backoff. No email gets lost.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
            </div>
            <h3>Simple API</h3>
            <p>One POST request to send. API keys with cd_live_ prefix. No SDKs required.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            </div>
            <h3>Multi-domain</h3>
            <p>Send from any domain. One-click Cloudflare DNS setup or manual configuration.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <h3>SMTP relay</h3>
            <p>Use as SMTP server for Ghost, WordPress, or any app that sends email.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <h3>Bounce handling</h3>
            <p>Automatic suppression lists. Hard bounces are tracked and future sends are blocked.</p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="landing-footer">
        <span class="footer-muted">Part of the</span>
        <a href="https://lisaos.dev">Construct</a>
        <span class="footer-muted">ecosystem</span>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.landing { min-height: 100vh; display: flex; align-items: flex-start; justify-content: center; padding: 80px 40px 60px; }
.landing-content { max-width: 720px; width: 100%; }

/* Hero */
.hero { margin-bottom: 80px; }
.hero-label { font-size: 11px; letter-spacing: 0.15em; font-weight: 600; color: var(--app-muted); margin-bottom: 20px; }
.hero-title { font-size: 3.5rem; font-weight: 700; line-height: 1.1; margin-bottom: 20px; color: var(--app-foreground); }
.accent { color: var(--app-accent); }
.hero-sub { font-size: 1.0625rem; color: var(--app-muted); line-height: 1.6; max-width: 480px; margin-bottom: 32px; }
.hero-actions { display: flex; gap: 12px; }

.btn { display: inline-flex; align-items: center; padding: 10px 24px; border-radius: 8px; font-size: 14px; font-weight: 500; font-family: inherit; transition: all 0.15s; border: none; cursor: pointer; text-decoration: none; }
.btn-primary { background: var(--app-accent); color: var(--app-accent-fg); }
.btn-primary:hover { opacity: 0.9; }
.btn-ghost { background: transparent; color: var(--app-muted); border: 1px solid var(--app-border); }
.btn-ghost:hover { color: var(--app-foreground); border-color: var(--app-foreground); }

/* Code */
.code-section { margin-bottom: 80px; }
.section-label { font-size: 10px; letter-spacing: 0.15em; font-weight: 600; color: var(--app-muted); margin-bottom: 16px; }
.code-block { background: var(--app-surface); border: 1px solid var(--app-border); border-radius: 10px; overflow: hidden; }
.code-header { display: flex; align-items: center; gap: 6px; padding: 12px 16px; border-bottom: 1px solid var(--app-border); }
.code-dot { width: 10px; height: 10px; border-radius: 50%; }
.code-lang { margin-left: auto; font-size: 11px; color: var(--app-muted); font-family: monospace; }
.code-body { padding: 20px; font-family: monospace; font-size: 13px; line-height: 1.7; color: var(--app-foreground); overflow-x: auto; white-space: pre; }
.c-muted { color: var(--app-muted); }
.c-accent { color: var(--app-accent); }
.c-str { color: var(--app-success); }

/* Features */
.features { margin-bottom: 80px; }
.feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.feature-card { padding: 24px; border: 1px solid var(--app-border); border-radius: 10px; transition: border-color 0.15s; }
.feature-card:hover { border-color: var(--app-accent); }
.feature-icon { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border-radius: 8px; background: color-mix(in srgb, var(--app-accent) 10%, transparent); color: var(--app-accent); margin-bottom: 14px; }
.feature-card h3 { font-size: 14px; font-weight: 600; margin-bottom: 6px; }
.feature-card p { font-size: 13px; color: var(--app-muted); line-height: 1.5; }

/* Footer */
.landing-footer { text-align: center; font-size: 13px; color: var(--app-muted); padding-top: 20px; border-top: 1px solid var(--app-border); }
.footer-muted { margin: 0 4px; }

@media (max-width: 640px) {
  .landing { padding: 40px 20px; }
  .hero-title { font-size: 2.5rem; }
  .feature-grid { grid-template-columns: 1fr; }
}
</style>
