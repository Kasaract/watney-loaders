/** @jsx jsx */
import { ReactNode, ReactElement, CSSProperties } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/react';

interface LoaderProps {
  height?: number;
  width?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const Loader = (props: LoaderProps): ReactElement => {
  const {
    height: providedHeight,
    width: providedWidth,
    className,
    style,
    children,
  } = props;

  const height = !!providedHeight ? providedHeight : 250;
  const width = !!providedWidth ? providedWidth : 250;
  const viewBox = `0 0 ${width} ${height}`;

  return jsx(
    'svg',
    {
      className,
      height: height,
      width: width,
      viewBox: viewBox,
      style,
    },
    children
  );
};

Loader.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

Loader.defaultProps = {
  height: 500,
  width: 500,
};

export { Loader, LoaderProps };
