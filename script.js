// DICCIONARIO DE CONTENIDOS PARA GOBIERNO [B2G]
// 'image' define la foto que se fusionará con el listón superior del modal.
const modalData = {
    // 1. TLAXCO (Territorio)
    tlaxco: {
        tag: "Planificación Normativa",
        title: "Diagnóstico Territorial Regional",
        image: "tlaxco.jpg",
        content: `
            <p>Nuestra metodología de diagnóstico permite a los ayuntamientos y dependencias estatales justificar la asignación de recursos federales y estatales mediante evidencia técnica irrefutable.</p>
            <ul>
                <li><strong>Marginación Social:</strong> Análisis espacializado de rezago social para dirigir inversión pública.</li>
                <li><strong>Cartografía Municipal:</strong> Actualización técnica para Planes Municipales de Desarrollo (PMD).</li>
                <li><strong>Fundamentación Legal:</strong> Sustento técnico para licitaciones y obras públicas con certidumbre jurídica.</li>
            </ul>
        `
    },
    // 2. MAPAS (Inteligencia)
    mapas: {
        tag: "Geointeligencia",
        title: "Inversión Pública Eficiente",
        image: "mapas.jpg",
        content: `
            <p>Aseguramos que cada peso invertido en infraestructura tenga el mayor retorno social. A través del análisis de algoritmos espaciales y Diagramas de Voronoi, determinamos:</p>
            <ul>
                <li><strong>Zonificación Matemática:</strong> Ubicación óptima para nuevos hospitales, escuelas o módulos de seguridad municipal.</li>
                <li><strong>Cobertura de Servicios:</strong> Identificación de áreas de influencia y brechas de atención ciudadana.</li>
                <li><strong>Acupuntura Urbana:</strong> Intervenciones precisas en zonas de alta rentabilidad social para reactivación económica.</li>
            </ul>
        `
    },
    // 3. RENDER (Obra Pública)
    render: {
        tag: "Proyección Arquitectónica",
        title: "El Legado en el Espacio Público",
        image: "render.jpg",
        content: `
            <p>El espacio público es el rostro de la administración. Diseñamos con un enfoque de durabilidad, bajo mantenimiento, alta apropiación ciudadana y estética corporativa.</p>
            <ul>
                <li><strong>Planes Maestros de Rescate:</strong> Revitalización integral de parques, plazas y áreas recreativas.</li>
                <li><strong>Proyectos Ejecutivos Completos:</strong> Planos, especificaciones y presupuestos listos para licitación oficial.</li>
                <li><strong>Diseño Paramétrico:</strong> Envolventes funcionales para edificios de uso gubernamental y oficinas públicas.</li>
            </ul>
        `
    },
    // 4. DIAGRAMA (Transparencia)
    diagrama: {
        tag: "Comunicación Política",
        title: "Rendición de Cuentas Visual",
        image: "diagrama.jpg",
        content: `
            <p>Facilitamos el diálogo entre el gobierno y la ciudadanía. Traducimos la complejidad de los expedientes técnicos en herramientas visuales comprensibles para la difusión institucional.</p>
            <ul>
                <li><strong>Resúmenes de una página (One-pagers):</strong> Jerarquía de datos para uso ejecutivo y cabildo.</li>
                <li><strong>Infografía de Alto Impacto:</strong> Visualización de avance de obra pública y beneficios sociales.</li>
                <li><strong>Videos Explicativos y Recorridos:</strong> Herramientas para redes sociales gubernamentales y asambleas.</li>
            </ul>
        `
    },
    // 5. INSTALACIONES (Resiliencia)
    instalaciones: {
        tag: "Protección Civil",
        title: "Mitigación y Vulnerabilidad",
        image: "instalaciones.jpg",
        content: `
            <p>Gobernar es prevenir. Proporcionamos a los institutos de Protección Civil las herramientas técnicas para pasar de la reacción a la prevención de desastres.</p>
            <ul>
                <li><strong>Atlas de Riesgo Municipales/Estatales:</strong> Modelación paramétrica completa o parcial.</li>
                <li><strong>Detección de Riesgo Estructural:</strong> Modelos para mitigar colapsos en edificaciones por antigüedad o tipo de suelo.</li>
                <li><strong>Modelación Hidrológica e Hídrica:</strong> Mapas territoriales de vulnerabilidad a inundaciones y sequías (estrés hídrico).</li>
            </ul>
        `
    },
    // 6. MOVILIDAD (Conectividad)
    movilidad: {
        tag: "Ordenamiento Urbano",
        title: "Conectividad y Movilidad Integral",
        image: "movilidad.jpg",
        content: `
            <p>Resolvemos los cuellos de botella de su municipio. Aplicamos principios de diseño paramétrico, Calles Completas y Visión Cero para garantizar el tránsito eficiente.</p>
            <ul>
                <li><strong>Estudios de Aforo y Demanda:</strong> Modelos para el reordenamiento vehicular y de transporte público.</li>
                <li><strong>Diseño de Corredores de Movilidad Activa:</strong> Ciclovías y andadores seguros para la cohesión comunitaria.</li>
                <li><strong>Estrategias de Flujo y Señalética:</strong> Reducción técnica de tiempos de traslado municipal.</li>
            </ul>
        `
    },

    // PERFILES EQUIPO (USAMOS 'curvas.jpg' para el listón técnico)
    victor: {
        tag: "Coordinación",
        title: "Víctor Luna",
        image: "curvas.jpg", // Listón técnico
        content: "<p>Especialista en Sistemas de Información Geográfica (SIG) y gestión territorial estratégica para la administración pública.</p><p><strong>Teléfono:</strong> 55 1702 8519</p>"
    },
    karen: {
        tag: "Consultoría Técnica",
        title: "Karen Josseline",
        image: "curvas.jpg", // Listón técnico
        content: "<p>Experta en análisis normativo, políticas públicas urbanas y viabilidad legal de proyectos gubernamentales.</p><p><strong>Teléfono:</strong> 55 1471 4640</p>"
    },
    brandon: {
        tag: "Estrategia Urbana",
        title: "Brándon Yáñez",
        image: "curvas.jpg", // Listón técnico
        content: "<p>Coordinador de proyectos de resiliencia territorial, prospección de escenarios y participación ciudadana.</p><p><strong>Teléfono:</strong> 55 3972 7186</p>"
    },
    // Cristian Mendoza: Cargo e imagen actualizados
    cristian: {
        tag: "Diseño e Innovación",
        title: "Cristian Mendoza",
        image: "curvas.jpg", // Listón técnico
        content: "<p>Diseñador Industrial encargado del desarrollo de mobiliario urbano, ergonomía del espacio público y modelado 3D de envolventes funcionales.</p><p><strong>Teléfono:</strong> 56 1184 7429</p>"
    },

    // LEGAL (USAMOS 'curvas.jpg' para el listón corporativo)
    privacidad: {
        tag: "Cumplimiento Institucional",
        title: "Aviso de Privacidad",
        image: "curvas.jpg", // Listón técnico
        content: "<p>En [ARQ|COL] garantizamos absoluta confidencialidad en el manejo de cartografía municipal, bases de datos gubernamentales y estadística proporcionada por nuestros clientes, en estricto apego a las leyes de transparencia y protección de datos.</p>"
    },
    terminos: {
        tag: "Condiciones de Servicio",
        title: "Condiciones de Contratación",
        image: "curvas.jpg", // Listón técnico
        content: "<p>Nuestros servicios de asesoría técnica y diseño se rigen por los alcances técnicos definidos en cada adjudicación oficial o contrato individual. Los tiempos de entrega y características de los modelos se estipulan para cada licitación.</p>"
    }
};

