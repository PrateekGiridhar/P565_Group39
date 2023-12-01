export default function Views() {
    <html lang = "english">
    <head>
        <meta charSet = "UTF-8"
        <meta name = "viewport" content = "width=device-width, intial-scale = 1.0">
            <link> rel = "stylesheet" href = "style.css"</link>
                <title>Delivery Service</title>
            </head>
    <body>
    <header>
        <h1>Delivery Service</h1>
        <input> type = "text" id = "inputSearch" placeholder = "Searching"</input>
        </header>
    <main>
        <section id = "Public_View">
        </section>
        <section id = "customer_View" style = "display : none;">
            <h2>Customer View</h2>
            <form id = "order_form">
                <label htmlFor ="size"> Select size: </label>
                <select id = "size" name = "size">
                    <option value = "small">Small</option>
                    <option value = "medium">Medium</option>
                    <option value = "large">Large</option>
                    </select>
                <br>
                    <label htmlFor="payment">Make Payment:</label>
                    <input type="checkbox" id="payment" name="payment">
                        <br>
                            <label htmlFor="review">Submit Review:</label>
                                <textarea id="review" name="review"></textarea>
                            </br>
                                <button type="submit">Submit Order</button>
                </form>
            </section>
            <section id = "delivery_manager_view" style = "display: none;">
                <h2>Delivery Manager View</h2>
                <button id = "delegate_delivery">Delegate Delivery </button>
                <br>
                    <button id = "orderTracker">orderTracker</button>
                </br>
                <button id = "service_management">service and price management</button>
            </section>
        </main>

        <footer>
            <script src = "app.js"></script>
            <script>
                const pkAddress = ["Address 1", "Address 2", "Address 3"]

                const pickupAddressList = document.getElementById("Pickup_address_list")
                pickupAddresses.forEach(address => {
                const listItem.textContent = address;
                pickupAddressList.appendChild(listItem);
            });
                document.getElementById("delegatee_delivery").addEventListener("click", function() {
                document.getElementById("pickupAddresses").style.display = "block";
            });
                const destinationAddresses = ["Destination 1", "Destination 2", "Destination 3"];
                const destinationAddressList = document.getElementById("destination_address_list");
                destinationAddresses.forEach(address => {
                    const listItem = document.createElement("li");
                    listItem.textContent = address;
                    destinationAddressList.appendChild(listItem);});

                document.getElementById("orderTracker").addEventListener("click", function () {
                document.getElementById("destination_addresses").style.display = "block";
            });
                alert("Delivery completed. Customer notified through email.");
            </script>
        </footer>
        </body>

        <section id = "pickup_addresses" style = "display: none;">
            <h2>Pickup Addresses</h2>
            <ul> id = "pickup addresses list"</ul>
        </section>
        <section id = "destination_addresses" style= "display: none;">
            <h2>Destination Addresses</h2>
            <ul>id = "destination_address_list"</ul>
        </section>


    </html>
}






