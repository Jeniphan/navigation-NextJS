import React, { FC } from 'react'
import Header from '@layout/Header'
import Footer from '@layout/Footer'
import Navigation from '@components/navigation/navigation'

const Layout: FC = ({ children }) => {
	return (
		<>
			<Navigation />
			{children}
			<Footer />
		</>
	)
}

export default Layout
