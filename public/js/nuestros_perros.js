/* cards nuestros perros */

const cardContainer = document.querySelector('#card-container');
const cardData = [
    {
        front: { imgSrc: 'https://i.ibb.co/PmDYxsR/image.jpg', name: 'Arya' },
        back: { sexo: 'Hembra', edad: '2 Meses', tamano: 'Chico', raza: 'Mestizo' }
    },
    {
        front: { imgSrc: 'https://i.ibb.co/z4g97bq/perro2.jpg', name: 'Bobby' },
        back: { sexo: 'Macho', edad: '1 Año', tamano: 'Chico', raza: 'Mestizo' }
    },
    {
        front: { imgSrc: 'https://i.ibb.co/gry0t02/perro3.jpg', name: 'Bella' },
        back: { sexo: 'Hembra', edad: '3 Años', tamano: 'Grande', raza: 'Galgo' }
    },
    {
        front: { imgSrc: 'https://i.ibb.co/jZ9scY5/perro4.jpg', name: 'Max' },
        back: { sexo: 'Macho', edad: '5 Meses', tamano: 'Mediano', raza: 'Mestizo' }
    },
    {
        front: { imgSrc: 'https://i.ibb.co/DpvnPYY/perro5.jpg', name: 'Rocky' },
        back: { sexo: 'Macho', edad: '1 Año', tamano: 'Mediano', raza: 'Mestizo' }
    },
    {
        front: { imgSrc: 'https://i.ibb.co/DtNvd9z/perro6.jpg', name: 'Lola' },
        back: { sexo: 'Hembra', edad: '10 Meses', tamano: 'Chico', raza: 'Mestizo' }
    },
    {
        front: { imgSrc: 'https://i.ibb.co/vzSxvq7/perro7.jpg', name: 'Dana' },
        back: { sexo: 'Hembra', edad: '2 Años', tamano: 'Mediano', raza: 'Mestizo' }
    },
    {
        front: { imgSrc: 'https://i.ibb.co/y8T7B5n/perro8.jpg', name: 'Thor' },
        back: { sexo: 'Macho', edad: '8 Meses', tamano: 'Mediano', raza: 'Mestizo' }
    },
    {
        front: { imgSrc: 'https://i.ibb.co/k8m26v8/perro9.jpg', name: 'Mia' },
        back: { sexo: 'Hembra', edad: '3 Años', tamano: 'Grande', raza: 'Mestizo' }
    },
    {
        front: { imgSrc: 'https://i.ibb.co/tJwyY4c/perro10.jpg"', name: 'Daisy' },
        back: { sexo: 'Hembra', edad: '2 Meses', tamano: 'Mediano', raza: 'Mestizo' }
    },
    {
        front: { imgSrc: 'https://i.ibb.co/5K5NRx0/perro11.jpg"', name: 'Simón' },
        back: { sexo: 'Macho', edad: '3 Meses', tamano: 'Chico', raza: 'Mestizo' }
    },
    {
        front: { imgSrc: 'https://i.ibb.co/s62tDNv/perro12.jpg', name: 'Coco' },
        back: { sexo: 'Macho', edad: '3 años', tamano: 'Mediano', raza: 'Mestizo' }
    },
    {
        front: { imgSrc: 'https://i.ibb.co/qDRb8L0/perro13.jpg', name: 'Zeus' },
        back: { sexo: 'Macho', edad: '4 Años', tamano: 'Mediano', raza: 'Mestizo' }
    },
    {
        front: { imgSrc: 'https://i.ibb.co/vVv0BpY/perro14.jpg', name: 'Tina' },
        back: { sexo: 'hembra', edad: '1 Mes', tamano: 'Chico', raza: 'Mestizo' }
    },
    {
        front: { imgSrc: 'https://i.ibb.co/ng1rPZ3/perro15.jpg', name: 'Gardela' },
        back: { sexo: 'Hembra', edad: '5 Años', tamano: 'Grande', raza: 'Galgo' }
    },
];

cardData.forEach((data) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-inner" data-aos="zoom-in">
            <div class="card-front">
                <img class="img_perros" src="${data.front.imgSrc}" alt="${data.front.name}">
                <h3>${data.front.name}</h3>
            </div>
            <div class="card-back">
                <p>Sexo: ${data.back.sexo}</p>
                <p>Edad: ${data.back.edad}</p>
                <p>Tamaño: ${data.back.tamano}</p>
                <p>Raza: ${data.back.raza}</p>
            </div>
        </div>
    `;
    cardContainer.appendChild(card);

/* voltear cards al hacer click*/
    card.addEventListener('click', () => {
        card.classList.toggle('flip');

        setTimeout(() => {
            card.classList.remove('flip'); 
        }, 5000);
    });
});
