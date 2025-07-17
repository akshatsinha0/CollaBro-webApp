import { apiClient } from "./api";
import { API_ENDPOINTS } from "../constants";
export class CommunityService {
  static async getCommunities(params = {}) {
    try {
      return await apiClient.get(API_ENDPOINTS.COMMUNITIES, params);
    } catch (error) {
      console.error("Failed to fetch communities:", error);
      return { data: [], error: error.message };
    }
  }
  static async joinCommunity(communityId) {
    try {
      return await apiClient.post(
        `${API_ENDPOINTS.COMMUNITIES}/${communityId}/join`,
      );
    } catch (error) {
      console.error("Failed to join community:", error);
      throw error;
    }
  }
  static async leaveCommunity(communityId) {
    try {
      return await apiClient.delete(
        `${API_ENDPOINTS.COMMUNITIES}/${communityId}/leave`,
      );
    } catch (error) {
      console.error("Failed to leave community:", error);
      throw error;
    }
  }
}
