import { FC } from "react"
import Footer from "./footer"
import Header from "./header"

type Props = {
    children: React.ReactNode
} 

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className="bg-neutral-100">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout