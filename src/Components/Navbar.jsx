import React from 'react'

const Navbar = ({ view, setView }) => {
    return (
        <nav className="flex shadow-md mx-auto justify-center max-w-md space-x-4 mt-4 py-2 px-2 bg-blue-200 rounded-xl">
            {view === 'home' ?
                <button
                    className="bg-blue-500 shadow-md text-white px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white"
                    onClick={() => setView('home')}
                >
                    Home
                </button> : (
                    <button
                        className="bg-white shadow-md text-black px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white"
                        onClick={() => setView('home')}
                    >
                        Home
                    </button>
                )}

            {view === 'projects' ?
                <button
                    className="bg-blue-500 shadow-md text-white px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white"
                    onClick={() => setView('projects')}
                >
                    Projects
                </button> : (
                    <button
                        className="bg-white shadow-md text-black px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white"
                        onClick={() => setView('projects')}
                    >
                        Projects
                    </button>
                )}

            {view === 'contact' ?
                <button
                    className="bg-blue-500 shadow-md text-white px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white"
                    onClick={() => setView('contact')}
                >
                    Contact
                </button> : (
                    <button
                        className="bg-white shadow-md text-black px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white"
                        onClick={() => setView('contact')}
                    >
                        Contact
                    </button>
                )}

        </nav>
    )
}

export default Navbar