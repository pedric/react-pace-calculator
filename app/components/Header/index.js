import React from 'react';
import {
  themeColor,
  themeGray,
  themeLightGray,
  themeLight,
  themeDark,
} from 'settings/colors';
import HelpCenter from 'components/HelpCenter/index';
import Header from './styles';

export default class AppHeader extends React.Component {
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
    const menuItems = this.state.menu.map(item => (
      <li key={item.name}>
        <a
          href={item.url}
          className={item.url === window.location.pathname ? 'f6 active' : 'f6'}
        >
          {item.name}
        </a>
      </li>
    ));

    return (
      <Header>
        <HelpCenter />
        <nav>
          <ul>{menuItems}</ul>
        </nav>
      </Header>
    );
  }
}
