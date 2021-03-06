import { ReactNode, ReactElement, CSSProperties } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/react';

import { rotate } from '../utils/keyframes';
import {
  LoaderWrapperContext,
  initialLoaderDimensions,
} from '../utils/Loader.context';

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

  const LoaderConsumer = () =>
    jsx(
      'svg',
      {
        className,
        css: {
          height: height,
          width: width,
          viewBox: viewBox,
          animation: `${rotate} 2s linear infinite`,
        },
        style,
      },
      children
    );

  return (
    <LoaderWrapperContext.Provider value={initialLoaderDimensions}>
      <LoaderConsumer />
    </LoaderWrapperContext.Provider>
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
