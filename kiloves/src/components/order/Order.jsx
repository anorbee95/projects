import './order.css'
import KILOVES2 from '../../assets/kiloves-hero.png'
import { BsTruck, BsPercent, BsCloudUpload } from 'react-icons/bs'

const Order = () => {

    return (
        <section id='vedd-meg'>
            <h5>Máris a tiéd lehet</h5>
            <h2>A KILÖVÉS</h2>

            <div className="container order__container">
                <div className="order__me">
                    <div className="order__me-image">
                        <img src={KILOVES2} alt="order" />
                    </div>
                </div>

                <div className="order__content">
                    <div className="order__cards">
                        <small className='mobile'>Ha most előrendeled, 1 hónapon belül az elsők között kaphatod meg a saját Kilövésedet.</small>
                        <br className='mobile' />
                        <a href='https://buy.stripe.com/9AQ3ezaP37pMaWI5kk' className='btn btn-primary mobile'>Előrendelem!</a>
                        <article className='order__card'>
                            <BsTruck className='order__icon' />
                            <h5>INGYENES SZÁLLÍTÁS</h5>
                            <small>Egész Magyarországon</small>
                        </article>

                        <article className='order__card'>
                            <BsPercent className='order__icon' />
                            <h4 className='cheap'>19.990 Ft</h4>
                            <h4>11.990 Ft</h4>
                        </article>

                        <article className='order__card'>
                            <BsCloudUpload className='order__icon' />
                            <h5>MEGUNHATATLAN</h5>
                            <small>Frissülő feladatok</small>
                        </article>
                    </div>
                    <p>
                        3..2..1.. Kilövés indul! Ne hagyd, hogy a szürke hétköznapok legyőzzenek –
                        inkább gyújtsátok be a jókedv rakétákat! Hívjátok össze a barátokat,
                        csapjatok össze egy király partira, és fedezzétek fel a Kilövés adta szórakozást.
                        Garantáltan mosolyt csal az arcotokra, miközben a játéktáblán 50 mezőn keresztül nevethettek és persze ihattok.
                        A legjobb? QR-kódokon keresztül extra minijátékokhoz is hozzáférhettek online, így sosem ér véget a móka!
                    </p>
                    <a href='https://buy.stripe.com/9AQ3ezaP37pMaWI5kk' className='btn btn-primary'>Rendeld elő!</a>
                    <br />
                    <br />
                    <small>Ha most előrendeled, 1 hónapon belül az elsők között kaphatod meg a saját Kilövésedet.</small>
                </div>
            </div>
        </section>
    )
}

export default Order
