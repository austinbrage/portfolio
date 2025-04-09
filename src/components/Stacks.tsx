import classNames from 'classnames'
import { useState } from 'react'
import { techStacks, type TechStacks } from '../data/stacks'
import stack from '../icons/general/stack.svg'

export function Stacks() {

    const [currentStack, setCurrentStack] = useState<TechStacks>('frontend')

    const btnClasses = (stack: string) => {
        return classNames('tracking-wider font-bold font-inter text-lg text-white border-b-2 duration-200', {
            'border-white': currentStack === stack,
            'border-transparent': currentStack !== stack,
        })
    }

    return (
        <div className='w-[510px] h-[356px] scale-90'>
            <div className='h-[80px] bg-[#1E293B] flex items-center justify-between'>
                <div className='w-[80px] h-[80px] bg-[#625D5D] flex items-center justify-center'>
                    <img src={stack} alt="stack logo" />
                </div>
                <div className='flex items-center justify-around min-w-[435px]'>
                    <button 
                        type='button' 
                        onClick={() => setCurrentStack('frontend')}
                        className={btnClasses('frontend')}
                    >
                        frontend
                    </button>
                    <button 
                        type='button' 
                        onClick={() => setCurrentStack('backend')}
                        className={btnClasses('backend')}
                    >
                        backend
                    </button>
                    <button 
                        type='button' 
                        onClick={() => setCurrentStack('devops')}
                        className={btnClasses('devops')}
                    >
                        devops
                    </button>
                </div>
            </div>
            <div className='h-[276px] bg-[rgba(30,41,59,0.5)] grid grid-cols-3 place-content-around place-items-center'>
                {techStacks[currentStack].map(elem => (
                    <div 
                        key={elem.name}
                        className='flex gap-3 flex-col items-center justify-center'
                    >
                        <img 
                            src={elem.logo} 
                            alt={`${elem.name} logo`} 
                        />
                        <p className='font-semibold text-lg text-white'>
                            {elem.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}