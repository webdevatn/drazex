import {Dimensions, PixelRatio} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = size => (WINDOW_WIDTH/guidelineBaseWidth) * size;

export const scaleFont = size => size * PixelRatio.getFontScale();

const scale = (Dimensions.get("window").width / 320);

function dimensions(top, right = top, bottom = top, left = right, property){
  let styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(top, right, bottom, left){
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top, right, bottom, left){
  return dimensions(top, right, bottom, left, 'padding');
}

export function normalize(size) {
    const newSize = size * scale
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
}
