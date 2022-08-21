import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewBooks from "../Book/NewBooks";

const NewBooksContainer = () => {
    return ( 
        <Container className="py-5">
            <p className="h4 fw-bolder">New Releases</p>
            <Row className="pt-4">                
                <Col md={4}>
                    <NewBooks/>                    
                </Col>
            </Row>
        </Container>
     );
}
 
export default NewBooksContainer;