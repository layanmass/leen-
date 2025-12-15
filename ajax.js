// متغير لتخزين البيانات القادمة من JSON
let allDestinations = [];

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    loadDestinations();
});

// دالة لجلب البيانات باستخدام AJAX (Fetch)
function loadDestinations() {
    fetch('destinatinos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("فشل ");
            }
            return response.json();
        })
        .then(data => {
            allDestinations = data; // تخزين البيانات لاستخدامها في الفلترة
            displayDestinations(data); // عرض كل البيانات مبدئياً
        })
        .catch(error => console.error('Error loading JSON:', error));
}

// دالة لعرض البيانات داخل الـ HTML باستخدام innerHTML
function displayDestinations(items) {
    const galleryContainer = document.getElementById('gallery');
    
    // إذا لم توجد عناصر
    if (items.length === 0) {
        galleryContainer.innerHTML = '<p>لا توجد وجهات في هذا التصنيف.</p>';
        return;
    }

    // بناء كود HTML
    let htmlContent = '';
    
    items.forEach(item => {
        // نستخدم رابط صورة افتراضي في حالة عدم وجود الصورة الحقيقية للتجربة
        // يمكنك إزالة هذا الشرط إذا كانت الصور موجودة فعلياً
        const imgSrc = item.image; 

        htmlContent += `
            <div class="card">
                <img src="${imgSrc}" alt="${item.name}">
                <div class="card-content">
                    <span class="category-tag">${item.type}</span>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
    });

    // تحديث الصفحة باستخدام innerHTML كما هو مطلوب
    galleryContainer.innerHTML = htmlContent;
}

// دالة الفلترة
function filterDestinations(category) {
    // تحديث ستايل الأزرار (Active class)
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent.includes(category === 'All' ? 'الكل' : 
           category === 'resturant' ? 'المطاعم و المقاهي' : 
           category === 'Museums' ? 'المتاحف':
            category === 'entertainment' ? 'الاماكن الترفهية')) {
            btn.classList.add('active');
        }
    });

    // منطق الفلترة
    if (category === 'All') {
        displayDestinations(allDestinations);
    } else {
        const filtered = allDestinations.filter(item => item.type === category);
        displayDestinations(filtered);
    }
}
