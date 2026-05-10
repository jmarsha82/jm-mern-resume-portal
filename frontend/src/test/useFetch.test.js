import { act, renderHook, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import useFetch from '../useFetch';

describe('useFetch', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    global.fetch = jest.fn();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  test('returns fetched data on success', async () => {
    const payload = [{ id: 1, title: 'resume' }];
    global.fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(payload),
    });

    const { result } = renderHook(() => useFetch('/api/data'));

    expect(result.current.data).toBeNull();
    expect(result.current.isPending).toBe(true);
    expect(result.current.error).toBeNull();

    act(() => {
      jest.advanceTimersByTime(200);
    });

    await waitFor(() => {
      expect(result.current.data).toEqual(payload);
      expect(result.current.isPending).toBe(false);
      expect(result.current.error).toBeNull();
    });

    expect(global.fetch).toHaveBeenCalledWith('/api/data', expect.objectContaining({ signal: expect.any(AbortSignal) }));
    expect(console.log).toHaveBeenCalledWith(payload);
  });

  test('sets error when the response is not ok', async () => {
    global.fetch.mockResolvedValue({
      ok: false,
      json: jest.fn(),
    });

    const { result } = renderHook(() => useFetch('/api/error'));

    act(() => {
      jest.advanceTimersByTime(200);
    });

    await waitFor(() => {
      expect(result.current.data).toBeNull();
      expect(result.current.isPending).toBe(false);
      expect(result.current.error).toBe('Could not fetch data for that resource');
    });
  });

  test('clears the delayed fetch when unmounted before the timeout fires', () => {
    const { unmount } = renderHook(() => useFetch('/api/slow'));

    unmount();

    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(global.fetch).not.toHaveBeenCalled();
  });

  test('handles aborted requests without setting an error', async () => {
    global.fetch.mockImplementation((url, { signal }) => new Promise((resolve, reject) => {
      signal.addEventListener('abort', () => {
        const error = new Error('aborted');
        error.name = 'AbortError';
        reject(error);
      });
    }));

    const { unmount } = renderHook(() => useFetch('/api/abort'));

    act(() => {
      jest.advanceTimersByTime(200);
    });

    unmount();

    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith('fetch aborted');
    });
  });
});
