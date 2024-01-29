document.addEventListener("DOMContentLoaded", function () {
    var headerItems = document.querySelectorAll(".header__item");

    headerItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            var targetId = this.querySelector("a").getAttribute("href");
            var targetElement = document.querySelector(targetId);

            if (targetElement) {
                var offset = 80;
                var targetOffsetTop = targetElement.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: targetOffsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll(".section-fade-in");

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        sections.forEach(function (section) {
            if (isInViewport(section)) {
                if (!section.classList.contains("animate")) {
                    section.classList.add("animate");
                }
            }
        });
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
