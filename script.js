const modalData = {
    contactoGeneral: {
        tag: "", title: "",
        content: `
            <a href="mailto:arq.colectiv@gmail.com" class="contact-big-email">arq.colectiv@gmail.com</a>
            <div class="contact-grid-modal">
                <div class="contact-person">
                    <strong>Víctor Luna</strong>
                    <span class="specialty"><span class="brk">[</span>Sistemas de Información Geográfica<span class="brk">]</span></span>
                    <span class="phone">55 1702 8519</span>
                </div>
                <div class="contact-person">
                    <strong>Karen Josseline</strong>
                    <span class="specialty"><span class="brk">[</span>Análisis Normativo Urbano<span class="brk">]</span></span>
                    <span class="phone">55 1471 4640</span>
                </div>
                <div class="contact-person">
                    <strong>Brándon Yáñez</strong>
                    <span class="specialty"><span class="brk">[</span>Prospección y Resiliencia<span class="brk">]</span></span>
                    <span class="phone">55 3972 7186</span>
                </div>
                <div class="contact-person">
                    <strong>Cristian Mendoza</strong>
                    <span class="specialty"><span class="brk">[</span>Diseño de Mobiliario Urbano<span class="brk">]</span></span>
                    <span class="phone">56 1184 7429</span>
                </div>
            </div>
        `
    },
    tlaxco: {
        tag: "Planificación Normativa", title: "Diagnóstico Territorial Regional", image: "images/tlaxco.PNG",
        content: "<ul><li><strong><span class=\"brk\">[</span>Rezago Social<span class=\"brk\">]</span></strong> Identificación geoespacializada.</li><li><strong><span class=\"brk\">[</span>Cartografía<span class=\"brk\">]</span></strong> Actualización para Planes de Desarrollo.</li><li><strong><span class=\"brk\">[</span>Certidumbre<span class=\"brk\">]</span></strong> Sustento técnico para licitaciones.</li></ul>"
    },
    mapas: {
        tag: "Geointeligencia", title: "Inversión Pública Eficiente", image: "images/mapas.PNG",
        content: "<ul><li><strong><span class=\"brk\">[</span>Ubicación<span class=\"brk\">]</span></strong> Localización óptima de equipamiento.</li><li><strong><span class=\"brk\">[</span>Reactivación<span class=\"brk\">]</span></strong> Acupuntura espacial en zonas degradadas.</li><li><strong><span class=\"brk\">[</span>Optimización<span class=\"brk\">]</span></strong> Reducción de costos operativos.</li></ul>"
    },
    render: {
        tag: "Proyección Arquitectónica", title: "El Legado en el Espacio Público", image: "images/render.PNG",
        content: "<ul><li><strong><span class=\"brk\">[</span>Planes Maestros<span class=\"brk\">]</span></strong> Rescate de parques y plazas.</li><li><strong><span class=\"brk\">[</span>Proyectos Ejecutivos<span class=\"brk\">]</span></strong> Listos para obra pública.</li><li><strong><span class=\"brk\">[</span>Diseño Paramétrico<span class=\"brk\">]</span></strong> Envolventes funcionales.</li></ul>"
    },
    diagrama: {
        tag: "Comunicación Política", title: "Rendición de Cuentas Visual", image: "images/diagrama.PNG",
        content: "<ul><li><strong><span class=\"brk\">[</span>One-Pagers<span class=\"brk\">]</span></strong> Jerarquía de datos para cabildo.</li><li><strong><span class=\"brk\">[</span>Infografías<span class=\"brk\">]</span></strong> Visualización de avance de obra.</li><li><strong><span class=\"brk\">[</span>Material Digital<span class=\"brk\">]</span></strong> Para redes sociales.</li></ul>"
    },
    instalaciones: {
        tag: "Protección Civil", title: "Mitigación y Vulnerabilidad", image: "images/instalaciones.PNG",
        content: "<ul><li><strong><span class=\"brk\">[</span>Atlas de Riesgo<span class=\"brk\">]</span></strong> Modelación climática.</li><li><strong><span class=\"brk\">[</span>Vulnerabilidad<span class=\"brk\">]</span></strong> Zonas de estrés hídrico.</li><li><strong><span class=\"brk\">[</span>Dictaminación<span class=\"brk\">]</span></strong> Modelos en edificaciones críticas.</li></ul>"
    },
    movilidad: {
        tag: "Ordenamiento Urbano", title: "Conectividad Urbana Integral", image: "images/movilidad.PNG",
        content: "<ul><li><strong><span class=\"brk\">[</span>Ordenamiento<span class=\"brk\">]</span></strong> Reordenamiento vehicular.</li><li><strong><span class=\"brk\">[</span>Movilidad Activa<span class=\"brk\">]</span></strong> Ciclovías seguras.</li><li><strong><span class=\"brk\">[</span>Estrategias<span class=\"brk\">]</span></strong> Reducción de tiempos de traslado.</li></ul>"
    },
    privacidad: { tag: "Legal", title: "Aviso de Privacidad", content: "<p>Garantizamos confidencialidad absoluta en el manejo de cartografía gubernamental.</p>" },
    terminos: { tag: "Legal", title: "Términos Legales", content: "<p>Nuestros servicios se adaptan a la Ley de Obra Pública oficial.</p>" }
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
    const modalCard = document.getElementById('modalCardBox');

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
        mTitle.innerText = data.title;
        if(mImg) mImg.src = data.image ? data.image : '';
    }

    mContent.innerHTML = data.content;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Cierra modal al hacer click en la X, en el fondo, o presionar ESC
window.onclick = (e) => {
    if (e.target == document.getElementById('modalOverlay')) closeModal();
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
