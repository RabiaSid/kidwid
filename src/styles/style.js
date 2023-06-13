import baseColors from '@/constant';
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
    weight: ['400', '700'],
    subsets: ['devanagari'] })


export const styles = {
    
    Heading1:{
        fontFamily: `${poppins}`,
        fontSize: '50px',
        fontWeight: '700',
        lineHeight: '70px',
        color:baseColors.Black
        
      },
      Heading1Green:{
        fontFamily: `${poppins}`,
        fontSize: '50px',
        fontWeight: '700',
        lineHeight: '70px',
        color:baseColors.GreenColor
      },
      Heading1White:{
        fontFamily: `${poppins}`,
        fontSize: '40px',
        fontWeight: '700',
        lineHeight: '70px',
        color:baseColors.White
      },
      Heading2:{
        fontFamily: `${poppins}`,
        fontSize: '35px',
        fontWeight: '700',
        lineHeight: '40px',
        color:baseColors.Black
        
      },
      Text1:{
        fontFamily: `${poppins}`,
        fontSize: '25px',
        fontWeight: '400',
        lineHeight: '35px',
        color:baseColors.Black
      },
      Text1Bold:{
        fontFamily: `${poppins}`,
        fontSize: '28px',
        fontWeight: '700',
        lineHeight: '35px',
        color:baseColors.Black
      },
      Text1White:{
        fontFamily: `${poppins}`,
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '35px',
        color:baseColors.White
      },
      Text1WhiteBold:{
        fontFamily: `${poppins}`,
        fontSize: '24px',
        lineHeight: '35px',
        color:baseColors.White
      },
      Text2bold:{
        fontFamily: `${poppins}`,
        fontSize: '28px',
        fontWeight: '700',
        lineHeight: '35px',
        color:baseColors.Black
      },
      Text2Black:{
        fontFamily: `${poppins}`,
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '30px',
        color:baseColors.Black
      },
      CheckBorder:{
        border:'2px solid red'
      }
      
  
  };

