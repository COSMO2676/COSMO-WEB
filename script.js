// Navigatsiya menyusi skroll bo'lganda fonini o'zgartirish
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.background = 'rgba(20, 20, 20, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Tugmalarga bosilganda silliq o'tish effekti
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});