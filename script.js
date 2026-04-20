// LÓGICA DEL MENÚ DE NAVEGACIÓN
function toggleMainMenu(event) {
    event.stopPropagation();
    const menu = document.getElementById('mainMenu');
    menu.classList.toggle('active');
}

function toggleSubMenu(submenuId, event) {
    event.stopPropagation();
    const submenu = document.getElementById(submenuId);
    submenu.classList.toggle('active');
}

function openModalAndCloseMenu(key) {
    document.getElementById('mainMenu').classList.remove('active');
    openModal(key);
}

// Cierra el menú al hacer clic fuera
document.addEventListener('click', (e) => {
    const menu = document.getElementById('mainMenu');
    const menuContainer = document.querySelector('.menu-container');
    if (menu.classList.contains('active') && !menuContainer.contains(e.target)) {
        menu.classList.remove('active');
    }
});


// HISTORIAL PARA LA FLECHA DE REGRESO
let modalHistory = [];

const modalData = {
    victor: {
        title: "Víctor Luna",
        content: `
            <span class="person-phone"><span class="brk">[</span>55 1702 8519<span class="brk">]</span></span>
            <p><span class="brk">[</span>Especialista en Sistemas de Información Geográfica y estrategia territorial para la administración pública. Con amplia experiencia en la coordinación de proyectos urbanos a gran escala, integrando análisis de datos socioespaciales con normatividad vigente para garantizar la viabilidad técnica y financiera de cada intervención. Su enfoque permite transformar bases de datos complejas en herramientas de decisión ejecutiva claras y contundentes.<span class="brk">]</span></p>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="car-victor">
                    <div class="carousel-item-wrapper" onclick="openModal('proj_zmvm')" style="cursor: pointer;">
                        <img src="images/mapas.PNG">
                    </div>
                    <div class="carousel-item-wrapper" onclick="openModal('proj_iztapalapa')" style="cursor: pointer;">
                        <img src="images/tlaxco.PNG">
                    </div>
                </div>
            </div>
        `
    },
    karen: {
        title: "Karen Josseline",
        content: `
            <span class="person-phone"><span class="brk">[</span>55 1471 4640<span class="brk">]</span></span>
            <p><span class="brk">[</span>Experta en normatividad, viabilidad legal de proyectos y políticas públicas urbanas. Posee una profunda comprensión de los marcos regulatorios a nivel municipal, estatal y federal. Su labor asegura que cada desarrollo territorial cumpla con los más altos estándares legales, facilitando la obtención de permisos y minimizando los riesgos jurídicos en la ejecución de obra pública y privada.<span class="brk">]</span></p>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="car-karen">
                    <div class="carousel-item-wrapper" onclick="openModal('proj_viabilidad')" style="cursor: pointer;">
                        <img src="images/diagrama.PNG">
                    </div>
                </div>
            </div>
        `
    },
    brandon: {
        title: "Brándon Yáñez",
        content: `
            <span class="person-phone"><span class="brk">[</span>55 3972 7186<span class="brk">]</span></span>
            <p><span class="brk">[</span>Coordinador de resiliencia territorial, prevención de riesgos y participación ciudadana. Especializado en la elaboración de Atlas de Riesgo y el diseño de planes de contingencia para escenarios hidrológicos, geológicos y climáticos. Además, lidera metodologías de integración social para garantizar que la infraestructura propuesta cuente con la apropiación y respaldo de las comunidades locales.<span class="brk">]</span></p>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="car-brandon">
                    <div class="carousel-item-wrapper" onclick="openModal('proj_casa')" style="cursor: pointer;">
                        <img src="images/instalaciones.PNG">
                    </div>
                </div>
            </div>
        `
    },
    cristian: {
        title: "Cristian Mendoza",
        content: `
            <span class="person-phone"><span class="brk">[</span>56 1184 7429<span class="brk">]</span></span>
            <p><span class="brk">[</span>Diseñador Industrial encargado del mobiliario urbano y modelado 3D de envolventes funcionales. Transforma los diagnósticos espaciales y urbanos en elementos tangibles que interactúan directamente con el usuario. Su trabajo garantiza que la infraestructura no solo sea eficiente a nivel técnico, sino también estéticamente perdurable, ergonómica y adaptable a las exigencias climáticas de cada territorio.<span class="brk">]</span></p>
            <div class="carousel-wrapper">
                <div class="carousel-track" id="car-cristian">
                    <div class="carousel-item-wrapper" onclick="openModal('proj_mixto')" style="cursor: pointer;">
                        <img src="images/render.PNG">
                    </div>
                </div>
            </div>
        `
    },

    // SECCIONES DE SERVICIOS
    mapas: {
        tag: "Geointeligencia", title: "Servicios Cartográficos", image: "images/mapas.PNG",
        content: `
            <p>Utilizamos Sistemas de Información Geográfica (SIG) para traducir datos abstractos en mapas estratégicos que garantizan el éxito de los proyectos.</p>

            <h4>Análisis Geoespacial</h4>
            <ul>
                <li><strong>Modelos de Idoneidad:</strong> Algoritmos para encontrar la ubicación óptima de nuevos equipamientos (hospitales, escuelas, parques).</li>
                <li><strong>Acupuntura Urbana Espacial:</strong> Identificación de lotes baldíos o subutilizados con alto potencial de reactivación.</li>
                <li><strong>Análisis de Redes:</strong> Evaluación de tiempos de traslado y cobertura de servicios básicos.</li>
            </ul>

            <h4>Viabilidad Privada</h4>
            <ul>
                <li><strong>Estudios de Mercado Inmobiliario:</strong> Cruce de datos demográficos con valor de suelo para desarrolladores.</li>
                <li><strong>Factibilidad de Sitio:</strong> Evaluación normativa, topográfica y de servicios para predios específicos.</li>
                <li><strong>Mapeo de Competencia:</strong> Análisis de isócronas para comercios y servicios privados.</li>
            </ul>

            <div class="carousel-wrapper"><div class="carousel-track" id="car-mapas">
                <div class="carousel-item-wrapper" onclick="openModal('proj_zmvm')" style="cursor: pointer;"><img src="images/mapas.PNG"></div>
            </div></div>
        `
    },
    render: {
        tag: "Proyección", title: "Servicios de Diseño", image: "images/render.PNG",
        content: `
            <p>Llevamos la estrategia del papel a la realidad construida. Diseñamos espacios que trascienden su escala y generan arraigo comunitario.</p>

            <h4>Diseño Urbano y Paisaje</h4>
            <ul>
                <li><strong>Planes Maestros:</strong> Diseño integral de grandes superficies, parques urbanos y reservas ecológicas.</li>
                <li><strong>Regeneración de Espacios Públicos:</strong> Rescate de plazas, mercados y centros de barrio.</li>
                <li><strong>Mobiliario Urbano:</strong> Diseño industrial de elementos funcionales y adaptados al clima local.</li>
            </ul>

            <h4>Arquitectura y Obra Civil</h4>
            <ul>
                <li><strong>Proyectos Ejecutivos:</strong> Planos técnicos, memorias de cálculo y catálogos de conceptos listos para licitación.</li>
                <li><strong>Modelado 3D y Visualización:</strong> Renders y recorridos virtuales de alta fidelidad.</li>
                <li><strong>Diseño de Vivienda Social y Privada:</strong> Modelos habitacionales eficientes, sustentables y arraigados al contexto.</li>
            </ul>

            <div class="carousel-wrapper"><div class="carousel-track" id="car-render">
                <div class="carousel-item-wrapper" onclick="openModal('proj_mixto')" style="cursor: pointer;"><img src="images/render.PNG"></div>
            </div></div>
        `
    },
    diagrama: {
        tag: "Comunicación", title: "Servicios de Comunicación", image: "images/diagrama.PNG",
        content: `
            <p>Transformamos expedientes técnicos complejos en herramientas de comunicación visual claras para autoridades, inversores y ciudadanos.</p>

            <h4>Material Ejecutivo</h4>
            <ul>
                <li><strong>Reportes para Cabildo:</strong> Dossiers condensados con la jerarquía de datos necesaria para la aprobación política.</li>
                <li><strong>Infografías de Avance:</strong> Visualización clara del progreso de obra o del impacto de políticas públicas.</li>
                <li><strong>One-Pagers Estratégicos:</strong> Resúmenes visuales para atracción de inversión privada o fondos gubernamentales.</li>
            </ul>

            <h4>Participación Ciudadana</h4>
            <ul>
                <li><strong>Talleres de Codiseño:</strong> Metodologías participativas para integrar a la comunidad en el diseño de su entorno.</li>
                <li><strong>Material de Difusión Social:</strong> Carteles, folletos y esquemas didácticos para socializar proyectos complejos.</li>
                <li><strong>Estrategias de Validación Social:</strong> Herramientas para reducir la fricción vecinal ante nuevas obras de infraestructura.</li>
            </ul>

            <div class="carousel-wrapper"><div class="carousel-track" id="car-diagrama">
                <div class="carousel-item-wrapper" onclick="openModal('proj_viabilidad')" style="cursor: pointer;"><img src="images/diagrama.PNG"></div>
            </div></div>
        `
    },
    instalaciones: {
        tag: "Protección Civil", title: "Servicios de Consultoría", image: "images/instalaciones.PNG",
        content: `
            <p>Modelamos y prevenimos riesgos territoriales para garantizar la seguridad de la población y la resiliencia de la infraestructura a largo plazo.</p>

            <h4>Gestión Integral de Riesgos</h4>
            <ul>
                <li><strong>Atlas Municipales de Riesgo:</strong> Elaboración y actualización de instrumentos de prevención reconocidos por CENAPRED.</li>
                <li><strong>Modelación Hidrológica:</strong> Mapas de inundación, escurrimientos y zonas de encharcamiento histórico.</li>
                <li><strong>Vulnerabilidad Geológica:</strong> Identificación de fallas, fracturas y zonas de deslizamiento de laderas.</li>
            </ul>

            <h4>Ingeniería y Mitigación</h4>
            <ul>
                <li><strong>Obras de Mitigación:</strong> Diseño de infraestructura verde, presas de gavión y sistemas de retención pluvial.</li>
                <li><strong>Dictámenes de Seguridad Estructural:</strong> Evaluaciones técnicas para edificaciones existentes o por construir.</li>
                <li><strong>Planes de Contingencia:</strong> Protocolos de acción a nivel municipal o barrial ante desastres naturales.</li>
            </ul>

            <div class="carousel-wrapper"><div class="carousel-track" id="car-instalaciones">
                <div class="carousel-item-wrapper" onclick="openModal('proj_casa')" style="cursor: pointer;"><img src="images/instalaciones.PNG"></div>
            </div></div>
        `
    },
    movilidad: {
        tag: "Ordenamiento", title: "Soluciones de Conciliación", image: "images/movilidad.PNG",
        content: `
            <p>Diseñamos sistemas de movimiento que priorizan a las personas, mejoran la accesibilidad y reducen los tiempos y costos de traslado.</p>

            <h4>Movilidad Activa y Sustentable</h4>
            <ul>
                <li><strong>Redes de Infraestructura Ciclista:</strong> Diseño geométrico de ciclovías, ciclocarriles y biciestacionamientos.</li>
                <li><strong>Calles Completas:</strong> Rediseño de vialidades priorizando al peatón, la accesibilidad universal y el transporte público.</li>
                <li><strong>Auditorías de Seguridad Vial:</strong> Identificación de puntos negros e intersecciones peligrosas.</li>
            </ul>

            <h4>Ingeniería de Tránsito</h4>
            <ul>
                <li><strong>Estudios de Impacto Vial:</strong> Evaluaciones necesarias para la autorización de nuevos desarrollos inmobiliarios o comerciales.</li>
                <li><strong>Reordenamiento de Transporte Público:</strong> Optimización de rutas, paraderos y bases de transferencia.</li>
                <li><strong>Sincronización Semafórica:</strong> Análisis de aforos vehiculares para mejorar el flujo en arterias principales.</li>
            </ul>

            <div class="carousel-wrapper"><div class="carousel-track" id="car-movilidad">
                <div class="carousel-item-wrapper" onclick="openModal('proj_cetram')" style="cursor: pointer;"><img src="images/movilidad.PNG"></div>
            </div></div>
        `
    },

    // CLONES DE PROYECTOS ACTUALIZADOS
    proj_iztapalapa: { tag: "Proyecto", title: "Juego de Pelota Iztapalapa", image: "images/tlaxco.PNG", content: "<p><span class=\"brk\">[</span>Detalle del proyecto técnico realizado para la prospección regional.<span class=\"brk\">]</span></p>" },
    proj_zmvm: { tag: "Proyecto", title: "Estudio Zona Metropolitana", image: "images/mapas.PNG", content: "<p><span class=\"brk\">[</span>Detalle algorítmico del proyecto de inversión eficiente.<span class=\"brk\">]</span></p>" },
    proj_mixto: { tag: "Proyecto", title: "Conjunto de Uso Mixto", image: "images/render.PNG", content: "<p><span class=\"brk\">[</span>Visualización arquitectónica de las obras de impacto municipal.<span class=\"brk\">]</span></p>" },
    proj_viabilidad: { tag: "Proyecto", title: "Reporte de Viabilidad", image: "images/diagrama.PNG", content: "<p><span class=\"brk\">[</span>Esquemas visuales para comunicación estratégica.<span class=\"brk\">]</span></p>" },
    proj_casa: { tag: "Proyecto", title: "Casa-Habitación", image: "images/instalaciones.PNG", content: "<p><span class=\"brk\">[</span>Mapeo de vulnerabilidades estructurales y constructivas.<span class=\"brk\">]</span></p>" },
    proj_cetram: { tag: "Proyecto", title: "Rediseño CETRAM", image: "images/movilidad.PNG", content: "<p><span class=\"brk\">[</span>Planeación de conectividad urbana y conciliación territorial.<span class=\"brk\">]</span></p>" },

    // LEGAL
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

    backBtn.style.display = modalHistory.length > 1 ? 'flex' : 'none';

    mBanner.style.display = 'block';
    mTitle.style.display = 'block';

    if (data.tag) {
        mTag.style.display = 'block';
        mTag.innerHTML = `<span class="brk">[</span>${data.tag}<span class="brk">]</span>`;
    } else {
        mTag.style.display = 'none';
    }

    mTitle.innerHTML = data.title;
    if(mImg) mImg.src = data.image ? data.image : '';

    mContent.innerHTML = data.content;

    if(['victor', 'karen', 'brandon', 'cristian', 'mapas', 'render', 'diagrama', 'instalaciones', 'movilidad'].includes(key)) {
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
