import { createContent } from "./index.js";
import { ValidForm } from "../model/validateForm.js";

document.addEventListener("DOMContentLoaded", function () {
    createContent();
    const validate = new ValidForm();

});