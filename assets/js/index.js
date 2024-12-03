const modal = document.getElementById('modal');
const titulo_modal = document.getElementById('titulo-modal');
const contenido_modal = document.getElementById('contenido-modal');

function showModal(view)
{

    switch(view)
    {
        case 1: 
                    
            titulo_modal.textContent = 'Características generales'
            contenido_modal.innerHTML  = `
            <p class="modal-p">Los colibríes son aves de pequeño tamaño, reconocidas por sus plumajes relucientes que brillan en tonos metálicos bajo la luz. Estas tonalidades no solo los hacen visualmente impactantes, sino que también los distinguen entre las aves más llamativas del mundo.</p>
            <p class="modal-p">Se alimentan principalmente del néctar de diversas flores, como especies de salvias (Salvia), trompetillas (Penstemon), aretillos (Fuchsia) y colorines (Erythrina) todas ellas presentan flores con la forma tubular típica. Aunque están especializados en la forma de las flores que visitan, no necesariamente se limitan a una sola especie, adaptándose a una amplia variedad de plantas que les proporcionan alimento.</p>
            <p class="modal-p">En el ecosistema, juegan un papel vital como polinizadores, transportando polen entre las flores que visitan. Aunque el porcentaje de polinización que aportan es menor en comparación con insectos como las abejas, su contribución sigue siendo fundamental, especialmente para las plantas que dependen específicamente de ellos para reproducirse.</p>`

            break;

        case 2: 
            titulo_modal.textContent=`Cultura e historia`
            contenido_modal.innerHTML=`
            <p class="modal-p">El nombre del género Eupherusa proviene del griego, y su significado puede interpretarse como "el que trae buenas noticias". Este simbolismo se relaciona con creencias tradicionales, donde los colibríes son considerados mensajeros del más allá, representando a los espíritus de los difuntos que regresan a visitar a sus seres queridos.</p>
            <p class="modal-p">En la mitología mexica, los colibríes tienen una conexión profunda con el dios Huitzilopochtli, deidad de la guerra y el sol. Según las creencias, los guerreros caídos en combate renacían como colibríes para acompañar al sol en su trayecto diario, simbolizando valentía, renacimiento y vitalidad.</p>
            `
            break;

        case 3: 
            titulo_modal.textContent='Datos curiosos'
            contenido_modal.innerHTML= `
            <span class="modal-h">Defensores natos</span>
            <p class="modal-p-2">A pesar de su pequeño tamaño, los colibríes son increíblemente territoriales. Pueden enfrentarse a otras aves, incluso más grandes, para proteger su espacio y las flores de las que se alimentan.</p>

            <span class="modal-h">Vuelo único</span>
            <p class="modal-p-2">Son las únicas aves capaces de volar hacia atrás y mantenerse suspendidas en el aire mientras se alimentan, gracias a la forma especial de sus alas.</p>

            <span class="modal-h">Ritmo cardiaco acelerados</span>
            <p class="modal-p-2">Su corazón puede latir hasta 1,260 veces por minuto cuando están en pleno vuelo, lo que refleja su altísimo metabolismo.</p>

            <span class="modal-h">Especies migratorias</span>
            <p class="modal-p-2">Algunas especies, como el colibrí garganta rubí, recorren más de 4,000 kilómetros durante sus migraciones, desafiando su pequeño tamaño.</p>
            `
            break;
    }

    modal.className = 'cards-modal';
    bloquearScroll();
}

function closeModal()
{
    modal.className = 'cards-modal-off';
    desbloquearScroll();
}

//?MEJORAS AL SCROLL:
function bloquearScroll() {
    document.body.style.overflow = 'hidden';
}

function desbloquearScroll() {
    document.body.style.overflow = '';
}


//CARROUSEL
const carruselContenedor = document.querySelector('.carrusel-contenedor');
const items = document.querySelectorAll('.carrusel-item');
const btnPrev = document.querySelector('.btn.prev');
const btnNext = document.querySelector('.btn.next');

let indiceActual = 0;

function actualizarCarrusel() {
  const anchoItem = items[0].clientWidth;
  carruselContenedor.style.transform = `translateX(-${indiceActual * anchoItem}px)`;
}

btnNext.addEventListener('click', () => {
  if (indiceActual < items.length - 1) {
    indiceActual++;
  } else {
    indiceActual = 0;
  }
  actualizarCarrusel();
});

btnPrev.addEventListener('click', () => {
  if (indiceActual > 0) {
    indiceActual--;
  } else {
    indiceActual = items.length - 1;
  }
  actualizarCarrusel();
});

window.addEventListener('resize', actualizarCarrusel);