import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import Footer from './FooterIndex';
import logo from '../../Images/Logo.jpg'
import logo1 from '../../Images/Social_Frame.png'
import logo2 from '../../Images/YT_Frame.png'

export default function FooterContainer(){
    return(
        <Footer>
        <Footer.Wrapper>
                
        <Footer.Row>
                <Footer.Column>
                    <Footer.Title>Client Service</Footer.Title>
                    <Footer.Link href="#">Opening the package upon delivery </Footer.Link>
                    <Footer.Link href="#">30 days right of return</Footer.Link>
                    <Footer.Link href="#">Payment by card in interest-free installments</Footer.Link>
                    <Footer.Link href="#"></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Orders and delivery</Footer.Title>
                    <Footer.Link href="#">My iShop account</Footer.Link>
                    <Footer.Link href="#">Delivery of orders</Footer.Link>
                    <Footer.Link href="#">iShop Corporate</Footer.Link>
                    <Footer.Link href="#">Delivery of orders</Footer.Link>
                    <Footer.Link href="#">iShop Marketplace</Footer.Link>
                    <Footer.Link href="#">Financing and payment methods</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Customer support</Footer.Title>
                    <Footer.Link href="#">Product return form </Footer.Link>
                    <Footer.Link href="#">Contact</Footer.Link>
                    <Footer.Link href="#">Terms and conditions</Footer.Link>
                    <Footer.Link href="#">Processing of personal data</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <a href="../../public/index.html">
                        <img className="Logo" src={logo} alt="Logo" />
                    </a>
                    <a href="#">
                        <img className="Social_Frame" src={logo1} alt="Social_Frame" />
                    </a>
                    <a href="#">
                        <img className="YT_Frame" src={logo2} alt="YT_Frame" />
                    </a>
                    <Footer.Link href="#">IshopComunity@yahoo.com</Footer.Link>
                </Footer.Column>
            </Footer.Row>
          
        </Footer.Wrapper>
    </Footer>
         );
}