import React from 'react';
import { Loader } from '../src/Loader';
import { Ring } from '../src/Ring';

const setup = {
  backgroundColor: '#171652',
  height: '100vh',
  width: '100vw',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default {
  title: 'Ring',
  component: DefaultRing,
};

export const DefaultRing = () => {
  return (
    <div style={setup}>
      <Loader>
        <Ring />
      </Loader>
    </div>
  );
};
