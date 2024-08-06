"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell } from '@/components/ui/table';
import useCompanies from '@/lib/useCompanies';

export default function Home() {
  const { companies } = useCompanies();

  const totalEmployees = companies.reduce((acc, company) => acc + company.employees, 0);
  const totalRevenue = companies.reduce((acc, company) => acc + company.revenue, 0);

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-tl from-blue-400 to-blue-700 text-white space-y-6">
      <div className="bg-white/10 p-4">
        <div className="container">
          <h2 className="font-ornate text-2xl font-semibold tracking-tighter">
            React Next.js Tester
          </h2>
        </div>
      </div>
      <div className="container">
        <Card>
          <CardHeader className="px-7">
            <CardTitle>Company List</CardTitle>
            <CardDescription>List of companies fetched from the API</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <Table className="min-w-full divide-y divide-gray-200">
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Employees</TableHead>
                    <TableHead>Revenue</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="bg-white divide-y divide-gray-200">
                  {companies.map((company) => (
                    <TableRow key={company.id}>
                      <TableCell>{company.name}</TableCell>
                      <TableCell>{company.employees}</TableCell>
                      <TableCell>{company.revenue}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter className="bg-gray-100">
                  <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell>{totalEmployees}</TableCell>
                    <TableCell>{totalRevenue}</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
