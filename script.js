//your JS code here. If required.
// Helper function to return a promise that resolves after a delay
function delayTransform(value, delay, transformFn, label = "Result") {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = transformFn(value);
      document.getElementById("output").innerHTML = `${label}: ${result}`;
      resolve(result);
    }, delay);
  });
}

// Main event listener and promise chain
document.getElementById("btn").onclick = () => {
  const inputValue = parseFloat(document.getElementById("ip").value);
  const outputDiv = document.getElementById("output");

  if (isNaN(inputValue)) {
    outputDiv.innerHTML = "Please enter a valid number.";
    return;
  }

  outputDiv.innerHTML = ""; // Clear previous output

  // Chain of transformations
  delayTransform(inputValue, 2000, (n) => n) // First: Display input
    .then((res1) => delayTransform(res1, 1000, (n) => n * 2)) // Second: Multiply by 2
    .then((res2) => delayTransform(res2, 1000, (n) => n - 3)) // Third: Subtract 3
    .then((res3) => delayTransform(res3, 1000, (n) => n / 2)) // Fourth: Divide by 2
    .then((res4) => delayTransform(res4, 1000, (n) => n + 10, "Final Result")); // Fifth: Add 10
};
