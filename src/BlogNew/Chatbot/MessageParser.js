import React from 'react';

const MessageParser = ({ children, actions }) => {
  const { checker } = children.props.state;
  const parse = (message) => {
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

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
