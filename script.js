var Project = class{
    
    constructor(projectName,technologiesUsed, description, listItems, githubRepo,video,id, image ) {
        this.name = projectName;
        this.githubRepo = githubRepo;
        this.description=description;
        this.image_src=image;
        this.videoURL=video;
        this.tech=technologiesUsed.join();
        this.projectID=id;
        this.listItems=listItems;

        

        var myHTML='<div class="project-wrapper" id="%pro-id%"><span></span> <h4>%title%</h4> <p>Technologies Used: %tech%</p> <p>%description%</p><ul id="%project-list%"></ul><img src="%image-src%" alt="" class="image-wrapper" id="%image-id%"><div class="video-wrapper" id="%video-id%"> <iframe width="560" height="315" src="%videoURL%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div> <a href="%github%" target="_blank", class="project-link" id="%git-id%"><i class="fab fa-github"></i> Click Here To See The Github Repository </a> </div>';
        var newHTML=myHTML.replace('%title%',this.name);
        newHTML=newHTML.replace('%tech%',this.tech);
        newHTML=newHTML.replace('%description%',this.description);
        newHTML=newHTML.replace('%image-src%',this.image_src);
        newHTML=newHTML.replace('%image-id%','img'+this.projectID);
        newHTML=newHTML.replace('%videoURL%',this.videoURL);
        newHTML=newHTML.replace('%video-id%','video'+this.projectID);
        newHTML=newHTML.replace('%github%',this.githubRepo);
        newHTML=newHTML.replace('%pro-id%',this.projectID);
        newHTML=newHTML.replace('%git-id%','git'+this.projectID);
        newHTML=newHTML.replace('%project-list%','list'+this.projectID);


        
        document.querySelector('.wrapper-content').insertAdjacentHTML('beforeend',newHTML);
        if(!image){
            console.log('no image');
            this.removeElement('img'+this.projectID);
        }
        if(!video){
            console.log('no video');
            this.removeElement('video'+this.projectID);
        }
        if(!githubRepo){
            console.log('no github repo');
            this.removeElement('git'+this.projectID);
        }
        if(!listItems.length){
            console.log('no list')
        }
        else{
            this.addList();
        }

        //this.transition();

    }

    // transition(){
    //     tl.from("#"+this.projectID,1,{x:200, opacity:0});
    //     tl.from('span',0.5,{width:0},"=-0.5");


    //     const scene=new ScrollMagic.Scene({
    //         triggerElement: "#"+this.projectID,
    //         triggerHook: "onLeave",
    //         offset: 30,
    //         duration: 30,
    //     })
    //     //.setTween('#'+this.projectID, {x: '-50%'})
    //     .setPin("#"+this.projectID).addTo(controller);

    // }

    addList(){
        var ul = document.getElementById('list'+this.projectID);
            for(var i=0; i<this.listItems.length;i++){
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(this.listItems[i]));
                ul.appendChild(li);
            }
    }

    removeElement(elementClass) {
        // Removes an element from the document
        var element = document.getElementById(elementClass);
        element.parentNode.removeChild(element);
    }
}

var tl= new TimelineMax({onUpdate:updatePercentage});
const controller= new ScrollMagic.Controller();

var paragraphZero="Grash is an Android Application built to provide university students with advice about the economic and environmental sustainability of their purchase decisions.";
var paragraphOne='PillSafe is an application built to classify medication using computer vision and machine learning techniques. I developed this as part of a research internship with the National University of Singapore. Users can enter a pill into the database with a single click of the camera. Users can also remove pills and re-insert them to account for the continually changing nature of medical advances.';
var paragraphTwo="A semester long mapping application dedicated towards assisting tourists in finding their way around a new city. This GIS is designed to be visually appealing and find routes efficiently! We programmed this application in a team of 3 in C++, using GTK for the GUI. Features I programmed specifically include:";
var paragraphThree="An arcade game developed in Verilog. Object of the game is to \"catch\" the stars and \"avoid\" the asteroids with the spaceship. I worked on this project with a partner for my Digital Systems course as a final project. My role involved creating an algorithm to randomly generate stars and asteroids, as well as writing a Finite State Machine to control game state. ";
var paragraphFour="A web application that allows banks to provide customized Income Share Agreements for students to pay off their tuition rather than cumbersome student loans. Features I programmed include:";
var paragraphFive="A web application that allows users to customize their clothing choice based on sustainable brands.";

