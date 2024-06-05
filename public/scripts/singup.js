const botonAceptar = document.getElementById("idBtnAceptar");

botonAceptar.addEventListener("click", () => {
  const newNombre = document.getElementById("id_nom").value;
  const newApellido = document.getElementById("id_ape").value;
  const newEmail = document.getElementById("id_email").value;
  const newContrasena = document.getElementById("id_passw").value;

  axios.post("http://localhost:3000/Users/user", {
    nombre: newNombre,
    apellido: newApellido,
    email: newEmail,
    contrasena: newContrasena,
    
  });
  swal("Éxito!... ", "El usuario se creó correctamente.","success")
});
