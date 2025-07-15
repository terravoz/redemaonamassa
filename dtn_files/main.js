document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.menu-toggle');
  const drawer = document.getElementById('drawer-menu');
  const links = drawer.querySelectorAll('.toplink');

  if (toggleButton && drawer) {
    toggleButton.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }
});
