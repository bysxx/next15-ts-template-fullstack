import NavBar from '@components/ui/global-nav';
import { render, screen } from '@testing-library/react';

import Wrapper from '../TestWrapper';

describe('Navbar Test', () => {
  test('NavBar Text', async () => {
    render(
      <Wrapper>
        <NavBar />
      </Wrapper>,
    );

    expect(await screen.findByText(/Next 15/)).toBeInTheDocument();
    expect(await screen.findByText(/Example/)).toBeInTheDocument();
  });
});
