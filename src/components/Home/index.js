function Home() {
    return (
        <section className="grid grid-cols-[65%_auto] grid-rows-[100%]">
            {/* <img src="./assets/images/stacking-rocks.png" alt="stacking-rocks" className="col-start-2 col-span-1 row-end-2 h-[800px] mt-[40px]" /> */}
            <div className="col-start-1 col-span-1 drop-shadow-lg">
                <h1 className="text-[#E4CAA5] ml-[100px] mt-[160px] mr-[30px] pb-[70px] text-[75px] leading-tight border-b-4 border-[#C83649]">
                    Hi I'm <span className="text-[#C83649]">Mony</span>, let's build something together
                </h1>
                <div className="flex ml-[100px] mt-[70px]">
                    <p className="ml-[50px] mr-[30px] text-[#E4CAA5] text-[20px] py-10">I am a <span className="text-[#C83649]">full stack web developer</span> based in Southern California. I have strong passion in coding and design and have always been interested in technology. I truly enjoy the process of designing and building websites, so let’s build something together!</p>
                </div>
            </div>
        </section>
    )
}

export default Home;