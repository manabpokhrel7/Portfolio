import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const { checker } = children.props.state;

    if (checker === 'age') {
      actions.afterNameMessage();
      children.props.state.userData.name = message;
    }

    if (checker === 'preference' && (message.toLowerCase() === 'yes' || message.toLowerCase() === 'no')) {
      actions.afterAgeMessage();
      children.props.state.userData.preference = message.toLowerCase();
      children.props.state.userData.category = message.toLowerCase() === 'yes' ? 'kid' : 'adult';
    }
  };

  return React.cloneElement(children, {
    parse,
    actions,
  });
};

export default MessageParser;
