document.addEventListener("DOMContentLoaded", () => {
    //一回だけ走る処理
    const carousel = document.querySelector(".SoftCarousel");
    if (!carousel) {
        console.error("Carousel or CarouselContainer not found");
        return;
    }
    CarouselItems = Array.from(carousel.children);

    CarouselItems.forEach((items) => {
        const cloneItems = items.cloneNode(true);
        items.cloneItems;
        carousel.appendChild(cloneItems);
    });

    let startX;
    let currentX = 0;
    let speed = 1;

    let test = 1;
    console.log(carousel.scrollWidth);
    //恒常的(毎フレーム)走る処理
    autoScroll();
    function autoScroll() {
        currentX -= speed;
        if (Math.abs(currentX) >= carousel.scrollWidth / 2) {
            currentX = 0;
        }
        carousel.style.transform = `translateX(${currentX}px)`;
        console.log(currentX);
        requestAnimationFrame(autoScroll);
    }
});
