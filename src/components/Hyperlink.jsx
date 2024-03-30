import React from 'react';
import { Link } from 'react-router-dom';

const Hyperlink = ({ href, IconComponent, children, externalLink = false, color = 'lightYellow' }) => {
  const baseClass = 'pb-2 hover:underline underline-offset-4';
  const hoverColorClass = `hover:text-${color}`;
  const getClassName = `${baseClass} ${hoverColorClass} line`;

  const LinkComponent = externalLink ? (
    // External Link
    <a href={href} target='_blank' rel="noopener noreferrer" className={getClassName}>
      {IconComponent && <IconComponent className='translate-x-[-25%] translate-y-[-7.5%]' />}
      {children}
    </a>
  ) : (
    // Internal Link
    <Link to={href} className={getClassName}>
      {IconComponent && <IconComponent className='translate-x-[-25%] translate-y-[-7.5%]' />}
      {children}
    </Link>
  );

  return LinkComponent;
};

export default Hyperlink;
