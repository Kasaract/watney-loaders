import { ReactElement, CSSProperties, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/react';

import { dash } from '../utils/keyframes';
import { LoaderWrapperContext } from '../Loader/Loader.context';

interface RingProps {
  color?: string;
  radius?: number;
  strokeWidth?: number;
  strokeLinecap?: string;
  className?: string;
  style?: CSSProperties;
}

const Ring = (props: RingProps): ReactElement => {
  const { color, radius, strokeWidth, strokeLinecap, className, style } = props;

  const parentDimensions = useContext(LoaderWrapperContext);

  const cx = parentDimensions.width / 2;
  const cy = parentDimensions.height / 2;

  return jsx('circle', {
    className,
    cx,
    cy,
    r: radius,
    css: {
      animation: `${dash} 1.5s ease-in-out infinite`,
      stroke: color,
      strokeWidth,
      strokeLinecap,
      fill: 'none',
      strokeDasharray: [20, 320],
    },
    style,
  });
};

Ring.propTypes = {
  color: PropTypes.string,
  radius: PropTypes.number,
  strokeWidth: PropTypes.number,
  strokeLinecap: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

Ring.defaultProps = {
  color: '#CCCCCC',
  radius: 50,
  strokeWidth: 10,
  strokeLinecap: 'round',
};

export { Ring };
