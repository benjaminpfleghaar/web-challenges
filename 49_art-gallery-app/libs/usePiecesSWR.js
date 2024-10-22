import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function usePiecesSWR() {
	const { data, error, isLoading } = useSWR(`https://example-apis.vercel.app/api/art`, fetcher);

	return {
		pieces: data,
		isError: error,
		isLoading,
	};
}
