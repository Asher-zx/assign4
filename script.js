const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  alert("Child container clicked!");
});

/* button 1 */
document.getElementById("button1").setAttribute("onclick", "handleButtonClick(1)");

function handleButtonClick(buttonNumber) {
  alert(`Button ${buttonNumber} clicked`);
};

/* button 2 */
const button2 = document.getElementById("button2");
button2.onclick = () => {
  alert("Button2 clicked");
};

/* button 3 */
const button3 = document.getElementById("button3");
button3.addEventListener("click", () => {
  alert("button 3 clicked");
});

/* button 4 and button 5 */
buttonChildContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "BUTTON") {
    alert(`${target.textContent} clicked`);
    event.stopPropagation();
  }
});

