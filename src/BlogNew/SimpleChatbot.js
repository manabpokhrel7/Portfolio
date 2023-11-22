import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './Chatbot/config';
import ActionProvider from './Chatbot/ActionProvider';
import MessageParser from './Chatbot/MessageParser';
import './SimpleChatbot.css'; 

function SimpleChatbot() {

  return (
    <div className="chatbot-container">
      <div className='left'>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      </div>
      <div className='right'></div>
    </div>
  );
}

export default SimpleChatbot;
