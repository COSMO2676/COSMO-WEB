// Sahifani almashtirish funksiyasi
function showPage(pageId, el) {
    // Barcha sahifalarni yashirish
    document.querySelectorAll('.page-section').forEach(sec => {
        sec.classList.remove('active');
        sec.style.display = 'none';
    });

    // Tanlangan sahifani ko'rsatish
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        targetPage.style.display = 'block';
    }

    // Barcha nav tugmalardan active klassini olib tashlash
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Bosilgan tugmaga active klassini qo'shish
    if (el) {
        el.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
}

// Tugmalarga hodisalarni biriktirish
document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.nav-btn');
    
    btns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            if (target) {
                showPage(target, this);
            }
        });
    });
});
