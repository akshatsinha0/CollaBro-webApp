import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import { FaSearch, FaBell, FaUserCircle, FaChevronDown, FaRegHeart, FaRegCommentAlt, FaShareAlt, FaFire, FaInbox } from "react-icons/fa";
import '../styles/MainFeed.css';

function MainFeed() {
  // State for user profile
  const [profile, setProfile] = useState(null);
  const [isProfileLoading, setIsProfileLoading] = useState(true);

  // State for communities
  const [communities, setCommunities] = useState([]);
  const [isCommunitiesLoading, setIsCommunitiesLoading] = useState(true);

  // State for projects feed
  const [projects, setProjects] = useState([]);
  const [discussions, setDiscussions] = useState([]);
  const [isFeedLoading, setIsFeedLoading] = useState(true);

  // State for people you may know
  const [peopleRecommendations, setPeopleRecommendations] = useState([]);
  const [isPeopleLoading, setIsPeopleLoading] = useState(true);

  // State for trending topics
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [isTrendingLoading, setIsTrendingLoading] = useState(true);

  useEffect(() => {
    // Fetch user profile data
    const fetchProfile = async () => {
      try {
        // In a real implementation, this would be an API call
        // const response = await fetch('/api/profile');
        // const data = await response.json();
        
        // Simulating API delay
        setTimeout(() => {
          setProfile({
            username: 'johnDoe',
            fullName: 'John Doe',
            avatar: null,
            stats: {
              connections: 2500,
              projects: 28
            }
          });
          setIsProfileLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setIsProfileLoading(false);
      }
    };

    // Fetch communities
    const fetchCommunities = async () => {
      try {
        // Simulating API call
        setTimeout(() => {
          setCommunities([
            { id: 1, name: 'AI Enthusiasts', category: 'Machine Learning', members: 128 },
            { id: 2, name: 'Web Developers', category: 'Machine Learning', members: 42 },
            { id: 3, name: 'VIT Alumni', category: 'VIT', members: 256 },
            { id: 4, name: 'Data Scientists', category: 'Machine Learning', members: 128 }
          ]);
          setIsCommunitiesLoading(false);
        }, 1200);
      } catch (error) {
        console.error('Error fetching communities:', error);
        setIsCommunitiesLoading(false);
      }
    };

    // Fetch feed (projects and discussions)
    const fetchFeed = async () => {
      try {
        // Simulating API call
        setTimeout(() => {
          setProjects([
            {
              id: 1,
              author: {
                username: 'techGuru',
                location: 'MIT, Boston',
                avatar: null
              },
              title: 'AI-Powered Health Monitoring',
              image: null,
              postedAt: '2d ago',
              likes: 45,
              comments: 12
            }
          ]);
          
          setDiscussions([
            {
              id: 1,
              author: {
                username: 'dataWizard',
                location: 'Stanford University',
                avatar: null
              },
              title: 'The Future of Machine Learning',
              content: 'Collaborate with us and join now for more brainrot content.',
              postedAt: '2d ago'
            }
          ]);
          
          setIsFeedLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Error fetching feed:', error);
        setIsFeedLoading(false);
      }
    };

    // Fetch people recommendations
    const fetchPeopleRecommendations = async () => {
      try {
        // Simulating API call
        setTimeout(() => {
          setPeopleRecommendations([
            { id: 1, username: 'sarahCoder', profession: 'Student', location: 'VIT Vellore', avatar: null },
            { id: 2, username: 'markDev', profession: 'Student', location: 'VIT Vellore', avatar: null }
          ]);
          setIsPeopleLoading(false);
        }, 1300);
      } catch (error) {
        console.error('Error fetching people recommendations:', error);
        setIsPeopleLoading(false);
      }
    };

    // Fetch trending topics
    const fetchTrendingTopics = async () => {
      try {
        // Simulating API call
        setTimeout(() => {
          setTrendingTopics([
            { id: 1, title: 'Artificial Intelligence', subtitle: 'Apni apni rai rakhiye', avatar: null },
            { id: 2, title: 'Momo ka Thela', subtitle: 'Delhi 2014 ki baat palat ke', avatar: null },
            { id: 3, title: 'Instagram Influencer', subtitle: 'Zindagi banani hai toh ban jaao', avatar: null },
            { id: 4, title: 'Reyansh College of KM', subtitle: 'Admission is in full swing', avatar: null },
            { id: 5, title: '2 rupay ki pepsi', subtitle: 'Aaj bhi yaad aati hai', avatar: null }
          ]);
          setIsTrendingLoading(false);
        }, 1100);
      } catch (error) {
        console.error('Error fetching trending topics:', error);
        setIsTrendingLoading(false);
      }
    };

    // Call all the fetch functions
    fetchProfile();
    fetchCommunities();
    fetchFeed();
    fetchPeopleRecommendations();
    fetchTrendingTopics();
  }, []);

  // Handler for joining a community
  const handleJoinCommunity = async (communityId) => {
    try {
      // In a real implementation, this would be an API call
      // await fetch(`/api/communities/${communityId}/join`, { method: 'POST' });
      
      // Update local state to reflect the change
      console.log(`Joined community ${communityId}`);
      // You would typically update the communities list or user's joined communities here
    } catch (error) {
      console.error('Error joining community:', error);
    }
  };

  // Handler for connecting with a person
  const handleConnectPerson = async (personId) => {
    try {
      // In a real implementation, this would be an API call
      // await fetch(`/api/connections/request`, { 
      //   method: 'POST',
      //   body: JSON.stringify({ personId })
      // });
      
      console.log(`Connection request sent to ${personId}`);
      // You would typically update the UI to show pending status or remove from recommendations
    } catch (error) {
      console.error('Error connecting with person:', error);
    }
  };

  // Handler for post interactions (like, comment, share)
  const handlePostInteraction = async (postId, interactionType) => {
    try {
      // In a real implementation, this would be an API call
      // await fetch(`/api/posts/${postId}/${interactionType}`, { method: 'POST' });
      
      console.log(`${interactionType} on post ${postId}`);
      // You would typically update the post in the UI to reflect the interaction
    } catch (error) {
      console.error(`Error with ${interactionType} interaction:`, error);
    }
  };

  return (
    <div className="main-feed">
      <Navbar />
      
      <div className="feed-layout">
        {/* Left Sidebar */}
        <div className="left-sidebar">
          {/* Profile Card */}
          <div className="card profile-card">
            {isProfileLoading ? (
              // Loading state for profile
              <div>
                <div className="profile-header">
                  <div className="loading-placeholder" style={{ width: '24px', height: '24px' }}></div>
                </div>
                <div className="profile-content">
                  <div className="loading-placeholder" style={{ width: '96px', height: '96px', borderRadius: '50%' }}></div>
                  <div className="loading-placeholder" style={{ width: '80px', height: '14px', marginTop: '8px' }}></div>
                  <div className="loading-placeholder" style={{ width: '100px', height: '18px', marginTop: '4px' }}></div>
                </div>
                <div className="profile-stats">
                  <div className="stat-item">
                    <div className="loading-placeholder" style={{ width: '40px', height: '20px' }}></div>
                    <div className="loading-placeholder" style={{ width: '60px', height: '12px', marginTop: '4px' }}></div>
                  </div>
                  <div className="stat-item">
                    <div className="loading-placeholder" style={{ width: '40px', height: '20px' }}></div>
                    <div className="loading-placeholder" style={{ width: '60px', height: '12px', marginTop: '4px' }}></div>
                  </div>
                </div>
              </div>
            ) : profile ? (
              // Populated profile view
              <>
                <div className="profile-header">
                  <button className="menu-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
                <div className="profile-content">
                  <div className="avatar">{profile.avatar}</div>
                  <p className="username">@{profile.username}</p>
                  <h2 className="fullname">{profile.fullName}</h2>
                </div>
                <div className="profile-stats">
                  <div className="stat-item">
                    <p className="stat-value">{profile.stats.connections.toLocaleString()}</p>
                    <p className="stat-label">Connections</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-value">{profile.stats.projects}</p>
                    <p className="stat-label">Projects</p>
                  </div>
                </div>
                <div className="profile-reach">
                  <p>Profile Reach</p>
                </div>
              </>
            ) : (
              // Error or empty state
              <div className="empty-state">
                <FaUserCircle className="empty-state-icon" />
                <p className="empty-state-text">Could not load profile data.</p>
                <button className="empty-state-button">Retry</button>
              </div>
            )}
          </div>

          {/* Communities */}
          <div className="card communities-card">
            <div className="card-header">
              <h2 className="card-title">Communities</h2>
              <div className="card-actions">
                <button className="icon-button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="icon-button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>
            
            {isCommunitiesLoading ? (
              // Loading state for communities
              Array(4).fill(0).map((_, index) => (
                <div className="community-item" key={index}>
                  <div className="community-info">
                    <div className="loading-placeholder" style={{ width: '32px', height: '32px', borderRadius: '50%' }}></div>
                    <div>
                      <div className="loading-placeholder" style={{ width: '80px', height: '14px' }}></div>
                      <div className="loading-placeholder" style={{ width: '120px', height: '12px', marginTop: '4px' }}></div>
                    </div>
                  </div>
                  <div className="loading-placeholder" style={{ width: '24px', height: '24px' }}></div>
                </div>
              ))
            ) : communities.length > 0 ? (
              // Populated communities view
              communities.map((community) => (
                <div className="community-item" key={community.id}>
                  <div className="community-info">
                    <div className="community-avatar"></div>
                    <div>
                      <p className="community-name">{community.name}</p>
                      <p className="community-details">{community.category} - {community.members} members</p>
                    </div>
                  </div>
                  <button 
                    className="add-button"
                    onClick={() => handleJoinCommunity(community.id)}
                  >
                    +
                  </button>
                </div>
              ))
            ) : (
              // Empty state
              <div className="empty-state">
                <FaUserCircle className="empty-state-icon" />
                <p className="empty-state-text">No communities found.</p>
                <button className="empty-state-button">Explore Communities</button>
              </div>
            )}
            
            {communities.length > 0 && (
              <button className="show-all-button">Show all</button>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {isFeedLoading ? (
            // Loading state for feed
            <>
              <div className="card project-card">
                <div className="card-user-header">
                  <div className="user-info">
                    <div className="loading-placeholder" style={{ width: '40px', height: '40px', borderRadius: '50%' }}></div>
                    <div>
                      <div className="loading-placeholder" style={{ width: '80px', height: '14px' }}></div>
                      <div className="loading-placeholder" style={{ width: '120px', height: '12px', marginTop: '4px' }}></div>
                    </div>
                  </div>
                  <div className="loading-placeholder" style={{ width: '24px', height: '24px' }}></div>
                </div>
                <div className="loading-placeholder" style={{ width: '200px', height: '18px', marginBottom: '12px' }}></div>
                <div className="loading-placeholder" style={{ width: '100%', height: '256px', borderRadius: '8px', marginBottom: '16px' }}></div>
              </div>

              <div className="card discussion-card">
                <div className="card-user-header">
                  <div className="user-info">
                    <div className="loading-placeholder" style={{ width: '40px', height: '40px', borderRadius: '50%' }}></div>
                    <div>
                      <div className="loading-placeholder" style={{ width: '80px', height: '14px' }}></div>
                      <div className="loading-placeholder" style={{ width: '120px', height: '12px', marginTop: '4px' }}></div>
                    </div>
                  </div>
                  <div className="loading-placeholder" style={{ width: '24px', height: '24px' }}></div>
                </div>
                <div className="loading-placeholder" style={{ width: '200px', height: '18px', marginBottom: '12px' }}></div>
                <div className="loading-placeholder" style={{ width: '100%', height: '80px', borderRadius: '8px' }}></div>
              </div>
            </>
          ) : (
            // Populated feed
            <>
              {projects.length > 0 ? projects.map(project => (
                <div className="card project-card" key={project.id}>
                  <div className="card-user-header">
                    <div className="user-info">
                      <div className="user-avatar"></div>
                      <div>
                        <p className="user-name">@{project.author.username}</p>
                        <p className="user-details">{project.author.location}, {project.postedAt}</p>
                      </div>
                    </div>
                    <button className="options-button">
                      <svg xmlns="http://www.w3.org/2000/svg" className="options-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                  <h2 className="project-title">{project.title}</h2>
                  <div className="project-image"></div>
                  <div className="project-actions">
                    <div className="action-buttons">
                      <button 
                        className="action-button"
                        onClick={() => handlePostInteraction(project.id, 'like')}
                      >
                        <FaRegHeart className="action-icon" />
                      </button>
                      <button 
                        className="action-button"
                        onClick={() => handlePostInteraction(project.id, 'comment')}
                      >
                        <FaRegCommentAlt className="action-icon" />
                      </button>
                      <button 
                        className="action-button"
                        onClick={() => handlePostInteraction(project.id, 'share')}
                      >
                        <FaShareAlt className="action-icon" />
                      </button>
                    </div>
                    <div className="project-tags"></div>
                  </div>
                </div>
              )) : (
                <div className="card empty-state">
                  <FaInbox className="empty-state-icon" />
                  <p className="empty-state-text">No projects in your feed yet.</p>
                  <button className="empty-state-button">Explore Projects</button>
                </div>
              )}

              {discussions.length > 0 ? discussions.map(discussion => (
                <div className="card discussion-card" key={discussion.id}>
                  <div className="card-user-header">
                    <div className="user-info">
                      <div className="user-avatar"></div>
                      <div>
                        <p className="user-name">@{discussion.author.username}</p>
                        <p className="user-details">{discussion.author.location}, {discussion.postedAt}</p>
                      </div>
                    </div>
                    <button className="options-button">
                      <svg xmlns="http://www.w3.org/2000/svg" className="options-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                  <h2 className="discussion-title">{discussion.title}</h2>
                  <p className="discussion-content">{discussion.content}</p>
                </div>
              )) : null}
            </>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          {/* Upgrade Card */}
          <div className="card upgrade-card">
            <h2 className="upgrade-title">Premium Features</h2>
            <div className="upgrade-content">
              <h1 className="upgrade-heading">Upgrade to pro</h1>
              <ul className="feature-list">
                <li>Priority project matching</li>
                <li>Advanced search</li>
                <li>Unlimited connections</li>
              </ul>
              <button className="upgrade-button">Try Free for 14 days</button>
            </div>
          </div>

          {/* People You May Know */}
          <div className="card people-card">
            <div className="card-header">
              <h2 className="card-title">People you may know</h2>
              <button className="next-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="next-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {isPeopleLoading ? (
              // Loading state for people recommendations
              Array(2).fill(0).map((_, index) => (
                <div className="person-item" key={index}>
                  <div className="person-info">
                    <div className="loading-placeholder" style={{ width: '32px', height: '32px', borderRadius: '50%' }}></div>
                    <div>
                      <div className="loading-placeholder" style={{ width: '80px', height: '14px' }}></div>
                      <div className="loading-placeholder" style={{ width: '120px', height: '12px', marginTop: '4px' }}></div>
                    </div>
                  </div>
                  <div className="loading-placeholder" style={{ width: '24px', height: '24px' }}></div>
                </div>
              ))
            ) : peopleRecommendations.length > 0 ? (
              // Populated people recommendations
              peopleRecommendations.map(person => (
                <div className="person-item" key={person.id}>
                  <div className="person-info">
                    <div className="person-avatar"></div>
                    <div>
                      <p className="person-name">@{person.username}</p>
                      <p className="person-details">{person.profession}, {person.location}</p>
                    </div>
                  </div>
                  <button 
                    className="add-button"
                    onClick={() => handleConnectPerson(person.id)}
                  >
                    +
                  </button>
                </div>
              ))
            ) : (
              // Empty state
              <div className="empty-state">
                <FaUserCircle className="empty-state-icon" />
                <p className="empty-state-text">No recommendations found.</p>
              </div>
            )}
            
            {peopleRecommendations.length > 0 && (
              <button className="show-all-button">Show all</button>
            )}
          </div>

          {/* Trending */}
          <div className="card trending-card">
            <div className="card-header">
              <h2 className="card-title">
                Trending <FaFire className="fire-icon" />
              </h2>
            </div>
            
            {isTrendingLoading ? (
              // Loading state for trending topics
              <div className="trending-items">
                {Array(5).fill(0).map((_, index) => (
                  <div className="trending-item" key={index}>
                    <div className="loading-placeholder" style={{ width: '32px', height: '32px', borderRadius: '50%' }}></div>
                    <div>
                      <div className="loading-placeholder" style={{ width: '100px', height: '14px' }}></div>
                      <div className="loading-placeholder" style={{ width: '150px', height: '12px', marginTop: '4px' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : trendingTopics.length > 0 ? (
              // Populated trending topics
              <div className="trending-items">
                {trendingTopics.map(topic => (
                  <div className="trending-item" key={topic.id}>
                    <div className="trending-avatar"></div>
                    <div>
                      <p className="trending-title">{topic.title}</p>
                      <p className="trending-details">{topic.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Empty state
              <div className="empty-state">
                <FaFire className="empty-state-icon" />
                <p className="empty-state-text">No trending topics found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFeed; 