document.addEventListener('DOMContentLoaded', function() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  footer.innerHTML = `
    <p class="footer-quote">"The universe is not only stranger than we suppose, but stranger than we can suppose."<br>
    <span style="font-size:17px;font-style:normal">— J.B.S. Haldane</span></p>
    <p class="footer-meta">Resonant Hierarchy · A Conceptual Hypothesis · 2026 · Work in Progress</p>
    <p style="font-family:'Inter',sans-serif;font-size:12px;color:var(--text3);margin-top:12px;line-height:1.8;">
      Created by <strong style="color:var(--text2);">Dement Dmitriy</strong> · Independent researcher<br>
      This site exists to draw attention to science and the nature of the universe.
    </p>
    <div style="margin-top:32px;">
      <p style="font-family:'Inter',sans-serif;font-size:13px;color:var(--text3);margin-bottom:16px;">If this work resonates with you, you can support it</p>
      <a href="donate.html" style="display:inline-flex;align-items:center;gap:10px;padding:12px 28px;background:var(--accent);color:#fff;font-family:'Inter',sans-serif;font-size:13px;font-weight:500;letter-spacing:0.12em;text-decoration:none;border-radius:8px;">☕ Support this research</a>
    </div>
  `;
});
