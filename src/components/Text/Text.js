import React from 'react';
import './Text.scss';

export default class Text extends React.Component {
  render () {
    const {content, className} = this.props;
    return <p className={className}>{content}</p>;
  }
}
