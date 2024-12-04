document.getElementById('calculator-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
  
    let idealWeight;
  
    if (gender === 'male') {
      idealWeight = 50 + 0.9 * (height - 152.4) + (age > 40 ? (age - 40) * 0.2 : 0);
    } else if (gender === 'female') {
      idealWeight = 45.5 + 0.9 * (height - 152.4) + (age > 40 ? (age - 40) * 0.2 : 0);
    }
  
    document.getElementById('ideal-weight').textContent = idealWeight.toFixed(2) + ' kg';
    document.getElementById('result').style.display = 'block';
  });