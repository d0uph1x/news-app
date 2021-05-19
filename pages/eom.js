import React from 'react'
import axios from 'axios';

const Eom = ({employee}) => {
    return (
        <div className='page-container'>
            <h2>EMPLOYEE OF THE MONTH</h2>
        </div>
    )
}

export const getServerSideProps = async (pageContext) =>{
    const resp = await axios.get('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth')
}
export default Eom;
