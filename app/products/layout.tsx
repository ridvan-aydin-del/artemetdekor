import Footer from "../components/Footer/page"
import Header from "../components/Header/page"

export default function ProductsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            
            <main>
                <Header />
                {children}
                <Footer />
            </main>
            
        </body>
      </html>
    )
  }