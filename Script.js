 let cart = [];
 let total = 0;

    function addToCart(itemName, price)
    {
        cart.push({ name: itemName, price: price });
        total += price;
        let cartList = document.getElementById('cart-items');
        let newItem = document.createElement('li');
        newItem.textContent = `${itemName} - ₹${price}`;
        cartList.appendChild(newItem);
        document.getElementById('total').textContent = total;
    }