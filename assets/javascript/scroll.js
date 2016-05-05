$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 40
          }, 900);
          return false;
      }
    }
  });
});
window.onscroll = function() {
  var el = document.getElementsByClassName('site-header')[0];
  var className = 'small';
  if (el.classList) {
    if (window.scrollY > 20)
      el.classList.add(className);
    else
      el.classList.remove(className);
  }
};