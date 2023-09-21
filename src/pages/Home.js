import BannerHome from "../images/banner_home.png";
import Header from "../composants/Header";
import Banner from "../composants/Banner";
import Card from "../composants/Card";
import Footer from "../composants/Footer";
import cards from "../data/logements.json";

function Home() {
  return (
    <div id="home">
      <Header />
      <div className="container">
        <Banner image={BannerHome} title="Chez vous, partout et ailleurs" />
        <div className="home_content">
          {cards.map((card, index) => {
            return <Card data={card} key={index} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
