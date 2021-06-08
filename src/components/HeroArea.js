import React from 'react'
import '../App.css'
import { Button, Tooltip } from '@material-ui/core'
function HeroArea() {
  return (
    <div className="hero-container">
      <div className="container">
        <div className="hero-contents">
          <div className="hero-content1">
            <h2>
              <span>D</span>enzel Lanzaderas
            </h2>
            <p>Front-End Web developer</p>
            <p className="hero-goal">
              To secure a position where I can apply my skills in dynamic and
              creative environment
            </p>
            <div className="heroArea-btns">
              <Tooltip title="View Contact Details">
                <Button
                  className="btn btn-contact"
                  variant="contained"
                  color="secondary"
                >
                  Contact
                </Button>
              </Tooltip>
              <Tooltip title="Donwload My Resume">
                <Button
                  variant="contained"
                  color="default"
                  className="btn btn-resume"
                >
                  Resume<i class="far fa-arrow-alt-circle-down"></i>
                </Button>
              </Tooltip>
            </div>
          </div>
          <div className="hero-content2">
            <img src="/images/me.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroArea
