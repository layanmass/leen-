let allDestinations = []; 

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch('destinations.json');
        
        if (!response.ok) {
            throw new Error('فشل في تحميل البيانات');
        }

        allDestinations = await response.json();
        
        displayDestinations(allDestinations);

    } catch (error) {
        console.error('Error loading JSON:', error);
        document.getElementById('gallery').innerHTML = '<p>حدث خطأ في تحميل البيانات.</p>';
    }
}

function displayDestinations(items) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; 

    items.forEach(item => {
        const cardHTML = `
            <div class="card">
                <img src="${item.image}" alt="${item.name}">
                <div class="card-content">
                    <span class="category-tag">${item.type}</span>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
        gallery.innerHTML += cardHTML;
    });
}

function filterDestinations(category) {
    const buttons = document.querySelectorAll('.filter-container button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'All') {
        displayDestinations(allDestinations);
    } else {
        const filteredData = allDestinations.filter(item => item.type === category);
        displayDestinations(filteredData);
    }
}

