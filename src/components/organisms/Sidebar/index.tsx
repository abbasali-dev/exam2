import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import SidebarItemList from 'components/molecules/SidebarItemList'

import { StyledDrawer } from './Sidebar.styles'

const Sidebar = () => {
	const location = useLocation()
	const currentUrl = location.pathname
	const [selectedTab, setSelectedTab] = useState<number>(currentUrl === '/home' ? 0 : 1)
	const [width, setWidth] = useState(window.innerWidth)

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth)
		})
	}, [])

	useEffect(() => {
		if (currentUrl === '/home' && selectedTab !== 0) {
			setSelectedTab(0)
		}

		if (currentUrl === '/tags' && selectedTab !== 1) {
			setSelectedTab(0)
		}
	}, [currentUrl, selectedTab])

	return (
		<>
			<StyledDrawer
				variant="permanent"
				anchor={width <= 440 ? 'bottom' : 'left'}
				sx={{ display: width <= 440 && currentUrl !== '/home' ? 'none' : 'block' }}
			>
				<SidebarItemList selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
			</StyledDrawer>
			<Outlet />
		</>

	)
}

export default Sidebar
