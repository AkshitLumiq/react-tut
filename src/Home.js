import { useState, useEffect } from 'react'

const componentName = "Home Component"
const name ="Akshit Tyagi"
const age = 23

const Home = () => {
  const [gitLink, setGitLink] = useState("https://github.com/AkshitLumiq")
 
  const click1 = (e) => {
    console.log("b1 clicked")
  }

  const viewEvent = (e) => {
    console.log(e)
  }

  const click2 = (name) => {
    console.log(`${name} clicked`)
  }

  const changeGitLink = () => {
    if(gitLink === "https://github.com/AkshitLumiq")
      setGitLink("https://github.com/Akshit545")
    else  
       setGitLink("https://github.com/AkshitLumiq")
  }

  useEffect(() => {
    console.log("Home loaded...")
  }, [])

  useEffect(() => {
    console.log("git link changed...")
  }, [gitLink])

  return ( 
      <div className="Home">
        <div className="info">
          <h1>{componentName}</h1>
          <h2>Name : {name}</h2>
          <h2>Age : {age}</h2>
          <div className="links">
            <a href={gitLink}>Github Profile</a>  
          </div>
        </div>
        <div className="buttons">
          <button className='red-button' onClick={click1}>Click 1</button>
          <button className='red-button' onClick={viewEvent}>View Event</button>
          <button className='red-button' onClick={() => click2("b2")}>Click 2</button>
          <button className='red-button' onClick={() => {
            changeGitLink()
          }}>Different gitlink</button>
          <button className='red-button'><a href="/projects">Projects</a></button>
        </div>
     </div>
  );
}
 
export default Home;