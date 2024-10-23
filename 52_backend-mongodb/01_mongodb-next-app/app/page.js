"use client";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
	const { data, isLoading } = useSWR("/api", fetcher);

	if (isLoading) return <h1>Loading...</h1>;
	if (!data) return null;

	return (
		<>
			<h1>Products</h1>
			{data.map((product) => (
				<section key={product._id}>
					<h2>{product.name}</h2>
					<ul>
						<li>
							<strong>description: </strong>
							{product.description}
						</li>
						<li>
							<strong>Price: </strong>
							{product.price} {product.currency}
						</li>
					</ul>
				</section>
			))}
		</>
	);
}
