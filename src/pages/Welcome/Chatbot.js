import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Check if the script already exists
    if (!document.querySelector('script[src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"]')) {
      // Load the Dialogflow Messenger script
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Check if the link already exists
    if (!document.querySelector('link[href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"]')) {
      // Load the Dialogflow Messenger stylesheet
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
      document.head.appendChild(link);
    }

    // Add custom styles
    const style = document.createElement('style');
    style.innerHTML = `
      
      df-messenger {
        z-index: 999;
        position: fixed;
        --df-messenger-font-color: #000000;
        --df-messenger-font-family: Lato;
        --df-messenger-chat-background: #fef8e6;
        --df-messenger-message-user-background: #f4b400;
        --df-messenger-message-bot-background: #f4c7c3;
        bottom: 16px;
        right: 16px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <df-messenger
  project-id="useful-melody-436610-a7"
  agent-id="8e123a53-a8ed-4e2b-9c81-fc9a10160f34"
  language-code="en"
  max-query-length="-1">
  <df-messenger-chat-bubble
   chat-title="ceylon-resort-chatbot">
  </df-messenger-chat-bubble>
</df-messenger>
    
  );
};

export default Chatbot;