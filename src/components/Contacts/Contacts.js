import {
  Container,
  List,
  ListItem,
  ItemBtn,
  Title,
  ItemName,
} from './Contacts.styled';

export const Contacts = ({ contacts, onContactsDelete }) => {
  return (
    <Container>
      <Title>Contacts</Title>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <ItemName>{name} : </ItemName>
            <span>{number}</span>
            <ItemBtn
              type="button"
              onClick={() => {
                onContactsDelete(id);
              }}
            >
              Delete
            </ItemBtn>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
