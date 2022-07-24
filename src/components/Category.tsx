import React, { useContext } from 'react'
import Select from './Select'
import categoryOption from '../categoryOptions.json'
import { CategoryContext, Context } from '../context/categoryContext'

const Category = () => {
    const { setSelectedData } = useContext(CategoryContext) as Context
    const onClickChange = (category: string) => {
        setSelectedData(category)
    }
    return (
        <Select>
            <Select.NameLayout>
                {categoryOption.map(x => {
                    return <Select.Name id={x.id} value={x.category} onClick={onClickChange}/>
                })}
            </Select.NameLayout>
        </Select>
    )
}

export default Category