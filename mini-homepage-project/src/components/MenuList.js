import React from 'react';
import styled from 'styled-components';

const menu = [
    {
        name: 'home',
        text: '홈'
    },
    {
        name: 'index',
        text: '소개'
    },
    {
        name: 'free-border',
        text: '자유게시판'
    },
    {
        name: 'number',
        text: '연락처'
    }
];

const MenuBlock = styled.div`
display: flex;
padding: 1rem;
width: 768px;
margin: 0 auto;
@media screen and (max-width:768px){
    width: 100%;
    overflow-x:auto;
}
`;

const Menu = styled.div`
font-size :1.125rem;
cursor: pointer;
white-space: pre;
text-decoration: none;
color: inherit;
padding-bottom:0.25rem;

&:hover {
    color: #495057;
}

&+&{
    margin-left: 1rem;
}
`;

const MenuList = () => {
    return (
        <MenuBlock>
            {menu.map(c => (
                <Menu key={c.name}>{c.text}</Menu>
            ))}

        </MenuBlock>
    );
};

export default MenuList;