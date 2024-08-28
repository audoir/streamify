import { render, screen } from '@testing-library/react';
import NavAppBar from '@/app/components/NavAppBar';
import NavDrawer from '@/app/components/NavDrawer';

describe('renders navigation', () => {
  it('renders nav app bar', () => {
    render(<NavAppBar />);
    expect(screen.getByText(/streamify/i)).toBeInTheDocument();
  })
});