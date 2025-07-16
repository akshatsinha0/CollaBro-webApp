import React, { useState, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { Button, Input } from '../../../../design-system/atoms';
import styles from './CreateProjectForm.module.css';
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
const CreateProjectForm = memo(({ onClose, onSubmit }) => {
const [formData, setFormData] = useState({
projectName: '',
description: '',
collaborators: [{
id: 1,
domain: '',
skills: []
}],
duration: 1,
projectType: '',
references: []
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [errors, setErrors] = useState({});
const handleInputChange = useCallback((field, value) => {
setFormData(prev => ({
...prev,
[field]: value
}));
if (errors[field]) {
setErrors(prev => ({
...prev,
[field]: ''
}));
}
}, [errors]);
const handleDomainChange = useCallback((collaboratorId, domain) => {
setFormData(prev => ({
...prev,
collaborators: prev.collaborators.map(collab => 
collab.id === collaboratorId ? { ...collab, domain, skills: [] } : collab
)
}));
}, []);
const handleSkillSelect = useCallback((collaboratorId, skill) => {
if (!skill) return;
setFormData(prev => ({
...prev,
collaborators: prev.collaborators.map(collab => 
collab.id === collaboratorId ? 
{ ...collab, skills: [...collab.skills, skill] } : collab
)
}));
}, []);
const removeSkill = useCallback((collaboratorId, skill) => {
setFormData(prev => ({
...prev,
collaborators: prev.collaborators.map(collab => 
collab.id === collaboratorId ? 
{ ...collab, skills: collab.skills.filter(s => s !== skill) } : collab
)
}));
}, []);
const addCollaborator = useCallback(() => {
setFormData(prev => ({
...prev,
collaborators: [...prev.collaborators, {
id: prev.collaborators.length + 1,
domain: '',
skills: []
}]
}));
}, []);
const removeCollaborator = useCallback((collaboratorId) => {
if (formData.collaborators.length > 1) {
setFormData(prev => ({
...prev,
collaborators: prev.collaborators.filter(collab => collab.id !== collaboratorId)
}));
}
}, [formData.collaborators.length]);
const handleFileUpload = useCallback((event) => {
const files = Array.from(event.target.files);
setFormData(prev => ({
...prev,
references: [...prev.references, ...files]
}));
}, []);
const validateForm = useCallback(() => {
const newErrors = {};
if (!formData.projectName.trim()) {
newErrors.projectName = 'Project name is required';
}
if (!formData.description.trim()) {
newErrors.description = 'Project description is required';
}
if (!formData.projectType) {
newErrors.projectType = 'Project type is required';
}
formData.collaborators.forEach((collab, index) => {
if (!collab.domain) {
newErrors[`collaborator_${index}_domain`] = 'Domain is required';
}
});
setErrors(newErrors);
return Object.keys(newErrors).length === 0;
}, [formData]);
const handleSubmit = useCallback(async (e) => {
e.preventDefault();
if (!validateForm() || isSubmitting) return;
setIsSubmitting(true);
try {
await onSubmit({
...formData,
timestamp: new Date().toISOString()
});
} catch (error) {
console.error('Failed to create project:', error);
} finally {
setIsSubmitting(false);
}
}, [formData, validateForm, isSubmitting, onSubmit]);
return (
<form onSubmit={handleSubmit} className={styles.form}>
<div className={styles.formGroup}>
<label className={styles.label}>Project Name</label>
<Input
type="text"
placeholder="Enter project name"
value={formData.projectName}
onChange={(e) => handleInputChange('projectName', e.target.value)}
error={errors.projectName}
disabled={isSubmitting}
className={styles.input}
/>
</div>
<div className={styles.formGroup}>
<label className={styles.label}>Description</label>
<textarea
className={styles.textarea}
placeholder="Describe your project..."
value={formData.description}
onChange={(e) => handleInputChange('description', e.target.value)}
rows={4}
disabled={isSubmitting}
/>
{errors.description && (
<span className={styles.error}>{errors.description}</span>
)}
</div>
<div className={styles.collaboratorsSection}>
<div className={styles.sectionHeader}>
<h3 className={styles.sectionTitle}>Collaborators</h3>
<Button
type="button"
variant="secondary"
onClick={addCollaborator}
className={styles.addButton}
disabled={isSubmitting}
>
<FaPlus /> Add Collaborator
</Button>
</div>
<div className={styles.collaboratorsContainer}>
{formData.collaborators.map((collaborator, index) => (
<div key={collaborator.id} className={styles.collaboratorCard}>
<div className={styles.collaboratorHeader}>
<h4 className={styles.collaboratorTitle}>Collaborator {index + 1}</h4>
{formData.collaborators.length > 1 && (
<Button
type="button"
variant="ghost"
onClick={() => removeCollaborator(collaborator.id)}
className={styles.removeButton}
disabled={isSubmitting}
>
<FaTrash />
</Button>
)}
</div>
<div className={styles.collaboratorContent}>
<div className={styles.formGroup}>
<label className={styles.label}>Domain</label>
<select
className={styles.select}
value={collaborator.domain}
onChange={(e) => handleDomainChange(collaborator.id, e.target.value)}
disabled={isSubmitting}
>
<option value="">Select Domain</option>
{DOMAIN_OPTIONS.map(domain => (
<option key={domain} value={domain}>{domain}</option>
))}
</select>
{errors[`collaborator_${index}_domain`] && (
<span className={styles.error}>{errors[`collaborator_${index}_domain`]}</span>
)}
</div>
<div className={styles.formGroup}>
<label className={styles.label}>Skills</label>
<select
className={styles.select}
value=""
onChange={(e) => handleSkillSelect(collaborator.id, e.target.value)}
disabled={!collaborator.domain || isSubmitting}
>
<option value="">Select Skills</option>
{collaborator.domain && SKILLS_MAP[collaborator.domain]?.map(skill => (
<option key={skill} value={skill}>{skill}</option>
))}
</select>
<div className={styles.tagsContainer}>
{collaborator.skills.map(skill => (
<span key={skill} className={styles.tag}>
{skill}
<button 
type="button" 
onClick={() => removeSkill(collaborator.id, skill)}
className={styles.tagRemove}
disabled={isSubmitting}
>
×
</button>
</span>
))}
</div>
</div>
</div>
</div>
))}
</div>
</div>
<div className={styles.formRow}>
<div className={styles.formGroup}>
<label className={styles.label}>Duration (months)</label>
<Input
type="number"
min="1"
value={formData.duration}
onChange={(e) => handleInputChange('duration', parseInt(e.target.value))}
disabled={isSubmitting}
className={styles.input}
/>
</div>
<div className={styles.formGroup}>
<label className={styles.label}>Project Type</label>
<select
className={styles.select}
value={formData.projectType}
onChange={(e) => handleInputChange('projectType', e.target.value)}
disabled={isSubmitting}
>
<option value="">Select Project Type</option>
{PROJECT_TYPES.map(type => (
<option key={type} value={type}>{type}</option>
))}
</select>
{errors.projectType && (
<span className={styles.error}>{errors.projectType}</span>
)}
</div>
</div>
<div className={styles.formGroup}>
<label className={styles.label}>References (Optional)</label>
<input
type="file"
className={styles.fileInput}
multiple
onChange={handleFileUpload}
accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
disabled={isSubmitting}
/>
<div className={styles.fileList}>
{formData.references.map((file, index) => (
<div key={index} className={styles.fileItem}>
{file.name}
</div>
))}
</div>
</div>
<div className={styles.actions}>
<Button
type="button"
variant="secondary"
onClick={onClose}
disabled={isSubmitting}
>
Cancel
</Button>
<Button
type="submit"
variant="primary"
disabled={isSubmitting}
>
{isSubmitting ? 'Creating...' : 'Create Project'}
</Button>
</div>
</form>
);
});
CreateProjectForm.displayName = 'CreateProjectForm';
CreateProjectForm.propTypes = {
onClose: PropTypes.func.isRequired,
onSubmit: PropTypes.func.isRequired
};
export default CreateProjectForm;