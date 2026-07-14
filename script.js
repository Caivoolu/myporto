document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

  let counted = false;
  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      animateCount('stat-years', 7, '+');
      animateCount('stat-projects', 50, '+');
      animateCount('stat-clients', 30, '+');
      animateCount('stat-systems', 120, '+');
    }
  }, { threshold: 0.3 });

  const statTarget = document.getElementById('stat-years');
  if (statTarget) {
    statsObserver.observe(statTarget);
  }

  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('success-msg');

  if (form && successMsg) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.classList.add('hidden');
      successMsg.classList.remove('hidden');
    });
  }

});

function animateCount(id, target, suffix) {
  const el = document.getElementById(id);
  if (!el) return;

  let current = 0;
  const step = Math.max(1, Math.floor(target / 40));
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = `${current}${suffix}`;
  }, 30);
}
