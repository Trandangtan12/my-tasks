import React from 'react'
import Header from '../component/header'

const Website = ({children}) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Website
