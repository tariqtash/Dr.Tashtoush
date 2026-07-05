const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();


// STARR Lab tabs
document.querySelectorAll('.starr-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = tab.dataset.tab;

    document.querySelectorAll('.starr-tab').forEach(button => {
      button.classList.remove('active');
    });

    document.querySelectorAll('.starr-panel').forEach(panel => {
      panel.classList.remove('active');
    });

    tab.classList.add('active');
    const targetPanel = document.getElementById(targetId);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }
  });
});
