import bgVideo from '../assets/background-video.mp4'

export function HeroSection() {
    return(
        <section className='min-h-screen'>

            <div className='fixed top-0 left-0 w-full h-full overflow-hidden -z-10'>
                <video autoPlay muted loop className='w-full h-full object-cover'>
                    <source src={bgVideo} type='video/mp4'/>
                </video>
            </div>

            <div className='flex flex-col gap-2 ps-10 absolute top-[40%] text-white'>
                <p>Hey, I'm Austin</p>
                <h1 className='font-3xl font-bold'>
                    <span>Front</span>
                    <span>end</span>
                    <span className='block'>Developer</span>
                </h1>
            </div>

        </section>
    )
}