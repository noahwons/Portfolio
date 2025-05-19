import React from 'react'
import Project from './Project'

const Projects = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <Project title={"Cy Match"} imageSrc={""} description={"Cy Match enables users to find a job with the click of a button. This project allows users to save and dismiss real jobs, while also allowing the user to create a profile and upload their resume."} link={"https://github.com/noahwons/cymatch"} />
                <Project title={"M2I: CyLaunch"} imageSrc={""} description={"Developed the embedded software for the payload device, hitting 8/8 NASA datapoints pre-launch"} link={"https://github.com/CyLaunch/Payload_Spring_25"} />
                <Project title={"Image Detection Model"} imageSrc={""} description={"Developed and trained a model responsible for identifing bubbles in viles for scientific analysis."} link={"https://youtube.com/shorts/JZtv6VgSbyo?feature=share"} />
                <Project title={"Calcly"} imageSrc={""} description={"Developed a mobile application using Flutter responsible for communicating with an AI model trained on previous calculus exams from Iowa State University"} link={"https://github.com/noahwons/Calcly"} />
                <Project title={"Math Medic"} imageSrc={""} description={"Built a fully functional graphical calulator website with mathplot lib and other python libraries"} link={"https://github.com/noahwons/MathMedic/tree/main"} />
                <Project title={"Task Manager"} imageSrc={""} description={"Built a terminal based python application enabling the user to create, schedule and display tasks while also providing a reccomendation feature."} link={"https://www.youtube.com/watch?v=MFiSZ3vivt8"} />
            </div>
        </div>
    )
}

export default Projects