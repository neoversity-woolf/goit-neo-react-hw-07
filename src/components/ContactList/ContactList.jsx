import { useSelector } from 'react-redux';
import { Contact } from '@components';
import { selectContacts, selectNameFilter } from '../../redux/selectors';

import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const searchName = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchName)
  );

  return (
    <div>
      <h2>Contact list</h2>
      <ul className={css.list}>
        {!!visibleContacts.length &&
          visibleContacts.map(contact => (
            <Contact key={contact.id} {...contact} />
          ))}
      </ul>
    </div>
  );
}
