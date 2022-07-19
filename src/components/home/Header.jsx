import SearchBar from "../layout/SearchBar";
import Container from "../utilities/Container";
import Banner from "./Banner";

const Header = () => {
  return (
    <Container>
      <h2 className="my-6 text-3xl md:text-5xl font-extrabold text-center animate__animated animate__fadeIn">
        Vende y Compra
      </h2>
      <p className="mb-6 text-lg md:text-2xl font-semibold text-center capitalize animate__animated animate__fadeIn">
        Cosas de Segunda Mano, busca cobre y encontrarás oro 🤑
      </p>
      <SearchBar />
      <Banner />
    </Container>
  );
};

export default Header;
