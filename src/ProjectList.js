import List from './List'
import { 
  // useState,
useEffect } from 'react'
import LoadingData from './LoadingData'
import ErrorHandler from './ErrorHandler'
import useFetchData from './useFetchdata'

const ProjectList = () => {
  const {Data: projects, isPending, error} = useFetchData('http://localhost:8000/projects')

  // rendereing projects component
  useEffect(() => {
    console.log("projects details changed")
  }, [projects])

  // const deleteTab = (id) => {
  //   const newProjects = projects.filter((projects) =>projects.id !== id)
  //   setProjects(newProjects)
  // }

  return (
    <div className="ProjectList">
      {isPending && <LoadingData />}
      {error && <ErrorHandler errorMessage={error.message} />}
      {projects && <List projects={projects} title="all projects" 
      // deleteTab={deleteTab}
      />}
      {isPending && <LoadingData />}
        {projects && <List projects={projects.filter((projects) => projects.language === 'node js')}title="projects with just node js" 
        // deleteTab={deleteTab}
        />}
      {error && <ErrorHandler errorMessage={error.message} />}
    </div>
  )
}
 
export default ProjectList