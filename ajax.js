let allDestinations = [];

async function loadDestinations() {
  try {
    const res = await fetch("destinatinos.json");
    allDestinations = await res.json();
    renderDestinations(allDestinations);
  } catch (error) {
    console.error("Error loading destinations:", error);
  }
}

function renderDestinations(destinations) {
  const container = document.getElementById("destinations-list");
  container.innerHTML = "";

  destinations.forEach(item => {
    const card = document.createElement("div");
    card.className = "destination-card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <span class="tag">${item.type}</span>
    `;

    container.appendChild(card);
  });
}

function filterDestinations(type) {
  if (type === "All") {
    renderDestinations(allDestinations);
  } else {
    const filtered = allDestinations.filter(
      d => d.type === type
    );
    renderDestinations(filtered);
  }
}

window.onload = loadDestinations;
