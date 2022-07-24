import React, { createContext } from 'react'

export type Context = {
    selectedData: string,
    setSelectedData: (selectedData: string) => void
}
    
export const CategoryContext = createContext<Context|null>(null);