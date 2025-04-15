import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import SignIn from "../components/SignIn.jsx";


function Login () {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 bg-[#12002b]">
                <SignIn />
            </main>
            <Footer />
        </div>
    )
}

export default Login;