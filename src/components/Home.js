import React from 'react';
import { Link } from 'react-router-dom';
import modernizedOdishaImage from '../images/modernized-odisha.jpg';
import telegramIcon from '../images/icons8-telegram-48.png';
import instagramIcon from '../images/icons8-instagram-48.png';
import gmailIcon from '../images/icons8-gmail-48.png';
import whatsappIcon from '../images/icons8-whatsapp-48.png';



function Home() {
  return (
    <>
      {/* Home Section */}
      <section id="home" className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-sky-500">Welcome to Modernized Odisha!</h2>
          <p className="mt-4 text-lg text-gray-700">
            Your one-stop solution for Odisha government exam preparation with hand-written notes and personalized guidance.
          </p>

          {/* Buttons */}
          <div className="mt-8 space-x-4">
            {/* Link to Notes Page */}
            <Link to="/Notes" className="inline-block">
              <button className="bg-sky-500 text-white py-2 px-6 rounded hover:bg-sky-600 transition">
                Explore Notes
              </button>
            </Link>
            <Link to="/Notes" className="inline-block">
            <button className="bg-yellow-400 text-white py-2 px-6 rounded hover:bg-yellow-500 transition">
              Get Started
            </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="mt-12">
  <img src={modernizedOdishaImage} alt="Education" className="mx-auto rounded shadow-lg" />
</div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 min-h-screen py-16">
      <div className="bg-gray-100 py-16">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-sky-500">About Modernized Odisha</h2>
    <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
      Modernized Odisha is dedicated to providing high-quality resources for students preparing for government exams in Odisha. 
      With hand-written notes, personalized guidance, and expert support from Soumya, a seasoned educator, we aim to make your exam 
      preparation journey smooth and effective.
    </p>

    {/* Mission Section */}
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
      <p className="mt-2 text-gray-600">
        Our mission is to empower students across Odisha to achieve success in government exams through easily accessible, 
        well-structured study materials. We believe that with the right guidance, every student can excel and secure their dream job.
      </p>
    </div>

    {/* Team Section */}
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900">Meet Our Team</h3>
      <div className="flex justify-center mt-8 space-x-8">
        {/* Team Member 1 */}
        <div className="text-center">
          <img src="src/images/soumya.jpg" alt="Soumya" className="w-48 h-48 rounded-full mx-auto shadow-lg"/>
          <h4 className="text-xl font-bold text-gray-900 mt-4">Soumya</h4>
          <p className="text-gray-600 mt-2">Founder & Lead Educator</p>
          <p className="mt-2 text-gray-600 max-w-sm mx-auto">
            Soumya has years of experience teaching government exam aspirants in Odisha. She specializes in simplifying complex concepts 
            with her hand-written notes, making learning accessible to all.
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="text-center">
          <img src="src/images/jeeban.jpg" alt="Jeeban" className="w-48 h-48 rounded-full mx-auto shadow-lg"/>
          <h4 className="text-xl font-bold text-gray-900 mt-4">Jeeban</h4>
          <p className="text-gray-600 mt-2">Manager & Operations</p>
          <p className="mt-2 text-gray-600 max-w-sm mx-auto">
            Jeeban handles the operations and ensures smooth communication between the platform and students, making sure that all resources 
            are delivered efficiently.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      </section>

      {/* Contact Us Section */}
      <section id="contact" className="bg-gradient-to-b from-sky-100 to-white min-h-screen py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl font-bold text-sky-500">Get in Touch with Us</h2>
    <p className="mt-4 text-lg text-gray-700">
      Follow us on our social platforms or reach out via email or phone!
    </p>

    {/* Motivating Quote */}
    <blockquote className="mt-8 italic text-gray-600 text-lg">
      "Empowering students across Odisha with the best study materials for success."
    </blockquote>

    {/* Contact Links */}
    <div className="mt-12 space-y-6">
      {/* Telegram */}
      <a href="https://t.me/ModernizedOdisha" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 group">
        <img src={telegramIcon} alt="Telegram" className="h-8 w-8 transition-transform transform group-hover:scale-110"/>
        <span className="text-gray-700 group-hover:text-sky-500">Join our Telegram Group</span>
      </a>

      {/* Instagram */}
      <a href="https://instagram.com/ModernizedOdisha" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 group">
        <img src={instagramIcon} alt="Instagram" className="h-8 w-8 transition-transform transform group-hover:scale-110"/>
        <span className="text-gray-700 group-hover:text-sky-500">Follow us on Instagram</span>
      </a>

      {/* Gmail */}
      <a href="mailto:modernizedodisha@gmail.com" className="flex items-center justify-center space-x-2 group">
        <img src={gmailIcon} alt="Gmail" className="h-8 w-8 transition-transform transform group-hover:scale-110"/>
        <span className="text-gray-700 group-hover:text-sky-500">modernizedodisha@gmail.com</span>
      </a>

      {/* Phone Number */}
      <a href="tel:+911234567890" className="flex items-center justify-center space-x-2 group">
        <img src={whatsappIcon} alt="Phone" className="h-8 w-8 transition-transform transform group-hover:scale-110"/>
        <span className="text-gray-700 group-hover:text-sky-500">+91 123 456 7890</span>
      </a>
    </div>

    {/* Spacer */}
    <div className="mt-12">
      <hr className="border-t border-gray-300" />
    </div>

    {/* Additional Content */}
    <p className="mt-12 text-sm text-gray-600">
      Reach out for any queries regarding your exam preparation. We're here to help!
    </p>

    {/* Quote Section */}
    <div className="mt-12 text-center">
      <blockquote className="italic text-gray-600 text-xl">
        "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
      </blockquote>
      <p className="mt-4 text-gray-500">- Malcolm X</p>
    </div>
  </div>
</section>

    </>
  );
}

export default Home;
