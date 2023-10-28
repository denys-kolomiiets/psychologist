export const serverErrorMessage = (error) => {
    let errorMessage = '';

    if (error.message.includes('400')) {
        errorMessage = 'Bad Request';
    } else if (error.message.includes('403')) {
        errorMessage = 'Forbidden';
    } else if (error.message.includes('404')) {
        errorMessage = 'Not Found';
    } else if (error.message.includes('422')) {
        errorMessage = 'User exist!';
    } else {
        console.error(error);
        errorMessage = 'Try again later';
    }
    return errorMessage;
};
