import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import Card from '../../components/Home/Card';
import AllScholarHeader from '../../components/AllScholarHeader/AllScholarHeader';

const ALLScholar = () => {
  const [search, setSearch] = useState('');
  const [scholarshipCategory, setScholarshipCategory] = useState('');
  const [subjectCategory, setSubjectCategory] = useState('');
  const [country, setCountry] = useState('');

  const { data: Allscholars = [] } = useQuery({
    queryKey: ['scholars'],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/scholar`
      );
      return result.data;
    },
  });

  // 🔍 SEARCH + FILTER LOGIC
  const filteredScholars = Allscholars.filter((item) => {
    const searchMatch =
      item.scholarshipName?.toLowerCase().includes(search.toLowerCase()) ||
      item.universityName?.toLowerCase().includes(search.toLowerCase()) ||
      item.degree?.toLowerCase().includes(search.toLowerCase());

    const scholarshipMatch = scholarshipCategory
      ? item.scholarshipCategory === scholarshipCategory
      : true;

    const subjectMatch = subjectCategory
      ? item.subjectCategory === subjectCategory
      : true;

    const countryMatch = country ? item.universityCountry === country : true;

    return (
      searchMatch &&
      scholarshipMatch &&
      subjectMatch &&
      countryMatch
    );
  });

  return (
    <div>
      <AllScholarHeader />

      {/* 🔍 Search & Filter Section */}
      <div className="max-w-10/12 mx-auto my-8 bg-gray-50 p-6 rounded-xl">
        <div className="grid gap-4 md:grid-cols-4">

          {/* Search */}
          <input
            type="text"
            placeholder="Search by scholarship, university or degree"
            className="border rounded-lg px-4 py-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Scholarship Category */}
          <select
            className="border rounded-lg px-4 py-2"
            value={scholarshipCategory}
            onChange={(e) => setScholarshipCategory(e.target.value)}
          >
            <option value="">All Scholarship Types</option>
            <option value="Merit-based">Merit-based</option>
            <option value="Need-based">Need-based</option>
            <option value="Partial">Partial</option>
          </select>

          {/* Subject Category */}
          <select
            className="border rounded-lg px-4 py-2"
            value={subjectCategory}
            onChange={(e) => setSubjectCategory(e.target.value)}
          >
            <option value="">All Subjects</option>
            <option value="Engineering">Engineering</option>
            <option value="Business">Business</option>
            <option value="Computer Science">Computer Science</option>
          </select>

          {/* Country */}
          <select
            className="border rounded-lg px-4 py-2"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">All Countries</option>
            <option value="USA">USA</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
      </div>

      {/* 📚 Scholarships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-10/12 mx-auto gap-6">
        {filteredScholars.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No scholarships found.
          </p>
        ) : (
          filteredScholars.map((Allscholar) => (
            <Card
              key={Allscholar._id}
              Allscholar={Allscholar}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ALLScholar;
