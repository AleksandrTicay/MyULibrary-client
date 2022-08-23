import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MenuLibrarian from "./MenuLibrarian";

const LibrarianContainer = () => {
    return ( 
        <Container>
            <Row>
                <Col md={3}>
                    <MenuLibrarian/>
                </Col>
                <Col md={9}>
                </Col>
            </Row>
        </Container>
     );
}
 
export default LibrarianContainer;