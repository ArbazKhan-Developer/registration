class requestBo {
    constructor(header, body, address){
        this.firstName = body.FirstName
        this.lastName = body.LastName
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
            timeStamp: new Date().toISOString(),
            firstName: this.firstName,
            lastName: this.lastName,
            contact: this.contact,
            village: this.village,
            post: this.post,
            district: this.district,
            pinCode: this.pinCode,
            qualification: this.qualification,
            skills: this.skills,
            profession: this.profession
        }
    }
}

module.exports = requestBo