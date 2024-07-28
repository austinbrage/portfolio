import fakeResume from '/fake_resume.png'
import { FaDownload } from "react-icons/fa"

export function HomePage() {

    return(
        <section id="home" className='min-h-screen'>
            <div className='flex flex-col gap-2 ps-10 absolute top-[30%] text-white'>
                <h1 className='text-[5.2rem] leading-[5rem] tracking-widest font-bold font-poetsen'>
                    <span className='text-slate-400'>Web </span>
                    <span>Developer</span>
                </h1>
                <p className='mt-2 tracking-wide text-xl'>
                    Hey, I'm Austin 👋🏻 a web developer based in Buenos Aires
                </p>
                <p className='mt-0 mb-3 italic tracking-wider text-xl'>
                    Specialized in the react and node ecosystem
                </p>
                <div className='flex items-center justify-start gap-2 w-full'>
                    <a href="https://brage.pages.dev" target="_blank" className="flex items-center bg-indigo-600 text-white w-max px-6 py-3 font-semibold text-md leading-5 rounded-lg gap-3 border-none cursor-pointer transition ease-in-out duration-600 hover:scale-95"> 
                        Get my 
                        <span className='italic font-bold'>
                            SOFTWARE
                        </span>
                    </a>
                    <a href="https://github.com/austinbrage" target="_blank" className="flex items-center bg-gray-800 text-white w-56 px-5 py-2 font-bold text-sm leading-5 rounded-lg gap-3 border-none cursor-pointer transition ease-in-out duration-600 hover:scale-95"> 
                        <svg className='h-8' fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <rect fill="none" height="24" width="24"></rect> <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path> </g></svg>
                        See me on Github 
                    </a>
                </div>
                <div className='mt-40 font-bold text-lg tracking-wider font-kanit text-[#B2ADAD]'>
                    <p>Currently available to work</p>
                </div>
            </div>
            <div className='absolute top-32 right-20 w-96 rounded-md group bg-gray-800'>
                <img 
                    className='opacity-90 rounded-md group-hover:opacity-40' 
                    src={fakeResume} 
                    alt="resume" 
                />
                <a 
                    href='/fake_resume.png'
                    download="austinbrage.png"
                    className='flex items-center justify-center gap-2 absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 w-36 py-2 px-5 rounded-xl text-center font-kanit tracking-wider border-2 text-white bg-gray-800 border-gray-500 cursor-pointer opacity-0 group-hover:opacity-100'
                >
                    <p>Download</p>
                    <span>
                        <FaDownload/>
                    </span>
                </a>
            </div>
        </section>
    )
}