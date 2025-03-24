$(document).ready(function () {
  const toggleButton = $("#toggle-button");
  const socialMenu = $("#social-menu");
  const socialIcons = $(".social-icon");
  let isOpen = false;

  // Add ripple effect function
  function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // Add ripple effect event
  toggleButton.on("click", function (e) {
    createRipple(e);

    toggleButton.toggleClass("open");

    if (!isOpen) {
      // Show menu
      socialMenu.addClass("visible");
      toggleButton.css("background-color", "#E74C3C");

      // Animate icons with staggered effect
      socialIcons.each(function (index) {
        setTimeout(() => {
          $(this).css({
            transform: "scale(1)",
            opacity: "1",
          });
        }, 50 + index * 60);
      });
    } else {
      // Hide icons with reverse order animation
      toggleButton.css("background-color", "#4A90E2");

      socialIcons.each(function (index, el) {
        const reverseIndex = socialIcons.length - 1 - index;
        setTimeout(() => {
          $(el).css({
            transform: "scale(0)",
            opacity: "0",
          });
        }, 50 + reverseIndex * 40);
      });

      // Hide the menu after animations complete
      setTimeout(function () {
        socialMenu.removeClass("visible");
      }, 400);
    }

    isOpen = !isOpen;
  });

  // Initialize icons to scale(0)
  socialIcons.css({
    transform: "scale(0)",
    opacity: "0",
  });
});
