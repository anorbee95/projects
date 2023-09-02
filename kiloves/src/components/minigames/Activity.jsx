import './minigame.css'
import image from '../../assets/activity.jpg'
import { activityData } from './activityData'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'
import { useEffect, useState } from 'react'

const Activity = () => {
    const [showRules, setShowRules] = useState(false);
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * activityData.length));

    const getRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * activityData.length);
        setRandomIndex(randomIndex);
    };


    useEffect(() => {
        document.title = "Kilövés - Színész"
    }, [])

    return (
        <section id='activity'>
            <h5>Mutasd mit tudsz...</h5>
            <h2>SZÍNÉSZ</h2>

            <div className="container minigame__container">
                <article className='minigame__item'>
                    <div onClick={() => setShowRules(prev => !prev)} className='btn'>
                        <h2><span>Játékszabályok</span> {showRules ? <AiFillCaretUp className='icon' /> : <AiFillCaretDown className='icon' />}</h2>
                        {showRules &&
                            <div className='rules-desc'>
                                <ul>
                                    <li>1. Válassz egyet az alábbi lehetőséget közül: film, sorozat vagy színdarab. Nem beszélhetsz és nem adhatsz ki semmilyen hangot.</li>
                                    <li>
                                        <p>2.  Játszd el, hogy melyik kategóriát válaszottad:</p>
                                        <i>- Film esetén: Tekerj egy képzeletbeli filmszalagot.</i>
                                        <i>- Sorozat esetén: Rajzolj egy négyszöget (TV-t) a levegőben.</i>
                                        <i>- Színdarab esetén: Húzzd el a képzeletbep színpad függönyét.</i>
                                    </li>
                                    <li>3. A többiek megbeszélhetik a válaszukat, de csak egyetlen válaszlehetőségük van.</li>
                                    <li>4. Ha helyes a válaszuk, te iszol 3 kortyot.</li>
                                    <li>5. Ha helytelen a válaszuk ők isznak 3-3 kortyot.</li>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="minigame__item-image">
                        <img src={image} alt='activity' />
                    </div>
                    <div className='qna'>
                        <h2>Válassz egyet az alábbiak közül: </h2>
                        <h3><strong style={{ color: "palegreen" }}>Film: </strong>{activityData[randomIndex].movie}</h3>
                        <h3><strong style={{ color: "orange" }}>Sorozat: </strong>{activityData[randomIndex].series}</h3>
                        <h3><strong style={{ color: "crimson" }}>Színdarab: </strong>{activityData[randomIndex].theatre}</h3>

                    </div>
                    <div className="minigame__item-cta">
                        <span onClick={getRandomQuestion} className='btn'>Új feladatat</span>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Activity
