import Footer from "./footer"
import Header from "./header"

/**
 * A global layout wrapper.
 * 
 * @param {Object} props All.
 * 
 * @returns {JSX.Element}
 */
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}