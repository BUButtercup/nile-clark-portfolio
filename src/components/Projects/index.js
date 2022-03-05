
import {React, useState} from 'react';
import './style.css'
import EThumb from '../../asset/images/emerald_thumb.png'
import MMadness from '../../asset/images/MovieMadness.png'
import WStation from '../../asset/images/weather-dt.png'
import JSQuiz from '../../asset/images/JS_Quiz.png'
import BGWall from '../../asset/images/wall-bluegreen.jpg'




const Projects = () => {
        const [isHovering, setIsHovering] = useState(false)
        let val;
        if(isHovering){
           val = 1;
        } else {val=0}

        const images = [
                {id: 1, 
                title: 'Emerald Thumb', 
                languages: 'HTML / CSS / Handlebars / JS / Node / MySQL', 
                url: EThumb
                }, 
                {id: 2,
                title: 'Movie Madness',
                languages: 'HTML / CSS / JS', url: MMadness
                }, 
                {id: 3,
                title: 'WeatherStation',
                languages:'HTML / CSS / JQuery', 
                url: WStation
                }, 
                {id: 4,
                title: 'JS Quiz',
                languages: 'HTML / CSS / JS',url: JSQuiz}]

        const populatePlaceholders = () => {
                
        }

    return (
        <div style={{width: "100%", height: "100", display: "flex"}}>
                <h1 className="sb">Projects</h1>
                <div style={{display: "flex", borderLeft: " 3px solid var(--dark)"}}>
                        <div style={{display: "flex", flexWrap: "wrap"}}>
                           

                                {images.map(image=> 
                                <div className="proj-card">
                                        <div className="proj-card-img" onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)} key={image.id} style={{backgroundImage: `url(${image.url})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                                                <div className="proj-text-box" style={{opacity:`${val}`}}>
                                                <p className="proj-text" >{image.title}</p>
                                                <p className="proj-subtext" >{image.languages}</p>
                                                </div>
                                        </div>
                                </div>
                                )}
                                {populatePlaceholders()}
                                <div className="proj-card">
                                        <div className="proj-place-holder">
                                                <p className="proj-ph-text">Coming Soon!</p>
                                        </div>
                                </div>
                                <div className="proj-card">
                                        {/* <img style={{width: "90%", height: "90%"}}>
                                        </img> */}
                                        <div className="proj-place-holder">
                                                <p className="proj-ph-text">Coming Soon!</p>
                                        </div>
                                </div>
                                <div className="proj-card">
                                        {/* <img style={{width: "90%", height: "90%"}}>
                                        </img> */}
                                        <div className="proj-place-holder">
                                        <p className="proj-ph-text">Coming Soon!</p>
                                        </div>
                                </div>
                                <div className="proj-card">
                                        {/* <img style={{width: "90%", height: "90%"}}>
                                        </img> */}
                                        <div className="proj-place-holder">
                                                <p className="proj-ph-text">Coming Soon!</p>
                                        </div>
                                </div>
                                <div className="proj-card">
                                        {/* <img style={{width: "90%", height: "90%"}}>
                                        </img> */}
                                        <div className="proj-place-holder">
                                                <p className="proj-ph-text">Coming Soon!</p>
                                        </div>
                                </div>
                                <div className="proj-card">
                                        {/* <img style={{width: "90%", height: "90%"}}>
                                        </img> */}
                                        <div className="proj-place-holder">
                                                <p className="proj-ph-text">Coming Soon!</p>
                                        </div>
                                </div>
                                <div className="proj-card">
                                        {/* <img style={{width: "90%", height: "90%"}} >
                                        </img> */}
                                        <div className="proj-place-holder">
                                                <p className="proj-ph-text">Coming Soon!</p>
                                        </div>
                                </div>
                                <div className="proj-card">
                                        {/* <img style={{width: "90%", height: "90%"}}>
                                        </img> */}
                                        <div className="proj-place-holder">
                                                <p className="proj-ph-text">Coming Soon!</p>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
        )

}

export default Projects;