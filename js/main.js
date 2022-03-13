const list = document.querySelector(".slides");
const btns = document.querySelectorAll(".arrows .arrow");
const prevBtn = document.querySelector(".testimonial__prev");
const nextBtn = document.querySelector(".testimonial__next");
const isActive = "active";

changeSlide();

function changeSlide() {
    for (const btn of btns) {
        btn.addEventListener("click", e => {
            const activeSlide = document.querySelector(".testimonials.active");
            activeSlide.classList.remove(isActive);

            if (e.currentTarget === nextBtn) {
                activeSlide.nextElementSibling
                ? activeSlide.nextElementSibling.classList.add(isActive)
                : list.firstElementChild.classList.add(isActive);
            } else {
                activeSlide.previousElementSibling
                ? activeSlide.previousElementSibling.classList.add(isActive)
                : list.lastElementChild.classList.add(isActive);
            }
        });
    }
}

