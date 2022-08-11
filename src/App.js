import Header from './components/Header';
import Main from './components/Main';
// import Footer from './components/Footer';

import './App.css';

const App = () => {
	return (
		<>
			<Header />
			<div className='cart'>
				<Main />
			</div>
			{/* <Footer /> */}
		</>
	);
};

export default App;
