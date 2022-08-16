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
                <img alt="home banner" src='https://images.pexels.com/photos/1094071/pexels-photo-1094071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                <p>MULTIMARCA INFANTIL</p>
            </div>
            <div className='home__categories'>
                <div className='home__categories__card'>
                    <div className='home__categories__card__imgContainer'>
                        <img alt='categoria-primera puesta' src='https://images.pexels.com/photos/3845214/pexels-photo-3845214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
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
                        <img alt='categoria-bebes' src='https://images.pexels.com/photos/1652117/pexels-photo-1652117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
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
                        <img alt='categoria-nenes' src='https://images.pexels.com/photos/1094084/pexels-photo-1094084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
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
