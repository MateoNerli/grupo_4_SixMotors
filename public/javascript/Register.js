document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector(".form");

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita que se recargue la página

    const formData = new FormData(registerForm);
    
    console.log("Form Data:", formData); // Agrega este console.log para verificar los datos del formulario
    
    try {
      const response = await fetch("/register", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Registro exitoso, puedes redirigir al usuario a otra página
        window.location.href = "/login";
      } else {
        // Maneja errores si es necesario
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error("Error en la solicitud de registro:", error);
    }
  });
});
