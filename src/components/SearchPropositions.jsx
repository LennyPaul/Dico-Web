import { SearchProposition } from "./SearchProposition";
export const SearchPropositions = ({ propositions, goToDefinition }) => {
  if (!propositions) {
    return;
  } else {
    return (
      <ul>
        {propositions.map((proposition) => (
          <SearchProposition
            proposition={proposition}
            key={proposition.id}
            goToDefinition={goToDefinition}
          />
        ))}
      </ul>
    );
  }
};
