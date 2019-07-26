import NobilisApi from "./NobilisApi.jsx";

let Xtenant='';
let currentLocation = window.location.hostname;
let subdomain = currentLocation.split(".");
if(subdomain[0]==="nobilis" || subdomain[0]==="www"  ){
    window.location.href = "http://www.nobilisai.com/";
}else if(subdomain[0]==="localhost" || subdomain[0]==="192"){
    Xtenant="infotmt";
}else{
    Xtenant=subdomain[0];
}
console.log(subdomain,Xtenant);
export default class NobilisApiImpl extends NobilisApi {
    constructor(url) {
        super();
        this.url = url;
    }


    // To upload individual resume or to sync a file
    uploadBulkData(value, adminAuth) {

        return fetch(this.url + "/upload-bulk-resumes", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + adminAuth.token,
                'Xtenant':Xtenant,
            },
            body: value
        });
    }

    //To view all the users in the search page. Called before search page is loaded
    searchPage(data, token) {
        return fetch(this.url + "/get-all-resume?page=" + data.page + "&size=" + data.size+"&sort="+data.sortField+","+data.sortOrder, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Xtenant':Xtenant,
            }
        })
    }

    //Use to get the result of the parsed data of the applicant. Called after clicking the table row in search page
    getApplicantsDetail(id, token) {
        return fetch(this.url + "/get-resume/" + id, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            }
        })
    }

//Called during login
    adminAuth(username, password) {
        return fetch(this.url + "/auth", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })

    }

// To post a job. Called on submitting a new job post
    postJob(data, auth) {
        data['postedBy'] = auth.username;
        return fetch(this.url + "/jd", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + auth.token,
                'Content-Type': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(data)
        });
    }
    updateJob(data, auth) {
        data['postedBy'] = auth.username;
        return fetch(this.url + "/jd", {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + auth.token,
                'Content-Type': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(data)
        });
    }
    // To get list of all the jobs posted. It is called before the position page is loaded
    getAllJobs(data, token) {
        return fetch(this.url + "/jd?page=" + data.page + "&size=" + data.size+"&active="+data.status+"&sort="+data.sortField+","+data.sortOrder, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Xtenant':Xtenant,
            }
        })
    }

// To display all the detail about a particular job. This is called on clicking on the job title row in position
    getPositionDetail(id, token) {
        return fetch(this.url + "/jd/" + id, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Xtenant':Xtenant,
            }
        })

    }

//To get the list of position to display in the dropdown selection of UploadCV page
    getPosition(token) {
        return fetch(this.url + "/jd/titles", {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            }
        })
    }

