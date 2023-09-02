import './minigame.css'
import image from '../../assets/karaokee.jpg'
import { karaokeData } from './karaokeData'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'
import { BiShow, BiHide } from 'react-icons/bi'
import { useEffect, useState } from 'react'

const Karaoke = () => {
    const [showRules, setShowRules] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * karaokeData.length));

    const getRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * karaokeData.length);
        setRandomIndex(randomIndex);
        setShowAnswer(false)
    };


    useEffect(() => {
        document.title = "Kilövés - Karaoke"
    }, [])

    return (
        <section id='karaoke'>
            <h5>Csak semmi éneklés...</h5>
            <h2>KARAOKE</h2>

            <div className="container minigame__container">
                <article className='minigame__item'>
                    <div onClick={() => setShowRules(prev => !prev)} className='btn'>
                        <h2><span>Játékszabályok</span> {showRules ? <AiFillCaretUp className='icon' /> : <AiFillCaretDown className='icon' />}</h2>
                        {showRules &&
                            <div className='rules-desc'>
                                <ul>
                                    <li>1. Olvasd fel az első sort a többi játékosnak szigorúan monoton hangon.</li>
                                    <li>2. A többieknek a megoldást kell elénekelniük a lehető legpontosabban.</li>
                                    <li>3. Ha helyes a válaszuk, te iszol 3 kortyot.</li>
                                    <li>4. Ha helytelen a válaszuk ők isznak 3-3 kortyot.</li>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="minigame__item-image">
                        <img src={image} alt='karaoke' />
                    </div>
                    <div className='qna'>
                        <h5><strong style={{ color: "palegreen" }}>Zene: </strong>{karaokeData[randomIndex].title}</h5>
                        <h3>{karaokeData[randomIndex].clue}...</h3>
                        <span>
                            <p>{showAnswer ?
                                <h5 className='icon red' onClick={() => setShowAnswer(prev => !prev)}>Válasz elrejtése  <BiHide /></h5>
                                :
                                <h5 className='icon green' onClick={() => setShowAnswer(prev => !prev)}>Válasz felfedése <BiShow /></h5>

                            }
                            </p>
                            <span onClick={() => setShowAnswer(prev => !prev)} className={showAnswer ? 'visible-text' : 'blur-text'}>
                                <span className='answer'>...{karaokeData[randomIndex].solution}</span>
                            </span>
                        </span>
                    </div>
                    <div className="minigame__item-cta">
                        <span onClick={getRandomQuestion} className='btn'>Új feladatat</span>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Karaoke
