//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Test for navigation
//-----------------------------------------------------------------------------

import { render, screen } from '@testing-library/react';
import NavAppBar from '@/app/components/NavAppBar';

describe('renders navigation', () => {
  it('renders nav app bar', () => {
    render(<NavAppBar />);
    expect(screen.getByText(/streamify/i)).toBeInTheDocument();
  })
});