window.onload = function () {
  let formulario = document.querySelector("#FormCont");

  const inputName = document.querySelector("input#name");
  const inputLastName = document.querySelector("input#lastName");
  const inputEmail = document.querySelector("input#email");
  const inputPhone = document.querySelector("input#phone");
  const inputMessage = document.querySelector("textarea#message");

  inputName.focus(); //para que el cursor se posicione en el primer input al cargar la página

  const validateEmptyField = (e) => {
    const field = e.target;

    if (field.value.trim() === "") {
      field.classList.add("is-invalid");
    } else {
      field.classList.remove("is-invalid");
      field.classList.add("is-valid");
    }
  };

  inputName.addEventListener("blur", validateEmptyField);
  inputLastName.addEventListener("blur", validateEmptyField);
  inputEmail.addEventListener("blur", validateEmptyField);
  inputPhone.addEventListener("blur", validateEmptyField);
  inputMessage.addEventListener("blur", validateEmptyField);

  /*******  Formulario ********/
  const createMsj = document.querySelector("form.form");

  createMsj.addEventListener("submit", (e) => {
    const formFields = [...createMovie.elements];
    formFields.pop();

    let areErrors = false;

    for (let field of formFields) {
      if (field.value.trim() === "") {
        field.classList.add("is-invalid");

        areErrors = true;
      } else {
        field.classList.remove("is-invalid");
        field.classList.add("is-valid");
      }
    }

    if (areErrors) {
      e.preventDefault();
    }
  });
};
