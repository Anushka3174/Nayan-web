export default class NobilisApi{
//The higher functions for the api calls made in NobilisApiImpl
    uploadBulkData(){} //upload bulk resumes by admin
    searchPage(){}//pagination in admin
    getApplicantsDetail(){}
    adminAuth(){}   //for admin token and username
    PostJob(){}  //to post a job
    getAllJobs(){} //to get list of all jobs
    getPositionDetail(){} // to get detail of position
    getPosition(){}  //to get position for dropdown
    getcomments(){} //to get comment on user
    postComment(){} // to post comment on user
    getAppliedJobs(){}
    UpdatePersonalDetail(){}// To update personal data in Cv detail page
    updateStatus(){}  //to update resume status i.e accepted/rejected/inProgress
    getPositionDetailResume(){}  // similar to getPositionDetail() but with some additional datas
    getResumeById(){}
    postDataToFilter(){}  // to filter data in table
    deleteEmail(){}
    deleteContact(){}
    getSkillsList(){}
    getPositionsList(){}
    getKeywordsList(){}
    saveFilter(){}
    updateResume(){}
    deleteCoverLetter(){}
    deleteDocuments(){}
    getTenantNames(){}
    postTenantName(){}
    loadResume(){}  //to get path to view resume eg documents/abc.pdf
    loadCoverLetter(){} //same as above
    loadDocuments(){} //same as above
    getSettings(){} //to get all the settings for editing
    saveCompanyDetails(){}
    deleteCompanyDetail(){}
    saveHiringFlow(){} //to save the hiring flow example accepted,denied,in process
    deleteHiringFlow(){} //to delete the hiring flow
    editHiringFlow(){}  // to sort the hiring flow
    getMatrix(){}//get data of matrixes
    saveJobFlow(){} // to save the job flow example open,close
    deleteJobFlow(){}
    editJobFlow(){}
    getDateFormat(){}
    saveDateFormat(){}
    editCompanyDetail(){}
    getJobFlow(){} //to get list of saved job flow
    getHiringFlow(){}
    getTracker(){} //to get the number of file that has been uploaded
    softDeleteResume(){} //to delete resume
    updateJobStatus(){}  //to update the job status eg Active, closed
    getPositionChartData(){}//gets candidate date and their score for position

}