// HISTORIAL PARA LA FLECHA DE REGRESO
let modalHistory = [];

const modalData = {
    contactoGeneral: {
        tag: "", title: "",
        content: `
            <a href="mailto:arq.colectiv@gmail.com" class="contact-big-email"><span class="brk">[</span>arq.colectiv@gmail.com<span class="brk">]</span></a>
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
            <p><span class="brk">[</span>Especialista en Sistemas de Información Geográfica y estrategia territorial para la administración pública.<span class="brk">]</span></p>
            <span class="person-phone">55 1702 8519</span>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="car-victor">
                    <div class="carousel-item-wrapper">
                        <img src="images/mapas.PNG">
                        <button class="floating-pill" onclick="openModal('proj_mapas')"><span class="brk">[</span>Ver Proyecto<span class="brk">]</span></button>
                    </div>
                    <div class="carousel-item-wrapper">
                        <img src="images/tlaxco.PNG">
                        <button class="floating-pill" onclick="openModal('proj_tlaxco')"><span class="brk">[</span>Ver Proyecto<span class="brk">]</span></button>
                    </div>
                </div>
            </div>
        `
    },
    karen: {
        tag: "Consultoría", title: "Karen Josseline",
        content: `
            <p><span class="brk">[</span>Experta en normatividad, viabilidad legal de proyectos y políticas públicas urbanas.<span class="brk">]</span></p>
            <span class="person-phone">55 1471 4640</span>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="car-karen">
                    <div class="carousel-item-wrapper">
                        <img src="images/diagrama.PNG">
                        <button class="floating-pill" onclick="openModal('proj_diagrama')"><span class="brk">[</span>Ver Proyecto<span class="brk">]</span></button>
                    </div>
                </div>
            </div>
        `
    },
    brandon: {
        tag: "Estrategia", title: "Brándon Yáñez",
        content: `
            <p><span class="brk">[</span>Coordinador de resiliencia territorial, prevención de riesgos y participación ciudadana.<span class="brk">]</span></p>
            <span class="person-phone">55 3972 7186</span>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="car-brandon">
                    <div class="carousel-item-wrapper">
                        <img src="images/instalaciones.PNG">
                        <button class="floating-pill" onclick="openModal('proj_instalaciones')"><span class="brk">[</span>Ver Proyecto<span class="brk">]</span></button>
                    </div>
                </div>
            </div>
        `
    },
    cristian: {
        tag: "Diseño", title: "Cristian Mendoza",
        content: `
            <p><span class="brk">[</span>Diseñador Industrial encargado del mobiliario urbano y modelado 3D de envolventes funcionales.<span class="brk">]</span></p>
            <span class="person-phone">56 1184 7429</span>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="car-cristian">
                    <div class="carousel-item-wrapper">
                        <img src="images/render.PNG">
                        <button class="floating-pill" onclick="openModal('proj_render')"><span class="brk">[</span>Ver Proyecto<span class="brk">]</span></button>
                    </div>
                </div>
            </div>
        `
    },
    // SECCIONES NORMALES / PROYECTOS
    tlaxco: { tag: "Planificación", title: "Diagnóstico Territorial", image: "images/tlaxco.PNG", content: "<ul><li><strong><span class=\"brk\">[</span>Rezago Social<span class=\"brk\">]</span></strong> Identificación geoespacializada.</li><li><strong><span class=\"brk\">[</span>Cartografía<span class=\"brk\">]</span></strong> Actualización para Planes.</li></ul>" },
    mapas: { tag: "Geointeligencia", title: "Inversión Eficiente", image: "images/mapas.PNG", content: "<ul><li><strong><span class=\"brk\">[</span>Ubicación<span class=\"brk\">]</span></strong> Localización óptima de equipamiento.</li><li><strong><span class=\"brk\">[</span>Reactivación<span class=\"brk\">]</span></strong> Acupuntura espacial en zonas degradadas.</li></ul>" },
    render: { tag: "Proyección", title: "Legado en el Espacio Público", image: "images/render.PNG", content: "<ul><li><strong><span class=\"brk\">[</span>Planes Maestros<span class=\"brk\">]</span></strong> Rescate de parques.</li><li><strong><span class=\"brk\">[</span>Proyectos Ejecutivos<span class=\"brk\">]</span></strong> Listos para obra pública.</li></ul>" },
    diagrama: { tag: "Comunicación", title: "Rendición de Cuentas", image: "images/diagrama.PNG", content: "<ul><li><strong><span class=\"brk\">[</span>One-Pagers<span class=\"brk\">]</span></strong> Jerarquía de datos.</li><li><strong><span class=\"brk\">[</span>Infografías<span class=\"brk\">]</span></strong> Visualización de avance de obra.</li></ul>" },
    instalaciones: { tag: "Protección Civil", title: "Mitigación y Riesgos", image: "images/instalaciones.PNG", content: "<ul><li><strong><span class=\"brk\">[</span>Atlas de Riesgo<span class=\"brk\">]</span></strong> Modelación climática.</li><li><strong><span class=\"brk\">[</span>Vulnerabilidad<span class=\"brk\">]</span></strong> Zonas de estrés hídrico.</li></ul>" },
    movilidad: { tag: "Ordenamiento", title: "Conectividad Urbana", image: "images/movilidad.PNG", content: "<ul><li><strong><span class=\"brk\">[</span>Ordenamiento<span class=\"brk\">]</span></strong> Reordenamiento vehicular.</li><li><strong><span class=\"brk\">[</span>Movilidad Activa<span class=\"brk\">]</span></strong> Ciclovías seguras.</li></ul>" },
    // CLONES PARA LOS BOTONES FLOTANTES
    proj_tlaxco: { tag: "Proyecto", title: "Diagnóstico Regional", image: "images/tlaxco.PNG", content: "<p><span class=\"brk\">[</span>Detalle del proyecto técnico realizado para la prospección regional.<span class=\"brk\">]</span></p>" },
    proj_mapas: { tag: "Proyecto", title: "Sistemas Geoespaciales", image: "images/mapas.PNG", content: "<p><span class=\"brk\">[</span>Detalle algorítmico del proyecto de inversión eficiente.<span class=\"brk\">]</span></p>" },
    proj_render: { tag: "Proyecto", title: "Prospección Urbana", image: "images/render.PNG", content: "<p><span class=\"brk\">[</span>Visualización arquitectónica de las obras de impacto municipal.<span class=\"brk\">]</span></p>" },
    proj_diagrama: { tag: "Proyecto", title: "Entregables Ejecutivos", image: "images/diagrama.PNG", content: "<p><span class=\"brk\">[</span>Esquemas visuales para comunicación política.<span class=\"brk\">]</span></p>" },
    proj_instalaciones: { tag: "Proyecto", title: "Modelación de Riesgos", image: "images/instalaciones.PNG", content: "<p><span class=\"brk\">[</span>Mapeo de vulnerabilidades hidrológicas.<span class=\"brk\">]</span></p>" },
    proj_movilidad: { tag: "Proyecto", title: "Estrategias de Flujo", image: "images/movilidad.PNG", content: "<p><span class=\"brk\">[</span>Planeación de conectividad urbana integral.<span class=\"brk\">]</span></p>" },
    privacidad: { tag: "Legal", title: "Aviso de Privacidad", content: "<p><span class=\"brk\">[</span>Garantizamos confidencialidad absoluta en el manejo de datos.<span class=\"brk\">]</span></p>" },
    terminos: { tag: "Legal", title: "Términos Legales", content: "<p><span class=\"brk\">[</span>Nuestros servicios se adaptan a la Ley de Obra Pública.<span class=\"brk\">]</span></p>" }
};

