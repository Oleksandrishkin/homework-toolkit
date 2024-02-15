import { useDeleteContactMutation, useGetContactsQuery } from '../redux/APIslice';
import { Button, Title, Wrapper } from './PhoneBook.styled';
import { FormPhoneBook } from './FormPhoneBook';
import { useEffect } from 'react';

export const PhoneBook = () => {
  const { data: contacts, isLoading, isError } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  useEffect(() => {

  }, []);

  const handleDeleteContact = async (contactId) => {
    try {
      await deleteContact(contactId);
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching contacts</div>;

  return (
    <Wrapper>
      <Title>Phone Book</Title>



      <Title>Contacts</Title>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Title key={id}>
            <p>
              {name}: {number}
            </p>
            <Button type="button" disabled={isDeleting} onClick={() => handleDeleteContact(id)}>
              {isDeleting ? 'Deleting...' : 'Delete'}
            </Button>
          </Title>
        ))}
      </ul>
    </Wrapper>
  );
};