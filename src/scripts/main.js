document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".header__burger-menu");
  const mobileNav = document.getElementById("mobilenav");

  if (burgerBtn && mobileNav) {
    burgerBtn.addEventListener("click", () => {
      const isOpen = mobileNav.classList.contains("header__mobile-nav--open");
      burgerBtn.setAttribute("aria-expanded", String(!isOpen));
      mobileNav.classList.toggle("header__mobile-nav--open", !isOpen);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const filterBtn = document.querySelector(
    ".sorting-controls__filter-button-action"
  );
  const catalogSidebar = document.querySelector(".catalog-filters");
  const body = document.body;
  const closeBtn = document.querySelector(
    ".catalog-filters__header-button-action"
  );

  if (filterBtn && catalogSidebar) {
    filterBtn.addEventListener("click", () => {
      const isShown = catalogSidebar.classList.contains("is-shown");
      filterBtn.setAttribute("aria-expanded", String(!isShown));
      catalogSidebar.classList.toggle("is-shown", !isShown);
      body.classList.toggle("not-scrolled", !isShown); // optional scroll-lock
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      catalogSidebar.classList.remove("is-shown");
      body.classList.remove("not-scrolled");
      filterBtn.setAttribute("aria-expanded", "false");
    });
  }
});
