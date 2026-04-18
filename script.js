const modalData = {
    tlaxco: {
        tag: "Planificación Normativa", title: "Diagnóstico Territorial Regional", image: "images/tlaxco.PNG",
        content: "<p>Nuestra metodología permite a los ayuntamientos justificar recursos mediante evidencia técnica.</p><ul><li><strong>Rezago Social:</strong> Identificación geoespacializada.</li><li><strong>Cartografía:</strong> Actualización para Planes de Desarrollo.</li><li><strong>Certidumbre:</strong> Sustento técnico para licitaciones.</li></ul>"
    },
    mapas: {
        tag: "Geointeligencia", title: "Inversión Pública Eficiente", image: "images/mapas.PNG",
        content: "<p>Aseguramos que cada peso invertido tenga el mayor retorno social mediante algoritmos espaciales.</p><ul><li><strong>Ubicación:</strong> Localización óptima de equipamiento.</li><li><strong>Reactivación:</strong> Acupuntura espacial en zonas degradadas.</li><li><strong>Optimización:</strong> Reducción de costos operativos.</li></ul>"
    },
    render: {
        tag: "Proyección Arquitectónica", title: "El Legado en el Espacio Público", image: "images/render.PNG",
        content: "<p>Diseñamos con enfoque de durabilidad, bajo mantenimiento y estética institucional.</p><ul><li><strong>Planes Maestros:</strong> Rescate de parques y plazas.</li><li><strong>Proyectos Ejecutivos:</strong> Listos para obra pública.</li><li><strong>Diseño Paramétrico:</strong> Envolventes funcionales.</li></ul>"
    },
    diagrama: {
        tag: "Comunicación Política", title: "Rendición de Cuentas Visual", image: "images/diagrama.PNG",
        content: "<p>Traducimos reportes técnicos en herramientas visuales listas para difusión institucional.</p><ul><li><strong>One-Pagers:</strong> Jerarquía de datos para cabildo.</li><li><strong>Infografías:</strong> Visualización de avance de obra.</li><li><strong>Material Digital:</strong> Para redes sociales.</li></ul>"
    },
    instalaciones: {
        tag: "Protección Civil", title: "Mitigación y Vulnerabilidad", image: "images/instalaciones.PNG",
        content: "<p>Proporcionamos herramientas para pasar de la reacción a la prevención de riesgos.</p><ul><li><strong>Atlas de Riesgo:</strong> Modelación climática.</li><li><strong>Vulnerabilidad:</strong> Zonas de estrés hídrico.</li><li><strong>Dictaminación:</strong> Modelos en edificaciones críticas.</li></ul>"
    },
    movilidad: {
        tag: "Ordenamiento Urbano", title: "Conectividad Urbana Integral", image: "images/movilidad.PNG",
        content: "<p>Resolvemos cuellos de botella aplicando principios de diseño y seguridad vial.</p><ul><li><strong>Ordenamiento:</strong> Reordenamiento vehicular.</li><li><strong>Movilidad Activa:</strong> Ciclovías seguras.</li><li><strong>Estrategias:</strong> Reducción de tiempos de traslado.</li></ul>"
    },
    // Perfiles y Legales usan curvas.jpg como textura sutil
    victor: { tag: "Director de Proyecto", title: "Víctor Luna", image: "images/curvas.jpg", content: "<p>Especialista en SIG y gestión territorial estratégica.</p><p><strong>Teléfono:</strong> 55 1702 8519</p>" },
    karen: { tag: "Consultoría Técnica", title: "Karen Josseline", image: "images/curvas.jpg", content: "<p>Experta en normatividad y viabilidad de proyectos.</p><p><strong>Teléfono:</strong> 55 1471 4640</p>" },
    brandon: { tag: "Estrategia Urbana", title: "Brándon Yáñez", image: "images/curvas.jpg", content: "<p>Coordinador de resiliencia territorial y participación ciudadana.</p><p><strong>Teléfono:</strong> 55 3972 7186</p>" },
    cristian: { tag: "Diseño e Innovación", title: "Cristian Mendoza", image: "images/curvas.jpg", content: "<p>Diseñador Industrial encargado del mobiliario urbano y modelado.</p><p><strong>Teléfono:</strong> 56 1184 7429</p>" },
    privacidad: { tag: "Cumplimiento", title: "Aviso de Privacidad", image: "images/curvas.jpg", content: "<p>Garantizamos confidencialidad absoluta en el manejo de cartografía gubernamental.</p>" },
    terminos: { tag: "Contratación", title: "Términos Legales", image: "images/curvas.jpg", content: "<p>Nuestros servicios se adaptan a la Ley de Obra Pública oficial.</p>" }
};

const overlay = document.getElementById('modalOverlay');
const mTag = document.getElementById('modalTag');
const mTitle = document.getElementById('modalTitle');
const mContent = document.getElementById('modalContent');
const mImg = document.getElementById('modalHeaderImg');
const closeBtn = document.getElementById('closeModal');

function openModal(key) {
    const data = modalData[key];
    if (!data) return;

    mTag.innerText = data.tag;
    mTitle.innerText = data.title;
    mContent.innerHTML = data.content;
    mImg.src = data.image;

    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Detiene el scroll de fondo
}

function closeModal() {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Devuelve el scroll
}

closeBtn.onclick = closeModal;
window.onclick = (e) => { if (e.target == overlay) closeModal(); }
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
