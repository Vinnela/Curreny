import React from 'react'

const CurrencyInput = (props) => {
    return (
        <div className="currency-input">
            <input type="text" value={props.amount} onChange={event => props.onAmountChange(event.target.value)}  />
            <select value={props.currency} onChange ={event => props.onCurrencyChange(event.target.value)}>
                {props.currencies.map((currency => (
                    <option value={currency}>{currency}</option>
                )))}
                </select>   
        </div>
    )
}


export default CurrencyInput