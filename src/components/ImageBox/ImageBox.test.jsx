import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageBox from './ImageBox'; // Adjust the path to your component

describe('ImageBox Component', () => {
  test('renders the image with correct src and alt attributes', () => {
    const imageSrc = 'https://example.com/image.jpg';
    const imageAlt = 'Background';

    render(<ImageBox imageSrc={imageSrc} />);

    // Check if the image is rendered with the correct src and alt attributes
    const image = screen.getByAltText(imageAlt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', imageSrc);
    expect(image).toHaveAttribute('alt', imageAlt);
  });

  test('renders the text content component', () => {
    const TextContent = <div>Sample Text</div>;

    render(<ImageBox imageSrc="" TextContentComponent={TextContent} />);

    // Check if the text content is rendered
    const text = screen.getByText(/sample text/i);
    expect(text).toBeInTheDocument();
  });

  test('renders the button component if passed', () => {
    const ButtonComponent = <button>Click Me</button>;

    render(<ImageBox imageSrc="" ButtonComponent={ButtonComponent} />);

    // Check if the button is rendered
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  test('does not render the button container if no ButtonComponent is passed', () => {
    render(<ImageBox imageSrc="" />);

    // Check if no button container is rendered when no ButtonComponent is passed
    const buttonContainer = screen.queryByRole('button');
    expect(buttonContainer).not.toBeInTheDocument();
  });

  test('renders the gradient overlay', () => {
    render(<ImageBox imageSrc="" />);

    // Check if the gradient overlay is rendered
    const gradientOverlay = screen.getByTestId('gradient-overlay');
    expect(gradientOverlay).toBeInTheDocument();
  });
});
