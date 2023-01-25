import profileImage from '../../assets/images/placeholder-profile.png'

function Home() {
    return (
        <div className="lg:mx-[100px] sm:mx-[40px] mx-[20px] sm:pt-[100px] pt-[60px]">
            <h1 className="text-[#E4CAA5] lg:pb-[50px] sm:pb-[40px] pb-[20px] lg:text-[70px] sm:text-[55px] text-[30px] leading-tight border-b-4 border-[#C83649]">
                Hi, I'm <span className="text-[#C83649]">Mony</span>. <br />
                Let's build something together.
            </h1>
            <section className="flex sm:my-[40px] lg:mx-[60px] flex-col sm:flex-row">
                <img alt="placeholder-profile" src={profileImage} className="xl:h-[300px] xl:w-[300px] sm:h-[250px] sm:w-[250px] h-auto w-auto sm:m-0 m-[20px]" />
                <p className="lg:ml-[60px] sm:ml-[40px] my-auto text-[#E4CAA5] sm:text-[20px] xl:text-[30px] text-center">
                    I am a <span className="text-[#C83649]">full stack web developer</span> based in Southern California.
                    I have strong passion in coding and design and have always been interested in technology.
                    I truly enjoy the process of designing and building websites, so let’s build something together!
                </p>
            </section>
        </div>
    )
}

export default Home;