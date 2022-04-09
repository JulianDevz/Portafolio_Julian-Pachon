import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll(".inputs");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});