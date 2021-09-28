import React, { Component } from "react";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.iam = props.iam;
  }
  render() {
    return (
      <section id="MyProfile">
        <h2>
          Who am I <em> {this.iam.lastName}입니다</em>
        </h2>
        <div className="ground">
          <div className="iam">
            <div className="inner">
              <ul>
                <li>
                  <em>NAME</em> <span>장지은</span>
                </li>
                <li>
                  <em>BIRTH</em> <span>1986.08.29</span>
                </li>
                <li>
                  <em>MOBILE</em> <span>010.2104.2041</span>
                </li>
                <li>
                  <em>EDUCATION</em> <span>대구제일여자상업고등학교 졸업</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MyProfile;
