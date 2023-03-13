import Footer from "../../components/Footer";
import store from "../../store/Context";
import ListOfAllItems from "../../components/ListOfAllItems";

export default function About() {
  const { about } = store().data;

  return (
    <div className="page">
      <h1>{about.title}</h1>
      <p>{about.information}</p>
      <ListOfAllItems cards={store().cards} />
      <Footer />
    </div>
  );
}
