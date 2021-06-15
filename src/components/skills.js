import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Skills = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>Project 1</h1>
            </Fade>
            <p>
              {data.P1ParaOne}
              <br></br>
              <br></br>
              {data.P1ParaTwo}
              <br></br>
              <br></br>
              {data.P1ParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.P1Image} height="500" alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
