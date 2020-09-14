import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import MyButton from "../utils/MyButton";

class Discount extends React.Component {
  state = {
    discountStart: 0,
    discountEnd: 50
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets befor 22nd NOV</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                in neque non lacus auctor suscipit in tempor tortor. Suspendisse
                tempor pretium ullamcorper. Duis sit amet convallis massa. Ut
                libero sem, pellentesque gravida ligula sit amet, aliquet
                dignissim nibh. Cras id odio malesuada, pretium nibh vitae,
                commodo felis. Duis ornare tristique mi, ut pellentesque ante
                laoreet sed. Nulla eget fringilla ligula. Sed pulvinar, erat in
                hendrerit porttitor, nunc sem pulvinar neque, a eleifend est
                diam sed mi. Proin viverra nisi ante, a pretium massa suscipit
                et. Nunc suscipit magna nisi, sit amet auctor arcu consectetur
                nec.
              </p>
              <MyButton
                background="black"
                color="yellow"
                text="Purchase Tickets"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
export default Discount;
