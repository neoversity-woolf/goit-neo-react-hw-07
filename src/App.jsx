import { useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/operations';
import { ContactForm, SearchBox, ContactList } from '@components';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <SkeletonTheme baseColor="#e2e2e2" highlightColor="#f5a63780">
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </SkeletonTheme>
  );
}
