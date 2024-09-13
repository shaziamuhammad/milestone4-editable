// listing elements
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault() ;

    // Get referenceto form elements using IDs
   
   const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement ;
    const nameElement = document.getElementById('name') as HTMLInputElement ;
    const emailElement = document.getElementById('email') as HTMLInputElement ;
    const addressElement = document.getElementById('address') as HTMLInputElement ;
    const phoneElement = document.getElementById('phone') as HTMLInputElement ;
    const educationElement = document.getElementById('education') as HTMLInputElement ;
    const experienceElement = document.getElementById('experience') as HTMLInputElement ;
    const skillsElement = document.getElementById('skills') as HTMLInputElement ;

   
   if (profilePictureInput && nameElement && emailElement && addressElement && phoneElement && educationElement && experienceElement && skillsElement){
        const name = nameElement.value ;
        const email = emailElement.value ;
        const address = addressElement.value ;
        const phone = phoneElement.value ;
        const education = educationElement.value ;
        const experience = experienceElement.value ;
        const skills = skillsElement.value ;
    
    // picture elements
    const profilePictureFile = profilePictureInput.files?.[0] 
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
    

    // create resume output
    const resumeHTML =  `
<h2> Editable Resume</h2>
${
    profilePictureURL ? 
    `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""
}

<p><strong>Name:</strong>  <span contenteditable="true">${name}</span></p>
<p><strong>Email:</strong> <span contenteditable="true">${email}</span> </p>

<p><strong>Address:</strong><span contenteditable="true"> ${address}</span> </p>
<p><strong>Phone Number:</strong> <span contenteditable="true">${phone}</span> </p>

<h3>Education</h3>
<p contenteditable="true">${education}</p>

<h3>Experience</h3>
<p contenteditable="true">${experience}</p>

<h3>Skills</h3>
<p contenteditable="true">${skills}</p>

    `;
    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeHTML
    } else{console.error ('the resume output elements are missing ')

    }
    } else{
        console.error ('one or more output elements are missing')
    }
})
