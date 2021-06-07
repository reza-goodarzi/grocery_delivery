import Cart from "../components/Cart/Cart";
import Product from "../components/Product/Product";
import Search from "../components/Search/Search";
import Service from "../components/Service/Service";

const Home = () => {
	return (
		<>
			<Search />
			<Cart />
			<Service />
			<Product />
		</>
	);
};

export default Home;
