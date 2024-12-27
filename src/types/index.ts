export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
  image: string;
}

export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
}