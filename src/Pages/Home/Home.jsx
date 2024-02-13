import axios from "axios";
import { useEffect, useState } from "react";

import "./Home.scss";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";
import Featured from "../../components/Featured/Featured";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmNjNTA3NjYyZWI4NmZhNmZmY2QzYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzExNzY3MywiZXhwIjoxNzA3NTQ5NjczfQ.MWVdQcXjU8ZoJjfozGXPDLmInyqQmFiL1ExMvm8zaWI",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <NavBar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
