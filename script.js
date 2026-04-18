// DICCIONARIO DE CONTENIDOS PARA GOBIERNO [B2G]
const modalData = {
    tlaxco: {
        tag: "Planificación Normativa",
        title: "Diagnóstico Territorial Regional",
        image: "images/tlaxco.png",
        content: `
            <p>Nuestra metodología de diagnóstico permite a los ayuntamientos y dependencias estatales justificar la asignación de recursos federales y estatales mediante evidencia técnica irrefutable.</p>
            <ul>
                <li><strong>Marginación Social:</strong> Análisis espacializado de rezago social para dirigir inversión pública.</li>
                <li><strong>Cartografía Municipal:</strong> Actualización técnica para Planes Municipales de Desarrollo (PMD).</li>
                <li><strong>Fundamentación Legal:</strong> Sustento técnico para licitaciones y obras públicas con certidumbre jurídica.</li>
            </ul>
        `
    },
    mapas: {
        tag: "Geointeligencia",
        title: "Inversión Pública Eficiente",
        image: "images/mapas.png",
        content: `
            <p>Aseguramos que cada peso invertido en infraestructura tenga el mayor retorno social. A través del análisis de algoritmos espaciales y Diagramas de Voronoi, determinamos:</p>
            <ul>
                <li><strong>Zonificación Matemática:</strong> Ubicación óptima para nuevos hospitales, escuelas o módulos de seguridad municipal.</li>
                <li><strong>Cobertura de Servicios:</strong> Identificación de áreas de influencia y brechas de atención ciudadana.</li>
                <li><strong>Acupuntura Urbana:</strong> Intervenciones precisas en zonas de alta rentabilidad social para reactivación económica.</li>
            </ul>
        `
    },
    render: {
        tag: "Proyección Arquitectónica",
        title: "El Legado en el Espacio Público",
        image: "images/render.png",
        content: `
            <p>El espacio público es el rostro de la administración. Diseñamos con un enfoque de durabilidad, bajo mantenimiento, alta apropiación ciudadana y estética corporativa.</p>
            <ul>
                <li><strong>Planes Maestros de Rescate:</strong> Revitalización integral de parques, plazas y áreas recreativas.</li>
                <li><strong>Proyectos Ejecutivos Completos:</strong> Planos, especificaciones y presupuestos listos para licitación oficial.</li>
                <li><strong>Diseño Paramétrico:</strong> Envolventes funcionales para edificios de uso gubernamental y oficinas públicas.</li>
            </ul>
        `
    },
    diagrama: {
        tag: "Comunicación Política",
        title: "Rendición de Cuentas Visual",
        image: "images/diagrama.png",
        content: `
            <p>Facilitamos el diálogo entre el gobierno y la ciudadanía. Traducimos la complejidad de los expedientes técnicos en herramientas visuales comprensibles para la difusión institucional.</p>
            <ul>
                <li><strong>Resúmenes de una página (One-pagers):</strong> Jerarquía de datos para uso ejecutivo y cabildo.</li>
                <li><strong>Infografía de Alto Impacto:</strong> Visualización de avance de obra pública y beneficios sociales.</li>
                <li><strong>Videos Explicativos y Recorridos:</strong> Herramientas para redes sociales gubernamentales y asambleas.</li>
            </ul>
        `
    },
    instalaciones: {
        tag: "Protección Civil",
        title: "Mitigación y Vulnerabilidad",
        image: "images/instalaciones.png",
        content: `
            <p>Gobernar es prevenir. Proporcionamos a los institutos de Protección Civil las herramientas técnicas para pasar de la reacción a la prevención de desastres.</p>
            <ul>
                <li><strong>Atlas de Riesgo Municipales/Estatales:</strong> Modelación paramétrica completa o parcial.</li>
                <li><strong>Detección de Riesgo Estructural:</strong> Modelos para mitigar colapsos en edificaciones por antigüedad o tipo de suelo.</li>
                <li><strong>Modelación Hidrológica e Hídrica:</strong> Mapas territoriales de vulnerabilidad a inundaciones y sequías (estrés hídrico).</li>
            </ul>
        `
    },
    movilidad: {
        tag: "Ordenamiento Urbano",
        title: "Conectividad y Movilidad Integral",
        image: "images/movilidad.png",
        content: `
            <p>Resolvemos los cuellos de botella de su municipio. Aplicamos principios de diseño paramétrico, Calles Completas y Visión Cero para garantizar el tránsito eficiente.</p>
            <ul>
                <li><strong>Estudios de Aforo y Demanda:</strong> Modelos para el reordenamiento vehicular y de transporte público.</li>
                <li><strong>Diseño de Corredores de Movilidad Activa:</strong> Ciclovías y andadores seguros para la cohesión comunitaria.</li>
                <li><strong>Estrategias de Flujo y Señalética:</strong> Reducción técnica de tiempos de traslado municipal.</li>
            </ul>
        `
    },
    victor: {
        tag: "Coordinación",
        title: "Víctor Luna",
        image: "images/curvas.jpg",
        content: "<p>Especialista en Sistemas de Información Geográfica (SIG) y gestión territorial estratégica para la administración pública.</p><p><strong>Teléfono:</strong> 55 1702 8519</p>"
    },
    karen: {
        tag: "Consultoría Técnica",
        title: "Karen Josseline",
        image: "images/curvas.jpg",
        content: "<p>Experta en análisis normativo, políticas públicas urbanas y viabilidad legal de proyectos gubernamentales.</p><p><strong>Teléfono:</strong> 55 1471 4640</p>"
    },
    brandon: {
        tag: "Estrategia Urbana",
        title: "Brándon Yáñez",
        image: "images/curvas.jpg",
        content: "<p>Coordinador de proyectos de resiliencia territorial, prospección de escenarios y participación ciudadana.</p><p><strong>Teléfono:</strong> 55 3972 7186</p>"
    },
    cristian: {
        tag: "Diseño e Innovación",
        title: "Cristian Mendoza",
        image: "images/curvas.jpg",
        content: "<p>Diseñador Industrial encargado del desarrollo de mobiliario urbano, ergonomía del espacio público y modelado 3D de envolventes funcionales.</p><p><strong>Teléfono:</strong> 56 1184 7429</p>"
    },
    privacidad: {
        tag: "Cumplimiento Institucional",
        title: "Aviso de Privacidad",
        image: "images/curvas.jpg",
        content: "<p>En [ARQ|COL] garantizamos absoluta confidencialidad en el manejo de cartografía municipal, bases de datos gubernamentales y estadística proporcionada por nuestros clientes, en estricto apego a las leyes de transparencia y protección de datos.</p>"
    },
    terminos: {
        tag: "Condiciones de Servicio",
        title: "Condiciones de Contratación",
        image: "images/curvas.jpg",
        content: "<p>Nuestros servicios de asesoría técnica y diseño se rigen por los alcances técnicos definidos en cada adjudicación oficial o contrato individual. Los tiempos de entrega y características de los modelos se estipulan para cada licitación.</p>"
    }
};

const overlay = document.getElementById('modalOverlay');
const mTag = document.getElementById('modalTag');
const mTitle = document.getElementById('modalTitle');
const mBody = document.getElementById('modalBody');
const mImg = document.getElementById('modalHeaderImg');
const closeBtn = document.getElementById('closeModal');

function openModal(key) {
    const data = modalData[key];
    if (!data) return;

    mTag.innerText = data.tag;
    mTitle.innerText = data.title;
    mBody.innerHTML = data.content;
    mImg.src = data.image;

    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.add('active'), 1);
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
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal(); });
