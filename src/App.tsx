import Loader from './LoaderWrapper';
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
        <Ring color="yellow" radius={100} strokeWidth={10} />
      </Loader>
    </div>
  );
}
