import Basket from "../components/Basket/Basket";
import Product from "../components/Product/Product";
import Search from "../components/Search/Search";
import Service from "../components/Service/Service";

const Home = () => {
	return (
		<>
			<Search />
			<Basket />
			<Service />
			<Product />
		</>
	);
};

export default Home;
