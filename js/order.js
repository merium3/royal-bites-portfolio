/*==========================================
        ORDER PAGE
==========================================*/

// Get selected dish from URL
const params = new URLSearchParams(window.location.search);

const item = params.get("item");

const selectedItem = document.getElementById("selectedItem");

if (selectedItem) {

    if (item) {

        selectedItem.textContent = decodeURIComponent(item);

    } else {

        selectedItem.textContent = "No Item Selected";

    }

}


/*==========================================
        ORDER FORM
==========================================*/

const orderForm = document.getElementById("orderForm");

if (orderForm) {

    orderForm.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("🎉 Thank you! Your order has been placed successfully.");

        orderForm.reset();

    });

}
