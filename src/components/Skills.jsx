import React from 'react'
import Skill from '../assets/myskills.png'
const Skills = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap w-full">
                        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-blue-500 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-slate-300 border inline-flex items-center justify-center text-white relative z-10">
                                    <img className='w-8 h-8' src="https://www.svgrepo.com/show/303205/html-5-logo.svg" alt="html-logo" />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-md text-gray-900 mb-1 tracking-wider">HTML 5</h2>
                                    <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-blue-500 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-slate-300 border inline-flex items-center justify-center text-white relative z-10">
                                    <img className='w-8 h-8' src="https://www.svgrepo.com/show/303481/css-3-logo.svg" alt="css-logo" />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-md text-gray-900 mb-1 tracking-wider">CSS 3</h2>
                                    <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-blue-500 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-slate-300 border inline-flex items-center justify-center text-white relative z-10">

                                    <img className='w-8 h-8' src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" alt="tailwind-logo" />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-md text-gray-900 mb-1 tracking-wider">Tailwind CSS</h2>
                                    <p className="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-blue-500 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-slate-300 border inline-flex items-center justify-center text-white relative z-10">
                                    <img className='w-10 h-10 rounded-full' src="https://www.svgrepo.com/show/303206/javascript-logo.svg" alt="js-logo" />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-md text-gray-900 mb-1 tracking-wider">JavaScript</h2>
                                    <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-slate-300 border inline-flex items-center justify-center text-white relative z-10">
                                    <img className='w-8 h-8' src="https://www.svgrepo.com/show/354259/react.svg" alt="reactjs-logo" />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-md text-gray-900 mb-1 tracking-wider">React JS</h2>
                                    <p className="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
                                </div>
                            </div>
                        </div>
                        <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={Skill} alt="step" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills