let chart;
const chartCtx = document.getElementById("expenseChart").getContext("2d");
loadTransactions(data => {
  transactions = data;
  list.innerHTML = "";
  transactions.forEach(renderTransaction);
  updateBalance();
});
let transactions = [];

// DOM Elements
const list = document.getElementById("list");
const balanceEl = document.getElementById("balance");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const type = document.getElementById("type");

// Add transaction
function addTransaction() {
  if (text.value === "" || amount.value === "") {
    alert("Please fill all fields");
    return;
  }

  const transaction = {
    id: Date.now(),
    text: text.value,
    amount: +amount.value,
    type: type.value
  };

 saveTransaction(transaction);
  renderTransaction(transaction);
  updateBalance();

  text.value = "";
  amount.value = "";
}

// Render single transaction
function renderTransaction(transaction) {
  const li = document.createElement("li");
  li.innerHTML = `
    ${transaction.text} - ₹${transaction.amount}
    function removeTransaction(docId) {
  deleteTransaction(docId);
}
  `;
  list.appendChild(li);
}

// Remove transaction
function removeTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  list.innerHTML = "";
  transactions.forEach(renderTransaction);
  updateBalance();
}

// Calculate balance
function updateBalance() {
  let balance = 0;

  transactions.forEach(t => {
    if (t.type === "income") {
      balance += t.amount;
    } else {
      balance -= t.amount;
    }
  });

  balanceEl.innerText = balance;
}
function updateChart() {
  let income = 0;
  let expense = 0;

  transactions.forEach(t => {
    if (t.type === "income") {
      income += t.amount;
    } else {
      expense += t.amount;
    }
  });

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(chartCtx, {
    type: "pie",
    data: {
      labels: ["Income", "Expense"],
      datasets: [{
        data: [income, expense],
        backgroundColor: ["#22c55e", "#ef4444"]
      }]
    }
  });
}
auth.onAuthStateChanged(user => {
  if (user) {
    loadTransactions(data => {
      transactions = data;
      list.innerHTML = "";
      transactions.forEach(renderTransaction);
      updateBalance();
      updateChart();
    });
  }
});