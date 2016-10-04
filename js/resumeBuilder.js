var bio = {
    "name": "Pooja Ramaswamy",
    "role": "Web Developer",
    "contacts": {
        "mobile": "9099936024",
        "github": "poojaramaswamy",
        "email": "poojaramaswamy94@gmail.com",
        "location": "Mumbai"
    },
    "welcomeMessage": "Welcome to my resume. Below, please find my skills, work history, and education",
    "skills": ["Embedded C,", "C,", "C++,", "MySQL,", "HTML,", "CSS,", "Web Developing,", "Microsoft Office."],
    "biopic": "images/me.jpg"
};

//var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
//var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
//var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcome);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


    //$("#header").append(formattedMobile);
    //$("#header").append(formattedEmail);
    //$("#header").append(formattedLocation);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

    for (var j = 0; j < formattedContactInfo.length; j++) {
        $("#topContacts").append(formattedContactInfo[j]);
        $("#footerContacts").append(formattedContactInfo[j]);
    }
};

bio.display();
var work = {
    "jobs": [{
        "employer": "Infosys",
        "title": "System Engineer",
        "location": "Mysore",
        "dates": "Jan 2017 - March 2017",
        "description": "Got placed in campus placement in 2015. Trainee for 3 months"
    }, {
        "employer": "Infosys",
        "title": "Senior System Engineer",
        "location": "Pune",
        "dates": "March 2017 - March 2018",
        "description": "After clearing training got posting in Pune and working on a project"
    }]
};


work.display = function() {
    if (work.jobs.length > 0) {


        for (job = 0; job < work.jobs.length; job++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedemployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedtitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedemployertitle = formattedemployer + formattedtitle;
            $(".work-entry:last").append(formattedemployertitle);
            var formattedyears = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedyears);
            var formattedcity = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedcity);
            var formatteddescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formatteddescription);
        }
    }
};

work.display();

var education = {
    "schools": [{
        "name": "National Institute of Technology, Surat",
        "datesAttended": '2012 - 2016',
        "location": "Surat, Gujarat, India",
        "degree": "B.Tech in Electronics and Communication Engineering",
        "major": ["Electronics and Communication"],
        "url": "https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiOvPDJl5vPAhVEl5QKHV9cCN0QFggeMAA&url=http%3A%2F%2Fwww.svnit.ac.in%2F&usg=AFQjCNHVUp6M2OCbwT5lHglNvpNNNPQSbQ"
    }, {
        "name": "Our Own English High School, Sharjah",
        "datesAttended": "2006 - 2012",
        "location": "Sharjah, UAE",
        "degree": "Higher Secondary and High School",
        "major": ["Computer Science"],
        "url": "http://www.gemsoo-sharjah.com/"
    }, {
        "name": "Modern English School, Mumbai",
        "datesAttended": "2001 - 2006",
        "location": "Mumbai, Maharashtra, India",
        "degree": "Secondary School",
        "major": ["Physics Chemistry Maths"],
        "url": "http://chhedanagareducationsociety.org.in/"
    }],

    "onlineCourses": [{
        "school": "Udacity",
        "title": "Object-Oriented Javascript",
        "dates": "On going",
        "url": "https://www.udacity.com/course/ud015"
    }, {
        "school": "Udacity",
        "title": "HTML5 Canvas",
        "dates": "Aug 2016 - Sept 2016",
        "url": "https://www.udacity.com/course/ud292"
    }, {
        "school": "Udacity",
        "title": "Javascript Basics",
        "dates": "Aug 2016 - Sept 2016",
        "url": "https://www.udacity.com/course/ud804"
    }, {
        "school": "Udacity",
        "title": "Intro to HTML and CSS",
        "dates": "Aug 2016 - Sept 2016",
        "url": "https://www.udacity.com/course/ud304"
    }, {
        "school": "Udacity",
        "title": "Web Development",
        "dates": "On going",
        "url": "https://www.udacity.com/course/cs253"
    }]
};

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

            if (education.schools[i].major.length > 0) {
                var len = education.schools[i].major.length;
                for (var major = 0; major < len; major++) {
                    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major[major]);
                    $(".education-entry:last").append(formattedSchoolMajor);
                }
            }

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);

        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (i = 0; i < education.onlineCourses.length; i++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
};

education.display();

var projects = {
    "projects": [{
        "title": "Surveillance & Control of Home Appliances using Internet of things ",
        "dates": "December 2014 - January 2016",
        "description": " In this project various appliances in a house can be controlled by the user by means of smart phones or any other interface. Technically: All these appliances are connected to each other over the internet and is built with the help of a Raspberry-Pi platform and an ESP-8266 platform.Wherein, if the user presses a button in order to switch on and off a particular appliance in any of the room he or she can do so from anywhere over the internet. There is a surveillance camera which are connected with motion sensors these sensors detect if there is any movement in the house and when dittected it takes snapshots and sends email notifications to the owner. ",
        "images": ["images/Smarthome.jpg"],
        "url": "#"
    }, {
        "title": "Online Portfolio",
        "dates": "October 2014",
        "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
            "Nanodegree.",
        "images": ["images/Portfolio.png"],
        "url": "#"
    }, {
        "title": "Password Protected Door Lock System Using 8051",
        "dates": "June 2014 - August 2014",
        "description": "Made a Password protected Door Lock system using 8051 Microcontroller. The door lock system is programed such that the lock opens only when the user enters the correct password or else it will not",
        "images": ["images/doorlock.png"],
        "url": "#"
    }]
};



projects.display = function() {
    var lengthProjects = projects.projects.length;
    for (var project = 0; project < lengthProjects; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedtopic = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedtopic);
        var formatteddate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formatteddate);
        var formatteddetail = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formatteddetail);

        if (projects.projects[project].images.length > 0)
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }
    }
};

projects.display();

$("#mapDiv").append(googleMap);