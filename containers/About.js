const About = () => (
  <section>
    <h3 className='section-title'>About TEDxHamburg</h3>
    <h4 className='section-subtitle'>
      This independent TEDx event is operated under license from <span className='red-text'>TED</span>.
    </h4>
    <p className='about-paragraph'>
      TED is a nonpartisan nonprofit devoted to spreading ideas, usually in the form of short, powerful talks. TED began in 1984 as a conference where Technology, Entertainment and Design converged, and today covers almost all topics from science to business to global issues — in more than 110 languages. Meanwhile, independently run TEDx events help share ideas in communities around the world.
    </p>
    <style jsx>{`
      .section-subtitle {
        color: var(--gray); 
        font-family: var(--regular);
        font-size: 2.2rem;  
        font-weight: 400;
        line-height: 2.4rem;
        margin: 16px 0 32px;
      }
      .about-paragraph {
        color: var(--gray);
        font-size: 1.8rem;
        line-height: 2.4rem;
      }
    `}</style>
  </section>
)

export default About