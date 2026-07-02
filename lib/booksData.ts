export interface AudioBook {
  id: string;
  title: string;
  author: string;
  /** One or more genres. The first is shown as the primary tag on the card. */
  genre: string[];
  runtime: string;
  color: string;
  /**
   * Date the title was added, as 'YYYY-MM-DD'. Used only for ordering the
   * catalog (newest first) — it is never displayed on the site. When adding a
   * new title, set this to its release/added date; placement in the array
   * below does not matter, the list is sorted by this field automatically.
   */
  dateAdded: string;
  image?: string;
  audio?: string;
  current?: boolean;
}

const books: AudioBook[] = [
  { id: '6', title: 'The Listeners', author: 'Kurt Dawson', genre: ['Thriller', 'Sci-Fi'], runtime: '2.5h', color: '#10171F', dateAdded: '2026-06-28', image: '/images/the-listeners.png', current: true },
  { id: '5', title: 'Waiting to Die', author: 'Feltus Taylor, Jr., Edited By Monique Morrison', genre: ['Non-Fiction'], runtime: '11h', color: '#1A1A2A', dateAdded: '2026-06-01', image: '/images/waiting-to-die.jpg', audio: '/audio/waiting-to-die-sample.wav' },
  { id: '4', title: "The People's Law Book", author: 'Robert C. Griffin', genre: ['Self-Help'], runtime: '1.6h', color: '#0D1A2A', dateAdded: '2026-05-01', image: '/images/peoples-law-book.jpg', audio: '/audio/peoples-law-book-sample.mp3' },
  { id: '3', title: 'Regime Machine', author: 'James Johnson', genre: ['Non-Fiction'], runtime: '2.2h', color: '#2A1A10', dateAdded: '2026-04-01', image: '/images/regime-machine.jpg', audio: '/audio/regime-machine-sample.mp3' },
  { id: '2', title: 'The Psychology of Insurance', author: 'Karman Jones', genre: ['Business'], runtime: '3.8h', color: '#1A2A1A', dateAdded: '2026-02-01', image: '/images/psychology-of-insurance.jpg', audio: '/audio/psychology-of-insurance-sample.mp3' },
  { id: '1', title: 'Aṣísẹhìndé', author: 'Gbadebo Babsalaam & Oluwaseun Babsalaam', genre: ['Fiction'], runtime: '2.8h', color: '#2A1F3D', dateAdded: '2026-03-01', image: '/images/atlas-cover.jpg', audio: '/audio/asisehinde-sample.mp3' },
];

// Newest first. New titles can be added anywhere above; they sort by dateAdded.
export const AUDIOBOOKS: AudioBook[] = [...books].sort(
  (a, b) => b.dateAdded.localeCompare(a.dateAdded)
);
