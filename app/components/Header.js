import React from 'react';
import {
  themeColor,
  themeGray,
  themeLightGray,
  themeLight,
  themeDark,
} from 'settings/colors';
import HelpCenter from 'components/HelpCenter';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: [
        {
          name: 'Time calculator',
          url: '/',
        },
        {
          name: 'Pace calculator',
          url: '/average-pace',
        },
        {
          name: 'Image generator',
          url: '/image-generator',
        },
      ],
    };
  }

  render() {
    const headerstyles = {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      width: '100%',
      background: '#fff',
      borderBottom: '1px solid #eee',
    };
    const ulStyles = {
      padding: '0',
      margin: '0',
      listStyle: 'none',
      width: '100%',
      display: 'flex',
    };
    const liStyles = {
      flexBasis: '50%',
      maxWidth: '50%',
      textAlign: 'center',
    };
    // const aStyles = {
    //   background: themeLight,
    //   color: themeColor,
    //   textAlign: 'center',
    //   padding: '15px',
    //   width: '100%',
    //   lineHeight: '1.2',
    //   display: 'block',
    //   textDecoration: 'none',
    // };

    const menuItems = this.state.menu.map(item => (
      <li key={item.name} style={liStyles}>
        <a href={item.url} className={'menu_btn f6'}>
          {item.name}
        </a>
      </li>
    ));

    return (
      <header style={headerstyles}>
        <HelpCenter />
        <nav>
          <ul style={ulStyles}>{menuItems}</ul>
        </nav>
      </header>
    );
  }
}
