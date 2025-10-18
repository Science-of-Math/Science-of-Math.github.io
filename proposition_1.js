
window.addEventListener("load", () => {
  const x = document.querySelectorAll("p.intro");
  let text = "";
  for (let i = 0; i < x.length; i++) {
    text += x.elements[i].value + "<br>";
  }

  console.log('loaded');
});

