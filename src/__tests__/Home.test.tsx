//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Test for main page
//-----------------------------------------------------------------------------

import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('renders navigation', () => {
  it('renders nav app bar', () => {
    render(<Home />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    // mocks required to test api
  })
});