"use client";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Products() {
	const { data, isLoading } = useSWR("/api", fetcher);

	if (isLoading) return <h1>Loading...</h1>;
	if (!data) return null;

	return (
		<>
			<h1>All Products</h1>
			{data.map((product) => (
				<section key={product.id}>
					<h2>{product.name}</h2>
					<p>{product.description}</p>
					<ul>
						<li>
							<strong>Price: </strong>
							{product.price} {product.currency}
						</li>
						<li>
							<strong>Category: </strong>
							{product.category}
						</li>
					</ul>
				</section>
			))}
		</>
	);
}
