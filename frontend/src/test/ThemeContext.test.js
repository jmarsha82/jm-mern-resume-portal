import React from 'react';
import { act, renderHook, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeContextProvider, themeReducer, useTheme } from '../context/ThemeContext';

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('themeReducer handles toggle, set, and default actions', () => {
    expect(themeReducer({ isDarkTheme: true }, { type: 'TOGGLE_THEME' })).toEqual({ isDarkTheme: false });
    expect(themeReducer({ isDarkTheme: true }, { type: 'SET_THEME', payload: false })).toEqual({ isDarkTheme: false });

    const state = { isDarkTheme: true };
    expect(themeReducer(state, { type: 'UNKNOWN' })).toBe(state);
  });

  test('defaults to dark theme when localStorage has no saved value', async () => {
    const wrapper = ({ children }) => <ThemeContextProvider>{children}</ThemeContextProvider>;
    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.isDarkTheme).toBe(true);
    expect(result.current.theme.background).toBe('#1a1a1a');

    await waitFor(() => {
      expect(localStorage.getItem('isDarkTheme')).toBe('true');
    });
  });

  test('uses saved light theme preference from localStorage', () => {
    localStorage.setItem('isDarkTheme', 'false');
    const wrapper = ({ children }) => <ThemeContextProvider>{children}</ThemeContextProvider>;
    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.isDarkTheme).toBe(false);
    expect(result.current.theme.background).toBe('#f5f5f5');
  });

  test('toggleTheme and dispatch update the current theme', async () => {
    const wrapper = ({ children }) => <ThemeContextProvider>{children}</ThemeContextProvider>;
    const { result } = renderHook(() => useTheme(), { wrapper });

    act(() => {
      result.current.toggleTheme();
    });

    await waitFor(() => {
      expect(result.current.isDarkTheme).toBe(false);
    });

    act(() => {
      result.current.dispatch({ type: 'SET_THEME', payload: true });
    });

    await waitFor(() => {
      expect(result.current.isDarkTheme).toBe(true);
      expect(localStorage.getItem('isDarkTheme')).toBe('true');
    });
  });
});
