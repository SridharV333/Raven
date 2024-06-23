import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function Header() {
	return (
		<div className='w-full p-4 flex justify-left'>
			<button className='btn glass text-4xl font-bold font-sans-serif text-orange-500'>🐦 RAVEN</button>
		</div>
	);
}

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='h-screen flex flex-col overflow-hidden'>
			<Header />
			<div className='p-4 h-screen flex items-center justify-center'>

				<Routes>
					<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
					<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
					<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
				</Routes>
				<Toaster />
			</div>
		</div>
	);
}

export default App;