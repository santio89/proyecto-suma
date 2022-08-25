import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/Home.css'

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='section-full home'>
            <div className='home__banner'>
                <img alt="home banner" src="./assets/misc/home-banner.jpeg"></img>
                <p>MULTIMARCA INFANTIL</p>
            </div>
            <div className='home__categories'>
                <div className='home__categories__card'>
                    <div className='home__categories__card__imgContainer'>
                        <img alt='categoria-primera puesta' src="./assets/misc/home-primera.jpeg"></img>
                    </div>
                    <div className='home__categories__card__info'>
                        <div className='home__categories__card__info__text'>
                            <p>Primera Puesta</p>
                        </div>
                        <Link to="/primera" className='home__categories__card__info__btn'>
                            Ver más
                        </Link>
                    </div>
                </div>

                <div className='home__categories__card'>
                    <div className='home__categories__card__imgContainer'>
                        <img alt='categoria-bebes' src="./assets/misc/home-bebes.jpeg"></img>
                    </div>
                    <div className='home__categories__card__info'>
                        <div className='home__categories__card__info__text'>
                            <p>Bebés</p>
                        </div>
                        <Link to="/bebes" className='home__categories__card__info__btn'>
                            Ver más
                        </Link>
                    </div>
                </div>

                <div className='home__categories__card'>
                    <div className='home__categories__card__imgContainer'>
                        <img alt='categoria-nenes' src="./assets/misc/home-nenes.jpeg"></img>
                    </div>
                    <div className='home__categories__card__info'>
                        <div className='home__categories__card__info__text'>
                            <p>Niños</p>
                        </div>
                        <Link to="/nenes" className='home__categories__card__info__btn'>
                            Ver más
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
