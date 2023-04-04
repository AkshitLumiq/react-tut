const List = ({projects, title, deleteTab}) => {
  return (
    <div className="List">
      <h1>{title}</h1>
      <div className="list">
        {projects.map((project) => (
          <div className="projectDetails" key={project.id}>
            <h1>{project.projectName}</h1>
            <h2>{project.language}</h2>
            <h2>{project.createdOn}</h2>
            <button className='red-button' 
            // onClick={() => deleteTab(project.id)}
            >Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default List;