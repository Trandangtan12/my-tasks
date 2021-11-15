import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { UserApi } from '../api/auth/usersApi'

const Header = () => {
    const history = useHistory()
    const user = UserApi.isAuthenticated()
    const [isLogged, setIsLogged] = useState(false)
    const {patchname} = useLocation()
    useEffect(() => {
        user && setIsLogged(true)
    }, [patchname, isLogged])
    return (
        <div>
            Header
           {isLogged && (<Link onClick={() => {UserApi.signout(() => {
                history.push("/login")
            })}}>
                Dang xuat
            </Link>)}
        </div>
    )
}

export default Header
