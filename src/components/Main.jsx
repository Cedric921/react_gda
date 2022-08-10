import './Main.css';

import githubImg from '../assets/github.svg';
import fbImg from '../assets/facebook.png'
import Linkendin from '../assets/LinkedIn.png'
import Mille from '../assets/testimonials-5.jpg'
import Mail from '../assets/gmail.webp'

const Main = () => {
	return (
		<main>
			<div className='card'>
				<div className='card__img'>
					<img src={Mille} alt='' />
				</div>
				<div className='card__profil'>
					<h2>Cedric karungu</h2>
					<h4>Software developer</h4>
					<p>ddgd ddhdd</p>

					<button>
						<img src={Mail} alt='email' />
						email
					</button>
				</div>
				<div className='card__content'>
					<h2 className='content__title'>About</h2>
					<p className='card__text'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae
					</p>
				</div>
				<div className='card__content'>
					<h2 className='content__title'>About</h2>
					<p className='card__text'>
						libero ad vel eligendi ipsa nam numquam vitae provident aliquid,
					</p>
				</div>
				<div className='card__footer'>
					<div className='card__footer-img'>
						<img src={githubImg} alt='fb' />
					</div>
					<div className='card__footer-img'>
						<img src={fbImg} alt='fb' />
					</div>
					<div className='card__footer-img'>
						<img src={Linkendin} alt='fb' />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Main;
