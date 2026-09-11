function openPage(pageId, element) {
    // 1. Barcha sahifalarni yashirish
    const allPages = document.querySelectorAll('.page-section');
    allPages.forEach(page => {
        page.classList.remove('active');
    });

    // 2. Bosilgan sahifani chiqarish
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // 3. Menyudagi aktiv tugmani yangilash
    const allButtons = document.querySelectorAll('.nav-btn');
    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');

    // Sahifa tepasiga silliq chiqarish
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
