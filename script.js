function changeColor() {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }