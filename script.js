// HISTORIAL PARA LA FLECHA DE REGRESO
let modalHistory = [];

const modalData = {
    victor: {
        tag: "Coordinación", title: "Víctor Luna",
        content: `
            <span class="person-phone"><span class="brk">[</span>55 1702 8519<span class="brk">]</span></span>
            <p><span class="brk">[</span>Especialista en Sistemas de Información Geográfica y estrategia territorial para la administración pública. Con amplia experiencia en la coordinación de proyectos urbanos a gran escala, integrando análisis de datos socioespaciales con normatividad vigente para garantizar la viabilidad técnica y financiera de cada intervención. Su enfoque permite transformar bases de datos complejas en herramientas de decisión ejecutiva claras y contundentes.<span class="brk">]</span></p>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="car-victor">
                    <div class="carousel-item-wrapper">
                        <img src="images/mapas.PNG">
                        <button class="floating-pill" onclick="openModal('proj_mapas')"><span class="brk">[</span>PROY: SALUD<span class="brk">]</span></button>
                    </div>
                    <div class="carousel-item-wrapper">
                        <img src="images/tlaxco.PNG">
                        <button class="floating-pill" onclick="openModal('proj_tlaxco')"><span class="brk">[</span>PROY: ATLAS<span class="brk">]</span></button>
                    </div>
                </div>
            </div>
        `
    },
    karen: {
        tag: "Consultoría", title: "Karen Josseline",
        content: `
            <span class="person-phone"><span class="brk">[</span>55 1471 4640<span class="brk">]</span></span>
            <p><span class="brk">[</span>Experta en normatividad, viabilidad legal de proyectos y políticas públicas urbanas. Posee una profunda comprensión de los marcos regulatorios a nivel municipal, estatal y federal. Su labor asegura que cada desarrollo territorial cumpla con los más altos estándares legales, facilitando la obtención de permisos y minimizando los riesgos jurídicos en la ejecución de obra pública y privada.<span class="brk">]</span></p>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="car-karen">
                    <div class="carousel-item-wrapper">
                        <img src="images/diagrama.PNG">
                        <button class="floating-pill" onclick="openModal('proj_diagrama')"><span class="brk">[</span>PROY: CABILDO<span class="brk">]</span></button>
                    </div>
                </div>
            </div>
        `
    },
    brandon: {
        tag: "Estrategia", title: "Brándon Yáñez",
        content: `
            <span class="person-phone"><span class="brk">[</span>55 3972 7186<span class="brk">]</span></span>
            <p><span class="brk">[</span>Coordinador de resiliencia territorial, prevención de riesgos y participación ciudadana. Especializado en la elaboración de Atlas de Riesgo y el diseño de planes de contingencia para escenarios hidrológicos, geológicos y climáticos. Además, lidera metodologías de integración social para garantizar que la infraestructura propuesta cuente con la apropiación y respaldo de las comunidades locales.<span class="brk">]</span></p>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="car-brandon">
                    <div class="carousel-item-wrapper">
                        <img src="images/instalaciones.PNG">
                        <button class="floating-pill" onclick="openModal('proj_instalaciones')"><span class="brk">[</span>PROY: MITIGACIÓN<span class="brk">]</span></button>
                    </div>
                </div>
            </div>
        `
    },
    cristian: {
        tag: "Diseño", title: "Cristian Mendoza",
        content: `
            <span class="person-phone"><span class="brk">[</span>56 1184 7429<span class="brk">]</span></span>
            <p><span class="brk">[</span>Diseñador Industrial encargado del mobiliario urbano y modelado 3D de envolventes funcionales. Transforma los diagnósticos espaciales y urbanos en elementos tangibles que interactúan directamente con el usuario. Su trabajo garantiza que la infraestructura no solo sea eficiente a nivel técnico, sino también estéticamente perdurable, ergonómica y adaptable a las exigencias climáticas de cada territorio.<span class="brk">]</span></p>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="car-cristian">
                    <div class="carousel-item-wrapper">
                        <img src="images/render.PNG">
                        <button class="floating-pill" onclick="openModal('proj_render')"><span class="brk">[</span>PROY: PARQUE<span class="brk">]</span></button>
                    </div>
                </div>
            </div>
        `
    },

    // SECCIONES NORMALES
    tlaxco: {
        tag: "Planificación", title: "Diagnóstico y Contexto Estratégico", image: "images/tlaxco.PNG",
        content: `
            <ul><li><strong><span class="brk">[</span>Rezago Social<span class="brk">]</span></strong> Identificación geoespacializada.</li><li><strong><span class="brk">[</span>Cartografía<span class="brk">]</span></strong> Actualización para Planes.</li></ul>
            <div class="carousel-wrapper"><div class="carousel-track" id="car-tlaxco">
                <div class="carousel-item-wrapper"><img src="images/tlaxco.PNG"><button class="floating-pill" onclick="openModal('proj_tlaxco')"><span class="brk">[</span>Ver<span class="brk">]</span></button></div>
            </div></div>
        `
    },
    mapas: {
        tag: "Geointeligencia", title: "Inversión y Desarrollo Eficiente", image: "images/mapas.PNG",
        content: `
            <ul><li><strong><span class="brk">[</span>Ubicación<span class="brk">]</span></strong> Localización óptima de equipamiento.</li><li><strong><span class="brk">[</span>Reactivación<span class="brk">]</span></strong> Acupuntura espacial.</li></ul>
            <div class="carousel-wrapper"><div class="carousel-track" id="car-mapas">
                <div class="carousel-item-wrapper"><img src="images/mapas.PNG"><button class="floating-pill" onclick="openModal('proj_mapas')"><span class="brk">[</span>Ver<span class="brk">]</span></button></div>
            </div></div>
        `
    },
    render: {
        tag: "Proyección", title: "Arquitectura de Impacto", image: "images/render.PNG",
        content: `
            <ul><li><strong><span class="brk">[</span>Planes Maestros<span class="brk">]</span></strong> Rescate de parques.</li><li><strong><span class="brk">[</span>Proyectos Ejecutivos<span class="brk">]</span></strong> Listos para obra pública.</li></ul>
            <div class="carousel-wrapper"><div class="carousel-track" id="car-render">
                <div class="carousel-item-wrapper"><img src="images/render.PNG"><button class="floating-pill" onclick="openModal('proj_render')"><span class="brk">[</span>Ver<span class="brk">]</span></button></div>
            </div></div>
        `
    },
    diagrama: {
        tag: "Comunicación", title: "Comunicación y Claridad", image: "images/diagrama.PNG",
        content: `
            <ul><li><strong><span class="brk">[</span>One-Pagers<span class="brk">]</span></strong> Jerarquía de datos.</li><li><strong><span class="brk">[</span>Infografías<span class="brk">]</span></strong> Visualización de avance.</li></ul>
            <div class="carousel-wrapper"><div class="carousel-track" id="car-diagrama">
                <div class="carousel-item-wrapper"><img src="images/diagrama.PNG"><button class="floating-pill" onclick="openModal('proj_diagrama')"><span class="brk">[</span>Ver<span class="brk">]</span></button></div>
            </div></div>
        `
    },
    instalaciones: {
        tag: "Protección Civil", title: "Prevención y Seguridad Estructural", image: "images/instalaciones.PNG",
        content: `
            <ul><li><strong><span class="brk">[</span>Atlas de Riesgo<span class="brk">]</span></strong> Modelación climática.</li><li><strong><span class="brk">[</span>Vulnerabilidad<span class="brk">]</span></strong> Zonas de estrés.</li></ul>
            <div class="carousel-wrapper"><div class="carousel-track" id="car-instalaciones">
                <div class="carousel-item-wrapper"><img src="images/instalaciones.PNG"><button class="floating-pill" onclick="openModal('proj_instalaciones')"><span class="brk">[</span>Ver<span class="brk">]</span></button></div>
            </div></div>
        `
    },
    movilidad: {
        tag: "Ordenamiento", title: "Flujo e Integración Espacial", image: "images/movilidad.PNG",
        content: `
            <ul><li><strong><span class="brk">[</span>Ordenamiento<span class="brk">]</span></strong> Reordenamiento vehicular.</li><li><strong><span class="brk">[</span>Movilidad Activa<span class="brk">]</span></strong> Ciclovías seguras.</li></ul>
            <div class="carousel-wrapper"><div class="carousel-track" id="car-movilidad">
                <div class="carousel-item-wrapper"><img src="images/movilidad.PNG"><button class="floating-pill" onclick="openModal('proj_movilidad')"><span class="brk">[</span>Ver<span class="brk">]</span></button></div>
            </div></div>
        `
    },

    // CLONES DE PROYECTOS
    proj_tlaxco: { tag: "Proyecto", title: "Atlas Regional Estratégico", image: "images/tlaxco.PNG", content: "<p><span class=\"brk\">[</span>Detalle del proyecto técnico realizado para la prospección regional.<span class=\"brk\">]</span></p>" },
    proj_mapas: { tag: "Proyecto", title: "Zonificación de Salud", image: "images/mapas.PNG", content: "<p><span class=\"brk\">[</span>Detalle algorítmico del proyecto de inversión eficiente.<span class=\"brk\">]</span></p>" },
    proj_render: { tag: "Proyecto", title: "Parque Central", image: "images/render.PNG", content: "<p><span class=\"brk\">[</span>Visualización arquitectónica de las obras de impacto municipal.<span class=\"brk\">]</span></p>" },
    proj_diagrama: { tag: "Proyecto", title: "Reporte Ejecutivo de Cabildo", image: "images/diagrama.PNG", content: "<p><span class=\"brk\">[</span>Esquemas visuales para comunicación política.<span class=\"brk\">]</span></p>" },
    proj_instalaciones: { tag: "Proyecto", title: "Mitigación Hídrica", image: "images/instalaciones.PNG", content: "<p><span class=\"brk\">[</span>Mapeo de vulnerabilidades hidrológicas.<span class=\"brk\">]</span></p>" },
    proj_movilidad: { tag: "Proyecto", title: "Red Ciclista Urbana", image: "images/movilidad.PNG", content: "<p><span class=\"brk\">[</span>Planeación de conectividad urbana integral.<span class=\"brk\">]</span></p>" },
    privacidad: { tag: "Legal", title: "Aviso de Privacidad", content: "<p><span class=\"brk\">[</span>Garantizamos confidencialidad absoluta en el manejo de datos.<span class=\"brk\">]</span></p>" },
    terminos: { tag: "Legal", title: "Términos Legales", content: "<p><span class=\"brk\">[</span>Nuestros servicios se adaptan a la Ley de Obra Pública.<span class=\"brk\">]</span></p>" }
};

