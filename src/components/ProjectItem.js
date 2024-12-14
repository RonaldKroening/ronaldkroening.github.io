import '../styles/ProjectItem.css'; 
const ProjectItem = ({ project }) => {  
   // Split the tags string into an array for rendering
   const stack = project.tags ? project.tags.split('&') : [];

   return (  
      <div className="projectItem">  
        <header className="header">  
           <div className="logoPlaceholder">
              <img className="logo" src={"/fmwk.jpg"} alt={project.projectName} />
           </div>  
           <div className="projectInfo">  
              <h1>{project.projectName}</h1>  
              <p>{project.subline}</p>  
              <p>Stack: {stack.join(', ')}</p>  
           </div>  
           <div className="topRightButtons">  
              <a href={project.link} target="_blank" >
                <button className="btn">Demo</button>  
              </a>
              <a href={project.link} target="_blank" >
                <button className="btn">Github</button>  
              </a>
           </div>  
        </header>  
        <main className="main">  
           <p>{project.description}</p>  
        </main>  
      </div>  
   );  
};  

export default ProjectItem;
