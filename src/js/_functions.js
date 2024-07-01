import { validateForms } from "./functions/validate-forms.js";

const checks = [
  {
    selector: "#checkbox-wrapper",
    errorMessage: "Выберите чекбоксы",
  },
];
const checks2 = [
  {
    selector: "#m-checkbox",
    errorMessage: "Выберите чекбоксы",
  },
];

const rules1 = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
      },
    ],
  },
  {
    ruleSelector: ".input-mark",
    rules: [
      {
        rule: "required",
        value: true,
      },
    ],
  },
  {
    ruleSelector: ".input-area",
    rules: [
      {
        rule: "required",
        value: true,
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
];
const rules2 = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
];

const afterForm = () => {
  alert("Спасибо за заявку. В ближайшее время с вами свяжутся!");
};

// validateForms(".cta__form", rules1, checks, afterForm);
validateForms(".cta-form", rules1, checks, afterForm);
validateForms(".modal-form", rules2, checks2, afterForm);
