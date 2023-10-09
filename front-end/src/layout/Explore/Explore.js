import { useState, useEffect } from 'react'
import { fetchAllVideos } from '../../utils/videosApi'
import SkillCard from './SkillCard'
import './Explore.css'
export default function Explore({setActivePage}) {
    const [skillVids, setSkillVids] = useState(null)

    useEffect(() => {
        setActivePage('explore')
        async function getSkills() {
            const apiData = await fetchAllVideos()
            setSkillVids(apiData)
        }

        getSkills()
    }, [])

    return (
        <>
            {!skillVids ? (
                <p>Loading Skills...</p>
            ) : (
                <ul className="explore">
                    {skillVids.map((videos) => {
                        return (
                            <li key={`skill-${videos[0].skill_id}`}>
                                <SkillCard videos={videos} />
                            </li>
                        )
                    })}
                </ul>
            )}
        </>
    )
}
