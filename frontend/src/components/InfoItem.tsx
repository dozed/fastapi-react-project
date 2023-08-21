import React, {useState} from 'react';
import classNames from 'classnames';

import {Info} from '../data/info';

type InfoItemProps = {
    info: Info
}

const InfoItem = (props: InfoItemProps) => {
    const {info} = props;
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <span className={classNames({'info-item': true, 'active': isActive})}
              onClick={() => setIsActive(!isActive)}
        >
            {info.foo} - {info.bar}
        </span>
    );
};

export default InfoItem;

