import React from 'react';
import {FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPlusCircle, FaWeixin, FaWhatsapp} from 'react-icons/fa';
import {FaPhone} from "react-icons/fa6";


export const links = [
    {
        id: 1,
        url: '/about',
        text: '关于我们',
        submenu: [
            {
                id: 1,
                url: '/about#company-intro',
                text: '公司简介',
            },
            {
                id: 2,
                url: '/about#company-culture',
                text: '企业文化',
            },
            {
                id: 3,
                url: '/about#company-honor',
                text: '荣誉资质',
            },
            {
                id: 4,
                url: '/about#company-history',
                text: '发展历程',
            },
        ]
    },
    {
        id: 2,
        url: '/product',
        text: '产品展示',
    },
    {
        id:3,
        url: '/origin',
        text:'生产地'
    },
    {
        id:4,
        url:'/news',
        text:'新闻动态',
    },
    {
        id:5,
        url:'/service',
        text:'我们的服务',
        submenu: [
            {
                id: 1,
                url: '/service#service-item',
                text: '服务项目',
            },
            {
                id: 2,
                url: '/service#service-process',
                text: '服务流程',
            },
            {
                id: 3,
                url: '/service#service-advantage',
                text: '服务优势',
            },
        ]
    },
    {
        id: 6,
        url: '/contact',
        text: '联系我们',
        submenu: [
            {
                id: 1,
                url: '/contact',
                text: '联系方式',
            },
            {
                id: 2,
                url: '/contact',
                text: '在线留言',
            },
        ]
    },
]

export const social = [
    {
        name: 'facebook',
        icon: <FaFacebook/>,
    },
    {
        name: 'whatsapp',
        icon: <FaWhatsapp/>
    },
    {
        name: 'linkedin',
        icon: <FaLinkedin/>,
    },
    {
        name: 'weixin',
        icon: <FaWeixin/>,
    },
    {
        name: 'instagram',
        icon: <FaInstagram/>
    },
    {
        name:'telephone',
        icon:<FaPhone/>
    },
    {
        name:'email',
        icon:<FaEnvelope/>
    },
    {
        name:'default',
        icon:<FaPlusCircle/>
    }
]
