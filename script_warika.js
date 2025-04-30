function calculate() {
    const people = document.getElementById('people').value;
    const total = document.getElementById('total').value;
    const result = document.getElementById('result');
  
    if (people === "" || total === "") {
      result.textContent = "人数と合計金額を入力してください。";
      return;
    }
  
    const each = Math.ceil(total / people);
    result.textContent = `一人あたり ${each} 円です。`;
  }