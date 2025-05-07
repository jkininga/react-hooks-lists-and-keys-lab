import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);


  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <span></span>
        {/* render ProjectItem components here */}
        
       {projects.map((p)=>(<ProjectItem 
           key = {p.id} name = {p.name} about =
           {p.about} technologies={p.technologies} />)

          
      
        )
        }
        
        </div>
    </div>
  );
}

export default ProjectList;
