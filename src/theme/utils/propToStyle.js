import { breakpointsMedia } from './breakpointsMedia';

export function propToStyle(propName) {
  // eslint-disable-next-line consistent-return
  return function insta(props) {
    const propValue = props[propName];

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: propValue,
      };
    }
    if (typeof propValue === 'object') {
      return breakpointsMedia({
        xs: {
          [propName]: propValue.xs,
        },
        md: {
          [propName]: propValue.md,
        },
      });
    }
  };
}
