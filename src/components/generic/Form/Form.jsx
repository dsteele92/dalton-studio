import { React, useState } from 'react';
import Style from './form.module.scss';

export default function Form() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [topic, setTopic] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSumbit = () => {
		console.log('Form Submitted');
	};

	const handleSelect = (selection) => {
		if (selection !== topic) {
			setTopic(selection);
		} else {
			setTopic('');
		}
	};

	return (
		<div className={Style.FormContainer}>
			<form onSubmit={handleSumbit}>
				<div className={Style.Name}>
					<div className={Style.NameLabel}>
						<p>Name</p>
					</div>
					<input
						type='text'
						id='firstName'
						placeholder='First Name'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<input
						type='text'
						id='lastName'
						placeholder='Last Name'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div className={Style.Select}>
					<div className={Style.SelectLabel}>
						<p>Select a topic</p>
					</div>
					<div
						className={topic === 'Coding' ? Style.TopicSelected : Style.Topic}
						onClick={() => handleSelect('Coding')}>
						Coding
					</div>
					<div
						className={topic === 'Fitness' ? Style.TopicSelected : Style.Topic}
						onClick={() => handleSelect('Fitness')}>
						Fitness
					</div>
					<div
						className={topic === 'Other' ? Style.TopicSelected : Style.Topic}
						onClick={() => handleSelect('Other')}>
						Other
					</div>
				</div>
				<div className={Style.Email}>
					<div className={Style.EmailLabel}>
						<p>Email</p>
					</div>
					<input
						type='text'
						id='email'
						placeholder='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className={Style.Message}>
					<div className={Style.MessageLabel}>
						<p>Message</p>
					</div>
					<textarea
						name='message'
						id='message'
						placeholder='Your Message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}></textarea>
				</div>
				<button>
					<div className={Style.SlideButton}>Submit</div>
				</button>
				{/* <JumpSlideButton text='Submit' /> */}
			</form>
		</div>
	);
}
