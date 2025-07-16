import React, { useState, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { FaImage, FaVideo, FaLink, FaPlus } from 'react-icons/fa';
import { Card, Button, Avatar } from '../../../../design-system/atoms';
import styles from './CreatePostForm.module.css';
const CreatePostForm = memo(({ user, onCreatePost, onShowProjectForm }) => {
const [content, setContent] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
const handleSubmit = useCallback(async (e) => {
e.preventDefault();
if (!content.trim() || isSubmitting) return;
setIsSubmitting(true);
try {
await onCreatePost({
content: content.trim(),
timestamp: new Date().toISOString()
});
setContent('');
} catch (error) {
console.error('Failed to create post:', error);
} finally {
setIsSubmitting(false);
}
}, [content, isSubmitting, onCreatePost]);
const handleContentChange = useCallback((e) => {
setContent(e.target.value);
}, []);
const handleShowProjectForm = useCallback(() => {
onShowProjectForm?.();
}, [onShowProjectForm]);
return (
<Card className={styles.card}>
<form onSubmit={handleSubmit} className={styles.form}>
<div className={styles.inputContainer}>
<Avatar
src={user?.avatar}
name={user?.username}
size="md"
className={styles.avatar}
/>
<textarea
className={styles.textarea}
placeholder="Share your project idea..."
value={content}
onChange={handleContentChange}
rows={2}
disabled={isSubmitting}
/>
</div>
<div className={styles.actions}>
<div className={styles.attachments}>
<Button type="button" variant="ghost" className={styles.attachmentButton}>
<FaImage />
Photo
</Button>
<Button type="button" variant="ghost" className={styles.attachmentButton}>
<FaVideo />
Video
</Button>
<Button type="button" variant="ghost" className={styles.attachmentButton}>
<FaLink />
Link
</Button>
<Button
type="button"
variant="ghost"
onClick={handleShowProjectForm}
className={styles.attachmentButton}
>
<FaPlus />
Create Project
</Button>
</div>
<Button
type="submit"
variant="primary"
disabled={!content.trim() || isSubmitting}
className={styles.postButton}
>
{isSubmitting ? 'Posting...' : 'Post'}
</Button>
</div>
</form>
</Card>
);
});
CreatePostForm.displayName = 'CreatePostForm';
CreatePostForm.propTypes = {
user: PropTypes.shape({
avatar: PropTypes.string,
username: PropTypes.string
}),
onCreatePost: PropTypes.func.isRequired,
onShowProjectForm: PropTypes.func
};
export default CreatePostForm;