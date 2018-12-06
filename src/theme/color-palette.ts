// Define colors here by color name and shade, not by purpose
const scaleBlue = {
  blueLighten15: '#7ACCFF',
  blueLighten10: '#61C2FF',
  blueLighten5: '#42B7FF',
  blueBase: '#28AEFF',
  blueDarken5: '#0FA3FF',
  blueDarken10: '#0097F5',
  blueDarken15: '#008AE0'
}

const scaleBlurple = {
  blurpleLighten15: '#8D92E2',
  blurpleLighten10: '#787FDD',
  blurpleLighten5: '#6068D7',
  blurpleBase: '#4C54D2',
  blurpleDarken5: '#3741CD',
  blurpleDarken10: '#2F38BC',
  blurpleDarken15: '#2A32A7'
}

const scaleGreen = {
  greenLighten15: '#3FE491',
  greenLighten10: '#29E085',
  greenLighten5: '#1ED278',
  greenBase: '#1ED278',
  greenDarken5: '#18A55E',
  greenDarken10: '#148F52',
  greenDarken15: '#117845'
}

const scaleGrey = {
  greyLighten30: '#7E7F95',
  greyLighten25: '#707289',
  greyLighten20: '#65667B',
  greyLighten15: '#5A5A6D',
  greyLighten10: '#4E4F5F',
  greyLighten5: '#434351',
  greyBase: '#373843',
  greyDarken5: '#2C2C35',
  greyDarken10: '#202127',
  greyDarken15: '#151519'
}

const scaleOrange = {
  orangeLighten15: '#FC9278',
  orangeLighten10: '#FC7E5F',
  orangeLighten5: '#FB6A46',
  orangeBase: '#FB542B',
  orangeDarken5: '#FA4214',
  orangeDarken10: '#F03405',
  orangeDarken15: '#D72E04'
}

const scalePurple = {
  purpleLighten15: '#A67AC7',
  purpleLighten10: '#9764BE',
  purpleLighten5: '#8E56B8',
  purpleBase: '#7E47A8',
  purpleDarken5: '#74419B',
  purpleDarken10: '#643885',
  purpleDarken15: '#593277'
}

const scaleRed = {
  redLighten15: '#EC6A80',
  redLighten10: '#E9536C',
  redLighten5: '#E63D59',
  redBase: '#E32444',
  redDarken5: '#D41C3A',
  redDarken10: '#BE1934',
  redDarken15: '#A7162E'
}

const scaleSilver = {
  silverLighten15: '#F3F3F6',
  silverLighten10: '#E5E5EB',
  silverLighten5: '#D7D7E0',
  silverBase: '#C8C8D5',
  silverDarken5: '#BABACA',
  silverDarken10: '#ABABBF',
  silverDarken15: '#9D9DB4'
}

const scaleYellow = {
  yellowLighten15: '#FFE68A',
  yellowLighten10: '#FFE070',
  yellowLighten5: '#FFDB57',
  yellowBase: '#FFD43B',
  yellowDarken5: '#FFCF24',
  yellowDarken10: '#FFCA0A',
  yellowDarken15: '#F0BC00'
}

const white = '#FFF'

export default {
  ...scaleGrey,
  ...scaleOrange,
  ...scaleBlurple,
  ...scaleBlue,
  ...scaleRed,
  ...scaleYellow,
  ...scaleGreen,
  ...scalePurple,
  ...scaleSilver,
  white
}
