import React, {useEffect, useState} from 'react';

import InfoItem from './components/InfoItem';
import {Info} from './data/info';
import * as api from './api';

const DashboardPage = () => {
    const [infos, setInfos] = useState<Info[]>([]);

    useEffect(() => {
        api.getInfos()
            .then((infos) => setInfos(infos));
    }, []);

    return (
        <>
            <div>Dashboard</div>
            <ul>
                {infos.map((info, i) =>
                    <li key={`info-${i}`}>
                        <InfoItem info={info} />
                    </li>
                )}
            </ul>
        </>
    );
};

export default DashboardPage;
