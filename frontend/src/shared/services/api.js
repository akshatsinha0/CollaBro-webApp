class ApiClient {
constructor(baseURL = '') {
this.baseURL = baseURL;
this.defaultHeaders = {
'Content-Type': 'application/json'
};
}
async request(endpoint, options = {}) {
const url = `${this.baseURL}${endpoint}`;
const config = {
headers: { ...this.defaultHeaders, ...options.headers },
...options
};
try {
const response = await fetch(url, config);
if (!response.ok) {
throw new Error(`HTTP error! status: ${response.status}`);
}
return await response.json();
} catch (error) {
console.error('API request failed:', error);
throw error;
}
}
async get(endpoint, params = {}) {
const queryString = new URLSearchParams(params).toString();
const url = queryString ? `${endpoint}?${queryString}` : endpoint;
return this.request(url, { method: 'GET' });
}
async post(endpoint, data) {
return this.request(endpoint, {
method: 'POST',
body: JSON.stringify(data)
});
}
async put(endpoint, data) {
return this.request(endpoint, {
method: 'PUT',
body: JSON.stringify(data)
});
}
async delete(endpoint) {
return this.request(endpoint, { method: 'DELETE' });
}
}
export const apiClient = new ApiClient();