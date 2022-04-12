import React from 'react'
import { BottomBar } from '../../components/BottomBar'
import { MenuBar } from '../../components/MenuBar'
import { TopBar } from '../../components/TopBar'
import { StyledMain } from './styles'

export const Main = () => {
  return (
    <StyledMain>
      <TopBar />
      <MenuBar />
      <div className="content">

      </div>
      <BottomBar />
    </StyledMain>
  )
}
