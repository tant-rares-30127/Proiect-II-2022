import React from 'react';
import {Container, Wrapper, Row, Column, Link, Title} from './Styles/footer';

export default function Footer({children,...restProps}){
    return<Container{...restProps}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}){
    return <this.Wrapper {...restProps}></this.Wrapper>
}

Footer.Row = function FooterRow({children, ...restProps}){
    return <this.Row {...restProps}></this.Row>
}

Footer.Column = function FooterColumn({children, ...restProps}){
    return <this.Column {...restProps}></this.Column>
}

Footer.Link = function FooterLink({children, ...restProps}){
    return <this.Link {...restProps}></this.Link>
}

Footer.Title = function FooterTitle({childre, ...restProps}){
    return <Title {...restProps}></Title>
}
//don't forget the {children}