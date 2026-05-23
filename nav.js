document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  nav.innerHTML = `
    <a href="index.html" style="display:flex;align-items:center;gap:10px;text-decoration:none;">
      <img src="logo/logo-icon.svg" alt="logo" style="height:36px;width:36px;"/>
      <span style="font-family:'Lora',Georgia,serif;font-size:15px;font-style:italic;color:#1a1a2e;letter-spacing:0.01em;">A Resonant Hierarchy <span style="color:#4a3cc8;">of Everything</span></span>
    </a>
    <div class="nav-links">
      <a href="index.html" style="color:var(--text2);border:1px solid var(--border);padding:6px 14px;border-radius:20px;font-size:12px;letter-spacing:0.1em;text-decoration:none;font-family:'Inter',sans-serif;">Home</a>
      <a href="paper.html" style="color:var(--text2);border:1px solid var(--border);padding:6px 14px;border-radius:20px;font-size:12px;letter-spacing:0.1em;text-decoration:none;font-family:'Inter',sans-serif;">Paper</a>
      <a href="index.html#contact" style="color:var(--text2);border:1px solid var(--border);padding:6px 14px;border-radius:20px;font-size:12px;letter-spacing:0.1em;text-decoration:none;font-family:'Inter',sans-serif;">Contact</a>
      <a href="donate.html" style="color:#fff;background:var(--accent);border:1px solid var(--accent);padding:6px 14px;border-radius:20px;font-size:12px;letter-spacing:0.1em;text-decoration:none;font-family:'Inter',sans-serif;">☕ Support</a>
    </div>
  `;

  // Show page only after nav is ready
  document.body.classList.add('ready');
});
