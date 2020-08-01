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
      ],
    };
  }

  render() {
    const headerstyles = {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      width: '100%',
      background: 'lightgray',
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
      color: '#333',
      textAlign: 'center',
      padding: '15px',
      width: '100%',
      lineHeight: '2.5',
      display: 'block',
      border: '1px solid #797979',
      textDecoration: 'none',
    };

    const menuItems = this.state.menu.map(item => (
      <li key={item.name} style={liStyles}>
        <a href={item.url} style={aStyles} className={'f6'}>
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
