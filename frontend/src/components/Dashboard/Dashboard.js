import React, { Component } from "react";
import "./DashboardStyles.css";
import sigiriya from "./sigiriya.jpg";
import sigiriya2 from "./sigiriya2.jpg";
import sigiriya3 from "./sigiriya3.jpg";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
    };
  }

  render() {
    return (
      <div className="q">
        <div className="container">
          <div className="container text-left">
            <br></br>
            <br></br>
            <h1 className="d">About Us</h1>
            <br></br>
            <div className="container text-center">
              <img src={sigiriya}></img>
            </div>
            <br></br>
            <h3>
            Ancient History
            </h3>
            <br></br>
            <p>
            India's history and culture is dynamic, spanning back to the beginning
             of human civilization. It begins with a mysterious culture along the 
             Indus River and in farming communities in the southern lands of India. 
             The history of India is punctuated by constant integration of migrating 
             people with the diverse cultures that surround India. Available evidence 
             suggests that the use of iron, copper and other metals was widely prevalent 
             in the Indian sub-continent at a fairly early period, which is indicative of 
             the progress that this part of the world had made. By the end of the fourth 
             millennium BC, India had emerged as a region of highly developed civilization.
              <br></br>
              
              <br></br>
              <br></br>
              <div className="container text-center">
                <img src={sigiriya2}></img>
              </div>
              <br></br>

              <h3>
                Pride of India
              </h3>

              <br></br>
              India is one of the oldest civilizations in the world, spanning a 
              period of more than 4000 years, and witnessing the fusion of several 
              customs and traditions, which are reflective of the rich culture and 
              heritage of the Country.

              The history of the nation gives a glimpse into the magnanimity of its 
              evolution - from a Country reeling under colonialism, to one of the leading 
              economies in the global scenario within a span of fifty years. More than 
              anything, the nationalistic fervour of the people is the contributing force 
              behind the culmination of such a development. This transformation of the nation 
              instills a sense of national pride in the heart of every Indian within the 
              Country and abroad, and this section is a modest attempt at keeping its flame alive.
              <br></br>
              <br></br>
              <div className="container text-center">
                <img src={sigiriya3}></img>
              </div>
              <br></br>
              <h3>
                Culture & Heritage
              </h3>
              
              <br></br>
              The Ministry of Culture plays a vital role in the preservation and 
              promotion of art and culture. Its aim is to develop ways and means 
              by which basic cultural and aesthetic values and perceptions remain 
              active and dynamic among the people. It also undertakes programmes 
              for the promotion of various manifestations of contemporary art. 
              The Department is a nodal agency for commemorating significant events 
              and celebrating centenaries of great artists.
            </p>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
