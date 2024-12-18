// Agrega el símbolo al display
function appendSymbol(symbol) {
  const display = document.getElementById('display');
  if (display.value === "Error") {
      display.value = symbol; // Reinicia el display si hay un error previo
  } else {
      display.value += symbol;
  }
}

// Limpia completamente el display
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Elimina el último carácter ingresado
function deleteLast() {
  const display = document.getElementById('display');
  if (display.value !== "Error") {
      display.value = display.value.slice(0, -1);
  }
}

// Realiza el cálculo usando eval y maneja errores
function calculate() {
  const display = document.getElementById('display');
  try {
      const result = eval(display.value);
      if (isNaN(result) || !isFinite(result)) {
          throw new Error("Resultado inválido");
      }
      display.value = result;
  } catch (error) {
      display.value = "Error";
  }
}

// Permite alternar entre positivo y negativo
function toggleSign() {
  const display = document.getElementById('display');
  if (display.value && !isNaN(display.value)) {
      display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
  }
}

// Agrega una función para calcular el porcentaje
function calculatePercentage() {
  const display = document.getElementById('display');
  try {
      display.value = eval(display.value + '/100');
  } catch (error) {
      display.value = "Error";
  }
}

// Agrega un atajo para el uso del teclado
document.addEventListener('keydown', (event) => {
  const display = document.getElementById('display');
  const allowedKeys = '0123456789+-*/.()';
  if (allowedKeys.includes(event.key)) {
      appendSymbol(event.key);
  } else if (event.key === 'Enter') {
      calculate();
  } else if (event.key === 'Backspace') {
      deleteLast();
  } else if (event.key === 'Escape') {
      clearDisplay();
  }
});
