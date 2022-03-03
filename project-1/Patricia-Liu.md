
1. Worked on the student.js file - 
        a. dynamic loading of data
        b. search button triggers the submit() function of the form, it reads the url parameters which will 
        contain the input field value and the checkbox selected
        c. on selecting the checkbox the submit() function of the form is triggered and the 
        table is dynamically loaded again
        d. if none of the gender is selected the table displays all the data based on the serach term
        else it also filters on the gender checked
        e. whenver the submit() function is triggered, the form reloads and the prvious selection may be lost
        as we are not using prevent default. Therefore, the url parameters are read and set back to the
        input field and checkbox

2. Added css through the style.css file