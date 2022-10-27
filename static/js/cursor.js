const cursor = document.querySelector('.cursor');

const moveCursor = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    
    cursor.style.display = 'block';
    cursor.style.top = `${mouseY}px`;
    cursor.style.left = `${mouseX}px`;
    
    cursor.style.transform = `translate(-50%, -50%)`;
}
  
window.addEventListener('mousemove', moveCursor);
window.onscroll = (event) => {
    console.log('e.pageY', event.pageY);
    console.log('e.pageX', event.pageX);
    cursor.setAttribute("style", "top: "+(event.pageY - 10)+"px; left: "+(event.pageX - 10)+"px;");
}
