import { FaCopy } from "react-icons/fa"
import bgVideo from '/background-video.mp4'
import { type ReactNode } from 'react'

export function Layout({ children }: { children: ReactNode }) {

    const handleClipboard = (email: string) => {
        navigator.clipboard.writeText(email)
    }

    return(
        <div className='min-h-screen'>

            <header className='fixed w-full z-50'>
                <div className='absolute top-8 ms-5 px-5 py-3 italic tracking-widest font-semibold rounded-lg w-max text-white bg-slate-800'>
                    <div className='flex items-center justify-center gap-2'>
                        <p>agustinbrage19@gmail.com</p>
                        <span 
                            onClick={() => handleClipboard('agustinbrage19@gmail.com')}
                            className='p-2 rounded-md text-sm opacity-90 cursor-pointer hover:bg-slate-200 hover:text-slate-800'
                        >
                            <FaCopy/>
                        </span>
                    </div>
                </div>

                <nav className='flex align-center justify-end pt-8 pe-10 w-full max-w-full'>
                    <div className='flex align-center justify-between w-1/4'>
                        <p className='text-2xl tracking-wider font-bold transition-all duration-500 scale-100 text-slate-200 hover:tracking-widest'>
                            <a href="#home">
                                Home
                            </a>
                        </p>               
                        <p className='text-2xl tracking-wider font-bold transition-all duration-500 scale-100 text-slate-200 hover:tracking-widest'>
                            <a href="#projects">
                                Projects
                            </a>
                        </p>               
                        <p className='text-2xl tracking-wider font-bold transition-all duration-500 scale-100 text-slate-200 hover:tracking-widest'>
                            <a href="#about">
                                About
                            </a>
                        </p>    
                    </div>
                </nav>
            </header>
            
            <div className='fixed top-0 left-0 w-full h-full overflow-hidden -z-10 bg-slate-700'>
                <video autoPlay muted loop className='w-full h-full object-cover'>
                    <source src={bgVideo} type='video/mp4'/>
                </video>
            </div>

            <main>
                {children}
            </main>
                
        </div>
    )
}