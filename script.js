function appendSymbol(symbol) {
    document.getElementById('display').value += symbol;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    let display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }