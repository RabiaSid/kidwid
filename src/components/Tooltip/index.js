import React from 'react'
import { Tooltip } from 'antd';

function TooltipButtonAntd({ className, height, width, color, backgroundColor, title, title2, fontWeight, borderRadius, fontSize, opacity }) {
 
    const border = backgroundColor === 'transparent' ? `2px solid ${baseColors.primaryColor}` : "none"

    const styles = {
        button: {
            height: height && height,
            minHeight: "30px",
            minWidth: '170px',
            width: width && width,
            color,
            fontWeight: fontWeight && fontWeight,
            fontSize: fontSize ? fontSize : '15px',
            border,
            backgroundColor,
            textAlign: 'center',
            borderRadius: borderRadius ? borderRadius : "2px",
            cursor: 'pointer',
            opacity:opacity,
        }
    }

    return (
    <Tooltip style={styles.button} className={className} title={title} >
    <span>{title2}</span>
  </Tooltip>
  )
}

export default TooltipButtonAntd

