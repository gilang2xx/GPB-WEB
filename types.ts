
export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  level: string; // Changed from strict enum to string to allow custom sub-names like 'The Sniper' logic if needed
  tagline?: string; // New field
  detail?: string;  // New field
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum View {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  PROGRAMS = 'PROGRAMS',
  AI_COACH = 'AI_COACH',
  SERVICES = 'SERVICES',
  EVENTS = 'EVENTS',
  CONTACT = 'CONTACT',
  SHOP = 'SHOP'
}