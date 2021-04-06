export const notificationTypes = {
    discussionUpvotePost: 'discussion-upvote-post',
    discussionUpvoteReply: 'discussion-upvote-reply',
    discussionReply: 'discussion-reply',
    announcement: 'announcement',
    postAtMention: 'post-at-mention',
    threadAtMention: 'thread-at-mention',
    messageWallThread: 'message-wall-thread',
    messageWallPost: 'message-wall-post',
    articleCommentReply: 'article-comment-reply',
    articleCommentAtMention: 'article-comment-at-mention',
    articleCommentReplyAtMention: 'article-comment-reply-at-mention',
    talkPageMessage: 'talk-page-message',
};

export const isDiscussionReply = type => type === notificationTypes.discussionReply;
export const isDiscussionReplyUpvote = type => type === notificationTypes.discussionUpvoteReply;
export const isDiscussionPostUpvote = type => type === notificationTypes.discussionUpvotePost;
export const isAnnouncement = type => type === notificationTypes.announcement;
export const isPostAtMention = type => type === notificationTypes.postAtMention;
export const isThreadAtMention = type => type === notificationTypes.threadAtMention;
export const isMessageWallThread = type => type === notificationTypes.messageWallThread;
export const isMessageWallPost = type => type === notificationTypes.messageWallPost;
export const isArticleCommentReply = type => type === notificationTypes.articleCommentReply;
export const isArticleCommentAtMention = type => type === notificationTypes.articleCommentAtMention;
export const isArticleCommentReplyAtMention = type => type === notificationTypes.articleCommentReplyAtMention;
export const isTalkPageMessage = type => type === notificationTypes.talkPageMessage;
