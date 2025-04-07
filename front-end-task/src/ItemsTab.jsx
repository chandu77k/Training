import React from "react";
import './App.css'
import { useNavigate } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import flower from "./assets/tabs/birthday/flowers.webp";
import cake from "./assets/tabs/birthday/cake.webp";
import mug from "./assets/tabs/birthday/mug.webp";
import plant from "./assets/tabs/birthday/plant.webp";
import blooming from "./assets/tabs/anniversary/blooming.webp";
import frame from "./assets/tabs/anniversary/frame.webp";
import gift from "./assets/tabs/anniversary/gift.webp";
import plantMug from "./assets/tabs/anniversary/plantMug.webp";
import calendar from "./assets/tabs/congratulations/calendar.webp";
import chocolates from "./assets/tabs/congratulations/chocolates.webp";
import jar from "./assets/tabs/congratulations/jar.webp";
import rose from "./assets/tabs/congratulations/rose.webp";
import wrapped from "./assets/tabs/loveNromance/wrapped.webp";
import speaker from "./assets/tabs/loveNromance/speaker.webp";
import bonsai from "./assets/tabs/loveNromance/bonsai.webp";
import loveCake from "./assets/tabs/loveNromance/loveCake.webp";
import bunch from "./assets/tabs/thankYou/bunch.webp";
import golden from "./assets/tabs/thankYou/goldenCake.webp";
import pot from "./assets/tabs/thankYou/pot.webp";
import thankYou from "./assets/tabs/thankYou/thankYouFrame.webp";
import birthdayLogo from "./assets/tabs/birthday/birthday-logo.png"
import anniversarylogo from "./assets/tabs/anniversary/anniversary-logo.png";
import congratslogo from "./assets/tabs/congratulations/congrats-logo.png";
import lovelogo from "./assets/tabs/loveNromance/love-logo.png";
import thankslogo from "./assets/tabs/thankYou/thanks-logo.png";

const TabTitleWithLogo = ({ logoSrc, title }) => {
  return (
    <>
    <div className="title-content">
    <div className="d-flex align-items-center logo-center">
    <img src={logoSrc} alt={title} style={{ width: "24px", height: "24px"}} className="logo-position"/>
    </div>
    <div className="title-color">
    {title}
    </div>
    </div>
      </>
  );
};

