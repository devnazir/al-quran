import Nav from '../components/Nav'

function Layout({ children }) {
  return (
    <div className='container max-w-screen-xl mx-auto p-5 mb-10'>
      <Nav></Nav>
      {children}
    </div>
  )
}

export default Layout