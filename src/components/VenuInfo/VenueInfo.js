import React from "react";
import icon_calendar from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";
import Zoom from "react-reveal/Zoom";
const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_calendar})`
                    }}
                  />
                  <div className="vn_title">Event date & time</div>
                  <div className="vn_desc">25 December 2018 @ 07.00 am</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_green" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_location})`
                    }}
                  />
                  <div className="vn_title">Event date & time</div>
                  <div className="vn_desc">25 December 2018 @ 07.00 am</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};
export default VenueInfo;
