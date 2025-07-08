// declarando variables (let y const).
const ropa = ["Remera", "Pantalon", "Campera"];
const valores = [600, 750, 1500];
let total = 0;

//function para mostrar la ropa disponibles.
function mostrarRopa() {
    alert(`Productos disponibles:
    1- Remera
    2- Pantalon
    3- Campera`);
}

// function para realizar una switch case con las distintas elecciones posibles del usuario.
function elegirRopa() {
    let opciones = prompt("¿Qué prenda querés comprar?, Seleccione: 1, 2 o 3");

    switch (opciones) {
        case "1":
            total += valores[0];
            alert("Seleccionaste REMERA por $600");
            break;
        case "2":
            total += valores[1];
            alert("Seleccionaste PANTALON por $750");
            break;
        case "3":
            total += valores[2];
            alert("Seleccionaste CAMPERA por $1500");
            break;
        default:
            alert("Prenda no encontrada, vuelve a intentarlo.");
            break;
    }

    console.log("Total: $" + total);
}

// function para darle un inicio a la tienda, esto es lo primero que se va a mostrar.
function iniciarTienda() {
    alert("¡Bienvenido!, ¿desea comprar ropa?");

    // variable para determinar el bucle de toda la "tienda de ropa".
    let continuar = true;

    while (continuar) {
        mostrarRopa();
        elegirRopa();

        continuar = confirm("¿Querés comprar otro producto?");
    }

    //finalizando la compra.
    alert("Gracias por tu compra. Total gastado: $" + total);
    console.log("Compra finalizada. Total: $" + total);
}

iniciarTienda();