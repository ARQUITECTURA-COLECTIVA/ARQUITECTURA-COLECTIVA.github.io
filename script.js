// LÓGICA DE MODALES Y CARRUSELES
const modalData = {
    contactoGeneral: {
        tag: "", title: "Directorio",
        content: `
            <p>Selecciona un perfil para ver más información y portafolio de trabajo.</p>
            <div class="contact-grid-modal">
                <button class="person-btn" onclick="openModal('victor')">
                    <strong>Víctor Luna</strong>
                    <span class="specialty"><span class="brk">[</span>Sistemas de Información Geográfica<span class="brk">]</span></span>
                </button>
                <button class="person-btn" onclick="openModal('karen')">
                    <strong>Karen Josseline</strong>
                    <span class="specialty"><span class="brk">[</span>Análisis Normativo Urbano<span class="brk">]</span></span>
                </button>
                <button class="person-btn" onclick="openModal('brandon')">
                    <strong>Brándon Yáñez</strong>
                    <span class="specialty"><span class="brk">[</span>Prospección y Resiliencia<span class="brk">]</span></span>
                </button>
                <button class="person-btn" onclick="openModal('cristian')">
                    <strong>Cristian Mendoza</strong>
                    <span class="specialty"><span class="brk">[</span>Diseño de Mobiliario Urbano<span class="brk">]</span></span>
                </button>
            </div>
        `
    },
    victor: {
        tag: "Coordinación", title: "Víctor Luna",
        content: `
            <p>Especialista en Sistemas de Información Geográfica y estrategia territorial para la administración pública.</p>
            <span class="person-phone">55 1702 8519</span>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="car-victor">
                    <img src="images/mapas.PNG" class="carousel-item">
                    <img src="images/tlaxco.PNG" class="carousel-item">
                </div>
            </div>
        `
    },
    karen: {
        tag: "Consultoría", title: "Karen Josseline",
        content: `
            <p>Experta en normatividad, viabilidad legal de proyectos y políticas públicas urbanas.</p>
            <span class="person-phone">55 1471 4640</span>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="car-karen">
                    <img src="images/diagrama.PNG" class="carousel-item">
                    <img src="images/tlaxco.PNG" class="carousel-item">
                </div>
            </div>
        `
    },
    brandon: {
        tag: "Estrategia", title: "Brándon Yáñez",
        content: `
            <p>Coordinador de resiliencia territorial, prevención de riesgos y participación ciudadana.</p>
            <span class="person-phone">55 3972 7186</span>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="car-brandon">
                    <img src="images/instalaciones.PNG" class="carousel-item">
                    <img src="images/movilidad.PNG" class="carousel-item">
                </div>
            </div>
        `
    },
    cristian: {
        tag: "Diseño", title: "Cristian Mendoza",
        content: `
            <p>Diseñador Industrial encargado del mobiliario urbano y modelado 3D de envolventes funcionales.</p>
            <span class="person-phone">56 1184 7429</span>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="car-cristian">
                    <img src="images/render.PNG" class="carousel-item">
                    <img src="images/diagrama.PNG" class="carousel-item">
                </div>
            </div>
        `
    },
    // SECCIONES NORMALES
    tlaxco: {
        tag: "Planificación", title: "Diagnóstico Territorial", image: "images/tlaxco.PNG",
        content: "<ul><li><strong><span class=\"brk\">[</span>Rezago Social<span class=\"brk\">]</span></strong> Identificación geoespacializada.</li><li><strong><span class=\"brk\">[</span>Cartografía<span class=\"brk\">]</span></strong> Actualización para Planes.</li></ul>"
    },
    mapas: {
        tag: "Geointeligencia", title: "Inversión Eficiente", image: "images/mapas.PNG",
        content: "<ul><li><strong><span class=\"brk\">[</span>Ubicación<span class=\"brk\">]</span></strong> Localización óptima de equipamiento.</li><li><strong><span class=\"brk\">[</span>Reactivación<span class=\"brk\">]</span></strong> Acupuntura espacial en zonas degradadas.</li></ul>"
    },
    render: {
        tag: "Proyección", title: "Legado en el Espacio Público", image: "images/render.PNG",
        content: "<ul><li><strong><span class=\"brk\">[</span>Planes Maestros<span class=\"brk\">]</span></strong> Rescate de parques.</li><li><strong><span class=\"brk\">[</span>Proyectos Ejecutivos<span class=\"brk\">]</span></strong> Listos para obra pública.</li></ul>"
    },
    diagrama: {
        tag: "Comunicación", title: "Rendición de Cuentas", image: "images/diagrama.PNG",
        content: "<ul><li><strong><span class=\"brk\">[</span>One-Pagers<span class=\"brk\">]</span></strong> Jerarquía de datos.</li><li><strong><span class=\"brk\">[</span>Infografías<span class=\"brk\">]</span></strong> Visualización de avance de obra.</li></ul>"
    },
    instalaciones: {
        tag: "Protección Civil", title: "Mitigación y Riesgos", image: "images/instalaciones.PNG",
        content: "<ul><li><strong><span class=\"brk\">[</span>Atlas de Riesgo<span class=\"brk\">]</span></strong> Modelación climática.</li><li><strong><span class=\"brk\">[</span>Vulnerabilidad<span class=\"brk\">]</span></strong> Zonas de estrés hídrico.</li></ul>"
    },
    movilidad: {
        tag: "Ordenamiento", title: "Conectividad Urbana", image: "images/movilidad.PNG",
        content: "<ul><li><strong><span class=\"brk\">[</span>Ordenamiento<span class=\"brk\">]</span></strong> Reordenamiento vehicular.</li><li><strong><span class=\"brk\">[</span>Movilidad Activa<span class=\"brk\">]</span></strong> Ciclovías seguras.</li></ul>"
    },
    privacidad: { tag: "Legal", title: "Aviso de Privacidad", content: "<p>Garantizamos confidencialidad absoluta en el manejo de datos.</p>" },
    terminos: { tag: "Legal", title: "Términos Legales", content: "<p>Nuestros servicios se adaptan a la Ley de Obra Pública.</p>" }
};

