import { MdDirectionsCarFilled } from 'react-icons/md';

export function VehiclePictogram() {
  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width="192"
        height="192"
        viewBox="0 0 201 201"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.3497 77.1171C25.0955 6.3481 53.0475 -10.3961 123.816 7.3497C194.585 25.0955 211.33 53.0475 193.584 123.816C175.838 194.585 147.886 211.33 77.1171 193.584C6.3481 175.838 -10.3961 147.886 7.3497 77.1171Z"
          fill="#F8DFBB"
        />
      </svg>

      <MdDirectionsCarFilled
        size="8rem"
        color="var(--on-primary-fixed-variant)"
        style={{
          position: 'absolute',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 0,
          right: 0,
        }}
      />
    </div>
  );
}
