import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faBuildingColumns,
  faMobile,
  faLightbulb,
  faTv,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const WorkHeader = () => {
  const [isHovering, setIsHovering] = useState(false);
  // const [activeTab, setActiveTab] = useState('')
  const [detail, setDetail] = useState("");
  const history = useHistory();

  const handleMouseEnter = (data) => {
    setDetail(data);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  let urldata = window.location.href.split('/')[4]
  
  useEffect(() => {
    console.log(urldata)
    // setActiveTab(urldata)

  }, [urldata])
  
  const handleclick = (data) => {
    if (data === "pre") {
      history.push("/paytoall/prepaid");
    } else if (data === "post") {
      history.push("/paytoall/postpaid");
    } else if (data === "dth") {
      history.push("/paytoall/dth");
    } else if (data === "electricity") {
      history.push("/paytoall/electricity");
    } else if (data === "gas") {
      history.push("/paytoall/gas");
    } else if (data === "water") {
      history.push("/paytoall/water");
    } else {
      history.push("/paytoall/dmr");
    }
  };

  return (
    <>
      <header className="paytoall_workheader">
        <div className="container">
          <ul className="d-flex">
            <li className="paytoall_workheader_list">
              <div className="paytoall_workheader_li_div">
                <FontAwesomeIcon
                  icon={faMobile}
                  onMouseEnter={() => handleMouseEnter("pre")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleclick("pre")}
                  className={`paytoall_workheader_icon ${
                    isHovering ? (detail === "pre" ? "beat" : "") : ""
                  } ${urldata === 'prepaid' ? 'activeicn' : ''}
                  `}
                />
                <span className={`paytoall_workheader_span ${urldata === 'prepaid' ? 'active' : ''}`}>Prepaid</span>
              </div>
            </li>
            <li className="paytoall_workheader_list">
              <div className="paytoall_workheader_li_div">
                <FontAwesomeIcon
                  icon={faMobile}
                  onMouseEnter={() => handleMouseEnter("post")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleclick("post")}
                  className={`paytoall_workheader_icon ${
                    isHovering ? (detail === "post" ? "beat" : "") : ""
                  } ${urldata === 'postpaid' ? 'activeicn' : ''}
                  `}
                />
                <span className={`paytoall_workheader_span ${urldata === 'postpaid' ? 'active' : ''}`}>Postpaid</span>
              </div>
            </li>
            <li className="paytoall_workheader_list">
              <div className="paytoall_workheader_li_div">
                <FontAwesomeIcon
                  icon={faTv}
                  onMouseEnter={() => handleMouseEnter("dth")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleclick("dth")}
                  className={`paytoall_workheader_icon ${
                    isHovering ? (detail === "dth" ? "beat" : "") : ""
                  } ${urldata === 'dth' ? 'activeicn' : ''}`}
                />
                <span className={`paytoall_workheader_span ${urldata === 'dth' ? 'active' : ''} `}>DTH</span>
              </div>
            </li>
            <li className="paytoall_workheader_list">
              <div className="paytoall_workheader_li_div">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  onMouseEnter={() => handleMouseEnter("ele")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleclick("electricity")}
                  className={`paytoall_workheader_icon ${
                    isHovering ? (detail === "ele" ? "beat" : "") : ""
                  } ${urldata === 'electricity' ? 'activeicn' : ''}`}
                />
                <span className={`paytoall_workheader_span ${urldata === 'electricity' ? 'active' : ''}`}>Electricity</span>
              </div>
            </li>
            <li className="paytoall_workheader_list">
              <div className="paytoall_workheader_li_div">
                <FontAwesomeIcon
                  icon={faFlask}
                  onMouseEnter={() => handleMouseEnter("gas")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleclick("gas")}
                  className={`paytoall_workheader_icon ${
                    isHovering ? (detail === "gas" ? "beat" : "") : ""
                  } ${urldata === 'gas' ? 'activeicn' : ''}`}
                />
                <span className={`paytoall_workheader_span ${urldata === 'gas' ? 'active' : ''}`}>Gas</span>
              </div>
            </li>
            <li className="paytoall_workheader_list">
              <div className="paytoall_workheader_li_div">
                <FontAwesomeIcon
                  icon={faDroplet}
                  onClick={() => handleclick("water")}
                  onMouseEnter={() => handleMouseEnter("wat")}
                  onMouseLeave={handleMouseLeave}
                  className={`paytoall_workheader_icon ${
                    isHovering ? (detail === "wat" ? "beat" : "") : ""
                  } ${urldata === 'water' ? 'activeicn' : ''}`}
                />
                <span className={`paytoall_workheader_span ${urldata === 'water' ? 'active' : ''}`}>Water</span>
              </div>
            </li>
            <li className="paytoall_workheader_list">
              <div className="paytoall_workheader_li_div">
                <FontAwesomeIcon
                  onMouseEnter={() => handleMouseEnter("dmr")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleclick("dmr")}
                  className={`paytoall_workheader_icon ${
                    isHovering ? (detail === "dmr" ? "beat" : "") : ""
                  } ${urldata === 'dmr' ? 'activeicn' : ''}`}
                  icon={faBuildingColumns}
                />
                <span className={`paytoall_workheader_span ${urldata === 'dmr' ? 'active' : ''}`}>DMR</span>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default WorkHeader;
