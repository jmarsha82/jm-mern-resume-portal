import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import Contact from '../pages/Contact';
import { ThemeContextProvider } from '../context/ThemeContext';

jest.mock('axios');

const renderContactWithTheme = () =>
  render(
    <ThemeContextProvider>
      <Contact />
    </ThemeContextProvider>
  );

describe('Contact Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
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
    expect(axios.post).not.toHaveBeenCalled();
  });

  test('posts contact data to the email endpoint and clears the form', async () => {
    axios.post.mockResolvedValueOnce({ data: { success: true } });
    renderContactWithTheme();

    fireEvent.change(screen.getByLabelText('Your Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Test message content' } });
    fireEvent.click(screen.getByRole('button', { name: 'SEND EMAIL' }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('/api/contact', {
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'Test message content'
      });
    });

    expect(await screen.findByText('Email sent successfully!')).toBeInTheDocument();
    expect(screen.getByLabelText('Your Email')).toHaveValue('');
    expect(screen.getByLabelText('Subject')).toHaveValue('');
    expect(screen.getByLabelText('Message')).toHaveValue('');
  });

  test('shows an error message when the email request fails', async () => {
    axios.post.mockRejectedValueOnce(new Error('Network error'));
    renderContactWithTheme();

    fireEvent.change(screen.getByLabelText('Your Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Test message content' } });
    fireEvent.click(screen.getByRole('button', { name: 'SEND EMAIL' }));

    expect(await screen.findByText('Failed to send email. Please try again.')).toBeInTheDocument();
  });
});
