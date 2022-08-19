import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Books from "../Book/Books";
import Sidebar from "./Sidebar";

const BooksContainer = () => {
    return ( 
        <Container className="py-5">
            <Row>
                <Col md={8}>
                    <Books/>                    
                </Col>
                <Col md={4}>
                    <Sidebar/>
                </Col>
            </Row>
        </Container>
     );
}
 
export default BooksContainer;