const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', this.window.scrollY > 50)
});


//open menu


let menu = document.querySelector('#iconoMenu');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}