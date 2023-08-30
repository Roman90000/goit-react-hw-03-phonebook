export const Contacts = props => {
  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {props.map(prop => (
          <li>{prop}</li>
        ))}
      </ul>
    </div>
  );
};
