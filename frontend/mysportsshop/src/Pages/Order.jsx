import useCart from "../Hooks/useCart"
import NavBar from "../Components/NavBar"
import useLogin from "../Hooks/useLogin";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import '../CSS/order.css'
import '../CSS/cart.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import useProfile from "../Hooks/useProfile";

function BillingLoggedIn() {
    const { error, isError, isLoading, data } = useProfile();
    return (
        <>
            <div style={{ margin: '3%', textAlign: 'center' }}>
                <h3>Billing Details</h3>
            </div>
            <Form style={{ margin: '3%' }}>
                <InputGroup className="mb-3 size" style={{ margin: '2%' }}>
                    <InputGroup.Text id="basic-addon1" className="color">Name</InputGroup.Text>
                    <Form.Control
                        defaultValue={data && data.username ? data.username : ""}
                        placeholder="Recipient's Name"
                        aria-label="Recipient's name"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3 size" style={{ margin: '2%' }}>
                    <InputGroup.Text id="basic-addon2" className="color">Phone Number</InputGroup.Text>
                    <Form.Control
                        defaultValue={data && data.phoneNumber ? data.phoneNumber : ""}
                        placeholder="Recipient's Phone Number"
                        aria-label="Recipient's phoneNum"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>

                <InputGroup className="mb-3 size" style={{ margin: '2%' }}>
                    <InputGroup.Text id="basic-addon3" className="color">Email</InputGroup.Text>
                    <Form.Control
                        defaultValue={data && data.email ? data.email : ""}
                        placeholder="Recipient's Phone Email"
                        aria-label="Recipient's email"
                        aria-describedby="basic-addon3"
                    />
                </InputGroup>

                <InputGroup className="mb-3 " style={{ margin: '2%' }}>
                    <InputGroup.Text id="basic-addon4" className="color">Street Addr</InputGroup.Text>
                    <Form.Control
                        defaultValue={data && data.Address[0] ? data.Address[0].address : ""}
                        placeholder="Street Address"
                        aria-label="Recipient's address"
                        aria-describedby="basic-addon4"
                    />

                    <InputGroup.Text id="basic-addon5" className="color">City</InputGroup.Text>
                    <Form.Control
                        defaultValue={data && data.Address[0] ? data.Address[0].city : ""}
                        placeholder="City"
                        aria-label="Recipient's city"
                        aria-describedby="basic-addon5"
                    />

                    <InputGroup.Text id="basic-addon6" className="color">Country</InputGroup.Text>
                    <Form.Control
                        defaultValue={data && data.Address[0] ? data.Address[0].country : ""}
                        placeholder="Country"
                        aria-label="Recipient's county"
                        aria-describedby="basic-addon6"
                    />
                </InputGroup>
            </Form>
        </>
    );
}

function BillingDetails() {
    return (
        <>
            <div style={{ margin: '3%', textAlign: 'center' }}>
                <h3>Billing Details</h3>
            </div>
            <Form style={{ margin: '3%' }}>
                <InputGroup className="mb-3 size" style={{ margin: '2%' }}>
                    <InputGroup.Text id="basic-addon1" className="color">Name</InputGroup.Text>
                    <Form.Control
                        placeholder="Recipient's Name"
                        aria-label="Recipient's name"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3 size" style={{ margin: '2%' }}>
                    <InputGroup.Text id="basic-addon2" className="color">Phone Number</InputGroup.Text>
                    <Form.Control
                        placeholder="Recipient's Phone Number"
                        aria-label="Recipient's phoneNum"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>

                <InputGroup className="mb-3 size" style={{ margin: '2%' }}>
                    <InputGroup.Text id="basic-addon3" className="color">Email</InputGroup.Text>
                    <Form.Control
                        placeholder="Recipient's Phone Email"
                        aria-label="Recipient's email"
                        aria-describedby="basic-addon3"
                    />
                </InputGroup>

                <InputGroup className="mb-3 " style={{ margin: '2%' }}>
                    <InputGroup.Text id="basic-addon4" className="color">Street Addr</InputGroup.Text>
                    <Form.Control
                        placeholder="Street Address"
                        aria-label="Recipient's address"
                        aria-describedby="basic-addon4"
                    />

                    <InputGroup.Text id="basic-addon5" className="color">City</InputGroup.Text>
                    <Form.Control
                        placeholder="City"
                        aria-label="Recipient's city"
                        aria-describedby="basic-addon5"
                    />

                    <InputGroup.Text id="basic-addon6" className="color">Country</InputGroup.Text>
                    <Form.Control
                        placeholder="Country"
                        aria-label="Recipient's county"
                        aria-describedby="basic-addon6"
                    />
                </InputGroup>
            </Form>
        </>
    );
}

function OrderDetails() {
    const { products } = useCart();
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Your Order</h3>
            {products && products.length > 0 &&
                (products.map((item, index) => {
                    return (
                        <Container className="titleborder" key={index}>
                            <Row>
                                <Col>
                                    <img alt={index}
                                        src={item.image}
                                        width="90px"
                                    />
                                </Col>
                                <Col xs={7}>
                                    <b>{item.productname}</b><br></br>
                                    {item.quantity} x ${item.unitprice}<br></br>
                                </Col>
                                <Col>
                                    <p><b>Color: </b><span>{item.options[0]}</span></p>
                                    <p><b>Size: </b><span>{item.options[1]}</span></p>
                                </Col>
                            </Row>
                        </Container>
                    );
                }))
            }
        </div>
    );
}

function Billing() {
    const { totalAmount, AmountDisc } = useCart();

    return (
        <div style={{ textAlign: 'center', paddingBottom: '4%' }}>
            <div className="d-grid gap-2 payment">
                <Row>
                    <Col>
                        <h3>Your Final Bill</h3>
                    </Col>
                </Row>
                <Row>
                    <Col><b>SubTotal:</b></Col>
                    <Col>{totalAmount}</Col>
                </Row>
                <Row>
                    <Col><b>Discount Applied:</b></Col>
                    <Col>{totalAmount - AmountDisc}</Col>
                </Row>
                <Row>
                    <Col><b>Payable Total:</b></Col>
                    <Col>{AmountDisc}</Col>
                </Row>
            </div>
        </div>
    );
}

function Payment() {
    const { paymentMethod } = useCart();

    return (
        <>
            {paymentMethod == 'cash on delivery' &&
                <div style={{marginBottom: '2%'}}><b>Payment Method:</b> {paymentMethod}</div>
            }
            
            <div className="d-grid gap-2">
                <Button variant="outline-warning" size="lg">Place Order</Button>
            </div>
        </>
    );
}

function Order() {
    const { login } = useLogin();
    return (
        <>
            <NavBar />
            <div style={{
                textAlign: 'center',
                margin: '3%',
                borderBottom: '2px solid rgb(150, 1, 1)'
            }}>
                <h1>Welcome to CheckOut</h1>
            </div>
            <div style={{ borderBottom: '2px solid rgb(150, 1, 1)', margin: '2%' }}>
                {login && <BillingLoggedIn />}
                {!login && <BillingDetails />}
            </div>
            <div style={{ margin: '4%', borderBottom: '2px solid rgb(150, 1, 1)' }}>
                <OrderDetails />
            </div>
            <div style={{ margin: '4%', borderBottom: '2px solid rgb(150, 1, 1)' }}>
                <Billing />
            </div>
            <div style={{ margin: '4%', borderBottom: '2px solid rgb(150, 1, 1)' }}>
                <Payment />
            </div>

        </>
    )
}

export default Order