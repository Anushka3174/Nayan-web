export const envType = {
    'LOCAL': 2,
    'DEV': 3,
    'PROD': 4
};
// define the server in use, the url in each environment can be seen under api>index.jsx
const env = envType.DEV;

export default env;