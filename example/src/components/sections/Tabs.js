import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'danger-ui'

const TabsComponent = () => {
  return (
    <div>
      <h2>Tabs</h2>
      <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
        <TabList>
          <Tab>Customers</Tab>
          <Tab>Users</Tab>
        </TabList>
        <TabPanel>List of customers</TabPanel>
        <TabPanel>List of users</TabPanel>
      </Tabs>
    </div>
  )
}

export default TabsComponent
