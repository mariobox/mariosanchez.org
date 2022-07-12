const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const THEME = 'mode';

document.addEventListener(
  'DOMContentLoaded', (event) => {
    applyTheme();
    const toggleSwitch = document.getElementById('toggle-switch');
    toggleSwitch.onclick = function() {
      let currentMode = localStorage.getItem(THEME);
      localStorage.setItem(
        THEME, 
        currentMode === DARK_MODE ? LIGHT_MODE : DARK_MODE
      );
      applyTheme();
    }
  }
);

function applyTheme() {
  let html = document.documentElement;
  let currentMode = localStorage.getItem(THEME);
  if (currentMode === DARK_MODE) {
    html.classList.remove(DARK_MODE);
    html.classList.add(LIGHT_MODE);
    document.getElementById('toggle-switch').innerHTML = 
      '<i class="fas fa-2x hd fa-moon"  title="Turn off the light"></i>';
  } 
  else {
    html.classList.remove(LIGHT_MODE);
    html.classList.add(DARK_MODE);
    document.getElementById('toggle-switch').innerHTML = 
      '<i class="fas fa-2x hd fa-sun" title="Turn on the light"></i>';
  }
}