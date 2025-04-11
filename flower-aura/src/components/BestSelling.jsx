import React from 'react';
import '../App.css';
import '../css/BestSelling.css';
import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import rose from '../assets/cards/rose.avif';
import pillow from '../assets/cards/pillow.avif';
import gift from '../assets/cards/gift.avif';
import chocolateCake from '../assets/cards/chocolateCake.avif';
import hamper from '../assets/cards/hamper.avif';
import bouquet from '../assets/cards/bouquet.avif';
import terrarium from '../assets/cards/terrarium.avif';
import giftCombo from '../assets/cards/giftCombo.avif';

const BestSelling = () => {
  return (
    <>
    <div className='bestSelling'>
    <div className='bestSelling-heading'>Best Selling Flowers & Gifts</div>
    <div className='surprise-heading'>Surprise Your Loved Ones
    <Button className="viewAll">
    View All
    </Button>
    </div>
    <div className='bestSelling-items'>
    <div className="birthdayCard1">
        <Card style={{ width: "17rem" }} className="cards">
        <Card.Img variant="top" src={rose} className='items-img'/>
        <Card.Body>
        <Card.Text className='card-texts'>10 Red Roses Bouquet</Card.Text>
        <Card.Text>₹ 545 </Card.Text>
        <div className='ratings'>
            <span className="fa fa-star checked">4.9</span>
        </div>
        </Card.Body>
        </Card>
    </div>

    <div className="birthdayCard1">
        <Card style={{ width: "17rem" }} className="cards">
        <Card.Img variant="top" src={pillow} className='items-img'/>
        <Card.Body>
        <Card.Text className='card-texts'>Heartfelt Mug and Cushion</Card.Text>
        <Card.Text>₹ 645 <span className="strike"><s>₹ 1075</s></span></Card.Text>
        <div className='ratings'>
            <span className="fa fa-star checked">4.8</span>
        </div>
        </Card.Body>
        </Card>
    </div>

    <div className="birthdayCard1">
        <Card style={{ width: "17rem" }} className="cards">
        <Card.Img variant="top" src={gift} className='items-img'/>
        <Card.Body>
        <Card.Text className='card-texts'>Engraved Acrylic Photo Lamp</Card.Text>
        <Card.Text>₹ 990 </Card.Text>
        <div className='ratings'>
            <span className="fa fa-star checked rating">5.0</span>
        </div>
        </Card.Body>
        </Card>
    </div>

    <div className="birthdayCard1">
        <Card style={{ width: "17rem" }} className="cards">
        <Card.Img variant="top" src={chocolateCake} className='items-img'/>
        <Card.Body>
        <Card.Text className='card-texts'>Chocolate Truffle Cake</Card.Text>
        <Card.Text>₹ 595 </Card.Text>
        <div className='ratings'>
            <span className="fa fa-star checked">4.9</span>
        </div>
        </Card.Body>
        </Card>
    </div>
    </div>



    <div className='bestSelling-items'>
    <div className="birthdayCard1">
        <Card style={{ width: "17rem" }} className="cards">
        <Card.Img variant="top" src={hamper} className='items-img'/>
        <Card.Body>
        <Card.Text className='card-texts'>Scented Bliss Hamper</Card.Text>
        <Card.Text>₹ 975 <span className="strike"><s>₹ 1335 </s></span></Card.Text>
        <div className='ratings'>
            <span className="fa fa-star checked">4.5</span>
        </div>
        </Card.Body>
        </Card>
    </div>

    <div className="birthdayCard1">
        <Card style={{ width: "17rem" }} className="cards">
        <Card.Img variant="top" src={bouquet} className='items-img'/>
        <Card.Body>
        <Card.Text className='card-texts'>Pink Roses Bouquet</Card.Text>
        <Card.Text>₹ 695 <span className="strike"><s>₹ 995</s></span></Card.Text>
        <div className='ratings'>
            <span className="fa fa-star checked">4.6</span>
        </div>
        </Card.Body>
        </Card>
    </div>

    <div className="birthdayCard1">
        <Card style={{ width: "17rem" }} className="cards">
        <Card.Img variant="top" src={terrarium} className='items-img'/>
        <Card.Body>
        <Card.Text className='card-texts'>Warmth N Romance Gift</Card.Text>
        <Card.Text>₹ 710 </Card.Text>
        <div className='ratings'>
            <span className="fa fa-star checked">4.7</span>
        </div>
        </Card.Body>
        </Card>
    </div>

    <div className="birthdayCard1">
        <Card style={{ width: "17rem" }} className="cards">
        <Card.Img variant="top" src={giftCombo} className='items-img'/>
        <Card.Body>
        <Card.Text className='card-texts'>Profuse Jade Terrarium</Card.Text>
        <Card.Text>₹ 685 <span className="strike"><s>₹ 1142</s></span></Card.Text>
        <div className='ratings'>
            <span className="fa fa-star checked">4.8</span>
        </div>
        </Card.Body>
        </Card>
    </div>
    </div>
    </div>
    </>
  );
};

export default BestSelling;
