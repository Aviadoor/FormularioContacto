const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const alertName = document.querySelector("#alertName");
const alertEmail = document.querySelector("#alertEmail");
const button = document.querySelector("button");
const form = document.querySelector("form");
const mensaje = document.querySelector("#mensaje");
const alertMensaje= document.querySelector("#alertMensaje");

function Validacion(){
    var validacion = true;

    if (nombre.value.length < 4){
        validacion = false;
        alertName.innerHTML = "*Nombre incompleto*";
    }
    else
    {
        alertName.innerHTML = "";
    }

    if (email.value.includes("@gmail.com") || email.value.includes("@hotmail.com") || email.value.includes("@outlook.com")){
        alertEmail.innerHTML = "";
    }
    else
    {
        validacion = false;
        alertEmail.innerHTML = "*Email invalido*"
    }

    if (mensaje.value == ""){
        alertMensaje.innerHTML = "*Mensaje invalido*"
        validacion = false;
    }else{
        alertMensaje.innerHTML = ""
    }

    return validacion;
}


form.addEventListener("submit", (e) => {
    if (Validacion()){
            e.preventDefault(); //Envia el formulario
            console.log(
                button.innerHTML = "ENVIADO",
                button.style.background = "#59E742",
                setTimeout(() => {
                    button.innerHTML = "Enviar"
                    button.style.background = "rgb(3, 141, 211)";
                }, 1000));
                
            setTimeout(() => {
                form.submit();

            }, 1000)
        
    }else{
        e.preventDefault(); //Desactiva la funcion. En este caso, evita que el form pueda enviar la informacion
    }
})

