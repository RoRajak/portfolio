import Image from 'next/image'


interface TechCompProps {
 src:string;
 title:string;
 imgSize?:string
}

const TechComp = ({src,title,imgSize}:TechCompProps) => {
  return (
    <div className='flex items-center gap-x-4 w-full  '>
        <Image src={src} alt={title}  style={{width:imgSize,height:imgSize}} />
        <p className='text-white font-bold text-xs !text-nowrap'>{title}</p>

    </div>
  )
}

export default TechComp