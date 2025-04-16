import PropTypes from "prop-types";

function AccountView({ title, amount, description }) {
    return (
        <section className="flex flex-col md:flex-row justify-between items-center border border-black bg-white w-[90%] md:w-4/5 mx-auto p-4 md:p-6 box-border text-left mb-6 md:mb-8">
            <div className="w-full">
                <h3 className="m-0 p-0 text-base">{title}</h3>
                <p className="m-0 text-xl md:text-[2.5rem] font-bold">{amount}</p>
                <p className="m-0">{description}</p>
            </div>
            <div className="w-full md:w-auto mt-4 md:mt-0">
                <button className="block w-full md:w-[200px] p-2 text-base md:text-[1.1rem] font-bold mt-2 md:mt-4 border border-[#00bc77] bg-[#00bc77] text-white">View transactions</button>
            </div>
        </section>
    );
}

AccountView.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default AccountView;