
document.querySelector('.theme-toggle').addEventListener('click', () => {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme') || 'dark';
    body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
});


scrollToTopButton.addEventListener('click', () => {
    if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.scrollTo(0, 0);
    }
});


document.querySelectorAll('header nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('header nav ul li a').forEach(link => link.classList.remove('active'));
      item.classList.add('active');
    });
  });
  