//To post comment in cvDetailPage
    postComment(token, data) {
        return fetch(this.url + "/comment", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(data)
        });

    }

    getAppliedJobs(data, params, token) {
        return fetch(this.url + "/job/get-all-resumes?page=" + params.page + "&size=" + params.size+"&sort="+params.sortField+","+params.sortOrder+"&sort=resume.personal.name,ASC", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(data)
        });

    }

    UpdatePersonalDetail(token, data) {
        return fetch(this.url + "/update-resume", {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(data)
        });
    }

    updateStatus(data, token) {
        return fetch(this.url + "/update-status", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(data)
        })
    }

    updateName(token, data) {
        return fetch(this.url + "/save-update/personal/name", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(data)
        })
    }

    updateAddress(token, data) {
        return fetch(this.url + "/save-update/personal/address", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(data)
        })
    }

    addNewEmail(token, data) {
        return fetch(this.url + "/save-update/personal/email", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(data)
        })
    }

    addNewContact(token, data) {
        return fetch(this.url + "/save-update/personal/contact", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(data)
        })
    }

    getPositionDetailResume(data, token) {
        return fetch(this.url + "/job/get-resume", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(data)
        })

    }

    setFilter(token,filterId){
        return fetch(this.url+"/filter/"+filterId,{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/pdf',
                'Xtenant':Xtenant,
            }
        })
    }

    postDataToFilter(params,data,token){
        let url = this.url + "/filter?page=" + params.page + "&size=" + params.size+"&sort="+params.sortField+","+params.sortOrder;
        return fetch(this.url + "/filter?page=" + params.page + "&size=" + params.size+"&sort="+params.sortField+","+params.sortOrder, {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(data)
        })
    }
    deleteEmail(data,resumeId,token){
        return fetch(this.url + "/"+resumeId+"/delete/email", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(data)
        })
    }

    deleteContact(data,resumeId,token){
        return fetch(this.url + "/"+resumeId+"/delete/contact", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(data)
        })
    }

    getSkillsList(data,token){
        return fetch(this.url + "/filter/get-skill-data?search="+data, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            }
        })
    }

    getPositionsList(data,token){
        return fetch(this.url + "/filter/get-position-data?search="+data,{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            }
        })
    }

    getKeywordsList(data,token){
        return fetch(this.url + "/filter/get-keyword-data?search="+data,{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            }
        })
    }

    saveFilter(data,token){
        return fetch(this.url + "/filter/save", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(data)
        })
    }
    getFilters(params,token){
        return fetch(this.url+"/filter/all?size="+params.size+"&page="+params.page+"&sort="+params.sortField+","+params.sortOrder,{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            }
        })

    }
    getFilteredCandidates(params,token,filterId,){
        return fetch(this.url+"/filter/"+filterId+"/resumes?size="+params.size+"&page="+params.page+"&sort="+params.sortField+","+params.sortOrder,{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            }
        })

    }

    updateResume(value,token){
        return fetch(this.url + "/update-resume", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Xtenant':Xtenant,
            },
            body: value
        });
    }

    uploadCoverletter(value,token){
        return fetch(this.url + "/letter", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Xtenant':Xtenant,
            },
            body: value
        });
    }

    uploadDocuments(value,token){
        return fetch(this.url + "/document", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Xtenant':Xtenant,
            },
            body: value
        });
    }
    addJobPosition(token,value){
        return fetch(this.url + "/resume/add-jds", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(value)
        });
    }

    addTags(token,value){

        return fetch(this.url + "/resume/add-tags", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(value)
        });
    }

    deleteCoverLetter(value,token){
        return fetch(this.url + "/letter", {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(value)
        });
    }

    deleteDocuments(value,token){
        return fetch(this.url + "/document", {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            },
            body: JSON.stringify(value)
        });
    }

    getTenantNames(){
        return fetch(this.url+"/tenant",{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Xtenant':Xtenant,
            }
        })
    }

    postTenantName(tenant){
        return fetch(this.url + "/tenant", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Xtenant': Xtenant,
            },
        });
    }

    loadResume(token,id){
        return fetch(this.url+"/load-resume?id="+id,{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/pdf',
                'Xtenant':Xtenant,

            }
        })
    }

    loadCoverLetter(token,id){
        return fetch(this.url+"/letter/"+id,{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/pdf',
                'Xtenant':Xtenant,
            }
        })
    }

    loadDocuments(token,id){
        return fetch(this.url+"/document/"+id,{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/pdf',
                'Xtenant':Xtenant,
            }
        })
    }

    getSettings(token){
        return fetch(this.url+"/setting/get/",{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/pdf',
                'Xtenant':Xtenant,
            }
        })
    }

    saveCompanyDetails(token,data){
        return fetch(this.url + "/setting/save/company-detail", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Xtenant': Xtenant,
            },
            body: JSON.stringify(data),
        });
    }

    deleteCompanyDetail(data,token){
        return fetch(this.url + "/setting/delete/company-detail", {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Xtenant': Xtenant,
            },
            body: JSON.stringify(data),
        });
    }

    saveHiringFlow(data,token){
        return fetch(this.url + "/setting/save/hiring-flow", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Xtenant': Xtenant,
            },
            body: JSON.stringify(data),
        });
    }

    deleteHiringFlow(data,token){
        return fetch(this.url + "/setting/delete/hiring-flow", {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Xtenant': Xtenant,
            },
            body: JSON.stringify(data),
        });
    }

    editHiringFlow(data,token){
        return fetch(this.url + "/setting/edit/hiring-flow", {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Xtenant': Xtenant,
            },
            body: JSON.stringify(data),
        });
    }
    saveJobFlow(data,token){
        return fetch(this.url + "/setting/save/job-flow", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Xtenant': Xtenant,
            },
            body: JSON.stringify(data),
        });
    }

    deleteJobFlow(data,token){
        return fetch(this.url + "/setting/delete/job-flow", {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Xtenant': Xtenant,
            },
            body: JSON.stringify(data),
        });
    }

    editJobFlow(data,token){
        return fetch(this.url + "/setting/edit/job-flow", {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Xtenant': Xtenant,
            },
            body: JSON.stringify(data),
        });
    }

    getDateFormat(token){
        return fetch(this.url+"/setting/get/date-format",{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/pdf',
                'Xtenant':Xtenant,
            }
        })
    }

    saveDateFormat(data,token){
        return fetch(this.url + "/setting/edit/date-format", {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Xtenant': Xtenant,
            },
            body: JSON.stringify(data),
        });
    }
    getMatrix(token){
        return fetch(this.url+"/dashboard/count",{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/pdf',
                'Xtenant':Xtenant,
            }
        })
    }
    getChartData(token,year){

        return fetch(this.url + "/dashboard/chart", {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Xtenant': Xtenant,
            },
            body: JSON.stringify(year),
        });
    }


    editCompanyDetail(token,data){
        return fetch(this.url + "/setting/edit/company-detail", {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Xtenant': Xtenant,
            },
            body: JSON.stringify(data),
        })
    };




    getJobFlow(token) {
        return fetch(this.url+"/setting/get/job-flow",{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/pdf',
                'Xtenant':Xtenant,
            }
        })
    }

    getHiringFlow(token){
        return fetch(this.url+"/setting/get/hiring-flow",{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/pdf',
                'Xtenant':Xtenant,
            }
        })
    }

    getTracker(token){
        return fetch(this.url+"/tracker",{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/pdf',
                'Xtenant':Xtenant,
            }
        })
    }

    softDeleteResume(ids,token){
        return fetch(this.url + "/resume/soft-delete", {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Xtenant': Xtenant,
            },
            body: JSON.stringify(ids),
        });
    }

    updateJobStatus(data,token){
        return fetch(this.url + "/jd/status", {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Xtenant': Xtenant,
            },
            body: JSON.stringify(data),
        });
    }
    getPositionChartData(token,jdId){
        return fetch(this.url+"/job/"+jdId+"/graph",{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/pdf',
                'Xtenant':Xtenant,
            }
        })
    }
    getCompanyLocation(token){
        return fetch(this.url+"/setting/get/company-detail",{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/pdf',
                'Xtenant':Xtenant,
            }
        })
    }

}


