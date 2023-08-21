import {InfosResponse} from './data/info';

const handleError = (res: Response): void => {
    if (res.status === 404) {
        throw new Response('Not Found', {status: 404});
    } else if (res.status !== 200) {
        throw new Response('Error', {status: res.status});
    }
};

const doFetch = async (url: string) => {
    const res = await fetch(url);

    handleError(res);

    return res;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const doPost = async (url: string, jsonData: any) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    });

    handleError(res);

    return res;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const doPatch = async (url: string, jsonData: any) => {
    const res = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    });

    handleError(res);

    return res;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const doDelete = async (url: string) => {
    const res = await fetch(url, {
        method: 'DELETE'
    });

    handleError(res);

    return res;
};

export const getInfos = async () => {
    const res = await doFetch('/api/infos');
    const infosResponse = await res.json() as InfosResponse;
    return infosResponse.infos;
};
