import { skillMap, revSkillMap, skillImageMap } from '../utils/skillMaps'





function getSkillImage(skill_id) {
    return <img src={skillImageMap.get(skill_id)} alt={revSkillMap.get(skill_id)}></img>
}

export default function SkillCard({ videos }) {
    return (
        <div className="skillCard">
            {getSkillImage(videos[0].skill_id)}
            <div className="skillInfo"></div>
        </div>
    )
}
