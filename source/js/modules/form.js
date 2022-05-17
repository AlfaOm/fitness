const inputName = document.querySelector("#feedback-name");
const inputPhone = document.querySelector("#feedback-tel");

const MIN_LENGTH_INPUT_NAME = 2;
const MAX_LENGTH_INPUT_TEL = 17;

export const validateInput = () => {
  inputName.addEventListener("input", () => {
    const valueLength = inputName.value.length;

    if (valueLength < MIN_LENGTH_INPUT_NAME) {
      inputName.setCustomValidity("Введите не менее двух символов");
    } else {
      inputName.setCustomValidity("");
    }

    inputName.reportValidity();
  });

  // +7 (123) 456 7890

  inputPhone.addEventListener("input", () => {
    const valueLength = inputPhone.value.length;

    if (valueLength < MAX_LENGTH_INPUT_TEL) {
      inputPhone.setCustomValidity(
        "Введите номер в формате: +7 (123) 456 7890"
      );
    } else {
      inputPhone.setCustomValidity("");
    }

    inputPhone.reportValidity();
  });

  // Маска для номера телефона
  [].forEach.call(
    document.querySelectorAll('input[type="tel"]'),
    function (input) {
      let keyCode;
      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
        i = new_value.indexOf("_");
        if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i);
        }
        let reg = matrix
          .substr(0, this.value.length)
          .replace(/_+/g, function (a) {
            return "\\d{1," + a.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
          !reg.test(this.value) ||
          this.value.length < 5 ||
          (keyCode > 47 && keyCode < 58)
        )
          this.value = new_value;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
    }
  );
};
