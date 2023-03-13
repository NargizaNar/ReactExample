export default function ListItem(props) {
  const { name, species, origin, image } = props;

  // const TestObjekt = {
  //     name: "Steven",
  //     species: "Mensch",
  //     origin: "Deutschland"
  //     image: "url"
  // }

  return (
    <div className="card">
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{species}</p>
      <p>{origin}</p>
    </div>
  );
}
