import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar.jsx'
// import CreateProjectForm from '../components/home/CREATE_PROJECT/CreateProjectForm'
import ProfileCard from '../components/home/ProfileCard'
import ProjectCard from '../components/home/ProjectCard'
import DiscussionCard from '../components/home/DiscussionCard'
import CommunitiesCard from '../components/home/CommunitiesCard'
import PeopleCard from '../components/home/PeopleCard'
import TrendingTopicsCard from '../components/home/TrendingTopicsCard'
import UpgradeCard from '../components/home/UpgradeCard'
import CreateProjectPopup from '../components/home/CREATE_PROJECT/CreateProjectPopup'
import CreatePostForm from '../components/home/CREATE_POST/CreatePostForm'
import {
  FaSearch,
  FaBell,
  FaFire,
  FaInbox,
  FaChevronDown
} from 'react-icons/fa'
import '../styles/MainFeed.css'

const MainFeed = () => {
  const navigate = useNavigate()

  // Profile state
  const [profile, setProfile] = useState(null)
  const [isProfileLoading, setIsProfileLoading] = useState(true)

  // Onboarding flow guard
  useEffect(() => {
    const fullName     = localStorage.getItem('onboard_fullName')
    const currentCity  = localStorage.getItem('onboard_currentCity')
    const organization = localStorage.getItem('onboard_organization')
    const category     = localStorage.getItem('onboard_category')
    const domains      = JSON.parse(localStorage.getItem('onboard_domains') || '[]')
    const resumeData   = JSON.parse(localStorage.getItem('onboard_resume') || '{}')

    if (
      !fullName ||
      !currentCity ||
      !organization ||
      !category ||
      domains.length === 0 ||
      !resumeData.url
    ) {
      navigate('/onboarding/basic-info', { replace: true })
      return
    }

    setProfile({
      username: fullName.replace(/\s+/g, '').toLowerCase(),
      fullName,
      city: currentCity,
      organization,
      category,
      domains,
      avatar: null
    })
    setIsProfileLoading(false)
  }, [navigate])

  // Communities state
  const [communities, setCommunities] = useState([])
  const [isCommunitiesLoading, setIsCommunitiesLoading] = useState(true)

  // Feed state
  const [projects, setProjects] = useState([])
  const [discussions, setDiscussions] = useState([])
  const [isFeedLoading, setIsFeedLoading] = useState(true)

  // People you may know
  const [peopleRecommendations, setPeopleRecommendations] = useState([])
  const [isPeopleLoading, setIsPeopleLoading] = useState(true)

  // Trending topics
  const [trendingTopics, setTrendingTopics] = useState([])
  const [isTrendingLoading, setIsTrendingLoading] = useState(true)

  // Create post/project form popups
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [showProjectForm, setShowProjectForm] = useState(false)

  // Simulated fetches (replace with real APIs when ready)
  useEffect(() => {
    // Communities
    setTimeout(() => {
      setCommunities([
        { id: 1, name: 'AI Enthusiasts', category: 'Machine Learning', members: 128 },
        { id: 2, name: 'Web Developers', category: 'Front-end', members: 42 },
        { id: 3, name: 'VIT Alumni', category: 'VIT', members: 256 },
        { id: 4, name: 'Data Scientists', category: 'Data Science', members: 128 }
      ])
      setIsCommunitiesLoading(false)
    }, 800)

    // Projects & Discussions
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
      ])
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
      ])
      setIsFeedLoading(false)
    }, 1000)

    // People You May Know
    setTimeout(() => {
      setPeopleRecommendations([
        {
          id: 1,
          username: 'peerCoder',
          profession: profile?.category,
          location: profile?.organization,
          avatar: null
        }
      ])
      setIsPeopleLoading(false)
    }, 900)

    // Trending Topics (safe default to empty array)
    setTimeout(() => {
      const topics = profile?.domains?.map((d, i) => ({
        id: i + 1,
        title: d,
        subtitle: `Explore ${d}`,
        avatar: null
      })) || []
      setTrendingTopics(topics)
      setIsTrendingLoading(false)
    }, 700)
  }, [profile])

  // Handlers
  const handleJoinCommunity = (id) => {
    console.log(`Joined community ${id}`)
  }
  const handleConnectPerson = (id) => {
    console.log(`Connection requested to ${id}`)
  }
  const handlePostInteraction = (postId, type) => {
    console.log(`${type} on post ${postId}`)
  }
  const handleCreatePost = (data) => {
    console.log('Creating post:', data)
    setShowCreatePost(false)
  }
  const handleShowProjectForm = () => setShowProjectForm(true)
  const handleCloseProjectForm = () => setShowProjectForm(false)
  const handleProjectSubmit = (data) => {
    console.log('Creating project:', data)
    setShowProjectForm(false)
  }

  return (
    <div className="main-feed">
      <Navbar />

      {/* Create Project Button at the top of the main feed */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '24px 0 8px 0' }}>
        <button
          className="create-project-btn"
          onClick={() => setShowProjectForm(true)}
          style={{
            background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 24px',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            boxShadow: '0 2px 8px 0 rgba(99, 102, 241, 0.10)'
          }}
        >
          Create Project
        </button>
      </div>

      <div className="feed-layout">
        {/* Left Sidebar */}
        <div className="left-sidebar">
          <ProfileCard profile={profile} isProfileLoading={isProfileLoading} />

          <CommunitiesCard
            communities={communities}
            isLoading={isCommunitiesLoading}
            onJoin={handleJoinCommunity}
          />
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="create-post-container">
            <CreatePostForm
              user={profile}
              onCreatePost={handleCreatePost}
            />
          </div>

          <CreateProjectPopup
            show={showProjectForm}
            onClose={handleCloseProjectForm}
            onSubmit={handleProjectSubmit}
          />

          {isFeedLoading ? (
            <div className="loading-placeholder">Loading feed…</div>
          ) : (
            <>
              {projects.length > 0 ? (
                projects.map(p => (
                  <ProjectCard key={p.id} project={p} onPostInteraction={handlePostInteraction} />
                ))
              ) : (
                <div className="card empty-state">
                  <FaInbox className="empty-state-icon" />
                  <p className="empty-state-text">No projects in your feed yet.</p>
                  <button className="empty-state-button">Explore Projects</button>
                </div>
              )}

              {discussions.length > 0 && discussions.map(d => (
                <DiscussionCard key={d.id} discussion={d} />
              ))}
            </>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          <UpgradeCard />

          <PeopleCard
            people={peopleRecommendations}
            isLoading={isPeopleLoading}
            onConnect={handleConnectPerson}
          />

          <TrendingTopicsCard
            topics={trendingTopics}
            isLoading={isTrendingLoading}
          />
        </div>
      </div>
    </div>
  )
}

export default MainFeed
