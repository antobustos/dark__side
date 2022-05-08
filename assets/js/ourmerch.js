alert("Welcome to the Dark Side Store!");
let producto = prompt(
  "Seleccione la prenda que desea comprar: HOODIE DARK JAPAN ó T-SHIRT DARK HOTEL"
);

const iva = 21 / 100;

const hoodie = [
  (nombreProducto = "Hoodie Dark Japan"),
  (precio = 3900),
  (ivaProducto = iva),
  (descuento = 0.1),
];

const shirt = [
  (nombreProducto = "T-Shirt Dark Hotel"),
  (precio = 2900),
  (ivaProducto = iva),
  (descuento = 0.05),
];

function compra() {
  let compraProducto = producto;

  switch (producto.toLowerCase()) {
    case "hoodie dark japan":
      alert("deseas comprar " + hoodie[0] + "?");

      let detalleHoodie = prompt(
        "deseas ver el detalle de tu compra? SÍ o NO? "
      );

      detalleCompra = detalleHoodie.toLowerCase();

      if (detalleHoodie == "si") {
        function detalleValor() {
          let valor = hoodie[1] * hoodie[2] + hoodie[1];

          alert(
            "Vas a comprar un " +
              hoodie[0] +
              " al precio de $" +
              hoodie[1] +
              " + " +
              (hoodie[2] * 100 + " % de IVA") +
              " por un total de $" +
              valor +
              " incluido IVA"
          );
        }

        detalleValor();
      } else {
        console.log("Puedes ir a realizar el pago");
        alert("Puedes ir a realizar el pago");
      }

      break;

      case "t-shirt dark hotel":
        alert("deseas comprar " + shirt[0] + "?");
  
        let detalleShirt = prompt(
          "deseas ver el detalle de tu compra? SÍ o NO? "
        );
  
        detalleCompra = detalleShirt.toLowerCase();
  
        if (detalleShirt = "si") {
          function detalleValor() {
            let valor = shirt[1] * shirt[2] + shirt[1];
  
            alert(
              "Vas a comprar un " +
                shirt[0] +
                " al precio de $" +
                shirt[1] +
                " + " +
                (shirt[2] * 100 + " % de IVA") +
                " por un total de $" +
                valor +
                " incluido IVA"
            )

          }
          detalleValor()
        } else {
          console.log("Puedes ir a realizar el pago");
          alert("Puedes ir a realizar el pago");
        }
  
        break;



    default:
      alert(
        'Actualmente unicamente están a la venta "Hoodie Dark Japan" y "T-Shirt Dark Hotel". Por favor, elija una de esas opciones'
      );

      break;
  }

  return compraProducto;
}

compra();
