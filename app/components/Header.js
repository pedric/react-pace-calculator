import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: [
        {
          name: 'Finisher time',
          url: '/',
        },
        {
          name: 'Pace',
          url: '/average-pace',
        },
        {
          name: 'Image',
          url: '/image-generator',
        },
      ],
    };
  }

  render() {
    const headerstyles = {
      position: 'fixed',
      bottom: '0',
      left: '0',
      right: '0',
      width: '100%',
      background: '#fff',
      borderTop: '1px solid #eee',
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
    const aStyles = {
      // color: '#333',
      textAlign: 'center',
      padding: '15px',
      width: '100%',
      lineHeight: '2.5',
      display: 'block',
      textDecoration: 'none',
    };

    const menuItems = this.state.menu.map(item => (
      <li key={item.name} style={liStyles}>
        <a href={item.url} style={aStyles} className={'f6 theme_color'}>
          {item.name}
        </a>
      </li>
    ));

    return (
      <header style={headerstyles}>
        <nav>
          <ul style={ulStyles}>{menuItems}</ul>
        </nav>
      </header>
    );
  }
}
