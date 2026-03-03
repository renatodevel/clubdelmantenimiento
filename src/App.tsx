
import Global from "./assets/global/clbdlmantenimiento.png"
// import Flag from "./assets/global/flag.png"
import VehicleSearchPage from "./features/vehicle/pages/VehicleSearPage"
function App() {
  const WA_PREFIX = "https://wa.me/";
  const WA_NUMBER = "51999999999"; // tu número
  return (
    <>
      <header className="max-w-5xl w-full mx-auto mb-8 sticky top-0 z-50">
        <div className="bg-vulcan-950 flex items-center justify-between pt-3 pb-3">
          <div className="flex items-center gap-4">
            <a href="" className="flex items-center gap-1 text-sm">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_61_146" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_61_146)">
                  <path d="M7.53329 14.1333C7.37774 14.0778 7.23885 13.9944 7.11663 13.8833C6.3944 13.2167 5.75551 12.5667 5.19996 11.9333C4.6444 11.3 4.18051 10.6861 3.80829 10.0917C3.43607 9.49722 3.15274 8.925 2.95829 8.375C2.76385 7.825 2.66663 7.3 2.66663 6.8C2.66663 5.13333 3.20274 3.80555 4.27496 2.81667C5.34718 1.82778 6.58885 1.33333 7.99996 1.33333C9.41107 1.33333 10.6527 1.82778 11.725 2.81667C12.7972 3.80555 13.3333 5.13333 13.3333 6.8C13.3333 7.3 13.2361 7.825 13.0416 8.375C12.8472 8.925 12.5638 9.49722 12.1916 10.0917C11.8194 10.6861 11.3555 11.3 10.8 11.9333C10.2444 12.5667 9.60552 13.2167 8.88329 13.8833C8.76107 13.9944 8.62218 14.0778 8.46663 14.1333C8.31107 14.1889 8.15552 14.2167 7.99996 14.2167C7.8444 14.2167 7.68885 14.1889 7.53329 14.1333ZM8.94163 7.60833C9.20274 7.34722 9.33329 7.03333 9.33329 6.66667C9.33329 6.3 9.20274 5.98611 8.94163 5.725C8.68052 5.46389 8.36663 5.33333 7.99996 5.33333C7.63329 5.33333 7.3194 5.46389 7.05829 5.725C6.79718 5.98611 6.66663 6.3 6.66663 6.66667C6.66663 7.03333 6.79718 7.34722 7.05829 7.60833C7.3194 7.86944 7.63329 8 7.99996 8C8.36663 8 8.68052 7.86944 8.94163 7.60833Z" fill="#FFA232" />
                </g>
              </svg>
              Av. El sol 250 Urb. San Carlos , Lima, Peru
            </a>
            <a href="" className="flex items-center gap-1 text-sm">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92394 4.78C6.04594 4.78333 6.18128 4.79 6.30995 5.07533C6.39528 5.26533 6.53861 5.61533 6.65595 5.90067C6.74728 6.12267 6.82194 6.30533 6.84061 6.34267C6.88328 6.428 6.90994 6.526 6.85394 6.64133L6.83528 6.68C6.79735 6.76972 6.74561 6.85295 6.68194 6.92667L6.58661 7.04C6.52994 7.10933 6.47328 7.17733 6.42528 7.22533C6.33928 7.31067 6.25061 7.40267 6.34928 7.57333C6.44795 7.744 6.79461 8.30533 7.30594 8.758C7.67993 9.09531 8.10905 9.36591 8.57461 9.558C8.62128 9.578 8.65906 9.59489 8.68794 9.60867C8.85928 9.694 8.96128 9.68067 9.05994 9.566C9.15928 9.45067 9.48861 9.06667 9.60461 8.896C9.71661 8.72533 9.83128 8.752 9.98994 8.81067C10.1486 8.87 10.9926 9.284 11.1639 9.36867L11.2593 9.41533C11.3786 9.472 11.4593 9.51133 11.4939 9.56867C11.5366 9.64133 11.5366 9.982 11.3953 10.3833C11.2499 10.7833 10.5506 11.1673 10.2339 11.1967L10.1439 11.2073C9.85328 11.242 9.48528 11.2873 8.17328 10.7707C6.55594 10.1347 5.48861 8.55733 5.27328 8.238L5.23794 8.18733L5.23394 8.182C5.13594 8.05067 4.53528 7.24733 4.53528 6.418C4.53528 5.62467 4.92661 5.21133 5.10461 5.02333L5.13594 4.99C5.19356 4.92491 5.26396 4.87239 5.34275 4.83568C5.42154 4.79898 5.50705 4.77889 5.59394 4.77667C5.70928 4.77667 5.82528 4.77667 5.92394 4.78Z" fill="#FF860A" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.45595 14.2207C1.44339 14.2659 1.44297 14.3136 1.45474 14.359C1.4665 14.4044 1.49004 14.4459 1.52297 14.4793C1.5559 14.5127 1.59706 14.5368 1.6423 14.5492C1.68754 14.5617 1.73525 14.5619 1.78062 14.55L4.85195 13.7473C5.8264 14.2751 6.91707 14.5517 8.02528 14.552H8.02795C11.6853 14.552 14.6666 11.588 14.6666 7.944C14.6689 7.07503 14.4983 6.21429 14.1648 5.41187C13.8312 4.60945 13.3415 3.88137 12.7239 3.27C12.1075 2.65361 11.3752 2.16518 10.5693 1.83282C9.76339 1.50045 8.89971 1.3307 8.02795 1.33333C4.37062 1.33333 1.38928 4.29733 1.38928 7.94067C1.38928 9.1 1.69462 10.2387 2.27595 11.2433L1.45595 14.2207ZM3.24062 11.5087C3.27587 11.3807 3.28529 11.247 3.26836 11.1154C3.25142 10.9838 3.20844 10.8569 3.14195 10.742C2.64938 9.89053 2.38978 8.92434 2.38928 7.94067C2.38928 4.854 4.91795 2.33333 8.02795 2.33333C9.54128 2.33333 10.9533 2.918 12.0186 3.97867C12.5428 4.49714 12.9585 5.11479 13.2414 5.7956C13.5243 6.47641 13.6689 7.20674 13.6666 7.944C13.6666 11.0307 11.1379 13.552 8.02795 13.552H8.02462C7.08308 13.5515 6.1565 13.3164 5.32862 12.868C5.10547 12.7472 4.84475 12.7157 4.59928 12.78L2.75795 13.2607L3.24062 11.5087Z" fill="#FF860A" />
              </svg>
              925 988 464
            </a>
            <a href="" className="flex items-center gap-1 text-sm">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_61_134" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_61_134)">
                  <path d="M2.66659 13.3333C2.29992 13.3333 1.98603 13.2028 1.72492 12.9417C1.46381 12.6806 1.33325 12.3667 1.33325 12V4C1.33325 3.63333 1.46381 3.31944 1.72492 3.05833C1.98603 2.79722 2.29992 2.66666 2.66659 2.66666H13.3333C13.6999 2.66666 14.0138 2.79722 14.2749 3.05833C14.536 3.31944 14.6666 3.63333 14.6666 4V12C14.6666 12.3667 14.536 12.6806 14.2749 12.9417C14.0138 13.2028 13.6999 13.3333 13.3333 13.3333H2.66659ZM13.3333 5.33333L8.34992 8.45C8.29436 8.48333 8.23603 8.50833 8.17492 8.525C8.11381 8.54166 8.05547 8.55 7.99992 8.55C7.94436 8.55 7.88603 8.54166 7.82492 8.525C7.76381 8.50833 7.70547 8.48333 7.64992 8.45L2.66659 5.33333V12H13.3333V5.33333ZM7.99992 7.33333L13.3333 4H2.66659L7.99992 7.33333ZM2.66659 5.5V4.51666V4.53333V4.525V5.5Z" fill="#FF860A" />
                </g>
              </svg>
              guia@clubdelmantenimiento.com.pe
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm">Siguenos en:</span>
            <a href="">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.46671 1.91667C8.64896 1.91667 7.8647 2.24152 7.28646 2.81975C6.70822 3.39799 6.38337 4.18225 6.38337 5V6.71667H4.73337C4.65071 6.71667 4.58337 6.78333 4.58337 6.86667V9.13333C4.58337 9.216 4.65004 9.28333 4.73337 9.28333H6.38337V13.9333C6.38337 14.016 6.45004 14.0833 6.53337 14.0833H8.80004C8.88271 14.0833 8.95004 14.0167 8.95004 13.9333V9.28333H10.6147C10.6834 9.28333 10.7434 9.23667 10.76 9.17L11.3267 6.90333C11.3323 6.88121 11.3327 6.85812 11.328 6.83579C11.3234 6.81347 11.3136 6.79252 11.2996 6.77452C11.2856 6.75652 11.2677 6.74195 11.2472 6.73193C11.2267 6.7219 11.2042 6.71668 11.1814 6.71667H8.95004V5C8.95004 4.93215 8.9634 4.86496 8.98937 4.80228C9.01533 4.7396 9.05339 4.68264 9.10137 4.63466C9.14935 4.58668 9.2063 4.54863 9.26899 4.52266C9.33167 4.4967 9.39886 4.48333 9.46671 4.48333H11.2C11.2827 4.48333 11.35 4.41667 11.35 4.33333V2.06667C11.35 1.984 11.2834 1.91667 11.2 1.91667H9.46671Z" fill="#FF860A" />
              </svg>
            </a>
            <a href="">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0666 3.88C10.611 3.35968 10.3599 2.6916 10.36 2H8.29998V10.2667C8.28442 10.7141 8.09566 11.1381 7.77352 11.449C7.45138 11.7599 7.02105 11.9336 6.57332 11.9333C5.62665 11.9333 4.83998 11.16 4.83998 10.2C4.83998 9.05333 5.94665 8.19333 7.08665 8.54667V6.44C4.78665 6.13333 2.77332 7.92 2.77332 10.2C2.77332 12.42 4.61332 14 6.56665 14C8.65998 14 10.36 12.3 10.36 10.2V6.00667C11.1953 6.60657 12.1982 6.92843 13.2266 6.92667V4.86667C13.2266 4.86667 11.9733 4.92667 11.0666 3.88Z" fill="#FF860A" />
              </svg>
            </a>
            <a href="">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99196 9.76733L10.1666 14H14.8333L9.59463 7.01467L13.9533 2H12.1866L8.77529 5.924L5.83329 2H1.16663L6.17329 8.67667L1.54663 14H3.31329L6.99196 9.76733ZM10.8333 12.6667L3.83329 3.33333H5.16663L12.1666 12.6667H10.8333Z" fill="#FF860A" />
              </svg>
            </a>
            <a href="">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 7.95933C14.6729 6.88636 14.5814 5.81504 14.3933 4.75867C14.3101 4.47985 14.1554 4.22768 13.9445 4.02721C13.7337 3.82674 13.474 3.68497 13.1913 3.616C11.4634 3.41361 9.72428 3.32231 7.98466 3.34267C6.24533 3.32267 4.50666 3.416 2.77933 3.62267C2.49892 3.69994 2.24337 3.84869 2.03769 4.05436C1.83202 4.26004 1.68327 4.51558 1.606 4.796C1.418 5.85215 1.32695 6.92327 1.334 7.996C1.32733 9.06933 1.41866 10.14 1.60666 11.196C1.68529 11.4795 1.83587 11.7379 2.04379 11.946C2.25171 12.1542 2.50991 12.3051 2.79333 12.384C4.52133 12.586 6.26 12.6773 8 12.6567C9.73458 12.6801 11.4688 12.5888 13.1913 12.3833C13.4715 12.3061 13.7268 12.1575 13.9323 11.9521C14.1378 11.7466 14.2866 11.4914 14.364 11.2113C14.5687 10.1393 14.6707 9.05 14.6667 7.95933ZM9.726 8.34733L7.056 9.86133C7.00222 9.89085 6.9417 9.90585 6.88036 9.90487C6.81903 9.90389 6.75901 9.88697 6.70621 9.85576C6.6534 9.82454 6.60963 9.78012 6.5792 9.72686C6.54878 9.6736 6.53274 9.61334 6.53266 9.552V6.41067C6.53188 6.34911 6.5475 6.28846 6.57792 6.23495C6.60834 6.18143 6.65246 6.13698 6.70575 6.10616C6.75903 6.07534 6.81956 6.05927 6.88112 6.05959C6.94268 6.05992 7.00304 6.07662 7.056 6.108L9.814 7.69333C9.86716 7.7247 9.91098 7.76969 9.94094 7.82365C9.9709 7.87762 9.9859 7.9386 9.98441 8.00031C9.98291 8.06201 9.96497 8.1222 9.93244 8.17465C9.8999 8.2271 9.85395 8.26991 9.79933 8.29867L9.726 8.34733Z" fill="#FF860A" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="bg-vulcan-900/40 flex items-center justify-between px-2 py-1.5 rounded-b-2xl rounded-t-lg border-b border-b-pumpkin-200/10 backdrop-blur-2xl">
          <img src={Global} alt="Club del Mantenimiento Logo" className="w-12 h-auto rounded-xl" />
          <a href="https://wa.me/51925988464?text=Hola, quisiera saber más información sobre sus servicios de mantenimiento." className="bg-pumpkin-400 px-4 py-2 text-vulcan-950 font-medium rounded-xl hover:bg-pumpkin-500 transition duration-200" target="_blank">Agenda tu mantenimiento</a>
        </nav>
      </header>

      <section className="mx-auto w-full flex flex-col items-center gap-4 mb-6">
        <span className="bg-pumpkin-600/10 px-2 py-1 rounded-md flex items-center gap-1 text-pumpkin-400 text-sm border border-pumpkin-300/50">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_64_178" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
              <rect width="16" height="16" fill="currentColor" />
            </mask>
            <g mask="url(#mask0_64_178)">
              <path d="M5.8 3.8C5.67778 3.92222 5.52222 3.98333 5.33333 3.98333C5.14444 3.98333 4.98889 3.92222 4.86667 3.8L3.8 2.73333C3.67778 2.61111 3.61667 2.45556 3.61667 2.26667C3.61667 2.07778 3.67778 1.92222 3.8 1.8C3.92222 1.67778 4.07778 1.61667 4.26667 1.61667C4.45556 1.61667 4.61111 1.67778 4.73333 1.8L5.8 2.86667C5.92222 2.98889 5.98333 3.14444 5.98333 3.33333C5.98333 3.52222 5.92222 3.67778 5.8 3.8ZM10.0167 3.33333C10.0167 3.14444 10.0778 2.98889 10.2 2.86667L11.2667 1.8C11.3889 1.67778 11.5444 1.61667 11.7333 1.61667C11.9222 1.61667 12.0778 1.67778 12.2 1.8C12.3222 1.92222 12.3833 2.07778 12.3833 2.26667C12.3833 2.45556 12.3222 2.61111 12.2 2.73333L11.1333 3.8C11.0111 3.92222 10.8556 3.98333 10.6667 3.98333C10.4778 3.98333 10.3222 3.92222 10.2 3.8C10.0778 3.67778 10.0167 3.52222 10.0167 3.33333ZM7.525 3.14167C7.39722 3.01389 7.33333 2.85556 7.33333 2.66667V0.666667C7.33333 0.477778 7.39722 0.319444 7.525 0.191667C7.65278 0.0638889 7.81111 0 8 0C8.18889 0 8.34722 0.0638889 8.475 0.191667C8.60278 0.319444 8.66667 0.477778 8.66667 0.666667V2.66667C8.66667 2.85556 8.60278 3.01389 8.475 3.14167C8.34722 3.26944 8.18889 3.33333 8 3.33333C7.81111 3.33333 7.65278 3.26944 7.525 3.14167ZM2 15V10.2333C2 10.1556 2.00556 10.0778 2.01667 10C2.02778 9.92222 2.04444 9.85 2.06667 9.78333L3.31667 6.23333C3.40556 5.96667 3.56667 5.75 3.8 5.58333C4.03333 5.41667 4.29444 5.33333 4.58333 5.33333H11.4167C11.7056 5.33333 11.9667 5.41667 12.2 5.58333C12.4333 5.75 12.5944 5.96667 12.6833 6.23333L13.9333 9.78333C13.9556 9.85 13.9722 9.92222 13.9833 10C13.9944 10.0778 14 10.1556 14 10.2333V15C14 15.2778 13.9028 15.5139 13.7083 15.7083C13.5139 15.9028 13.2778 16 13 16C12.7222 16 12.4861 15.9028 12.2917 15.7083C12.0972 15.5139 12 15.2778 12 15V14.6667H4V15C4 15.2778 3.90278 15.5139 3.70833 15.7083C3.51389 15.9028 3.27778 16 3 16C2.72222 16 2.48611 15.9028 2.29167 15.7083C2.09722 15.5139 2 15.2778 2 15ZM3.86667 8.66667H12.1333L11.4333 6.66667H4.56667L3.86667 8.66667ZM5 12.6667C5.27778 12.6667 5.51389 12.5694 5.70833 12.375C5.90278 12.1806 6 11.9444 6 11.6667C6 11.3889 5.90278 11.1528 5.70833 10.9583C5.51389 10.7639 5.27778 10.6667 5 10.6667C4.72222 10.6667 4.48611 10.7639 4.29167 10.9583C4.09722 11.1528 4 11.3889 4 11.6667C4 11.9444 4.09722 12.1806 4.29167 12.375C4.48611 12.5694 4.72222 12.6667 5 12.6667ZM11 12.6667C11.2778 12.6667 11.5139 12.5694 11.7083 12.375C11.9028 12.1806 12 11.9444 12 11.6667C12 11.3889 11.9028 11.1528 11.7083 10.9583C11.5139 10.7639 11.2778 10.6667 11 10.6667C10.7222 10.6667 10.4861 10.7639 10.2917 10.9583C10.0972 11.1528 10 11.3889 10 11.6667C10 11.9444 10.0972 12.1806 10.2917 12.375C10.4861 12.5694 10.7222 12.6667 11 12.6667ZM3.33333 13.3333H12.6667V10H3.33333V13.3333Z" fill="currentColor" />
            </g>
          </svg>
          Sistema de Seguimiento Vehicular
        </span>
        <h2 className="text-2xl font-semibold">Consulta de Mantenimiento</h2>
        <p className="max-w-lg text-center text-vulcan-200">Ingrese la placa de su vehículo para consultar el estado de tus servicios, historial, filtros, próximos mantenimientos y evidencias.</p>
      </section>

      <VehicleSearchPage />
      <footer className="w-full mt-10 mb-6 flex items-center justify-center">
        <span className="text-sm text-vulcan-200 text-center">© 2026 Lubricentro — Consulta de mantenimiento</span>
      </footer>


      {/* <main className="max-w-5xl mx-auto bg-vulcan-900/20 p-6 rounded-2xl flex flex-col items-start gap-3.5">
        <h2 className="text-lg font-medium">Resultado</h2>
        <div className="bg-white text-vulcan-950 border border-black px-1 py-2 rounded-sm">
          <div className="flex items-center gap-4 mb-1">
            <img src={Flag} alt="Bandera Perú" className="w-6 h-auto" />
            <p className="text-xs">PERU</p>
            <span className="bg-vulcan-100 text-[6px] font-semibold px-0.5 py-0.5 border">Z8H-232</span>
          </div>
          <p className="font-semibold text-center">Z8H-232</p>
        </div>

        <div className="w-full grid grid-cols-2 border border-vulcan-800 rounded-2xl">
          <div className="flex flex-col gap-3.5 p-3.5 border-r border-b border-vulcan-800">
            <h3 className="font-medium">Cliente</h3>
            <p>Carlos Mendoza Rivera</p>
          </div>

          <div className="flex flex-col gap-3.5 p-3.5 border-b border-b-vulcan-800">
            <h3 className="font-medium">Vehículo</h3>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h4 className="text-vulcan-300 text-sm font-medium">MARCA</h4>
                <p>Toyota Camry</p>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-vulcan-300 text-sm font-medium">MODELO</h4>
                <p>Cerato</p>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-vulcan-300 text-sm font-medium">AÑO</h4>
                <p>2021</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3.5 p-3.5 border-r border-r-vulcan-800">
            <h4 className="font-medium">Aceite motor</h4>
            <p>Motul 0W-20 - API SP / ILSAC GF - 6</p>
          </div>

          <div className="flex flex-col gap-1.5 p-3.5">
            <h4 className="font-medium">Filtros</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-vulcan-800/40 text-sm px-2 py-1 rounded-lg">Aceite: OIL-100</span>
              <span className="bg-vulcan-800/40 text-sm px-2 py-1 rounded-lg">Aire: Sukura A-2190</span>
              <span className="bg-vulcan-800/40 text-sm px-2 py-1 rounded-lg">Cabina: Mann CUK 26 009</span>
            </div>
          </div>
        </div>

        <section className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Próximo mantenimiento</h4>
            <div className="bg-pumpkin-400/20 p-3.5 rounded-xl flex flex-col items-start gap-1.5">
              <span className="bg-pumpkin-700 flex items-center gap-1 px-2 py-1 rounded-md text-sm font-semibold">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_23_120" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="currentColor" />
                  </mask>
                  <g mask="url(#mask0_23_120)">
                    <path d="M10.6042 14.3959C10.2014 13.9931 10 13.5 10 12.9167C10 12.3334 10.2014 11.8403 10.6042 11.4375C11.0069 11.0347 11.5 10.8334 12.0833 10.8334C12.6667 10.8334 13.1597 11.0347 13.5625 11.4375C13.9653 11.8403 14.1667 12.3334 14.1667 12.9167C14.1667 13.5 13.9653 13.9931 13.5625 14.3959C13.1597 14.7986 12.6667 15 12.0833 15C11.5 15 11.0069 14.7986 10.6042 14.3959ZM4.16667 18.3334C3.70833 18.3334 3.31597 18.1702 2.98958 17.8438C2.66319 17.5174 2.5 17.125 2.5 16.6667V5.00002C2.5 4.54169 2.66319 4.14933 2.98958 3.82294C3.31597 3.49655 3.70833 3.33335 4.16667 3.33335H5V2.50002C5 2.26391 5.07986 2.06599 5.23958 1.90627C5.39931 1.74655 5.59722 1.66669 5.83333 1.66669C6.06944 1.66669 6.26736 1.74655 6.42708 1.90627C6.58681 2.06599 6.66667 2.26391 6.66667 2.50002V3.33335H13.3333V2.50002C13.3333 2.26391 13.4132 2.06599 13.5729 1.90627C13.7326 1.74655 13.9306 1.66669 14.1667 1.66669C14.4028 1.66669 14.6007 1.74655 14.7604 1.90627C14.9201 2.06599 15 2.26391 15 2.50002V3.33335H15.8333C16.2917 3.33335 16.684 3.49655 17.0104 3.82294C17.3368 4.14933 17.5 4.54169 17.5 5.00002V16.6667C17.5 17.125 17.3368 17.5174 17.0104 17.8438C16.684 18.1702 16.2917 18.3334 15.8333 18.3334H4.16667ZM4.16667 16.6667H15.8333V8.33335H4.16667V16.6667ZM4.16667 6.66669H15.8333V5.00002H4.16667V6.66669Z" fill="currentColor" />
                  </g>
                </svg>
                IMPORTANTE
              </span>
              <p>A los 105,000 km, lo que ocurra primero. o el 100 dic. 2025</p>
            </div>
          </div>
          <article>
            <h4 className="font-medium mb-2">Notas</h4>
            <div className="bg-vulcan-800/40 p-3.5 rounded-xl flex flex-col items-start gap-1.5">
              <span className="bg-cyan-700 px-2 py-1 rounded-md text-sm font-medium">OBSERVACIÓN</span>
              <p>Leve sudoración en retén de cigúenal. Revisar próximo servicio</p>
            </div>
          </article>
        </section>
        <hr className="w-full text-vulcan-900" />
        
        <section className="w-full flex flex-col gap-4">
          <h3 className="font-semibold mb-2">Historial de Servicios</h3>
          <article className="bg-vulcan-800/20 flex flex-col gap-5 p-4 rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <h4 className="font-semibold">Cambio de acéite</h4>
                  <span className="bg-green-500/20 px-1 py-0.5 rounded-md text-green-500 font-medium">
                    Completado
                  </span>
                </div>
                <p>Cambio de aceite sintético 5W-30 y filtro de aceite</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold">S/. 200.00</span>
                <p>12 jun, 2025 - 100,500 km</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm mb-1.5">Aceite agregado</p>
                <div className="max-w-64 w-full h-40 bg-vulcan-800/30 rounded-xl">
                  <img src="" alt="Cambio de aceite" />
                </div>
              </div>
            </div>
          </article>

          <article className="bg-vulcan-800/20 flex flex-col gap-5 p-4 rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <h4 className="font-semibold">Cambio de acéite</h4>
                  <span className="bg-green-500/20 px-1 py-0.5 rounded-md text-green-500 font-medium">
                    Completado
                  </span>
                </div>
                <p>Cambio de aceite sintético 5W-30 y filtro de aceite</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold">S/. 200.00</span>
                <p>12 jun, 2025 - 100,500 km</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm mb-1.5">Aceite agregado</p>
                <div className="max-w-64 w-full h-40 bg-vulcan-800/30 rounded-xl">
                  <img src="" alt="Cambio de aceite" />
                </div>
              </div>
            </div>
          </article>
        </section>
      </main> */}
    </>
  )
}

export default App