import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h2>Naxa Task</h2>
      <ul>
        <Link to="/map">
          <li className="border border-black px-4 py-2 mr-2 rounded w-auto inline-block">
            Map
          </li>
        </Link>
        <Link to="/form">
          <li className="border border-black px-4 py-2  mr-2 rounded w-auto inline-block">
            Form Validation
          </li>
        </Link>
        <Link to="/projects/keyhighlights">
          <li className="border border-black px-4 py-2 rounded w-auto inline-block">
            Projects
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Homepage;
