import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const searchId = useId();

  return (
    <fieldset className={css.search}>
      <legend className="visually-hidden">Search form</legend>
      <label className={css.label} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        className={css.field}
        type="search"
        name="seacrhContact"
        id={searchId}
        value={value}
        onChange={evt => {
          const searchName = evt.target.value.toLowerCase().trim();
          dispatch(changeFilter({ searchName }));
        }}
      />
    </fieldset>
  );
}
