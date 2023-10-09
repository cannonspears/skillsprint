import { useEffect, useState } from "react"
import "./ToDo.css"
import getRecommendation from "../../utils/recommendationApi"

export default function ToDo() {
    return(
        <div>
            <p>To Do:</p>
            <p>Weekly Recommendations:</p>
        </div>
    )
}