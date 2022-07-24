import React from 'react'

interface Props {
    children: React.ReactElement;
}

interface ItemProps {
    content: string
}

const Content = ({children}: Props) => <div>
    {children}
</div>;

Content.Item = ({content}: ItemProps) => <div>{content}</div>;

export default Content;