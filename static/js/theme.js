// document.getElementById('theme-toggle').addEventListener('click', () => {
//     document.documentElement.classList.toggle('dark');
//     if (document.documentElement.classList.contains('dark')) {
//       localStorage.setItem('theme', 'dark');
//     } else {
//       localStorage.setItem('theme', 'light');
//     }
//   });
  
//   if (localStorage.getItem('theme') === 'dark') {
//     document.documentElement.classList.add('dark');
//   } else {
//     document.documentElement.classList.remove('dark');
//   }
  
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const lightIcon = document.getElementById('light-icon');
  const darkIcon = document.getElementById('dark-icon');
  const themeText = document.getElementById('theme-text');

  // Function to set the initial state based on the current theme
  function setInitialThemeState() {
    if (document.documentElement.classList.contains('dark')) {
      lightIcon.classList.remove('hidden');
      darkIcon.classList.add('hidden');
      themeText.textContent = 'Light';
    } else {
      lightIcon.classList.add('hidden');
      darkIcon.classList.remove('hidden');
      themeText.textContent = 'Dark';
    }
  }

  // Check local storage for the theme preference and apply it
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Set the initial state of icons and text based on the current theme
  setInitialThemeState();

  // Add event listener for theme toggle button
  themeToggle.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
      lightIcon.classList.remove('hidden');
      darkIcon.classList.add('hidden');
      themeText.textContent = 'Light';
    } else {
      localStorage.setItem('theme', 'light');
      lightIcon.classList.add('hidden');
      darkIcon.classList.remove('hidden');
      themeText.textContent = 'Dark';
    }
  });
});
