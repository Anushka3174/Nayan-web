import GuruApi from '../ApiInterface/guruApi.jsx';
export default class GuruApiImpl extends GuruApi {
    constructor(url) {
        super();
        this.url = url;
    }
}