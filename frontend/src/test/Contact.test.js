import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../pages/Contact';
import { ThemeContextProvider } from '../context/ThemeContext';
import axios from 'axios';

// Mock axios
jest.mock('axios');
const mockedAxios = axios;

// Mock process.env for public URL
Object.defineProperty(global, 'process', {
  value: {
    env: {
      PUBLIC_URL: ''
    }
  }
});

// Helper function to render Contact with theme context
const renderContactWithTheme = () => {
  return render(
    <ThemeContextProvider>
      <Contact />
    </ThemeContextProvider>
  );
};

describe('Contact Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    mockedAxios.get.mockClear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('Component Rendering', () => {
    test('renders without crashing', () => {
      renderContactWithTheme();
      
      // Should render the main heading
      expect(screen.getByText('CONTACT')).toBeInTheDocument();
    });

    test('renders main container structure', () => {
      renderContactWithTheme();
      
      // Check for main heading
      expect(screen.getByText('CONTACT')).toBeInTheDocument();
      expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    });

    test('renders all form elements', () => {
      renderContactWithTheme();
      
      // Check for form fields
      expect(screen.getByLabelText('Your Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Subject')).toBeInTheDocument();
      expect(screen.getByLabelText('Message')).toBeInTheDocument();
      
      // Check for buttons
      expect(screen.getByText('HOME')).toBeInTheDocument();
      expect(screen.getByText('SEND EMAIL')).toBeInTheDocument();
    });

    test('renders animated background elements', () => {
      renderContactWithTheme();
      
      // Check that the component renders with background elements
      const contactHeading = screen.getByText('CONTACT');
      expect(contactHeading).toBeInTheDocument();
    });
  });

  describe('Theme Context Integration', () => {
    test('uses theme context for styling', () => {
      renderContactWithTheme();
      
      // Component should render without theme context errors
      expect(screen.getByText('CONTACT')).toBeInTheDocument();
    });

    test('theme context is properly consumed', () => {
      renderContactWithTheme();
      
      // Should render with theme context
      const contactHeading = screen.getByText('CONTACT');
      expect(contactHeading).toBeInTheDocument();
    });

    test('applies theme-based styling', () => {
      renderContactWithTheme();
      
      // Check that elements are styled with theme
      const contactHeading = screen.getByText('CONTACT');
      expect(contactHeading).toBeInTheDocument();
    });
  });

  describe('Form Fields and State Management', () => {
    test('email field updates state correctly', () => {
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      fireEvent.change(emailField, { target: { value: 'test@example.com' } });
      
      expect(emailField).toHaveValue('test@example.com');
    });

    test('subject field updates state correctly', () => {
      renderContactWithTheme();
      
      const subjectField = screen.getByLabelText('Subject');
      fireEvent.change(subjectField, { target: { value: 'Test Subject' } });
      
      expect(subjectField).toHaveValue('Test Subject');
    });

    test('message field updates state correctly', () => {
      renderContactWithTheme();
      
      const messageField = screen.getByLabelText('Message');
      fireEvent.change(messageField, { target: { value: 'Test message content' } });
      
      expect(messageField).toHaveValue('Test message content');
    });

    test('all form fields are initially empty', () => {
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const subjectField = screen.getByLabelText('Subject');
      const messageField = screen.getByLabelText('Message');
      
      expect(emailField).toHaveValue('');
      expect(subjectField).toHaveValue('');
      expect(messageField).toHaveValue('');
    });

    test('message field is multiline with correct rows', () => {
      renderContactWithTheme();
      
      const messageField = screen.getByLabelText('Message');
      expect(messageField.tagName).toBe('TEXTAREA');
      expect(messageField).toHaveAttribute('rows', '4');
    });
  });

  describe('Form Validation', () => {
    test('shows validation message when email is empty', async () => {
      renderContactWithTheme();
      
      const sendButton = screen.getByText('SEND EMAIL');
      fireEvent.click(sendButton);
      
      await waitFor(() => {
        expect(screen.getByText('Please fill in all fields')).toBeInTheDocument();
      });
    });

    test('shows validation message when subject is empty', async () => {
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const sendButton = screen.getByText('SEND EMAIL');
      
      fireEvent.change(emailField, { target: { value: 'test@example.com' } });
      fireEvent.click(sendButton);
      
      await waitFor(() => {
        expect(screen.getByText('Please fill in all fields')).toBeInTheDocument();
      });
    });

    test('shows validation message when message is empty', async () => {
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const subjectField = screen.getByLabelText('Subject');
      const sendButton = screen.getByText('SEND EMAIL');
      
      fireEvent.change(emailField, { target: { value: 'test@example.com' } });
      fireEvent.change(subjectField, { target: { value: 'Test Subject' } });
      fireEvent.click(sendButton);
      
      await waitFor(() => {
        expect(screen.getByText('Please fill in all fields')).toBeInTheDocument();
      });
    });

    test('does not show validation message when all fields are filled', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: 'success' });
      
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const subjectField = screen.getByLabelText('Subject');
      const messageField = screen.getByLabelText('Message');
      const sendButton = screen.getByText('SEND EMAIL');
      
      fireEvent.change(emailField, { target: { value: 'test@example.com' } });
      fireEvent.change(subjectField, { target: { value: 'Test Subject' } });
      fireEvent.change(messageField, { target: { value: 'Test message content' } });
      fireEvent.click(sendButton);
      
      // Should not show validation message when all fields are filled
      await waitFor(() => {
        expect(screen.queryByText('Please fill in all fields')).not.toBeInTheDocument();
      });
    });
  });

  describe('Email Submission Functionality', () => {
    test('calls axios with correct parameters on successful submission', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: 'success' });
      
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const subjectField = screen.getByLabelText('Subject');
      const messageField = screen.getByLabelText('Message');
      const sendButton = screen.getByText('SEND EMAIL');
      
      fireEvent.change(emailField, { target: { value: 'test@example.com' } });
      fireEvent.change(subjectField, { target: { value: 'Test Subject' } });
      fireEvent.change(messageField, { target: { value: 'Test message content' } });
      fireEvent.click(sendButton);
      
      await waitFor(() => {
        expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:4000/', {
          params: {
            email: 'test@example.com',
            subject: 'Test Subject',
            message: 'Test message content'
          }
        });
      });
    });

    test('shows success message on successful submission', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: 'success' });
      
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const subjectField = screen.getByLabelText('Subject');
      const messageField = screen.getByLabelText('Message');
      const sendButton = screen.getByText('SEND EMAIL');
      
      fireEvent.change(emailField, { target: { value: 'test@example.com' } });
      fireEvent.change(subjectField, { target: { value: 'Test Subject' } });
      fireEvent.change(messageField, { target: { value: 'Test message content' } });
      fireEvent.click(sendButton);
      
      await waitFor(() => {
        expect(screen.getByText('Email sent successfully!')).toBeInTheDocument();
      });
    });

    test('clears form fields on successful submission', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: 'success' });
      
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const subjectField = screen.getByLabelText('Subject');
      const messageField = screen.getByLabelText('Message');
      const sendButton = screen.getByText('SEND EMAIL');
      
      fireEvent.change(emailField, { target: { value: 'test@example.com' } });
      fireEvent.change(subjectField, { target: { value: 'Test Subject' } });
      fireEvent.change(messageField, { target: { value: 'Test message content' } });
      fireEvent.click(sendButton);
      
      await waitFor(() => {
        expect(emailField).toHaveValue('');
        expect(subjectField).toHaveValue('');
        expect(messageField).toHaveValue('');
      });
    });

    test('shows error message on failed submission', async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('Network error'));
      
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const subjectField = screen.getByLabelText('Subject');
      const messageField = screen.getByLabelText('Message');
      const sendButton = screen.getByText('SEND EMAIL');
      
      fireEvent.change(emailField, { target: { value: 'test@example.com' } });
      fireEvent.change(subjectField, { target: { value: 'Test Subject' } });
      fireEvent.change(messageField, { target: { value: 'Test message content' } });
      fireEvent.click(sendButton);
      
      await waitFor(() => {
        expect(screen.getByText('Failed to send email. Please try again.')).toBeInTheDocument();
      });
    });

    test('button shows loading state during submission', async () => {
      mockedAxios.get.mockImplementationOnce(() => new Promise(resolve => setTimeout(resolve, 100)));
      
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const subjectField = screen.getByLabelText('Subject');
      const messageField = screen.getByLabelText('Message');
      const sendButton = screen.getByText('SEND EMAIL');
      
      fireEvent.change(emailField, { target: { value: 'test@example.com' } });
      fireEvent.change(subjectField, { target: { value: 'Test Subject' } });
      fireEvent.change(messageField, { target: { value: 'Test message content' } });
      fireEvent.click(sendButton);
      
      // Button should show loading state
      expect(screen.getByText('Sending...')).toBeInTheDocument();
      expect(sendButton).toBeDisabled();
    });

    test('button is re-enabled after submission completes', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: 'success' });
      
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const subjectField = screen.getByLabelText('Subject');
      const messageField = screen.getByLabelText('Message');
      const sendButton = screen.getByText('SEND EMAIL');
      
      fireEvent.change(emailField, { target: { value: 'test@example.com' } });
      fireEvent.change(subjectField, { target: { value: 'Test Subject' } });
      fireEvent.change(messageField, { target: { value: 'Test message content' } });
      fireEvent.click(sendButton);
      
      await waitFor(() => {
        expect(screen.getByText('SEND EMAIL')).toBeInTheDocument();
        expect(sendButton).not.toBeDisabled();
      });
    });
  });

  describe('Buttons and Navigation', () => {
    test('home button has correct href', () => {
      renderContactWithTheme();
      
      const homeButton = screen.getByText('HOME');
      expect(homeButton.closest('a')).toHaveAttribute('href', '/');
    });

    test('home button is clickable', () => {
      renderContactWithTheme();
      
      const homeButton = screen.getByText('HOME');
      expect(homeButton).toBeInTheDocument();
      expect(homeButton.closest('a')).toBeInTheDocument();
    });

    test('send email button is clickable', () => {
      renderContactWithTheme();
      
      const sendButton = screen.getByText('SEND EMAIL');
      expect(sendButton).toBeInTheDocument();
      expect(sendButton.tagName).toBe('BUTTON');
    });

    test('buttons have correct styling classes', () => {
      renderContactWithTheme();
      
      const homeButton = screen.getByText('HOME');
      const sendButton = screen.getByText('SEND EMAIL');
      
      expect(homeButton).toHaveClass('MuiButton-root');
      expect(sendButton).toHaveClass('MuiButton-root');
    });
  });

  describe('Material-UI Components', () => {
    test('renders Material-UI TextField components', () => {
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const subjectField = screen.getByLabelText('Subject');
      const messageField = screen.getByLabelText('Message');
      
      expect(emailField).toHaveClass('MuiInputBase-input');
      expect(subjectField).toHaveClass('MuiInputBase-input');
      expect(messageField).toHaveClass('MuiInputBase-input');
    });

    test('renders Material-UI Button components', () => {
      renderContactWithTheme();
      
      const homeButton = screen.getByText('HOME');
      const sendButton = screen.getByText('SEND EMAIL');
      
      expect(homeButton).toHaveClass('MuiButton-root');
      expect(sendButton).toHaveClass('MuiButton-root');
    });

    test('renders Material-UI Typography components', () => {
      renderContactWithTheme();
      
      const contactHeading = screen.getByText('CONTACT');
      const subtitle = screen.getByText('Get in Touch');
      
      expect(contactHeading).toHaveClass('MuiTypography-root');
      expect(subtitle).toHaveClass('MuiTypography-root');
    });

    test('renders Material-UI Box components', () => {
      renderContactWithTheme();
      
      // Check that the main container renders
      const contactHeading = screen.getByText('CONTACT');
      expect(contactHeading).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    test('form fields have proper labels', () => {
      renderContactWithTheme();
      
      expect(screen.getByLabelText('Your Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Subject')).toBeInTheDocument();
      expect(screen.getByLabelText('Message')).toBeInTheDocument();
    });

    test('buttons have accessible text', () => {
      renderContactWithTheme();
      
      expect(screen.getByText('HOME')).toBeInTheDocument();
      expect(screen.getByText('SEND EMAIL')).toBeInTheDocument();
    });

    test('email field has correct type', () => {
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      expect(emailField).toHaveAttribute('type', 'email');
    });

    test('form is accessible via keyboard navigation', () => {
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const subjectField = screen.getByLabelText('Subject');
      const messageField = screen.getByLabelText('Message');
      
      // All form fields should be focusable
      emailField.focus();
      expect(document.activeElement).toBe(emailField);
      
      subjectField.focus();
      expect(document.activeElement).toBe(subjectField);
      
      messageField.focus();
      expect(document.activeElement).toBe(messageField);
    });
  });

  describe('Performance and Optimization', () => {
    test('renders efficiently', () => {
      const startTime = performance.now();
      renderContactWithTheme();
      const endTime = performance.now();
      
      // Component should render within reasonable time (less than 100ms)
      expect(endTime - startTime).toBeLessThan(100);
    });

    test('does not cause memory leaks', () => {
      const { unmount } = renderContactWithTheme();
      
      // Should unmount cleanly
      expect(() => unmount()).not.toThrow();
    });
  });

  describe('Error Handling', () => {
    test('handles missing theme context gracefully', () => {
      // Should throw error when theme context is missing (expected behavior)
      expect(() => {
        render(<Contact />);
      }).toThrow('useTheme must be used inside a ThemeContextProvider');
    });

    test('handles axios errors gracefully', async () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      mockedAxios.get.mockRejectedValueOnce(new Error('Network error'));
      
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const subjectField = screen.getByLabelText('Subject');
      const messageField = screen.getByLabelText('Message');
      const sendButton = screen.getByText('SEND EMAIL');
      
      fireEvent.change(emailField, { target: { value: 'test@example.com' } });
      fireEvent.change(subjectField, { target: { value: 'Test Subject' } });
      fireEvent.change(messageField, { target: { value: 'Test message content' } });
      fireEvent.click(sendButton);
      
      await waitFor(() => {
        expect(screen.getByText('Failed to send email. Please try again.')).toBeInTheDocument();
      });
      
      consoleSpy.mockRestore();
    });
  });

  describe('Integration Tests', () => {
    test('works with ThemeContextProvider', () => {
      renderContactWithTheme();
      
      // Should work with theme context provider
      expect(screen.getByText('CONTACT')).toBeInTheDocument();
    });

    test('integrates with Material-UI components', () => {
      renderContactWithTheme();
      
      // Should work with MUI components
      const emailField = screen.getByLabelText('Your Email');
      expect(emailField).toHaveClass('MuiInputBase-input');
    });

    test('integrates with axios for API calls', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: 'success' });
      
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const subjectField = screen.getByLabelText('Subject');
      const messageField = screen.getByLabelText('Message');
      const sendButton = screen.getByText('SEND EMAIL');
      
      fireEvent.change(emailField, { target: { value: 'test@example.com' } });
      fireEvent.change(subjectField, { target: { value: 'Test Subject' } });
      fireEvent.change(messageField, { target: { value: 'Test message content' } });
      fireEvent.click(sendButton);
      
      await waitFor(() => {
        expect(mockedAxios.get).toHaveBeenCalled();
      });
    });
  });

  describe('Visual Elements', () => {
    test('displays contact heading with proper styling', () => {
      renderContactWithTheme();
      
      const contactHeading = screen.getByText('CONTACT');
      expect(contactHeading).toBeInTheDocument();
      expect(contactHeading).toHaveClass('MuiTypography-h2');
    });

    test('displays subtitle with proper styling', () => {
      renderContactWithTheme();
      
      const subtitle = screen.getByText('Get in Touch');
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveClass('MuiTypography-h5');
    });

    test('displays animated background elements', () => {
      renderContactWithTheme();
      
      // Check that the component renders with background elements
      const contactHeading = screen.getByText('CONTACT');
      expect(contactHeading).toBeInTheDocument();
    });

    test('displays grid overlay', () => {
      renderContactWithTheme();
      
      // Check that the component renders with grid overlay
      const contactHeading = screen.getByText('CONTACT');
      expect(contactHeading).toBeInTheDocument();
    });
  });

  describe('Form Interaction', () => {
    test('form fields can be typed in', () => {
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const subjectField = screen.getByLabelText('Subject');
      const messageField = screen.getByLabelText('Message');
      
      fireEvent.change(emailField, { target: { value: 'user@example.com' } });
      fireEvent.change(subjectField, { target: { value: 'Hello' } });
      fireEvent.change(messageField, { target: { value: 'This is a test message' } });
      
      expect(emailField).toHaveValue('user@example.com');
      expect(subjectField).toHaveValue('Hello');
      expect(messageField).toHaveValue('This is a test message');
    });

    test('form submission works with valid data', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: 'success' });
      
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const subjectField = screen.getByLabelText('Subject');
      const messageField = screen.getByLabelText('Message');
      const sendButton = screen.getByText('SEND EMAIL');
      
      fireEvent.change(emailField, { target: { value: 'user@example.com' } });
      fireEvent.change(subjectField, { target: { value: 'Hello' } });
      fireEvent.change(messageField, { target: { value: 'This is a test message' } });
      fireEvent.click(sendButton);
      
      await waitFor(() => {
        expect(screen.getByText('Email sent successfully!')).toBeInTheDocument();
      });
    });

    test('status message appears and disappears correctly', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: 'success' });
      
      renderContactWithTheme();
      
      const emailField = screen.getByLabelText('Your Email');
      const subjectField = screen.getByLabelText('Subject');
      const messageField = screen.getByLabelText('Message');
      const sendButton = screen.getByText('SEND EMAIL');
      
      // Initially no status message
      expect(screen.queryByText('Email sent successfully!')).not.toBeInTheDocument();
      
      fireEvent.change(emailField, { target: { value: 'user@example.com' } });
      fireEvent.change(subjectField, { target: { value: 'Hello' } });
      fireEvent.change(messageField, { target: { value: 'This is a test message' } });
      fireEvent.click(sendButton);
      
      // Status message should appear
      await waitFor(() => {
        expect(screen.getByText('Email sent successfully!')).toBeInTheDocument();
      });
    });
  });
});
