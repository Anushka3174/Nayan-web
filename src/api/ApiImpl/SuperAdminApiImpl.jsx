import SuperAdminApi from '../ApiInterface/superAdminApi';
export default class SuperAdminApiImpl extends SuperAdminApi {
    constructor(url) {
        super();
        this.url = url;
    }
}