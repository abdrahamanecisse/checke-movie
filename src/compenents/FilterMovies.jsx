import React from 'react'
import { Form } from 'react-bootstrap';
import { TbAdjustmentsSearch } from 'react-icons/tb';
import ReactStars from 'react-stars';

const FilterMovies = ({filterTitle, setFilterTitle,filterRate,setFilterRate}) => {
  return (
    <div className="d-flex align-items-center">
      <Form.Label>
        <TbAdjustmentsSearch style={{ fontSize: "26px", margin: "2px 10px" }} />
      </Form.Label>
      <Form.Control
        style={{ width: "15rem" }}
        type="text"
        placeholder="Filter movies by title"
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <p style={{ margin: "2px 10px" }}>by Rate:</p>
      <ReactStars
        value={filterRate}
        count={5}
        size={30}
        color2={"#ffd700"}
        half={false}
        onChange={(rate) => setFilterRate(rate)}
      />
    </div>
  );
}

export default FilterMovies