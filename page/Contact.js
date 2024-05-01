import React, { useState } from 'react';
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";

const iconSize = 40; // Adjust the size as needed

const iconContainerStyle = {
  borderRadius: '50%',
  border: '2px solid black',
  padding: '10px', // Adjust padding as needed for the desired icon size and border thickness
  cursor: 'pointer', // Add cursor pointer to indicate clickable
};

const ChatSupport = () => (
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <p>Our chat support team is available to assist you with any inquiries or issues you may have regarding our agriculture products and services. Click on the chat icon to start a conversation with one of our knowledgeable representatives.</p>
  </div>
);

const PhoneSupport = () => (
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <p>For immediate assistance, please call our dedicated support hotline. Our phone support team is available [089452-15524] to provide you with personalized assistance and guidance regarding our agriculture products and services.</p>
  </div>
);

const Review = () => (
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <p>If you prefer to communicate via voice call, our call support service is here to help. Simply dial [08965-45698] to speak with one of our friendly support representatives for prompt assistance.</p>
  </div>
);

const About = () => {
  const [displayComponent, setDisplayComponent] = useState(null);

  const handleChatSupportClick = () => {
    setDisplayComponent(<ChatSupport />);
  };

  const handlePhoneSupportClick = () => {
    setDisplayComponent(<PhoneSupport />);
  };

  const handleCallSupportClick = () => {
    setDisplayComponent(<Review />);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
      <h2 style={{ color: 'black', marginBottom: '30px', textAlign: 'center', fontSize: '36px' }}>
        <strong>Know more, <span style={{ color: 'blue' }}>Contact us</span></strong>
      </h2>

      <p style={{ marginBottom: '30px', fontSize: '18px', lineHeight: '1.6' }}>
        Our agriculture project is a transformative initiative aimed at revolutionizing farming practices while prioritizing sustainability and innovation. Through targeted interventions, we aspire to enhance crop yield, quality, and resilience to climate change, with a particular focus on empowering smallholder farmers. By integrating cutting-edge technology solutions and promoting the adoption of best agricultural practices, we aim to optimize resource utilization while minimizing environmental impact. Central to our approach is community engagement, fostering knowledge sharing and collective action among farmers. Through a series of training workshops and capacity-building initiatives, we empower farmers with the skills and tools necessary to thrive in today's agricultural landscape. Additionally, we place a strong emphasis on facilitating market access for farmers, thus improving income opportunities and economic growth in rural areas. Research and innovation serve as guiding principles, driving continuous improvement and adaptation to emerging challenges. Through collaboration with diverse stakeholders, we ensure a holistic approach that maximizes the project's impact and sustainability. Ultimately, our goal is to create a vibrant agricultural ecosystem where farmers can prosper, and communities can flourish.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
        <div style={iconContainerStyle} onClick={handleChatSupportClick}>
          <IoChatboxEllipsesOutline size={iconSize} />
          <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '16px' }}>Chat Support</p>
        </div>
        <div style={iconContainerStyle} onClick={handlePhoneSupportClick}>
          <FiHeadphones size={iconSize} />
          <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '16px' }}>Phone Support</p>
        </div>
        <div style={iconContainerStyle} onClick={handleCallSupportClick}>
          <MdOutlineRateReview  size={iconSize} />
          <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '16px' }}>Review Support</p>
        </div>
      </div>

      {displayComponent}
    </div>
  );
};

export default About;
