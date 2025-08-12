const Logo = ({ variant = 'horizontal', color = 'black', className = '' }) => {
  const logoSrc = color === 'white' ? '/images/Logo White.svg' : '/images/Logo Black.svg'
  
  return (
    <img 
      src={logoSrc} 
      alt="Yu Law Firm" 
      className={`${variant === 'horizontal' ? 'h-8' : 'h-12'} ${className}`}
    />
  )
}

export default Logo
