import React, { useState, useEffect } from 'react'
import Navbar from './Navbar.jsx'
import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaChevronDown,
  FaRegHeart,
  FaRegCommentAlt,
  FaShareAlt,
  FaFire,
  FaInbox
} from 'react-icons/fa'
import '../styles/MainFeed.css'

export default function MainFeed() {
  const [profile, setProfile] = useState(null)
  const [isProfileLoading, setIsProfileLoading] = useState(true)

  const [communities, setCommunities] = useState([])
  const [isCommunitiesLoading, setIsCommunitiesLoading] = useState(true)

  const [projects, setProjects] = useState([])
  const [discussions, setDiscussions] = useState([])
  const [isFeedLoading, setIsFeedLoading] = useState(true)

  const [peopleRecommendations, setPeopleRecommendations] = useState([])
  const [isPeopleLoading, setIsPeopleLoading] = useState(true)

  const [trendingTopics, setTrendingTopics] = useState([])
  const [isTrendingLoading, setIsTrendingLoading] = useState(true)

  useEffect(() => {
    // Load onboarding data from localStorage
    const fullName       = localStorage.getItem('onboard_fullName')
    const currentCity    = localStorage.getItem('onboard_currentCity')
    const organization   = localStorage.getItem('onboard_organization')
    const category       = localStorage.getItem('onboard_category')
    const domains        = JSON.parse(localStorage.getItem('onboard_domains') || '[]')
    const resumeData     = JSON.parse(localStorage.getItem('onboard_resume') || '{}')

    // If any required field is missing, redirect back to step 1
    if (!fullName || !currentCity || !organization || !category || domains.length === 0 || !resumeData.url) {
      window.location.href = '/onboarding/basic-info'
      return
    }

    // Build profile object
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

    // Simulate or remove your other fetch calls as needed:
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
          author: { username: profile?.username, location: `${profile?.organization}`, avatar: null },
          title: 'Collaborative Capstone Project',
          image: null,
          postedAt: 'Just now',
          likes: 0,
          comments: 0
        }
      ])
      setDiscussions([
        {
          id: 1,
          author: { username: profile?.username, location: profile?.city, avatar: null },
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
          profession: category,
          location: organization,
          avatar: null
        }
      ])
      setIsPeopleLoading(false)
    }, 900)

    // Trending Topics
    setTimeout(() => {
      setTrendingTopics(domains.map((d, i) => ({
        id: i + 1,
        title: d,
        subtitle: `Explore ${d}`,
        avatar: null
      })))
      setIsTrendingLoading(false)
    }, 700)
  }, [])

  const handleJoinCommunity = (communityId) => {
    console.log(`Joined community ${communityId}`)
  }

  const handleConnectPerson = (personId) => {
    console.log(`Connection requested to ${personId}`)
  }

  const handlePostInteraction = (postId, type) => {
    console.log(`${type} on post ${postId}`)
  }

  return (
    <div className="main-feed">
      <Navbar />

      <div className="feed-layout">
        {/* Left Sidebar */}
        <div className="left-sidebar">
          <div className="card profile-card">
            {isProfileLoading ? (
              <div className="loading-placeholder">Loading profile…</div>
            ) : (
              <>
                <div className="profile-header">
                  <button className="menu-button">
                    <FaChevronDown />
                  </button>
                </div>
                <div className="profile-content">
                  <div className="avatar">
                    {profile.avatar || <FaUserCircle size={64} />}
                  </div>
                  <p className="username">@{profile.username}</p>
                  <h2 className="fullname">{profile.fullName}</h2>
                  <p className="details">{profile.city} • {profile.organization}</p>
                </div>
                <div className="profile-stats">
                  <div className="stat-item">
                    <p className="stat-value">{profile.domains.length}</p>
                    <p className="stat-label">Domains</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-value">{profile.category}</p>
                    <p className="stat-label">Category</p>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="card communities-card">
            <div className="card-header">
              <h2 className="card-title">Communities</h2>
              <button className="icon-button"><FaSearch /></button>
              <button className="icon-button">+</button>
            </div>
            {isCommunitiesLoading ? (
              <div className="loading-placeholder">Loading…</div>
            ) : communities.length > 0 ? (
              communities.map(c => (
                <div className="community-item" key={c.id}>
                  <div className="community-info">
                    <div className="community-avatar"></div>
                    <div>
                      <p className="community-name">{c.name}</p>
                      <p className="community-details">
                        {c.category} • {c.members} members
                      </p>
                    </div>
                  </div>
                  <button
                    className="add-button"
                    onClick={() => handleJoinCommunity(c.id)}
                  >+</button>
                </div>
              ))
            ) : (
              <div className="empty-state">No communities yet.</div>
            )}
            {communities.length > 0 && (
              <button className="show-all-button">Show all</button>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {isFeedLoading ? (
            <div className="loading-placeholder">Loading feed…</div>
          ) : (
            <>
              {projects.map(p => (
                <div className="card project-card" key={p.id}>
                  <div className="card-user-header">
                    <div className="user-info">
                      <div className="user-avatar"></div>
                      <div>
                        <p className="user-name">@{p.author.username}</p>
                        <p className="user-details">{p.author.location} • {p.postedAt}</p>
                      </div>
                    </div>
                    <button className="options-button">⋮</button>
                  </div>
                  <h2 className="project-title">{p.title}</h2>
                  <div className="project-image"></div>
                  <div className="project-actions">
                    <button className="action-button" onClick={() => handlePostInteraction(p.id, 'like')}><FaRegHeart /></button>
                    <button className="action-button" onClick={() => handlePostInteraction(p.id, 'comment')}><FaRegCommentAlt /></button>
                    <button className="action-button" onClick={() => handlePostInteraction(p.id, 'share')}><FaShareAlt /></button>
                  </div>
                </div>
              ))}

              {discussions.map(d => (
                <div className="card discussion-card" key={d.id}>
                  <div className="card-user-header">
                    <div className="user-info">
                      <div className="user-avatar"></div>
                      <div>
                        <p className="user-name">@{d.author.username}</p>
                        <p className="user-details">{d.author.location} • {d.postedAt}</p>
                      </div>
                    </div>
                    <button className="options-button">⋮</button>
                  </div>
                  <h2 className="discussion-title">{d.title}</h2>
                  <p className="discussion-content">{d.content}</p>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          <div className="card upgrade-card">
            <h2 className="upgrade-title">Premium Features</h2>
            <button className="upgrade-button">Try Free for 14 days</button>
          </div>

          <div className="card people-card">
            <div className="card-header">
              <h2 className="card-title">People you may know</h2>
              <button className="icon-button"><FaChevronDown /></button>
            </div>
            {isPeopleLoading ? (
              <div className="loading-placeholder">Loading…</div>
            ) : peopleRecommendations.length > 0 ? (
              peopleRecommendations.map(p => (
                <div className="person-item" key={p.id}>
                  <div className="person-info">
                    <div className="person-avatar"></div>
                    <div>
                      <p className="person-name">@{p.username}</p>
                      <p className="person-details">{p.profession} • {p.location}</p>
                    </div>
                  </div>
                  <button className="add-button" onClick={() => handleConnectPerson(p.id)}>+</button>
                </div>
              ))
            ) : (
              <div className="empty-state">No recommendations yet.</div>
            )}
          </div>

          <div className="card trending-card">
            <div className="card-header">
              <h2 className="card-title">
                Trending <FaFire />
              </h2>
            </div>
            {isTrendingLoading ? (
              <div className="loading-placeholder">Loading…</div>
            ) : trendingTopics.length > 0 ? (
              trendingTopics.map(t => (
                <div className="trending-item" key={t.id}>
                  <div className="trending-avatar"></div>
                  <div>
                    <p className="trending-title">{t.title}</p>
                    <p className="trending-details">{t.subtitle}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">No trending topics.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
