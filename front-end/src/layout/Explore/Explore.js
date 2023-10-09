import { useState, useEffect } from 'react'
import { fetchAllVideos } from '../../utils/videosApi'
import SkillCard from './SkillCard'
import './Explore.css'
import Quiz from '../../Quiz/Quiz'
export default function Explore() {
    return <Quiz />
    // const [skillVids, setSkillVids] = useState(null)

    // useEffect(() => {
    //     async function getSkills() {
    //         const apiData = await fetchAllVideos()
    //         setSkillVids(apiData)
    //     }

    //     getSkills()
    // }, [])

    // return (
    //     <>
    //         {!skillVids ? (
    //             <p>Loading Skills...</p>
    //         ) : (
    //             <ul className="explore">
    //                 {skillVids.map((videos) => {
    //                     return (
    //                         <li key={`skill-${videos[0].skill_id}`}>
    //                             <SkillCard videos={videos} />
    //                         </li>
    //                     )
    //                 })}
    //             </ul>
    //         )}
    //     </>
    // )
}
