import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page'

describe('Home', () => {
  it('renders the home page', () => {

    //Arrange  
    render(<Home />);

    //Acting
    const myElem = screen.getByText(/Get started by editing/)

    //Assert
    expect(myElem).toBeInTheDocument();
  });

  it('it should containe the word Save', () => {
    //Arrange  
    render(<Home />);
    //Acting
    const myElem = screen.getByText(/save/i)
    //Assert
    expect(myElem).toBeInTheDocument();
});

  it('it should have a heading', () => {
    //Arrange  
    render(<Home />);
    //Acting
    const myElem = screen.getByRole(/save/i)
    //Assert
    expect(myElem).toBeInTheDocument();
});

});