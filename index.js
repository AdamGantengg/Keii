document.querySelector('a[href^="https://github.com/AdamGantengg/Galeri/settings/pages"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });