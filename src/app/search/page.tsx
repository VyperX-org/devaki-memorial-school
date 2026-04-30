import SearchResultsClient from './SearchResultsClient';

type SearchPageProps = {
  searchParams?: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedParams = await searchParams;
  const initialQuery = typeof resolvedParams?.q === 'string' ? resolvedParams.q : '';

  return <SearchResultsClient initialQuery={initialQuery} />;
}
