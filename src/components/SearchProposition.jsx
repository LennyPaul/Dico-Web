export const SearchProposition = ({ proposition, goToDefinition }) => (
  <li onClick={() => goToDefinition(proposition.id)}>
    <span>{proposition.name}</span>
  </li>
);
