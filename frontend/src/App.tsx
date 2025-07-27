import React from 'react'
import './App.css'
import Menu from './common/Menu'

const items = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Hire', href: '/hire' },
]

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <Menu items={items} />
      </header>
      <main>
        <header>Courses</header>
          <div>
              The courses are as follows:
              <ul>
                  <li>React</li>
                  <li>Node</li>
                  <li>Express</li>
              </ul>
          </div>
      </main>
    </div>
  )
}

export default App