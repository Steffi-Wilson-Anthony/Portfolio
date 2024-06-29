import React from 'react';
import { skills, experiences, socialLinks } from '../constants';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        <span className="purple-gradient_text font-semibold drop-shadow">Hello, I'm Steffi</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I am a Software Engineer, a Web developer and a Machine Learning enthusiast. I enjoy exploring new technologies.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-full'/>
              <div className='btn-front rounded-full flex justify-center items-center'>
                <img
                  src = {skill.imageUrl}
                  alt = {skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I am a 4th year student of IIIT Kottayam University based in India and I am currently engaged as a Technical Support Intern at IBM Kochi.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key = {experience.company_name}
                date = {experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img 
                    src = {experience.icon}
                    alt = {experience.company_name}
                    className='w-[100%] h-[100%] object-contain rounded-full'
                  />
                </div>}
                iconStyle={{background : '#ffffff'}}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>{experience.title}</h3>
                  <p className='text-black-500 font-medium font-base'
                  style = {{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
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
      </div>
    </section>
  )
}

export default About