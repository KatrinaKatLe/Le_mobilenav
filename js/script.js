// This finds the menu button, navigation, and backdrop
(function () {
  var btn      = document.querySelector('.menu-toggle');
  var nav      = document.getElementById('primary-nav');
  var backdrop = document.querySelector('.nav-backdrop');
  // This stops the script if one of the menu parts is missing
  if (!btn || !nav || !backdrop) return;
  // This is what opens or closes the mobile navigation menu 
  function setOpen(open) {
    // This updates whether the menu is open or closed
    btn.setAttribute('aria-expanded', String(open));
    // This changes the button label when the menu is open or closed
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    // This adds or removes the class that opens the drawer
    document.body.classList.toggle('menu-open', open);
    // This is what shows the backdrop when the menu is open
    backdrop.hidden = !open;
  }
  // This is what opens or closes the menu when the button is clicked
  btn.addEventListener('click', function () {
    // This checks if the menu is already open
    var isOpen = btn.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
  });
  // This closes the menu when the backdrop is clicked
  backdrop.addEventListener('click', function () { setOpen(false); });
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });
  // This is what closes the menu when the Escape key is pressed
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
      setOpen(false);
    }
  });
})();