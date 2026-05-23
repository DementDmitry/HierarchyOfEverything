document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  nav.innerHTML = `
    <a href="index.html" style="display:flex;align-items:center;gap:12px;text-decoration:none;">
      <img src="logo.svg" alt="A Resonant Hierarchy of Everything" style="height:40px;width:auto;"/>
    </a>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="paper.html">Paper</a>
      <a href="index.html#contact">Contact</a>
      <a href="donate.html" style="color:var(--accent);border:1px solid rgba(74,60,200,0.25);padding:6px 14px;border-radius:20px;font-size:12px;letter-spacing:0.1em;">☕ Support</a>
    </div>
  `;
});
