import logo from './logo.svg';
import './App.css';

import Hero from './components/Hero';
import Companies from './components/Companies';
import Guide from './components/Guide';
import Properties from './components/Properties';
import Details from './components/Details';

function App() {
	return (
		<>
			<Hero />
			<Companies />
			<Guide />
			<Properties />
			<Details />
		</>
	);
}

export default App;
