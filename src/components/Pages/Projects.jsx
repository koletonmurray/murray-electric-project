import React, { useEffect, useState, useMemo } from 'react';

/*
    I used ChatGPT heavily for this page. I created the basic table structure on my own and was able 
    to figure out the async and the fetching of the data, but I did use Chat to deal with the sorting. 
    That was tricky logic and I needed help with that. The prompt I used was, here's my code for my 
    Projects page to render data of past projects into a table. I want it to be that when I click on 
    the header that it will resort the data by that column ascending. Please help me accomplish this.
*/

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    useEffect(() => {
        const getProjects = async () => {
            try {
                const result = await fetch('http://localhost:3001/projects', {
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
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
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

    function commaFormat(value) {
        return value ? new Intl.NumberFormat('en-US').format(value) : '-';
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
            <div className="max-w-4xl mx-auto my-10 sm:px-8">
                <p className="pb-6 text-left">
                    Below is a list of noteworthy projects we've undertaken. You can sort the projects by clicking on any of the column headers (Project, Year Complete, Square Footage, or Cost). Clicking a column header will toggle between ascending and descending ordering of that column.
                </p>
                <table className="text-left w-full">
                    <thead>
                        <tr className="bg-darkBlue text-white">
                            <th className={`${getHeaderClass('name')} text-left`} onClick={() => requestSort('name')}>Project</th>
                            <th className={`${getHeaderClass('year_complete')} text-center`} onClick={() => requestSort('year_complete')}>Year Complete</th>
                            <th className={`${getHeaderClass('square_footage')} text-right`} onClick={() => requestSort('square_footage')}>Square Footage</th>
                            <th className={`${getHeaderClass('cost')} text-right`} onClick={() => requestSort('cost')}>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedProjects.map((project, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : "bg-white-100"}>
                                <td className="px-4 py-3">{project.name}</td>
                                <td className="p-3 text-center">{project.year_complete}</td>
                                <td className="p-3 text-right">{commaFormat(project.square_footage)}</td>
                                <td className="px-4 text-right">{moneyFormat(project.cost)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
