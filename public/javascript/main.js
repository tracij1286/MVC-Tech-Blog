// When clicking on the header logo, redirect to the main page
const headerLogoEl = document.getElementById('header-logo');
headerLogoEl.addEventListener('click', () => {
  document.location.replace('/');
});

// Highlights the active nav item
const navItems = document.querySelectorAll('.navItem');

if (navItems.length == 2) {
  if (window.location.pathname == '/') {
    navItems[0].classList.add('active');
  }
  if (window.location.pathname == '/login') {
    navItems[1].classList.add('active');
  }
} else {
  if (window.location.pathname == '/') {
    navItems[0].classList.add('active');
  }
  if (window.location.pathname == '/dashboard') {
    navItems[1].classList.add('active');
  }
  if (window.location.pathname == '/login') {
    navItems[2].classList.add('active');
  }
}

// Update header styling based on if a certain element exist
const headerHead = document.getElementById('header-head');
const loggedInActive = document.getElementById('loggedin');
if (loggedInActive) {
  headerHead.style.justifyContent = 'space-between';
} else {
  headerHead.style.justifyContent = 'center';
}

