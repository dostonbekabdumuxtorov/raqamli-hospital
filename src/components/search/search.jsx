import SearchImg from "../../assets/svg/icon-search-white.svg";
import Container from "../container/container";
import "./search.scss";
function Search() {
  return (
    <Container>
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Qidiruv.."
        />
        <button className="search__btn">
          <img src={SearchImg} alt="This is a search icon" />
          Qidiruv
        </button>
      </div>
    </Container>
  );
}
export default Search;
