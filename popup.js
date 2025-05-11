window.addEventListener('DOMContentLoaded', () => {
    const popup = document.createElement('div');
    popup.className = 'quetzal-popup';
    popup.innerHTML = `
      <div class="quetzal-close" onclick="this.parentElement.remove()">×</div>
      ¿Necesitas una página web profesional para tu negocio?<br>
      ¡Contáctanos y cotiza tu sitio hoy mismo!<br>
      <strong>Quetzalcode</strong>
    `;
    document.body.appendChild(popup);
  });
  