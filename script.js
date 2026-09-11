// MAHSULOTLAR BAZASI
const productsData = [
    { id: 1, name: "RGB Noutbuk Kuler Sovutgichi", price: "185 000 UZS", discount: "-15%", icon: "fa-fan", rating: 4.9, reviews: 34 },
    { id: 2, name: "Besprovodnoy Geyming Sichqoncha", price: "210 000 UZS", discount: "-20%", icon: "fa-computer-mouse", rating: 4.8, reviews: 52 },
    { id: 3, name: "7.1 Surround Igrovoy Garnitura", price: "340 000 UZS", discount: "-10%", icon: "fa-headphones", rating: 5.0, reviews: 18 },
    { id: 4, name: "Mехаnik RGB Klaviatura", price: "420 000 UZS", discount: "-25%", icon: "fa-keyboard", rating: 4.7, reviews: 89 },
];

// SAHIFALARNI ISHONCHLI ALMASHTIRISH FUNKSIYASI
function openPage(pageId, btnIndex) {
    // 1. Barcha sahifalarni yashirish
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.classList.remove('active'));

    // 2. Tanlangan sahifani chiqarish
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // 3. Menyudagi aktiv tugmani yangilash
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (buttons[btnIndex]) {
        buttons[btnIndex].classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// MAHSULOTLARNI EKRANGA CHIQARISH
function renderProducts(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = <p style="color: #888; grid-column: 1/-1; text-align: center; padding: 20px;">Mahsulot topilmadi</p>;
        return;
    }

    container.innerHTML = items.map(p => 
        <div class="product-card">
            <div class="card-top">
                <span class="discount-badge">${p.discount}</span>
                <button class="fav-btn" onclick="toggleFav(this)"><i class="fa-solid fa-heart"></i></button>
            </div>
            <div class="product-img-wrap">
                <i class="fa-solid ${p.icon}"></i>
            </div>
            <div class="rating">
                <i class="fa-solid fa-star"></i> ${p.rating} <span>(${p.reviews})</span>
            </div>
            <div class="product-title">${p.name}</div>
            <div class="price-row">
                <span class="current-price">${p.price}</span>
                <button class="add-cart-btn"><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>
    ).join('');
}

// SEVIMLILAR TOGGLE
function toggleFav(btn) {
    btn.classList.toggle('active');
}

// QIDIRUV ISHLASH FUNKSIYASI
function handleSearch() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    if (query === "") {
        document.getElementById('search-results').innerHTML = "";
        return;
    }

    const filtered = productsData.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered, 'search-results');
}

// TEZKOR QIDIRUV (TAGLAR VA KATALOG UCHUN)
function quickSearch(keyword) {
    openPage('search-page', 1);
    const input = document.getElementById('search-input');
    if (input) {
        input.value = keyword;
        handleSearch();
    }
}

function clearSearch() {
    const input = document.getElementById('search-input');
    if (input) {
        input.value = "";
        document.getElementById('search-results').innerHTML = "";
    }
}

// SAHIFA YUKLANGANDA
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(productsData, 'product-container');
});
