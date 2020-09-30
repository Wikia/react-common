
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
const IconAvatar = require('./IconAvatar').default;
const IconAvatarSmall = require('./IconAvatarSmall').default;
const IconAvatarTiny = require('./IconAvatarTiny').default;
const IconBell = require('./IconBell').default;
const IconBellSmall = require('./IconBellSmall').default;
const IconBellTiny = require('./IconBellTiny').default;
const IconBlocks = require('./IconBlocks').default;
const IconBlocksSmall = require('./IconBlocksSmall').default;
const IconBlocksTiny = require('./IconBlocksTiny').default;
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
const IconBulletList = require('./IconBulletList').default;
const IconBulletListSmall = require('./IconBulletListSmall').default;
const IconBulletListTiny = require('./IconBulletListTiny').default;
const IconCalendar = require('./IconCalendar').default;
const IconCalendarSmall = require('./IconCalendarSmall').default;
const IconCalendarTiny = require('./IconCalendarTiny').default;
const IconCamera = require('./IconCamera').default;
const IconCameraSmall = require('./IconCameraSmall').default;
const IconCameraTiny = require('./IconCameraTiny').default;
const IconCheckbox = require('./IconCheckbox').default;
const IconCheckboxEmpty = require('./IconCheckboxEmpty').default;
const IconCheckboxEmptySmall = require('./IconCheckboxEmptySmall').default;
const IconCheckboxEmptyTiny = require('./IconCheckboxEmptyTiny').default;
const IconCheckboxSmall = require('./IconCheckboxSmall').default;
const IconCheckboxTiny = require('./IconCheckboxTiny').default;
const IconCheckmark = require('./IconCheckmark').default;
const IconCheckmarkSmall = require('./IconCheckmarkSmall').default;
const IconCheckmarkTiny = require('./IconCheckmarkTiny').default;
const IconClipboard = require('./IconClipboard').default;
const IconClipboardSmall = require('./IconClipboardSmall').default;
const IconClipboardTiny = require('./IconClipboardTiny').default;
const IconClock = require('./IconClock').default;
const IconClockSmall = require('./IconClockSmall').default;
const IconClockTiny = require('./IconClockTiny').default;
const IconClose = require('./IconClose').default;
const IconCloseSmall = require('./IconCloseSmall').default;
const IconCloseTiny = require('./IconCloseTiny').default;
const IconComment = require('./IconComment').default;
const IconCommentSmall = require('./IconCommentSmall').default;
const IconCommentTiny = require('./IconCommentTiny').default;
const IconControls = require('./IconControls').default;
const IconControlsSmall = require('./IconControlsSmall').default;
const IconControlsTiny = require('./IconControlsTiny').default;
const IconCross = require('./IconCross').default;
const IconCrossSmall = require('./IconCrossSmall').default;
const IconCrossTiny = require('./IconCrossTiny').default;
const IconDashboard = require('./IconDashboard').default;
const IconDashboardSmall = require('./IconDashboardSmall').default;
const IconDashboardTiny = require('./IconDashboardTiny').default;
const IconDiscord = require('./IconDiscord').default;
const IconDownload = require('./IconDownload').default;
const IconDownloadSmall = require('./IconDownloadSmall').default;
const IconDownloadTiny = require('./IconDownloadTiny').default;
const IconDropdown = require('./IconDropdown').default;
const IconDropdownSmall = require('./IconDropdownSmall').default;
const IconDropdownTiny = require('./IconDropdownTiny').default;
const IconEnvelope = require('./IconEnvelope').default;
const IconEnvelopeSmall = require('./IconEnvelopeSmall').default;
const IconEnvelopeTiny = require('./IconEnvelopeTiny').default;
const IconError = require('./IconError').default;
const IconErrorSmall = require('./IconErrorSmall').default;
const IconErrorTiny = require('./IconErrorTiny').default;
const IconExternal = require('./IconExternal').default;
const IconExternalSmall = require('./IconExternalSmall').default;
const IconExternalTiny = require('./IconExternalTiny').default;
const IconEye = require('./IconEye').default;
const IconEyeCrossed = require('./IconEyeCrossed').default;
const IconEyeCrossedSmall = require('./IconEyeCrossedSmall').default;
const IconEyeCrossedTiny = require('./IconEyeCrossedTiny').default;
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
const IconGear = require('./IconGear').default;
const IconGearSmall = require('./IconGearSmall').default;
const IconGearTiny = require('./IconGearTiny').default;
const IconGoogleplus = require('./IconGoogleplus').default;
const IconGrid = require('./IconGrid').default;
const IconGridSmall = require('./IconGridSmall').default;
const IconGridTiny = require('./IconGridTiny').default;
const IconGripper = require('./IconGripper').default;
const IconGripperSmall = require('./IconGripperSmall').default;
const IconGripperTiny = require('./IconGripperTiny').default;
const IconH2 = require('./IconH2').default;
const IconH2Small = require('./IconH2Small').default;
const IconH2Tiny = require('./IconH2Tiny').default;
const IconH3 = require('./IconH3').default;
const IconH3Small = require('./IconH3Small').default;
const IconH3Tiny = require('./IconH3Tiny').default;
const IconHeart = require('./IconHeart').default;
const IconHeartFilled = require('./IconHeartFilled').default;
const IconHeartFilledSmall = require('./IconHeartFilledSmall').default;
const IconHeartFilledTiny = require('./IconHeartFilledTiny').default;
const IconHeartSmall = require('./IconHeartSmall').default;
const IconHeartTiny = require('./IconHeartTiny').default;
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
const IconInfo = require('./IconInfo').default;
const IconInfoSmall = require('./IconInfoSmall').default;
const IconInfoTiny = require('./IconInfoTiny').default;
const IconInstagram = require('./IconInstagram').default;
const IconItalics = require('./IconItalics').default;
const IconItalicsSmall = require('./IconItalicsSmall').default;
const IconItalicsTiny = require('./IconItalicsTiny').default;
const IconLeftAlign = require('./IconLeftAlign').default;
const IconLeftAlignSmall = require('./IconLeftAlignSmall').default;
const IconLeftAlignTiny = require('./IconLeftAlignTiny').default;
const IconLine = require('./IconLine').default;
const IconLink = require('./IconLink').default;
const IconLinkSmall = require('./IconLinkSmall').default;
const IconLinkTiny = require('./IconLinkTiny').default;
const IconLinkedin = require('./IconLinkedin').default;
const IconLoading = require('./IconLoading').default;
const IconLock = require('./IconLock').default;
const IconLockSmall = require('./IconLockSmall').default;
const IconLockTiny = require('./IconLockTiny').default;
const IconMagnifyingGlass = require('./IconMagnifyingGlass').default;
const IconMagnifyingGlassSmall = require('./IconMagnifyingGlassSmall').default;
const IconMagnifyingGlassTiny = require('./IconMagnifyingGlassTiny').default;
const IconMap = require('./IconMap').default;
const IconMapSmall = require('./IconMapSmall').default;
const IconMapTiny = require('./IconMapTiny').default;
const IconMeneame = require('./IconMeneame').default;
const IconMention = require('./IconMention').default;
const IconMentionSmall = require('./IconMentionSmall').default;
const IconMentionTiny = require('./IconMentionTiny').default;
const IconMenu = require('./IconMenu').default;
const IconMenuControl = require('./IconMenuControl').default;
const IconMenuControlSmall = require('./IconMenuControlSmall').default;
const IconMenuControlTiny = require('./IconMenuControlTiny').default;
const IconMenuSmall = require('./IconMenuSmall').default;
const IconMenuTiny = require('./IconMenuTiny').default;
const IconMessage = require('./IconMessage').default;
const IconMessageSmall = require('./IconMessageSmall').default;
const IconMessageTiny = require('./IconMessageTiny').default;
const IconMore = require('./IconMore').default;
const IconMoreSmall = require('./IconMoreSmall').default;
const IconMoreTiny = require('./IconMoreTiny').default;
const IconMove = require('./IconMove').default;
const IconMoveSmall = require('./IconMoveSmall').default;
const IconMoveTiny = require('./IconMoveTiny').default;
const IconNk = require('./IconNk').default;
const IconNumberedList = require('./IconNumberedList').default;
const IconNumberedListSmall = require('./IconNumberedListSmall').default;
const IconNumberedListTiny = require('./IconNumberedListTiny').default;
const IconOdnoklassniki = require('./IconOdnoklassniki').default;
const IconPage = require('./IconPage').default;
const IconPageList = require('./IconPageList').default;
const IconPageListSmall = require('./IconPageListSmall').default;
const IconPageListTiny = require('./IconPageListTiny').default;
const IconPageSmall = require('./IconPageSmall').default;
const IconPageTiny = require('./IconPageTiny').default;
const IconPages = require('./IconPages').default;
const IconPagesSmall = require('./IconPagesSmall').default;
const IconPagesTiny = require('./IconPagesTiny').default;
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
const IconPreformat = require('./IconPreformat').default;
const IconPreformatSmall = require('./IconPreformatSmall').default;
const IconPreformatTiny = require('./IconPreformatTiny').default;
const IconQuestion = require('./IconQuestion').default;
const IconQuestionSmall = require('./IconQuestionSmall').default;
const IconQuestionTiny = require('./IconQuestionTiny').default;
const IconQuiz = require('./IconQuiz').default;
const IconQuizSmall = require('./IconQuizSmall').default;
const IconQuizTiny = require('./IconQuizTiny').default;
const IconQuote = require('./IconQuote').default;
const IconQuoteSmall = require('./IconQuoteSmall').default;
const IconQuoteTiny = require('./IconQuoteTiny').default;
const IconQzone = require('./IconQzone').default;
const IconRadioActive = require('./IconRadioActive').default;
const IconRadioActiveSmall = require('./IconRadioActiveSmall').default;
const IconRadioActiveTiny = require('./IconRadioActiveTiny').default;
const IconRadioEmpty = require('./IconRadioEmpty').default;
const IconRadioEmptySmall = require('./IconRadioEmptySmall').default;
const IconRadioEmptyTiny = require('./IconRadioEmptyTiny').default;
const IconReddit = require('./IconReddit').default;
const IconRedditSmall = require('./IconRedditSmall').default;
const IconRedditTiny = require('./IconRedditTiny').default;
const IconRefresh = require('./IconRefresh').default;
const IconRefreshSmall = require('./IconRefreshSmall').default;
const IconRefreshTiny = require('./IconRefreshTiny').default;
const IconReply = require('./IconReply').default;
const IconReplySmall = require('./IconReplySmall').default;
const IconReplyTiny = require('./IconReplyTiny').default;
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
const IconTrashOpen = require('./IconTrashOpen').default;
const IconTrashOpenSmall = require('./IconTrashOpenSmall').default;
const IconTrashOpenTiny = require('./IconTrashOpenTiny').default;
const IconTrashSmall = require('./IconTrashSmall').default;
const IconTrashTiny = require('./IconTrashTiny').default;
const IconTumblr = require('./IconTumblr').default;
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
const IconUserSmall = require('./IconUserSmall').default;
const IconUserTiny = require('./IconUserTiny').default;
const IconUsers = require('./IconUsers').default;
const IconUsersSmall = require('./IconUsersSmall').default;
const IconUsersTiny = require('./IconUsersTiny').default;
const IconVideo = require('./IconVideo').default;
const IconVideoSmall = require('./IconVideoSmall').default;
const IconVideoTiny = require('./IconVideoTiny').default;
const IconVkontakte = require('./IconVkontakte').default;
const IconWatch = require('./IconWatch').default;
const IconWatchSmall = require('./IconWatchSmall').default;
const IconWatchTiny = require('./IconWatchTiny').default;
const IconWeibo = require('./IconWeibo').default;
const IconWykop = require('./IconWykop').default;
const IconYoutube = require('./IconYoutube').default;
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
        <IconName>IconActivity</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconActivity</VariantName>
            <VariantComponent><IconActivity style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconActivitySmall</VariantName>
            <VariantComponent><IconActivitySmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconActivityTiny</VariantName>
            <VariantComponent><IconActivityTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconAdd</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconAdd</VariantName>
            <VariantComponent><IconAdd style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconAddSmall</VariantName>
            <VariantComponent><IconAddSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconAddTiny</VariantName>
            <VariantComponent><IconAddTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconAlert</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconAlert</VariantName>
            <VariantComponent><IconAlert style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconAlertSmall</VariantName>
            <VariantComponent><IconAlertSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconAlertTiny</VariantName>
            <VariantComponent><IconAlertTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconArrow</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconArrow</VariantName>
            <VariantComponent><IconArrow style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconArrowSmall</VariantName>
            <VariantComponent><IconArrowSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconArrowTiny</VariantName>
            <VariantComponent><IconArrowTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconAvatar</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconAvatar</VariantName>
            <VariantComponent><IconAvatar style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconAvatarSmall</VariantName>
            <VariantComponent><IconAvatarSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconAvatarTiny</VariantName>
            <VariantComponent><IconAvatarTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconBell</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconBell</VariantName>
            <VariantComponent><IconBell style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconBellSmall</VariantName>
            <VariantComponent><IconBellSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconBellTiny</VariantName>
            <VariantComponent><IconBellTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconBlocks</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconBlocks</VariantName>
            <VariantComponent><IconBlocks style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconBlocksSmall</VariantName>
            <VariantComponent><IconBlocksSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconBlocksTiny</VariantName>
            <VariantComponent><IconBlocksTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconBold</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconBold</VariantName>
            <VariantComponent><IconBold style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconBoldSmall</VariantName>
            <VariantComponent><IconBoldSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconBoldTiny</VariantName>
            <VariantComponent><IconBoldTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconBoldActive</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconBoldActive</VariantName>
            <VariantComponent><IconBoldActive style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconBoldActiveSmall</VariantName>
            <VariantComponent><IconBoldActiveSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconBoldActiveTiny</VariantName>
            <VariantComponent><IconBoldActiveTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconBook</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconBook</VariantName>
            <VariantComponent><IconBook style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconBookSmall</VariantName>
            <VariantComponent><IconBookSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconBookTiny</VariantName>
            <VariantComponent><IconBookTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconBookmark</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconBookmark</VariantName>
            <VariantComponent><IconBookmark style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconBookmarkSmall</VariantName>
            <VariantComponent><IconBookmarkSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconBookmarkTiny</VariantName>
            <VariantComponent><IconBookmarkTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconBubble</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconBubble</VariantName>
            <VariantComponent><IconBubble style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconBubbleSmall</VariantName>
            <VariantComponent><IconBubbleSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconBubbleTiny</VariantName>
            <VariantComponent><IconBubbleTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconBulletList</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconBulletList</VariantName>
            <VariantComponent><IconBulletList style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconBulletListSmall</VariantName>
            <VariantComponent><IconBulletListSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconBulletListTiny</VariantName>
            <VariantComponent><IconBulletListTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconCalendar</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconCalendar</VariantName>
            <VariantComponent><IconCalendar style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconCalendarSmall</VariantName>
            <VariantComponent><IconCalendarSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconCalendarTiny</VariantName>
            <VariantComponent><IconCalendarTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconCamera</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconCamera</VariantName>
            <VariantComponent><IconCamera style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconCameraSmall</VariantName>
            <VariantComponent><IconCameraSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconCameraTiny</VariantName>
            <VariantComponent><IconCameraTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconCheckbox</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconCheckbox</VariantName>
            <VariantComponent><IconCheckbox style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconCheckboxSmall</VariantName>
            <VariantComponent><IconCheckboxSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconCheckboxTiny</VariantName>
            <VariantComponent><IconCheckboxTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconCheckboxEmpty</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconCheckboxEmpty</VariantName>
            <VariantComponent><IconCheckboxEmpty style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconCheckboxEmptySmall</VariantName>
            <VariantComponent><IconCheckboxEmptySmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconCheckboxEmptyTiny</VariantName>
            <VariantComponent><IconCheckboxEmptyTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconCheckmark</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconCheckmark</VariantName>
            <VariantComponent><IconCheckmark style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconCheckmarkSmall</VariantName>
            <VariantComponent><IconCheckmarkSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconCheckmarkTiny</VariantName>
            <VariantComponent><IconCheckmarkTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconClipboard</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconClipboard</VariantName>
            <VariantComponent><IconClipboard style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconClipboardSmall</VariantName>
            <VariantComponent><IconClipboardSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconClipboardTiny</VariantName>
            <VariantComponent><IconClipboardTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconClock</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconClock</VariantName>
            <VariantComponent><IconClock style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconClockSmall</VariantName>
            <VariantComponent><IconClockSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconClockTiny</VariantName>
            <VariantComponent><IconClockTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconClose</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconClose</VariantName>
            <VariantComponent><IconClose style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconCloseSmall</VariantName>
            <VariantComponent><IconCloseSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconCloseTiny</VariantName>
            <VariantComponent><IconCloseTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconComment</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconComment</VariantName>
            <VariantComponent><IconComment style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconCommentSmall</VariantName>
            <VariantComponent><IconCommentSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconCommentTiny</VariantName>
            <VariantComponent><IconCommentTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconControls</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconControls</VariantName>
            <VariantComponent><IconControls style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconControlsSmall</VariantName>
            <VariantComponent><IconControlsSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconControlsTiny</VariantName>
            <VariantComponent><IconControlsTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconCross</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconCross</VariantName>
            <VariantComponent><IconCross style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconCrossSmall</VariantName>
            <VariantComponent><IconCrossSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconCrossTiny</VariantName>
            <VariantComponent><IconCrossTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconDashboard</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconDashboard</VariantName>
            <VariantComponent><IconDashboard style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconDashboardSmall</VariantName>
            <VariantComponent><IconDashboardSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconDashboardTiny</VariantName>
            <VariantComponent><IconDashboardTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconDiscord</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconDiscord</VariantName>
            <VariantComponent><IconDiscord style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconDownload</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconDownload</VariantName>
            <VariantComponent><IconDownload style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconDownloadSmall</VariantName>
            <VariantComponent><IconDownloadSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconDownloadTiny</VariantName>
            <VariantComponent><IconDownloadTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconDropdown</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconDropdown</VariantName>
            <VariantComponent><IconDropdown style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconDropdownSmall</VariantName>
            <VariantComponent><IconDropdownSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconDropdownTiny</VariantName>
            <VariantComponent><IconDropdownTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconEnvelope</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconEnvelope</VariantName>
            <VariantComponent><IconEnvelope style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconEnvelopeSmall</VariantName>
            <VariantComponent><IconEnvelopeSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconEnvelopeTiny</VariantName>
            <VariantComponent><IconEnvelopeTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconError</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconError</VariantName>
            <VariantComponent><IconError style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconErrorSmall</VariantName>
            <VariantComponent><IconErrorSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconErrorTiny</VariantName>
            <VariantComponent><IconErrorTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconExternal</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconExternal</VariantName>
            <VariantComponent><IconExternal style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconExternalSmall</VariantName>
            <VariantComponent><IconExternalSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconExternalTiny</VariantName>
            <VariantComponent><IconExternalTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconEye</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconEye</VariantName>
            <VariantComponent><IconEye style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconEyeSmall</VariantName>
            <VariantComponent><IconEyeSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconEyeTiny</VariantName>
            <VariantComponent><IconEyeTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconEyeCrossed</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconEyeCrossed</VariantName>
            <VariantComponent><IconEyeCrossed style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconEyeCrossedSmall</VariantName>
            <VariantComponent><IconEyeCrossedSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconEyeCrossedTiny</VariantName>
            <VariantComponent><IconEyeCrossedTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconFacebook</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconFacebook</VariantName>
            <VariantComponent><IconFacebook style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconFacebookSmall</VariantName>
            <VariantComponent><IconFacebookSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconFacebookTiny</VariantName>
            <VariantComponent><IconFacebookTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconFandom</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconFandom</VariantName>
            <VariantComponent><IconFandom style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconFandomSmall</VariantName>
            <VariantComponent><IconFandomSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconFandomTiny</VariantName>
            <VariantComponent><IconFandomTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconFlag</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconFlag</VariantName>
            <VariantComponent><IconFlag style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconFlagSmall</VariantName>
            <VariantComponent><IconFlagSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconFlagTiny</VariantName>
            <VariantComponent><IconFlagTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconFootnote</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconFootnote</VariantName>
            <VariantComponent><IconFootnote style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconFootnoteSmall</VariantName>
            <VariantComponent><IconFootnoteSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconFootnoteTiny</VariantName>
            <VariantComponent><IconFootnoteTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconGear</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconGear</VariantName>
            <VariantComponent><IconGear style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconGearSmall</VariantName>
            <VariantComponent><IconGearSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconGearTiny</VariantName>
            <VariantComponent><IconGearTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconGoogleplus</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconGoogleplus</VariantName>
            <VariantComponent><IconGoogleplus style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconGrid</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconGrid</VariantName>
            <VariantComponent><IconGrid style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconGridSmall</VariantName>
            <VariantComponent><IconGridSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconGridTiny</VariantName>
            <VariantComponent><IconGridTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconGripper</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconGripper</VariantName>
            <VariantComponent><IconGripper style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconGripperSmall</VariantName>
            <VariantComponent><IconGripperSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconGripperTiny</VariantName>
            <VariantComponent><IconGripperTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconH2</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconH2</VariantName>
            <VariantComponent><IconH2 style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconH2Small</VariantName>
            <VariantComponent><IconH2Small style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconH2Tiny</VariantName>
            <VariantComponent><IconH2Tiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconH3</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconH3</VariantName>
            <VariantComponent><IconH3 style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconH3Small</VariantName>
            <VariantComponent><IconH3Small style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconH3Tiny</VariantName>
            <VariantComponent><IconH3Tiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconHeart</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconHeart</VariantName>
            <VariantComponent><IconHeart style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconHeartSmall</VariantName>
            <VariantComponent><IconHeartSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconHeartTiny</VariantName>
            <VariantComponent><IconHeartTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconHeartFilled</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconHeartFilled</VariantName>
            <VariantComponent><IconHeartFilled style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconHeartFilledSmall</VariantName>
            <VariantComponent><IconHeartFilledSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconHeartFilledTiny</VariantName>
            <VariantComponent><IconHeartFilledTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconHome</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconHome</VariantName>
            <VariantComponent><IconHome style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconHomeSmall</VariantName>
            <VariantComponent><IconHomeSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconHomeTiny</VariantName>
            <VariantComponent><IconHomeTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconImage</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconImage</VariantName>
            <VariantComponent><IconImage style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconImageSmall</VariantName>
            <VariantComponent><IconImageSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconImageTiny</VariantName>
            <VariantComponent><IconImageTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconImages</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconImages</VariantName>
            <VariantComponent><IconImages style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconImagesSmall</VariantName>
            <VariantComponent><IconImagesSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconImagesTiny</VariantName>
            <VariantComponent><IconImagesTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconIndentLeft</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconIndentLeft</VariantName>
            <VariantComponent><IconIndentLeft style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconIndentLeftSmall</VariantName>
            <VariantComponent><IconIndentLeftSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconIndentLeftTiny</VariantName>
            <VariantComponent><IconIndentLeftTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconIndentRight</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconIndentRight</VariantName>
            <VariantComponent><IconIndentRight style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconIndentRightSmall</VariantName>
            <VariantComponent><IconIndentRightSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconIndentRightTiny</VariantName>
            <VariantComponent><IconIndentRightTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconInfo</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconInfo</VariantName>
            <VariantComponent><IconInfo style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconInfoSmall</VariantName>
            <VariantComponent><IconInfoSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconInfoTiny</VariantName>
            <VariantComponent><IconInfoTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconInstagram</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconInstagram</VariantName>
            <VariantComponent><IconInstagram style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconItalics</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconItalics</VariantName>
            <VariantComponent><IconItalics style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconItalicsSmall</VariantName>
            <VariantComponent><IconItalicsSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconItalicsTiny</VariantName>
            <VariantComponent><IconItalicsTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconLeftAlign</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconLeftAlign</VariantName>
            <VariantComponent><IconLeftAlign style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconLeftAlignSmall</VariantName>
            <VariantComponent><IconLeftAlignSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconLeftAlignTiny</VariantName>
            <VariantComponent><IconLeftAlignTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconLine</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconLine</VariantName>
            <VariantComponent><IconLine style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconLink</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconLink</VariantName>
            <VariantComponent><IconLink style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconLinkSmall</VariantName>
            <VariantComponent><IconLinkSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconLinkTiny</VariantName>
            <VariantComponent><IconLinkTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconLinkedin</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconLinkedin</VariantName>
            <VariantComponent><IconLinkedin style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconLoading</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconLoading</VariantName>
            <VariantComponent><IconLoading style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconLock</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconLock</VariantName>
            <VariantComponent><IconLock style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconLockSmall</VariantName>
            <VariantComponent><IconLockSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconLockTiny</VariantName>
            <VariantComponent><IconLockTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconMagnifyingGlass</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconMagnifyingGlass</VariantName>
            <VariantComponent><IconMagnifyingGlass style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconMagnifyingGlassSmall</VariantName>
            <VariantComponent><IconMagnifyingGlassSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconMagnifyingGlassTiny</VariantName>
            <VariantComponent><IconMagnifyingGlassTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconMap</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconMap</VariantName>
            <VariantComponent><IconMap style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconMapSmall</VariantName>
            <VariantComponent><IconMapSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconMapTiny</VariantName>
            <VariantComponent><IconMapTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconMeneame</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconMeneame</VariantName>
            <VariantComponent><IconMeneame style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconMention</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconMention</VariantName>
            <VariantComponent><IconMention style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconMentionSmall</VariantName>
            <VariantComponent><IconMentionSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconMentionTiny</VariantName>
            <VariantComponent><IconMentionTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconMenu</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconMenu</VariantName>
            <VariantComponent><IconMenu style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconMenuSmall</VariantName>
            <VariantComponent><IconMenuSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconMenuTiny</VariantName>
            <VariantComponent><IconMenuTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconMenuControl</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconMenuControl</VariantName>
            <VariantComponent><IconMenuControl style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconMenuControlSmall</VariantName>
            <VariantComponent><IconMenuControlSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconMenuControlTiny</VariantName>
            <VariantComponent><IconMenuControlTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconMessage</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconMessage</VariantName>
            <VariantComponent><IconMessage style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconMessageSmall</VariantName>
            <VariantComponent><IconMessageSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconMessageTiny</VariantName>
            <VariantComponent><IconMessageTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconMore</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconMore</VariantName>
            <VariantComponent><IconMore style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconMoreSmall</VariantName>
            <VariantComponent><IconMoreSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconMoreTiny</VariantName>
            <VariantComponent><IconMoreTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconMove</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconMove</VariantName>
            <VariantComponent><IconMove style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconMoveSmall</VariantName>
            <VariantComponent><IconMoveSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconMoveTiny</VariantName>
            <VariantComponent><IconMoveTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconNk</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconNk</VariantName>
            <VariantComponent><IconNk style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconNumberedList</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconNumberedList</VariantName>
            <VariantComponent><IconNumberedList style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconNumberedListSmall</VariantName>
            <VariantComponent><IconNumberedListSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconNumberedListTiny</VariantName>
            <VariantComponent><IconNumberedListTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconOdnoklassniki</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconOdnoklassniki</VariantName>
            <VariantComponent><IconOdnoklassniki style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconPage</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconPage</VariantName>
            <VariantComponent><IconPage style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPageSmall</VariantName>
            <VariantComponent><IconPageSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPageTiny</VariantName>
            <VariantComponent><IconPageTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconPageList</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconPageList</VariantName>
            <VariantComponent><IconPageList style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPageListSmall</VariantName>
            <VariantComponent><IconPageListSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPageListTiny</VariantName>
            <VariantComponent><IconPageListTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconPages</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconPages</VariantName>
            <VariantComponent><IconPages style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPagesSmall</VariantName>
            <VariantComponent><IconPagesSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPagesTiny</VariantName>
            <VariantComponent><IconPagesTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconParagraph</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconParagraph</VariantName>
            <VariantComponent><IconParagraph style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconParagraphSmall</VariantName>
            <VariantComponent><IconParagraphSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconParagraphTiny</VariantName>
            <VariantComponent><IconParagraphTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconPause</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconPause</VariantName>
            <VariantComponent><IconPause style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPauseSmall</VariantName>
            <VariantComponent><IconPauseSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPauseTiny</VariantName>
            <VariantComponent><IconPauseTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconPencil</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconPencil</VariantName>
            <VariantComponent><IconPencil style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPencilSmall</VariantName>
            <VariantComponent><IconPencilSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPencilTiny</VariantName>
            <VariantComponent><IconPencilTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconPin</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconPin</VariantName>
            <VariantComponent><IconPin style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPinSmall</VariantName>
            <VariantComponent><IconPinSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPinTiny</VariantName>
            <VariantComponent><IconPinTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconPlay</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconPlay</VariantName>
            <VariantComponent><IconPlay style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPlaySmall</VariantName>
            <VariantComponent><IconPlaySmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPlayTiny</VariantName>
            <VariantComponent><IconPlayTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconPoll</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconPoll</VariantName>
            <VariantComponent><IconPoll style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPollSmall</VariantName>
            <VariantComponent><IconPollSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPollTiny</VariantName>
            <VariantComponent><IconPollTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconPreformat</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconPreformat</VariantName>
            <VariantComponent><IconPreformat style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPreformatSmall</VariantName>
            <VariantComponent><IconPreformatSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconPreformatTiny</VariantName>
            <VariantComponent><IconPreformatTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconQuestion</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconQuestion</VariantName>
            <VariantComponent><IconQuestion style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconQuestionSmall</VariantName>
            <VariantComponent><IconQuestionSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconQuestionTiny</VariantName>
            <VariantComponent><IconQuestionTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconQuiz</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconQuiz</VariantName>
            <VariantComponent><IconQuiz style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconQuizSmall</VariantName>
            <VariantComponent><IconQuizSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconQuizTiny</VariantName>
            <VariantComponent><IconQuizTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconQuote</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconQuote</VariantName>
            <VariantComponent><IconQuote style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconQuoteSmall</VariantName>
            <VariantComponent><IconQuoteSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconQuoteTiny</VariantName>
            <VariantComponent><IconQuoteTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconQzone</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconQzone</VariantName>
            <VariantComponent><IconQzone style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconRadioActive</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconRadioActive</VariantName>
            <VariantComponent><IconRadioActive style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconRadioActiveSmall</VariantName>
            <VariantComponent><IconRadioActiveSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconRadioActiveTiny</VariantName>
            <VariantComponent><IconRadioActiveTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconRadioEmpty</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconRadioEmpty</VariantName>
            <VariantComponent><IconRadioEmpty style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconRadioEmptySmall</VariantName>
            <VariantComponent><IconRadioEmptySmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconRadioEmptyTiny</VariantName>
            <VariantComponent><IconRadioEmptyTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconReddit</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconReddit</VariantName>
            <VariantComponent><IconReddit style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconRedditSmall</VariantName>
            <VariantComponent><IconRedditSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconRedditTiny</VariantName>
            <VariantComponent><IconRedditTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconRefresh</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconRefresh</VariantName>
            <VariantComponent><IconRefresh style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconRefreshSmall</VariantName>
            <VariantComponent><IconRefreshSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconRefreshTiny</VariantName>
            <VariantComponent><IconRefreshTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconReply</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconReply</VariantName>
            <VariantComponent><IconReply style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconReplySmall</VariantName>
            <VariantComponent><IconReplySmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconReplyTiny</VariantName>
            <VariantComponent><IconReplyTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconShare</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconShare</VariantName>
            <VariantComponent><IconShare style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconShareSmall</VariantName>
            <VariantComponent><IconShareSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconShareTiny</VariantName>
            <VariantComponent><IconShareTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconSitemap</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconSitemap</VariantName>
            <VariantComponent><IconSitemap style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconSitemapSmall</VariantName>
            <VariantComponent><IconSitemapSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconSitemapTiny</VariantName>
            <VariantComponent><IconSitemapTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconSound</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconSound</VariantName>
            <VariantComponent><IconSound style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconSoundSmall</VariantName>
            <VariantComponent><IconSoundSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconSoundTiny</VariantName>
            <VariantComponent><IconSoundTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconSoundOff</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconSoundOff</VariantName>
            <VariantComponent><IconSoundOff style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconSoundOffSmall</VariantName>
            <VariantComponent><IconSoundOffSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconSoundOffTiny</VariantName>
            <VariantComponent><IconSoundOffTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconTag</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconTag</VariantName>
            <VariantComponent><IconTag style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconTagSmall</VariantName>
            <VariantComponent><IconTagSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconTagTiny</VariantName>
            <VariantComponent><IconTagTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconText</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconText</VariantName>
            <VariantComponent><IconText style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconTextSmall</VariantName>
            <VariantComponent><IconTextSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconTextTiny</VariantName>
            <VariantComponent><IconTextTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconTrash</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconTrash</VariantName>
            <VariantComponent><IconTrash style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconTrashSmall</VariantName>
            <VariantComponent><IconTrashSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconTrashTiny</VariantName>
            <VariantComponent><IconTrashTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconTrashOpen</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconTrashOpen</VariantName>
            <VariantComponent><IconTrashOpen style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconTrashOpenSmall</VariantName>
            <VariantComponent><IconTrashOpenSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconTrashOpenTiny</VariantName>
            <VariantComponent><IconTrashOpenTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconTumblr</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconTumblr</VariantName>
            <VariantComponent><IconTumblr style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconTwitter</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconTwitter</VariantName>
            <VariantComponent><IconTwitter style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconTwitterSmall</VariantName>
            <VariantComponent><IconTwitterSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconTwitterTiny</VariantName>
            <VariantComponent><IconTwitterTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconUnlock</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconUnlock</VariantName>
            <VariantComponent><IconUnlock style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconUnlockSmall</VariantName>
            <VariantComponent><IconUnlockSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconUnlockTiny</VariantName>
            <VariantComponent><IconUnlockTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconUpvote</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconUpvote</VariantName>
            <VariantComponent><IconUpvote style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconUpvoteSmall</VariantName>
            <VariantComponent><IconUpvoteSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconUpvoteTiny</VariantName>
            <VariantComponent><IconUpvoteTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconUser</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconUser</VariantName>
            <VariantComponent><IconUser style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconUserSmall</VariantName>
            <VariantComponent><IconUserSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconUserTiny</VariantName>
            <VariantComponent><IconUserTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconUsers</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconUsers</VariantName>
            <VariantComponent><IconUsers style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconUsersSmall</VariantName>
            <VariantComponent><IconUsersSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconUsersTiny</VariantName>
            <VariantComponent><IconUsersTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconVideo</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconVideo</VariantName>
            <VariantComponent><IconVideo style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconVideoSmall</VariantName>
            <VariantComponent><IconVideoSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconVideoTiny</VariantName>
            <VariantComponent><IconVideoTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconVkontakte</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconVkontakte</VariantName>
            <VariantComponent><IconVkontakte style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconWatch</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconWatch</VariantName>
            <VariantComponent><IconWatch style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconWatchSmall</VariantName>
            <VariantComponent><IconWatchSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconWatchTiny</VariantName>
            <VariantComponent><IconWatchTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconWeibo</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconWeibo</VariantName>
            <VariantComponent><IconWeibo style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconWykop</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconWykop</VariantName>
            <VariantComponent><IconWykop style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconYoutube</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconYoutube</VariantName>
            <VariantComponent><IconYoutube style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconZoomIn</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconZoomIn</VariantName>
            <VariantComponent><IconZoomIn style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconZoomInSmall</VariantName>
            <VariantComponent><IconZoomInSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconZoomInTiny</VariantName>
            <VariantComponent><IconZoomInTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>

    <Icon>
        <IconName>IconZoomOut</IconName>
        <Variants>
            
        <IconVariant>
            <VariantName>IconZoomOut</VariantName>
            <VariantComponent><IconZoomOut style={{width: '24px', height: '24px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconZoomOutSmall</VariantName>
            <VariantComponent><IconZoomOutSmall style={{width: '18px', height: '18px'}}/></VariantComponent>
        </IconVariant>
        
        <IconVariant>
            <VariantName>IconZoomOutTiny</VariantName>
            <VariantComponent><IconZoomOutTiny style={{width: '12px', height: '12px'}}/></VariantComponent>
        </IconVariant>
        </Variants>
    </Icon>
</IconsDemo>
```
