document.addEventListener('DOMContentLoaded', () => {


    const navLinks = document.querySelectorAll('nav ul.nav-list li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ADD8E6';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#fff';
        });
    });

   
    navLinks.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', event => {
                event.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 50,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
});
