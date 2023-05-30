function showAlert() {alert('No debes hacer todo lo que te dicen, ¡sé tú mismo!');}

const boton = redes_sociales.getElementById('facebook');

boton.addEventListener('click', function() {
  window.location.href = "https://www.facebook.com/tototorres87";
});

const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
})