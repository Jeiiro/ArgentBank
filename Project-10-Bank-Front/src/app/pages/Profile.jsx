import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import HeaderProfile from "../components/HeaderProfile.jsx";
import AccountView from "../components/AccountView.jsx";

function Profile () {

    const accounts = [
        { title: "Argent Bank Checking (x8349)", amount: "$2,082.79", description: "Available Balance" },
        { title: "Argent Bank Savings (x6712)", amount: "$10,928.42", description: "Available Balance" },
        { title: "Argent Bank Credit Card (x8349)", amount: "$184.30", description: "Current Balance" },
    ];


    return (
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 bg-[#12002b]">
            <HeaderProfile />
            {accounts.map((account, index) => (
                <AccountView
                    key={index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </main>
        <Footer />
    </div>
    )
}

export default Profile;