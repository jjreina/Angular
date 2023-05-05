interface Details {
  author: string;
  year: number;
}

interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const {
  song: anotherSong,
  songDuration: duration,
  details: { author },
} = audioPlayer;
// const { author } = detailsAudioPlayer;

console.log("Song: ", anotherSong);
console.log("Author: ", author);
console.log("Duration: ", duration);

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [, , trunks = "Not found."] = dbz;
console.log("Personaje: ", trunks);

export {};
