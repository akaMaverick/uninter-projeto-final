ocument.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('header.main-header');
    const button = document.createElement('button');
    button.style.background = '#4caf50';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.padding = '10px 20px';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.marginTop = '1rem';
    button.style.fontSize = '1rem';

    button.addEventListener('click', () => {
        alert('Bem-vindo à Consciência Ambiental! Descubra como você pode ajudar o planeta.');
    });

    header.appendChild(button);

    const navLinks = document.querySelectorAll('nav ul.nav-list li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#d4f3c6';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#fff';
        });
    });

    // Adiciona rolagem suave apenas para links internos
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
