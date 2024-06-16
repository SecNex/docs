export const Home = () => {
    return (
        <div className="flex flex-col space-y-16 mx-auto max-w-[90rem] pt-[80px] text-sm px-10">
            <div className="flex flex-col w-full justify-center">
                <div className="flex flex-col space-y-20 py-2 w-full">
                    <div className="flex justify-center">
                        <div className="flex flex-row space-x-2 justify-center items-center rounded-full border border-zinc-800 p-1 px-4 text-xs">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8"
                                height="8"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="icon icon-tabler icons-tabler-filled icon-tabler-point"
                            >
                                <path stroke="none" d="M0 0div4v24H0z" fill="none" />
                                <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                            </svg>
                            <span>The beginning of a new era will start soon.</span>
                        </div>
                    </div>
                    <div className="flex text-[50px] lg:text-[70px] font-black bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-500 text-center py-6 justify-center normalLine">
                        Security Suite
                    </div>
                    <div className="flex flex-row space-x-5 justify-center font-medium text-zinc-100">
                        <a
                            href="/suite"
                            className="p-2 px-5 bg-zinc-50 rounded-md text-zinc-900"
                        >
                            Documentation
                        </a>
                        <a
                            href="https://secnex.io"
                            className="p-2 px-5 bg-transparent border-zinc-700 border rounded-md"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex w-full pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
                    <div className="flex flex-col space-y-5 min-h-full bg-transparent border border-zinc-800 p-5 rounded-md">
                        <div className="flex flex-col space-y-3 p-2">
                            <div className="text-lg text-zinc-100">AI-Driven IT Security</div>
                            <div className="text-zinc-100 text-sm">
                                The Security Suite harnesses cutting-edge AI and IT security tools to transform system management, making administration simpler, faster, and significantly safer, all while proactively tackling IT security challenges.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5 min-h-full bg-transparent border border-zinc-800 p-5 rounded-md">
                        <div className="flex flex-col space-y-3 p-2">
                            <div className="text-lg text-zinc-100">Streamline and Secure Your Systems</div>
                            <div className="text-zinc-100 text-sm">
                                Our AI-powered Security Suite simplifies administration and enhances efficiency, ensuring robust IT security.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5 min-h-full bg-transparent border border-zinc-800 p-5 rounded-md">
                        <div className="flex flex-col space-y-3 p-2">
                            <div className="text-lg text-zinc-100">Proactive IT Security Management</div>
                            <div className="text-zinc-100 text-sm">
                                Leverage cutting-edge AI technologies to address IT challenges swiftly and keep your systems safer than ever.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-10">
                <div className="pb-10">
                    <div className="bold text-[25px] lg:text-[35spx] bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-500 text-center py-3">
                        The rest of the site will be available soon. Stay tuned!
                    </div>
                </div>
            </div>
        </div>
    )
}

