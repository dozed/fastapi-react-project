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

        const orcidElem = document.querySelector('span.info-item') as HTMLSpanElement;

        expect(orcidElem).toHaveTextContent(`${info.foo} - ${info.bar}`);
    });
});
