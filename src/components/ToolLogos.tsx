import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const PythonLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M63.45 6.02c-15.68 0-25.13 6.94-25.13 19.55v14.66h25.46v3.66H26.33c-12.75 0-23.77 7.74-23.77 24.36 0 16.71 10.42 24.58 23.77 24.58h7.91v-11.45c0-13.43 11.23-24.87 25.13-24.87h25.11V43.89c0-12.16-9.82-19.1-23.03-19.1h-4.32V18.1c0-7.39 5.34-12.08 16.32-12.08h15.2V0H63.45v6.02zm-12.27 8.35a3.91 3.91 0 1 1 0 7.82 3.91 3.91 0 0 1 0-7.82z"
      fill="#3776AB"
    />
    <path
      d="M64.55 121.98c15.68 0 25.13-6.94 25.13-19.55V87.77H64.22v-3.66h37.45c12.75 0 23.77-7.74 23.77-24.36 0-16.71-10.42-24.58-23.77-24.58h-7.91v11.45c0 13.43-11.23 24.87-25.13 24.87H43.52v12.62c0 12.16 9.82 19.1 23.03 19.1h4.32v6.69c0 7.39-5.34 12.08-16.32 12.08H39.35V128h25.2v-6.02zm12.27-8.35a3.91 3.91 0 1 1 0-7.82 3.91 3.91 0 0 1 0 7.82z"
      fill="#FFD43B"
    />
  </svg>
);

export const SqlLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="14" fill="#0284C7" />
    <ellipse cx="32" cy="18" rx="20" ry="6" fill="#BAE6FD" />
    <path
      d="M12 18v12c0 3.31 8.95 6 20 6s20-2.69 20-6V18"
      stroke="#FFFFFF"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M12 30v12c0 3.31 8.95 6 20 6s20-2.69 20-6V30"
      stroke="#FFFFFF"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <ellipse cx="32" cy="18" rx="20" ry="6" stroke="#FFFFFF" strokeWidth="3.5" />
    <text
      x="32"
      y="57"
      textAnchor="middle"
      fill="#FFFFFF"
      fontWeight="900"
      fontSize="11"
      fontFamily="sans-serif"
      letterSpacing="1"
    >
      SQL
    </text>
  </svg>
);

export const PowerBiLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="14" fill="#FFFBEB" />
    <rect x="11" y="32" width="10" height="22" rx="3" fill="#FBBF24" />
    <rect x="25" y="22" width="10" height="32" rx="3" fill="#F59E0B" />
    <rect x="39" y="10" width="10" height="44" rx="3" fill="#D97706" />
    <path
      d="M16 32h5v22h-5zM30 22h5v32h-5zM44 10h5v44h-5z"
      fill="#FFFFFF"
      fillOpacity="0.25"
    />
  </svg>
);

export const GoogleSheetsLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="14" fill="#ECFDF5" />
    {/* Page base */}
    <path
      d="M15 11a3 3 0 0 1 3-3h20l14 14v31a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3V11z"
      fill="#0F9D58"
    />
    {/* Folded corner */}
    <path d="M38 8l14 14H38V8z" fill="#87CEAB" />
    {/* Spreadsheet Grid in White */}
    <rect x="22" y="27" width="22" height="18" rx="2" fill="#FFFFFF" fillOpacity="0.2" />
    <line x1="22" y1="33" x2="44" y2="33" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="39" x2="44" y2="39" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <line x1="33" y1="27" x2="33" y2="45" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ExcelLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="14" fill="#F0FDF4" />
    {/* Excel Back Grid Panel */}
    <rect x="22" y="14" width="30" height="36" rx="4" fill="#107C41" />
    <path
      d="M32 14v36M42 14v36M22 26h30M22 38h30"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeOpacity="0.4"
    />
    {/* Front 3D Badge with X */}
    <rect x="12" y="20" width="22" height="24" rx="3" fill="#185ABD" />
    <path
      d="M17.5 25.5l5 7-5 7M28.5 25.5l-5 7 5 7"
      stroke="#FFFFFF"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ScikitLearnLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="14" fill="#FFF7ED" />
    {/* Connected Nodes representing ML Scikit-Learn */}
    <line x1="20" y1="22" x2="44" y2="22" stroke="#CBD5E1" strokeWidth="3" />
    <line x1="20" y1="22" x2="32" y2="44" stroke="#CBD5E1" strokeWidth="3" />
    <line x1="44" y1="22" x2="32" y2="44" stroke="#CBD5E1" strokeWidth="3" />
    {/* Left Node (Blue) */}
    <circle cx="20" cy="22" r="8" fill="#3499CD" />
    {/* Right Node (Orange) */}
    <circle cx="44" cy="22" r="8" fill="#F89939" />
    {/* Bottom Node (Navy) */}
    <circle cx="32" cy="44" r="9" fill="#1E293B" />
    <circle cx="32" cy="44" r="4" fill="#FFFFFF" />
  </svg>
);

