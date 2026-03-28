const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const nav = document.querySelector('nav ul');

menuBtn.onclick = () => {
    nav.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
}

closeBtn.onclick = () => {
    nav.style.display = 'none';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
}