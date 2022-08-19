import { Fragment } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "../UI/Card";
import BookImage from "../../assets/book.png";

const Books = () => {
    return ( 
        <Fragment>
            <p className="mb-0"><strong> RECOMMENDED BOOKS</strong></p>
            <Row>
                <Col md={4} className="pt-3">
                    <Card >
                        <img src={BookImage} alt="" className="img-fluid"/>
                        <p>Edipo Rey</p>
                        <p className="text-start">- Sofocles</p>
                    </Card>
                </Col>    
                <Col md={4} className="pt-3">
                    <Card >
                        <img src={BookImage} alt="" className="img-fluid"/>
                        <p>Edipo Rey</p>
                        <p className="text-start">- Sofocles</p>
                    </Card>
                </Col>    
                <Col md={4} className="pt-3">
                    <Card >
                        <img src={BookImage} alt="" className="img-fluid"/>
                        <p>Edipo Rey</p>
                        <p className="text-start">- Sofocles</p>
                    </Card>
                </Col>                
                <Col md={4} className="pt-3">
                    <Card >
                        <img src={BookImage} alt="" className="img-fluid"/>
                        <p>Edipo Rey</p>
                        <p className="text-start">- Sofocles</p>
                    </Card>
                </Col>    
            </Row>
        </Fragment>

     );
}
 
export default Books;