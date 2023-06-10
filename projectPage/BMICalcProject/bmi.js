function calcBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
  
    let BMI = weight / ((height) ** 2) * 703;
  
    let result = document.getElementById('result');
    result.textContent = 'BMI: ' + BMI.toFixed(2);
  }