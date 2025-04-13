document.addEventListener('DOMContentLoaded', function() {
    // Navigation between sections
    const navItems = document.querySelectorAll('.sidebar-nav li');
    const contentSections = document.querySelectorAll('.content-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all nav items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Hide all content sections
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Show the corresponding content section
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
    
    // Tab switching in Contribute section
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Show the corresponding tab content
            const target = this.getAttribute('data-tab');
            document.getElementById(target).classList.add('active');
        });
    });
    
    // Logout functionality
    const logoutBtn = document.querySelector('.btn-logout');
    logoutBtn.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
    
    // Project upload form
    const uploadForm = document.getElementById('projectUploadForm');
    if (uploadForm) {
        uploadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const projectTitle = document.getElementById('projectTitle').value;
            const projectDescription = document.getElementById('projectDescription').value;
            const githubLink = document.getElementById('githubLink').value;
            const projectTags = document.getElementById('projectTags').value;
            
            // Create project object
            const projectData = {
                title: projectTitle,
                description: projectDescription,
                githubUrl: githubLink,
                tags: projectTags.split(',').map(tag => tag.trim()),
                createdAt: new Date().toLocaleDateString(),
                status: "Available"
            };
            
            // Display the new project in the uploaded projects section
            displayUploadedProject(projectData);
            
            // Show success message
            alert('Project uploaded successfully!');
            
            // Reset the form
            uploadForm.reset();
            
            // Update projects uploaded count
            updateProjectsCount();
        });
    }
    
    // Contribute button functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-contribute')) {
            const projectCard = e.target.closest('.project-card');
            const projectTitle = projectCard.querySelector('.project-title').textContent;
            
            // Update UI to reflect contribution
            e.target.textContent = 'Contributing';
            e.target.classList.add('btn-success');
            e.target.classList.remove('btn-primary');
            e.target.disabled = true;
            
            alert(`You're now contributing to: ${projectTitle}`);
        }
    });
    
    // Function to display uploaded project
    function displayUploadedProject(project) {
        const uploadedProjectsContainer = document.querySelector('.uploaded-projects');
        
        // Remove the empty state if it exists
        const emptyState = uploadedProjectsContainer.querySelector('.empty-state');
        if (emptyState) {
            emptyState.remove();
        }
        
        // Create project list if it doesn't exist
        let projectList = uploadedProjectsContainer.querySelector('.project-list');
        if (!projectList) {
            projectList = document.createElement('div');
            projectList.className = 'project-list';
            uploadedProjectsContainer.appendChild(projectList);
        }
        
        // Create project card
        const projectCard = document.createElement('div');
        projectCard.className = 'uploaded-project-card';
        projectCard.innerHTML = `
            <h4>${project.title}</h4>
            <p>${project.description.substring(0, 50)}...</p>
            <div class="project-meta">
                ${project.tags.map(tag => `<span class="badge bg-primary">${tag}</span>`).join('')}
            </div>
            <small>Status: ${project.status}</small>
            ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="btn btn-sm btn-outline-primary mt-2">View on GitHub</a>` : ''}
        `;
        
        // Add to the beginning of the list
        projectList.insertBefore(projectCard, projectList.firstChild);
    }
    
    // Function to update projects count
    function updateProjectsCount() {
        const countElement = document.getElementById('projects-uploaded');
        const currentCount = parseInt(countElement.textContent) || 0;
        countElement.textContent = currentCount + 1;
    }
    
    // Initialize with some sample uploaded projects for demo
    const sampleProjects = [
        {
            title: "E-Commerce Platform",
            description: "Building a modern e-commerce solution with React and Node.js",
            tags: ["React", "Node.js", "MongoDB"],
            status: "In Progress",
            githubUrl: "https://github.com/example/ecommerce"
        },
        {
            title: "Weather App",
            description: "Mobile application for weather forecasting using API data",
            tags: ["Flutter", "Dart", "API"],
            status: "Completed",
            githubUrl: "https://github.com/example/weatherapp"
        }
    ];
    
    // Display sample projects
    sampleProjects.forEach(project => {
        displayUploadedProject(project);
    });
    
    // Set initial projects count
    document.getElementById('projects-uploaded').textContent = sampleProjects.length;
});