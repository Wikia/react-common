
There are three basic icon sizes: regular (24px), small (18px) and tiny (12px).
Every icon component has `size` prop that can modify it's height and width;
in addition every icon's `fill` color is defaulted to current color.

Usage:
```js static
@import <IconComponent> from '@wikia/react-common/icons/<IconComponent>';
```

Here's the list of all the icons in different sizes; hover over icon to see component's name

```jsx noeditor
const React = require('react');
const styled = require('styled-components').default;
const IconActivity = require('./IconActivity').default;
const IconActivitySmall = require('./IconActivitySmall').default;
const IconActivityTiny = require('./IconActivityTiny').default;
const IconAdd = require('./IconAdd').default;
const IconAddSmall = require('./IconAddSmall').default;
const IconAddTiny = require('./IconAddTiny').default;
const IconAlert = require('./IconAlert').default;
const IconAlertSmall = require('./IconAlertSmall').default;
const IconAlertTiny = require('./IconAlertTiny').default;
const IconArrow = require('./IconArrow').default;
const IconArrowSmall = require('./IconArrowSmall').default;
const IconArrowTiny = require('./IconArrowTiny').default;
const IconBell = require('./IconBell').default;
const IconBellSmall = require('./IconBellSmall').default;
const IconBellTiny = require('./IconBellTiny').default;
const IconBento = require('./IconBento').default;
const IconBentoSmall = require('./IconBentoSmall').default;
const IconBentoTiny = require('./IconBentoTiny').default;
const IconBold = require('./IconBold').default;
const IconBoldActive = require('./IconBoldActive').default;
const IconBoldActiveSmall = require('./IconBoldActiveSmall').default;
const IconBoldActiveTiny = require('./IconBoldActiveTiny').default;
const IconBoldSmall = require('./IconBoldSmall').default;
const IconBoldTiny = require('./IconBoldTiny').default;
const IconBook = require('./IconBook').default;
const IconBookSmall = require('./IconBookSmall').default;
const IconBookTiny = require('./IconBookTiny').default;
const IconBookmark = require('./IconBookmark').default;
const IconBookmarkSmall = require('./IconBookmarkSmall').default;
const IconBookmarkTiny = require('./IconBookmarkTiny').default;
const IconBubble = require('./IconBubble').default;
const IconBubbleSmall = require('./IconBubbleSmall').default;
const IconBubbleTiny = require('./IconBubbleTiny').default;
const IconBulletedList = require('./IconBulletedList').default;
const IconBulletedListSmall = require('./IconBulletedListSmall').default;
const IconBulletedListTiny = require('./IconBulletedListTiny').default;
const IconCalendar = require('./IconCalendar').default;
const IconCalendarSmall = require('./IconCalendarSmall').default;
const IconCalendarTiny = require('./IconCalendarTiny').default;
const IconCamera = require('./IconCamera').default;
const IconCameraSmall = require('./IconCameraSmall').default;
const IconCameraTiny = require('./IconCameraTiny').default;
const IconCheck = require('./IconCheck').default;
const IconCheckBox = require('./IconCheckBox').default;
const IconCheckBoxEmpty = require('./IconCheckBoxEmpty').default;
const IconCheckBoxEmptySmall = require('./IconCheckBoxEmptySmall').default;
const IconCheckBoxEmptyTiny = require('./IconCheckBoxEmptyTiny').default;
const IconCheckBoxSmall = require('./IconCheckBoxSmall').default;
const IconCheckBoxTiny = require('./IconCheckBoxTiny').default;
const IconCheckSmall = require('./IconCheckSmall').default;
const IconCheckTiny = require('./IconCheckTiny').default;
const IconClipboard = require('./IconClipboard').default;
const IconClipboardSmall = require('./IconClipboardSmall').default;
const IconClipboardTiny = require('./IconClipboardTiny').default;
const IconClose = require('./IconClose').default;
const IconCloseSmall = require('./IconCloseSmall').default;
const IconCloseTiny = require('./IconCloseTiny').default;
const IconComment = require('./IconComment').default;
const IconCommentSmall = require('./IconCommentSmall').default;
const IconCommentTiny = require('./IconCommentTiny').default;
const IconControls = require('./IconControls').default;
const IconControlsSmall = require('./IconControlsSmall').default;
const IconControlsTiny = require('./IconControlsTiny').default;
const IconDocuments = require('./IconDocuments').default;
const IconDocumentsSmall = require('./IconDocumentsSmall').default;
const IconDocumentsTiny = require('./IconDocumentsTiny').default;
const IconDownload = require('./IconDownload').default;
const IconDownloadSmall = require('./IconDownloadSmall').default;
const IconDownloadTiny = require('./IconDownloadTiny').default;
const IconDropdown1 = require('./IconDropdown1').default;
const IconDropdown1Small = require('./IconDropdown1Small').default;
const IconDropdown1Tiny = require('./IconDropdown1Tiny').default;
const IconDropdown2 = require('./IconDropdown2').default;
const IconDropdown2Small = require('./IconDropdown2Small').default;
const IconDropdown2Tiny = require('./IconDropdown2Tiny').default;
const IconExternalLink = require('./IconExternalLink').default;
const IconExternalLinkSmall = require('./IconExternalLinkSmall').default;
const IconExternalLinkTiny = require('./IconExternalLinkTiny').default;
const IconEye = require('./IconEye').default;
const IconEyeOff = require('./IconEyeOff').default;
const IconEyeOffSmall = require('./IconEyeOffSmall').default;
const IconEyeOffTiny = require('./IconEyeOffTiny').default;
const IconEyeSmall = require('./IconEyeSmall').default;
const IconEyeTiny = require('./IconEyeTiny').default;
const IconFacebook = require('./IconFacebook').default;
const IconFacebookSmall = require('./IconFacebookSmall').default;
const IconFacebookTiny = require('./IconFacebookTiny').default;
const IconFandom = require('./IconFandom').default;
const IconFandomSmall = require('./IconFandomSmall').default;
const IconFandomTiny = require('./IconFandomTiny').default;
const IconFlag = require('./IconFlag').default;
const IconFlagSmall = require('./IconFlagSmall').default;
const IconFlagTiny = require('./IconFlagTiny').default;
const IconFootnote = require('./IconFootnote').default;
const IconFootnoteSmall = require('./IconFootnoteSmall').default;
const IconFootnoteTiny = require('./IconFootnoteTiny').default;
const IconGripper = require('./IconGripper').default;
const IconGripperSmall = require('./IconGripperSmall').default;
const IconGripperTiny = require('./IconGripperTiny').default;
const IconH2 = require('./IconH2').default;
const IconH2Small = require('./IconH2Small').default;
const IconH2Tiny = require('./IconH2Tiny').default;
const IconH3 = require('./IconH3').default;
const IconH3Small = require('./IconH3Small').default;
const IconH3Tiny = require('./IconH3Tiny').default;
const IconHome = require('./IconHome').default;
const IconHomeSmall = require('./IconHomeSmall').default;
const IconHomeTiny = require('./IconHomeTiny').default;
const IconImage = require('./IconImage').default;
const IconImageSmall = require('./IconImageSmall').default;
const IconImageTiny = require('./IconImageTiny').default;
const IconImages = require('./IconImages').default;
const IconImagesSmall = require('./IconImagesSmall').default;
const IconImagesTiny = require('./IconImagesTiny').default;
const IconIndentLeft = require('./IconIndentLeft').default;
const IconIndentLeftSmall = require('./IconIndentLeftSmall').default;
const IconIndentLeftTiny = require('./IconIndentLeftTiny').default;
const IconIndentRight = require('./IconIndentRight').default;
const IconIndentRightSmall = require('./IconIndentRightSmall').default;
const IconIndentRightTiny = require('./IconIndentRightTiny').default;
const IconItalics = require('./IconItalics').default;
const IconItalicsSmall = require('./IconItalicsSmall').default;
const IconItalicsTiny = require('./IconItalicsTiny').default;
const IconLeftAlign = require('./IconLeftAlign').default;
const IconLeftAlignSmall = require('./IconLeftAlignSmall').default;
const IconLeftAlignTiny = require('./IconLeftAlignTiny').default;
const IconLink = require('./IconLink').default;
const IconLinkSmall = require('./IconLinkSmall').default;
const IconLinkTiny = require('./IconLinkTiny').default;
const IconLock = require('./IconLock').default;
const IconLockSmall = require('./IconLockSmall').default;
const IconLockTiny = require('./IconLockTiny').default;
const IconMap = require('./IconMap').default;
const IconMapSmall = require('./IconMapSmall').default;
const IconMapTiny = require('./IconMapTiny').default;
const IconMenu = require('./IconMenu').default;
const IconMenuSmall = require('./IconMenuSmall').default;
const IconMenuTiny = require('./IconMenuTiny').default;
const IconMessage = require('./IconMessage').default;
const IconMessageSmall = require('./IconMessageSmall').default;
const IconMessageTiny = require('./IconMessageTiny').default;
const IconMore = require('./IconMore').default;
const IconMoreSmall = require('./IconMoreSmall').default;
const IconMoreTiny = require('./IconMoreTiny').default;
const IconNote = require('./IconNote').default;
const IconNoteSmall = require('./IconNoteSmall').default;
const IconNoteTiny = require('./IconNoteTiny').default;
const IconNumberedList = require('./IconNumberedList').default;
const IconNumberedListSmall = require('./IconNumberedListSmall').default;
const IconNumberedListTiny = require('./IconNumberedListTiny').default;
const IconPageList = require('./IconPageList').default;
const IconPageListSmall = require('./IconPageListSmall').default;
const IconPageListTiny = require('./IconPageListTiny').default;
const IconParagraph = require('./IconParagraph').default;
const IconParagraphSmall = require('./IconParagraphSmall').default;
const IconParagraphTiny = require('./IconParagraphTiny').default;
const IconPause = require('./IconPause').default;
const IconPauseSmall = require('./IconPauseSmall').default;
const IconPauseTiny = require('./IconPauseTiny').default;
const IconPencil = require('./IconPencil').default;
const IconPencilSmall = require('./IconPencilSmall').default;
const IconPencilTiny = require('./IconPencilTiny').default;
const IconPin = require('./IconPin').default;
const IconPinSmall = require('./IconPinSmall').default;
const IconPinTiny = require('./IconPinTiny').default;
const IconPlay = require('./IconPlay').default;
const IconPlaySmall = require('./IconPlaySmall').default;
const IconPlayTiny = require('./IconPlayTiny').default;
const IconPoll = require('./IconPoll').default;
const IconPollSmall = require('./IconPollSmall').default;
const IconPollTiny = require('./IconPollTiny').default;
const IconQuestion = require('./IconQuestion').default;
const IconQuestionSmall = require('./IconQuestionSmall').default;
const IconQuestionTiny = require('./IconQuestionTiny').default;
const IconQuote = require('./IconQuote').default;
const IconQuoteSmall = require('./IconQuoteSmall').default;
const IconQuoteTiny = require('./IconQuoteTiny').default;
const IconRadioActive = require('./IconRadioActive').default;
const IconRadioActiveSmall = require('./IconRadioActiveSmall').default;
const IconRadioActiveTiny = require('./IconRadioActiveTiny').default;
const IconRadioEmpty = require('./IconRadioEmpty').default;
const IconRadioEmptySmall = require('./IconRadioEmptySmall').default;
const IconRadioEmptyTiny = require('./IconRadioEmptyTiny').default;
const IconReddit = require('./IconReddit').default;
const IconRedditSmall = require('./IconRedditSmall').default;
const IconRedditTiny = require('./IconRedditTiny').default;
const IconReload = require('./IconReload').default;
const IconReloadSmall = require('./IconReloadSmall').default;
const IconReloadTiny = require('./IconReloadTiny').default;
const IconReply = require('./IconReply').default;
const IconReplySmall = require('./IconReplySmall').default;
const IconReplyTiny = require('./IconReplyTiny').default;
const IconSearch = require('./IconSearch').default;
const IconSearchSmall = require('./IconSearchSmall').default;
const IconSearchTiny = require('./IconSearchTiny').default;
const IconSettings = require('./IconSettings').default;
const IconSettingsSmall = require('./IconSettingsSmall').default;
const IconSettingsTiny = require('./IconSettingsTiny').default;
const IconShare = require('./IconShare').default;
const IconShareSmall = require('./IconShareSmall').default;
const IconShareTiny = require('./IconShareTiny').default;
const IconSitemap = require('./IconSitemap').default;
const IconSitemapSmall = require('./IconSitemapSmall').default;
const IconSitemapTiny = require('./IconSitemapTiny').default;
const IconSound = require('./IconSound').default;
const IconSoundOff = require('./IconSoundOff').default;
const IconSoundOffSmall = require('./IconSoundOffSmall').default;
const IconSoundOffTiny = require('./IconSoundOffTiny').default;
const IconSoundSmall = require('./IconSoundSmall').default;
const IconSoundTiny = require('./IconSoundTiny').default;
const IconTag = require('./IconTag').default;
const IconTagSmall = require('./IconTagSmall').default;
const IconTagTiny = require('./IconTagTiny').default;
const IconText = require('./IconText').default;
const IconTextSmall = require('./IconTextSmall').default;
const IconTextTiny = require('./IconTextTiny').default;
const IconTrash = require('./IconTrash').default;
const IconTrashEmpty = require('./IconTrashEmpty').default;
const IconTrashEmptySmall = require('./IconTrashEmptySmall').default;
const IconTrashEmptyTiny = require('./IconTrashEmptyTiny').default;
const IconTrashSmall = require('./IconTrashSmall').default;
const IconTrashTiny = require('./IconTrashTiny').default;
const IconTwitter = require('./IconTwitter').default;
const IconTwitterSmall = require('./IconTwitterSmall').default;
const IconTwitterTiny = require('./IconTwitterTiny').default;
const IconUnlock = require('./IconUnlock').default;
const IconUnlockSmall = require('./IconUnlockSmall').default;
const IconUnlockTiny = require('./IconUnlockTiny').default;
const IconUpvote = require('./IconUpvote').default;
const IconUpvoteSmall = require('./IconUpvoteSmall').default;
const IconUpvoteTiny = require('./IconUpvoteTiny').default;
const IconUser = require('./IconUser').default;
const IconUserAvatar = require('./IconUserAvatar').default;
const IconUserAvatarSmall = require('./IconUserAvatarSmall').default;
const IconUserAvatarTiny = require('./IconUserAvatarTiny').default;
const IconUserSmall = require('./IconUserSmall').default;
const IconUserTiny = require('./IconUserTiny').default;
const IconUsers = require('./IconUsers').default;
const IconUsersSmall = require('./IconUsersSmall').default;
const IconUsersTiny = require('./IconUsersTiny').default;
const IconVideo = require('./IconVideo').default;
const IconVideoSmall = require('./IconVideoSmall').default;
const IconVideoTiny = require('./IconVideoTiny').default;
const IconWatch = require('./IconWatch').default;
const IconWatchSmall = require('./IconWatchSmall').default;
const IconWatchTiny = require('./IconWatchTiny').default;
const IconZoomIn = require('./IconZoomIn').default;
const IconZoomInSmall = require('./IconZoomInSmall').default;
const IconZoomInTiny = require('./IconZoomInTiny').default;
const IconZoomOut = require('./IconZoomOut').default;
const IconZoomOutSmall = require('./IconZoomOutSmall').default;
const IconZoomOutTiny = require('./IconZoomOutTiny').default;

const IconsDemo = styled.div`
`;
const Icon = styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 12px;
    padding: 6px;

    &:hover {
        background: #fff;
    }
`;
const IconName = styled.div`
    flex-basis: 200px;
    font-size: 16px;
    font-weight: 600;
    margin-right: 12px;
    text-align: right;
`;
const Variants = styled.div`
    display: grid;
    flex: 1;
    grid-template-columns: 100px 100px 100px;
`;
const IconVariant = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 12px;
    position: relative;

    &:hover span {
        display: flex;
    }
