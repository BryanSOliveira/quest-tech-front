import './styles.css';
import computer from '../../assets/images/computer.svg';
import brand from '../../assets/images/brand-game.svg';

function Home() {
  return (
    <section className="home">
      <div>
        <img src={computer} />
      </div>
      <div className="grid">
        <div>
          <img src={brand} />
        </div>
        <div>
          <p>Venha testar e exercitar seu conhecimento fazendo nossos quizzes da área de tecnologia.</p>
        </div>
        <div>
          <button>JOGAR AGORA</button>
        </div>
      </div>
    </section>
  )
}

export default Home;