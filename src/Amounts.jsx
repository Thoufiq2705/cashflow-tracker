import React, { useState } from 'react'

const Amounts = (props) => {
    const [add, setAdd] = useState(false)
    const [amount, setAmount] = useState()
    const [description, setDescription] = useState()
    const [type, setType] = useState('Expense')
    // const [Balance, setBalance] = useState(amount)

    const handleAddTransaction = () => {

        props.handleAddTransaction({ amount, description, type });

        setAmount('')
        setDescription('')
        setAdd(false)
    }

    const handleAdd = () => {
        setAdd(!add)
    }

    return (
        <div className='w-[450px]'>
            <div className="amounts mt-14 flex items-center justify-between mx-2">
                <b className='text-xl'>Balance:{props.Balance} </b>
                <button className='bg-black text-white px-4 py-1 text-lg font-medium rounded-xl' onClick={handleAdd}>{add ? "Cancel" : "ADD"}</button>
            </div>
            <div className="w-[100%] amount-details flex flex-col items-center border my-7 p-3" style={{ display: add ? "flex" : "none" }}>
                <input type="number" placeholder='Amount' required className='w-[90%] my-2 border p-3 focus:outline-none'
                    onChange={(e) => { setAmount(e.target.value) }}
                    value={amount} />
                <input type="text" placeholder='Description' required className='w-[90%] my-2  border p-3 focus:outline-none'
                    onChange={(e) => { setDescription(e.target.value) }}
                    value={description}
                />
                <div className="labels flex w-[90%] my-3">
                    <input type="radio" id='Expense' className='mr-2' value='Expense' onClick={() => setType('Expense')} checked={type === 'Expense'} />
                    <label htmlFor="Expense">Expense</label>
                    <input type="radio" id='Income' className='mx-2' value='Income' onClick={() => setType('Income')} checked={type === 'Income'} />
                    <label htmlFor="Income">Income</label>
                </div>
                <button className='bg-black text-white px-4 py-1 text-lg my-2 font-medium rounded-xl'
                    onClick={handleAddTransaction}
                >Add Transaction</button>
            </div>
            <div className="cashinflow flex p-2 w-[100%] justify-center items-center gap-x-10 mt-5 text-xl" >
                <div className="expense flex flex-col w-[40%] border justify-start p-5">
                    Expense
                    <span className='text-red-600 font-bold text-lg'>₹{props.Expense}</span>
                </div>
                <div className="expense flex flex-col w-[40%] border justify-start p-5">
                    Income
                    <span className='text-green-600 font-bold text-lg'>₹{props.Income}</span>
                </div>
            </div>
        </div>
    )
}

export default Amounts