const toggle_menu_burger = document.querySelector(".menu_burger");
const navLinkContainer = document.querySelector(".navlinks-container");

const toggleNav = (e) => {
  toggle_menu_burger.classList.toggle("open");
  navLinkContainer.classList.toggle("open");
  const ariaExpandedToggle =
    toggle_menu_burger.getAttribute("aria-expanded") === "true"
      ? "false"
      : "true";
  toggle_menu_burger.setAttribute("aria-expanded", ariaExpandedToggle);
};

toggle_menu_burger.addEventListener("click", toggleNav);
