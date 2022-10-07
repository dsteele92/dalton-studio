import { React, useState, useEffect, useRef } from 'react';

import Style from './personalTraining.module.scss';
import { LinksLine, ScrollArrowTopOnly, ScrollArrowBottom, LoadingBounce } from 'components';
import { goToTop, goToNext } from '../../../scrollBreakpoints.js';
import { testimonials } from '../../../testimonials.js';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

import RunningPic from '../../../images/run_compressed.jpeg';
import Andrew from '../../../images/andrew.png';
import Cayley from '../../../images/cayley.png';
import AndrewH from '../../../images/andrew+h.png';
import Chet from '../../../images/chet.png';
import Joanna from '../../../images/joanna.png';
import Vijay from '../../../images/Vijay.png';
import Ayaka from '../../../images/ayaka.png';

export default function PersonalTraining() {
	const [top, setTop] = useState(true);
	const [loaded, setLoaded] = useState(false);
	const [client, setClient] = useState('');

	const pic1 = useRef();
	const AndrewPic = useRef();
	const CayleyPic = useRef();
	const AndrewHPic = useRef();
	const JoannaPic = useRef();
	const ChetPic = useRef();
	const VijayPic = useRef();
	const AyakaPic = useRef();

	useEffect(() => {
		window.scrollTo(0, 0);

		const handleLoad = (event) => {
			setTimeout(() => {
				setLoaded(true);
			}, '1000');
		};

		const handleScroll = (event) => {
			// -----> state for transitioning out of top
			if (window.pageYOffset >= 1) {
				setTop(false);
			} else if (window.pageYOffset < 1) {
				setTop(true);
			}
		};

		let picture1 = pic1.current;
		picture1.addEventListener('load', handleLoad);
		window.addEventListener('scroll', handleScroll);

		return () => {
			picture1.removeEventListener('load', handleLoad);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={!loaded ? Style.FitnessPageLoading : Style.FitnessPage}>
			<div className={Style.Top}></div>
			<div className={!loaded ? Style.Bottom : top ? Style.BottomTop : Style.BottomScroll}></div>
			<div className={!loaded ? Style.LoadingPage : Style.LoadingPageHide}>
				<LoadingBounce />
			</div>
			<main className={loaded ? Style.Main : Style.MainLoading}>
				<section className={Style.Fitness}>
					<div className={top ? Style.Title : Style.TitleScroll}>
						<svg height='20' width='120'>
							<polyline
								className={Style.WDIcon}
								points='10,10 30,30 50,10 70,30 90,10 110,30 130,10 150,30 170,10 190,30 210,10'
							/>
						</svg>
						<div className={Style.Header}>HEALTH & FITNESS</div>
					</div>
					<div className={top ? Style.Intro : Style.IntroScroll}>
						<h2>I'm Dalton, a Software engineer with bla bla bla</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod accusamus quae repudiandae!
							Cumque recusandae enim nostrum dolor voluptates reiciendis non fugit fugiat harum qui.
							Officia vitae accusantium pariatur ullam eum.
						</p>
					</div>
				</section>

				<div className={top ? Style.Running : Style.RunningScroll}>
					<img src={RunningPic} alt='running' ref={pic1} />
				</div>

				<section className={top ? Style.TestimonialsHide : Style.Testimonials}>
					<div className={Style.Clients}>
						<article>
							<ImQuotesLeft className={Style.Left} />
							<ImQuotesRight className={Style.Right} />
							<p className={client === 'Andrew' ? Style.TextCurrent : Style.Text}>
								Last January I committed to making personal fitness a lifestyle. Since all-around
								physical wellness was a priority, I wanted to practice routines that incorporated more
								than just weight training and cardio. I wanted to adapt yoga, bodyweight training and
								meditation as well. My goal was to improve everything from strength, power, flexibility,
								balance, core stability, and endurance, all the way to breathing and mindfulness. Since
								previous injuries and motivation are key issues with me, I decided I needed to work with
								a personal trainer. Someone who would keep me accountable, motivated, as well as teach
								me how to achieve my goals safely and correctly.
								<br />
								Fast forward… It’s been a year and I can honestly say I’m in the best shape of my entire
								life. Dalton and I continue to train 3 times a week and rarely skip or miss a session.
								What’s the secret you ask? Results. Plain and simple (and he’s a hell of a lot of fun).
								This talented young man knows exactly how to keep me moving. We rarely do the same
								routine twice. He develops customized programs that incorporate a little bit of
								everything. This guy is constantly introducing new equipment and exercises. One thing I
								can say for sure… Dalton Steele keeps it fresh.
								<br />
								His genuine interest, expertise and commitment to my well-being are ever present. So,
								although I never know what we’re going to do next, I trust it’s going to push me to that
								next level. I trust it’s going to deliver that stronger, happier and healthier man I
								committed to becoming a year ago.
								<br />
								With Dalton’s help, I’m living my dream. It’s a beautiful thing.
							</p>
							<p className={client === 'Joanna' ? Style.TextCurrent : Style.Text}>
								You don't know what you're missing until you try it. I am not one to expect quick and
								dirty results. I want consistent motivation and that’s what Dalton has done for me this
								past year and a half. I started working out because I was always in pain in my right
								shoulder and upper back from sitting and hunching over. My posture was terrible. At one
								point, I could barely turn my neck to look back while changing lanes. I had trouble
								sleeping because of constant neck pain. Ever since starting my training with Dalton, I
								have not had any pain other than muscle soreness, the good kind. But the real kicker is
								that I got pregnant with my son a few months in. I kept training until the week I
								delivered. Throughout the entire 9 months, I had no back pain at all, no foot swelling,
								and I gained the recommended 35 pounds total. At 8 weeks post partum and I had lost 30
								of those pounds. People tell me that they can't even tell I was ever pregnant. I tell
								everyone who is considering getting pregnant that working out is the best thing I have
								done for myself. I tell everyone in general that training is the best investment I have
								made for my health and my sanity.
							</p>
							<p className={client === 'Ayaka' ? Style.TextCurrent : Style.Text}></p>
							<p className={client === 'Chet' ? Style.TextCurrent : Style.Text}>
								I met Dalton a few months ago and he’s honestly changed my life. We workout together
								three days per week virtually, and then he puts together a workout for me to do solo one
								day per week. In addition, he hosts a mobility workshop once per week for all his
								clients, meditation sessions Monday through Friday, and stretch routines and nutritional
								guidance throughout each week.
								<br />
								In a little over three months, I’ve gained:
								<br />
								- Results. For the first time ever. I’ve put on about 10 pounds in muscle, and have more
								clearly defined shoulders, pecks and abs. I’ve still got a long way to go to escape the
								skinny fat body I lived in for my whole life, but for the first time am seeing a path.
								<br />
								- A friend. Dalton brings such care to his job. He asks about my kids, about my mental
								health, about my job, etc. in a few short months, he’s become a real friend and someone
								I look forward to hanging out with in workout days.
								<br />
								- Discipline: I’d never maintained a workout before, for any real period of time, and
								now I’m over three months in to consistently working out 3-4 days per week. This comes
								from both having appointments on the calendar, and from Dalton holding me accountable to
								get it done.
								<br />
								Personal training is an investment, but in my opinion you’d be hard pressed to find a
								more productive way to spend your money. And if you’re going to take the plunge, you
								should give Dalton a chance. He’s an exceptionally good trainer that will help you
								improve your physical health, and a genuinely good human that will do everything he can
								for you to meet your goals.
							</p>
							<p className={client === 'Vijay' ? Style.TextCurrent : Style.Text}>
								I had a skiing accident in January 2020 where I broke my femur. Due to my accident, I
								lost strength, stamina, and mobility and I spent much of 2020 recovering. Since I
								started my training with Dalton in the Winter of 2020, I recovered so much faster.
								Dalton’s knowledge of the body and holistic approach to training has gotten me to the
								best shape of my life, even before my injury. Dalton offers a complete program that
								focuses on exercise, nutrition, mindfulness and mobility.
								<br />
								Exercise: The exercises Dalton prepares are structured and well planned. Each week
								Dalton and I spend one day focusing on a different part of the body. One day each for
								metabolic training (jumping squats, stability push ups, etc), upper body (dips, pull
								ups, rows) and lower body (deadlifts, squats, lunges). Dalton also makes sure each
								subsequent workout pushes you so that you are on track to hit your goals. I started
								seeing strengths gains within two weeks of starting with him.
								<br />
								Nutrition: Nutrition is also another important component to Dalton’s program; he assists
								with meal tracking and with his deep knowledge of nutrition he is able to provide ideas
								for meals as well as goals to hit to keep a balanced diet.
								<br />
								Mindfulness: Every weekday Dalton starts each day holding at least 15 minutes to
								meditate. The meditation sessions have been a great way for me to enhance my self
								awareness and reduce daily stress.
								<br />
								Mobility: Aside from getting stronger, Dalton holds a class once a week on mobility. The
								class goes through a bunch of stretches that help with range of movement and agility.
								<br />I really appreciate the work Dalton has done to get me to where I am both
								physically and mentally. I would highly recommend Dalton to anyone looking for a
								trainer.
							</p>
							<p className={client === 'Cayley' ? Style.TextCurrent : Style.Text}>
								I started working with Dalton because I was out of shape and didn’t know how to lift
								weights. I’ve now been training with him for 6 months and my strength, balance, and
								self-confidence have improved tremendously! Dalton is incredibly knowledgeable, and I
								always look forward to going to the gym with him. Oh, and I finally have a butt!
							</p>
							<p className={client === 'AndrewH' ? Style.TextCurrent : Style.Text}>
								I have been working with Steele Fitness for over 3 months now. Dalton has helped me
								achieve my fitness goals through a varied set of strength, metabolic, and mobility
								exercises. Dalton gives strong attention to form to prevent injury during exercise and
								assists in mobility training to increase overall flexibility. He's been able to keep
								workouts interesting and effective both in-person and virtually as COVID has entered
								different phases. My arms, back, chest, and legs have never been stronger, while I have
								lost weight and increased range of motion. Additionally, Dalton has helped me track my
								nutritional and water intake and offers meditation classes every morning. Dalton is a
								true wellness pro and I would highly recommend him to anyone interested in taking their
								physical fitness and overall well-being to the next level.
							</p>
						</article>

						<div className={Style.ClientAndrew}>
							<img
								src={Andrew}
								alt='Andrew'
								ref={AndrewPic}
								className={Style.Andrew}
								onMouseEnter={() => setClient('Andrew')}
							/>
						</div>
						<div className={Style.ClientJoanna}>
							<img
								src={Joanna}
								alt='Joanna'
								ref={JoannaPic}
								className={Style.Joanna}
								onMouseEnter={() => setClient('Joanna')}
							/>
						</div>
						<div className={Style.ClientVijay}>
							<img
								src={Vijay}
								alt='Vijay'
								ref={VijayPic}
								className={Style.Vijay}
								onMouseEnter={() => setClient('Vijay')}
							/>
						</div>
						<div className={Style.ClientAyaka}>
							<img
								src={Ayaka}
								alt='Ayaka'
								ref={AyakaPic}
								className={Style.Ayaka}
								onMouseEnter={() => setClient('Ayaka')}
							/>
						</div>
						<div className={Style.ClientChet}>
							<img
								src={Chet}
								alt='Chet'
								ref={ChetPic}
								className={Style.Chet}
								onMouseEnter={() => setClient('Chet')}
							/>
						</div>
						<div className={Style.ClientAndrewH}>
							<img
								src={AndrewH}
								alt='AndrewH'
								ref={AndrewHPic}
								className={Style.AndrewH}
								onMouseEnter={() => setClient('AndrewH')}
							/>
						</div>
						<div className={Style.ClientCayley}>
							<img
								src={Cayley}
								alt='Cayley'
								ref={CayleyPic}
								className={Style.Cayley}
								onMouseEnter={() => setClient('Cayley')}
							/>
						</div>
					</div>
				</section>
				{/* <section className={top ? Style.LinksHide : Style.Links}>
					<LinksLine color='white' opacity='1' />
				</section> */}
				{/* <section className={Style.Links}>
					<LinksGrid color='#707070' />
				</section> */}
			</main>
			<div className={Style.ScrollArrow} onClick={goToNext}>
				<ScrollArrowTopOnly color='black' />
			</div>
			<div className={Style.ScrollArrow} onClick={goToTop}>
				<ScrollArrowBottom />
			</div>
		</div>
	);
}
