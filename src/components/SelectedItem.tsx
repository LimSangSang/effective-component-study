import React, {useContext} from 'react'
import { CategoryContext, Context } from '../context/categoryContext'
import Content from './Content'

const Category = () => {
    const { selectedData } = useContext(CategoryContext) as Context
    return (
        <Content>
            <Content.Item content={selectedData} />
        </Content>
    )
}

export default Category