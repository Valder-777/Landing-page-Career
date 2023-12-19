// Бургер меню
document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
});

// Валидация
class InputValidator {
  constructor() {
    if (this.constructor == InputValidator) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  validate(formInput) {
    let isValidate = formInput.value.match(this.validatePattern);
    if (!isValidate) {
      this.addFailState(formInput);
    }
    if (isValidate) {
      this.addSuccessState(formInput);
    }
  }

  addFailState(formInput) {
    formInput.classList.remove("success");
    formInput.classList.add("fail");
  }

  addSuccessState(formInput) {
    formInput.classList.remove("fail");
    formInput.classList.add("success");
  }
}

class EmailInputValidator extends InputValidator {
  validatePattern = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,6}$/, "g");
}

class PhoneInputValidator extends InputValidator {
  validatePattern = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    "gmi"
  );
}

class TextInputValidator extends InputValidator {
  validatePattern = new RegExp(/^([а-я-]+[\s]*)+$/, "gi");
}

function addValidator(inputType, inputValidator, submitBtn) {
  let inputList = document.querySelectorAll(
    `.form__input-wrap input[type=${inputType}]`
  );

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      inputValidator.validate(inputElement);
    });

    submitBtn.addEventListener("click", () => {
      inputValidator.validate(inputElement);
    });
  });
}

function processSelectedFile(fileInput) {
  let formFileBlock = document.querySelector(".form__file");
  let fileNameElement = document.querySelector(".load-file__name");
  if (fileInput.files.length == 0) {
    formFileBlock.style.display = "none";
    fileNameElement.innerHTML = "";
  } else {
    fileNameElement.innerHTML = fileInput.files[0].name;
    formFileBlock.style.display = "flex";
  }
}

//Slider
const DoctorResourceCheck = document.querySelectorAll(".values__slider");
if (DoctorResourceCheck.length > 0) {
  const ResourceSlider = new Swiper(".values__slider", {
    breakpoints: {
      576: {
        slidesPerView: 1.3,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 39,
      },
    },
  });
}

// Form cheker
const submitBtn = document.querySelector("#application input");
const phoneInputValidator = new PhoneInputValidator();
const emailInputValidator = new EmailInputValidator();
const textInputValidator = new TextInputValidator();

addValidator("tel", phoneInputValidator, submitBtn);
addValidator("email", emailInputValidator, submitBtn);
addValidator("text", textInputValidator, submitBtn);

let fileInput = document.querySelector(".form__buttons-wrap input[type=file]");
let fileDeleteBtn = document.querySelector(".load-file__delete-btn");

fileInput.addEventListener("change", processSelectedFile(fileInput));
fileDeleteBtn.addEventListener("click", () => {
  fileInput.value = "";
  processSelectedFile(fileInput);
});
