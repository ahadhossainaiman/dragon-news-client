import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummeryCard = ({ news }) => {
  console.log(news);
  const {
    author,
    _id,
    details,
    image_url,
    total_view,
    title,
    rating,
    thumbnail_url,
  } = news;
  return (
    <div>
      <Card className="mb-5">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Image src={author.img} style={{ width: "60px" }} roundedCircle />
            <div className="ms-3">
              <p className="m-0 p-0">{author?.name}</p>
              <small>{author?.published_date}</small>
            </div>
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 250) + "..."}
                <Link to={`/news/${_id}`}>Read More</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <FaStar className="text-warning me-2"></FaStar>
              <span>{rating?.number}</span>
            </div>
            <div>
              <FaEye className="me-2"></FaEye>
              <span>{total_view}</span>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummeryCard;
