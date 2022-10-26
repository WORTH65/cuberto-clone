const scrollContent = document.getElementById('scroll-content');
const mainContainer = document.querySelector('.main-container');

// Subtracting the content height from the viewport height to get the end point
var scrollEnd = Number(window.innerHeight) - Number(getComputedStyle(scrollContent).height.replace('px', ''));
if (scrollEnd >= 0) { // Means that the content is smaller than or equal to the display height
    scrollEnd = 0;
}

var contentPosition = 0;

document.addEventListener('wheel', (event) => {
    if (event.deltaY < 0) {
        if (getComputedStyle(scrollContent).transform === 'none' || Number(scrollContent.style.transform.replaceAll(' ', '').split(',')[1].replace('px', '')) >= 0) {
            contentPosition = 0;
        } else {
            contentPosition -= event.deltaY;
        }
    } else {
        if (getComputedStyle(scrollContent).transform !== 'none') {
            if ((Number(getComputedStyle(scrollContent).transform.replaceAll(' ', '').split(',')[5].replace(')', '')) - event.deltaY) <= scrollEnd || Number(getComputedStyle(scrollContent).transform.replaceAll(' ', '').split(',')[5].replace(')', '')) <= scrollEnd) {
                contentPosition = scrollEnd;
            } else {
                contentPosition -= event.deltaY;
            }
        } else {
            contentPosition -= event.deltaY;
        }
    }
    scrollContent.style.transform = `translate3d(0,${contentPosition}px,0)`;
})
