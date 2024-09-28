import React, { useEffect } from 'react';
import './Chatbot.css'; // Import the CSS file

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

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return (
    <df-messenger
      project-id="teak-frame-426021-r1"
      agent-id="0b9b9440-133f-42ad-a915-05d5ce5cefe8"
      language-code="en"
      max-query-length="-1"
    >
      <df-messenger-chat-bubble chat-title="Ceylon Resort Chatbot">
      </df-messenger-chat-bubble>
    </df-messenger>
  );
};

export default Chatbot;
