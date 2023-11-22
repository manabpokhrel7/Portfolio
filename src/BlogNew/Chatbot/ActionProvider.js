import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const updateState = (message, checker) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }));
  };

  const initialAction = () => {
    const message = createChatBotMessage('Just type in your name to begin.');
    updateState(message, 'age');
  };

  const afterNameMessage = () => {
    const message = createChatBotMessage("Do you want the services I provide?");
    updateState(message, 'preference');
  };

  const afterAgeMessage = () => {
    const message = createChatBotMessage("Select your choice", {
      widget: "startSlow",
    });
    updateState(message);
  };

  const finalResult = (name, age, preference, vehicle) => {
    const message = createChatBotMessage(`Got it, ${name}! Based on your choice and preference for a ${preference}, I would be more than happy to help you`, {
      widget: "finalImage",
    });
    updateState(message);
  };

  return React.cloneElement(children, {
    actions: {
      initialAction,
      afterNameMessage,
      afterAgeMessage,
      finalResult,
    },
  });
};

export default ActionProvider;
