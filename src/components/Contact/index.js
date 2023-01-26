function Contact() {
    return (
        <div className="lg:mx-[100px] sm:mx-[40px] mx-[20px] sm:pt-[100px] pt-[60px]">
            <h2 className="text-[#E4CAA5] md:text-[60px] text-[40px] md:pb-[30px] pb-[10px] lg:mr-[70%] md:mr-[60%] mr-[40%] border-b-4 border-[#C83649]">Contact</h2>
            <div className="flex justify-center pt-[40px]">
                <form
                    className="bg-[#3C3A40] drop-shadow-xl rounded-lg lg:w-[40%] sm:w-[70%] w-[90%] sm:px-[50px] p-[20px] flex flex-col justify center"
                >
                    <div className="pb-[20px]">
                        <label className="block mb-2 text-[20px] font-medium text-[#F5F5F5]">Name</label>
                        <input type="text"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#9EACB7] focus:border-[#9EACB7]"
                            placeholder="First Last"
                        />
                    </div>
                    <div className="pb-[20px]">
                        <label className="block mb-2 text-[20px] font-medium text-[#F5F5F5]">Email</label>
                        <input type="email"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#9EACB7] focus:border-[#9EACB7]"
                            placeholder="email@email.com"
                        />
                    </div>
                    <div className="pb-[20px]">
                        <label className="block mb-2 text-[20px] font-medium text-[#F5F5F5]">Message</label>
                        <textarea rows="6"
                            className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#9EACB7] focus:border-[#9EACB7]"
                            placeholder="Leave a message...">
                        </textarea>
                    </div>
                    <button type="submit"
                        className="text-[#F5F5F5] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-[20px] rounded-lg py-2 w-[140px] m-auto">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;