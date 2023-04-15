import React from "react";
import {Card, Button} from "react-bootstrap"
import "./item.css"
import { Link } from "react-router-dom";
export const Item = ({ id, description, price, image, category }) => {

  return (
    <div className="item">
    <><div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Categoria: {category}</Card.Title>
            <Card.Title>{description}</Card.Title>
            <Card.Title>{price}</Card.Title>
            <Card.Title>SKU: {id}</Card.Title>
            <Link to={`/detail/${id}`}>
            <Button variant="primary">Ver mas detalles</Button>
            </Link>
            
          </Card.Body>
        </Card>
      </div></></div>
    
  );






};

