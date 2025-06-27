import React, { useState, useRef } from 'react';
import { FaTimes, FaPlus, FaTrash } from 'react-icons/fa';
import '../../../styles/CreateProjectForm.css';
import CreateProjectHeader from './CreateProjectHeader';
import PropTypes from 'prop-types';

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
  'Cybersecurity': ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'Security Analysis'],
  'Soft Skills': [
    'Communication',
    'Leadership',
    'Teamwork',
    'Creativity',
    'Problem Solving',
    'Critical Thinking',
    'Adaptability',
    'Time Management',
    'Conflict Resolution',
    'Emotional Intelligence',
    'Collaboration',
    'Work Ethic',
    'Attention to Detail',
    'Decision Making',
    'Interpersonal Skills'
  ]
};

const PROJECT_TYPES = [
  'Academic',
  'Personal',
  'Startup',
  'Research',
  'Open Source'
];

const SUGGESTED_SKILLS = [
  'Python', 'React', 'Next.js', 'Node.js', 'UI/UX Design', 'Figma', 'Java', 'C++', 'Communication', 'Leadership', 'Teamwork', 'Creativity', 'SQL', 'AWS', 'Docker', 'Kubernetes', 'TypeScript', 'HTML', 'CSS', 'JavaScript'
];

const CreateProjectForm = ({ onClose, onSubmit }) => {
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

  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState([]);
  const [showSkillDropdown, setShowSkillDropdown] = useState(false);
  const skillInputRef = useRef(null);

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

  const addSkill = (skill) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
    setSkillInput('');
    setShowSkillDropdown(false);
    skillInputRef.current?.focus();
  };

  const removeSkill = (skill) => setSkills(skills.filter(s => s !== skill));

  const handleSkillInput = (e) => {
    setSkillInput(e.target.value);
    setShowSkillDropdown(true);
  };

  const handleSkillKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && skillInput.trim()) {
      e.preventDefault();
      addSkill(skillInput.trim());
    } else if (e.key === 'Backspace' && !skillInput && skills.length) {
      removeSkill(skills[skills.length - 1]);
    }
  };

  const filteredSkills = SUGGESTED_SKILLS.filter(s => s.toLowerCase().includes(skillInput.toLowerCase()) && !skills.includes(s));

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
        <CreateProjectHeader onPostProject={onSubmit} />
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
              onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
              placeholder="e.g. Smart Home Automation"
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
                        {DOMAIN_OPTIONS.map((domain) => (
                          <option key={domain} value={domain}>{domain}</option>
                        ))}
                        <option value="Soft Skills">Soft Skills</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>SkillSet</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g., Python, React, UX Design"
                        value={skillInput}
                        onChange={handleSkillInput}
                        onKeyDown={handleSkillKeyDown}
                        ref={skillInputRef}
                      />
                      {showSkillDropdown && filteredSkills.length > 0 && (
                        <div className="skill-dropdown">
                          {filteredSkills.map((skill) => (
                            <div
                              key={skill}
                              className="skill-suggestion"
                              onMouseDown={() => addSkill(skill)}
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="skill-tags">
                        {skills.map((skill) => (
                          <span className="skill-tag" key={skill} onClick={() => removeSkill(skill)}>
                            {skill} <FaTimes className="remove-skill-icon" />
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
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              min="1"
              required
            />
          </div>

          <div className="form-group">
            <label>Project Type</label>
            <select
              className="form-input"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              required
            >
              <option value="">Select Project Type</option>
              {PROJECT_TYPES.map((type) => (
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
            />
          </div>

          <button type="submit" className="submit-project-btn">Create Project</button>
        </form>
      </div>
    </div>
  );
};

CreateProjectForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CreateProjectForm; 