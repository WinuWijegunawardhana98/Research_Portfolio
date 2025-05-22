import React, { useState } from 'react';
import { DownloadIcon, MenuIcon, XIcon } from 'lucide-react';
export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <div className="bg-[#0d1117] text-white min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="bg-[#0d1117] border-b border-[#1c2433] p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-blue-500 font-bold text-xl">
              LifeTrack
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-500 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-blue-500 transition-colors">
              About
            </a>
            <a href="#documents" className="hover:text-blue-500 transition-colors">
              Documents
            </a>
            <a href="#presentations" className="hover:text-blue-500 transition-colors">
              Presentations
            </a>
            <a href="#gallery" className="hover:text-blue-500 transition-colors">
              Gallery
            </a>
            <a href="#team" className="hover:text-blue-500 transition-colors">
              Team
            </a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && <div className="md:hidden bg-[#1c2433] mt-4 p-4 rounded-md">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="#about" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#documents" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Documents
              </a>
              <a href="#presentations" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Presentations
              </a>
              <a href="#gallery" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Gallery
              </a>
              <a href="#team" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Team
              </a>
              <a href="#contact" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>}
      </header>
      {/* Hero Section */}
      <section id="home" className="bg-[#0d1117] py-20 text-center relative">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Life <span className="text-blue-500">Track</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Innovative research solutions for the modern academic landscape.
            Collaborate effectively with integrated technology and comprehensive
            documentation.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#documents" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
              Get Started
            </a>
            <a href="#about" className="border border-gray-600 hover:border-blue-500 text-white px-6 py-2 rounded-md transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="bg-[#0f1724] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            About Our Research System
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-400 mb-4">
                The Integrated Healthcare System for Vulnerable Populations is a smart solution developed to support people who need special medical care—like post-surgery patients, pregnant mothers, and those with diabetes or high blood pressure. These groups often face problems like poor access to doctors, lack of health education, and forgetting to take medicine.
              </p>
              <p className="text-gray-400 mb-4">
                This system uses modern technologies such as IoT (Internet of Things), AI (Artificial Intelligence), and blockchain to monitor health in real time, predict diseases early, and keep health data secure. Devices worn by patients measure heart rate, ECG, and oxygen levels. AI gives them health tips and reminders to take their medicine on time.
              </p>
              <p className="text-gray-400">
                A special chatbot, called the Health Motivation Bot, encourages users to stay active and healthy through fun challenges. The system also uses blockchain to protect personal health records and control who can access them.
              </p>
              <p className="text-gray-400">
                Tested with help from hospitals in Sri Lanka, this system has already shown success. It reduced hospital readmissions by 25% and improved patient satisfaction by 40%. This research proves that technology can make healthcare more helpful, secure, and fair for everyone, especially those in need.
              </p>
            </div>
            <div className="bg-[#1c2433] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-gray-300">
                    Real-Time Health Monitoring
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-gray-300">
                    Early Disease Prediction
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-gray-300">
                    Personalized Health Recommendations
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-gray-300">
                    Medication Adherence Support
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-gray-300">
                    Blockchain-Secured Data Management
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-gray-300">
                    Health Motivation Bot
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
   {/* Technologies Section */}
<section className="bg-[#0d1117] py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-2 text-center text-white">
      Technologies Used
    </h2>
    <p className="text-gray-400 text-center mb-12">
      Our research platform leverages cutting-edge technologies to deliver robust functionality
    </p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {[
        {
          name: 'React',
          description: 'For building our interactive user interface components',
          imageUrl: '/technologies/react.png',
        },
        {
          name: 'Node.js',
          description: 'For server-side operations and API integrations',
          imageUrl: '/technologies/nodejs.png',
        },
        {
          name: 'TensorFlow',
          description: 'For machine learning algorithms and data processing',
          imageUrl: '/technologies/tensorflow.jpg',
        },
        {
          name: 'Python',
          description: 'For data analysis & scientific computing modules',
          imageUrl: '/technologies/python.png',
        },
        {
          name: 'PostgreSQL',
          description: 'For secure and scalable database management',
          imageUrl: '/technologies/PostgreSQL.png',
        },
        {
          name: 'MongoDB',
          description: 'For flexible document storage requirements',
          imageUrl: '/technologies/mongoDB.png',
        },
      ].map((tech, index) => (
        <div
          key={index}
          className="bg-[#1c2433] p-6 rounded-lg hover:shadow-lg transition-shadow text-center"
        >
          <div className="flex justify-center mb-4">
            <img
              src={tech.imageUrl}
              alt={tech.name}
              className="h-16 w-16 object-contain"
              onError={(e) =>
                (e.currentTarget.src = 'https://via.placeholder.com/64?text=NA')
              }
            />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
          <p className="text-gray-400 text-sm">{tech.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Documents Section */}
<section id="documents" className="bg-[#0f1724] py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-2 text-center">
      Project Documents
    </h2>
    <p className="text-gray-400 text-center mb-12">
      Access and download all project documentation and research materials
    </p>
    <div className="space-y-6">
      {[
        {
          title: 'Project Charter',
          description: 'The document gives the information regarding the statement of scope, objectives overview, an outline of scope, an approximate schedule and people who are participating in a project',
          date: 'Updated: May 22, 2025',
          url: '#'
        },
        {
          title: 'Project Proposal',
          description: 'The document contains details like goals, objectives, important dates, milestones and requirements needed to start and complete the project.',
          date: 'Updated: May 22, 2025',
          url: 'https://drive.google.com/drive/folders/1rSZltJHQxyd08ziyFbK7EdVeML81tGYz?usp=sharing'
        },
        {
          title: 'Research Paper',
          description: 'A research paper contains writing that provides Literature review, Research methodology, analysis, interpretation, and argument based on in-depth independent research',
          date: 'Updated: May 22, 2025',
          url: 'https://drive.google.com/file/d/1O4MdC3BvzuaqaHkz25vKSssY4tJTgqHe/view?usp=sharing'
        },
        {
          title: 'Final Thesis',
          description: 'The document contains the Proposed solution to the research question, which was finalized after completing the research',
          date: 'Updated: May 22, 2025',
          url: 'https://drive.google.com/file/d/1rftdqku0ieqM361yB2EI2g7U0eXPTRdI/view?usp=sharing'
        },
        {
          title: 'Status Document',
          description: 'The document describes the progress of the project within the specific time period and compares it against the project plan checklist',
          date: 'Updated: May 22, 2025',
          url: '#'
        },
        {
          title: 'Research Logbook',
          description: 'The document describes the progress of the project within the specific time period and compares it against the project plan checklist',
          date: 'Updated: May 22, 2025',
          url: '#'
        },
        {
          title: 'Business Plan',
          description: 'Business plan is very valuable when it comes to commercializing the product to the real world market as an organization entity',
          date: 'Updated: May 22, 2025',
          url: '#'
        }
      ].map((doc, index) => (
        <div
          key={index}
          className="bg-[#1c2433] p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div>
            <h3 className="text-xl font-semibold mb-1">{doc.title}</h3>
            <p className="text-gray-400 mb-1">{doc.description}</p>
            <p className="text-gray-500 text-sm">{doc.date}</p>
          </div>
          <a
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              doc.url !== '#' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 cursor-not-allowed'
            } text-white px-4 py-2 rounded flex items-center gap-2 whitespace-nowrap`}
          >
            <DownloadIcon size={16} />
            <span>Download</span>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

    {/* Presentations Section */}
<section id="presentations" className="bg-[#0d1117] py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-2 text-center">
      Project Presentations
    </h2>
    <p className="text-gray-400 text-center mb-12">
      Access all project presentation materials and slides
    </p>
    <div className="grid md:grid-cols-3 gap-6">
      {[{
        id: 'P01',
        title: 'Proposal Presentation',
        description: 'Initial Presentation with Overview of Research Problem',
        date: 'May 2025',
        url: 'https://docs.google.com/presentation/d/1n9ESC50DSzM6KlyBA3iofcybrEndebFo/edit?usp=sharing&ouid=110734154392972712492&rtpof=true&sd=true'
      }, {
        id: 'P02',
        title: 'Progress Presentation-1',
        description: '50% Project Completion',
        date: 'May 2025',
        url: 'https://docs.google.com/presentation/d/1qAyNqLTzGqT-ubn_EljZrgrdLC3yAxGR/edit?usp=sharing&ouid=110734154392972712492&rtpof=true&sd=true'
      }, {
        id: 'P03',
        title: 'Progress Presentation-2',
        description: '90% Project Completion',
        date: 'May 2025',
        url: 'https://docs.google.com/presentation/d/1P6xziwUI4YmbnDUKt7lXlYUCvXYRxDR3/edit?usp=sharing&ouid=110734154392972712492&rtpof=true&sd=true'
      }, {
        id: 'P04',
        title: 'Final Presentation',
        description: '100% Completion with deployed Solution',
        date: 'May 2025',
        url: '#'
      }].map((presentation, index) => (
        <div key={index} className="bg-[#1c2433] p-6 rounded-lg flex flex-col h-full">
          <div className="bg-[#0d1117] h-40 mb-4 rounded flex items-center justify-center">
            <span className="text-3xl font-bold text-blue-500">
              {presentation.id}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            {presentation.title}
          </h3>
          <p className="text-gray-400 mb-2">{presentation.description}</p>
          <p className="text-gray-500 text-sm mb-4">
            {presentation.date}
          </p>
          <a
            href={presentation.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center justify-center gap-2 mt-auto"
          >
            <DownloadIcon size={16} />
            <span>Download Presentation</span>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Milestones Section */}
      <section className="bg-[#0f1724] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Project Milestones
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Key project achievements and timeline progression
          </p>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-blue-500/30 transform -translate-x-1/2"></div>
            {/* Milestone Items */}
            <div className="space-y-12">
              {[{
              title: 'Project Proposal (Presentation + Proposal Report)',
              description: 'Mark Allocation - 12%',
              date: 'February 2023'
            }, {
              title: 'Progress Presentation – 1',
              description: 'Mark Allocation - 15%',
              date: 'April 2023'
            }, {
              title: 'Research Paper Publication',
              description: 'Mark Allocation - 10%',
              date: 'July 2023'
            }, {
              title: 'Final Reports (Thesis)',
              description: 'Mark Allocation - 19%',
              date: 'September 2023'
            }, {
              title: 'Progress Presentation - 2',
              description: 'Mark Allocation - 18%',
              date: 'October 2023'
            }, {
              title: 'Status Documents 1 & 2',
              description: 'Mark Allocation - 2%',
              date: 'November 2023'
            }, {
              title: 'Log Books',
              description: 'Mark Allocation - 2%',
              date: 'October 2023'
            },{
              title: 'Final Presentation + Viva ',
              description: 'Mark Allocation - 20%',
              date: 'October 2023'
            },{
              title: 'Website Development',
              description: 'Mark Allocation - 2%',
              date: 'October 2023'
            }, 
            ].map((milestone, index) => <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                  <div className="md:w-1/2 md:px-12 mb-4 md:mb-0">
                    <div className="bg-[#1c2433] p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400">{milestone.description}</p>
                      <p className="text-blue-500 mt-2 text-sm">
                        {milestone.date}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex justify-center md:w-1/2">
                    <div className="h-5 w-5 rounded-full bg-blue-500 absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10"></div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section id="gallery" className="bg-[#0d1117] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Research Gallery
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Visual documentation of our research process and outcomes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2 bg-[#1c2433] rounded-lg overflow-hidden">
              <img src="/WhatsApp_Image_2025-05-22_at_01.00.27_b72977c3.jpg" alt="Research presentation" className="w-full h-80 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Conference Presentation
                </h3>
                <p className="text-gray-400">
                  Presenting our research findings at the annual science
                  conference
                </p>
              </div>
            </div>
            <div className="bg-[#1c2433] rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1581092921461-eab10380ed5b?q=80&w=2070&auto=format&fit=crop" alt="Data visualization" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">Data Analysis</h3>
                <p className="text-gray-400 text-sm">
                  Advanced data visualization techniques
                </p>
              </div>
            </div>
            <div className="bg-[#1c2433] rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Team meeting" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">Strategy Session</h3>
                <p className="text-gray-400 text-sm">
                  Team planning and methodology refinement
                </p>
              </div>
            </div>
            <div className="bg-[#1c2433] rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" alt="Collaborative work" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">Collaboration</h3>
                <p className="text-gray-400 text-sm">
                  Cross-functional team problem solving
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
     {/* Team Section */}
<section id="team" className="bg-[#0f1724] py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-2 text-center text-white">Our Team</h2>
    <p className="text-gray-400 text-center mb-12">
      Meet the dedicated professionals behind this research project
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
         {
          name: 'Ms. Thamali Kelegama',
          role: 'Supervisor',
          description: 'Lecturer, Sri Lanka Institute of Information Technology',
          imageUrl: '/images/thamalik.jpg',
        },
        {
          name: 'Ms. Malithi Nawarathne',
          role: 'Co-Supervisor',
          description: 'Assistant Lecturer, Sri Lanka Institute of Information Technology',
          imageUrl: '/images/malithin.png',
        },
         {
          name: 'Miss. Winodya Wijegunawardhana',
          role: 'Researcher',
          description: 'BSc (Hons) Information Technology  Specializing in Information Technology ',
          imageUrl: '/images/Winodaya.jpeg',
        },
        {
          name: 'Miss. Oshadari',
          role: 'Researcher',
          description: 'BSc (Hons) in Information Technology  Specializing in Information Technology ',
          imageUrl: '/images/oshadari.jpg',
        },
        {
          name: 'Mr. Sandaruwan Aththanayaka',
          role: 'Researcher',
          description: 'BSc (Hons) in Information Technology  Specializing in Information Technology ',
          imageUrl: '/images/Sandaruwan.jpg',
        },
       
        {
          name: 'Miss. Tharushi Ekanayaka',
          role: 'Researcher',
          description: 'BSc (Hons) in Information Technology  Specializing in Information Technology ',
          imageUrl: '/images/Tharushi.jpeg',
        },
       
      ].map((member, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="w-full h-72 overflow-hidden">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) =>
                (e.currentTarget.src = 'https://via.placeholder.com/300x300?text=No+Image')
              }
            />
          </div>
          <div className="p-4 text-center">
            <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
            <p className="text-gray-600 font-semibold">{member.role}</p>
            <p className="text-sm text-gray-500 mt-1">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#0d1117] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-400 mb-6">
                Have questions about our research or interested in collaboration
                opportunities? We'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                    <div className="h-5 w-5 rounded-full bg-blue-500/30"></div>
                  </div>
                  <span className="text-gray-300">lifetrack@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                    <div className="h-5 w-5 rounded-full bg-blue-500/30"></div>
                  </div>
                  <span className="text-gray-300">+94 112937778</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                    <div className="h-5 w-5 rounded-full bg-blue-500/30"></div>
                  </div>
                  <span className="text-gray-300">
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[#1c2433] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full bg-[#0d1117] border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-blue-500" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full bg-[#0d1117] border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-blue-500" placeholder="Your email" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="w-full bg-[#0d1117] border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-blue-500" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors" onClick={e => {
                e.preventDefault();
                alert('Message sent successfully!');
              }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#0f1724] py-12 border-t border-[#1c2433]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-500">
                Research Project
              </h3>
              <p className="text-gray-400 mb-4">
                Advancing knowledge through innovative research methodologies
                and collaborative efforts.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">Twitter</span>
                  <div className="h-6 w-6 rounded-full bg-gray-700"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">LinkedIn</span>
                  <div className="h-6 w-6 rounded-full bg-gray-700"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <span className="sr-only">GitHub</span>
                  <div className="h-6 w-6 rounded-full bg-gray-700"></div>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#documents" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Documents
                  </a>
                </li>
                <li>
                  <a href="#presentations" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Presentations
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Research Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Methodology
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Data Sets
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Publications
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Sri Lanka Institute of Information Technology (SLIIT),
                                              Sri Lanka.</li>
                <li className="text-gray-400">lifetrack@gmail.com</li>
                <li className="text-gray-400">+94 112937778</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#1c2433] text-center">
            <p className="text-gray-500 text-sm">
              © 2025 LifeTrack Research Project. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
}