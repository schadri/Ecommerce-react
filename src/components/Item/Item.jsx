import React from "react";
import {Card, Button, Container} from "react-bootstrap"
import "./item.css"
import { Link } from "react-router-dom";
export const Item = ({ id, name, description, price, image, category }) => {

  return (
    <div className="item">
    <><div >
        <Card style={{ width: '18rem' }}>
        
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          <Container className="contenedor"><Card.Img  variant="top" src={image} /></Container>
            <Card.Title className="category" title={category}>Categoria: {category}</Card.Title>
            <Card.Title>{description}</Card.Title>
            <Card.Title>{price}</Card.Title>
            <Link to={`/detail/${id}`}>
            <Button variant="primary" id="masDetalles">Ver mas detalles</Button>
            </Link>
            
          </Card.Body>
        </Card>
      </div></></div>
    
  );






};

