// MAHSULOTLAR MA'LUMOTLAR BAZASI
const productsData = [
    { id: 1, name: "RGB Noutbuk Kuler Sovutgichi", price: "185 000 UZS", discount: "-15%", icon: "fa-fan", rating: 4.9, reviews: 34 },
    { id: 2, name: "Besprovodnoy Geyming Sichqoncha", price: "210 000 UZS", discount: "-20%", icon: "fa-computer-mouse", rating: 4.8, reviews: 52 },
    { id: 3, name: "7.1 Surround Igrovoy Garnitura", price: "340 000 UZS", discount: "-10%", icon: "fa-headphones", rating: 5.0, reviews: 18 },
    { id: 4, name: "Mехаnik RGB Klaviatura", price: "420 000 UZS", discount: "-25%", icon: "fa-keyboard", rating: 4.7, reviews: 89 },
];

// SAHIFALARNI ALMASHTIRISH
function openPage(pageId, element) {
    const allPages = document.querySelectorAll('.page-section');
    allPages.forEach(page => page.classList.remove('active'));

    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    const allButtons = document.querySelectorAll('.nav-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// MAHSULOTLARNI RENDER QILISH
function renderProducts(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

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

// QIDIRUV FUNKSIYASI
function handleSearch() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    if (query === "") {
        document.getElementById('search-results').innerHTML = "";
        return;
    }

    const filtered = productsData.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered, 'search-results');
}

function quickSearch(keyword) {
    document.getElementById('search-input').value = keyword;
    handleSearch();
}

function clearSearch() {
    document.getElementById('search-input').value = "";
    document.getElementById('search-results').innerHTML = "";
}

// BOSHLANG'ICH YUKLANISH
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(productsData, 'product-container');
});
