import React from 'react'

interface Props {
    children: React.ReactNode;
}
interface ChildProps {
    children: React.ReactNode;
}

interface ValueProps {
  value: string
}

interface NameProps extends ValueProps {
  id: number,
  onClick: (category: string) => void
}

const Select = ({children}: Props) => <div>{children}</div>;

Select.NameLayout = function CategoryLayout({children}: ChildProps) {
    return <div>{children}</div>;
}
Select.Name = function CategoryName({id, value, onClick}: NameProps) {
    return <div key={id} onClick={()=> onClick(value)}>{value}</div>;
}

export default Select;