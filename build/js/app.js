document.addEventListener("DOMContentLoaded", () => {
  navegacionFija();
  crearGaleria();
  resaltarEnlace();
  scrollNav();
});

const navegacionFija = () => {
  const header = document.querySelector(".header");
  const sobreFestival = document.querySelector(".sobre-festival");

  window.addEventListener("scroll", () => {
    sobreFestival.getBoundingClientRect().bottom < 1
      ? header.classList.add("fixed")
      : header.classList.remove("fixed");
  });
};

const crearGaleria = () => {
  const galeria = document.querySelector(".galeria-imagenes");

  const CANTIDAD_IMAGENES = 16;

  for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
    const imagen = document.createElement("IMG");
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = "Imagen Galería";

    // Even handler
    imagen.onclick = () => {
      mostrarImagen(i);
    };

    galeria.appendChild(imagen);
  }
};

const mostrarImagen = (i) => {
  const imagen = document.createElement("IMG");
  imagen.src = `src/img/gallery/full/${i}.jpg`;
  imagen.alt = "Imagen Galería";

  // CREAR MODAL

  const modal = document.createElement("DIV");
  modal.classList.add("modal");
  modal.onclick = cerrarModal;

  // CREAR BOTÓN

  const cerrarModalBtn = document.createElement("BUTTON");
  cerrarModalBtn.textContent = "X";
  cerrarModalBtn.classList.add("cerrar-boton");
  cerrarModalBtn.onclick = cerrarModal;

  modal.appendChild(imagen);
  modal.appendChild(cerrarModalBtn);

  // AGREGAR AL HTML

  const body = document.querySelector("body");
  body.classList.add("overflow-hidden");

  body.appendChild(modal);
};

const cerrarModal = () => {
  const modal = document.querySelector(".modal");
  modal.classList.add("fadeOut");
  setTimeout(() => {
    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
    modal?.remove();
  }, 500);
};

const resaltarEnlace = () => {
  document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-principal a");

    let actual = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        actual = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + actual) {
        link.classList.add("active");
      }
    });
  });
};

const scrollNav = () =>{
  const navLinks = document.querySelectorAll('.nav-principal a');

  navLinks.forEach(link => {
    link.addEventListener('click', e =>{
      e.preventDefault();
      const sectionScroll = e.target.getAttribute('href');
      const section = document.querySelector(sectionScroll);
      console.log(section);
      
      section.scrollIntoView({behavior: 'smooth'});
      
    })
  })
};
