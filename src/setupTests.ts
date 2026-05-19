import "@testing-library/jest-dom";

// mock IntersectionObserver for useIsInView hook
class IntersectionObserverMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
