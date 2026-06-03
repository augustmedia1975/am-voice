export interface AudioSample {
  id: string;
  title: string;
  genre: string;
  duration: string;
  src: string;
}

export const AUDIO_SAMPLES: AudioSample[] = [
  { id: '01', title: 'Epic Trailer', genre: 'Action', duration: '1:24', src: '' },
  { id: '02', title: 'The Midnight Letter', genre: 'Audiobook', duration: '2:07', src: '' },
  { id: '03', title: 'Brand Campaign', genre: 'Commercial', duration: '0:58', src: '' },
  { id: '04', title: 'Character Demo', genre: 'Animation', duration: '1:43', src: '' },
  { id: '05', title: 'Corporate Narration', genre: 'E-Learning', duration: '1:15', src: '' },
];
