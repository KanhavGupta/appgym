import React, { useState } from 'react';
import './App.css';
import NavBar from './navBar.js'
import NavBar2 from './navBar2.js'
import Carousel1 from './carousel1.js'
import JoinType from './joinType.js'
import LoginPage from './loginPage';
import RegisterPage from './registerPage';

function App() {

  const [faqs, setfaqs] = useState([
    {
      question: 'What is cult?',
      answer: 'At Cult, we make fitness fun and easy. We have best-in-class trainers & offer group workouts ranging from yoga to Boxing. Our workouts can be done both at a cult center and at home with the help of do it yourself (DIY) workout videos. Cult.fiuses the best in technology to give you a world-class experience. You can book classes, follow workout videos - all with the click of a button from the cult.fit app or website. ',
      open: true
    },
    {
      question: 'How is the cult center different from a regular gym?',
      answer: 'With our non-conventional training facility, we aim to give you a balanced mix of workouts that will enhance your health while having fun at the same time. Cult differentiates itself, from other fitness centers by offering group workouts that focus on overall development. Cult has a simple philosophy - make fitness fun and easy with the help of best-in-class trainers and group workouts. Our workouts can be done both at a cult center as group classes and at home with the help of do-it-yourself (DIY) workout videos.  Cult.fit uses the best in technology to give you a world-class experience. You can book classes, follow workout videos - all with the click of a button from the cult.fit app or website.  To know more about cult, check this link.',
      open: false
    },
    {
      question: 'What are the different types of cultpass ELITE available in cult?',
      answer: 'We have a wide range of packs to suit your fitness needs! Cultpass ELITE: You can book as many classes as you like at any center of your choice in the city. However, you can prebook only 4 classes at any given point in time. The moment you finish one class, you get the option to book another class.  We have 3 month, 6 month & 12 month cultpass. Our new centers have launch offers where you’ll be able to book classes only for that center. Buddy pack:  Get a buddy to sign up along with you, because we all need a friend to push us! Each of your memberships will be unique & you can book classes separately too! (Subject to availability) Cultpass SELECT (Available only in India): Cultpass SELECT is available only for selected centers. It gives you access to ONLY the Cult center selected by you at the time of purchase. This pack does NOT give access to mind.fit and cult Outdoor centers.  Monthly Subscription(Available only in India):  Monthly membership gives you unlimited classes anytime at any cult.fit or mind.fit center with the added benefit of paying monthly for your membership. (Subject to availability)  To find out more about memberships & pricing you can check our website',
      open: false
    },
    {
      question: 'How is the cult center different from a regular gym?',
      answer: 'With our non-conventional training facility, we aim to give you a balanced mix of workouts that will enhance your health while having fun at the same time. Cult differentiates itself, from other fitness centers by offering group workouts that focus on overall development. Cult has a simple philosophy - make fitness fun and easy with the help of best-in-class trainers and group workouts. Our workouts can be done both at a cult center as group classes and at home with the help of do-it-yourself (DIY) workout videos.  Cult.fit uses the best in technology to give you a world-class experience. You can book classes, follow workout videos - all with the click of a button from the cult.fit app or website.  To know more about cult, check this link.',
      open: false
    },
    {
      question: 'Are cult classes beginner friendly?',
      answer: 'Don’t worry! All our classes are beginner friendly. If you are doing an at Home cult.fit DIY session, we have sessions designed specifically for beginners. At our cult.fit centers too, we welcome beginners and look after them in every class. If it’s your first class, just arrive 10 minutes early, and we’ll make sure we help you get started and feel totally comfortable. To know more about what to expect in your first class read here.',
      open: false
    },
    {
      question: 'What is a cultpass LIVE?',
      answer: 'cultpass LIVE gives you unlimited access to all LIVE classes and DIY (on demand) sessions. This includes unlimited access to fitness, dance, meditation, health video content and podcasts. A cultpass LIVE member has an all access pass to celebrity masterclasses, ability to workout with friends and track their energy scores, and  monitor their progress in the form of reports. You can purchase the membership through the official cult.fit website or on the android app.',
      open: false
    }


  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }
  return (
    <div>
      <NavBar />
      <NavBar2 />
      <Carousel1 />
      {/* <JoinType /> 
      <Gallery/> */}
      {/* <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div> */}
      
    </div>
  );
}

export default App;
