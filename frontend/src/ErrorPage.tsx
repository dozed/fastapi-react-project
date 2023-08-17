import {FallbackProps} from 'react-error-boundary/dist/declarations/src/types';


const getErrorMessage = (error: any): string => {
    console.error(error);

    if (error instanceof Response) {
        return `${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
        return error.message;
    } else if (typeof error === 'string') {
        return error;
    } else {
        return 'Unknown error';
    }
};

const ErrorPage = (props: FallbackProps) => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const { error, resetErrorBoundary } = props;
    const errorMessage = getErrorMessage(error);

    return (
        <div className='error-page'>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errorMessage}</i>
            </p>
        </div>
    );
};

export default ErrorPage;