function ItemsTab() {
    const navigate = useNavigate();
    const BirthdayCard1 = ()=>{
        navigate("/items");
    }
  return (
    <>
      <h3>Tailored For Your Occasions</h3>
      <div className="fullTabs">
        <Tabs defaultActiveKey="birthday" id="fill-tab-example" className="mb-3 tabs-bg" fill>
          <Tab 
            eventKey="birthday" 
            title={<TabTitleWithLogo logoSrc={birthdayLogo} title="Birthday"/>}
          >
            <div className="cards-tab">
            <div className="birthdayCard1" onClick={BirthdayCard1}>
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={flower} />
                <Card.Body>
                  <Card.Text>Angelic Rose Bouquet</Card.Text>
                  <Card.Text>₹ 799 <span className="strike"><s>₹ 849</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>
              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={cake} />
                <Card.Body>
                  <Card.Text>Butterscotch Crunch Cake</Card.Text>
                  <Card.Text>₹ 649</Card.Text>
                </Card.Body>
              </Card>
              </div>
              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={mug} />
                <Card.Body>
                  <Card.Text>Birthday Special Syngonium Plant</Card.Text>
                  <Card.Text>₹ 499</Card.Text>
                </Card.Body>
              </Card>
              </div>
              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={plant} />
                <Card.Body>
                  <Card.Text>Birthday Celebration Mug</Card.Text>
                  <Card.Text>₹ 299 <span className="strike"><s>₹ 329</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>
            </div>
          </Tab>
          <Tab 
            eventKey="anniversary" 
            title={<TabTitleWithLogo logoSrc={anniversarylogo} title="Anniversary" />}
          >
            <div className="cards-tab">
            <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={blooming} />
                <Card.Body>
                  <Card.Text>Blooming Together Lily Bouquet</Card.Text>
                  <Card.Text>₹ 1299 <span className="strike"><s>₹ 1609</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={frame} />
                <Card.Body>
                  <Card.Text>Personalised Memory Frame</Card.Text>
                  <Card.Text>₹ 549 <span className="strike"><s>₹ 599</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={gift} />
                <Card.Body>
                  <Card.Text>Mugful of Love Greens</Card.Text>
                  <Card.Text>₹ 549 <span className="strike"><s>₹ 669</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={plantMug} />
                <Card.Body>
                  <Card.Text>Anniversary Roses of Love</Card.Text>
                  <Card.Text>₹ 1099 <span className="strike"><s>₹ 1549</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>
            </div>
          </Tab>

          <Tab eventKey="congratulations" 
          title={<TabTitleWithLogo logoSrc={congratslogo} title="Congratulations" />}
          >
          <div className="cards-tab">
          <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={rose} />
                <Card.Body>
                  <Card.Text>
                  Rose Celebration Bouquet
                  </Card.Text>
                  <Card.Text>₹ 999 <span className="strike"><s>₹ 1449</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={calendar} />
                <Card.Body>
                  <Card.Text>
                  Best Wishes Calendar
                  </Card.Text>
                  <Card.Text>₹ 499 <span className="strike"><s>₹ 599</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={jar} />
                <Card.Body>
                  <Card.Text>
                  Congrat Wishes Jar Candle
                  </Card.Text>
                  <Card.Text>₹ 799</Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={chocolates} />
                <Card.Body>
                  <Card.Text>
                  Whimsical Chocolate Whispers
                  </Card.Text>
                  <Card.Text>₹ 799 <span className="strike"><s>₹ 899</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>
            </div>
          </Tab>

          <Tab eventKey="loveNromance" 
          title={<TabTitleWithLogo logoSrc={lovelogo} title="Love N Romance" />}
          >
          <div className="cards-tab">
          <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={wrapped} />
                <Card.Body>
                  <Card.Text>
                  Love Wrapped in Roses
                  </Card.Text>
                  <Card.Text>₹ 499 <span className="strike"><s>₹ 639</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={speaker} />
                <Card.Body>
                  <Card.Text>
                  Personalised Special Speaker                 
                  </Card.Text>
                  <Card.Text>₹ 799</Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={bonsai} />
                <Card.Body>
                  <Card.Text>
                  Love-Grown Bonsai Bliss
                  </Card.Text>
                  <Card.Text>₹ 849 <span className="strike"><s>₹ 969</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={loveCake} />
                <Card.Body>
                  <Card.Text>
                  Red Heart Truffle Pinata Cake 1Kg
                  </Card.Text>
                  <Card.Text>₹ 1499 <span className="strike"><s>₹ 1699</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>
            </div>
          </Tab>

          <Tab eventKey="thankYou" 
          title={<TabTitleWithLogo logoSrc={thankslogo} title="Thank You" />}
          >
          <div className="cards-tab">
          <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={bunch} />
                <Card.Body>
                  <Card.Text>
                  Exotic Roses & Lilies Arrangement
                  </Card.Text>
                  <Card.Text>₹ 1849 <span className="strike"><s>₹ 2649</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={pot} />
                <Card.Body>
                  <Card.Text>
                  Jade Plant In Gold Tone Metal Pot
                  </Card.Text>
                  <Card.Text>₹ 249 <span className="strike"><s>₹ 299</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={golden} />
                <Card.Body>
                  <Card.Text>
                  Golden Glow Butterscotch Cake               
                  </Card.Text>
                  <Card.Text>₹ 649</Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={thankYou} />
                <Card.Body>
                  <Card.Text>
                  Thank You Tribute Frame
                  </Card.Text>
                  <Card.Text>₹ 399 <span className="strike"><s>₹ 429</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
      <button className="viewAll">View All Gifts</button>
    </>
  );
}

export default ItemsTab;
