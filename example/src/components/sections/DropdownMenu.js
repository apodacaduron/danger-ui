import React from 'react'
import { Menu, MenuItem, MenuButton, SubMenu } from 'danger-ui'

const TabsComponent = () => {
  return (
    <div>
      <h2>Date Picker</h2>
      <Menu menuButton={<MenuButton>Open</MenuButton>}>
        <MenuItem>New File</MenuItem>
        <SubMenu label='Recent files'>
          <MenuItem>index.html</MenuItem>
          <MenuItem>awesome.php</MenuItem>
        </SubMenu>
        <MenuItem>Exit</MenuItem>
      </Menu>
    </div>
  )
}

export default TabsComponent
