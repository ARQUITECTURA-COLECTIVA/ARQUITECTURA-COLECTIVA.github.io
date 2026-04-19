const modalData = {
    // MODAL GENERAL DE CONTACTO (NUEVO)
    contactoGeneral: {
        tag: "Directorio", title: "Contacto Institucional",
        content: `
            <p>Comunícate directamente con nuestra coordinación para agendar una mesa de trabajo o solicitar cotizaciones formales.</p>
            <a href="mailto:arq.colectiv@gmail.com" class="contact-big-email">arq.colectiv@gmail.com</a>

            <div class="contact-grid-modal">
                <div class="contact-person">
                    <strong>Víctor Luna</strong>
                    <span>[ Coordinación de Proyecto ]</span>
                    <p>Especialista SIG y estrategia territorial.<br>Tel: 55 1702 8519</p>
                </div>
                <div class="contact-person">
                    <strong>Karen Josseline</strong>
                    <span>[ Consultoría Técnica ]</span>
                    <p>Normatividad y viabilidad de políticas.<br>Tel: 55 1471 4640</p>
                </div>
                <div class="contact-person">
                    <strong>Brándon Yáñez</strong>
                    <span>[ Estrategia Urbana ]</span>
                    <p>Resiliencia y participación ciudadana.<br>Tel: 55 3972 7186</p>
                </div>
                <div class="contact-person">
                    <strong>Cristian Mendoza</strong>
                    <span>[ Diseño e Innovación ]</span>
                    <p>Mobiliario urbano y modelado 3D.<br>Tel: 56 1184 7429</p>
                </div>
            </div>
        `
    },
    tlaxco: {
        tag: "Planificación Normativa", title: "Diagnóstico Territorial Regional",
        content: "<p>Nuestra metodología permite a los ayuntamientos justificar recursos mediante evidencia técnica.</p><ul><li><strong>[ Rezago Social ]</strong> Identificación geoespacializada.</li><li><strong>[ Cartografía ]</strong> Actualización para Planes de Desarrollo.</li><li><strong>[ Certidumbre ]</strong> Sustento técnico para licitaciones.</li></ul>"
    },
    mapas: {
        tag: "Geointeligencia", title: "Inversión Pública Eficiente",
        content: "<p>Aseguramos que cada peso invertido tenga el mayor retorno social mediante algoritmos espaciales.</p><ul><li><strong>[ Ubicación ]</strong> Localización óptima de equipamiento.</li><li><strong>[ Reactivación ]</strong> Acupuntura espacial en zonas degradadas.</li><li><strong>[ Optimización ]</strong> Reducción de costos operativos.</li></ul>"
    },
    render: {
        tag: "Proyección Arquitectónica", title: "El Legado en el Espacio Público",
        content: "<p>Diseñamos con enfoque de durabilidad, bajo mantenimiento y estética institucional.</p><ul><li><strong>[ Planes Maestros ]</strong> Rescate de parques y plazas.</li><li><strong>[ Proyectos Ejecutivos ]</strong> Listos para obra pública.</li><li><strong>[ Diseño Paramétrico ]</strong> Envolventes funcionales.</li></ul>"
    },
    diagrama: {
        tag: "Comunicación Política", title: "Rendición de Cuentas Visual",
        content: "<p>Traducimos reportes técnicos en herramientas visuales listas para difusión institucional.</p><ul><li><strong>[ One-Pagers ]</strong> Jerarquía de datos para cabildo.</li><li><strong>[ Infografías ]</strong> Visualización de avance de obra.</li><li><strong>[ Material Digital ]</strong> Para redes sociales.</li></ul>"
    },
    instalaciones: {
        tag: "Protección Civil", title: "Mitigación y Vulnerabilidad",
        content: "<p>Proporcionamos herramientas para pasar de la reacción a la prevención de riesgos.</p><ul><li><strong>[ Atlas de Riesgo ]</strong> Modelación climática.</li><li><strong>[ Vulnerabilidad ]</strong> Zonas de estrés hídrico.</li><li><strong>[ Dictaminación ]</strong> Modelos en edificaciones críticas.</li></ul>"
    },
    movilidad: {
        tag: "Ordenamiento Urbano", title: "Conectividad Urbana Integral",
        content: "<p>Resolvemos cuellos de botella aplicando principios de diseño y seguridad vial.</p><ul><li><strong>[ Ordenamiento ]</strong> Reordenamiento vehicular.</li><li><strong>[ Movilidad Activa ]</strong> Ciclovías seguras.</li><li><strong>[ Estrategias ]</strong> Reducción de tiempos de traslado.</li></ul>"
    },
    privacidad: { tag: "Cumplimiento", title: "Aviso de Privacidad", content: "<p>Garantizamos confidencialidad absoluta en el manejo de cartografía gubernamental.</p>" },
    terminos: { tag: "Contratación", title: "Términos Legales", content: "<p>Nuestros servicios se adaptan a la Ley de Obra Pública oficial.</p>" }
};

const overlay = document.getElementById('modalOverlay');
const mTag = document.getElementById('modalTag');
const mTitle = document.getElementById('modalTitle');
const mContent = document.getElementById('modalContent');
const closeBtn = document.getElementById('closeModal');

function openModal(key) {
    const data = modalData[key];
    if (!data) return;

    mTag.innerHTML = `<span class="accent">[</span> ${data.tag} <span class="accent">]</span>`;
    mTitle.innerText = data.title;
    mContent.innerHTML = data.content;

    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeBtn.onclick = closeModal;
window.onclick = (e) => { if (e.target == overlay) closeModal(); }
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
