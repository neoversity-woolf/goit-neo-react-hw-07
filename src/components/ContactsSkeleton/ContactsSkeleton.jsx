import Skeleton from 'react-loading-skeleton';
import { PiUserCircleDuotone, PiPhoneDuotone } from 'react-icons/pi';

import css from './ContactsSkeleton.module.css';
import 'react-loading-skeleton/dist/skeleton.css';

function ContactsSkeleton({ cardsAmount } = {}) {
  return (
    <ul className={css.list}>
      {Array(!cardsAmount ? cardsAmount : 4)
        .fill()
        .map((_, idx) => (
          <li className={css.contact} key={idx}>
            <div className={css.avatar}>
              <Skeleton circle width={72} height={72} />
            </div>
            <div className={css.details}>
              <p className={css.field}>
                <PiUserCircleDuotone size={28} />
                <span className={css.fieldItem}>
                  <Skeleton count={2} />
                </span>
              </p>
              <p className={css.field}>
                <PiPhoneDuotone size={28} />
                <span className={css.fieldItem}>
                  <Skeleton />
                </span>
              </p>
            </div>
            <button className={css.btn}>
              <Skeleton />
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ContactsSkeleton;
