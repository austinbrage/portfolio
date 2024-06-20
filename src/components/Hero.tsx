import anime from 'animejs'
import { useEffect } from 'react'
import bgVideo from '../assets/background-video.mp4'

// const elementsArray = Array.from({ length: 24 }, (_, index) => index + 1)

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

            <nav className='flex align-center justify-center pt-5 w-full max-w-full'>
                <div className='flex align-center justify-between w-1/4'>
                    <p className='text-2xl tracking-wider font-bold transition-all duration-500 scale-100 text-slate-200 hover:tracking-widest'>
                        <a href="#home" className=''>
                            Home
                        </a>
                    </p>               
                    <p className='text-2xl tracking-wider font-bold transition-all duration-500 scale-100 text-slate-200 hover:tracking-widest'>
                        <a href="#projects" className=''>
                            Projects
                        </a>
                    </p>               
                    <p className='text-2xl tracking-wider font-bold transition-all duration-500 scale-100 text-slate-200 hover:tracking-widest'>
                        <a href="#about" className=''>
                            About
                        </a>
                    </p>    
                </div>
            </nav>

            <div className='fixed top-0 left-0 w-full h-full overflow-hidden -z-10 bg-slate-700'>
                <video autoPlay muted loop className='w-full h-full object-cover'>
                    <source src={bgVideo} type='video/mp4'/>
                </video>
            </div>

            {/* <div className='staggering-grid-demo absolute top-0 right-20 flex flex-col justify-center align-center text-center h-full w-[290px] z-10'>
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
            </div> */}

            <div className='flex flex-col gap-2 ps-10 absolute top-[30%] text-white'>
                {/* <h1 className='text-2xl'>Hey, I'm Austin 👋🏻</h1> */}
                <h2 className='text-[5.2rem] leading-[5rem] tracking-widest font-bold font-poetsen'>
                    <span className='text-slate-400'>Web </span>
                    <span>Developer</span>
                </h2>
                <p className='mt-2 text-xl'>
                    Hey, I'm Austin 👋🏻 a web developer based in Buenos Aires
                </p>
                <p className='mt-0 text-lg italic'>
                    {/* [ Currently looking to working with a team ] */}
                </p>
                <div className='flex items-center justify-start gap-2 w-full'>
                    <button className="flex items-center bg-indigo-600 text-white w-max px-6 py-3 font-semibold text-md leading-5 rounded-lg gap-3 border-none cursor-pointer transition ease-in-out duration-600 hover:scale-95"> 
                        Get in touch 
                    </button>
                    <button className="flex items-center bg-gray-800 text-white w-56 px-5 py-2 font-bold text-sm leading-5 rounded-lg gap-3 border-none cursor-pointer transition ease-in-out duration-600 hover:scale-95"> 
                        <svg className='h-8' fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <rect fill="none" height="24" width="24"></rect> <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path> </g></svg>
                        See me on Github 
                    </button>
                </div>
            </div>

        </section>
    )
}