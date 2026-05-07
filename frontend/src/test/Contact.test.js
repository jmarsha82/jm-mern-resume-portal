import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import emailjs from '@emailjs/browser';
import Contact from '../pages/Contact';
import { ThemeContextProvider } from '../context/ThemeContext';

jest.mock('@emailjs/browser', () => ({
  send: jest.fn()
}));

const originalEnv = process.env;

const renderContactWithTheme = () =>
  render(
    <ThemeContextProvider>
      <Contact />
    </ThemeContextProvider>
  );

describe('Contact Component', () => {
  let consoleErrorSpy;

  beforeEach(() => {
    jest.clearAllMocks();
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    process.env = {
      ...originalEnv,
      REACT_APP_EMAILJS_SERVICE_ID: 'service_test',
      REACT_APP_EMAILJS_TEMPLATE_ID: 'template_test',
      REACT_APP_EMAILJS_PUBLIC_KEY: 'public_test',
      REACT_APP_EMAILJS_TO_EMAIL: 'recipient@example.com'
    };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  test('renders the contact form', () => {
    renderContactWithTheme();

    expect(screen.getByText('CONTACT')).toBeInTheDocument();
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Subject')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'SEND EMAIL' })).toBeInTheDocument();
  });

  test('shows validation when fields are missing', async () => {
    renderContactWithTheme();

    fireEvent.click(screen.getByRole('button', { name: 'SEND EMAIL' }));

    expect(await screen.findByText('Please fill in all fields')).toBeInTheDocument();
    expect(emailjs.send).not.toHaveBeenCalled();
  });

  test('sends contact data through EmailJS and clears the form', async () => {
    emailjs.send.mockResolvedValueOnce({ status: 200, text: 'OK' });
    renderContactWithTheme();

    fireEvent.change(screen.getByLabelText('Your Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Test message content' } });
    fireEvent.click(screen.getByRole('button', { name: 'SEND EMAIL' }));

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledWith('service_test', 'template_test', {
        from_email: 'test@example.com',
        from_name: 'test@example.com',
        reply_to: 'test@example.com',
        subject: 'Test Subject',
        message: 'Test message content',
        to_email: 'recipient@example.com'
      }, 'public_test');
    });

    expect(await screen.findByText('Email sent successfully!')).toBeInTheDocument();
    expect(screen.getByLabelText('Your Email')).toHaveValue('');
    expect(screen.getByLabelText('Subject')).toHaveValue('');
    expect(screen.getByLabelText('Message')).toHaveValue('');
  });

  test('shows an error message when the email request fails', async () => {
    emailjs.send.mockRejectedValueOnce(new Error('Network error'));
    renderContactWithTheme();

    fireEvent.change(screen.getByLabelText('Your Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Test message content' } });
    fireEvent.click(screen.getByRole('button', { name: 'SEND EMAIL' }));

    expect(await screen.findByText('Failed to send email: Network error')).toBeInTheDocument();
  });

  test('shows a configuration error when EmailJS env vars are missing', async () => {
    process.env = { ...originalEnv };
    renderContactWithTheme();

    fireEvent.change(screen.getByLabelText('Your Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Test message content' } });
    fireEvent.click(screen.getByRole('button', { name: 'SEND EMAIL' }));

    expect(await screen.findByText('Contact form is not configured yet.')).toBeInTheDocument();
    expect(emailjs.send).not.toHaveBeenCalled();
  });
});