const overlay = document.getElementById('modalOverlay');
const mTag = document.getElementById('modalTag');
const mTitle = document.getElementById('modalTitle');
const mBody = document.getElementById('modalBody');
const mImg = document.getElementById('modalHeaderImg');
const closeBtn = document.getElementById('closeModal');

// Función que abre el modal y llena los datos
function openModal(key) {
    const data = modalData[key];

    // Verificación de seguridad por si no existe la key
    if (!data) return;

    mTag.innerText = data.tag;
    mTitle.innerText = data.title;
    mBody.innerHTML = data.content; // Renderiza listas y negritas

    // El listón siempre usa la imagen asociada para enriquecer la narrativa
    mImg.src = data.image;

    // Muestra el modal con animación (ver CSS .modal-overlay.active .modal-card)
    overlay.style.display = 'flex';
    // Espera un milisegundo para activar la transición de opacidad (ver CSS)
    setTimeout(() => overlay.classList.add('active'), 1);

    // Detiene el scroll del fondo (body) mientras el modal está abierto
    document.body.style.overflow = 'hidden';
}

// Función que cierra el modal con suavidad
function closeModal() {
    overlay.classList.remove('active');

    // Espera a que termine la animación de opacidad antes de ocultar (400ms en CSS)
    setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Devuelve el scroll
    }, 400);
}

// Asignación de eventos
closeBtn.onclick = closeModal;

// Cierra al hacer clic en el fondo oscuro
window.onclick = (e) => {
    if (e.target == overlay) {
        closeModal();
    }
}

// Cierra al presionar la tecla 'Escape'
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeModal();
    }
});
