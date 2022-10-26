const cursor = document.querySelector('.cursor');

const moveCursor = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    
    cursor.style.display = 'block';
    cursor.style.transform = `translate3d(${mouseX-10}px, ${mouseY-10}px, 0)`;
}
  
window.addEventListener('mousemove', moveCursor);
window.onscroll = (event) => {
    console.log('e.pageY', event.pageY);
    console.log('e.pageX', event.pageX);
    cursor.setAttribute("style", "top: "+(event.pageY - 10)+"px; left: "+(event.pageX - 10)+"px;");
}

// Cursor zoom on mouseOver
function zoomInCursor() {
    cursor.style.height = '4rem';
    cursor.style.width = '4rem';
    cursor.style.backgroundColor = 'transparent';
    cursor.style.border = '1px solid #fbfbfb';
}
// Cursor zoom out on mouseLeave
function zoomOutCursor() {
    cursor.style.height = '1rem';
    cursor.style.width = '1rem';
    cursor.style.backgroundColor = '#fbfbfb';
    cursor.style.border = '2px solid #02d7ff';
}
