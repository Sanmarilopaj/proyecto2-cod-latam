//Seleccionr los elementos
const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorHexAletor() {
	let digitos = '0123456789ABCDEF';
	let colorHex = '#';

	for(let i = 0; i < 6; i++) {
		let indiceAleatorio = Math.floor(Math.random() * 16);
		colorHex += digitos[indiceAleatorio];
	}

	return colorHex;
}

boton.addEventListener('click', function() {
	let colorAleatorio = generarColorHexAletor();
	//Actualizar el texto.
	color.textContent = colorAleatorio;
	//Actualizar el color de fondo.
	document.body.style.backgroundColor = colorAleatorio;
});

if(document.getElementById("btnModal")){
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("btnModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];

    btn.onclick = function() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "70%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "40%";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}