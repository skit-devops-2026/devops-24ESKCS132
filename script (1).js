// ============================================
// FARMKART HEADER JAVASCRIPT
// ============================================


// ================================
// ACCOUNT DROPDOWN
// ================================

const accountBtn = document.getElementById("accountBtn");
const accountDropdown = document.getElementById("accountDropdown");

accountBtn.addEventListener("click", function (event) {

    event.stopPropagation();

    accountDropdown.classList.toggle("active");

});


// Close dropdown when clicking outside

document.addEventListener("click", function () {

    accountDropdown.classList.remove("active");

});


// ================================
// LOCATION MODAL
// ================================

const locationBtn = document.getElementById("locationBtn");

const locationModal = document.getElementById("locationModal");

const closeModal = document.getElementById("closeModal");

const saveLocation = document.getElementById("saveLocation");

const locationInput = document.getElementById("locationInput");

const locationName = document.getElementById("locationName");


// Open modal

locationBtn.addEventListener("click", function () {

    locationModal.classList.add("active");

});


// Close modal

closeModal.addEventListener("click", function () {

    locationModal.classList.remove("active");

});


// Save location

saveLocation.addEventListener("click", function () {

    const location = locationInput.value.trim();

    if (location === "") {

        alert("Please enter your location.");

        return;

    }

    locationName.textContent = location;

    locationModal.classList.remove("active");

    locationInput.value = "";

});


// Close modal when clicking outside

locationModal.addEventListener("click", function (event) {

    if (event.target === locationModal) {

        locationModal.classList.remove("active");

    }

});


// ================================
// SEARCH
// ================================

const searchInput = document.getElementById("searchInput");

const searchBtn = document.getElementById("searchBtn");

const suggestions = document.getElementById("suggestions");


// Show suggestions

searchInput.addEventListener("focus", function () {

    suggestions.classList.add("active");

});


// Search

searchBtn.addEventListener("click", function () {

    const query = searchInput.value.trim();

    if (query === "") {

        alert("Please enter a product to search.");

        return;

    }

    console.log("Searching for:", query);

    alert(`Searching for "${query}"`);

});


// ================================
// SUGGESTION CLICK
// ================================

const suggestionItems =
    document.querySelectorAll(".suggestion");


suggestionItems.forEach(function (item) {

    item.addEventListener("click", function () {

        searchInput.value = item.textContent.trim();

        suggestions.classList.remove("active");

    });

});


// Hide suggestions when clicking outside

document.addEventListener("click", function (event) {

    if (!event.target.closest(".search-container")) {

        suggestions.classList.remove("active");

    }

});


// ================================
// CART
// ================================

const cartBtn = document.getElementById("cartBtn");

const cartCount = document.getElementById("cartCount");

let cartItems = 0;


cartBtn.addEventListener("click", function () {

    if (cartItems === 0) {

        alert("Your cart is empty.");

    } else {

        alert(`You have ${cartItems} items in your cart.`);

    }

});


// ================================
// MOBILE MENU
// ================================

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const categoryNav =
    document.getElementById("categoryNav");


mobileMenuBtn.addEventListener("click", function () {

    categoryNav.classList.toggle("mobile-active");

});