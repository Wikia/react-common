export const notificationTypes = {
    discussionUpvotePost: 'discussion-upvote-post',
    discussionUpvoteReply: 'discussion-upvote-reply',
    discussionReply: 'discussion-reply',
    announcement: 'announcement',
};

export const isDiscussionReply = type => type === notificationTypes.discussionReply;
export const isDiscussionReplyUpvote = type => type === notificationTypes.discussionUpvoteReply;
export const isDiscussionPostUpvote = type => type === notificationTypes.discussionUpvotePost;
export const isAnnouncement = type => type === notificationTypes.announcement;
