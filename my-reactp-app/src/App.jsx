
import { useState } from 'react';
import './App.css';

function App() {
  // 1. Variables
  let name = 'Prajakta';
  let month = 'October 2026';

  // 2. Styling object
  let headingStyle = {
    color: '#163b2d',
    fontSize: '28px'
  };

  // 3. useState
  const [income, setIncome] = useState(50000);
  const [expenses, setExpenses] = useState(18500);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const [transactions, setTransactions] = useState([
    { id: 1, name: 'Monthly Salary', category: 'Income', amount: 50000 },
    { id: 2, name: 'Groceries', category: 'Food', amount: -2500 },
    { id: 3, name: 'Electricity Bill', category: 'Bills', amount: -1200 },
    { id: 4, name: 'Shopping', category: 'Shopping', amount: -3500 },
    { id: 5, name: 'Travel', category: 'Transport', amount: -800 },
    { id: 6, name: 'Internet Bill', category: 'Bills', amount: -700 }
  ]);

  const [savingsGoal, setSavingsGoal] = useState(20000);

  // 4. Calculations
  let balance = income - expenses;
  let savings = Math.max(0, balance);
  let savingsProgress = Math.min(100, (savings / savingsGoal) * 100);

  let budget = 25000;
  let budgetProgress = Math.min(100, (expenses / budget) * 100);

  // 5. Add expense
  function addExpense() {
    let amount = Number(expenseAmount);

    if (expenseName.trim() === '' || amount <= 0 || !Number.isFinite(amount)) {
      alert('Please enter a valid expense name and amount!');
      return;
    }

    setExpenses(previous => previous + amount);

    setTransactions(previous => [
      {
        id: Date.now(),
        name: expenseName,
        category: category,
        amount: -amount
      },
      ...previous
    ]);

    setExpenseName('');
    setExpenseAmount('');
  }

  // 6. Chart data
  let chartData = [
    { day: 'Mon', amount: 2200 },
    { day: 'Tue', amount: 3500 },
    { day: 'Wed', amount: 1800 },
    { day: 'Thu', amount: 4200 },
    { day: 'Fri', amount: 2800 },
    { day: 'Sat', amount: 5000 },
    { day: 'Sun', amount: 3000 }
  ];

  let categories = [
    { name: 'Food', amount: 5500, color: '#78a88b' },
    { name: 'Shopping', amount: 4500, color: '#e8ad79' },
    { name: 'Bills', amount: 3500, color: '#8b9de0' },
    { name: 'Transport', amount: 2500, color: '#c9a6df' }
  ];

  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">◈ MoneyMind</h2>

        <p className="menu-title">MENU</p>

        <a className="menu active" href="#dashboard">▦ Dashboard</a>
        <a className="menu" href="#transactions">↔ Transactions</a>
        <a className="menu" href="#budgets">◉ Budgets</a>
        <a className="menu" href="#savings">♧ Savings Goals</a>

        <div className="sidebar-bottom">
          <div className="avatar">P</div>
          <div>
            <strong>{name}</strong>
            <p>Personal Account</p>
          </div>
        </div>
      </aside>

      {/* Main dashboard */}
      <main className="main-content" id="dashboard">

        {/* Header */}
        <header className="topbar">
          <div>
            <p className="date-label">{month}</p>
            <h1 style={headingStyle}>Dashboard</h1>
          </div>

          <button
            className="profile-button"
            onClick={() => alert('Welcome to MoneyMind, ' + name + '!')}
          >
            <span>👋</span> Hello, {name}
          </button>
        </header>

        {/* Welcome section */}
        <section className="welcome">
          <div>
            <p className="welcome-label">YOUR FINANCIAL OVERVIEW</p>
            <h2>Make your money work smarter.</h2>
            <p>Track your spending, build better habits, and reach your goals.</p>
          </div>

          <div className="welcome-icon">₹</div>
        </section>

        {/* Summary cards */}
        <section className="summary-grid">

          <div className="summary-card">
            <div className="card-top">
              <span>Total Income</span>
              <span className="card-icon green">↗</span>
            </div>
            <h2>₹{income.toLocaleString('en-IN')}</h2>
            <p className="positive">Money received this month</p>
          </div>

          <div className="summary-card">
            <div className="card-top">
              <span>Total Expenses</span>
              <span className="card-icon red">↘</span>
            </div>
            <h2>₹{expenses.toLocaleString('en-IN')}</h2>
            <p className="negative">Money spent this month</p>
          </div>

          <div className="summary-card">
            <div className="card-top">
              <span>Available Balance</span>
              <span className="card-icon blue">₹</span>
            </div>
            <h2 className={balance < 0 ? 'negative-text' : ''}>
              ₹{balance.toLocaleString('en-IN')}
            </h2>
            <p className="positive">Income minus expenses</p>
          </div>

          <div className="summary-card">
            <div className="card-top">
              <span>Monthly Savings</span>
              <span className="card-icon purple">♧</span>
            </div>
            <h2>₹{savings.toLocaleString('en-IN')}</h2>
            <p className="positive">Your remaining balance</p>
          </div>

        </section>

        {/* Charts */}
        <section className="content-grid">

          <div className="panel chart-panel">
            <div className="panel-heading">
              <div>
                <h3>Weekly Spending</h3>
                <p>Your spending overview for this week</p>
              </div>
              <span className="small-badge">This week</span>
            </div>

            <div className="chart">
              {chartData.map((item) => (
                <div className="bar-group" key={item.day}>
                  <span className="bar-value">
                    ₹{(item.amount / 1000).toFixed(1)}k
                  </span>

                  <div className="bar-track">
                    <div
                      className="bar"
                      style={{
                        height: (item.amount / 5000) * 100 + '%'
                      }}
                    ></div>
                  </div>

                  <span className="bar-label">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel" id="budgets">
            <div className="panel-heading">
              <div>
                <h3>Monthly Budget</h3>
                <p>Keep your spending under control</p>
              </div>
              <span className="budget-icon">◎</span>
            </div>

            <h2 className="budget-number">
              ₹{expenses.toLocaleString('en-IN')}
            </h2>
            <p className="muted">
              of ₹{budget.toLocaleString('en-IN')} monthly budget
            </p>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width: budgetProgress + '%',
                  backgroundColor: expenses > budget ? '#e25b5b' : '#4d9970'
                }}
              ></div>
            </div>

            <div className="progress-labels">
              <span>{budgetProgress.toFixed(0)}% used</span>
              <span>
                {expenses > budget
                  ? 'Budget exceeded!'
                  : '₹' + (budget - expenses).toLocaleString('en-IN') + ' left'}
              </span>
            </div>

            <div className="budget-note">
              {expenses > budget
                ? '⚠ You have crossed your monthly budget.'
                : '✓ You are within your monthly budget.'}
            </div>
          </div>

        </section>

        {/* Expense calculator */}
        <section className="content-grid">

          <div className="panel calculator" id="add-expense">
            <div className="panel-heading">
              <div>
                <h3>Expense Calculator</h3>
                <p>Add an expense and update your dashboard instantly.</p>
              </div>
              <span className="calculator-icon">＋</span>
            </div>

            <div className="form-group">
              <label htmlFor="expenseName">Expense Name</label>
              <input
                id="expenseName"
                type="text"
                placeholder="e.g. Lunch, Shopping"
                value={expenseName}
                onChange={(event) => setExpenseName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="expenseAmount">Amount (₹)</label>
              <input
                id="expenseAmount"
                type="number"
                min="0.01"
                step="0.01"
                placeholder="Enter amount"
                value={expenseAmount}
                onChange={(event) => setExpenseAmount(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="Food">Food</option>
                <option value="Shopping">Shopping</option>
                <option value="Bills">Bills</option>
                <option value="Transport">Transport</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button className="add-button" onClick={addExpense}>
              + Add Expense
            </button>

            <p className="calculator-hint">
              Available balance: ₹{balance.toLocaleString('en-IN')}
            </p>
          </div>

          {/* Spending categories */}
          <div className="panel">
            <div className="panel-heading">
              <div>
                <h3>Spending Categories</h3>
                <p>Sample breakdown of your spending</p>
              </div>
            </div>

            {categories.map((item) => (
              <div className="category-row" key={item.name}>
                <div className="category-info">
                  <span
                    className="category-dot"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span>{item.name}</span>
                  <strong>₹{item.amount.toLocaleString('en-IN')}</strong>
                </div>

                <div className="progress-track category-track">
                  <div
                    className="progress-fill"
                    style={{
                      width: (item.amount / 6000) * 100 + '%',
                      backgroundColor: item.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* Savings goal */}
        <section className="panel savings-panel" id="savings">
          <div className="panel-heading">
            <div>
              <h3>My Savings Goal</h3>
              <p>Build your savings one step at a time.</p>
            </div>
            <span className="savings-icon">♧</span>
          </div>

          <div className="savings-details">
            <div>
              <p className="muted">Available savings</p>
              <h2>₹{savings.toLocaleString('en-IN')}</h2>
            </div>

            <div className="goal-input">
              <label htmlFor="goalAmount">Savings target (₹)</label>
              <input
                id="goalAmount"
                type="number"
                min="1"
                value={savingsGoal}
                onChange={(event) => {
                  let value = Number(event.target.value);
                  setSavingsGoal(value > 0 ? value : 1);
                }}
              />
            </div>
          </div>

          <div className="progress-track savings-track">
            <div
              className="progress-fill"
              style={{ width: savingsProgress + '%' }}
            ></div>
          </div>

          <div className="progress-labels">
            <span>{savingsProgress.toFixed(0)}% of goal</span>
            <span>
              {savings >= savingsGoal
                ? '🎉 Goal reached!'
                : '₹' + (savingsGoal - savings).toLocaleString('en-IN') + ' to go'}
            </span>
          </div>
        </section>

        {/* Transactions */}
        <section className="panel transactions-panel" id="transactions">
          <div className="panel-heading">
            <div>
              <h3>Recent Transactions</h3>
              <p>Your latest income and expenses</p>
            </div>
            <span className="transaction-count">
              {transactions.length} records
            </span>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Transaction</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th className="amount-cell">Amount</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="transaction-name">
                        <span className="transaction-icon">
                          {item.amount > 0 ? '↙' : '↗'}
                        </span>
                        {item.name}
                      </div>
                    </td>

                    <td>
                      <span className="category-tag">{item.category}</span>
                    </td>

                    <td>
                      {item.amount > 0 ? 'Income' : 'Expense'}
                    </td>

                    <td
                      className={
                        'amount-cell ' +
                        (item.amount > 0 ? 'positive' : 'negative')
                      }
                    >
                      {item.amount > 0 ? '+' : '-'}₹
                      {Math.abs(item.amount).toLocaleString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="footer">
          <p>© 2026 MoneyMind · Manage money. Build your future.</p>
        </footer>

      </main>
    </div>
  );
}

export default App;