`;
const VariantName = styled.span`
    align-items: center;
    background: #fff;
    bottom: -20px;
    display: none;
    font-size: 14px;
    height: 20px;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    text-align: center;
`;
const VariantComponent = styled.div`
`;

<IconsDemo>
    
    <Icon>
        <IconName>Activity</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconActivity</VariantName>
                <VariantComponent><IconActivity/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconActivitySmall</VariantName>
                <VariantComponent><IconActivitySmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconActivityTiny</VariantName>
                <VariantComponent><IconActivityTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Add</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconAdd</VariantName>
                <VariantComponent><IconAdd/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconAddSmall</VariantName>
                <VariantComponent><IconAddSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconAddTiny</VariantName>
                <VariantComponent><IconAddTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Alert</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconAlert</VariantName>
                <VariantComponent><IconAlert/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconAlertSmall</VariantName>
                <VariantComponent><IconAlertSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconAlertTiny</VariantName>
                <VariantComponent><IconAlertTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Arrow</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconArrow</VariantName>
                <VariantComponent><IconArrow/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconArrowSmall</VariantName>
                <VariantComponent><IconArrowSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconArrowTiny</VariantName>
                <VariantComponent><IconArrowTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Bell</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconBell</VariantName>
                <VariantComponent><IconBell/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconBellSmall</VariantName>
                <VariantComponent><IconBellSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconBellTiny</VariantName>
                <VariantComponent><IconBellTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Bento</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconBento</VariantName>
                <VariantComponent><IconBento/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconBentoSmall</VariantName>
                <VariantComponent><IconBentoSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconBentoTiny</VariantName>
                <VariantComponent><IconBentoTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Bold</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconBold</VariantName>
                <VariantComponent><IconBold/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconBoldSmall</VariantName>
                <VariantComponent><IconBoldSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconBoldTiny</VariantName>
                <VariantComponent><IconBoldTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>BoldActive</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconBoldActive</VariantName>
                <VariantComponent><IconBoldActive/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconBoldActiveSmall</VariantName>
                <VariantComponent><IconBoldActiveSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconBoldActiveTiny</VariantName>
                <VariantComponent><IconBoldActiveTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Book</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconBook</VariantName>
                <VariantComponent><IconBook/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconBookSmall</VariantName>
                <VariantComponent><IconBookSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconBookTiny</VariantName>
                <VariantComponent><IconBookTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Bookmark</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconBookmark</VariantName>
                <VariantComponent><IconBookmark/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconBookmarkSmall</VariantName>
                <VariantComponent><IconBookmarkSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconBookmarkTiny</VariantName>
                <VariantComponent><IconBookmarkTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Bubble</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconBubble</VariantName>
                <VariantComponent><IconBubble/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconBubbleSmall</VariantName>
                <VariantComponent><IconBubbleSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconBubbleTiny</VariantName>
                <VariantComponent><IconBubbleTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>BulletedList</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconBulletedList</VariantName>
                <VariantComponent><IconBulletedList/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconBulletedListSmall</VariantName>
                <VariantComponent><IconBulletedListSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconBulletedListTiny</VariantName>
                <VariantComponent><IconBulletedListTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Calendar</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconCalendar</VariantName>
                <VariantComponent><IconCalendar/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconCalendarSmall</VariantName>
                <VariantComponent><IconCalendarSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconCalendarTiny</VariantName>
                <VariantComponent><IconCalendarTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Camera</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconCamera</VariantName>
                <VariantComponent><IconCamera/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconCameraSmall</VariantName>
                <VariantComponent><IconCameraSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconCameraTiny</VariantName>
                <VariantComponent><IconCameraTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Check</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconCheck</VariantName>
                <VariantComponent><IconCheck/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconCheckSmall</VariantName>
                <VariantComponent><IconCheckSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconCheckTiny</VariantName>
                <VariantComponent><IconCheckTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>CheckBox</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconCheckBox</VariantName>
                <VariantComponent><IconCheckBox/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconCheckBoxSmall</VariantName>
                <VariantComponent><IconCheckBoxSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconCheckBoxTiny</VariantName>
                <VariantComponent><IconCheckBoxTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>CheckBoxEmpty</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconCheckBoxEmpty</VariantName>
                <VariantComponent><IconCheckBoxEmpty/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconCheckBoxEmptySmall</VariantName>
                <VariantComponent><IconCheckBoxEmptySmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconCheckBoxEmptyTiny</VariantName>
                <VariantComponent><IconCheckBoxEmptyTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Clipboard</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconClipboard</VariantName>
                <VariantComponent><IconClipboard/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconClipboardSmall</VariantName>
                <VariantComponent><IconClipboardSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconClipboardTiny</VariantName>
                <VariantComponent><IconClipboardTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Close</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconClose</VariantName>
                <VariantComponent><IconClose/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconCloseSmall</VariantName>
                <VariantComponent><IconCloseSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconCloseTiny</VariantName>
                <VariantComponent><IconCloseTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Comment</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconComment</VariantName>
                <VariantComponent><IconComment/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconCommentSmall</VariantName>
                <VariantComponent><IconCommentSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconCommentTiny</VariantName>
                <VariantComponent><IconCommentTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Controls</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconControls</VariantName>
                <VariantComponent><IconControls/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconControlsSmall</VariantName>
                <VariantComponent><IconControlsSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconControlsTiny</VariantName>
                <VariantComponent><IconControlsTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Documents</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconDocuments</VariantName>
                <VariantComponent><IconDocuments/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconDocumentsSmall</VariantName>
                <VariantComponent><IconDocumentsSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconDocumentsTiny</VariantName>
                <VariantComponent><IconDocumentsTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Download</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconDownload</VariantName>
                <VariantComponent><IconDownload/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconDownloadSmall</VariantName>
                <VariantComponent><IconDownloadSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconDownloadTiny</VariantName>
                <VariantComponent><IconDownloadTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Dropdown1</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconDropdown1</VariantName>
                <VariantComponent><IconDropdown1/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconDropdown1Small</VariantName>
                <VariantComponent><IconDropdown1Small/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconDropdown1Tiny</VariantName>
                <VariantComponent><IconDropdown1Tiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Dropdown2</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconDropdown2</VariantName>
                <VariantComponent><IconDropdown2/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconDropdown2Small</VariantName>
                <VariantComponent><IconDropdown2Small/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconDropdown2Tiny</VariantName>
                <VariantComponent><IconDropdown2Tiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>ExternalLink</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconExternalLink</VariantName>
                <VariantComponent><IconExternalLink/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconExternalLinkSmall</VariantName>
                <VariantComponent><IconExternalLinkSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconExternalLinkTiny</VariantName>
                <VariantComponent><IconExternalLinkTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Eye</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconEye</VariantName>
                <VariantComponent><IconEye/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconEyeSmall</VariantName>
                <VariantComponent><IconEyeSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconEyeTiny</VariantName>
                <VariantComponent><IconEyeTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>EyeOff</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconEyeOff</VariantName>
                <VariantComponent><IconEyeOff/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconEyeOffSmall</VariantName>
                <VariantComponent><IconEyeOffSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconEyeOffTiny</VariantName>
                <VariantComponent><IconEyeOffTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Facebook</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconFacebook</VariantName>
                <VariantComponent><IconFacebook/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconFacebookSmall</VariantName>
                <VariantComponent><IconFacebookSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconFacebookTiny</VariantName>
                <VariantComponent><IconFacebookTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Fandom</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconFandom</VariantName>
                <VariantComponent><IconFandom/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconFandomSmall</VariantName>
                <VariantComponent><IconFandomSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconFandomTiny</VariantName>
                <VariantComponent><IconFandomTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Flag</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconFlag</VariantName>
                <VariantComponent><IconFlag/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconFlagSmall</VariantName>
                <VariantComponent><IconFlagSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconFlagTiny</VariantName>
                <VariantComponent><IconFlagTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Footnote</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconFootnote</VariantName>
                <VariantComponent><IconFootnote/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconFootnoteSmall</VariantName>
                <VariantComponent><IconFootnoteSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconFootnoteTiny</VariantName>
                <VariantComponent><IconFootnoteTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Gripper</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconGripper</VariantName>
                <VariantComponent><IconGripper/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconGripperSmall</VariantName>
                <VariantComponent><IconGripperSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconGripperTiny</VariantName>
                <VariantComponent><IconGripperTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>H2</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconH2</VariantName>
                <VariantComponent><IconH2/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconH2Small</VariantName>
                <VariantComponent><IconH2Small/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconH2Tiny</VariantName>
                <VariantComponent><IconH2Tiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>H3</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconH3</VariantName>
                <VariantComponent><IconH3/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconH3Small</VariantName>
                <VariantComponent><IconH3Small/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconH3Tiny</VariantName>
                <VariantComponent><IconH3Tiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Home</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconHome</VariantName>
                <VariantComponent><IconHome/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconHomeSmall</VariantName>
                <VariantComponent><IconHomeSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconHomeTiny</VariantName>
                <VariantComponent><IconHomeTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Image</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconImage</VariantName>
                <VariantComponent><IconImage/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconImageSmall</VariantName>
                <VariantComponent><IconImageSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconImageTiny</VariantName>
                <VariantComponent><IconImageTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Images</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconImages</VariantName>
                <VariantComponent><IconImages/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconImagesSmall</VariantName>
                <VariantComponent><IconImagesSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconImagesTiny</VariantName>
                <VariantComponent><IconImagesTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>IndentLeft</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconIndentLeft</VariantName>
                <VariantComponent><IconIndentLeft/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconIndentLeftSmall</VariantName>
                <VariantComponent><IconIndentLeftSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconIndentLeftTiny</VariantName>
                <VariantComponent><IconIndentLeftTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>IndentRight</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconIndentRight</VariantName>
                <VariantComponent><IconIndentRight/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconIndentRightSmall</VariantName>
                <VariantComponent><IconIndentRightSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconIndentRightTiny</VariantName>
                <VariantComponent><IconIndentRightTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Italics</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconItalics</VariantName>
                <VariantComponent><IconItalics/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconItalicsSmall</VariantName>
                <VariantComponent><IconItalicsSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconItalicsTiny</VariantName>
                <VariantComponent><IconItalicsTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>LeftAlign</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconLeftAlign</VariantName>
                <VariantComponent><IconLeftAlign/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconLeftAlignSmall</VariantName>
                <VariantComponent><IconLeftAlignSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconLeftAlignTiny</VariantName>
                <VariantComponent><IconLeftAlignTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Link</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconLink</VariantName>
                <VariantComponent><IconLink/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconLinkSmall</VariantName>
                <VariantComponent><IconLinkSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconLinkTiny</VariantName>
                <VariantComponent><IconLinkTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Lock</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconLock</VariantName>
                <VariantComponent><IconLock/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconLockSmall</VariantName>
                <VariantComponent><IconLockSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconLockTiny</VariantName>
                <VariantComponent><IconLockTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Map</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconMap</VariantName>
                <VariantComponent><IconMap/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconMapSmall</VariantName>
                <VariantComponent><IconMapSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconMapTiny</VariantName>
                <VariantComponent><IconMapTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Menu</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconMenu</VariantName>
                <VariantComponent><IconMenu/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconMenuSmall</VariantName>
                <VariantComponent><IconMenuSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconMenuTiny</VariantName>
                <VariantComponent><IconMenuTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Message</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconMessage</VariantName>
                <VariantComponent><IconMessage/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconMessageSmall</VariantName>
                <VariantComponent><IconMessageSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconMessageTiny</VariantName>
                <VariantComponent><IconMessageTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>More</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconMore</VariantName>
                <VariantComponent><IconMore/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconMoreSmall</VariantName>
                <VariantComponent><IconMoreSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconMoreTiny</VariantName>
                <VariantComponent><IconMoreTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Note</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconNote</VariantName>
                <VariantComponent><IconNote/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconNoteSmall</VariantName>
                <VariantComponent><IconNoteSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconNoteTiny</VariantName>
                <VariantComponent><IconNoteTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>NumberedList</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconNumberedList</VariantName>
                <VariantComponent><IconNumberedList/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconNumberedListSmall</VariantName>
                <VariantComponent><IconNumberedListSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconNumberedListTiny</VariantName>
                <VariantComponent><IconNumberedListTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>PageList</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconPageList</VariantName>
                <VariantComponent><IconPageList/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconPageListSmall</VariantName>
                <VariantComponent><IconPageListSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconPageListTiny</VariantName>
                <VariantComponent><IconPageListTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Paragraph</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconParagraph</VariantName>
                <VariantComponent><IconParagraph/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconParagraphSmall</VariantName>
                <VariantComponent><IconParagraphSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconParagraphTiny</VariantName>
                <VariantComponent><IconParagraphTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Pause</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconPause</VariantName>
                <VariantComponent><IconPause/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconPauseSmall</VariantName>
                <VariantComponent><IconPauseSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconPauseTiny</VariantName>
                <VariantComponent><IconPauseTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Pencil</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconPencil</VariantName>
                <VariantComponent><IconPencil/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconPencilSmall</VariantName>
                <VariantComponent><IconPencilSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconPencilTiny</VariantName>
                <VariantComponent><IconPencilTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Pin</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconPin</VariantName>
                <VariantComponent><IconPin/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconPinSmall</VariantName>
                <VariantComponent><IconPinSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconPinTiny</VariantName>
                <VariantComponent><IconPinTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Play</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconPlay</VariantName>
                <VariantComponent><IconPlay/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconPlaySmall</VariantName>
                <VariantComponent><IconPlaySmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconPlayTiny</VariantName>
                <VariantComponent><IconPlayTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Poll</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconPoll</VariantName>
                <VariantComponent><IconPoll/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconPollSmall</VariantName>
                <VariantComponent><IconPollSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconPollTiny</VariantName>
                <VariantComponent><IconPollTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Question</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconQuestion</VariantName>
                <VariantComponent><IconQuestion/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconQuestionSmall</VariantName>
                <VariantComponent><IconQuestionSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconQuestionTiny</VariantName>
                <VariantComponent><IconQuestionTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Quote</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconQuote</VariantName>
                <VariantComponent><IconQuote/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconQuoteSmall</VariantName>
                <VariantComponent><IconQuoteSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconQuoteTiny</VariantName>
                <VariantComponent><IconQuoteTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>RadioActive</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconRadioActive</VariantName>
                <VariantComponent><IconRadioActive/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconRadioActiveSmall</VariantName>
                <VariantComponent><IconRadioActiveSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconRadioActiveTiny</VariantName>
                <VariantComponent><IconRadioActiveTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>RadioEmpty</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconRadioEmpty</VariantName>
                <VariantComponent><IconRadioEmpty/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconRadioEmptySmall</VariantName>
                <VariantComponent><IconRadioEmptySmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconRadioEmptyTiny</VariantName>
                <VariantComponent><IconRadioEmptyTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Reddit</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconReddit</VariantName>
                <VariantComponent><IconReddit/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconRedditSmall</VariantName>
                <VariantComponent><IconRedditSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconRedditTiny</VariantName>
                <VariantComponent><IconRedditTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Reload</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconReload</VariantName>
                <VariantComponent><IconReload/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconReloadSmall</VariantName>
                <VariantComponent><IconReloadSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconReloadTiny</VariantName>
                <VariantComponent><IconReloadTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Reply</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconReply</VariantName>
                <VariantComponent><IconReply/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconReplySmall</VariantName>
                <VariantComponent><IconReplySmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconReplyTiny</VariantName>
                <VariantComponent><IconReplyTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Search</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconSearch</VariantName>
                <VariantComponent><IconSearch/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconSearchSmall</VariantName>
                <VariantComponent><IconSearchSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconSearchTiny</VariantName>
                <VariantComponent><IconSearchTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Settings</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconSettings</VariantName>
                <VariantComponent><IconSettings/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconSettingsSmall</VariantName>
                <VariantComponent><IconSettingsSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconSettingsTiny</VariantName>
                <VariantComponent><IconSettingsTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Share</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconShare</VariantName>
                <VariantComponent><IconShare/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconShareSmall</VariantName>
                <VariantComponent><IconShareSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconShareTiny</VariantName>
                <VariantComponent><IconShareTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Sitemap</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconSitemap</VariantName>
                <VariantComponent><IconSitemap/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconSitemapSmall</VariantName>
                <VariantComponent><IconSitemapSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconSitemapTiny</VariantName>
                <VariantComponent><IconSitemapTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Sound</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconSound</VariantName>
                <VariantComponent><IconSound/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconSoundSmall</VariantName>
                <VariantComponent><IconSoundSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconSoundTiny</VariantName>
                <VariantComponent><IconSoundTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>SoundOff</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconSoundOff</VariantName>
                <VariantComponent><IconSoundOff/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconSoundOffSmall</VariantName>
                <VariantComponent><IconSoundOffSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconSoundOffTiny</VariantName>
                <VariantComponent><IconSoundOffTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Tag</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconTag</VariantName>
                <VariantComponent><IconTag/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconTagSmall</VariantName>
                <VariantComponent><IconTagSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconTagTiny</VariantName>
                <VariantComponent><IconTagTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Text</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconText</VariantName>
                <VariantComponent><IconText/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconTextSmall</VariantName>
                <VariantComponent><IconTextSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconTextTiny</VariantName>
                <VariantComponent><IconTextTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Trash</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconTrash</VariantName>
                <VariantComponent><IconTrash/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconTrashSmall</VariantName>
                <VariantComponent><IconTrashSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconTrashTiny</VariantName>
                <VariantComponent><IconTrashTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>TrashEmpty</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconTrashEmpty</VariantName>
                <VariantComponent><IconTrashEmpty/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconTrashEmptySmall</VariantName>
                <VariantComponent><IconTrashEmptySmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconTrashEmptyTiny</VariantName>
                <VariantComponent><IconTrashEmptyTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Twitter</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconTwitter</VariantName>
                <VariantComponent><IconTwitter/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconTwitterSmall</VariantName>
                <VariantComponent><IconTwitterSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconTwitterTiny</VariantName>
                <VariantComponent><IconTwitterTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Unlock</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconUnlock</VariantName>
                <VariantComponent><IconUnlock/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconUnlockSmall</VariantName>
                <VariantComponent><IconUnlockSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconUnlockTiny</VariantName>
                <VariantComponent><IconUnlockTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Upvote</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconUpvote</VariantName>
                <VariantComponent><IconUpvote/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconUpvoteSmall</VariantName>
                <VariantComponent><IconUpvoteSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconUpvoteTiny</VariantName>
                <VariantComponent><IconUpvoteTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>User</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconUser</VariantName>
                <VariantComponent><IconUser/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconUserSmall</VariantName>
                <VariantComponent><IconUserSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconUserTiny</VariantName>
                <VariantComponent><IconUserTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>UserAvatar</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconUserAvatar</VariantName>
                <VariantComponent><IconUserAvatar/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconUserAvatarSmall</VariantName>
                <VariantComponent><IconUserAvatarSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconUserAvatarTiny</VariantName>
                <VariantComponent><IconUserAvatarTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Users</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconUsers</VariantName>
                <VariantComponent><IconUsers/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconUsersSmall</VariantName>
                <VariantComponent><IconUsersSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconUsersTiny</VariantName>
                <VariantComponent><IconUsersTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Video</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconVideo</VariantName>
                <VariantComponent><IconVideo/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconVideoSmall</VariantName>
                <VariantComponent><IconVideoSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconVideoTiny</VariantName>
                <VariantComponent><IconVideoTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>Watch</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconWatch</VariantName>
                <VariantComponent><IconWatch/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconWatchSmall</VariantName>
                <VariantComponent><IconWatchSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconWatchTiny</VariantName>
                <VariantComponent><IconWatchTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>ZoomIn</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconZoomIn</VariantName>
                <VariantComponent><IconZoomIn/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconZoomInSmall</VariantName>
                <VariantComponent><IconZoomInSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconZoomInTiny</VariantName>
                <VariantComponent><IconZoomInTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
        
    <Icon>
        <IconName>ZoomOut</IconName>
        <Variants>
            <IconVariant>
                <VariantName>IconZoomOut</VariantName>
                <VariantComponent><IconZoomOut/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconZoomOutSmall</VariantName>
                <VariantComponent><IconZoomOutSmall/></VariantComponent>
            </IconVariant>

            <IconVariant>
                <VariantName>IconZoomOutTiny</VariantName>
                <VariantComponent><IconZoomOutTiny/></VariantComponent>
            </IconVariant></Variants>
    </Icon>
</IconsDemo>
```
