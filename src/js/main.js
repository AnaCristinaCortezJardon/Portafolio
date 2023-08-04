
// Función para que oculte las seccione y solo muestre una
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}
