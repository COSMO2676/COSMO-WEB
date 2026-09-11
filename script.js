function switchPage(pageId, element) {
    // 1. Hamma sahifalarni yashirish
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.classList.remove('active'));

    // 2. Tanlangan sahifani ko'rsatish
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // 3. Tugmalarning aktiv holatini o'zgartirish
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    // Sahifani tepaga siljitish
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
