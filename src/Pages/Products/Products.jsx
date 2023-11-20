import React from 'react'
import "./products.scss"
import Container from "../../Component/Container/Container";
import  products  from "../../utilities/productData";

const Products = React.forwardRef( ( props, ref ) => {

    return (
      <Container>
        <div className="products" ref={ref}>
          <div className="top">
            <div className="top-heading"> Our Products</div>
            <p className="top-content"> The Janak Knowledge <span> Engine </span></p>
          </div>

          <div className="products-bottom">
            {products.map( ( product ) => {
              return (
                <div className="singleProduct">
                  <div className="singleProduct-content">
                    <p className="singleProduct-content-head">{product.head}</p>
                    <p className="singleProduct-content-detail">{product.content}</p>
                  </div>
                  <img className="svg" src={product.svg}/>
                </div>
              )
            } )}
          </div>
        </div>
      </Container>

    )
  }
)
export default Products;