import { apiClient } from './api';
import { API_ENDPOINTS, STORAGE_KEYS } from '../constants';
export class UserService {
static async getProfile(userId) {
try {
return await apiClient.get(`${API_ENDPOINTS.USERS}/${userId}`);
} catch (error) {
console.error('Failed to fetch user profile:', error);
return { data: null, error: error.message };
}
}
static async updateProfile(userId, profileData) {
try {
return await apiClient.put(`${API_ENDPOINTS.USERS}/${userId}`, profileData);
} catch (error) {
console.error('Failed to update profile:', error);
throw error;
}
}
static getLocalProfile() {
try {
const fullName = localStorage.getItem(STORAGE_KEYS.FULL_NAME);
const currentCity = localStorage.getItem(STORAGE_KEYS.CURRENT_CITY);
const organization = localStorage.getItem(STORAGE_KEYS.ORGANIZATION);
const category = localStorage.getItem(STORAGE_KEYS.CATEGORY);
const domains = JSON.parse(localStorage.getItem(STORAGE_KEYS.DOMAINS) || '[]');
const resumeData = JSON.parse(localStorage.getItem(STORAGE_KEYS.RESUME) || '{}');
if (!fullName || !currentCity || !organization || !category || domains.length === 0 || !resumeData.url) {
return null;
}
return {
username: fullName.replace(/\s+/g, '').toLowerCase(),
fullName,
city: currentCity,
organization,
category,
domains,
avatar: null
};
} catch (error) {
console.error('Failed to get local profile:', error);
return null;
}
}
static async connectUser(userId) {
try {
return await apiClient.post(`${API_ENDPOINTS.USERS}/${userId}/connect`);
} catch (error) {
console.error('Failed to connect user:', error);
throw error;
}
}
}