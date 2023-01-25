import { useState } from "react";

function Projects() {
    const [project] = useState([
        {
            name: 'Project 1',
            tech: 'HTML/CSS/JS',
        },
        {
            name: 'Project 2',
            tech: 'HTML/CSS/JS',
        },
        {
            name: 'Project 3',
            tech: 'HTML/CSS/JS',
        },
        {
            name: 'Project 4',
            tech: 'HTML/CSS/JS',
        },
        {
            name: 'Project 5',
            tech: 'HTML/CSS/JS',
        },
        {
            name: 'Project 6',
            tech: 'HTML/CSS/JS',
        },
    ])

    return (
        <div className="lg:mx-[100px] sm:mx-[40px] mx-[20px] sm:pt-[100px] pt-[60px]">
            <h2 className="text-[#E4CAA5] md:text-[60px] text-[40px] md:pb-[30px] pb-[10px] lg:mr-[70%] md:mr-[60%] mr-[40%] border-b-4 border-[#C83649]">Projects</h2>
            <div className="flex flex-wrap md:pt-[40px] pt-[20px] lg:justify-between justify-evenly">
                {project.map((project) => (
                    <div key={project.name}
                        className="cursor-pointer bg-[#3C3A40] drop-shadow-xl rounded-lg lg:w-[30%] sm:w-[40%] w-[80%] mb-[40px]"
                    >
                        <img alt={project.name}/>
                        <div className="text-center">
                            <h3 className="text-[#E4CAA5] text-[25px] border-b-2 border-[#C83649] mx-[25%] py-[10px]">
                                {project.name}
                            </h3>
                            <p className="text-[#F5F5F5] mt-[10px] mb-[20px]">
                                {project.tech}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;