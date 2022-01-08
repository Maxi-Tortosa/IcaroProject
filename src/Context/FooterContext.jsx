import { createContext, useEffect, useState } from "react"
import { getFirestore } from "../../src/Firebase"

export const mainFooterContext = createContext()

const FooterContext = ({ children }) => {
	const [footerContent, setFooterContent] = useState()

	useEffect(() => {
		const db = getFirestore()
		const footerInfo = db.collection("FooterContent")

		footerInfo
			.get()
			.then((querySnapshot) => {
				if (querySnapshot.size === 0) {
					console.log("No results")
				}

				setFooterContent(querySnapshot.docs.map((doc) => doc.data()))
			})
			.catch((error) => {
				console.log("error", error)
			})
			.finally(() => {})
	}, [])

	return (
		<mainFooterContext.Provider value={{ footerContent, setFooterContent }}>
			{children}
		</mainFooterContext.Provider>
	)
}

export default FooterContext
