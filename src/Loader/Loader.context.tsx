import { createContext } from 'react';

const initialLoaderDimensions = { height: 500, width: 500 };
const LoaderWrapperContext = createContext(initialLoaderDimensions);

export { LoaderWrapperContext, initialLoaderDimensions };
