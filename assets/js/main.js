//Dark mode
const changeThemeElement = document.querySelector(
  '.change-theme input[type="checkbox"]'
);
  
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    changeThemeElement.checked = true;
  }
}
  
function changeTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}
  
changeThemeElement.addEventListener("change", changeTheme, false);
  
//Cópiar chave PIX
document.querySelector("button").addEventListener("click",
  function (event) {
    var textRange = document.createRange()
    textRange.selectNode(document.getElementById("pix-key"))
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(textRange)
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
    document.querySelector("button").innerText = 'Copiado!'
})