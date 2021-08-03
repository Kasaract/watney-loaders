import { Loader } from './Loader';
import { Ring } from './Ring';

export default function App() {
  return (
    <div
      style={{
        backgroundColor: '#171652',
        height: '100vh',
        width: '100vw',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Loader>
        <Ring />
      </Loader>
    </div>
  );
}
