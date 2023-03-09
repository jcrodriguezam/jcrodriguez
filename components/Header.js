export default function Header({ name }) {
  return (
    <div class="dock">
      <div class="dock-container">
          <a class="navlogo">jcrodriguezam</a>
          <button class="hamburger">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          </button>
          <div class="navlinkwrap">
            <span class="navlink selectedlink">Conóceme</span>
            <span class="navlink">Habilidades</span>
            <span class="navlink">Experiencia</span>
            <span class="navlink">Contacto</span>
          </div>
          <div class="buttonwrap">
            <button class="createbtn selectedbtn">DESCARGAR CV</button>
          </div>
    </div>
  </div>
  );
}
