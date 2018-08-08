// import {shadeBlendConvert} from '../utils'
// import tinycolor from 'tinycolor2'
const brandColor = '#8B0000'
const degrees = {
  mid: 10,
  more: 15,
  most: 20
}

export const colors = {
    primary: brandColor,
    danger: '#e74c3c',
    success: '#5cb85c',
    gray: {
        light: '#f7f7f7',
        base: '#888',
        darker: '#666',
        darkest: '#555'
    },
    placeholderText: '#bbbbbb',
    white: '#fff',
    // white: '#f7f7f7',
    // link: {
    //     hover: tinycolor(brandColor).darken(degrees.mid).toString()
    // }
    backgroundRadial: {
        // background: '#ddd',
        // background: 'radial-gradient(circle at center, #aaa 100%, #fff 50%)'
        background: '#ccc',
        background: 'radial-gradient(circle at center, #bbb 0, #eee 100%)'
    },
    backgroundFade: {
        background: brandColor,
        background: 'linear-gradient(to right,  #560000 0%, ' + brandColor + ' 20%, ' + brandColor +' 80%, #560000 100%)',
    }
}
export const fonts = {
        body: {
            fontFamily: "'MontserratLight', sans-serif"
        }
    }
export const breakpoints= {
    smartphone: '@media only screen and (max-width: 479px)',
    spartphoneLandscape: '@media only screen and (min-width: 480px) and (max-width: 767px)',
    tablet: '@media only screen and (min-width: 480px) and (max-width: 767px)',
    desktop: '@media only screen and (max-width: 992px)',
}

