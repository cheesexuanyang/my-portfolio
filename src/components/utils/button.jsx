import React from 'react';

const Button = ({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'default', 
  onClick, 
  href, 
  ...props 
}) => {
  let baseClasses = 'btn';
  
  switch (variant) {
    case 'outline':
      baseClasses += ' btn-secondary';
      break;
    case 'ghost':
      baseClasses += ' btn-ghost';
      break;
    case 'default':
    default:
      baseClasses += ' btn-primary';
      break;
  }
  
  switch (size) {
    case 'lg':
      break;
    case 'sm':
      break;
    case 'icon':
      baseClasses += ' btn-icon';
      break;
    default:
      break;
  }
  
  const classes = `${baseClasses} ${className}`.trim();
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;