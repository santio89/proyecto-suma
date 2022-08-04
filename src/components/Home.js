import { Link } from 'react-router-dom';
import '../styles/css/Home.css'

export default function Home() {
    return (
        <div className='section-full home'>
            <div className='home__banner'>
                <img alt="home banner" src='https://images.pexels.com/photos/7494493/pexels-photo-7494493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                <p>Ropa para bebés y niños</p>
            </div>
            <div className='home__categories'>
                <div className='home__categories__card'>
                    <div className='home__categories__card__imgContainer'>
                        <img alt='categoria-primera puesta' src='https://images.pexels.com/photos/4858394/pexels-photo-4858394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                    </div>
                    <div className='home__categories__card__info'>
                        <div className='home__categories__card__info__text'>
                            <p>Primera Puesta<br />0 a 12 meses</p>
                        </div>
                        <button className='home__categories__card__info__btn'>
                            Ver más
                        </button>
                    </div>
                </div>

                <div className='home__categories__card'>
                    <div className='home__categories__card__imgContainer'>
                        <img alt='categoria-bebes' src='https://images.pexels.com/photos/47220/shoes-pregnancy-child-clothing-47220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                    </div>
                    <div className='home__categories__card__info'>
                        <div className='home__categories__card__info__text'>
                            <p>Bebés<br />6 a 24 meses</p>
                        </div>
                        <button className='home__categories__card__info__btn'>
                            Ver más
                        </button>
                    </div>
                </div>

                <div className='home__categories__card'>
                    <div className='home__categories__card__imgContainer'>
                        <img alt='categoria-nenes' src='https://images.pexels.com/photos/1094084/pexels-photo-1094084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                    </div>
                    <div className='home__categories__card__info'>
                        <div className='home__categories__card__info__text'>
                            <p>Niños<br />2 a 10 años</p>
                        </div>
                        <button className='home__categories__card__info__btn'>
                            Ver más
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
