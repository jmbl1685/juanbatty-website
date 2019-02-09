import React, { useState } from 'react';
import './Navbar.css';
import HamburgerMenu from 'react-hamburger-menu';

export default function Navbar(props) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('#F7BC2B');
  const { navbar } = props.values;

  function handleClick() {
    setOpen(!open);
    setColor(open ? '#F7BC2B' : '#FFFFFF');
  }

  return (
    <div>
      <div className="hamburger-menu">
        <HamburgerMenu
          isOpen={open}
          menuClicked={() => handleClick()}
          width={35}
          height={20}
          strokeWidth={4}
          rotate={0}
          color={color}
          borderRadius={0}
          animationDuration={0.3}
        />
      </div>

      <div className={open ? 'menu open' : 'menu close'}>
        {navbar.items.map((item, index) => (
          <h3 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" key={index}>
            {item}
          </h3>
        ))}
      </div>
    </div>
  );
}
