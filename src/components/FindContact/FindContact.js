import { Container } from './FindContact.styled';
import { List, ListItem, ItemName } from './FindContact.styled';

export const FindContact = ({ onFilterName, filter }) => {
  return (
    <Container>
      <h2>Find contacts by name</h2>
      <label>
        <input
          type="text"
          placeholder="Find..."
          onChange={e => {
            onFilterName(e.target.value);
          }}
        ></input>
      </label>

      <List>
        {filter.map(({ id, name, number }) => (
          <ListItem key={id}>
            <ItemName>{name} : </ItemName>
            <ItemName>{number}</ItemName>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
