const sideNav = document.querySelector(".nav-wrapper");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLinkWrapper = document.querySelector(".mobile-nav-link-wrapper");
const mobileNavButton = document.querySelector(".mobile-nav-button");

// functions
const toggleMobileMenu = () => {
  mobileNavLinkWrapper.classList.toggle("active");
};

const handleSmallScreen = (e) => {
  if (e.matches) {
    mobileNav.classList.remove("hide-mobile-nav");
    sideNav.classList.add("hide-side-nav");
  }

  if (!e.matches) {
    mobileNav.classList.add("hide-mobile-nav");
    sideNav.classList.remove("hide-side-nav");
  }
};

// event listeners
mobileNavButton.addEventListener("click", toggleMobileMenu);

const mediaQuery = window.matchMedia("(max-width: 768px)");

handleSmallScreen(mediaQuery);

mediaQuery.addEventListener("change", handleSmallScreen);
