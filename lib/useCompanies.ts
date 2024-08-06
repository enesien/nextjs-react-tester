"use client";

import { useEffect, useState } from 'react';

interface Company {
  id: string;
  name: string;
  employees: number;
  revenue: number;
}

const useCompanies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://venefish.enesien.com/api/companies')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setCompanies(data))
      .catch(error => {
        setError(error.message);
        alert('Failed to fetch companies: ' + error.message);
      });
  }, []);

  return { companies, error };
};

export default useCompanies;
