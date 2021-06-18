import React, { Component } from "react";
import "./HomePageStyles.css";
import airport from "./explore.jpg";
import india from "./india.jpg";
import boat from "./boat.jpg";
import ghats from "./ghats.jpg";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  render() {
    return (
      <div className="container">
        <br></br>
        <div className={"justify-content-center mt-5 mb-5"}>
          <h1 className="rr">
            <img src={airport}></img>&nbsp;
          </h1>
        </div>
        <br></br>
        
        <br></br>
        <div className="container text-left">
          <h2>Why should you Explore India?</h2>
          <br></br>
          
          <p>
              One of the oldest civilisations in the world, India is a 
              mosaic of multicultural experiences. With a rich heritage 
              and myriad attractions, the country is among the most popular
              tourist destinations in the world. It covers an 
              area of 32, 87,263 sq. km, extending from the snow-covered 
              Himalayan heights to the tropical rain forests of the south.
              As the 7th largest country in the world, India stands apart 
              from the rest of Asia, marked off as it is by mountains and 
              the sea, which give the country a distinct geographical entity.
              <br></br>
              
          </p>
        </div>
        
        <div className="container text-center">
          <img src={india}></img>
        </div>
        <br></br>
        <div className="container text-left">
          <h2>
            Beauty of India
          </h2>
          <br></br>
              Fringed by the Great Himalayas in the north, it stretches southwards 
              and at the Tropic of Cancer, tapers off into the Indian Ocean between
              the Bay of Bengal on the east and the Arabian Sea on the west. As 
              you travel the expanse of the country, you are greeted by diverse 
              nuances of cuisines, faiths, arts, crafts, music, nature, lands, 
              tribes, history and adventure sports. India has a mesmeric conflation
              of the old and the new. As the bustling old bazaars rub shoulders 
              with swanky shopping malls, and majestic monuments accompany luxurious
              heritage hotels, the quintessential traveller can get the best of 
              both worlds. Head to the mountains, enjoy a beach retreat or cruise
              through the golden Thar, India has options galore for all.
         
              <br></br>
              
        </div>
        <br></br>
        <br></br>
        <div className="container text-center">
                <img src={ghats}></img>
        </div>
        <br></br>
        <div className="container text-left">
          <h2>Development of tourism in India</h2>
          
          <p>
          <br></br>
              The Ministry of Tourism functions as the nodal agency for the 
              development of tourism in the country. It plays a crucial role 
              in coordinating and supplementing the efforts of the State/Union
              Territory Governments, catalyzing private investment, strengthening
              promotional and marketing efforts and in providing trained manpower
              resources.
              <br></br>
          </p>
        </div>
        <div className="container text-center">
          <img src={boat}></img>
        </div>
        <br></br>
        <div className="container text-left">
          <h2>Locals are delighted to help foreigners more than ever</h2>
          <br></br>
          <p>
              Tourism is the second largest foreign exchange earner in India.
              The tourism industry employs a large number of people, both skilled 
              and unskilled. It promotes national integration and international 
              brotherhood.Tourism is highly labour intensive industry of a unique 
              type. It provides different services needed as well as expected by 
              the incoming tourists. At the world level, it is one of the largest 
              in terms of money spent by tourists in the countries they visit. 
              This amount is said to exceed the GNP of many countries with the 
              sole exception of the USA. According to the latest estimates of the
              world travel and tourism council, this industry is expected to 
              generate about 6 percent of India’s total employment.
             
          </p>
        </div>
        <br></br>
      
      </div>
    );
  }
}

export default HomePage;
