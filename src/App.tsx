import React, { useState } from 'react';
import { DownloadIcon, MenuIcon, XIcon } from 'lucide-react';
export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <div className="bg-sky-light text-gray-800 min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200 p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-ocean-blue font-bold text-xl">
              LifeTrack
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-ocean-blue transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-ocean-blue transition-colors">
              About
            </a>
            <a href="#documents" className="hover:text-ocean-blue transition-colors">
              Documents
            </a>
            <a href="#presentations" className="hover:text-ocean-blue transition-colors">
              Presentations
            </a>
            <a href="#gallery" className="hover:text-ocean-blue transition-colors">
              Gallery
            </a>
            <a href="#team" className="hover:text-ocean-blue transition-colors">
              Team
            </a>
            <a href="#contact" className="hover:text-ocean-blue transition-colors">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && <div className="md:hidden bg-white mt-4 p-4 rounded-md shadow-md">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="hover:text-ocean-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="#about" className="hover:text-ocean-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#documents" className="hover:text-ocean-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
                Documents
              </a>
              <a href="#presentations" className="hover:text-ocean-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
                Presentations
              </a>
              <a href="#gallery" className="hover:text-ocean-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
                Gallery
              </a>
              <a href="#team" className="hover:text-ocean-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
                Team
              </a>
              <a href="#contact" className="hover:text-ocean-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>}
      </header>
      {/* Hero Section */}
      <section id="home" className="bg-sky-light py-20 text-center relative">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Life <span className="text-ocean-blue">Track</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Innovative research solutions for the modern academic landscape.
            Collaborate effectively with integrated technology and comprehensive
            documentation.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#documents" className="btn">
              Get Started
            </a>
            <a href="#about" className="border border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white px-6 py-2 rounded-md transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            About Our Research System
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-4">
                The Integrated Healthcare System for Vulnerable Populations is a smart solution developed to support people who need special medical care—like post-surgery patients, pregnant mothers, and those with diabetes or high blood pressure. These groups often face problems like poor access to doctors, lack of health education, and forgetting to take medicine.
              </p>
              <p className="text-gray-600 mb-4">
                This system uses modern technologies such as IoT (Internet of Things), AI (Artificial Intelligence), and blockchain to monitor health in real time, predict diseases early, and keep health data secure. Devices worn by patients measure heart rate, ECG, and oxygen levels. AI gives them health tips and reminders to take their medicine on time.
              </p>
              <p className="text-gray-600">
                A special chatbot, called the Health Motivation Bot, encourages users to stay active and healthy through fun challenges. The system also uses blockchain to protect personal health records and control who can access them.
              </p>
              <p className="text-gray-600">
                Tested with help from hospitals in Sri Lanka, this system has already shown success. It reduced hospital readmissions by 25% and improved patient satisfaction by 40%. This research proves that technology can make healthcare more helpful, secure, and fair for everyone, especially those in need.
              </p>
            </div>
            <div className="bg-sky-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-ocean-blue/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-ocean-blue"></div>
                  </div>
                  <span className="text-gray-700">
                    Real-Time Health Monitoring
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-ocean-blue/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-ocean-blue"></div>
                  </div>
                  <span className="text-gray-700">
                    Early Disease Prediction
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-ocean-blue/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-ocean-blue"></div>
                  </div>
                  <span className="text-gray-700">
                    Personalized Health Recommendations
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-ocean-blue/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-ocean-blue"></div>
                  </div>
                  <span className="text-gray-700">
                    Medication Adherence Support
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-ocean-blue/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-ocean-blue"></div>
                  </div>
                  <span className="text-gray-700">
                    Blockchain-Secured Data Management
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-ocean-blue/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-ocean-blue"></div>
                  </div>
                  <span className="text-gray-700">
                    Health Motivation Bot
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Technologies Section */}
      <section className="bg-sky-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
            Technologies Used
          </h2>
          <p className="text-gray-600 text-center mb-12">
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
                className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-sky-light flex items-center justify-center p-4 group-hover:bg-ocean-blue/10 transition-colors duration-300">
                    <img
                      src={tech.imageUrl}
                      alt={tech.name}
                      className="h-12 w-12 object-contain"
                      onError={(e) =>
                        (e.currentTarget.src = 'https://via.placeholder.com/64?text=NA')
                      }
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center group-hover:text-ocean-blue transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
            Project Documents
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Access and download all project documentation and research materials
          </p>
          <div className="space-y-6">
            {[
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
            ].map((doc, index) => (
              <div
                key={index}
                className="bg-sky-light p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">{doc.title}</h3>
                  <p className="text-gray-600 mb-1">{doc.description}</p>
                  <p className="text-gray-500 text-sm">{doc.date}</p>
                </div>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex items-center gap-2 whitespace-nowrap group"
                >
                  <DownloadIcon size={18} className="transition-transform group-hover:scale-110" />
                  <span>Download</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section id="presentations" className="bg-sky-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
            Project Presentations
          </h2>
          <p className="text-gray-600 text-center mb-12">
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
              <div key={index} className="bg-white p-6 rounded-lg flex flex-col h-full shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-sky-light h-40 mb-4 rounded flex items-center justify-center">
                  <span className="text-3xl font-bold text-ocean-blue">
                    {presentation.id}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {presentation.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{presentation.description}</p>
                  <p className="text-gray-500 text-sm mb-4">
                    {presentation.date}
                  </p>
                </div>
                <div className="mt-4">
                  {presentation.url !== '#' ? (
                    <a
                      href={presentation.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-full flex items-center justify-center gap-2 group"
                    >
                      <DownloadIcon size={18} className="transition-transform group-hover:scale-110" />
                      <span>Download Presentation</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-gray-300 text-gray-500 px-4 py-2 rounded-md flex items-center justify-center gap-2 cursor-not-allowed"
                    >
                      <DownloadIcon size={18} />
                      <span>Coming Soon</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
            Project Milestones
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Key project achievements and timeline progression
          </p>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-ocean-blue/30 transform -translate-x-1/2"></div>
            {/* Milestone Items */}
            <div className="space-y-16">
              {[{
                title: 'Project Proposal',
                description: 'Initial project presentation and proposal report submission',
                date: 'February 2023',
                mark: '12%',
                status: 'completed'
              }, {
                title: 'Progress Presentation – 1',
                description: 'First progress review and demonstration',
                date: 'April 2023',
                mark: '15%',
                status: 'completed'
              }, {
                title: 'Research Paper Publication',
                description: 'Publication of research findings in academic journals',
                date: 'July 2023',
                mark: '10%',
                status: 'completed'
              }, {
                title: 'Final Reports (Thesis)',
                description: 'Submission of comprehensive thesis documentation',
                date: 'September 2023',
                mark: '19%',
                status: 'completed'
              }, {
                title: 'Progress Presentation - 2',
                description: 'Second progress review and system demonstration',
                date: 'October 2023',
                mark: '18%',
                status: 'completed'
              }, {
                title: 'Status Documents 1 & 2',
                description: 'Submission of project status documentation',
                date: 'November 2023',
                mark: '2%',
                status: 'completed'
              }, {
                title: 'Log Books',
                description: 'Submission of detailed project logs and documentation',
                date: 'October 2023',
                mark: '2%',
                status: 'completed'
              }, {
                title: 'Final Presentation + Viva',
                description: 'Final project presentation and viva voce examination',
                date: 'October 2023',
                mark: '20%',
                status: 'completed'
              }, {
                title: 'Website Development',
                description: 'Development and deployment of project website',
                date: 'October 2023',
                mark: '2%',
                status: 'completed'
              }].map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                  <div className="md:w-1/2 md:px-12 mb-4 md:mb-0">
                    <div className="bg-sky-light p-6 rounded-lg shadow-md relative">
                      <div className="absolute -top-3 -left-3 bg-ocean-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {milestone.mark}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{milestone.description}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-ocean-blue font-medium">
                          {milestone.date}
                        </p>
                        <div className="flex items-center">
                          <span className="text-green-500 mr-2">●</span>
                          <span className="text-sm text-gray-600">Completed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex justify-center md:w-1/2">
                    <div className="h-8 w-8 rounded-full bg-ocean-blue absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section id="gallery" className="bg-sky-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
            Research Gallery
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Visual documentation of our research process and outcomes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2 bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/WhatsApp_Image_2025-05-22_at_01.00.27_b72977c3.jpg" alt="Research presentation" className="w-full h-80 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Conference Presentation
                </h3>
                <p className="text-gray-600">
                  Presenting our research findings at the annual science conference
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1581092921461-eab10380ed5b?q=80&w=2070&auto=format&fit=crop" alt="Data visualization" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 text-gray-800">Data Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Advanced data visualization techniques
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Team meeting" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 text-gray-800">Strategy Session</h3>
                <p className="text-gray-600 text-sm">
                  Team planning and methodology refinement
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" alt="Collaborative work" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 text-gray-800">Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Cross-functional team problem solving
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
     {/* Team Section */}
     <section id="team" className="bg-white py-16">
       <div className="container mx-auto px-4">
         <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Our Team</h2>
         <p className="text-gray-600 text-center mb-12">
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
               name: 'Miss. Wijegunawardhana G.P.W',
               role: 'Researcher',
               description: 'BSc (Hons) Information Technology  Specializing in Information Technology ',
               imageUrl: '/images/Winodaya.jpeg',
             },
             {
               name: 'Miss.Oshadari K.M.R.P',
               role: 'Researcher',
               description: 'BSc (Hons) in Information Technology  Specializing in Information Technology ',
               imageUrl: '/images/oshadari.jpg',
             },
             {
               name: 'Mr.Aththanayaka P.S.K',
               role: 'Researcher',
               description: 'BSc (Hons) in Information Technology  Specializing in Information Technology ',
               imageUrl: '/images/Sandaruwan.jpg',
             },
            
             {
               name: 'Miss.Ekanayake E.M.P.T.S',
               role: 'Researcher',
               description: 'BSc (Hons) in Information Technology  Specializing in Information Technology ',
               imageUrl: '/images/Tharushi.jpeg',
             },
            
           ].map((member, index) => (
             <div key={index} className="bg-sky-light rounded-lg overflow-hidden shadow-md flex flex-col">
               <div className="relative w-full pt-[100%]">
                 <img
                   src={member.imageUrl}
                   alt={member.name}
                   className="absolute top-0 left-0 w-full h-full object-cover"
                   onError={(e) => {
                     e.currentTarget.src = 'https://via.placeholder.com/300x300?text=No+Image';
                     e.currentTarget.className = 'absolute top-0 left-0 w-full h-full object-contain bg-gray-100';
                   }}
                 />
               </div>
               <div className="p-4 text-center flex-grow">
                 <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                 <p className="text-ocean-blue font-semibold">{member.role}</p>
                 <p className="text-gray-600 text-sm mt-1">{member.description}</p>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>

     {/* Contact Section */}
     <section id="contact" className="bg-sky-light py-16">
       <div className="container mx-auto px-4">
         <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Contact Us</h2>
         <div className="grid md:grid-cols-2 gap-8">
           <div>
             <h3 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
             <p className="text-gray-600 mb-6">
               Have questions about our research or interested in collaboration
               opportunities? We'd love to hear from you.
             </p>
             <div className="space-y-4">
               <div className="flex items-center">
                 <div className="h-10 w-10 rounded-full bg-ocean-blue/10 flex items-center justify-center mr-4">
                   <div className="h-5 w-5 rounded-full bg-ocean-blue/30"></div>
                 </div>
                 <span className="text-gray-700">lifetrack@gmail.com</span>
               </div>
               <div className="flex items-center">
                 <div className="h-10 w-10 rounded-full bg-ocean-blue/10 flex items-center justify-center mr-4">
                   <div className="h-5 w-5 rounded-full bg-ocean-blue/30"></div>
                 </div>
                 <span className="text-gray-700">+94 112937778</span>
               </div>
               <div className="flex items-center">
                 <div className="h-10 w-10 rounded-full bg-ocean-blue/10 flex items-center justify-center mr-4">
                   <div className="h-5 w-5 rounded-full bg-ocean-blue/30"></div>
                 </div>
                 <span className="text-gray-700">
                   Sri Lanka Institute of Information Technology (SLIIT)
                 </span>
               </div>
             </div>
           </div>
           <div className="bg-white p-6 rounded-lg shadow-md">
             <h3 className="text-xl font-semibold mb-4 text-gray-800">Send a Message</h3>
             <form className="space-y-4">
               <div>
                 <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                   Name
                 </label>
                 <input type="text" id="name" className="w-full bg-sky-light border border-gray-200 rounded-md p-2 text-gray-800 focus:outline-none focus:border-ocean-blue" placeholder="Your name" />
               </div>
               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                   Email
                 </label>
                 <input type="email" id="email" className="w-full bg-sky-light border border-gray-200 rounded-md p-2 text-gray-800 focus:outline-none focus:border-ocean-blue" placeholder="Your email" />
               </div>
               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                   Message
                 </label>
                 <textarea id="message" rows={4} className="w-full bg-sky-light border border-gray-200 rounded-md p-2 text-gray-800 focus:outline-none focus:border-ocean-blue" placeholder="Your message"></textarea>
               </div>
               <button type="submit" className="btn w-full" onClick={e => {
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
     <footer className="bg-white py-12 border-t border-gray-200">
       <div className="container mx-auto px-4">
         <div className="grid md:grid-cols-4 gap-8 mb-8">
           <div>
             <h3 className="text-xl font-bold mb-4 text-ocean-blue">
               Research Project
             </h3>
             <p className="text-gray-600 mb-4">
               Advancing knowledge through innovative research methodologies
               and collaborative efforts.
             </p>
             <div className="flex space-x-4">
               <a href="#" className="text-gray-600 hover:text-ocean-blue">
                 <span className="sr-only">Twitter</span>
                 <div className="h-6 w-6 rounded-full bg-sky-light"></div>
               </a>
               <a href="#" className="text-gray-600 hover:text-ocean-blue">
                 <span className="sr-only">LinkedIn</span>
                 <div className="h-6 w-6 rounded-full bg-sky-light"></div>
               </a>
               <a href="#" className="text-gray-600 hover:text-ocean-blue">
                 <span className="sr-only">GitHub</span>
                 <div className="h-6 w-6 rounded-full bg-sky-light"></div>
               </a>
             </div>
           </div>
           <div>
             <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
             <ul className="space-y-2">
               <li>
                 <a href="#home" className="text-gray-600 hover:text-ocean-blue transition-colors">
                   Home
                 </a>
               </li>
               <li>
                 <a href="#about" className="text-gray-600 hover:text-ocean-blue transition-colors">
                   About
                 </a>
               </li>
               <li>
                 <a href="#documents" className="text-gray-600 hover:text-ocean-blue transition-colors">
                   Documents
                 </a>
               </li>
               <li>
                 <a href="#presentations" className="text-gray-600 hover:text-ocean-blue transition-colors">
                   Presentations
                 </a>
               </li>
               <li>
                 <a href="#gallery" className="text-gray-600 hover:text-ocean-blue transition-colors">
                   Gallery
                 </a>
               </li>
             </ul>
           </div>
           <div>
             <h3 className="text-lg font-semibold mb-4 text-gray-800">Resources</h3>
             <ul className="space-y-2">
               <li>
                 <a href="#" className="text-gray-600 hover:text-ocean-blue transition-colors">
                   Research Papers
                 </a>
               </li>
               <li>
                 <a href="#" className="text-gray-600 hover:text-ocean-blue transition-colors">
                   Case Studies
                 </a>
               </li>
               <li>
                 <a href="#" className="text-gray-600 hover:text-ocean-blue transition-colors">
                   Methodology
                 </a>
               </li>
               <li>
                 <a href="#" className="text-gray-600 hover:text-ocean-blue transition-colors">
                   Data Sets
                 </a>
               </li>
               <li>
                 <a href="#" className="text-gray-600 hover:text-ocean-blue transition-colors">
                   Publications
                 </a>
               </li>
             </ul>
           </div>
           <div>
             <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact</h3>
             <ul className="space-y-2">
               <li className="text-gray-600">Sri Lanka Institute of Information Technology (SLIIT),
                                             Sri Lanka.</li>
               <li className="text-gray-600">lifetrack@gmail.com</li>
               <li className="text-gray-600">+94 112937778</li>
             </ul>
           </div>
         </div>
         <div className="pt-8 border-t border-gray-200 text-center">
           <p className="text-gray-500 text-sm">
             © 2025 LifeTrack Research Project. All rights reserved.
           </p>
         </div>
       </div>
     </footer>
   </div>;
}