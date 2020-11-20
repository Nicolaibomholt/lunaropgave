import logo from './logo.svg';
import './App.css';
import data from './data.json'
import React, { useContext, useState, useEffect } from "react";

const tranaction = [{
    "id": "0ed6c015-ea38-465e-9323-bafae969baea",
    "type": "account",
    "iconURL": "https://s3-eu-west-1.amazonaws.com/lunarway-dev-cdn/pfm/category_other.png",
    "localizableTitle": "Transfer",
    "categoryIconUrl": "https://s3-eu-west-1.amazonaws.com/lunarway-dev-cdn/pfm/category_other.png",
    "deleted": "2020-10-06T13:13:42Z",
    "status": "future",
    "time": "2021-03-10T04:30:00Z",
    "categoryID": "other",
    "transactionAmount": null,
    "billingAmount": {
        "amount": -1,
        "currency": "DKK"
    }
}
]

function ListItem(data) {
    return (
        <div className="parent">
            <img className="div1" src={data.data.iconURL} style= {{maxWidth: '25px'}}></img>
            <p className="div2">{data.data.type}</p>
            <p className="div3">{data.data.localizableTitle}</p>
            <p className="div4"> {data.data.billingAmount.amount} {data.data.billingAmount.currency}</p>
            <p className="div5">{data.data.time}</p>
            <p className="div6">{data.data.status}</p>
            <img className ="div7" src={data.data.categoryIconUrl} style= {{maxWidth: '25px'}}></img>
        </div>
    );
}

export default ListItem;
