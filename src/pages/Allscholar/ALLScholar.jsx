import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import Card from '../../components/Home/Card';
import AllScholarHeader from '../../components/AllScholarHeader/AllScholarHeader';

const ALLScholar = () => {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [order, setOrder] = useState('asc');

  const { data: scholars = [], isLoading } = useQuery({
    queryKey: ['scholars', search, country, category, sort, order],
    queryFn: async () => {
      const params = new URLSearchParams({
        search,
        country,
        category,
        sort,
        order
      });

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/filter-?${params}`
      );
      return res.data;
    }
  });

  return (
    <div>
      <AllScholarHeader />

      {/* Filters */}
      <div className="max-w-6xl mx-auto my-8 grid gap-4 md:grid-cols-5">
        <input
          type="text"
          placeholder="Search scholarship, university or degree"
          className="border rounded px-4 py-2"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded px-4 py-2"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Merit-based">Merit-based</option>
          <option value="Need-based">Need-based</option>
          <option value="Partial">Partial</option>
        </select>

        <select
          className="border rounded px-4 py-2"
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">All Countries</option>
          <option value="USA">USA</option>
          <option value="United Kingdom">UK</option>
          <option value="Canada">Canada</option>
        </select>

        <select
          className="border rounded px-4 py-2"
          onChange={(e) => {
            const [s, o] = e.target.value.split('-');
            setSort(s);
            setOrder(o);
          }}
        >
          <option value="">No Sort</option>
          <option value="fees-asc">Fees ↑</option>
          <option value="fees-desc">Fees ↓</option>
          <option value="date-desc">Newest</option>
          <option value="date-asc">Oldest</option>
        </select>
      </div>

      {/* Data */}
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid max-w-6xl mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {scholars.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No scholarships found
            </p>
          ) : (
            scholars.map((item) => (
              <Card key={item._id} Allscholar={item} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ALLScholar;
