document.addEventListener("DOMContentLoaded", function () {
    const divisions = document.querySelectorAll(".division1, .division2, .division3, .division4, .division5");

    divisions.forEach((division) => {
        const divisionIndex = division.dataset.index;
        const image = document.getElementById(`image${divisionIndex}`);

        division.addEventListener("mouseenter", () => {
            const imageSrc = division.getAttribute("data-image");
            image.querySelector("img").src = imageSrc;
            image.style.display = "block";
            setTimeout(() => {
                image.style.opacity = 1;
            }, 10);
        });

        division.addEventListener("mouseleave", () => {
            image.style.opacity = 0;
            setTimeout(() => {
                image.style.display = "none";
            }, 500);
        });
    });
});


