document.querySelector('.hamburger').addEventListener('click', function () {
  this.classList.toggle('active'); // Toggle kelas active pada hamburger
  document.querySelector('.nav').classList.toggle('active'); // Toggle kelas active pada navigasi
});