export const UserType = {
id: 'string',
username: 'string',
fullName: 'string',
avatar: 'string',
city: 'string',
organization: 'string',
category: 'string',
domains: 'array'
};
export const PostType = {
id: 'number',
author: 'object',
title: 'string',
content: 'string',
image: 'string',
postedAt: 'string',
likes: 'number',
comments: 'number'
};
export const CommunityType = {
id: 'number',
name: 'string',
category: 'string',
members: 'number'
};