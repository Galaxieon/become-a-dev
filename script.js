let icon = document.querySelector(".icon")
let desktop = document.querySelector(".desktop")

icon.addEventListener('click',function(){
    desktop.classList.toggle('is-active')
})