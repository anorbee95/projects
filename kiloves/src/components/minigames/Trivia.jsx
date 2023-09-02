import './minigame.css'
import image from '../../assets/trivia.jpg'
import { triviaData } from './triviaData'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'
import { BiShow, BiHide } from 'react-icons/bi'
import { useEffect, useState } from 'react'

const Trivia = () => {
    const [showRules, setShowRules] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * triviaData.length));

    const getRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * triviaData.length);
        setRandomIndex(randomIndex);
        setShowAnswer(false)
    };

    useEffect(() => {
        document.title = "Kilövés - 200 IQ"
    }, [])

    return (
        <section id='trivia'>
            <h5>Na nézzük kinek van meg a</h5>
            <h2>200 IQ</h2>

            <div className="container minigame__container">
                <article className='minigame__item'>
                    <div onClick={() => setShowRules(prev => !prev)} className='btn'>
                        <h2><span>Játékszabályok</span> {showRules ? <AiFillCaretUp className='icon' /> : <AiFillCaretDown className='icon' />}</h2>
                        {showRules &&
                            <div className='rules-desc'>
                                <ul>
                                    <li>1. Olvasd fel a kérdést a többi játékosnak</li>
                                    <li>2. A többiek megbeszélhetik a kérdést, de csak egyetlen válaszlehetőségük van.</li>
                                    <li>3. Ha helyes a válaszuk, te iszol 3 kortyot.</li>
                                    <li>4. Ha helytelen a válaszuk ők isznak 3-3 kortyot.</li>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="minigame__item-image">
                        <img src={image} alt='trivia' />
                    </div>
                    <div className='qna'>
                        <h3>{triviaData[randomIndex].question}</h3>
                        <span>
                            <p>{showAnswer ?
                                <h5 className='icon red' onClick={() => setShowAnswer(prev => !prev)}>Válasz elrejtése  <BiHide /></h5>
                                :
                                <h5 className='icon green' onClick={() => setShowAnswer(prev => !prev)}>Válasz felfedése <BiShow /></h5>

                            }
                            </p>
                            <span onClick={() => setShowAnswer(prev => !prev)} className={showAnswer ? 'visible-text' : 'blur-text'}>
                                <span className='answer'>{triviaData[randomIndex].answer}</span>
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

export default Trivia
