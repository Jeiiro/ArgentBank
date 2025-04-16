import BgImgHome from '../../assets/bank-tree.webp';

function Hero () {
    return (
        <div className="h-[300px] md:h-[400px] relative">
            <img className='h-full w-full object-cover' src={BgImgHome} alt="Argent Bank" />
            <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[300px] bg-white p-6 md:p-8 text-left">
                <p className="font-bold text-base md:text-xl lg:text-2xl m-0">No fees.</p>
                <p className="font-bold text-base md:text-xl lg:text-2xl m-0">No minimum deposit.</p>
                <p className="font-bold text-base md:text-xl lg:text-2xl m-0">High interest rates.</p>
                <p className="mt-4 md:mt-5 text-sm md:text-base text-[#2c3e50]">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
}

export default Hero;
