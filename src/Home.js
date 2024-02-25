import TopNav from "./TopNav";

const Home = () => {
    return ( 
        <div className="home-page w-full h-screen flex">

            <div className="main-left w-2/4 bg-white h-screen">
                <TopNav />
                <div className="mid-page w-full h-3/4 flex gap-7">
                    <div className="sidenav w-14 h-full flex flex-col gap-20 justify-center items-center">
                        <div className="social text-gray-700 text-sm px-7 w-36 -rotate-90">Instagram</div>
                        <div className="social text-gray-700 w-36 text-sm px-8 -rotate-90">Twitter</div>
                        <div className="social text-gray-700 w-36 text-sm px-8 -rotate-90">Facebook</div>
                    </div>

                    <div className="main-body w-3/4 h-full flex flex-col gap-10 justify-center">
                        <h1 className="text-head text-pink-700 text-5xl font-bold leading-tight">Cakes? <br />We have got you covered</h1>

                        <p className="info-text text-sm">Check out our variety of cakes. You can customize your cake to your taste. Don't worry if u don't have any idea, you can choose from hundreds of templates in our cake gallery to get started.</p>

                        <button className="book-btn w-32 h-10 bg-pink-700 text-white font-semibold text-sm">Book us now</button>
                    </div>
                </div>
            </div>

            <div className="main-right">
                <img src="https://img.freepik.com/premium-photo/chocolate-cake-close-up-background-celebration-chocolate-dessert-generative-ai_47243-2084.jpg?size=626&ext=jpg&ga=GA1.1.1938564188.1691954744&semt=sph" alt="" className="cake-pic w-full h-full object-contain" />
            </div>
        </div>
     );
}
 
export default Home;