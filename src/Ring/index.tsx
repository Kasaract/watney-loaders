/** @jsx jsx */
import { ReactNode, ReactElement, CSSProperties, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/react';

import { LoaderWrapperContext } from '../LoaderWrapper';

interface RingProps {
  color?: string;
  radius?: number;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
}

const Ring = (props: RingProps) => {
  const { color, radius, strokeWidth, className, style } = props;

  const parentDimensions = useContext(LoaderWrapperContext);

  const cx = parentDimensions.width / 2;
  const cy = parentDimensions.height / 2;

  return jsx('circle', {
    className,
    cx,
    cy,
    r: radius,
    stroke: color,
    strokeWidth,
    fill: 'none',
    style,
  });
};

Ring.propTypes = {
  color: PropTypes.string,
  radius: PropTypes.number,
  strokeWidth: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

Ring.defaultProps = {
  color: '#CCCCCC',
  radius: 100,
  strokeWidth: 5,
};

export { Ring };
