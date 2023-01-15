
import Header from "../components/Header";
import Footer from "../components/Footer";


const AboutPage = (props) => {
    return (
    <div className="grid grid-row-3" id="main-container">  
        <Header/>
        <main>
            <section id="about-section">

                <div className= "container">

                    <h1>About Page</h1>

                    <p>
                        This a business store :)
                    </p>

                </div>

            </section>
        </main>
        <Footer/>
    </div>
    )
}

export default AboutPage
