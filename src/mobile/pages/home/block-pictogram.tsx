import { MdBlock } from 'react-icons/md';

export function BlockPictogram() {
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
          d="M6.41843 52.9751C20.5782 3.59403 40.6438 -7.52848 90.0249 6.63132C139.406 20.7911 150.528 40.8567 136.369 90.2378C122.209 139.619 102.143 150.741 52.7622 136.582C3.38114 122.422 -7.74138 102.356 6.41843 52.9751Z"
          fill="#FFE2DE"
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
          d="M0.372253 50.9594C0.372253 12.6751 12.462 0.585327 50.7463 0.585327C89.0306 0.585327 101.12 12.6751 101.12 50.9594C101.12 89.2436 89.0306 101.333 50.7463 101.333C12.462 101.333 0.372253 89.2436 0.372253 50.9594Z"
          fill="#FF5449"
        />
      </svg>

      <MdBlock
        size="4.68625rem"
        color="var(--white)"
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
