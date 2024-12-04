import React, { useRef, useState, useEffect } from 'react';

const Skill = ({ 
  text = "Your Skill Text",
  strokeColor = "#BEBEBE",
  fillColor = "#1C194A",
  backgroundColor = "transparent",
  fontSize = 25,
  fontFamily = "'Apple SD Gothic Neo', sans-serif",
  fontWeight = "bold",
  cornerRadius = 6.75,
  padding = 28,
}) => {
  const textRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 55 });

  useEffect(() => {
    if (textRef.current) {
      const bbox = textRef.current.getBBox();
      setDimensions({
        width: Math.ceil(bbox.width + padding * 2),
        height: 55 
      });
    }
  }, [text, fontSize, fontFamily, fontWeight, padding]);

  return (
    <svg width={dimensions.width} height={dimensions.height} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect 
        x="0" 
        y="0" 
        width={dimensions.width} 
        height={dimensions.height} 
        rx={cornerRadius}
        fill={backgroundColor}
      />
      <rect 
        x="0.75" 
        y="0.75" 
        width={dimensions.width - 1.5} 
        height={dimensions.height - 1.5} 
        rx={cornerRadius}
        stroke={strokeColor} 
        strokeOpacity="0.5" 
        strokeWidth="1"
        fill="none"
      />
      <text
        ref={textRef}
        x="50%"
        y="50%"
        fill={fillColor}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        dominantBaseline="central"
        textAnchor="middle"
      >
        {text}
      </text>
    </svg>
  );
};

export default Skill;