const overlay = document.getElementById('modalOverlay');
const mTag = document.getElementById('modalTag');
const mTitle = document.getElementById('modalTitle');
const mContent = document.getElementById('modalContent');
const mImg = document.getElementById('modalHeaderImg');
const mBanner = document.getElementById('modalBanner');
const modalCard = document.getElementById('modalCardBox');
const backBtn = document.querySelector('.back-modal');

function renderModal(key) {
    const data = modalData[key];
    if (!data) return;

    // Mostrar u ocultar la flecha de regreso dependiendo del historial
    backBtn.style.visibility = modalHistory.length > 1 ? 'visible' : 'hidden';

    if(key === 'contactoGeneral') {
        mBanner.style.display = 'none';
        modalCard.classList.add('bg-curvas');
        mTag.style.display = 'none';
        mTitle.style.display = 'none';
    } else {
        mBanner.style.display = 'block';
        modalCard.classList.remove('bg-curvas');
        mTag.style.display = 'block';
        mTitle.style.display = 'block';

        mTag.innerHTML = `<span class="brk">[</span>${data.tag}<span class="brk">]</span>`;
        mTitle.innerHTML = `<span class="brk">[</span>${data.title}<span class="brk">]</span>`;
        if(mImg) mImg.src = data.image ? data.image : '';
    }

    mContent.innerHTML = data.content;

    // Iniciar carrusel si el modal es de una persona
    if(['victor', 'karen', 'brandon', 'cristian'].includes(key)) {
        setTimeout(() => initCarousel(`car-${key}`), 100);
    }
}

function openModal(key) {
    modalHistory.push(key); // Agrega al historial
    renderModal(key);
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function goBackModal() {
    modalHistory.pop(); // Saca el actual
    if(modalHistory.length > 0) {
        renderModal(modalHistory[modalHistory.length - 1]); // Renderiza el anterior
    } else {
        closeModal();
    }
}

function closeModal() {
    modalHistory = []; // Limpia el historial
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

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
        const walk = (x - startX) * 2;
        track.scrollLeft = scrollLeft - walk;
    });
}

window.onclick = (e) => { if (e.target == overlay) closeModal(); }
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
