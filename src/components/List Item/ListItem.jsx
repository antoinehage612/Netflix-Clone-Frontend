import { useEffect, useState } from "react";
import "./ListItem.scss";
import { IoMdAdd } from "react-icons/io";
import {
  MdPlayArrow,
  MdOutlineThumbUpOffAlt,
  MdOutlineThumbDownOffAlt,
} from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmNjNTA3NjYyZWI4NmZhNmZmY2QzYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzExNzY3MywiZXhwIjoxNzA3NTQ5NjczfQ.MWVdQcXjU8ZoJjfozGXPDLmInyqQmFiL1ExMvm8zaWI",
          },
        });

        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to="/watch" state={{ movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.imgSm} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <MdPlayArrow className="icon" />
                <IoMdAdd className="icon" />
                <MdOutlineThumbUpOffAlt className="icon" />
                <MdOutlineThumbDownOffAlt className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="description">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
