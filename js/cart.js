//? PRE-ENTREGA 3
//! Ejecutando compra de productos

const paintCart = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "✕";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener ("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

    cart.forEach((prod) => {
        let cartCont = document.createElement("div");
        cartCont.className = "modal-cont";
        cartCont.innerHTML = `
        <img src="${prod.img}">
        <h5>${prod.name}</h5>
        <p>$${prod.price}</p>
        <span class="minus"> - </span>
        <p>Cantidad: ${prod.quantity}</p>
        <span class="plus"> + </span>
        <p>Total: $${prod.quantity * prod.price}</p>
        <span class="delete-product bx bx-trash bx-tada-hover">  </span>
        `;

        modalContainer.append(cartCont);

        let minus = cartCont.querySelector(".minus");
        minus.addEventListener("click", () => {
            if(prod.quantity !== 1){
                prod.quantity--;
            };
            saveLocal();
            paintCart();
        });

        let plus = cartCont.querySelector(".plus");
        plus.addEventListener("click", () => {
            prod.quantity++
            saveLocal();
            paintCart();
        });

        let del = cartCont.querySelector (".delete-product");

        del.addEventListener("click", () => {
            delProduct(prod.id);
        });
    });

    const total = cart.reduce((acc, a) => acc + a.price * a.quantity, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar: $${total}`;
    modalContainer.append(totalBuying);
};

seeCart.addEventListener("click", paintCart);

const delProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);

    console.log (foundId);

    cart = cart.filter((cartId) => {
        return cartId !== foundId;
    });
    cartCounter();
    saveLocal();
    paintCart();
};

const cartCounter = () => {
    quantityCart.style.display = "block";
    const cartLength = cart.length;
    localStorage.setItem("cartLength", JSON.stringify(cartLength));
    quantityCart.innerText = JSON.parse(localStorage.getItem("cartLength"));
};

cartCounter();