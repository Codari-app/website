const UXDesign = ({ width = 80, height = 80, color = "#3B82F6" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tela/Monitor principal */}
      <rect
        x="15"
        y="20"
        width="50"
        height="35"
        rx="3"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
      />
      
      {/* Tela interna */}
      <rect
        x="18"
        y="23"
        width="44"
        height="29"
        rx="1"
        fill={color}
        fillOpacity="0.1"
      />
      
      {/* Base do monitor */}
      <path
        d="M35 55L45 55M40 55L40 60M30 60L50 60"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Elementos de interface - barra superior */}
      <rect
        x="20"
        y="25"
        width="38"
        height="3"
        rx="1.5"
        fill={color}
        fillOpacity="0.3"
      />
      
      {/* Botões da interface */}
      <circle cx="22" cy="26.5" r="1" fill={color} />
      <circle cx="25" cy="26.5" r="1" fill={color} />
      <circle cx="28" cy="26.5" r="1" fill={color} />
      
      {/* Elementos de design na tela */}
      <rect
        x="22"
        y="32"
        width="12"
        height="8"
        rx="2"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      
      <circle
        cx="48"
        cy="36"
        r="4"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Linhas de layout */}
      <path
        d="M22 44L34 44M22 46L30 46"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Mouse/cursor */}
      <path
        d="M52 15L54 13L58 17L56 19L54 17L52 19Z"
        fill={color}
      />
      
      {/* Seta do cursor */}
      <path
        d="M54 17L56 15"
        stroke="white"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      
      {/* Pontos de grid/guias */}
      <circle cx="40" cy="42" r="0.8" fill={color} opacity="0.4" />
      <circle cx="45" cy="42" r="0.8" fill={color} opacity="0.4" />
      <circle cx="50" cy="42" r="0.8" fill={color} opacity="0.4" />
    </svg>
  );
};

export default UXDesign;