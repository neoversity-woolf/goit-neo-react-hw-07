import { useSelector } from 'react-redux';
import { Contact, ContactsSkeleton } from '@components';
import {
  selectVisibleContacts,
  selectError,
  selectLoading,
} from '../../redux/selectors';

import css from './ContactList.module.css';

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <h2>Contact list</h2>
      {loading && !error && <ContactsSkeleton cardsAmount={visibleContacts} />}

      <ul className={css.list}>
        {visibleContacts.length > 0 &&
          visibleContacts.map(contact => (
            <Contact key={contact.id} {...contact} />
          ))}
      </ul>
    </div>
  );
}
