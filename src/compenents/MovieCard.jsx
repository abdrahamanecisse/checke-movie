import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-stars";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img style={{height:"18rem", objectFit:"contain"}} variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>
          <b>{movie.title}</b>
        </Card.Title>
        <Card.Text style={{minHeight:"5rem",maxHeight:"5rem",border:"1px solid lightgray",padding:"0.5rem",overflow:"scroll",borderRadius:"5px"}}>{movie.description}</Card.Text>
        <div className="d-flex justify-content-between ">
          <p className="py-2"> Rating:{movie.rate} /5</p>
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            edit={false}
            value={movie.rate}
          />
        </div>

        <div className="d-flex justify-content-between">
          <Button variant="outline-dark">Watch Trailer</Button>
          <Button variant="dark">Download</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
