import anime from 'animejs'
import { useEffect } from 'react'
import bgVideo from '../assets/background-video.mp4'

const elementsArray = Array.from({ length: 24 }, (_, index) => index + 1)


export function HeroSection() {

    useEffect(() => {
        anime({
            targets: '.staggering-grid-demo .el',
            scale: [
                { value: 0.1, easing: 'easeOutSine', duration: 700 },
                { value: 1, easing: 'easeInOutQuad', duration: 1400 }
            ],
            delay: anime.stagger(400, { grid: [8, 3], from: 'center' }),
            loop: true
        })
    }, [])

    return(
        <section className='min-h-screen'>

            <div className='fixed top-0 left-0 w-full h-full overflow-hidden -z-10'>
                <video autoPlay muted loop className='w-full h-full object-cover'>
                    <source src={bgVideo} type='video/mp4'/>
                </video>
            </div>

            <div className='staggering-grid-demo absolute top-0 right-20 flex flex-col justify-center align-center text-center h-full w-[290px] z-10'>
                <div className='flex flex-wrap gap-2 opacity-80'>
                    {elementsArray.map((_, index) => ( 
                        <div key={index} className='el w-7 h-7 relative pointer-events-none rounded-3xl bg-gray-50'></div>
                    ))}
                </div>
                <div className='flex flex-wrap gap-2 absolute opacity-20'>
                    {elementsArray.map((_, index) => ( 
                        <div key={index} className='el w-7 h-7 relative pointer-events-none rounded-3xl bg-white'></div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-2 ps-10 absolute top-[40%] text-white'>
                <p>Hey, I'm Austin</p>
                <h1 className='text-3xl font-bold'>
                    <span>Front</span>
                    <span>end</span>
                    <span className='block'>Developer</span>
                </h1>
            </div>

        </section>
    )
}