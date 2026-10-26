
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

function Home() {
    return (
        <section className="hero">
            <div className="hero-text">
                <span className="tag"> FUTURE IT PROFESSIONAL</span>
                <h1>Hello, I'm <span>Manasi </span> 👋</h1>
                <h2>Learning. Building. Growing.</h2>
                <p>
                    I am an MCA student passionate about programming,
                    web development, and exploring new technologies.
                    Welcome to my personal portfolio!
                </p>
                <NavLink to="/projects" className="primary-btn">
                    Explore My Projects →
                </NavLink>
            </div>

            <div className="profile-circle">
                <div className="profile-icon">👩‍💻</div>
                <h3>Future Developer</h3>
                
            </div>
        </section>
    );
}

function About() {
    return (
        <section className="page">
            <h1>About Me ✨</h1>
            <p className="subtitle">A little introduction about myself</p>

            <div className="card">
                <h2>My Journey</h2>
                <p>
                    I am pursuing a Master of Computer Applications (MCA).
                    I enjoy learning programming languages, solving problems,
                    and creating useful applications.
                </p>
                <p>
                    My goal is to improve my technical skills and build
                    a successful career in the IT industry.
                </p>
            </div>

            <div className="info-grid">
                <div className="info-card">
                    <h3>🎓 Education</h3>
                    <p>Master of Computer Applications</p>
                </div>
                <div className="info-card">
                    <h3>🎯 Goal</h3>
                    <p>Become a skilled IT professional</p>
                </div>
            </div>
        </section>
    );
}

function Skills() {
    const skills = [
        'HTML & CSS',
        'JavaScript',
        'ReactJS',
        'Python',
        'Java',
        'SQL & DBMS'
    ];

    return (
        <section className="page">
            <h1>My Skills 💡</h1>
            <p className="subtitle">Technologies I am learning</p>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <div className="skill-card" key={skill}>
                        <span>✦</span> {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}

function Projects() {
    const projects = [
        {
            icon: '🌐',
            title: 'Personal Portfolio',
            description: 'A responsive website to showcase my profile and skills.',
            tech: 'ReactJS • CSS'
        },
        {
            icon: '🎓',
            title: 'Student Management',
            description: 'An application to manage student information.',
            tech: 'Java • MySQL'
        },
        {
            icon: '📝',
            title: 'Online Quiz App',
            description: 'A simple quiz application to test knowledge.',
            tech: 'HTML • CSS • JavaScript'
        }
    ];

    return (
        <section className="page">
            <h1>My Projects 🚀</h1>
            <p className="subtitle">Some projects I have worked on or plan to build</p>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.title}>
                        <div className="project-icon">{project.icon}</div>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <span className="tech">{project.tech}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section className="page">
            <h1>Let's Connect 💌</h1>
            <p className="subtitle">I'm always happy to connect and learn</p>

            <div className="card contact-card">
                <div className="contact-icon">📧</div>
                <h2>Get in Touch</h2>
                <p>Interested in technology, projects, or collaboration?</p>
                <a href="mailto:manasitalele33@gmail.com" className="primary-btn">
                    Email Me
                </a>
                
            </div>
        </section>
    );
}

function NotFound() {
    return (
        <section className="page">
            <h1>404 - Page Not Found</h1>
            <NavLink to="/" className="primary-btn">Back to Home</NavLink>
        </section>
    );
}

function App() {
    return (
        <BrowserRouter>
            <header className="navbar">
                <NavLink to="/" className="logo">MyPortfolio<span>.</span></NavLink>

                <nav>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <footer>
                <p>Made with 💜 by Mansi | © 2026</p>
            </footer>
        </BrowserRouter>
    );
}

export default App;
