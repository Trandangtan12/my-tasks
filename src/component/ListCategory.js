import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CategoryApi } from '../api/categories/CategoryApi'

const ListCategory = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const {data} = await CategoryApi.getCate()
                setCategories(data.items)
            } catch (error) {
                console.log(error);
            }
        }
        fetchCategory()
    }, [])
    return (
        <div>
            <Link>Them</Link>
            {categories.map(item => <div>{item.name}</div>)}
        </div>
    )
}

export default ListCategory
