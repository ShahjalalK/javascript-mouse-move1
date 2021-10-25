const slide = document.querySelector('#slide')
window.addEventListener('mousemove', (e) => {
    var x = e.clientX
    slide.style.left = x +'px'
   
})

