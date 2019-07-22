export const notificationTypes = {
    discussionUpvotePost: 'discussion-upvote-post',
    discussionUpvoteReply: 'discussion-upvote-reply',
    discussionReply: 'discussion-reply',
    announcement: 'announcement',
    postAtMention: 'post-at-mention',
    threadAtMention: 'thread-at-mention',
};

export const isDiscussionReply = type => type === notificationTypes.discussionReply;
export const isDiscussionReplyUpvote = type => type === notificationTypes.discussionUpvoteReply;
export const isDiscussionPostUpvote = type => type === notificationTypes.discussionUpvotePost;
export const isAnnouncement = type => type === notificationTypes.announcement;
export const isPostAtMention = type => type === notificationTypes.postAtMention;
export const isThreadAtMention = type => type === notificationTypes.threadAtMention;
