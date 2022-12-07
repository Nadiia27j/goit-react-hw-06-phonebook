import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, getContacts, getFilter } from 'redux/contactsSlice';
import { List, Item, ButtonDelete } from './ContactList.styled';

export default function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filtered = useSelector(getFilter);

    const visibleContacts = () => {
        const normalizedFilter = filtered.toLowerCase();
    
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    const filteredContacts = visibleContacts();


    return (
      <List>
        {filteredContacts.map(({ name, number, id }) => (
        <Item key={id}>
          <span>
            {name}: {number}
          </span>
          <ButtonDelete type="button" onClick={() => dispatch(deleteContacts(id))} >
            Delete
          </ButtonDelete>
        </Item>
       ))}
      </List>
    )
}