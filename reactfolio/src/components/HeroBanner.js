import React from 'react'
import '../css/HeroBanner.css';
import { buzzWords } from './BuzzWords'
const HeroBanner = () => {
 
    const buzzWordSelect = () => {
        buzzWords.forEach(word => word);
    }
        return (
            <div className = "heroBanner">
                <h1>TommyLiang ReactFolio</h1>
                
                <div className = "softwareEngineerDetails">
                    <img src = 'https://picsum.photos/100' alt = 'lorem picsum' />
                    <p>Tommy Liang is a: </p>
                        <div className = "buzzWordDisplay">{buzzWordSelect}</div>
                </div>
            </div>
        )
    
}

export default HeroBanner;
