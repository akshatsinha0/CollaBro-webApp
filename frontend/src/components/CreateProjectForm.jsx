import React, { useState } from 'react';
import { FaTimes, FaPlus, FaTrash } from 'react-icons/fa';
import '../styles/CreateProjectForm.css';

const DOMAIN_OPTIONS = [
  'Web Development',
  'Mobile Development',
  'Machine Learning',
  'Data Science',
  'Blockchain',
  'Cloud Computing',
  'DevOps',
  'UI/UX Design',
  'Game Development',
  'Cybersecurity'
];

const SKILLS_MAP = {
  'Web Development': ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Django', 'Flask', 'Angular', 'Vue.js', 'TypeScript'],
  'Mobile Development': ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Android', 'iOS', 'Xamarin'],
  'Machine Learning': ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'NLP'],
  'Data Science': ['Python', 'R', 'SQL', 'Pandas', 'NumPy', 'Tableau', 'Power BI'],
  'Blockchain': ['Solidity', 'Web3.js', 'Ethereum', 'Hyperledger', 'Smart Contracts'],
  'Cloud Computing': ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
  'DevOps': ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Ansible', 'Puppet', 'Chef'],
  'UI/UX Design': ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'],
  'Game Development': ['Unity', 'Unreal Engine', 'C#', 'C++', 'OpenGL'],
  'Cybersecurity': ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'Security Analysis']
};

const PROJECT_TYPES = [
  'Academic',
  'Personal',
  'Startup',
  'Research',
  'Open Source'
];

function CreateProjectForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    collaborators: [
      {
        id: 1,
        domain: '',
        skills: []
      }
    ],
    duration: 1,
    projectType: '',
    references: []
  });

  const handleDomainChange = (collaboratorId, domain) => {
    setFormData(prev => ({
      ...prev,
      collaborators: prev.collaborators.map(collab => 
        collab.id === collaboratorId 
          ? { ...collab, domain, skills: [] } 
          : collab
      )
    }));
  };

  const handleSkillSelect = (collaboratorId, skill) => {
    setFormData(prev => ({
      ...prev,
      collaborators: prev.collaborators.map(collab => 
        collab.id === collaboratorId 
          ? { ...collab, skills: [...collab.skills, skill] } 
          : collab
      )
    }));
  };

  const removeSkill = (collaboratorId, skill) => {
    setFormData(prev => ({
      ...prev,
      collaborators: prev.collaborators.map(collab => 
        collab.id === collaboratorId 
          ? { ...collab, skills: collab.skills.filter(s => s !== skill) } 
          : collab
      )
    }));
  };

  const addCollaborator = () => {
    setFormData(prev => ({
      ...prev,
      collaborators: [
        ...prev.collaborators,
        {
          id: prev.collaborators.length + 1,
          domain: '',
          skills: []
        }
      ]
    }));
  };

  const removeCollaborator = (collaboratorId) => {
    if (formData.collaborators.length > 1) {
      setFormData(prev => ({
        ...prev,
        collaborators: prev.collaborators.filter(collab => collab.id !== collaboratorId)
      }));
    }
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setFormData(prev => ({
      ...prev,
      references: [...prev.references, ...files]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="create-project-form-overlay">
      <div className="create-project-form">
        <div className="form-header">
          <h2>Create New Project</h2>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Project Name</label>
            <input
              type="text"
              className="form-input"
              value={formData.projectName}
              onChange={(e) => setFormData(prev => ({ ...prev, projectName: e.target.value }))}
              placeholder="Enter project name"
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-input"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Describe your project..."
              required
            />
          </div>

          <div className="collaborators-section">
            <div className="section-header">
              <h3>Collaborators</h3>
              <button type="button" className="add-collaborator-button" onClick={addCollaborator}>
                <FaPlus /> Add Collaborator
              </button>
            </div>

            <div className="collaborators-container">
              {formData.collaborators.map((collaborator) => (
                <div key={collaborator.id} className="collaborator-card">
                  <div className="collaborator-header">
                    <h4>Collaborator {collaborator.id}</h4>
                    {formData.collaborators.length > 1 && (
                      <button
                        type="button"
                        className="remove-collaborator-button"
                        onClick={() => removeCollaborator(collaborator.id)}
                      >
                        <FaTrash />
                      </button>
                    )}
                  </div>

                  <div className="collaborator-content">
                    <div className="form-group">
                      <label>Domain</label>
                      <select
                        className="form-input"
                        value={collaborator.domain}
                        onChange={(e) => handleDomainChange(collaborator.id, e.target.value)}
                        required
                      >
                        <option value="">Select Domain</option>
                        {DOMAIN_OPTIONS.map(domain => (
                          <option key={domain} value={domain}>{domain}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Skills</label>
                      <select
                        className="form-input"
                        value=""
                        onChange={(e) => handleSkillSelect(collaborator.id, e.target.value)}
                        disabled={!collaborator.domain}
                      >
                        <option value="">Select Skills</option>
                        {collaborator.domain && SKILLS_MAP[collaborator.domain].map(skill => (
                          <option key={skill} value={skill}>{skill}</option>
                        ))}
                      </select>
                      <div className="tags-container">
                        {collaborator.skills.map(skill => (
                          <span key={skill} className="tag">
                            {skill}
                            <button type="button" onClick={() => removeSkill(collaborator.id, skill)}>×</button>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Duration (months)</label>
            <input
              type="number"
              className="form-input"
              min="1"
              value={formData.duration}
              onChange={(e) => setFormData(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
              required
            />
          </div>

          <div className="form-group">
            <label>Project Type</label>
            <select
              className="form-input"
              value={formData.projectType}
              onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
              required
            >
              <option value="">Select Project Type</option>
              {PROJECT_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>References (Optional)</label>
            <input
              type="file"
              className="form-input"
              multiple
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
            <div className="file-list">
              {formData.references.map((file, index) => (
                <div key={index} className="file-item">
                  {file.name}
                </div>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">Create Project</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProjectForm; 