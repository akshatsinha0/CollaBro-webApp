# Project Structure

Generated on: 7/16/2025, 11:29:06 PM
Root: e:\CollaBro-webApp

```
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── applicationController.js
│   │   ├── communityController.js
│   │   ├── notificatioController.js
│   │   ├── planController.js
│   │   ├── postController.js
│   │   ├── projectController.js
│   │   ├── recommendationController.js
│   │   ├── subscriptionController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── CollaborationProject.js
│   │   ├── Community.js
│   │   ├── Notification.js
│   │   ├── Plan.js
│   │   ├── Post.js
│   │   ├── ProjectApplication.js
│   │   ├── Recommendation.js
│   │   ├── User.js
│   │   └── UserSubscription.js
│   ├── routes/
│   │   ├── applicationRoutes.js
│   │   ├── communityRoutes.js
│   │   ├── notificationRoutes.js
│   │   ├── planRouts.js
│   │   ├── PostRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── recommendationRoutes.js
│   │   ├── subscriptionRoutes.js
│   │   └── UserRoutes.js
│   ├── app.js
│   ├── package-lock.json
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   │   ├── react.svg
│   │   │   └── signin&signupformsideimage.png
│   │   ├── design-system/
│   │   │   ├── atoms/
│   │   │   │   ├── Avatar/
│   │   │   │   │   ├── Avatar.jsx
│   │   │   │   │   ├── Avatar.module.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Button/
│   │   │   │   │   ├── Button.jsx
│   │   │   │   │   ├── Button.module.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Card/
│   │   │   │   │   ├── Card.jsx
│   │   │   │   │   ├── Card.module.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Input/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── Input.jsx
│   │   │   │   │   └── Input.module.css
│   │   │   │   └── index.js
│   │   │   ├── molecules/
│   │   │   │   ├── EmptyState/
│   │   │   │   │   ├── EmptyState.jsx
│   │   │   │   │   ├── EmptyState.module.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── LoadingState/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── LoadingState.jsx
│   │   │   │   │   └── LoadingState.module.css
│   │   │   │   ├── ProgressiveLoader/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── ProgressiveLoader.jsx
│   │   │   │   │   └── ProgressiveLoader.module.css
│   │   │   │   ├── SearchBar/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── SearchBar.jsx
│   │   │   │   │   └── SearchBar.module.css
│   │   │   │   ├── UserInfo/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── UserInfo.jsx
│   │   │   │   │   └── UserInfo.module.css
│   │   │   │   └── index.js
│   │   │   ├── templates/
│   │   │   │   ├── FeedLayout/
│   │   │   │   │   ├── FeedLayout.jsx
│   │   │   │   │   ├── FeedLayout.module.css
│   │   │   │   │   └── index.js
│   │   │   │   └── index.js
│   │   │   ├── tokens/
│   │   │   │   ├── colors.js
│   │   │   │   ├── index.js
│   │   │   │   ├── spacing.js
│   │   │   │   └── typography.js
│   │   │   └── index.js
│   │   ├── features/
│   │   │   └── feed/
│   │   │       ├── components/
│   │   │       │   ├── COMMUNITIES_CARD/
│   │   │       │   │   ├── CommunitiesCard.jsx
│   │   │       │   │   ├── CommunitiesCard.module.css
│   │   │       │   │   └── index.js
│   │   │       │   ├── CREATE_POST_FORM/
│   │   │       │   │   ├── CreatePostForm.jsx
│   │   │       │   │   ├── CreatePostForm.module.css
│   │   │       │   │   └── index.js
│   │   │       │   ├── CREATE_PROJECT_FORM/
│   │   │       │   │   ├── CreateProjectForm.jsx
│   │   │       │   │   ├── CreateProjectForm.module.css
│   │   │       │   │   └── index.js
│   │   │       │   ├── CREATE_PROJECT_POPUP/
│   │   │       │   │   ├── CreateProjectPopup.jsx
│   │   │       │   │   ├── CreateProjectPopup.module.css
│   │   │       │   │   └── index.js
│   │   │       │   ├── DISCUSSION_CARD/
│   │   │       │   │   ├── DiscussionCard.jsx
│   │   │       │   │   ├── DiscussionCard.module.css
│   │   │       │   │   └── index.js
│   │   │       │   ├── FEED_CONTENT/
│   │   │       │   │   ├── FeedContent.jsx
│   │   │       │   │   ├── FeedContent.module.css
│   │   │       │   │   └── index.js
│   │   │       │   ├── FEED_ERROR_BOUNDARY/
│   │   │       │   │   ├── FeedErrorBoundary.jsx
│   │   │       │   │   └── index.js
│   │   │       │   ├── LEFT_SIDEBAR/
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── LeftSidebar.jsx
│   │   │       │   │   └── LeftSidebar.module.css
│   │   │       │   ├── PEOPLE_CARD/
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── PeopleCard.jsx
│   │   │       │   │   └── PeopleCard.module.css
│   │   │       │   ├── PROFILE_CARD/
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── ProfileCard.jsx
│   │   │       │   │   └── ProfileCard.module.css
│   │   │       │   ├── PROJECT_CARD/
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── ProjectCard.jsx
│   │   │       │   │   └── ProjectCard.module.css
│   │   │       │   ├── RIGHT_SIDEBAR/
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── RightSidebar.jsx
│   │   │       │   │   └── RightSidebar.module.css
│   │   │       │   ├── TRENDING_TOPICS_CARD/
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── TrendingTopicsCard.jsx
│   │   │       │   │   └── TrendingTopicsCard.module.css
│   │   │       │   ├── UPGRADE_CARD/
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── UpgradeCard.jsx
│   │   │       │   │   └── UpgradeCard.module.css
│   │   │       │   └── index.js
│   │   │       ├── hooks/
│   │   │       │   ├── index.js
│   │   │       │   └── useFeedData.js
│   │   │       ├── index.js
│   │   │       ├── MainFeed.jsx
│   │   │       └── MainFeed.module.css
│   │   ├── pages/
│   │   │   ├── onboarding/
│   │   │   │   ├── BasicInfo.css
│   │   │   │   ├── BasicInfo.jsx
│   │   │   │   ├── Category.css
│   │   │   │   ├── Category.jsx
│   │   │   │   ├── Domains.css
│   │   │   │   ├── Domains.jsx
│   │   │   │   ├── Resume.css
│   │   │   │   └── Resume.jsx
│   │   │   ├── Login.css
│   │   │   ├── Login.jsx
│   │   │   ├── MainFeed.jsx
│   │   │   ├── Navbar.css
│   │   │   ├── Navbar.jsx
│   │   │   ├── PlanCards.jsx
│   │   │   ├── Planner.css
│   │   │   ├── Planner.jsx
│   │   │   ├── SignUp.css
│   │   │   └── SignUp.jsx
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── ErrorBoundary/
│   │   │   │   │   ├── ErrorBoundary.jsx
│   │   │   │   │   ├── ErrorBoundary.module.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── LazyImage/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── LazyImage.jsx
│   │   │   │   │   └── LazyImage.module.css
│   │   │   │   └── index.js
│   │   │   ├── constants/
│   │   │   │   └── index.js
│   │   │   ├── hooks/
│   │   │   │   ├── index.js
│   │   │   │   ├── useApiCall.js
│   │   │   │   ├── useDebounce.js
│   │   │   │   ├── useLoadingState.js
│   │   │   │   └── useLocalStorage.js
│   │   │   ├── services/
│   │   │   │   ├── api.js
│   │   │   │   ├── communityService.js
│   │   │   │   ├── feedService.js
│   │   │   │   ├── index.js
│   │   │   │   └── userService.js
│   │   │   ├── types/
│   │   │   │   └── index.js
│   │   │   ├── utils/
│   │   │   │   ├── index.js
│   │   │   │   └── performance.js
│   │   │   └── index.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── package.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
├── .gitignore
├── .hintrc
├── package-lock.json
├── package.json
└── README.md
```