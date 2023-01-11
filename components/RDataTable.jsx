"use client"

import React, {useState, useEffect,useMemo} from 'react'
import DataTable from 'react-data-table-component';
import axios from "axios";
import LoadingIcon from './LoadingIcon';
import Link from 'next/link';
import { HiExternalLink } from 'react-icons/hi';
import FilterTextInput from './FilterTextInput';


const fetcher = url => axios.get(url).then(res => res.data.entries)

export default function RDataTable() {
    
    const [TData,setTData] = useState(null);
    const [filterText,setFilterText] = useState('')
    const [resetPaginationToggle,setResetPaginationToggle] = useState(false)

    const _columns = [
        {
            name: 'Name',
            selector: row => row.API,
            sortable: true,
        },
        
        {
            name: 'Authentication',
            selector: row => row.Auth,
        },
        {
            name: 'HTTPS',
            selector: row => row.HTTPS,
            sortable: true,
            cell: row => row.HTTPS ? "Yes" : "No"
        },
        {
            name: 'Cors',
            selector: row => row.Cors,
        },
        {
            name: 'Link',
            selector: row => row.Link,
            cell: row => <Link className=' text-cyan-600' href={row.Link}><HiExternalLink/></Link>
        },
        {
            name: 'Category',
            selector: row => row.Category,
            sortable: true,
        },
    ];

    const filterdEntries = TData?.entries.filter(
        row => row.API && row.API.toLowerCase().includes(filterText.toLowerCase()),
    );

    const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
            
			<FilterTextInput onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

    useEffect(()=>{
        fetch("https://api.publicapis.org/entries")
        .then(res => res.json())
        .then(data => setTData(data))
    })

    if(!TData) { return <LoadingIcon/>}

    if(TData) {console.log(TData.count)}

    const ExpandedComponent = ({ data }) => {
        return  (<div className='py-5 pl-10 bg-slate-300'>
                    <h5>Descriptiom</h5>
                    <div className='pt-2'>
                        <p>
                            {data.Description}
                        </p>
                    </div>
                </div>)
    };

    
    return (
        <div className='max-w-[75%] mx-auto '>
            <DataTable
                title="Public APIs"
                columns={_columns}
                data = {filterdEntries}
                pagination
                paginationResetDefaultPage={false}
                expandableRows
                expandableRowsComponent={ExpandedComponent}
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                persistTableHead
                
            />
        </div>
        
    )
}
