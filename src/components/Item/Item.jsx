import React from "react";
import { Card, Button, Container } from "react-bootstrap"
import "./item.css"
import { Link } from "react-router-dom";
export const Item = ({ id, name, description, price, image, category }) => {

  return (
    <div className="item">
      <div>
        <Card className="my-3" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title className="category" title={category}>
              Categoria: {category}
            </Card.Title>
            <Container className="contenedor">
              <Card.Img variant="top" src={image} id="photo-main"/>
            </Container>
            <Card.Title className="text-center">{description}</Card.Title>
            <Card.Title className="text-center">${price}</Card.Title>
            <div className="d-flex justify-content-center">
              <Link to={`/detail/${id}`}>
                <Button variant="primary" id="masDetalles">Ver mas detalles</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

