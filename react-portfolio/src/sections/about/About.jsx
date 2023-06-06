import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import { HiDownload } from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
    return (
        <section id="about" data-aos="fade-in">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                        <img src={AboutImage} alt="About Image" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>About Me</h2>
                    <div className="about__cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className="about__card">
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>
                        Hi, my name is Norbert Augusztin from Budapest, Hungary. I'm a full-stack web developer with a Bachelors degree in Electrical Engineering. I was drawn to web development as a long-term career that merges my passion for continuous learning with a field I genuinely enjoy.
                    </p>
                    <p>
                        During my bootcamp course, I worked on a collaborative full-stack webshop project with a team of four. This experience honed my detail-oriented problem-solving skills and taught me the value of effective teamwork.
                    </p>
                    <p>
                        I specialize in React, Node.js, CSS, and Bootstrap, which empower me to create dynamic and visually appealing web applications. When faced with coding challenges, I rely on strong research skills and utilize available resources to ensure no problem remains unsolved.
                    </p>
                    <p>
                        My long-term goal is to become the best developer I can be. I'm committed to continuous learning, staying up-to-date with industry trends, and actively participating in the developer community through workshops and conferences.

                        Thank you for visiting my portfolio website. Explore my projects and experiences, and let's connect to contribute to the success of your company or team!
                    </p>
                    <a href={CV} download className='btn primary'>Download CV <HiDownload /></a>
                </div>
            </div>
        </section>
    )
}

export default About