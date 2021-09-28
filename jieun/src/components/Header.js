import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoinfo: { title: "Jieun", subtitle: "Front web developer" },
      navigation: [
        { id: 1, title: "Who am I", desc: "프로필" },
        { id: 2, title: "Work", desc: "주요 프로젝트" },
        { id: 3, title: "History", desc: "연도별 주요 프로젝트" },
      ],
    };
  }
  render() {
    return (
      <div id="header">
        {/* {koName} */}
        <Logoinfo
          title={this.state.logoinfo.title}
          subtitle={this.state.logoinfo.subtitle}
        ></Logoinfo>
        <Navigation data={this.state.navigation}></Navigation>
      </div>
    );
  }
}

class Navigation extends Component {
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a href={"/content/" + data[i].id}>{data[i].title}</a>
        </li>
      );
      i++;
    }
    return <ul>{lists}</ul>;
  }
}

class Logoinfo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

export default Header;
