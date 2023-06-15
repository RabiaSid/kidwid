import baseColors from '@/constant';
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
    weight: ['400', '700'],
    subsets: ['devanagari'] })


export const styles = {
    HeaderText:{
      fontFamily: `${poppins}`,
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '30px',
        color:baseColors.Black
    },
    Heading1:{
        fontFamily: `${poppins}`,
        fontSize: '45px',
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
        fontSize: '35px',
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
      Text1BlackBold:{
        fontFamily: `${poppins}`,
        fontWeight:"400",
        fontSize: '24px',
        lineHeight: '35px',
        color:baseColors.Black
      },
      Text2bold:{
        fontFamily: `${poppins}`,
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '35px',
        color:baseColors.Black
      },
      Text2Black:{
        fontFamily: `${poppins}`,
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '30px',
        color:baseColors.Black
      },
      Text3:{
        fontFamily: `${poppins}`,
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '20px',
        color:baseColors.Black
      },
      Text3Bold:{
        fontFamily: `${poppins}`,
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '20px',
        color:baseColors.Black
      },
      RresponsiveHeading: {
        fontFamily: `${poppins}`,
        fontSize: `calc(18px + 6 * ((100vw - 320px) / 680))`,
        fontWeight: '700',
        lineHeight: '40px',
        color:baseColors.Black
      },
      CheckBorder:{
        border:'2px solid red'
      }
      
  
  };

