/*========== Menu Icon Navbar ==========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
/*========== scroll Section Active link ==========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*========== sticky navbar ==========*/
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 50);

  /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');
let logoImage = document.querySelector('.logo-image');
let items = document.querySelectorAll('.item'); // Seleksi semua elemen dengan class .item

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode')

  // Ganti gambar logo berdasarkan dark mode
  if (document.body.classList.contains('dark-mode')) {
    logoImage.src = 'images/logo-putih.png'; // Gambar logo untuk dark mode

    // Tambahkan background pada elemen dengan class .item
    items.forEach(item => {
      item.style.backgroundColor = '#fff'; // Sesuaikan warna latar belakang untuk dark mode
    });
  } else {
    logoImage.src = 'images/logo.png'; // Gambar logo untuk light mode

    // Hapus background pada elemen dengan class .item
    items.forEach(item => {
      item.style.backgroundColor = ''; // Kembalikan ke background default
    });
  }
};

/*========== scroll reveal ==========*/
ScrollReveal ({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .contactForm', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
