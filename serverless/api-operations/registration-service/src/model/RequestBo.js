class requestBo {
    constructor(header, body, address){
        this.email = body.Email
        this.firstName = body.FirstName
        this.lastName = body.LastName
        this.DOB = body.DOB
        this.contact = body.Phone
        this.village = address.Village
        this.post = address.Post
        this.district = address.District
        this.pinCode = address.PIN
        this.qualification = body.Qualification
        this.skills = body.Skills
        this.profession = body.Profession
    }

    toJson(){
        return {
            email: this.email,
            "date-of-birth": this.DOB,
            firstName: this.firstName,
            lastName: this.lastName,
            contact: this.contact,
            village: this.village,
            post: this.post,
            district: this.district,
            pinCode: this.pinCode,
            qualification: this.qualification,
            skills: this.skills,
            profession: this.profession,
            timeStamp: new Date().toISOString()
        }
    }
}

module.exports = requestBo