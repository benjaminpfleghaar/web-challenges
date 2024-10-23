import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Products() {
	const router = useRouter();
	const { data, isLoading } = useSWR(`http://localhost:3000/api/products/${router.query.id}`, fetcher);

	if (isLoading) return <h1>Loading...</h1>;
	if (!data) return null;

	if (data.status === "Product not found") return <h1>Product not found</h1>;

	return (
		<>
			<h1>All Products</h1>
			<section key={data.id}>
				<h2>{data.name}</h2>
				<p>{data.description}</p>
				<ul>
					<li>
						<strong>Price: </strong>
						{data.price} {data.currency}
					</li>
					<li>
						<strong>Category: </strong>
						{data.category}
					</li>
				</ul>
			</section>
		</>
	);
}
