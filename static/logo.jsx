import React from 'react';

const Logo = ({ width, margin, padding, fillColor }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid meet"
    viewBox="239.574714322197 -624.4367816092044 81.09375 42"
    width={width || '100'}
    height="auto"
    style={{ margin: margin || 0, padding: padding || 0 }}
  >
    <defs>
      <text
        id="b1fbf8eBgK"
        x="279.12"
        y="-626.44"
        fontSize="28"
        fontFamily="'Pacifico', cursive, sans-serif"
        fontWeight="500"
        fontStyle="normal"
        letterSpacing="0"
        alignmentBaseline="before-edge"
        transform="matrix(1 0 0 1 0 3)"
        style={{ lineHeight: '100%' }}
        xmlSpace="preserve"
        dominantBaseline="text-before-edge"
      >
        <tspan
          x="279.12"
          dy="0em"
          alignmentBaseline="before-edge"
          dominantBaseline="text-before-edge"
          textAnchor="middle"
        >
          Rohan
        </tspan>
      </text>
    </defs>
    <g>
      <g id="e1nDcrASYo">
        <use
          xlinkHref="#b1fbf8eBgK"
          opacity="1"
          fill={fillColor || '#ffffff'}
          fillOpacity="1"
        ></use>
      </g>
    </g>
  </svg>
);

export default Logo;
