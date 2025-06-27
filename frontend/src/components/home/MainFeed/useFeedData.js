import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useFeedData() {
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
    const fullName     = localStorage.getItem('onboard_fullName');
    const currentCity  = localStorage.getItem('onboard_currentCity');
    const organization = localStorage.getItem('onboard_organization');
    const category     = localStorage.getItem('onboard_category');
    const domains      = JSON.parse(localStorage.getItem('onboard_domains') || '[]');
    const resumeData   = JSON.parse(localStorage.getItem('onboard_resume') || '{}');

    if (!fullName || !currentCity || !organization || !category || domains.length === 0 || !resumeData.url) {
      navigate('/onboarding/basic-info', { replace: true });
      return;
    }

    setProfile({
      username: fullName.replace(/\s+/g, '').toLowerCase(),
      fullName,
      city: currentCity,
      organization,
      category,
      domains,
      avatar: null
    });
    setIsProfileLoading(false);
  }, [navigate]);

  
  useEffect(() => {
    setTimeout(() => {
      setCommunities([
        { id: 1, name: 'AI Enthusiasts', category: 'Machine Learning', members: 128 },
        { id: 2, name: 'Web Developers', category: 'Front-end', members: 42 },
        { id: 3, name: 'VIT Alumni', category: 'VIT', members: 256 },
        { id: 4, name: 'Data Scientists', category: 'Data Science', members: 128 }
      ]);
      setIsCommunitiesLoading(false);
    }, 800);

    setTimeout(() => {
      setProjects([
        {
          id: 1,
          author: {
            username: profile?.username,
            location: profile?.organization,
            avatar: null
          },
          title: 'Capstone Project',
          image: null,
          postedAt: 'Just now',
          likes: 0,
          comments: 0
        }
      ]);
      setDiscussions([
        {
          id: 1,
          author: {
            username: profile?.username,
            location: profile?.city,
            avatar: null
          },
          title: 'My Onboarding Experience',
          content: 'Excited to share how CollaBro jump-started my journey!',
          postedAt: 'Just now'
        }
      ]);
      setIsFeedLoading(false);
    }, 1000);

    setTimeout(() => {
      setPeopleRecommendations([
        {
          id: 1,
          username: 'peerCoder',
          profession: profile?.category,
          location: profile?.organization,
          avatar: null
        }
      ]);
      setIsPeopleLoading(false);
    }, 900);

    setTimeout(() => {
      const topics = profile?.domains?.map((d, i) => ({
        id: i + 1,
        title: d,
        subtitle: `Explore ${d}`,
        avatar: null
      })) || [];
      setTrendingTopics(topics);
      setIsTrendingLoading(false);
    }, 700);
  }, [profile]);

  
  const handleJoinCommunity = (id) => {
    console.log(`Joined community ${id}`);
  };
  const handleConnectPerson = (id) => {
    console.log(`Connection requested to ${id}`);
  };
  const handlePostInteraction = (postId, type) => {
    console.log(`${type} on post ${postId}`);
  };
  const handleCreatePost = (data) => {
    console.log('Creating post:', data);
  };
  const handleShowProjectForm = () => setShowProjectForm(true);
  const handleCloseProjectForm = () => setShowProjectForm(false);
  const handleProjectSubmit = (data) => {
    console.log('Creating project:', data);
    setShowProjectForm(false);
  };

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
    handleProjectSubmit
  };
} 