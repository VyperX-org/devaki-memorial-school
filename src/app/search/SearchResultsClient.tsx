'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, AlertCircle, Loader2, FileText, Bell } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { SearchResult } from '@/app/api/search/route';

type SearchResultsClientProps = {
  initialQuery: string;
};

export default function SearchResultsClient({ initialQuery }: SearchResultsClientProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    setQuery(initialQuery);

    if (initialQuery.trim().length >= 2) {
      void performSearch(initialQuery, false);
      return;
    }

    setResults([]);
    setError('');
    setSearched(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery]);

  const performSearch = async (searchQuery: string, updateUrl = true) => {
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery || trimmedQuery.length < 2) {
      setError('Please enter at least 2 characters to search');
      setResults([]);
      setSearched(false);
      return;
    }

    setLoading(true);
    setError('');
    setSearched(true);

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(trimmedQuery)}&limit=50`);
      const data = await response.json();

      if (!response.ok) {
        setError('Search failed. Please try again.');
        setResults([]);
      } else {
        setResults(data.results || []);
        if (!data.results || data.results.length === 0) {
          setError(`No results found for "${trimmedQuery}"`);
        }
      }

      if (updateUrl) {
        router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
      }
    } catch (err) {
      setError('An error occurred while searching. Please try again.');
      setResults([]);
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void performSearch(query);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 space-y-6">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-headline font-bold">Search Results</h1>
            <p className="text-muted-foreground text-lg">Find pages, notices, and content across the website</p>
          </div>

          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search pages, notices, and content..."
                className="pl-10 h-12 text-base"
                autoFocus
              />
            </div>
            <Button type="submit" disabled={loading} className="px-8 h-12">
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </>
              )}
            </Button>
          </form>
        </div>

        {error && (
          <Card className="border-destructive/50 bg-destructive/10 mb-8">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-destructive">{error}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {searched && results.length > 0 && (
          <div className="mb-6 text-sm text-muted-foreground">
            Found <span className="font-semibold text-foreground">{results.length}</span> result
            {results.length !== 1 ? 's' : ''} for <span className="font-semibold text-foreground">"{query}"</span>
          </div>
        )}

        <div className="space-y-3">
          {results.map((result) => (
            <Link key={`${result.type}-${result.id || result.href}`} href={result.href}>
              <Card className="hover:border-primary/50 hover:bg-muted/30 transition-all cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {result.type === 'notice' ? (
                        <Bell className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      ) : (
                        <FileText className="h-5 w-5 text-slate-500 flex-shrink-0" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-semibold text-lg break-words">{result.name || result.title}</h3>
                        {result.type === 'notice' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                            Notice
                          </span>
                        )}
                        {result.category && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300 capitalize">
                            {result.category}
                          </span>
                        )}
                      </div>

                      {result.excerpt && <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{result.excerpt}</p>}

                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{result.type === 'notice' ? 'Notice' : 'Page'}</span>
                        {result.date && <span>{result.date}</span>}
                        {result.href && <code className="bg-muted px-2 py-1 rounded text-xs">{result.href}</code>}
                      </div>
                    </div>

                    <div className="text-xl text-muted-foreground flex-shrink-0">→</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {searched && results.length === 0 && !loading && (
          <Card>
            <CardContent className="pt-12 pb-12 text-center">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground mb-4">No results found. Try a different search term.</p>
              <Button asChild variant="outline">
                <Link href="/">Back to Home</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {!searched && (
          <Card>
            <CardContent className="pt-12 pb-12 text-center">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">Use the search box to find pages, notices, and content across the website.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}