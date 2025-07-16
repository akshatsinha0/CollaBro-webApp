import { apiClient } from './api';
import { API_ENDPOINTS } from '../constants';
export class FeedService {
static async getPosts(params = {}) {
try {
return await apiClient.get(API_ENDPOINTS.FEED, params);
} catch (error) {
console.error('Failed to fetch posts:', error);
return { data: [], error: error.message };
}
}
static async createPost(postData) {
try {
return await apiClient.post(API_ENDPOINTS.FEED, postData);
} catch (error) {
console.error('Failed to create post:', error);
throw error;
}
}
static async updatePost(postId, updateData) {
try {
return await apiClient.put(`${API_ENDPOINTS.FEED}/${postId}`, updateData);
} catch (error) {
console.error('Failed to update post:', error);
throw error;
}
}
static async deletePost(postId) {
try {
return await apiClient.delete(`${API_ENDPOINTS.FEED}/${postId}`);
} catch (error) {
console.error('Failed to delete post:', error);
throw error;
}
}
static async likePost(postId) {
try {
return await apiClient.post(`${API_ENDPOINTS.FEED}/${postId}/like`);
} catch (error) {
console.error('Failed to like post:', error);
throw error;
}
}
}