import { useState } from "react";

function Projects() {
    const [project] = useState([
        {
            name: 'Project 1'
        },
        {
            name: 'Project 2'
        },
        {
            name: 'Project 3'
        },
        {
            name: 'Project 4'
        },
        {
            name: 'Project 5'
        },
        {
            name: 'Project 6'
        },
    ])

    return (
        <div className="lg:mx-[100px] sm:mx-[40px] mx-[20px] sm:pt-[100px] pt-[60px]">
            <h2 className="text-[#E4CAA5] md:text-[60px] text-[40px] md:pb-[30px] pb-[10px] lg:mr-[70%] md:mr-[60%] border-b-4 border-[#C83649]">Projects</h2>
            <div className="flex flex-wrap md:pt-[40px] pt-[20px] justify-evenly">
                {project.map((project) => (
                    <div key={project.name}
                        className="bg-[#3C3A40] drop-shadow-lg lg:w-[30%] sm:w-[40%] w-[80%] h-[100px] mb-[40px]"
                    >
                        {project.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;