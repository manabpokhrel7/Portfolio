import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const initialAction = () => {
        const message = createChatBotMessage('Just type in your name to begin.');
        updateState(message, "age")
    }

    const afterNameMessage = () => {
        const message = createChatBotMessage("Do you want the services I provide?")
        updateState(message, "preference")
    }

    const afterAgeMessage = () => {
        const message = createChatBotMessage("Click on the service you", {
            widget: "startSlow"
        })
        updateState(message)
    }

    const finalResult = (name, age, preference, vehicle) => {
        const message = createChatBotMessage(`Got it, ${name}! Based on your choice and preference for a ${preference}, I would be more than happy to help you`, {
            widget: "finalImage"
        })
        updateState(message)
    }

    const updateState = (message, checker) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }))
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        initialAction,
                        afterNameMessage,
                        afterAgeMessage,
                        finalResult
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;