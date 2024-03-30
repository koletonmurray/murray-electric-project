import React from 'react';

const colorClasses = {
  darkGray: 'text-darkGray',
  mediumGray: 'text-mediumGray',
  lightGray: 'text-lightGray',
  black: 'text-black',
  yellow: 'text-yellow',
  lightYellow: 'text-lightYellow',
  lightBlue: 'text-lightBlue',
  darkBlue: 'text-darkBlue',
  midBlue: 'text-midBlue'
};

const Logo = ({styling, color, size, weight, dropPeriod = false}) => {

    const textColorClass = color ? colorClasses[color] : '';
    const textSizeClass = size ? `text-${size}` : '';
    const textWeightClass = weight ? `font-${weight}` : '';
    const companySuffix = dropPeriod ? `Electric\u00A0Corp` : `Electric\u00A0Corp.`;


    return (
        <span className={`${styling} ${textColorClass} ${textSizeClass} ${textWeightClass}`}>
            <span className="logoMain">MURRAY </span>
            <span className='logoSub'>{companySuffix}</span>
        </span>
    );
};

export default Logo;
