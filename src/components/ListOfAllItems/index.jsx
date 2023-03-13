import ListItem from "./ListItem";

export default function ListOfAllItems(props) {
  const { cards } = props;
  /// cards = store().cards

  return (
    <div className="list-of-all-items">
      {cards
        ? cards.map((card) => {
            return (
              <ListItem
                key={card.id}
                name={card.name}
                species={card.species}
                origin={card.origin.name}
                image={card.image}
              />
            );
            // return <ListItem key={card.name} {...card} />
          })
        : "no cards"}
    </div>
  );
}