const overlay = document.getElementById('modalOverlay');
const mTag = document.getElementById('modalTag');
const mTitle = document.getElementById('modalTitle');
const mContent = document.getElementById('modalContent');
const mImg = document.getElementById('modalHeaderImg');
const mBanner = document.getElementById('modalBanner');
const backBtn = document.querySelector('.back-modal');

function renderModal(key) {
    const data = modalData[key];
    if (!data) return;

    backBtn.style.visibility = modalHistory.length > 1 ? 'visible' : 'hidden';

    mBanner.style.display = 'block';
    mTag.style.display = 'block';
    mTitle.style.display = 'block';

    mTag.innerHTML = `<span class="brk">[</span>${data.tag}<span class="brk">]</span>`;
    mTitle.innerHTML = `<span class="brk">[</span>${data.title}<span class="brk">]</span>`;
    if(mImg) mImg.src = data.image ? data.image : '';

    mContent.innerHTML = data.content;

    if(['victor', 'karen', 'brandon', 'cristian', 'tlaxco', 'mapas', 'render', 'diagrama', 'instalaciones', 'movilidad'].includes(key)) {
        setTimeout(() => initCarousel(`car-${key}`), 100);
    }
}

function openModal(key) {
    modalHistory.push(key);
    renderModal(key);
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function goBackModal() {
    modalHistory.pop();
    if(modalHistory.length > 0) {
        renderModal(modalHistory[modalHistory.length - 1]);
    } else {
        closeModal();
    }
}

function closeModal() {
    modalHistory = [];
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