function openModal(key) {
    const data = modalData[key];
    if (!data) return;

    const overlay = document.getElementById('modalOverlay');
    const mTag = document.getElementById('modalTag');
    const mTitle = document.getElementById('modalTitle');
    const mContent = document.getElementById('modalContent');
    const mImg = document.getElementById('modalHeaderImg');
    const mBanner = document.getElementById('modalBanner');

    // Manejo del banner visual
    if(['contactoGeneral', 'victor', 'karen', 'brandon', 'cristian', 'privacidad', 'terminos'].includes(key)) {
        mBanner.style.display = 'none';
        mTag.style.display = key === 'contactoGeneral' ? 'none' : 'block';
    } else {
        mBanner.style.display = 'block';
        mTag.style.display = 'block';
        if(mImg) mImg.src = data.image ? data.image : '';
    }

    if(key !== 'contactoGeneral') {
        mTag.innerHTML = `<span class="brk">[</span>${data.tag}<span class="brk">]</span>`;
    }
    mTitle.innerText = data.title;
    mContent.innerHTML = data.content;

    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Iniciar carrusel si el modal es de una persona
    if(['victor', 'karen', 'brandon', 'cristian'].includes(key)) {
        setTimeout(() => initCarousel(`car-${key}`), 100);
    }
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Lógica de arrastre (drag) para el carrusel con la "manita"
function initCarousel(trackId) {
    const track = document.getElementById(trackId);
    if(!track) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mouseleave', () => { isDown = false; });
    track.addEventListener('mouseup', () => { isDown = false; });
    track.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2; // Velocidad de arrastre
        track.scrollLeft = scrollLeft - walk;
    });
}

window.onclick = (e) => { if (e.target == document.getElementById('modalOverlay')) closeModal(); }
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
