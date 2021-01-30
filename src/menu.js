(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileBtnHeroRef = document.querySelector("[data-hero-button]");
    const mobileMenuHeaderRef = document.querySelector("[data-header-button]");

    menuBtnRef.addEventListener("click", () => {
        const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
        mobileBtnHeroRef.classList.toggle("is-open");
        mobileMenuHeaderRef.classList.toggle("is-open");

    })
})();