<script>
document.addEventListener("DOMContentLoaded", function() {
    const validaCoupon = document.getElementById("valida-coupon");
    const borraCoupon = document.getElementById("borra-coupon");
    const inputCoupon = document.getElementById("Inserire-coupon-2"); // El input donde se inserta el cupón (con 'I' mayúscula)
    const prezzoTotale = document.getElementById("prezzo-totale"); // El precio total original

    let precioTotalOriginal = 0; // Variable para almacenar el precio original

    // Inicialmente ocultamos el botón "borra-coupon"
    borraCoupon.style.display = "none";

    // Al hacer clic en "valida-coupon"
    validaCoupon.addEventListener("click", function() {
        const couponCode = inputCoupon.value.trim(); // Obtenemos el valor del cupón y quitamos espacios
        const discountCode = "CIAOSIVIGLIA"; // Código de descuento válido

        // Obtener el precio total original en el momento del clic
        precioTotalOriginal = parseFloat(prezzoTotale.textContent.replace(',', '.').replace('€', '').trim());

        // Comprobar si el cupón es válido
        if (couponCode === discountCode && precioTotalOriginal > 0) {
            const precioTotalDescuento = precioTotalOriginal * 0.90; // Aplicamos un 10% de descuento al total

            // Actualizamos solo el valor de "prezzo-totale"
            prezzoTotale.textContent = `${precioTotalDescuento.toFixed(2).replace('.', ',')} €`;

            // Ocultamos el botón "valida-coupon" y mostramos el botón "borra-coupon"
            validaCoupon.style.display = "none";
            borraCoupon.style.display = "block";
        }
    });

    // Al hacer clic en "borra-coupon"
    borraCoupon.addEventListener("click", function() {
        // Ocultamos el botón "borra-coupon" y mostramos el botón "valida-coupon"
        borraCoupon.style.display = "none";  
        validaCoupon.style.display = "block";  
        inputCoupon.value = "";  // Borramos el contenido del input "Inserire-coupon-2"

        // Restaurar el precio total original sin el descuento
        if (precioTotalOriginal > 0) {
            prezzoTotale.textContent = `${precioTotalOriginal.toFixed(2).replace('.', ',')} €`; 
        }
    });
});
</script>
