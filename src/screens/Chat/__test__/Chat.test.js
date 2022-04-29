import { render } from '@testing-library/react';
import { Chat } from '../Chat';

describe('App component', () => {
    test('it renders', () => {
        render(<Chat />);
    });
    expect(screen.Chat).toBeEmptyDOMElement;
})