import React from 'react';
import Text from '../Text/Text';
import './Logo.scss';

export default class Logo extends React.Component {
  render () {
    return (
      <div className="logo">
        <Text className="text text--size--36" content="JSFiller" />
        <Text className="text text--size--22" content="Routes monitor" />
      </div>
    );
  }
}
