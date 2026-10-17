import Header from './Header'
import Sidebar from './Sidebar'
import StatCard from './StatCard'
import ActivityItem from './ActivityItem'
import NewNotification from './NewNotification'
import NotificationList from './NotificationList'

import { useState } from 'react'
import { UserContext } from '../contexts/UserContext'


const Layout = ({ user, setUser }) => {
// const Layout = ({ user, setUser }) => { - no longer need because of ContextAPI
  return (
    <div className="layout">
      <Header  />
      {/* <Header user={user} setUser={setUser} />  - no longer need because of ContextAPI */}
      <div className="content">
        <Sidebar />
        {/* <Sidebar user={user} setUser={setUser} />  - no longer need because of ContextAPI */}
        <main className="main">
          <h2>Welcome to the Dashboard</h2>
          <p className="subtitle">Here's what's happening today</p>

          <div className="stats">
            <StatCard number={24} label="New Messages" />
            <StatCard number={12} label="Pending Tasks" />
            <StatCard number={8} label="Notifications" />
          </div>
          <div style={{ marginTop: '15px' }}>
            <NotificationList />
            <NewNotification />
          </div>       

          <div className="recent-activity" style={{ marginTop: '15px' }}>
            <h3>Recent Activity</h3>
            <ul>
              <ActivityItem title="Project Update" description="The new feature has been deployed to production" />
              <ActivityItem title="New Comment" description="Sarah left a comment on your post" />
              <ActivityItem title="Meeting Scheduled" description="Team standup tomorrow at 10:00 AM" />
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout
