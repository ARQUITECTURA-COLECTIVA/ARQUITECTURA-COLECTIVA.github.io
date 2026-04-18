const modalData = {
    tlaxco: {
        tag: "Planificación Normativa",
        title: "Diagnóstico Territorial Regional",
        image: "images/tlaxco.PNG", // Extensiones corregidas
        content: `
            <p>Nuestra metodología de diagnóstico permite a los ayuntamientos y dependencias estatales justificar la asignación de recursos federales mediante evidencia técnica irrefutable.</p>
            <ul>
                <li><strong>Análisis de Rezago Social:</strong> Identificación geoespacializada de zonas críticas.</li>
                <li><strong>Cartografía Municipal:</strong> Actualización técnica para Planes de Desarrollo.</li>
                <li><strong>Certidumbre Jurídica:</strong> Sustento técnico para licitaciones de obra pública.</li>
            </ul>
        `
    },
    mapas: {
        tag: "Geointeligencia",
        title: "Inversión Pública Eficiente",
        image: "images/mapas.PNG",
        content: `
            <p>Aseguramos que cada peso invertido en infraestructura tenga el mayor retorno social. Utilizamos algoritmos espaciales para optimizar el uso del suelo y la infraestructura.</p>
            <ul>
                <li><strong>Ubicación Técnica:</strong> Localización óptima de equipamiento gubernamental.</li>
                <li><strong>Reactivación Urbana:</strong> Acupuntura espacial en zonas degradadas.</li>
                <li><strong>Optimización de Recursos:</strong> Reducción de costos operativos gubernamentales.</li>
            </ul>
        `
    },
    render: {
        tag: "Proyección Arquitectónica",
        title: "El Legado en el Espacio Público",
        image: "images/render.PNG",
        content: `
            <p>El espacio público es el rostro de la administración. Diseñamos con un enfoque de durabilidad, bajo mantenimiento, alta apropiación ciudadana y estética institucional.</p>
            <ul>
                <li><strong>Planes Maestros:</strong> Rescate integral de parques y plazas.</li>
                <li><strong>Proyectos Ejecutivos:</strong> Listos para licitación y ejecución de obra pública.</li>
                <li><strong>Diseño Paramétrico:</strong> Envolventes funcionales para edificios gubernamentales.</li>
            </ul>
        `
    },
    diagrama: {
        tag: "Comunicación Política",
        title: "Rendición de Cuentas Visual",
        image: "images/diagrama.PNG",
        content: `
            <p>Facilitamos el diálogo entre el gobierno y la ciudadanía. Traducimos reportes técnicos complejos en herramientas visuales listas para difusión institucional.</p>
            <ul>
                <li><strong>Resúmenes One-Pagers:</strong> Jerarquía de datos para uso ejecutivo y cabildo.</li>
                <li><strong>Infografías de Impacto:</strong> Visualización de avance de obra pública.</li>
                <li><strong>Material Digital:</strong> Videos y recorridos para redes sociales gubernamentales.</li>
            </ul>
        `
    },
    instalaciones: {
        tag: "Protección Civil",
        title: "Mitigación y Vulnerabilidad",
        image: "images/instalaciones.PNG",
        content: `
            <p>Gobernar es prevenir. Proporcionamos a Protección Civil herramientas técnicas para pasar de la reacción a la prevención.</p>
            <ul>
                <li><strong>Atlas de Riesgo:</strong> Modelación de crisis climáticas y estructurales.</li>
                <li><strong>Vulnerabilidad Hídrica:</strong> Mapas de zonas inundables o de estrés hídrico.</li>
                <li><strong>Dictaminación Estructural:</strong> Modelos de riesgo en edificaciones críticas.</li>
            </ul>
        `
    },
    movilidad: {
        tag: "Ordenamiento Urbano",
        title: "Conectividad Urbana Integral",
        image: "images/movilidad.PNG",
        content: `
            <p>Resolvemos los cuellos de botella municipales. Aplicamos principios de diseño paramétrico y seguridad vial para garantizar el tránsito eficiente.</p>
            <ul>
                <li><strong>Ordenamiento de Flujo:</strong> Reordenamiento técnico vehicular y de transporte.</li>
                <li><strong>Movilidad Activa:</strong> Ciclovías y andadores seguros.</li>
                <li><strong>Estrategias de Conectividad:</strong> Reducción técnica de tiempos de traslado.</li>
            </ul>
        `
    },
    victor: { tag: "Director de Proyecto", title: "Víctor Luna", image: "images/curvas.jpg", content: "<p>Especialista en SIG y gestión territorial estratégica para la administración pública.</p><p><strong>Teléfono:</strong> 55 1702 8519</p>" },
    karen: { tag: "Consultoría Técnica", title: "Karen Josseline", image: "images/curvas.jpg", content: "<p>Experta en análisis normativo, políticas públicas urbanas y viabilidad de proyectos gubernamentales.</p><p><strong>Teléfono:</strong> 55 1471 4640</p>" },
    brandon: { tag: "Estrategia Urbana", title: "Brándon Yáñez", image: "images/curvas.jpg", content: "<p>Coordinador de proyectos de resiliencia territorial, prospección de escenarios y participación ciudadana.</p><p><strong>Teléfono:</strong> 55 3972 7186</p>" },
    cristian: { tag: "Diseño e Innovación", title: "Cristian Mendoza", image: "images/curvas.jpg", content: "<p>Diseñador Industrial encargado del mobiliario urbano y ergonomía del espacio público gubernamental.</p><p><strong>Teléfono:</strong> 56 1184 7429</p>" },
    privacidad: { tag: "Cumplimiento", title: "Aviso de Privacidad", image: "images/curvas.jpg", content: "<p>En [ARQ|COL] garantizamos confidencialidad absoluta en el manejo de cartografía y bases de datos gubernamentales.</p>" },
    terminos: { tag: "Contratación", title: "Términos Legales", image: "images/curvas.jpg", content: "<p>Nuestros servicios de asesoría técnica y diseño se adaptan a la Ley de Obra Pública oficial.</p>" }
};

const overlay = document.getElementById('modalOverlay');
const mTag = document.getElementById('modalTag');
const mTitle = document.getElementById('modalTitle');
// EL ARREGLO ESTÁ AQUÍ: Ahora busca 'modalContent' correctamente.
const mContent = document.getElementById('modalContent');
const mImg = document.getElementById('modalHeaderImg');
const closeBtn = document.getElementById('closeModal');

function openModal(key) {
    const data = modalData[key];
    if (!data) return;

    mTag.innerText = data.tag;
    mTitle.innerText = data.title;
    mContent.innerHTML = data.content; // Insertamos el contenido en la variable corregida
    mImg.src = data.image;

    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 400);
}

closeBtn.onclick = closeModal;
window.onclick = (e) => { if (e.target == overlay) closeModal(); }
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && overlay.style.display === 'flex') closeModal(); });