var Fabrical= new Project('Fabrical - 5th Place and Best Fashion Hack Winner at UofTHacks',['Python',' Google Vision',' Heroku',' Flask',' AWS',' MySQL'], paragraphFive,
['Deployed a Flask REST API on Heroku to receive image and user data from the front end','Used Google Vision API to extract key fashion features from the user','Built a MySQL database hosted on AWS of various clothing items and related features (eg. ID, purchase link, company)','Returned a list of recommendations to the frontend','Check out the project at www.fabrical.me'],"https://github.com/yifei-tang/UofTHacksBackend","https://www.youtube.com/embed/d3qbEo4aYDA",'pro-6',"");
var Grash= new Project('Grash - $2000 TD API Winner at Hack The North',['Python',' Azure',' Flask',' MySQL'],paragraphZero,['Used Azure Optical Character Recognition and Python to retrieve and analyze grocery data from  a receipt','Deployed a RESTful API server with Flask, receiving image data and POSTing data to the front-end','Built a MySQL database to retrieve environmental data from a table based off of the USDA\'s food food database'],"https://github.com/IoanaBruj/hack-the-north", '','pro-0','images/grash.jpg');
var StudentDebt= new Project('Not A-Loan - $2000 2nd Place Winner at RBC AmpHacks',['Python',' Flask',' jQuery', ' AJAX'],paragraphFour,['Deployed a REST API with flask to communicate between front-end and backend','Used AJAX and jQuery to POST collected user information to the Flask server','Determined an individualized ISA repayment rate (fixed) with projected user income (determined with a KNN algorithmn on the input data), displaying it on the website'],'https://github.com/lmustafa/financefrontend','https://www.youtube.com/embed/7UbYGe5VnOg','pro-4','');
var PillSafe = new Project('PillSafe', ['Python', ' OpenCV', ' Tensorflow', ' MySQL', ' PyQt'],paragraphOne,[], "https://github.com/yifei-tang/Deep-Learning-For-Medication-Recognition",'https://www.youtube.com/embed/cBi3HyIVfxg','pro-1',"");
var Onion = new Project('Onion GIS', ['C++', ' GTK', ' Dark Sky API', ' Open Street Maps API'], paragraphTwo,['Webscrapping live weather data using Dark Sky API and displaying it when the map is loaded.', "Using Dijkstra's algorithm to find the shortest path between locations in a city.", "Displaying popular locations such as restaurants, gas stations and schools with icons."],'',"https://www.youtube.com/embed/fzdEG83E4oo",'pro-2',"");
var StarCatcher = new Project('StarCatcher', ['Verilog', ' PS-2 Controller', ' DE1-SoC Board'], paragraphThree,[], "https://github.com/yifei-tang/Star-Catcher-Project",'https://www.youtube.com/embed/c-0cN4G2e08','pro-3',"");

tl.from('#pro-6',1,{x:200, opacity:0});
tl.from('#pro-0',1,{x:200, opacity:0});
tl.from("#pro-4",1,{x:200, opacity:0});
tl.from("#pro-1",1,{x:200, opacity:0});
tl.from("#pro-2",1,{x:200, opacity:0});
tl.from("#pro-3",1,{x:200, opacity:0});

tl.from('span',0.5,{width:0},"=-0.5");


const scene=new ScrollMagic.Scene({
    triggerElement: "#pro-1",
    triggerHook: "onLeave",
    offset: 30,
    duration: 30,
})
.setTween('#pro-1', {x: '-50%'})
.setPin("#pro-1").addTo(controller);


function updatePercentage(){
    tl.progress();
}