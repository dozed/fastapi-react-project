import { ReactElement } from 'react';
import { render as originalRender } from '@testing-library/react';

// when testing properties with fast-check, the next render will append to the body of the previous render
// this will make the tests unstable
// as a workaround we clear the document.body before doing the actual render
// see: https://github.com/testing-library/react-testing-library/issues/716
export const render = (ui: ReactElement) => {
    document.body.replaceChildren();
    return originalRender(ui);
};
