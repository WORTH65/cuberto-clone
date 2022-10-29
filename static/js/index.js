// Showreel video handlers
function
    artShow() {
    document.querySelector('.showreel-video').style.zIndex = 333;
    document.querySelector('.showreel-video').style.opacity = 1;
    document.querySelector('.showreel-video video').currentTime = 0;
    document.querySelector('.showreel-video video').play();
    cursor.innerHTML = `<i class="fa fa-close color-white" aria-hidden="true"></i>`;
    cursor.setAttribute('onclick', 'stopShow()');
}
function stopShow() {
    document.querySelector('.showreel-video').style.opacity = 0;
    setTimeout(() => {
        cursorDefault();
        document.querySelector('.showreel-video').style.zIndex = -2;
        document.querySelector('.showreel-video video').pause();
        document.querySelector('.showreel-video video').currentTime = 0;
    }, 400);
}
// Bigger Cursor for video hover
function cursorCloseVideo() {
    cursor.style.height = '4rem';
    cursor.style.width = '4rem';
    cursor.style.zIndex = 334;
    cursor.style.cursor = 'pointer';
}

// Hamburger Icon Logic
const hamburger = document.querySelector(".hamburger");
const line1 = document.querySelector(".b1");
const line2 = document.querySelector(".b2");
const navBox = document.querySelector(".nav_box");
const mainContainer = document.querySelector(".main-container");
const itachi = document.querySelector(".itachi");
const pkadiv = document.querySelector(".pkadiv");
itachi.addEventListener("mouseover", () => {
    pkadiv.style.transform = "scale(1)";
})
itachi.addEventListener("mouseout", () => {
    pkadiv.style.transform = "scale(0)";
})



// console.log(line1, line2, hamburger);

hamburger.addEventListener("click", () => {
    toggleSidebar();
    navbarToggle();
})

function toggleSidebar() {
    line1.classList.toggle("openb1");
    line2.classList.toggle("openb2");
}
function navbarToggle() {
    navBox.classList.toggle("-open");
    mainContainer.classList.toggle("background-light");


}
// /Hamburger Icon Logic

// Video on landing section hover

function videoCursor(e) {
    cursor.style.height = '20rem';
    cursor.style.width = '20rem';
    cursor.className = '';
    cursor.classList.add('cursor');
    cursor.classList.add('background-color-transparent');

    if (e.currentTarget.id === 'websites-happen') {
        if (cursor.innerHTML === '') {
            cursor.innerHTML = '<video loop autoplay="true" muted="muted" class="happen-video" src="/assets/video/1.mp4"></video>';
        }
    } else if (e.currentTarget.id === 'apps-happen') {
        if (cursor.innerHTML === '') {
            cursor.innerHTML = '<video loop autoplay="true" muted="muted" class="happen-video" src="/assets/video/2.mp4"></video>';
        }
    } else if (e.currentTarget.id === 'branding-happen') {
        if (cursor.innerHTML === '') {
            cursor.innerHTML = '<video loop autoplay="true" muted="muted" class="happen-video" src="/assets/video/3.mp4"></video>';
        }
    }
}
// /Video on landing section hover

// Featured Section Cursor
function projectsImgCursor(e) {
    // cursor.style.height = '5.4rem';
    // cursor.style.width = '5.4rem';
    // cursor.style.cursor = 'pointer';
    // cursor.style.zIndex = 334;
}
// /Featured Section Cursor

// Defaulting the cursor
function cursorDefault() {
    cursor.style.height = '0.8rem';
    cursor.style.width = '0.8rem';
    cursor.className = '';
    cursor.classList.add('cursor');
    cursor.classList.add('background-color-black');
    cursor.style.zIndex = -1;
    if (cursor.hasAttribute('onclick')) {
        cursor.removeAttribute('onclick');
    }
    cursor.innerHTML = '';
}




