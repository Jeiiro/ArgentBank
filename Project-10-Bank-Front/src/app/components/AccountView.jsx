import PropTypes from "prop-types";

function AccountView({ title, amount, description }) {
    return (
        <section className="flex flex-row justify-between items-center border border-black bg-white w-4/5 mx-auto p-6 box-border text-left mb-8">
            <div className="flex-1 w-full">
                <h3 className="m-0 p-0 text-base">{title}</h3>
                <p className="m-0 text-[2.5rem] font-bold">{amount}</p>
                <p className="m-0">{description}</p>
            </div>
            <div className="flex-0">
                <button className="block w-[200px] p-2 text-[1.1rem] font-bold mt-4 border border-[#00bc77] bg-[#00bc77] text-white">View transactions</button>
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