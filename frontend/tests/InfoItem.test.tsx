import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import InfoItem from '../src/components/InfoItem';
import {Info} from '../src/data/info';
import {render} from './customRender';

describe('InfoItem', () => {
    it('shows all infos', () => {
        const info: Info = {
            foo: 'foo',
            bar: 42,
        };

        render(<InfoItem info={info} />);

        const infoItem = document.querySelector('span.info-item') as HTMLSpanElement;

        expect(infoItem).toHaveClass('info-item');
        expect(infoItem).not.toHaveClass('active');
        expect(infoItem).toHaveTextContent(`${info.foo} - ${info.bar}`);
    });

    it('marks as active', async () => {
        const info: Info = {
            foo: 'foo',
            bar: 42,
        };

        render(<InfoItem info={info} />);

        const infoItem = document.querySelector('span.info-item') as HTMLSpanElement;

        await userEvent.click(infoItem);

        expect(infoItem).toHaveClass('info-item');
        expect(infoItem).toHaveClass('active');  // InfoItem is now active
        expect(infoItem).toHaveTextContent(`${info.foo} - ${info.bar}`);

        await userEvent.click(infoItem);

        expect(infoItem).toHaveClass('info-item');
        expect(infoItem).not.toHaveClass('active');  // InfoItem is inactive again
        expect(infoItem).toHaveTextContent(`${info.foo} - ${info.bar}`);
    });
});
