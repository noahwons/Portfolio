import React from 'react'
import noahImg from '../assets/noah.jpeg'


const Home = ({ setView }) => {
    return (
        <div className="mt-6">
            <section className="flex flex-col-reverse lg:flex-row items-center max-w-6xl mx-auto py-16 px-6 lg:px-0">
                <div className="w-full lg:w-1/2 space-y-6">
                    <h1 className="text-4xl lg:text-5xl font-extrabold">
                        Hi, I’m <span className="text-blue-500">Noah Wons</span>
                    </h1>
                    <p className="text-lg lg:text-xl">
                        I’m a software engineering student at Iowa State University building
                        🔧 embedded systems, 🚀 full-stack apps, and everything in between.
                    </p>
                    <div className="flex space-x-4">
                        <button
                            type="button"
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 transition"
                            onClick={() => setView('projects')}
                        >
                            View Projects
                        </button>
                        <button
                            type="button"
                            className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition"
                            onClick={() => setView('contact')}
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
                    <img
                        src={noahImg}
                        alt="Noah Wons"
                        className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-xl"
                    />
                </div>
            </section>

            <section className="bg-white py-12 mt-8">
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-0 text-center">
                    <div>
                        <h3 className="text-3xl font-bold">Python</h3>
                        <p className="text-gray-600">4+ years</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">React</h3>
                        <p className="text-gray-600">2+ years</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">Embedded</h3>
                        <p className="text-gray-600">Raspberry Pi, Tiva C</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">Git & CI/CD</h3>
                        <p className="text-gray-600">Workflow & Automation</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
