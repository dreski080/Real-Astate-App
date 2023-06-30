import logo from './logo.svg';
import './App.css';

import Hero from './components/Hero';
import Companies from './components/Companies';
import Guide from './components/Guide';
import Properties from './components/Properties';
import Details from './components/Details';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Hero />
			<Companies />
			<Guide />
			<Properties />
			<Details />
			<GetStarted />
			<Footer />
		</>
	);
}

export default App;
