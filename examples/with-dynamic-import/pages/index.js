import React from 'react'
import Router from 'next/router'
import Header from '../components/Header'
import Counter from '../components/Counter'
import dynamic from 'next/dynamic'

const Nav = dynamic(import('../components/hello1'))

// Uncomment this to remove the error!
// const DynamicComponent2WithCustomLoading = dynamic({
//   loader: () => import('../components/hello2'),
//   loading: () => <p>Loading caused by client page transition ...</p>
// })

export default class Index extends React.Component {
  render () {
    return (
      <div>
        {/* Load immediately, but in a separate bundle */}
        <Nav />
      </div>
    )
  }
}
