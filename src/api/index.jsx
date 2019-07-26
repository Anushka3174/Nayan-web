import env from "../config/index.jsx";
import {envType} from "../config/index.jsx";
import {urlLocal,urlDev,urlProd} from "../constant/constant.jsx";
import GuruApiImpl from './ApiImpl/GuruApiImpl.jsx';
import SuperAdminApiImpl from './ApiImpl/SuperAdminApiImpl.jsx';
import TranslatorApiImpl from './ApiImpl/TranslatorApiImpl.jsx';
import UserApiImpl from './ApiImpl/UserApiImpl';
//define url for the environment in use
let apiGuru;
let apiTranslator;
let apiSuperAdmin;
let apiUser;

switch (env) {
    case envType.LOCAL:
        apiGuru=new GuruApiImpl(urlLocal);
        apiTranslator=new TranslatorApiImpl(urlLocal);
        apiSuperAdmin=new SuperAdminApiImpl(urlLocal);
        apiUser=new UserApiImpl(urlLocal);
        break;
    case envType.DEV:
        apiGuru=new GuruApiImpl(urlDev);
        apiTranslator=new TranslatorApiImpl(urlDev);
        apiSuperAdmin=new SuperAdminApiImpl(urlDev);
        apiUser=new UserApiImpl(urlDev);
        break;
    case envType.PROD:
        apiGuru=new GuruApiImpl(urlProd);
        apiTranslator=new TranslatorApiImpl(urlProd);
        apiSuperAdmin=new SuperAdminApiImpl(urlProd);
        apiUser=new UserApiImpl(urlProd);
        break;
    default:
        apiGuru=new GuruApiImpl(urlLocal);
        apiTranslator=new TranslatorApiImpl(urlLocal);
        apiSuperAdmin=new SuperAdminApiImpl(urlLocal);
        apiUser=new UserApiImpl(urlLocal);
}

export default {apiSuperAdmin,apiTranslator,apiGuru,apiUser};