import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Bookform from "../librarian/BookForm";
import UserForm from "../librarian/UserForm";
import UserRecord from "../librarian/UserRecord";

const MenuLibrarian = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col md={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first"><i className="ri-history-line"></i>Record</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second"><i className="ri-user-line"></i>Add User</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third"><i className="ri-book-2-line"></i>Add Book</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={{ span: 6, offset: 1 }}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <UserRecord/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <UserForm/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Bookform/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default MenuLibrarian;
