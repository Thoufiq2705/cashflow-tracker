import React, { useEffect, useState } from 'react'
import './App.css'

const Transactions = (props) => {

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(props.Amounts);

    const filterData = (search) => {
        if (search.trim().length === 0 || search === '') {
            setFilter(props.Amounts);
        }
        let upTxn = [...props.Amounts];
        upTxn = upTxn.filter((txn) => txn.description.toLowerCase().includes(search.toLowerCase().trim()));
            setFilter(upTxn);
        console.log(upTxn);
        
    }

    useEffect(() => {
        filterData(search); 
    }, [props.Amounts]);


    return (
        <div className='w-[450px] mt-5'>
            <b className='text-xl'>Transactions</b>
            <input type="text" placeholder='Search' className='w-[100%] rounded-2xl  bg-slate-200 my-2 border p-3 focus:outline-none' onChange={(e) => {
                setSearch(e.target.value)
                filterData(e.target.value)
                }}/>
            {filter.length ? filter.map((filter) => (
                <div className={`entries flex justify-between border px-5 py-3 m-2 ${filter.type === "Expense" ? "b-red" : "b-green"} `}>
                <span>{filter.description}</span>
                <span>{filter.amount}</span>
            </div>)) : null}
        </div>
    )
    }
export default Transactions