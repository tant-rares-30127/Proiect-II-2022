import React from 'react';
import { Container, Column, Row, Link, Title, Wrapper, Images } from './Styles/Footerstyles';

export default function Footer({children,...restProps}){
    return<Container{...restProps}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}){
    return <Wrapper{...restProps}>{children}</Wrapper>
}

Footer.Title = function FooterTitle({children,...restProps}){
    return<Title{...restProps}>{children}</Title>
}

Footer.Column = function FooterColumn({children,...restProps}){
    return<Column{...restProps}>{children}</Column>
}

Footer.Row = function FooterRaw({children,...restProps}){
    return<Row{...restProps}>{children}</Row>
}

Footer.Images= function FooterRaw({children,...restProps}){
    return<Images{...restProps}>{children}</Images>
}

Footer.Link = function FooterLink({children,...restProps}){
    return<Link{...restProps}>{children}</Link>
}
