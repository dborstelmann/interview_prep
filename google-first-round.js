// Please use this Google doc to code during your interview. To free your hands for coding, we recommend that you use a headset or a phone with speaker option.

class Song {
	constructor() {
		this.title = '';
		this.playCount = 0;
		this.genres = [];
  }
}

const library = [Song(), Song()];

const topPlaysByGenre = lib => {
	const playsByGenre = {};

	_.each(lib, s => {
		_.each(s.genres, g => {
			if (!playsByGenre[g] || playsByGenre[g].playCount < s.playCount) {
				playsByGenre[g] = s;
      }
		});
  });

	return playsByGenre;
}

////////////////////

const library = [
	{
		title: 'Song 1',
		playCount: 15,
		genres: ['country', 'pop']
  },
  {
		title: 'Song 2',
		playCount: 12,
		genres: ['country', 'pop']
  },
  {
		title: 'Song 3',
		playCount: 84,
		genres: ['jazz']
  },
  {
		title: 'Song 4',
		playCount: 115,
		genres: ['country', 'pop']
  },
];

const n = 2;

const topPlaysByGenre = (lib, n) => {
	const playsByGenre = {};

	_.each(lib, s => {
		_.each(s.genres, g => {
      if (!playsByGenre[g]) {
      	playsByGenre[g] = [s];
      } else if (playsByGenre[g].length < n) {
      	playsByGenre[g].push(s);
      } else {
      	if (s.playCount > playsByGenre[g][0].playCount) {
      		_.each(playsByGenre[g], songInG => {
      			if (songInG.playCount < s.playCount) {
              playsByGenre[g][0] = s;
      			}
      		});
      	}
      }
		});
  });

	return playsByGenre;
}
