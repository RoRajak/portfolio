import { experieceSkill } from '@/constants'
import ExpComponet from '@/helpers/ExpComponet'
import React from 'react'

const Experience = () => {
  return (
    <section className='bg-black px-5 md:px-44 py-10  z-10'>
      <h1 className='text-3xl md:text-4xl text-center text-white mb-10'>Experience</h1>
      <div className='flex flex-col gap-y-24 '>
        {
            experieceSkill.map((exp,index)=>(
                <ExpComponet
                key={index}
                src={exp.src}
                company={exp.company}
                date={exp.date}
                desc={exp.desc}
                title={exp.title}
                />
            )
        )
        }
      
      </div>
    </section>
  )
}

export default Experience