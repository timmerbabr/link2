import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBox() {
  return (
    <div className="box">
      <input type="checkbox" id="check" />
      <div className="search-box">
        <input type="text" placeholder="Type here...." />
        <label htmlFor="check" className="icon">
          <FontAwesomeIcon icon={faSearch} />
        </label>
      </div>
    </div>
  );
}