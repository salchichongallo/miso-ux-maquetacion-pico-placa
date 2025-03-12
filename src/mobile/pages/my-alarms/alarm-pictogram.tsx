import { MdNotificationsActive } from 'react-icons/md';

export function AlarmPictogram() {
  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      <svg
        width="143"
        height="143"
        viewBox="0 0 143 143"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.41849 52.9751C20.5783 3.59403 40.6438 -7.52848 90.0249 6.63132C139.406 20.7911 150.529 40.8567 136.369 90.2378C122.209 139.619 102.143 150.741 52.7623 136.582C3.3812 122.422 -7.74131 102.356 6.41849 52.9751Z"
          fill="#F5ECE4"
        />
      </svg>

      <svg
        style={{
          position: 'absolute',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 0,
          right: 0,
        }}
        width="102"
        height="102"
        viewBox="0 0 102 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.372314 50.9595C0.372314 12.6752 12.4621 0.585449 50.7463 0.585449C89.0306 0.585449 101.12 12.6752 101.12 50.9595C101.12 89.2438 89.0306 101.334 50.7463 101.334C12.4621 101.334 0.372314 89.2438 0.372314 50.9595Z"
          fill="#F8DFBB"
        />
      </svg>

      <MdNotificationsActive
        size="4.68625rem"
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
