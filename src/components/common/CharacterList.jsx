import React from 'react';

const CharacterList = ({ data }) => {
	return (
		<div className="char-list">
			{data.map((char) => {
				const dateStart = char.dateStart.split(' ');
				const dateEnd = char.dateEnd.split(' ');
				const eventDay = `${dateStart[1]} - ${dateEnd[1]}`;
				return (
					<div className="char-list__card">
						<div className="char-list__card-left">
							<div className="char-list__card-left__avatars">
								{char.speakers.map((speaker, index) => (
									<div
										className={`photo${index}`}
										style={{
											backgroundImage: `url(${speaker.profileURL})`
										}}
									></div>
								))}
							</div>
							<div className="char-list__card-left__names">
								{char.speakers.map((speaker, index) => (
									<span>{index === 0 ? speaker.fullName : `& ${speaker.fullName}`}</span>
								))}
							</div>
						</div>
						<div className="char-list__card-right">
							<div className="char-list__card-right__bg"></div>
							<span className="char-list__card-right__title">{char.title}</span>
							<span className="char-list__card-right__date">{eventDay}</span>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CharacterList;
