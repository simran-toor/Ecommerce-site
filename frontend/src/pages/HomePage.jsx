import { useState, useEffect } from "react";
//import products from "../products.jsx"
import Product from "../components/Product"
import { Row, Col } from "react-bootstrap"

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
    }, []);

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomePage