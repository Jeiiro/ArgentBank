import BgImgHome from '../../assets/bank-tree.webp';

function Hero () {
    return (
        <div className="h-[400px] relative ">
            <img className='h-full w-full object-cover object-[0%_33%] ' src={BgImgHome} alt="Argent Bank" />
            <section className="absolute top-[50px] right-[50px] m-8 w-[364px] bg-white p-8 text-left">
                <p className="font-bold text-2xl m-0">No fees.</p>
                <p className="font-bold text-2xl m-0 ">No minimum deposit.</p>
                <p className="font-bold text-2xl m-0 ">High interest rates.</p>
                <p className="mt-[20px] text-xl ">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
}

export default Hero;
