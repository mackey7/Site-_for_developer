import React from "react";
import Slide from './Slide.jsx';
import ArrowLeft from './ArrowLeft.jsx';
import ArrowRight from './ArrowRight.jsx';
import './Header.scss';


class Header extends React.Component {
  render() {
    return (
        <section className="header">
            <Slide/>
            <ArrowLeft />
            <ArrowRight/>
        </section>
    );
  }
}
export default Header;