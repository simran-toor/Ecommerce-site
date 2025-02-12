import products from "../products.jsx"
import { Row, Col } from "react-bootstrap"

const HomePage = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <h3>{product.name}</h3>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomePage