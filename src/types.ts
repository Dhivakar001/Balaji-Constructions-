export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'infrastructure';
  location: string;
  year: string;
  area: string;
  cost: string;
  image: string;
  description: string;
  highlights: string[];
  client: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  specs: { label: string; value: string }[];
}

export interface Testimony {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface TimelineStep {
  phase: string;
  title: string;
  duration: string;
  description: string;
  tasks: string[];
}

export interface ProjectInquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  projectType: 'residential' | 'commercial' | 'infrastructure' | 'renovation';
  estimatedBudget: string;
  timeline: string;
  location: string;
  message: string;
  submittedAt: string;
  status: 'pending' | 'reviewed' | 'contacted' | 'approved';
  internalNotes?: string;
}
