document.addEventListener('DOMContentLoaded', function () {
  const modeToggleBtn = document.getElementById('modeToggleBtn');

  modeToggleBtn.addEventListener('click', () => {
    const body = document.body;
    if (body.classList.contains('red-mode')) {
      body.classList.remove('red-mode');
      modeToggleBtn.textContent = 'Mode Merah';
    } else {
      body.classList.add('red-mode');
      modeToggleBtn.textContent = 'Mode Biru';
    }
  });
});
