
// Simple mobile menu toggle
const toggle = document.getElementById("mobile-menu-toggle");
const menu = document.getElementById("mobile-menu");

toggle?.addEventListener("click", () => {
    menu?.classList.toggle("hidden");
});

// Small script so only one accordion panel remains open at a time

(function () {
    const accordions = document.querySelectorAll('details');
    document.addEventListener('click', (e) => {
        const target = e.target.closest('details');
        if (!target) return;
        accordions.forEach(d => { if (d !== target) d.removeAttribute('open'); });
    });
})();
