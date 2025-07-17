import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { UserService } from "../../../shared/services";
import { LOADING_DELAYS } from "../../../shared/constants";
export const useFeedData = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  const [communities, setCommunities] = useState([]);
  const [isCommunitiesLoading, setIsCommunitiesLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [discussions, setDiscussions] = useState([]);
  const [isFeedLoading, setIsFeedLoading] = useState(true);
  const [peopleRecommendations, setPeopleRecommendations] = useState([]);
  const [isPeopleLoading, setIsPeopleLoading] = useState(true);
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [isTrendingLoading, setIsTrendingLoading] = useState(true);
  const [showProjectForm, setShowProjectForm] = useState(false);
  useEffect(() => {
    const localProfile = UserService.getLocalProfile();
    if (!localProfile) {
      navigate("/onboarding/basic-info", { replace: true });
      return;
    }
    setProfile(localProfile);
    setIsProfileLoading(false);
  }, [navigate]);
  useEffect(() => {
    if (!profile) return;
    setTimeout(() => {
      setCommunities([
        {
          id: 1,
          name: "AI Enthusiasts",
          category: "Machine Learning",
          members: 128,
        },
        { id: 2, name: "Web Developers", category: "Front-end", members: 42 },
        { id: 3, name: "VIT Alumni", category: "VIT", members: 256 },
        {
          id: 4,
          name: "Data Scientists",
          category: "Data Science",
          members: 128,
        },
      ]);
      setIsCommunitiesLoading(false);
    }, LOADING_DELAYS.COMMUNITIES);
    setTimeout(() => {
      const existingProjects = JSON.parse(
        localStorage.getItem("user_projects") || "[]",
      );
      const defaultProjects = [
        {
          id: 1,
          author: {
            username: profile.username,
            location: profile.organization,
            avatar: null,
          },
          title: "Capstone Project",
          image: null,
          postedAt: "Just now",
          likes: 0,
          comments: 0,
        },
      ];
      setProjects([...existingProjects, ...defaultProjects]);
      setDiscussions([
        {
          id: 1,
          author: {
            username: profile.username,
            location: profile.city,
            avatar: null,
          },
          title: "My Onboarding Experience",
          content: "Excited to share how CollaBro jump-started my journey!",
          postedAt: "Just now",
        },
      ]);
      setIsFeedLoading(false);
    }, LOADING_DELAYS.FEED);
    setTimeout(() => {
      setPeopleRecommendations([
        {
          id: 1,
          username: "peerCoder",
          profession: profile.category,
          location: profile.organization,
          avatar: null,
        },
      ]);
      setIsPeopleLoading(false);
    }, LOADING_DELAYS.PEOPLE);
    setTimeout(() => {
      const topics =
        profile.domains?.map((d, i) => ({
          id: i + 1,
          title: d,
          subtitle: `Explore ${d}`,
          avatar: null,
        })) || [];
      setTrendingTopics(topics);
      setIsTrendingLoading(false);
    }, LOADING_DELAYS.TRENDING);
  }, [profile]);
  const handleJoinCommunity = useCallback((id) => {
    console.log(`Joined community ${id}`);
  }, []);
  const handleConnectPerson = useCallback((id) => {
    console.log(`Connection requested to ${id}`);
  }, []);
  const handlePostInteraction = useCallback((postId, type) => {
    console.log(`${type} on post ${postId}`);
  }, []);
  const handleCreatePost = useCallback((data) => {
    console.log("Creating post:", data);
  }, []);
  const handleShowProjectForm = useCallback(() => setShowProjectForm(true), []);
  const handleCloseProjectForm = useCallback(
    () => setShowProjectForm(false),
    [],
  );
  const handleProjectSubmit = useCallback(
    (data) => {
      console.log("Creating project:", data);
      const newProject = {
        id: Date.now(),
        author: {
          username: profile?.username || "user",
          location: profile?.organization || "Unknown",
          avatar: profile?.avatar || null,
        },
        title: data.projectName,
        description: data.description,
        collaborators: data.collaborators,
        duration: data.duration,
        projectType: data.projectType,
        references: data.references,
        image: null,
        postedAt: "Just now",
        likes: 0,
        comments: 0,
        timestamp: data.timestamp,
      };
      setProjects((prev) => [newProject, ...prev]);
      const existingProjects = JSON.parse(
        localStorage.getItem("user_projects") || "[]",
      );
      const updatedProjects = [newProject, ...existingProjects];
      localStorage.setItem("user_projects", JSON.stringify(updatedProjects));
      setShowProjectForm(false);
    },
    [profile],
  );
  return {
    profile,
    isProfileLoading,
    communities,
    isCommunitiesLoading,
    projects,
    discussions,
    isFeedLoading,
    peopleRecommendations,
    isPeopleLoading,
    trendingTopics,
    isTrendingLoading,
    showProjectForm,
    handleJoinCommunity,
    handleConnectPerson,
    handlePostInteraction,
    handleCreatePost,
    handleShowProjectForm,
    handleCloseProjectForm,
    handleProjectSubmit,
  };
};
