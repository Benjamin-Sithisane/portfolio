const elements = document.querySelectorAll('.slideUp');

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

//Nav scroll
function scrollToElement(elementId) {
    const yOffset = -125; 
    const element = document.getElementById(elementId)
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({
        top: y,
        behavior: "smooth",
    })
}

function mobileNav() {
    const x = document.getElementById("links");

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

//Animate on open
function animateElementsInView() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const target = entry.target;
                setTimeout(() => {
                    target.classList.add('animate');
                }, index * 250);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    elements.forEach((el) => {
        observer.observe(el);
    });
}

animateElementsInView();