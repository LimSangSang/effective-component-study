import React, {useState} from 'react'
import { CategoryContext } from '../context/categoryContext'
import Category from './Category'
import Container from './Container'
import SelectedItem from './SelectedItem'
import categoryOption from '../categoryOptions.json'

const Pages = () => {
    const [selectedData, setSelectedData]=useState(categoryOption[0].category)
    return (
        <Container title='카테고리 입니다'>
            <CategoryContext.Provider value={{selectedData, setSelectedData}}>
                <Category />
                <SelectedItem />
            </CategoryContext.Provider>
        </Container>
    )
}

export default Pages