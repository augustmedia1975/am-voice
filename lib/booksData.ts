export interface AudioBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  runtime: string;
  color: string;
  image?: string;
  audio?: string;
  current?: boolean;
}

export const AUDIOBOOKS: AudioBook[] = [
  { id: '1', title: 'Aṣísẹhìndé', author: 'Gbadebo Babsalaam & Oluwaseun Babsalaam', genre: 'Fiction', runtime: '2.8h', color: '#2A1F3D', image: '/images/atlas-cover.jpg', audio: '/audio/asisehinde-sample.mp3' },
  { id: '2', title: 'The Psychology of Insurance', author: 'Karman Jones', genre: 'Business', runtime: '3.8h', color: '#1A2A1A', image: '/images/psychology-of-insurance.jpg', audio: '/audio/psychology-of-insurance-sample.mp3' },
  { id: '3', title: 'Regime Machine', author: 'Dr. Priya Sharma', genre: 'Non-Fiction', runtime: '7h 38m', color: '#2A1A10', image: '/images/regime-machine.jpg' },
  { id: '4', title: 'Echoes of the Meridian', author: 'Lena Voss', genre: 'Sci-Fi', runtime: '14h 52m', color: '#0D1A2A' },
  { id: '5', title: 'Root & Ruin', author: 'T. Beaumont', genre: 'Fiction', runtime: '8h 17m', color: '#1A1A2A' },
  { id: '6', title: 'The Art of Deep Work', author: 'Samuel Okafor', genre: 'Business', runtime: '5h 44m', color: '#1A2A20' },
  { id: '7', title: 'Velvet Conspiracy', author: 'Claudia Reeve', genre: 'Thriller', runtime: '10h 30m', color: '#2A1A1A' },
  { id: '8', title: 'Mindful Momentum', author: 'Dr. Aisha Wells', genre: 'Self-Help', runtime: '6h 12m', color: '#1A2010' },
  { id: '9', title: 'The Last Cartographer', author: 'Felix Strand', genre: 'Fiction', runtime: '12h 08m', color: '#10202A' },
  { id: '10', title: 'Broken Circuits', author: 'Yuki Tanaka', genre: 'Sci-Fi', runtime: '9h 55m', color: '#201020' },
  { id: '11', title: 'Empire of Dust', author: 'M. Oyelaran', genre: 'Non-Fiction', runtime: '8h 33m', color: '#2A1810' },
  { id: '12', title: 'The Tender Hours', author: 'Rose Calloway', genre: 'Fiction', runtime: '7h 20m', color: '#1A1020', current: true },
  { id: '13', title: 'Sovereign Mind', author: 'Calvin Reed', genre: 'Self-Help', runtime: '5h 58m', color: '#102020', current: true },
  { id: '14', title: 'Glass Meridian', author: 'Dana Frost', genre: 'Thriller', runtime: '11h 44m', color: '#20101A' },
];
