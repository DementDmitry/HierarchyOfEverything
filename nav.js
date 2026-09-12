document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  const style = document.createElement('style');
  style.textContent = `
    #site-nav .nav-links { align-items:center; }
    #site-nav .nav-gift {
      display:inline-flex; align-items:center; justify-content:center; gap:6px;
      color:#493008; background:#f7cb68; border:1px solid #d6a23c;
      padding:8px 14px; border-radius:20px; font:600 12px/1.4 'Inter',sans-serif;
      text-align:center; text-decoration:none; box-shadow:0 2px 8px rgba(150,100,20,0.12);
      transition:background 0.2s, box-shadow 0.2s;
    }
    #site-nav .nav-gift:hover { color:#493008; background:#ffdb87; box-shadow:0 3px 12px rgba(150,100,20,0.2); }
    #site-nav .nav-gift:focus-visible { outline:3px solid #4a3cc8; outline-offset:3px; }
    @media(max-width:1200px) {
      #site-nav { position:sticky; flex-wrap:wrap; gap:12px; padding:12px 20px; }
      #site-nav .nav-links { display:flex; flex-wrap:wrap; gap:8px; }
    }
    @media(max-width:600px) {
      #site-nav { justify-content:center; }
      #site-nav .nav-links { justify-content:center; width:100%; }
    }
  `;
  document.head.appendChild(style);

  nav.innerHTML = `
    <a href="index.html" style="display:flex;align-items:center;gap:10px;text-decoration:none;">
      <img src="logo/logo-icon.svg" alt="logo" style="height:36px;width:36px;"/>
      <span style="font-family:'Lora',Georgia,serif;font-size:15px;font-style:italic;color:#1a1a2e;letter-spacing:0.01em;">A Resonant Hierarchy <span style="color:#4a3cc8;">of Everything</span></span>
    </a>
    <div class="nav-links">
      <a href="index.html" style="color:var(--text2);border:1px solid var(--border);padding:6px 14px;border-radius:20px;font-size:12px;letter-spacing:0.1em;text-decoration:none;font-family:'Inter',sans-serif;">Home</a>
      <a href="paper.html" style="color:var(--text2);border:1px solid var(--border);padding:6px 14px;border-radius:20px;font-size:12px;letter-spacing:0.1em;text-decoration:none;font-family:'Inter',sans-serif;">Paper</a>
      <a href="index.html#contact" style="color:var(--text2);border:1px solid var(--border);padding:6px 14px;border-radius:20px;font-size:12px;letter-spacing:0.1em;text-decoration:none;font-family:'Inter',sans-serif;">Contact</a>
      <a class="nav-gift" href="https://www.queuequestion.com/" target="_blank" rel="noopener noreferrer" aria-label="Get in line for a secret gift (opens in a new tab)"><span aria-hidden="true">🎁</span> Get in line for a secret gift</a>
      <a href="donate.html" style="color:#fff;background:var(--accent);border:1px solid var(--accent);padding:6px 14px;border-radius:20px;font-size:12px;letter-spacing:0.1em;text-decoration:none;font-family:'Inter',sans-serif;">☕ Support</a>
    </div>
  `;

  // Show page only after nav is ready
  document.body.classList.add('ready');
});
