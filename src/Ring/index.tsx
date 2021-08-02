import './index.css';

interface RingProps {
  color: string;
  radius: number;
  strokeWidth: number;
}

const Ring = ({ color, radius, strokeWidth }: RingProps) => {
  return (
    <circle
      className="ring"
      cx="50"
      cy="50"
      r={radius}
      stroke={color}
      strokeWidth={strokeWidth}
    />
  );
};

export { Ring };
