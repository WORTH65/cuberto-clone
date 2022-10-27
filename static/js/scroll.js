const scrollContent = document.getElementById('scroll-content');
const mainContainer = document.querySelector('.main-container');

// Subtracting the content height from the viewport height to get the end point
var scrollEnd = Number(window.innerHeight) - Number(getComputedStyle(scrollContent).height.replace('px', ''));
if (scrollEnd >= 0) { // Means that the content is smaller than or equal to the display height
    scrollEnd = 0;
}

// Calculating the content size above the features images
// var featuredImageTop = Number(getComputedStyle(document.querySelector('.projects-wrapper')).marginTop.replace('px', '')) 
//                     + Number(getComputedStyle(document.querySelector('.features-head')).height.replace('px', ''))
//                     + Number(getComputedStyle(document.querySelector('.landing-head')).marginBottom.replace('px', ''))
//                     + Number(getComputedStyle(document.querySelector('.landing-head')).height.replace('px', ''))
//                     + Number(getComputedStyle(document.querySelector('.landing')).height.replace('px', ''))
//                     + Number(getComputedStyle(document.querySelector('.header')).height.replace('px', ''))
//                     + Number(getComputedStyle(document.getElementById('scroll-content')).paddingTop.replace('px', '')) 
//                     + Number(document.documentElement.clientHeight * 0.05);

var contentPosition = 0;
var imagePosition = 0;
var imageContainer = 0;

// scrollContent.addEventListener('transitionend', (event) => {
//     if (isInViewport(document.querySelector('.projects-image-wrapper'))) {
//         document.querySelector('.projects-image-wrapper').style.position = 'absolute';
//         document.querySelector('.projects-image-wrapper').style.top = `${featuredImageTop}px`;
//         document.querySelector('.projects-image-wrapper').style.right = '17em';
//     } else {
//         document.querySelector('.projects-image-wrapper').style.position = 'static';
//     }
// })

document.addEventListener('wheel', (event) => {
    // Start the images movement on projects Section
    if (isInViewport(document.querySelector('.projects-image-wrapper')) && !(isInViewport(document.querySelector('.projects-text-end')))) {
        imagePosition += event.deltaY;
        imageContainer -= event.deltaY;
    }
    // Change the background-color based on project in view
    if (isInViewport(document.querySelector('.features-head')) || isInViewport(document.querySelector('.nana-text'))) {
        document.querySelector('body').className = '';
        document.querySelector('body').classList.add('background-color-nana');
        cursor.className = '';
        cursor.classList.add('cursor');
        cursor.classList.add('cursor-background-color-nana');
    } if (isInViewport(document.querySelector('.ulesson-text'))) {
        document.querySelector('body').className = '';
        document.querySelector('body').classList.add('background-color-ulesson');
        cursor.className = '';
        cursor.classList.add('cursor');
        cursor.classList.add('cursor-background-color-ulesson');
    } if (isInViewport(document.querySelector('.riyadh-text'))) {
        document.querySelector('body').className = '';
        document.querySelector('body').classList.add('background-color-riyadh');
        cursor.className = '';
        cursor.classList.add('cursor');
        cursor.classList.add('cursor-background-color-riyadh');
    } if (isInViewport(document.querySelector('.sleepiest-text'))) {
        document.querySelector('body').className = '';
        document.querySelector('body').classList.add('background-color-sleepiest');
        cursor.className = '';
        cursor.classList.add('cursor');
        cursor.classList.add('cursor-background-color-sleepiest');
    } if (isInViewport(document.querySelector('.ferrumpipe-text'))) {
        document.querySelector('body').className = '';
        document.querySelector('body').classList.add('background-color-ferrumpipe');
        cursor.className = '';
        cursor.classList.add('cursor');
        cursor.classList.add('cursor-background-color-ferrumpipe');
    } if (isInViewport(document.querySelector('.flipaclip-text'))) {
        document.querySelector('body').className = '';
        document.querySelector('body').classList.add('background-color-flipaclip');
        cursor.className = '';
        cursor.classList.add('cursor');
        cursor.classList.add('cursor-background-color-flipaclip');
    }
    // Defaultign the background for the rest of the website
    if (isInViewport(document.querySelector('.apps-happen'))) {
        document.querySelector('body').className = '';
        document.querySelector('body').classList.add('background-color-white');
        cursor.className = '';
        cursor.classList.add('cursor');
        cursor.classList.add('background-color-black');
    }
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
    document.querySelector('.projects-image-wrapper').style.transform = `translate3d(0,${imagePosition}px,0)`;
    document.querySelector('.projects-image-container').style.transform = `translate3d(0,${imageContainer}px,0)`;
})

// Function to check if an element is in viewport or not
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
