import React from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

class Pricing extends React.Component {
  state = {
    prices: [100, 150, 200],
    positions: ["Front Row", "Middle", "Balcony"],
    descp: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in neque non lacus auctor suscipit in tempor tortor.",
      "Ut libero sem, pellentesque gravida ligula sit amet, aliquet dignissim nibh. Cras id odio malesuada, pretium nibh vitae, commodo felis.",
      "Duis ornare tristique mi, ut pellentesque ante laoreet sed. Nulla eget fringilla ligula."
    ],
    delay: [500, 0, 500]
  };

  showBoxes = () => {
    return this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>

            <div className="pricing_description">
              <span>{this.state.descp[i]}</span>
            </div>

            <div className="pricing_button">
              <MyButton
                text="Purchase Tickets"
                color="teal"
                background="orange"
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  };

  render() {
    return (
      //<div className="center_wrapper">
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
export default Pricing;
