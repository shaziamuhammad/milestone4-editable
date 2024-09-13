var _a;
// listing elements
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get referenceto form elements using IDs
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var addressElement = document.getElementById('address');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && addressElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var address = addressElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // create resume output
        var resumeHTML = "\n<h2> Editable Resume</h2>\n".concat(profilePictureURL ?
            "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n\n<p><strong>Name:</strong>  <span contenteditable=\"true\">").concat(name_1, "</span></p>\n<p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span> </p>\n\n<p><strong>Address:</strong><span contenteditable=\"true\"> ").concat(address, "</span> </p>\n<p><strong>Phone Number:</strong> <span contenteditable=\"true\">").concat(phone, "</span> </p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
        }
        else {
            console.error('the resume output elements are missing ');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
