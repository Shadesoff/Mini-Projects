// === THEME TOGGLE ===
const themeLink = document.getElementById("theme");
const themeBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeBtn.addEventListener("click", () => {
  if (themeLink.getAttribute("href").includes("light.css")) {
    themeLink.setAttribute("href", "styles/dark.css");
    themeIcon.src = "./assets/light-mode.png"; // sun icon
  } else {
    themeLink.setAttribute("href", "styles/light.css");
    themeIcon.src = "./assets/dark-mode.png"; // moon icon
  }
});

// === CALCULATOR LOGIC ===
const expressionEl = document.getElementById("expression");
const resultEl = document.getElementById("result");

let expression = "";

// Number buttons
document.querySelectorAll(".number-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    expression += btn.textContent;
    expressionEl.textContent = expression;
  });
});

// Operator buttons (+, -, *, /, =)
document.querySelectorAll(".operator-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "=") {
      try {
        // Evaluate safely
        const evalResult = eval(expression);
        resultEl.textContent = evalResult;
      } catch {
        resultEl.textContent = "Error";
      }
    } else {
      expression += ` ${value} `;
      expressionEl.textContent = expression;
    }
  });
});

// Special buttons (AC, C, %, ( ))
document.querySelectorAll(".special-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "AC") {
      expression = "";
      expressionEl.textContent = "";
      resultEl.textContent = "0";
    } else if (value === "C") {
      // Delete last character
      expression = expression.trim().slice(0, -1);
      expressionEl.textContent = expression;
    } else if (value === "%") {
      // Treat as divide by 100
      expression += " / 100 ";
      expressionEl.textContent = expression;
    } else if (value === "( )") {
      // Insert parentheses smartly
      if (
        expression.split("(").length > expression.split(")").length
      ) {
        expression += ")";
      } else {
        expression += "(";
      }
      expressionEl.textContent = expression;
    }
  });
});



