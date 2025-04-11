import Stack from 'react-bootstrap/Stack';
import '../css/Blog.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import NavBar from './NavBar';
import profile from '../assets/logos/profile.png';
import one from '../assets/blogs/one.webp';
import two from '../assets/blogs/two.webp';
import three from '../assets/blogs/three.webp';
import four from '../assets/blogs/four.webp';
import five from '../assets/blogs/five.webp';
import six from '../assets/blogs/six.webp';
import seven from '../assets/blogs/seven.webp';
import eight from '../assets/blogs/eight.webp';
import nine from '../assets/blogs/nine.webp';
import ten from '../assets/blogs/ten.webp';
import eleven from '../assets/blogs/eleven.webp';
import twelve from '../assets/blogs/twelve.webp';
import thirteen from '../assets/blogs/thirteen.webp';
import fourteen from '../assets/blogs/fourteen.webp';
import fifteen from '../assets/blogs/fifteen.webp';
import sixteen from '../assets/blogs/sixteen.webp';
import seventeen from '../assets/blogs/seventeen.webp';
import eighteen from '../assets/blogs/eighteen.webp';
import heart from '../assets/logos/heart-fill.svg';
import eye from '../assets/logos/eye-fill.svg';
function Blogs() {
  return (
    <>
    <NavBar />
    <Stack direction="horizontal" className='stack-place'>
      <div className="p-2 blog-space">
        <img src={one} alt="one" className="blog-images"/>
        <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Chandu</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.3k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                57k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={two} alt="two" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'> Dhanush</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.1k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                27k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={three} alt="three" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Paanda</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.2k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                45k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={four} alt="four" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Nirmal</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.5k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                67k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={five} alt="five" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'> Kumar</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.8k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                77k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={six} alt="six" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Sridhar</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                2.3k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                88k
                </div>
            </div>
        </div>
      </div>
    </Stack>


    <Stack direction="horizontal" className='stack-place'>
      <div className="p-2 blog-space">
        <img src={seven} alt="one" className="blog-images"/>
        <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Chandu</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.3k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                57k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={eight} alt="two" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'> Dhanush</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.1k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                27k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={nine} alt="three" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Paanda</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.2k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                45k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={ten} alt="four" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Nirmal</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.5k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                67k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={eleven} alt="five" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'> Kumar</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.8k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                77k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={twelve} alt="six" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Sridhar</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                2.3k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                88k
                </div>
            </div>
        </div>
      </div>
    </Stack>   


    <Stack direction="horizontal" className='stack-place'>
      <div className="p-2 blog-space">
        <img src={thirteen} alt="one" className="blog-images"/>
        <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Chandu</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.3k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                57k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={fourteen} alt="two" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'> Dhanush</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.1k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                27k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={fifteen} alt="three" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Paanda</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.2k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                45k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={sixteen} alt="four" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Nirmal</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.5k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                67k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={seventeen} alt="five" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'> Kumar</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.8k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                77k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={eighteen} alt="six" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Sridhar</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                2.3k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                88k
                </div>
            </div>
        </div>
      </div>
    </Stack>
    </>
  );
}

export default Blogs;