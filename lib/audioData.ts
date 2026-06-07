export interface AudioSample {
  id: string;
  title: string;
  genre: string;
  duration: string;
  src: string;
}

export const AUDIO_SAMPLES: AudioSample[] = [
  { id: '01', title: 'An Untamed Heart', genre: 'Action', duration: '2:23', src: '/audio/epic-trailer.mp3' },
  { id: '02', title: 'The Midnight Letter', genre: 'Audiobook', duration: '2:07', src: '' },
  { id: '03', title: "What's Your Driveway", genre: 'Self Help', duration: '2:58', src: '/audio/brand-campaign.mp3' },
  { id: '04', title: 'Character Demo', genre: 'Animation', duration: '2:55', src: '/audio/character-demo.mp3' },
  { id: '05', title: 'Corporate Narration', genre: 'E-Learning', duration: '1:15', src: '' },
];
