import { useSelector } from 'react-redux';
import { Contact, ContactsSkeleton } from '@components';
import {
  selectFilteredContacts,
  selectError,
  selectLoading,
} from '../../redux/selectors';

import css from './ContactList.module.css';

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <h2>Contact list</h2>
      {loading && !error && <ContactsSkeleton />}

      {!loading && (
        <ul className={css.list}>
          {visibleContacts.length > 0 &&
            visibleContacts.map(contact => (
              <Contact key={contact.id} {...contact} />
            ))}
        </ul>
      )}
    </div>
  );
}
