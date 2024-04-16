import React, { useEffect, useState, useMemo } from 'react';

/*
    I used ChatGPT heavily for this page. I created the basic table structure on my own and was able 
    to figure out the async and the fetching of the data, but I did use Chat to deal with the sorting. 
    That was tricky logic and I needed help with that. The prompt I used was, here's my code for my 
    Projects page to render data of past projects into a table. I want it to be that when I click on 
    the header that it will resort the data by that column ascending. Please help me accomplish this.
*/

export default function PastProjects() {
    const [projects, setProjects] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    useEffect(() => {
        const getProjects = async () => {
            try {
                const result = await fetch('http://localhost:3001/past-projects', {
                    method: 'GET',
                });
                const jsonResult = await result.json();
                setProjects(jsonResult);
            } catch (error) {
                console.log(error);
            }
        };

        getProjects();
    }, []);

    const sortedProjects = useMemo(() => {
        let sortableItems = [...projects];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                let valueA = a[sortConfig.key];
                let valueB = b[sortConfig.key];

                // Special handling for numeric values stored as strings
                if (sortConfig.key === 'contracted_amount') {
                    valueA = parseInt(valueA, 10);
                    valueB = parseInt(valueB, 10);
                }

                if (valueA < valueB) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (valueA > valueB) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [projects, sortConfig]);


    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    function moneyFormat(value) {
        return value ? new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value) : '-';
    }

    const getHeaderClass = (key) => {
        const baseClasses = "w-1/4 p-4 cursor-pointer hover:text-yellow transition-all duration-300 ease-in-out";
        const activeClasses = "underline decoration-2 underline-offset-8 hover:underline-offset-4 text-yellow";
        const inactiveClasses = "hover:underline hover:decoration-2 hover:underline-offset-4";
        return `${baseClasses} ${sortConfig.key === key ? activeClasses : inactiveClasses}`;
    };

    return (
        <>
            <h1>Noteworthy Projects</h1>
            <div className="max-w-4xl mx-auto my-10 px-2 sm:px-8">
                <p className="pb-6 text-left px-6 sm:px-0">
                    Below is a list of noteworthy projects we've undertaken over our decades of electrical contracting. You can sort the projects
                    by clicking on any of the column headers (Year Complete, Project, Contracted Amount, or Contractor). <br/><br/><b>
                    * Clicking a column header will toggle between ascending and descending ordering of that column.</b>
                </p>
                <table className="text-left w-full">
                    <thead>
                        <tr className="bg-darkBlue text-white">
                            <th className={`${getHeaderClass('year_complete')} text-left`} onClick={() => requestSort('year_complete')}>Year Complete</th>
                            <th className={`${getHeaderClass('project_name')} text-left`} onClick={() => requestSort('project_name')}>Project</th>
                            <th className={`${getHeaderClass('contracted_amount')} text-right`} onClick={() => requestSort('contracted_amount')}>Contracted Amount</th>
                            <th className={`${getHeaderClass('contractor')} text-right`} onClick={() => requestSort('contractor')}>Contractor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedProjects.map((project, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-200 py-2" : "bg-white-100 py-2"}>
                                <td data-label="Year Complete">{project.year_complete}</td>
                                <td data-label="Project">{project.project_name}</td>
                                <td data-label="Contracted Amount" className="text-right">
                                    {moneyFormat(project.contracted_amount)}
                                </td>
                                <td data-label="Contractor" className="text-right">{project.contractor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
