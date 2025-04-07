import NavBar1 from "./NavBar1";
import './App.css';
import NavBar2 from "./NavBar2";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import flower from "./assets/tabs/birthday/flowers.webp";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import InputGroup from 'react-bootstrap/InputGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import paytm from './assets/offers/paytm.svg'
import info from './assets/offers/info.svg'
import oliveCart from './assets/offers/oliveCart.svg'
import buyCart from './assets/offers/buyCart.svg'
function GiftPage() {
    return (
        <>
            <div className="navBars">
                <NavBar1 />
                <NavBar2 />
            </div>
            <br />
            <Breadcrumb className="bread">
                <Breadcrumb.Item href="/"><span className="link-color">Home</span></Breadcrumb.Item>
                <Breadcrumb.Item active>Angelic Rose Bouquet & Black Forest Birthday Bliss</Breadcrumb.Item>
            </Breadcrumb>
            <div className="full-category">
                <div className="image-container">
                    <Container>
                        <Image src={flower} className="flower-image" />
                    </Container>
                </div>
                <div className="right-side-data">
                    <div className="image-details">
                        <p>Angelic Rose Bouquet & Black Forest Birthday Bliss</p>
                        <p>₹ 799 <span className="strike"><s>₹ 849</s></span></p>
                    </div>
                    <div className="image-details">
                        <p>Gift Receiver's Location</p>
                    </div>
                    <div className="mobile-number">
                        <ButtonToolbar className="mb-3 custom-width" aria-label="Toolbar with Button groups">
                            <InputGroup>
                                <InputGroup.Text id="btnGroupAddon">🇮🇳 IND</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Receiver's Pincode..."
                                    aria-label="Input group example"
                                    aria-describedby="btnGroupAddon"
                                    className="form-control-lg"
                                />
                            </InputGroup>
                        </ButtonToolbar>
                    </div>
                    <div className="image-detail">
                        <p>Select Delivery Date & Time Slot</p>
                    </div>
                    <div style={{ padding: '20px' }} className="date">
                        <Form>
                        <Form.Group controlId="formDatePicker">
                        <DatePicker
                            className="form-control date-picker-input "
                            dateFormat="MMMM d, yyyy"
                            placeholderText="Select a date"
                        />
                        </Form.Group>
                        </Form>
                    </div>
                    <div className="offer-details">
                        <p>Offers Available</p>
                    </div>
                    <div>
                    <Container
                        className="position-relative my-2 d-flex align-items-center justify-content-between border rounded paytm-bg"
                        style={{height:'70px' ,borderRadius: '1rem' }}
                    >
                    <div className="paytm-class"><img src={paytm} alt="paytm" className="paytm-logo"/>
                        <p className="paytm-details">Assured Cashback up to Rs.100 using Paytm UPI</p>
                    </div>
                    <div>
                        <img src={info} alt="info" className="info-logo"/>
                    </div>
                    </Container>
                    </div>

                    <div>
                    <button className="addCart"><img src={oliveCart} alt="addcart" /> Add To Cart</button>
                    <button className="bookNow"><img src={buyCart} alt="addcart" /> Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GiftPage;
