import React from 'react';

const CharacterList = ({ data }) => {
	return (
		<div className="char-list">
			{data.map((char) => (
				<div className="char-list__card">
					<div className="char-list__card-left">
						<div className="char-list__card-left__avatars">
							<div
								className="photo1"
								style={{
									backgroundImage: `url(${char.avatarOne})`
								}}
							></div>
							{char.avatarTwo && (
								<div
									className="photo2"
									style={{
										backgroundImage: `url(${char.avatarTwo})`
									}}
								></div>
							)}
						</div>
						<div className="char-list__card-left__names">
							<span>{char.nameOne}</span>
							{char.nameTwo && <span>& {char.nameTwo}</span>}
						</div>
					</div>
					<div className="char-list__card-right">
						<div className="char-list__card-right__bg"></div>
						<span className="char-list__card-right__title">{char.title}</span>
						<span className="char-list__card-right__date">{char.date}</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default CharacterList;
