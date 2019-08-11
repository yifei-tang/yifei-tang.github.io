var Project = class{
    
    constructor(projectName,technologiesUsed, description, listItems, githubRepo,video,id ) {
        this.name = projectName;
        this.githubRepo = githubRepo;
        this.description=description;
        this.videoURL=video;
        this.tech=technologiesUsed.join();
        this.projectID=id;
        this.listItems=listItems;

        

        var myHTML='<div class="project-wrapper"> <h4>%title%</h4> <p>Technologies Used: %tech%</p> <p>%description%</p><ul id="%project-list%"></ul><div class="video-wrapper"> <iframe width="560" height="315" src="%videoURL%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div> <a href="%github%" target="_blank", class="project-link" id="%git-id%"><i class="fab fa-github"></i> Click Here To See The Github Repository </a> </div>';
        var newHTML=myHTML.replace('%title%',this.name);
        newHTML=newHTML.replace('%tech%',this.tech);
        newHTML=newHTML.replace('%description%',this.description);
        newHTML=newHTML.replace('%videoURL%',this.videoURL);
        newHTML=newHTML.replace('%github%',this.githubRepo);
        newHTML=newHTML.replace('%git-id%','git'+this.projectID);
        newHTML=newHTML.replace('%project-list%','list'+this.projectID);


        
        document.querySelector('.wrapper-content').insertAdjacentHTML('beforeend',newHTML);

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
    }

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

var paragraphOne='PillSafe is an application built to classify medication using computer vision and machine learning techniques. I developed this as part of a research internship with the National University of Singapore. Users can enter a pill into the database with a single click of the camera. Users can also remove pills and re-insert them to account for the continually changing nature of medical advances.';
var paragraphTwo="A semester long mapping application dedicated towards assisting tourists in finding their way around a new city. This GIS is designed to be visually appealing and find routes efficiently! We programmed this application in a team of 3 in C++, using GTK for the GUI. Features I programmed specifically include:";
var paragraphThree="An arcade game developed in Verilog. Object of the game is to \"catch\" the stars and \"avoid\" the asteroids with the spaceship. I worked on this project with a partner for my Digital Systems course as a final project. My role involved creating an algorithm to randomly generate stars and asteroids, as well as writing a Finite State Machine to control game state. ";

var PillSafe = new Project('PillSafe', ['Python', ' OpenCV', ' Tensorflow', ' MySQL', ' PyQt'],paragraphOne,[], "https://github.com/yifei-tang/Deep-Learning-For-Medication-Recognition",'https://www.youtube.com/embed/cBi3HyIVfxg','pro-1');
var Onion = new Project('Onion GIS', ['C++', ' GTK', ' Dark Sky API', ' Open Street Maps API'], paragraphTwo,['Webscrapping live weather data using Dark Sky API and displaying it when the map is loaded.', "Using Dijkstra's algorithm to find the shortest path between locations in a city.", "Displaying popular locations such as restaurants, gas stations and schools with icons."],'',"https://www.youtube.com/embed/fzdEG83E4oo",'pro-2');
var PillSafe = new Project('PillSafe', ['Verilog', ' PS-2 Controller', ' DE1-SoC Board'], paragraphThree,[], "https://github.com/yifei-tang/Star-Catcher-Project",'https://www.youtube.com/embed/c-0cN4G2e08','pro-3');

