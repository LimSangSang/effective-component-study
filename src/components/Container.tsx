import React from 'react'

interface Props {
    title: string,
    children: React.ReactElement;
}

const Container = ({title, children}: Props) => <div>
    <p>{title}</p>
    <div className='container'>
        {children}
    </div>
</div>;

export default Container;