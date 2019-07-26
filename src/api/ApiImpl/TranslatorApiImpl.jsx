import TranslatorApi from '../ApiInterface/translatorApi.jsx';
export default class TranslatorApiImpl extends TranslatorApi {
    constructor(url) {
        super();
        this.url = url;
    }
}