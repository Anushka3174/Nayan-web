import UserApi from '../ApiInterface/userApi.jsx';
export default class UserApiImpl extends UserApi {
    constructor(url) {
        super();
        this.url = url;
    }
}