import React from 'react'
import {projects, socialLinks} from '../constants';
import { Link } from 'react-router-dom';
import { search } from '../assets/icons';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        <span className="purple-gradient_text font-semibold drop-shadow">My Projects</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Here are some of the projects that I worked on. They are mostly based on ReactJS, Docker, Kubernetes and Machine Learning.
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={project.iconUrl}
                alt = "Project icon"
                className='w-1/2 h-1/2 object-contain'
              />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {project.description}
              </p>
              <div className='mt-5 font-poppins'>
                <Link 
                to={project.link}
                target = '_blank'
                rel = "noopener noreferrer"
                className='flex items-center gap-2 font-semibold text-blue-600'
                >
                Live Link
                <img src={search} className='w-6 h-6 object-contain bg-blue-600 p-1 rounded-lg' />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className='w-full p-24 flex justify-center items-center gap-6
        '>
          <p className='font-poppins font-semibold subhead-text'>
            FIND ME ON
          </p>
          {socialLinks.map((socialLink) => (
            <a
            href = {socialLink.link}
            target="_blank"
            className='social-link'
          >
            <img src = {socialLink.iconUrl} className='object-contain'/>
          </a>
          ))}
        </footer>
    </section>
  )
}

export default Projects