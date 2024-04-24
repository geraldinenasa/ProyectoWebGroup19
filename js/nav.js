function llamarNav() {
  fetch('../nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-externo').innerHTML = data;
    });
}
window.onload = llamarNav;