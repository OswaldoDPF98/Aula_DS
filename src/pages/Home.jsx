import NavBar from '../components/NavBar.jsx';
import PageContent from '../components/PageContent.jsx';
import Footer from '../components/Footer.jsx';

export default function Home(props) {
    return (
        <div>
            <NavBar />
            <PageContent />
            <h1>Qué pasa?</h1>
            <Footer />
        </div>
        
    );
}