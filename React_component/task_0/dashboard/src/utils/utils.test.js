import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear
test('getFullYear retorna el año actual', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// Test for getFooterCopy
test('getFooterCopy retorna la cadena correcta cuando el arguemnto es true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy retorna la cadena correcta cuando el arguemnto es false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

// Test for getLatestNotification
test('getLatestNotification retorna la cadena correcta.', () => {
  const expectedString =
    '<strong>Urgent requirement</strong> - complete by EOD';
  expect(getLatestNotification()).toBe(expectedString);
});