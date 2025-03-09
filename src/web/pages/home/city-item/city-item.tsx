import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import './city-item.css';

type Props = {
  city: string;
  description?: string;
};

export function CityItem({ city, description }: Props) {
  return (
    <li>
      <Link
        to="#"
        className="city-item flex items-center rounded-xl cursor-pointer py-2 pl-4 pr-6"
      >
        <div className="w-full py-1.5">
          <h3 className="text--body-large">{city}</h3>
          {description && (
            <p
              className="text--body-medium"
              style={{ color: 'var(--on-surface-variant)' }}
            >
              {description}
            </p>
          )}
        </div>
        <MdArrowForward size="1.5rem" color="currentColor" />
      </Link>
    </li>
  );
}
