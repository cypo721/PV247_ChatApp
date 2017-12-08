export const validateDelete = (response) => {
    if (response.status > 300) {
        const errorMessge = response.statusText || `Something went wrong (ending up in ${response.status})`;

        const error = new Error(errorMessge);
        error.statusCode = response.status;

        throw error;
    }
};