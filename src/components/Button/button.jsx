import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import { Link } from "react-router-dom";
import "./boton.css"
export const Barra = () => {
  const [dropdown, setDropdown] = useState(false);

  const abrirCerrarDropdown= () => {
    setDropdown(!dropdown)
  }

  const categories = [
    {link:"/productos/electrodomestico", name: "Electrodomesticos"},
    {link:"/productos/ropa", name: "Ropa"},
    // {link:"/productos/mueble", name: "Mueble"},
    // {link:"/productos/limpieza", name: "Limpieza"},
    {link:"/", name: "Limpiar Filtros"},
  ]

  return (
    <div >
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
          <DropdownToggle className='test' caret>Filtros</DropdownToggle>
        <DropdownMenu className='test' >
          <DropdownItem header >Categorias</DropdownItem>
          <DropdownItem divider />
          {categories.map((category) => {
            return <>
                <Link to={category.link} className='link_category_item'><DropdownItem >{category.name}</DropdownItem></Link>
                <DropdownItem divider />
            </>
          })}  
        </DropdownMenu>
          
        </Dropdown>
    </div>
  )
}


