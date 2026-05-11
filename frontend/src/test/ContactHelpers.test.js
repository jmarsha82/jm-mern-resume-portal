import { getEmailJsConfig, getEmailJsErrorMessage, buildEmailJsTemplateParams } from '../pages/Contact';

describe('Contact helper functions', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = {
      ...originalEnv,
      REACT_APP_EMAILJS_SERVICE_ID: 'service-id',
      REACT_APP_EMAILJS_TEMPLATE_ID: 'template-id',
      REACT_APP_EMAILJS_PUBLIC_KEY: 'public-key',
      REACT_APP_EMAILJS_TO_EMAIL: 'to@example.com',
    };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  test('reads EmailJS configuration from environment variables', () => {
    expect(getEmailJsConfig()).toEqual({
      serviceId: 'service-id',
      templateId: 'template-id',
      publicKey: 'public-key',
      toEmail: 'to@example.com',
    });
  });

  test('returns fallback and structured EmailJS error messages', () => {
    expect(getEmailJsErrorMessage()).toBe('Unknown EmailJS error');
    expect(getEmailJsErrorMessage('plain string error')).toBe('plain string error');
    expect(getEmailJsErrorMessage({ text: 'text error' })).toBe('text error');
    expect(getEmailJsErrorMessage({ message: 'message error' })).toBe('message error');
    expect(getEmailJsErrorMessage({})).toBe('Unknown EmailJS error');
  });

  test('builds template params including recipient aliases', () => {
    expect(buildEmailJsTemplateParams({
      email: 'sender@example.com',
      subject: 'Hello',
      message: 'Testing',
      toEmail: 'to@example.com',
    })).toEqual({
      from_email: 'sender@example.com',
      from_name: 'sender@example.com',
      reply_to: 'sender@example.com',
      subject: 'Hello',
      message: 'Testing',
      to_email: 'to@example.com',
      toEmail: 'to@example.com',
      recipient_email: 'to@example.com',
      recipient: 'to@example.com',
    });
  });
});
