import React from 'react'
import { MenuWrapper }  from './styles/MenuWrapper'
import { Logo } from '../../../theme/Logo'

export default function Menu() {
    
    const links = [
        {
            texto: 'Home',
            url: '/',
        },
        {
            texto: 'Perguntas frequentes',
            url: '/faq',
        },
        {
            texto: 'Sobre',
            url: '/sobre',
        },
    ]

    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                <Logo />
            </MenuWrapper.LeftSide>
            <MenuWrapper.CentralSide>
                {links.map((link) => {
                    return (
                        <li>
                            <a href={link.url}>
                                {link.texto}
                            </a>
                        </li>
                    )
                })}
            </MenuWrapper.CentralSide>
            <MenuWrapper.RightSide>
                <button>
                    entrar
                </button>
                <button>
                    cadastrar
                </button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
}