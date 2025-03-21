document.addEventListener("DOMContentLoaded", function () {

  const content = document.getElementById("content");
  const links = document.querySelectorAll(".nav-link");

  const sections = {
    about: ` 
            <div class="fade-in">
                <h2>About Me</h2>
                <div style="text-align: justify; max-width: 800px; margin: 0 auto;">
                    <p style="margin: 20px 0;">
                        👋 Hi there! I'm Abil, Students of Information Technology and Systems Education study program. Have a high interest and enthusiasm for learning in the field of UI/UX Design, Learning & Development, eLearning content development and graphic design. Have skills in creative thinking, problem solving, detail-oriented and thorough. Having work experience contributing to HR Project has given me the opportunity to work in a corporate environment and understand eLearning Design & Development which makes me able to collaborate with diverse backgrounds and adapt in various situations. 
                    </p>
                    
                    <h3 style="margin: 20px 0;">🚀 What I Do</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin: 10px 0;">📱 Social Media Specialist: Graphic Design, Copywriter</li>
                        <li style="margin: 10px 0;">💻 eLearning Content Developer: Ms PowerPoint, ProCreate, SCORM, Figma</li>
                        <li style="margin: 10px 0;">🤖 Video Editor: Capcut, VN, Canva</li>
                        <li style="margin: 10px 0;">🎨 Graphic Designer, UI/UX Design: Figma, Canva, ProCreate</li>
                        <li style="margin: 10px 0;">🌏 Web Development: Laravel, HTML, CSS, JavaScript</li>
                        <li style="margin: 10px 0;">📷 Photographer, Videographer</li>
                    </ul>

                    <h3 style="margin: 20px 0;">🎯 Current Focus</h3>
                    <p>Currently diving deep into computer vision technologies and exploring the exciting world of AI/ML integration in web and education applications.</p>
                </div>
            </div>
        `,
    projects: `
            <div class="fade-in">
                <h2>Projects</h2>
                <div class="projects-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; padding: 2rem 0; text-align: left;">
                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">🪴 Eco Waste</h3>
                        <p style="margin: 10px 0;">Dive into the world of Machine Learning with this fun and easy-to-follow guide! 
                        Designed for beginners, this book simplifies complex AI concepts with engaging examples, hands-on exercises, and real-world applications.</p>
                        <div style="margin-top: 15px;">
                            <a href="#" style="color: #0066cc; text-decoration: none; margin-right: 15px;">Buy</a>
                            <a href="#" style="color: #0066cc; text-decoration: none;">GitHub</a>
                        </div>
                    </div>
                    
                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">👩‍💻 Na'am Kosify</h3>
                        <p style="margin: 10px 0;">A community that focus on empowering woman in IT. Currently has a program called Friday Afternoon where girls can learn how to code and build their own app!</p>
                        <div style="margin-top: 15px;">
                            <a href="#" style="color: #0066cc; text-decoration: none; margin-right: 15px;">Instagram</a>
                        </div>
                    </div>

                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">👩‍💻 InWork Learn</h3>
                        <p style="margin: 10px 0;">A community that focus on empowering woman in IT. Currently has a program called Friday Afternoon where girls can learn how to code and build their own app!</p>
                        <div style="margin-top: 15px;">
                            <a href="#" style="color: #0066cc; text-decoration: none; margin-right: 15px;">Instagram</a>
                        </div>
                    </div>

                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">👩‍💻 Ngosam</h3>
                        <p style="margin: 10px 0;">A community that focus on empowering woman in IT. Currently has a program called Friday Afternoon where girls can learn how to code and build their own app!</p>
                        <div style="margin-top: 15px;">
                            <a href="#" style="color: #0066cc; text-decoration: none; margin-right: 15px;">Instagram</a>
                        </div>
                    </div>

                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">👩‍💻 MahasisWork</h3>
                        <p style="margin: 10px 0;">A community that focus on empowering woman in IT. Currently has a program called Friday Afternoon where girls can learn how to code and build their own app!</p>
                        <div style="margin-top: 15px;">
                            <a href="#" style="color: #0066cc; text-decoration: none; margin-right: 15px;">Instagram</a>
                        </div>
                    </div>

                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">👩‍💻 eLearning: Equipment Management Awareness</h3>
                        <p style="margin: 10px 0;">Develop learning materials to create animations for the EM Awareness eLearning module</p>
                        <div style="margin-top: 15px;">
                            <a href="#" style="color: #0066cc; text-decoration: none; margin-right: 15px;">Instagram</a>
                        </div>
                    </div>

                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">👩‍💻 eLearning: Warehouse Operation</h3>
                        <p style="margin: 10px 0;">A community that focus on empowering woman in IT. Currently has a program called Friday Afternoon where girls can learn how to code and build their own app!</p>
                        <div style="margin-top: 15px;">
                            <a href="#" style="color: #0066cc; text-decoration: none; margin-right: 15px;">Instagram</a>
                        </div>
                    </div>

                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">👩‍💻 eLearning: Anti Fraud</h3>
                        <p style="margin: 10px 0;">A community that focus on empowering woman in IT. Currently has a program called Friday Afternoon where girls can learn how to code and build their own app!</p>
                        <div style="margin-top: 15px;">
                            <a href="#" style="color: #0066cc; text-decoration: none; margin-right: 15px;">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        `,
    contact: `
            <div class="fade-in">
                <h2>Let's Connect!</h2>
                <div style="max-width: 600px; margin: 2rem auto; text-align: left;">
                    <p style="margin: 1rem 0;">I'm always excited to collaborate on interesting projects or just have a chat about technology and innovation. Feel free to reach out through any of these channels:</p>
                    
                    <div style="display: flex; flex-direction: column; gap: 1rem; margin: 2rem 0;">
                        <a href="mailto:liptiavenica@upi.edu" target="_blank" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            📧 sitinabilah@upi.edu
                        </a>
                        <a href="https://linkedin.com/in/nabilabst" target="_blank" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            💼 LinkedIn: /in/nabilabst
                        </a>
                        <a href="https://github.com/b18nabil" target="_blank" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            🐱 GitHub: @b18nabil
                        </a>
                        <a href="https://instagram.com/originabs" target="_blank" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            📸 Instagram: originabs
                        </a>
                    </div>

                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
                        <h3 style="margin-bottom: 1rem;">🌟 Current Status</h3>
                        <p>Open to freelance projects and exciting collaboration opportunities!</p>
                    </div>
                </div>
            </div>
        `,
  };

  function showSection(sectionId) {
    content.innerHTML = sections[sectionId];
  }

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(link.dataset.section);
    });
  });

  showSection("about");
});
