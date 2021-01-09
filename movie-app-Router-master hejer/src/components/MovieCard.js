import { Card } from "antd";
import StarRating from "./StarRating";
import "../index.css";
import { Link } from "react-router-dom";

const { Meta } = Card;

function MovieCard({ film }) {
  const addStar = () => {};
  const { id, title, posterUrl, rate, description } = film;
  return (
    <div className="movieCard ">
      <Link to={`/movie/${id}`}>
        <Card
          id={id}
          hoverable
          style={{ width: 240, height: "300px" }}
          cover={<img alt={title} src={posterUrl} />}
        >
          <div className="title">{title}</div>
          <div className="StarRating">
            <StarRating rate={rate} addStar={addStar} />
          </div>
        </Card>
      </Link>
    </div>
  );
}

export default MovieCard;
