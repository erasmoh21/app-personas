const contenedorPersona = document.querySelector('.tarjeta')
const boton = document.getElementById('random')

boton.addEventListener('click',() => {

    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos la respuesta
        console.log(data)
        renderizarDatosUsuario(data.results[0].picture.medium,data.results[0].name.first,data.results[0].email)
    });

})


function renderizarDatosUsuario(img,nombre,email) {
    const datosPersona = `
        <div class="personas">
            <div>
                <img src="${img}">
            </div>
            <div>
            <p>${nombre}</p>
            </div>
            <div>
            <p>${email}</p>
            </div>
        </div>
        `
    
    contenedorPersona.innerHTML = datosPersona    
}