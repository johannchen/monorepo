import 'jest-dom/extend-expect';
import { render, cleanup } from 'react-testing-library';
import Layout from './Layout';

test('render footer', () => {
  const { getByTestId } = render(<Layout />);
  expect(getByTestId('footer')).toHaveTextContent('copyright');
  cleanup();
});
