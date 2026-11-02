const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
const contactForm = document.querySelector('#contact-form');
const formMessage = document.querySelector('#form-message');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.querySelector('b').textContent = isOpen ? 'Закрыть меню' : 'Открыть меню';
  });
  siteNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.querySelector('b').textContent = 'Открыть меню';
    }
  });
}

if (contactForm && formMessage) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      formMessage.textContent = 'Введите корректный email, чтобы продолжить.';
      contactForm.querySelector(':invalid')?.focus();
      return;
    }
    formMessage.textContent = 'Спасибо! Это тестовая форма — сообщение принято локально.';
    contactForm.reset();
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
