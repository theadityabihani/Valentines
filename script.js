function handleYesClick() {
  document.body.innerHTML = `
    <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;background:#ff9a9e;color:white;text-align:center;">
      <h1>Yayyy! 💖</h1>
      <p>You just made me the happiest person 🥰</p>
    </div>
  `;
}

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const randomX = Math.random() * 200;
  const randomY = Math.random() * 50;
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
}
