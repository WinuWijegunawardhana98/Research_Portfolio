import React, { useState } from 'react';
import { Download, Clock } from 'lucide-react';

interface Document {
  title: string;
  description: string;
  date: string;
  url: string;
}

interface Presentation {
  title: string;
  description: string;
  date: string;
  url?: string;
}

interface Milestone {
  title: string;
  description: string;
  date: string;
  marks: string;
  status: 'Completed' | 'In Progress';
}

interface GalleryItem {
  title: string;
  description: string;
  image: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const documents: Document[] = [
  {
    title: 'Project Charter',
    description: 'The document gives the information regarding the statement of scope, objectives overview, an outline of scope, an approximate schedule and people who are participating in a project',
    date: 'Updated: May 22, 2025',
    url: 'https://drive.google.com/drive/u/0/folders/1hUr-PFSebQJgyI7VgGkdd3pavZSyECFV'
  },
  {
    title: 'Project Proposal',
    description: 'The document contains details like goals, objectives, important dates, milestones and requirements needed to start and complete the project.',
    date: 'Updated: May 22, 2025',
    url: 'https://drive.google.com/drive/u/0/folders/1eldLjwOAVKCTRVW0WvLCrImdWRx9MvNh'
  },
  {
    title: 'Research Paper',
    description: 'A research paper contains writing that provides Literature review, Research methodology, analysis, interpretation, and argument based on in-depth independent research',
    date: 'Updated: May 22, 2025',
    url: 'https://drive.google.com/drive/u/0/folders/1dTGCLrQJ0e8iChE6ualWUwBl0WsA0zXO'
  },
  {
    title: 'Final Thesis',
    description: 'The document contains the Proposed solution to the research question, which was finalized after completing the research',
    date: 'Updated: May 22, 2025',
    url: 'https://drive.google.com/drive/u/0/folders/1mSqE1C-44E6s3HXq2wXYMqI3scakmxD_'
  },
  {
    title: 'Status Document',
    description: 'The document describes the progress of the project within the specific time period and compares it against the project plan checklist',
    date: 'Updated: May 22, 2025',
    url: 'https://drive.google.com/drive/u/0/folders/1OmefzYiozlXyRsCaZQjD5i3_UmMPht8u'
  },
  {
    title: 'Research Logbook',
    description: 'The document describes the progress of the project within the specific time period and compares it against the project plan checklist',
    date: 'Updated: May 22, 2025',
    url: 'https://drive.google.com/drive/u/0/folders/1-CJUzVR38GqU5A6hG5Taxa4BOlaFknNq'
  },
  {
    title: 'Business Plan',
    description: 'Business plan is very valuable when it comes to commercializing the product to the real world market as an organization entity',
    date: 'Updated: May 22, 2025',
    url: 'https://drive.google.com/drive/u/0/folders/1P7y7kBAbRiTnqwsneGNQbenn7Yo_tJ4k'
  }
];

const presentations: Presentation[] = [
  {
    title: 'Proposal Presentation',
    description: 'Initial Presentation with Overview of Research Problem',
    date: 'May 2025',
    url: 'https://docs.google.com/presentation/d/1n9ESC50DSzM6KlyBA3iofcybrEndebFo/edit?usp=sharing&ouid=110734154392972712492&rtpof=true&sd=true'
  },
  {
    title: 'Progress Presentation-1',
    description: '50% Project Completion',
    date: 'May 2025',
    url: 'https://docs.google.com/presentation/d/1qAyNqLTzGqT-ubn_EljZrgrdLC3yAxGR/edit?usp=sharing&ouid=110734154392972712492&rtpof=true&sd=true'
  },
  {
    title: 'Progress Presentation-2',
    description: '90% Project Completion',
    date: 'May 2025',
    url: 'https://docs.google.com/presentation/d/1P6xziwUI4YmbnDUKt7lXlYUCvXYRxDR3/edit?usp=sharing&ouid=110734154392972712492&rtpof=true&sd=true'
  },
  {
    title: 'Final Presentation',
    description: '100% Completion with deployed Solution',
    date: 'May 2025'
  }
];

const milestones: Milestone[] = [
  {
    title: 'Project Proposal',
    description: 'Initial project presentation and proposal report submission',
    date: 'February 2023',
    marks: '12%',
    status: 'Completed'
  },
  {
    title: 'Progress Presentation – 1',
    description: 'First progress review and demonstration',
    date: 'April 2023',
    marks: '15%',
    status: 'Completed'
  },
  {
    title: 'Research Paper Publication',
    description: 'Publication of research findings in academic journals',
    date: 'July 2023',
    marks: '10%',
    status: 'Completed'
  },
  {
    title: 'Final Reports (Thesis)',
    description: 'Submission of comprehensive thesis documentation',
    date: 'September 2023',
    marks: '19%',
    status: 'Completed'
  },
  {
    title: 'Progress Presentation - 2',
    description: 'Second progress review and system demonstration',
    date: 'October 2023',
    marks: '18%',
    status: 'Completed'
  },
  {
    title: 'Status Documents 1 & 2',
    description: 'Submission of project status documentation',
    date: 'November 2023',
    marks: '2%',
    status: 'Completed'
  },
  {
    title: 'Log Books',
    description: 'Submission of detailed project logs and documentation',
    date: 'October 2023',
    marks: '2%',
    status: 'Completed'
  },
  {
    title: 'Final Presentation + Viva',
    description: 'Final project presentation and viva voce examination',
    date: 'October 2023',
    marks: '20%',
    status: 'Completed'
  },
  {
    title: 'Website Development',
    description: 'Development and deployment of project website',
    date: 'October 2023',
    marks: '2%',
    status: 'Completed'
  }
];

const gallery: GalleryItem[] = [
  {
    title: 'Conference Presentation',
    description: 'Presenting our research findings at the annual science conference',
    image: '/WhatsApp_Image_2025-05-22_at_01.00.27_b72977c3.jpg'
  },
  {
    title: 'Data Analysis',
    description: 'Advanced data visualization techniques',
    image: 'https://images.unsplash.com/photo-1581092921461-eab10380ed5b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Strategy Session',
    description: 'Team planning and methodology refinement',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Collaboration',
    description: 'Cross-functional team problem solving',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop'
  }
];

const team: TeamMember[] = [
  {
    name: 'Ms. Thamali Kelegama',
    role: 'Supervisor',
    description: 'Lecturer, Sri Lanka Institute of Information Technology',
    image: '/images/thamalik.jpg'
  },
  {
    name: 'Ms. Malithi Nawarathne',
    role: 'Co-Supervisor',
    description: 'Assistant Lecturer, Sri Lanka Institute of Information Technology',
    image: '/images/malithin.png'
  },
  {
    name: 'Miss. Wijegunawardhana G.P.W',
    role: 'Researcher',
    description: 'BSc (Hons) Information Technology Specializing in Information Technology',
    image: '/images/Winodaya.jpeg'
  },
  {
    name: 'Miss.Oshadari K.M.R.P',
    role: 'Researcher',
    description: 'BSc (Hons) in Information Technology Specializing in Information Technology',
    image: '/images/oshadari.jpg'
  },
  {
    name: 'Mr.Aththanayaka P.S.K',
    role: 'Researcher',
    description: 'BSc (Hons) in Information Technology Specializing in Information Technology',
    image: '/images/Sandaruwan.jpg'
  },
  {
    name: 'Miss.Ekanayake E.M.P.T.S',
    role: 'Researcher',
    description: 'BSc (Hons) in Information Technology Specializing in Information Technology',
    image: '/images/Tharushi.jpeg'
  }
];

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <div className="min-h-screen bg-sky-light">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-2xl font-bold gradient-text">LifeTrack</a>
              <div className="hidden md:flex space-x-6">
                <a href="#about" className="nav-link">About</a>
                <a href="#documents" className="nav-link">Documents</a>
                <a href="#presentations" className="nav-link">Presentations</a>
                <a href="#milestones" className="nav-link">Milestones</a>
                <a href="#gallery" className="nav-link">Gallery</a>
                <a href="#team" className="nav-link">Team</a>
                <a href="#contact" className="nav-link">Contact</a>
              </div>
            </div>
            <button className="btn">Get Started</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-sky-light to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 gradient-text">Integrated Healthcare System for Vulnerable Populations</h1>
            <p className="text-xl mb-8">A comprehensive research project focusing on improving healthcare accessibility and quality for vulnerable communities through innovative technology solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container">
          <h2 className="text-center mb-12">About Our Research</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="mb-4">Research Overview</h3>
              <p className="mb-6">Our research focuses on developing an integrated healthcare system that addresses the unique needs of vulnerable populations. We combine cutting-edge technology with human-centered design to create solutions that are both effective and accessible.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-ocean-blue"></div>
                  <p>Real-time health monitoring</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-ocean-blue"></div>
                  <p>Automated emergency response</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-ocean-blue"></div>
                  <p>Community health analytics</p>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="mb-4">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-light flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-ocean-blue"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Smart Monitoring</h4>
                    <p className="text-sm text-gray-600">Continuous health tracking with AI-powered analysis</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-light flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-ocean-blue"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Emergency Response</h4>
                    <p className="text-sm text-gray-600">Automated alerts and rapid response system</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-light flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-ocean-blue"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Data Analytics</h4>
                    <p className="text-sm text-gray-600">Comprehensive health insights and reporting</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="section bg-sky-light">
        <div className="container">
          <h2 className="text-center mb-12">Project Documents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="card">
                <h3 className="mb-2">{doc.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{doc.date}</span>
                  <a href={doc.url} target="_blank" rel="noopener noreferrer" className="btn">
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section id="presentations" className="section bg-white">
        <div className="container">
          <h2 className="text-center mb-12">Project Presentations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {presentations.map((pres, index) => (
              <div key={index} className="card">
                <h3 className="mb-2">{pres.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{pres.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{pres.date}</span>
                  {pres.url ? (
                    <a href={pres.url} target="_blank" rel="noopener noreferrer" className="btn">
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  ) : (
                    <button className="btn opacity-50 cursor-not-allowed">
                      <Clock className="w-4 h-4" />
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section id="milestones" className="section bg-sky-light">
        <div className="container">
          <h2 className="text-center mb-12">Project Milestones</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="card">
                  <div className="flex justify-between items-start mb-4">
                    <h3>{milestone.title}</h3>
                    <span className="px-3 py-1 bg-sky-light text-ocean-blue rounded-full text-sm font-medium">
                      {milestone.marks} marks
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{milestone.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{milestone.date}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      milestone.status === 'Completed' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {milestone.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section bg-white">
        <div className="container">
          <h2 className="text-center mb-12">Project Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div key={index} className="gallery-item">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                <div className="p-4 bg-white">
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section bg-sky-light">
        <div className="container">
          <h2 className="text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="relative pt-[100%] mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Team+Member';
                    }}
                  />
                </div>
                <h3 className="mb-1">{member.name}</h3>
                <p className="text-ocean-blue font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container">
          <h2 className="text-center mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" id="name" className="input-field" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="input-field" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="input-field"></textarea>
              </div>
              <button type="submit" className="btn w-full">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LifeTrack</h3>
              <p className="text-gray-600">Improving healthcare accessibility through innovative technology solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#documents" className="nav-link">Documents</a></li>
                <li><a href="#presentations" className="nav-link">Presentations</a></li>
                <li><a href="#milestones" className="nav-link">Milestones</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#gallery" className="nav-link">Gallery</a></li>
                <li><a href="#team" className="nav-link">Team</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-ocean-blue">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-ocean-blue">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-ocean-blue">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600">&copy; 2024 LifeTrack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
}