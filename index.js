document.querySelector('a[href^="https://adamgantengg.github.io/Galeri/"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });