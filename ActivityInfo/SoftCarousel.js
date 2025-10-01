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

    let currentX = 0;
    let speed = 3;

    let isDragging = false;
    let prevMouseX = 0;
    let currentMouseX = 0;
    let mouseDeltaX = 0;


    const scrollHalfWidth = carousel.scrollWidth / 2;   
    //イベント関係
    carousel.addEventListener("mousedown",(mouse) => {
        isDragging = true;
        prevMouseX = mouse.pageX;
        currentMouseX = mouse.pageX;
    })
    carousel.addEventListener("mousemove",(mouse) => {
        if(!isDragging) return;
        currentMouseX = mouse.pageX;
    })
    carousel.addEventListener("mouseup",() => {
        isDragging = false;
    })
    carousel.addEventListener("mouseleave",() => {
        isDragging = false;
    })
    //恒常的(毎フレーム)走る処理
    let test = 0;
    autoScroll();
    function autoScroll() {
        mouseDeltaX = currentMouseX - prevMouseX
        if(!isDragging){
            currentX -= speed;
        }
        else{
            currentX += mouseDeltaX;
        }
        currentX = Repeat(currentX,-scrollHalfWidth)
        carousel.style.transform = `translateX(${currentX}px)`;
        prevMouseX = currentMouseX;
        requestAnimationFrame(autoScroll);
    }

});

function Repeat(t,length){
    return t - Math.floor(t / length) * length;
}


