document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
anchor=document.querySelectorAll('a');for(let i=0;i<anchor.length;i++){anchor[i].addEventListener('click',function(){for(let j=0;j<anchor.length;j++){anchor[j].classList.remove('active')}this.classList.add('active')})}  
const form = document.getElementsByClassName('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
    form.reset();
});