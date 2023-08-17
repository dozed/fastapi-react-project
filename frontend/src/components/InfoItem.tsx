import React from 'react';

import {Info} from '../data/info';

type InfoItemProps = {
    info: Info
}

const InfoItem = (props: InfoItemProps) => {
    const { info } = props;
    return (
        <span className='info-item'>
            {info.foo} - {info.bar}
        </span>
    );
};

export default InfoItem;

