# React Next.js Tester

Project to test new candidates with basic app requirements for a Next.js job.

## Frontend Stack

- Next.js
- React
- Tailwind CSS
- shadcn/ui (Radix)

## Instructions

Finish building out a simple company list for this customer-facing application.

This exercise should take 30 minutes to 1 hour to complete, but you may take longer if needed.

### Setup & Submission

1. Fork and clone this repo
1. Run `npm install`
1. Run `npm run dev` to serve the project locally
1. Open `http://localhost:3000` in your browser
1. Implement the requirements below
1. Commit the changes to your fork and provide the link to management (please don't do a PR to the original repo)

### Requirements

1. The home page should display a table of companies
   - Use the table component from shadcn [here](https://ui.shadcn.com/docs/components/table) or any other component (whether custom or from shadcn)
   - It doesn't have to be an actual table, you can use divs instead if you prefer
   - The table component is already installed into the project; skip to the **Usage** section in the [docs](https://ui.shadcn.com/docs/components/table)
   - No special/specific styling is required except for the table's cumulative footer (see below)
1. The companies should be fetched only once when the page loads; use an HTTP GET via `fetch()`
   - Create a new hook in `/lib` called `useCompanies()` that encapsulates this operation
   - Use a `useState()` hook to hold the fetched data (should be properly typed)
   - Create a type or interface for the fetched data
   - Display an `alert()` if any errors
   - The list of companies can be retrieved from the following URL: `https://venefish.enesien.com/api/companies`
1. The footer of the table should display totals for certain data points
   - Display cumulative totals for `employees` and `revenue`
   - Values in the footer should match the column location from the table's body
   - The footer should have a slightly darker background than the table
   - The text in the footer should be capitalized and slightly bolded

### Other Notes

- You are free to choose what data points are displayed and how it is styled/positioned, but it should be easy to read as a <ins>customer-facing</ins> application.
- We value original solutions. While you can use any resources for reference, the implementation should reflect your own understanding and coding style.
- Remember that Next.js offers both client-side and server-side capabilities. Think about where certain operations might be best performed.