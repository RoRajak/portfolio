import { projects } from '@/constants'
import ProjectComp from '@/helpers/ProjectComp'

const Projects = () => {
  return (
    <section id='projects' className='bg-black px-5 md:px-44 py-10  z-10'>
      <h1 className='text-3xl md:text-4xl text-center text-white mb-10'>Projects</h1>
      <div className='flex flex-col gap-y-24 '>
      {projects.map((project, index) => (
        <ProjectComp 
          key={index}
          src={project.src}
          title={project.title}
          desc={project.desc}
          repo={project.repo}
          live={project.link}
          className={index % 2 !== 0 ? 'md:flex-row-reverse' : ' md:flex-row'}
        />
      ))}
      </div>
    </section>
  )
}

export default Projects