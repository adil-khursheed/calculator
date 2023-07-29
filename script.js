const colorThemes = document.querySelectorAll("[name='theme']");

const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

const setTheme = function () {
  const activeTheme = localStorage.getItem("theme");

  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });

  document.documentElement.className = activeTheme;
};

colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);

    document.documentElement.className = themeOption.id;
  });
});

document.onload = setTheme();
// ====== Theme functions end ====== //

// ====== Calculator functions ====== //
let currentInput = "";
let result = "";

function updateDisplay() {
  const display = document.getElementById("display");

  display.value = currentInput;
}

function appendToDisplay(value) {
  currentInput += value;
  updateDisplay();
}

function resetDisplay() {
  currentInput = "";
  result = "";
  updateDisplay();
}

function correctInput() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculateResult() {
  try {
    result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}
