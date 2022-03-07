
import {React, useState, useEffect} from 'react';
// import {Modal, Button} from 'react-bootstrap';
import './style.css'
import ProjModal from '../ProjModal'
import EThumb from '../../asset/images/emerald_thumb.png'
import EThumb2 from '../../asset/images/emerald_thumb2.png'
import MMadness from '../../asset/images/MovieMadness.png'
import MMadness2 from '../../asset/images/MovieMadness2.png'
import WStation from '../../asset/images/weather-dt.png'
import WStation2 from '../../asset/images/weather-dt2.png'
import JSQuiz from '../../asset/images/JS_Quiz.png'
import JSQuiz2 from '../../asset/images/JS_Quiz2.png'
import BGWall from '../../asset/images/wall-bluegreen.jpg'
import TSite from '../../asset/images/team-site.png'
import TSite2 from '../../asset/images/team-site2.png'
import RegexGist from '../../asset/images/RegexGist.png'
import Esale from '../../asset/images/esale.png'
import Esale2 from '../../asset/images/esale2.png'
import SocialStack from '../../asset/images/SocialStack.png'




const Projects = () => {

        const [modalShow, setModalShow] = useState(false);
        const [image, setImage] = useState({});
        const placeHolders = [];
        const images = [
                {id: 1, 
                title: 'Emerald Thumb', 
                languages: 'HTML / CSS / Handlebars / JS / Node / Express / MySQL', 
                url: [EThumb, EThumb2],
                description:'This was a group project, in which we built a simple app to help people plan square-foot gardens. It calculates the total number of square feet you have available, lets you select what kinds of vegetables you would like to grow, and then lists how many of each type you will need to fulfill your plan. It also provides you with a dynamically-rendered visual representation of your future garden. I was responsible for developing the logic of the forms, and managing the connection of the frontend and backend.',
                github: 'https://github.com/BUButtercup/How-Does-Your-Garden-Grow-',
                deployed:'https://serene-dusk-36944.herokuapp.com/'
                }, 
                {id: 2,
                title: 'Movie Madness',
                languages: 'HTML / CSS / JS', 
                url: [MMadness, MMadness2],
                description: 'This was a group project, in which we build a simple movie search site. You can search by title or genre. I was responsible for the JS logic to process API results and get them displayed on the page.',
                github: 'https://github.com/BUButtercup/MovieMadness',
                deployed: 'https://bubuttercup.github.io/MovieMadness/'
                }, 
                {id: 3,
                title: 'WeatherStation',
                languages:'HTML / CSS / JQuery', 
                url: [WStation, WStation2],
                description: 'This app provides the user with the weather based on the city they search. The app helps them find the right city by filtering by state/country, and provides them with some information about potential UV exposure as well. It stores the user\'s previous city search values in local storage and provides them as buttons for revisiting, until they clear the previous searches area of the app intentionally.',
                github: 'https://github.com/BUButtercup/weather_station',
                deployed: 'https://bubuttercup.github.io/weather_station/'
                }, 
                {id: 4,
                title: 'e-sale',
                languages: 'JS / Node / Express / Sequelize / MySQL',
                url: [Esale, Esale2],
                description: 'This is a backend application for an imaginary e-commerce site. It includes both an Express.js server with routing and a MySQL database connected throught the Sequelize ORM. It provides a total of fifteen CRUD routes to manipulate seed data. GET routes can be run directly through the deployed Heroku application, and all other functionality may be tested throught an API platform. Detailed instructions for testing the application both on your local computer as a cloned GitHub repository and using the deployed site are included in the GitHub README.md.',
                github: 'https://github.com/BUButtercup/e-sale',
                deployed: 'https://e-sale-nkc.herokuapp.com/'},
                {id: 5,
                title: 'socialStack',
                languages: 'JS / Node / Express / Mongoose / MongoDB',
                url: [SocialStack],
                description: 'This is a backend application for a simple imaginary social media site. It includes both an Express.js server with routing and a MongoDB database connected throught the Mongoose ORM. It provides a total of fourteen CRUD routes to manipulate data. There is no seed data provided, so users must implement the POST routes before being able to test the others. This project is not deployed, but all functionality may be tested throught an API platform. Detailed instructions for testing the application on your local computer as a cloned GitHub are included in the GitHub README.md, along with a video walkthrough of setup and testing.',
                github: 'https://github.com/BUButtercup/social-stack'},   
                {id: 6,
                title: 'Team Site Generator',
                languages:'JS / HTML / CSS', 
                url: [TSite, TSite2],
                description: 'This program is a CLI that uses npm inquirer to help the user build a static HTML team site. It could be fleshed out quite a bit to help the user launch a site with a db connection, and imbedded access to slack or texting.',
                github: 'https://github.com/BUButtercup/team-site',
                deployed: null},
                {id: 7,
                title: 'JS Quiz',
                languages: 'HTML / CSS / JS',
                url: [JSQuiz, JSQuiz2],
                description: 'This is a quiz app that asks the player five questions about JavaScript. If they get them right, their score increases. If they get them wrong, their time is docked. I would love to expand this idea into a series of interactive games about the different languages for beginners who do not learn well in a lecture setting.',
                github: 'https://github.com/BUButtercup/week3-quiz',
                deployed: 'https://bubuttercup.github.io/week3-quiz/'},   
                {id: 8,
                title: 'Regex Rundown',
                languages: 'Regex',
                url: [RegexGist],
                description: 'This is a GitHub Gist breaking down a piece of regex that verifies a whether a string contains letters and numbers, and that it does not have special characters. Regex is such a powerful tool, I\'m glad to be learning more and more about it.',
                github: 'https://gist.github.com/BUButtercup/d746975f56f5a973eb575b0fd9c79bd8',
                deployed: null
        }]

        const buildPlaceholders = () => {
                for(let i = 0; i<(12-images.length); i++){
                        placeHolders.push(BGWall)
                }
        }

        buildPlaceholders()

        const sendInfo = e => {
                // e.preventDefault();
                console.log('which image?',images[parseInt(e.target.tabIndex)-1])
                const clickedImg = images[parseInt(e.target.tabIndex)-1]
                setImage(clickedImg);    
        }

      
    return (
        <div style={{width: "100%", height: "100", display: "flex", marginBottom: "10vh", marginTop: "10vh"}}>
                <h1 className="sb">My Projects</h1>
                <div style={{display: "flex", borderLeft: " 3px solid var(--dark)", paddingLeft: "3vw"}}>
                        <div style={{display: "flex", flexWrap: "wrap"}}>
                           

                                {images.map(image=> 
                                <div className="proj-card">
                                        <div className="proj-card-img  btn"  key={image.id} onMouseDown={sendInfo} onMouseUp={()=> setModalShow(true)} tabIndex={image.id}style={{backgroundImage: `url(${image.url[0]})`}}>
                                                <div className="proj-text-box" tabIndex={image.id} onMouseDown={sendInfo} onMouseUp={()=> setModalShow(true)} >
                                                <p className="proj-text" >{image.title}</p>
                                                <p className="proj-subtext" >{image.languages}</p>
                                                </div>
                                        </div>
                                </div>
                                )}
                                {placeHolders.map(url=>
                                <div className="proj-card">
                                        <div className="proj-place-holder" style={{backgroundImage: `url(${url})`}}>
                                                <p className="proj-ph-text">Coming Soon!</p>
                                        </div>
                                </div>
                                )}

                                <ProjModal
                                image={image}
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                />
                        </div>
                </div>
        </div>
        )
}

export default Projects;


