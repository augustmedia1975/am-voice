export interface AudioSample {
  id: string;
  title: string;
  genre: string;
  duration: string;
  src: string;
}

export const AUDIO_SAMPLES: AudioSample[] = [
  { id: '01', title: 'An Untamed Heart', genre: 'Action', duration: '2:23', src: '/audio/epic-trailer.mp3' },
  { id: '02', title: 'The Shatter Between Heartbeats', genre: 'Audiobook', duration: '4:42', src: '/audio/midnight-letter.mp3' },
  { id: '03', title: "What's Your Driveway", genre: 'Self Help', duration: '2:58', src: '/audio/brand-campaign.mp3' },
  { id: '04', title: 'Leadership From Inside Out', genre: 'Religion and Spirituality', duration: '2:55', src: '/audio/character-demo.mp3' },
  { id: '05', title: 'Exam Prep', genre: 'E-Learning', duration: '1:51', src: '/audio/corporate-narration.mp3' },
];
