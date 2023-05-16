import React from 'react'
import "./profile.css"
import Typical from 'react-typical'

const Profile = () => {
  return (
    <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>

              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <div className="primary-text">
              <Typical 
                loop = {Infinity}
                steps = {[
                  "dimasik ya",
                  2000,
                  "dim-dimich",
                  2000,
                  "programmer",
                  2000,
                  "klassiniyChel",
                  2000,
                  "Bog",
                  2000,
                ]}
               />
            </div>
          </div>
        </div>

    </div>
  )
}

export default Profile