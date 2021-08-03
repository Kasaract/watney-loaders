import { createContext } from 'react';

import { Loader, LoaderProps } from '../Loader';

const initialLoaderDimensions = { height: 500, width: 500 };
const LoaderWrapperContext = createContext(initialLoaderDimensions);

const LoaderWrapper = (props: LoaderProps) => {
  return (
    <LoaderWrapperContext.Provider value={initialLoaderDimensions}>
      <Loader {...props} />
    </LoaderWrapperContext.Provider>
  );
};

export { LoaderWrapperContext };
export default LoaderWrapper;
