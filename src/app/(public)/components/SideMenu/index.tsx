"use client"

import Link from "next/link"
import { Container } from "./styles"

export function SideMenu() {
  return (
    <Container>
      <h1>Menu</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">Sobre mim</Link>
          </li>
          <li>
            <Link href="/skills">Tecnologias</Link>
          </li>
          <li>
            <Link href="/projects">Projetos</Link>
          </li>
          <li>
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </Container>
  )
}