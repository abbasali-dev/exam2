import Logo from 'components/atoms/Logo'
import TabButton from 'components/atoms/TabButton'
import { SidebarBox, TabsBox } from './SidebarItemList.styles'
import { Dispatch, SetStateAction } from 'react'
import { HOME_STR, TAG_STR } from 'utils/appCostants'
import { LogoHiddenUp } from 'components/atoms/SearchBar/SearchBar.styles'

type SidebarItemListProps = {
  selectedTab: number
  setSelectedTab: Dispatch<SetStateAction<number>>
}

const SidebarItemList = ({ selectedTab, setSelectedTab }: SidebarItemListProps) => {
  return (
    <SidebarBox>
      <LogoHiddenUp>
        <Logo />
      </LogoHiddenUp>
      <TabsBox>
        <TabButton isActive={selectedTab === 0} name={HOME_STR} setSelectedTab={setSelectedTab} />
        <TabButton isActive={selectedTab === 1} name={TAG_STR} setSelectedTab={setSelectedTab} />
      </TabsBox>
    </SidebarBox>
  )
}

export default SidebarItemList