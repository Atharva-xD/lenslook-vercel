// Book.js
import React, { useState, useRef } from 'react';
import './Book.css';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Eye, Clock, Users, MapPin, CheckCircle, Star } from 'lucide-react';

const Book = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    address: '',
    timeSlot: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.from_name) errors.from_name = 'Name is required';
    if (
      !formData.from_email ||
      !formData.from_email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) errors.from_email = 'Invalid email address';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.timeSlot) errors.timeSlot = 'Time slot is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitting(true);
      try {
        await emailjs.sendForm('service_kaszvw1', 'template_89b92u8', form.current, 'veBJ3jhU_ONNTfYFX');
        alert('Slot booked successfully! Confirmation email sent.');
        setFormData({
          from_name: '',
          from_email: '',
          address: '',
          timeSlot: ''
        });
        setErrors({});
      } catch (error) {
        alert('Failed to book slot. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const features = [
    { icon: Star, title: "Expert Frame Styling", description: "Professional styling consultation" },
    { icon: Clock, title: "Flexible Time Slots", description: "Choose your convenient time" },
    { icon: Users, title: "Personalized Consultation", description: "One-on-one expert guidance" },
    { icon: MapPin, title: "Convenient Location", description: "Easy to reach location" }
  ];

  const steps = [
    { number: "01", title: "Fill the Form", description: "Provide your name, email, and select a time slot." },
    { number: "02", title: "Confirm Your Slot", description: "Receive a confirmation email immediately after booking." },
    { number: "03", title: "Get Ready", description: "We'll prepare everything for your visit based on your input." },
    { number: "04", title: "Visit and Enjoy", description: "Arrive on time and enjoy personalized attention!" }
  ];

  return (
    <div className="book-wrapper">
      {/* Header Section */}
      <section className="book-header">
        <div className="book-label">
          <Eye size={16} color="#9c5820" />
          <span>BOOK APPOINTMENT</span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Schedule Your Perfect Eyewear Experience
        </motion.h1>
        <motion.p
          className="description"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get expert care and premium service by scheduling a visit with us. We provide top-notch
          eyewear consultations, personalized fittings, and a seamless booking experience.
        </motion.p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon">
                <feature.icon size={24} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Booking Section */}
      <section className="booking-main">
        <div className="booking-container">
          {/* Booking Form */}
          <motion.div
            className="book-form-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="form-header">
              <h2>Book Your Slot</h2>
              <p>Fill in your details to secure your appointment</p>
            </div>
            
            <form ref={form} onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Full Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className={errors.from_name ? 'error-input' : ''}
                  required
                />
                {errors.from_name && <div className="error-message">{errors.from_name}</div>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email Address"
                  value={formData.from_email}
                  onChange={handleChange}
                  className={errors.from_email ? 'error-input' : ''}
                  required
                />
                {errors.from_email && <div className="error-message">{errors.from_email}</div>}
              </div>

              <div className="form-group">
                <textarea
                  name="address"
                  placeholder="Your Complete Address"
                  value={formData.address}
                  onChange={handleChange}
                  className={errors.address ? 'error-input' : ''}
                  rows="3"
                  required
                ></textarea>
                {errors.address && <div className="error-message">{errors.address}</div>}
              </div>

              <div className="form-group">
                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className={errors.timeSlot ? 'error-input' : ''}
                  required
                >
                  <option value="">Select your preferred time slot</option>
                  <option value="09:00-10:00">09:00 AM - 10:00 AM</option>
                  <option value="10:00-11:00">10:00 AM - 11:00 AM</option>
                  <option value="11:00-12:00">11:00 AM - 12:00 PM</option>
                  <option value="12:00-13:00">12:00 PM - 01:00 PM</option>
                  <option value="13:00-14:00">01:00 PM - 02:00 PM</option>
                  <option value="14:00-15:00">02:00 PM - 03:00 PM</option>
                  <option value="15:00-16:00">03:00 PM - 04:00 PM</option>
                  <option value="16:00-17:00">04:00 PM - 05:00 PM</option>
                </select>
                {errors.timeSlot && <div className="error-message">{errors.timeSlot}</div>}
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="loading">
                    <div className="spinner"></div>
                    Booking...
                  </span>
                ) : (
                  <>
                    <CheckCircle size={18} />
                    Book My Slot
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Steps Guide */}
          <motion.div
            className="steps-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="steps-header">
              <h2>How It Works</h2>
              <p>Simple steps to book your appointment</p>
            </div>

            <div className="steps-list">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="step-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Book;