export const GitLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="14" fill="#FEF2F2" />
    {/* Rotated diamond */}
    <g transform="translate(32 32) rotate(45) translate(-32 -32)">
      <rect x="15" y="15" width="34" height="34" rx="5" fill="#F05032" />
      <g transform="translate(32 32) rotate(-45) translate(-32 -32)">
        {/* Branch lines and node dots */}
        <line x1="26" y1="24" x2="26" y2="40" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="26" y1="32" x2="38" y2="24" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="26" cy="22" r="4" fill="#FFFFFF" />
        <circle cx="26" cy="42" r="4" fill="#FFFFFF" />
        <circle cx="38" cy="22" r="4" fill="#FFFFFF" />
      </g>
    </g>
  </svg>
);

export const VsCodeLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="14" fill="#F0F9FF" />
    <path
      d="M48 10L36 21l-14-11-7 4v36l7 4 14-11 12 11 4-2V12l-4-2z"
      fill="#0065A9"
      opacity="0.3"
    />
    <path
      d="M48 12L34 23l-12-9-7 3v34l7 3 12-9 14 11 4-2V14l-4-2z"
      fill="#007ACC"
    />
    <path
      d="M48 12L34 23l-12-9-7 3v7l11 9-11 9v7l7 3 12-9 14 11 4-2V14l-4-2z"
      fill="#1F8AD2"
    />
    <path
      d="M34 23l14-11v40L34 41z"
      fill="#0065A9"
    />
  </svg>
);

export const PandasLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="14" fill="#FDF4FF" />
    <rect x="18" y="14" width="7" height="36" rx="2" fill="#150458" />
    <rect x="29" y="24" width="7" height="26" rx="2" fill="#E70488" />
    <rect x="40" y="18" width="7" height="32" rx="2" fill="#5A2E8A" />
    <circle cx="21.5" cy="18" r="2" fill="#FFFFFF" />
    <circle cx="32.5" cy="28" r="2" fill="#FFFFFF" />
    <circle cx="43.5" cy="22" r="2" fill="#FFFFFF" />
  </svg>
);

export const PostgreSqlLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="14" fill="#F0F7FF" />
    <path
      d="M32 14c-10 0-16 7-16 16 0 10 7 19 16 19s16-9 16-19c0-9-6-16-16-16z"
      fill="#336791"
    />
    <path
      d="M26 23c-3 1-5 4-5 8 0 5 3 9 7 9s5-4 5-8c0-5-3-9-7-9z"
      fill="#FFFFFF"
      fillOpacity="0.9"
    />
    <path
      d="M38 23c-3 1-5 4-5 8 0 5 3 9 7 9s5-4 5-8c0-5-3-9-7-9z"
      fill="#FFFFFF"
      fillOpacity="0.9"
    />
    <circle cx="27" cy="28" r="2" fill="#336791" />
    <circle cx="37" cy="28" r="2" fill="#336791" />
    <path
      d="M30 38c0 4 2 6 2 6s2-2 2-6"
      stroke="#FFFFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);
