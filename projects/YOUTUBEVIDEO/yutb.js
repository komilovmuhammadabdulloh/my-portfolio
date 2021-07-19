//Made exclusivly for Chrome and Firefox. Not compatible with IE11.

(function() { //Header

    let flyoutButton = document.querySelectorAll('.fm'),
        flyoutContainer = document.querySelector('.flyout-container'),
        flyoutMenu = document.querySelector('.flyout-menu'),
        toggleSearchform = document.querySelectorAll('.toggle-form'),
        formContainer = document.querySelector('.form-container'),
        exitForm = document.querySelector('.exit-form'),
        appsButton = document.querySelector('.apps-button'),
        settingsButton = document.querySelector('.settings-button'),
        dropdownMenus = document.querySelectorAll('.dropdown-menus'),
        appsDropdown = document.querySelector('.apps-dropdown'),
        settingsDropdown = document.querySelector('.settings-dropdown'),
        subDropdown = document.querySelectorAll('.sub-dropdown'),
        themeDropdown = document.querySelector('.theme-dropdown'),
        languageDropdown = document.querySelector('.language-dropdown'),
        locationDropdown = document.querySelector('.location-dropdown'),
        restrictedDropdown = document.querySelector('.restricted-dropdown'),
        arrow = document.querySelectorAll('.arrow'),
        exitDropdown = document.querySelectorAll('.exit-dropdown'),
        toggleBar = document.querySelector('.toggle-bar'),
        restrictedBar = document.querySelector('.restricted-bar'),
        restricted = document.querySelector('.restricted'),
        restrictedButton = document.querySelector('.restricted-button');

    function toggleFlyout(e) {
        if ( e.target.classList.contains('open-flyout') ) {
            flyoutContainer.classList.add('display-dropdown');
            setTimeout(function() { flyoutContainer.classList.add('opacity'); flyoutMenu.classList.add('slide-in'); }, 10);
        } else if ( e.target.classList.contains('close-flyout') || e.target.classList.contains('flyout-container') ) {
            flyoutContainer.classList.remove('opacity');
            flyoutMenu.classList.remove('slide-in');
            setTimeout(function() { flyoutContainer.classList.remove('display-dropdown'); }, 300);
        }
    }

    function toggleForm(e) {
        if ( e.target.classList.contains('o-f') ) {
            formContainer.classList.add('display-form');
            exitForm.classList.add('display-dropdown');
        } else if ( e.target.classList.contains('c-f') ) {
            formContainer.classList.remove('display-form');
            exitForm.classList.remove('display-dropdown');
        }
    }

    function appsMenu() {
        if ( appsDropdown.classList.contains('display-dropdown') ) {
            appsDropdown.classList.remove('display-dropdown');
        } else {
            appsDropdown.classList.add('display-dropdown');
            setTimeout(function() { window.addEventListener('click', closeAppsMenu, false); }, 150);
        }
    }

    function settingsMenu() {
        if ( settingsDropdown.classList.contains('display-dropdown') ) {
            settingsDropdown.classList.remove('display-dropdown');
        } else {
            settingsDropdown.classList.add('display-dropdown');
            setTimeout(function() { window.addEventListener('click', closeSettingsMenu, false); }, 150);
        }
    }

    function settingsOptions(e) {
        if ( e.target.classList.contains('change-settings') ) {
            themeDropdown.classList.add('display-dropdown');
        } else if ( e.target.classList.contains('change-language') ) {
            languageDropdown.classList.add('display-dropdown');
        } else if ( e.target.classList.contains('change-location') ) {
            locationDropdown.classList.add('display-dropdown');
        } else if ( e.target.classList.contains('change-restricted') ) {
            restrictedDropdown.classList.add('display-dropdown');
        }
        settingsDropdown.classList.remove('display-dropdown');
        setTimeout(function() { window.addEventListener('click', closeSettingsOptions, false); }, 150);
    }

    function exitDropdownMenus(e) {
        if ( e.target.classList.contains('exit-dropdown') ) {
            for ( var i = 0; i < dropdownMenus.length; i++ ) {
                dropdownMenus[i].classList.remove('display-dropdown');
            }
        }
        settingsDropdown.classList.add('display-dropdown');
        setTimeout(function() { window.addEventListener('click', closeSettingsMenu, false); }, 150);
    }

    function changeTheme() {
        if ( toggleBar.classList.contains('dark-toggle-bar') ) {
            $('.d-clr1, body').removeClass('dark-color-one');
            $('.d-clr2').removeClass('dark-color-two');
            $('.d-clr3').removeClass('dark-color-three');
            $('.sa').removeClass('grey-text');
            $('.d-bg1').removeClass('dark-bg-one');
            $('.d-bg2').removeClass('dark-bg-two');
            $('.d-bg3, body').removeClass('dark-bg-three');
            $('.d-bg4').removeClass('dark-bg-four');
            $('.new-video, .show-more').removeClass('dark-bg-five dark-color-four');
            $('.d-bg6').removeClass('dark-bg-six');
            $('.d-brd1').removeClass('dark-border-one');
            $('.d-brd2').removeClass('dark-border-two');
            $('.d-brd3').removeClass('dark-border-three');
            $('.d-brd4').removeClass('dark-border-four');
            $('.d-brd5').removeClass('dark-border-five');
            $('.d-brd6').removeClass('dark-border-six');
            $('.d-title').removeClass('dark-dropdown-title');
            $('.search-field').removeClass('remove-box-shadow');
            $('.toggle-button').removeClass('transform-button');
            $('.t-button').removeClass('dark-theme');
            $('.t-bar').removeClass('dark-toggle-bar');
            $('.primary-sign-in').removeClass('dark-sign-in');
            $('.secondary-sign-in').removeClass('flyout-sign-in');
            $('.view-reply').removeClass('dark-reply');
            $('.dl, .like, .reply').removeClass('dark-like');
        } else {
            $('.d-clr1, body').addClass('dark-color-one');
            $('.d-clr2').addClass('dark-color-two');
            $('.d-clr3').addClass('dark-color-three');
            $('.sa').addClass('grey-text');
            $('.new-video, .show-more').addClass('dark-bg-five dark-color-four');
            $('.d-bg1').addClass('dark-bg-one');
            $('.d-bg2').addClass('dark-bg-two');
            $('.d-bg3, body').addClass('dark-bg-three');
            $('.d-bg4').addClass('dark-bg-four');
            $('.d-bg6').addClass('dark-bg-six');
            $('.d-brd1').addClass('dark-border-one');
            $('.d-brd2').addClass('dark-border-two');
            $('.d-brd3').addClass('dark-border-three');
            $('.d-brd4').addClass('dark-border-four');
            $('.d-brd5').addClass('dark-border-five');
            $('.d-brd6').addClass('dark-border-six');
            $('.d-title').addClass('dark-dropdown-title');
            $('.search-field').addClass('remove-box-shadow');
            $('.toggle-button').addClass('transform-button');
            $('.t-button').addClass('dark-theme');
            $('.t-bar').addClass('dark-toggle-bar');
            $('.primary-sign-in').addClass('dark-sign-in');
            $('.secondary-sign-in').addClass('flyout-sign-in');
            $('.view-reply').addClass('dark-reply');
            $('.dl, .like, .reply').addClass('dark-like');
        }
    }

    function toggleRestriction() {
        if ( restrictedBar.classList.contains('blue-toggle-bar') ) {
            restrictedBar.classList.remove('blue-toggle-bar');
            restrictedButton.classList.remove('blue-toggle-button', 'transform-button');
            restricted.innerHTML = 'Off';
        } else {
            restrictedBar.classList.add('blue-toggle-bar');
            restrictedButton.classList.add('blue-toggle-button', 'transform-button');
            restricted.innerHTML = 'On';
        }
    }

    function closeAppsMenu(e) {
        if ( e.target.classList.contains('apps-dropdown-section') === false ) {
            appsDropdown.classList.remove('display-dropdown');
            window.removeEventListener('click', closeAppsMenu, false);
        }
    }

    function closeSettingsMenu(e) {
        if ( e.target.classList.contains('settings-dropdown-section') === false ) {
            settingsDropdown.classList.remove('display-dropdown');
            window.removeEventListener('click', closeSettingsMenu, false);
        }
    }

    function closeSettingsOptions(e) {
        if ( e.target.classList.contains('set-op') === false ) {
            for ( var i = 0; i < subDropdown.length; i++ ) {
                subDropdown[i].classList.remove('display-dropdown');
            }
            window.removeEventListener('click', closeSettingsOptions, false);
        }
    }

    /***Event Listeners***/
    for ( var i = 0; i < flyoutButton.length; i++ ) {
        flyoutButton[i].addEventListener('click', toggleFlyout, false);
    }
    for ( var i = 0; i < toggleSearchform.length; i++ ) {
        toggleSearchform[i].addEventListener('click', toggleForm, false);
    }
    appsButton.addEventListener('click', appsMenu, false);
    settingsButton.addEventListener('click', settingsMenu, false);
    for ( var i = 0; i < arrow.length; i++ ) {
        arrow[i].addEventListener('click', settingsOptions, false);
        exitDropdown[i].addEventListener('click', exitDropdownMenus, false);
    }
    toggleBar.addEventListener('click', changeTheme, false);
    restrictedBar.addEventListener('click', toggleRestriction, false);

})();

(function() { //Body

    let autoPlayBar = document.querySelector('.auto-play'),
        autoPlayButton = document.querySelector('.auto-play-button'),
        loadMore = document.querySelector('.load-more'),
        showMore = document.querySelector('.show-more'),
        detailsButton = document.querySelectorAll('.details-button'),
        revealDetails = document.querySelector('.reveal-details'),
        hideDetails = document.querySelector('.hide-details'),
        dRow = document.querySelector('.vd-row2'),
        sortComments = document.querySelector('.sort-comments'),
        sortMenu = document.querySelector('.sort-menu'),
        viewReply = document.querySelectorAll('.view-reply'),
        reveal = document.querySelector('.reveal-replies'),
        hide = document.querySelector('.hide-replies'),
        replies = document.querySelector('.replies'),
        shareButton = document.querySelector('.share-vid'),
        shareMenu = document.querySelector('.share-menu'),
        addButton = document.querySelector('.add-to'),
        addMenu = document.querySelector('.add-menu'),
        reportButton = document.querySelector('.report-menu'),
        reportDropdown = document.querySelector('.report-dropdown');

    function toggleAutoPlay() {
        if ( autoPlayBar.classList.contains('blue-toggle-bar') ) {
            autoPlayBar.classList.remove('blue-toggle-bar');
            autoPlayButton.classList.remove('blue-toggle-button', 'transform-button');
        } else {
            autoPlayBar.classList.add('blue-toggle-bar');
            autoPlayButton.classList.add('blue-toggle-button', 'transform-button');
        }
    }

    function moreVideos() {
        loadMore.classList.add('display-dropdown');
        showMore.classList.add('hide-element');
    }

    function videoDetails(e) {
        if ( e.target.classList.contains('reveal-details') ) {
            dRow.classList.add('max-height');
            revealDetails.classList.add('hide-element');
            hideDetails.classList.remove('hide-element');
        } else {
            dRow.classList.remove('max-height');
            revealDetails.classList.remove('hide-element');
            hideDetails.classList.add('hide-element');
        }
    }

    function sortingComments() {
        if ( sortMenu.classList.contains('hide-element') ) {
            sortMenu.classList.remove('hide-element');
            setTimeout(function() { window.addEventListener('click', closeSortMenu, false); }, 10);
        } else {
            sortMenu.classList.add('hide-element');
        }
    }

    function shareToMenu() {
        if ( shareMenu.classList.contains('hide-element') ) {
            shareMenu.classList.remove('hide-element');
            setTimeout(function() { window.addEventListener('click', closeShareMenu, false); }, 10);
        } else {
            shareMenu.classList.add('hide-element');
        }
    }

    function addToMenu() {
        if ( addMenu.classList.contains('hide-element') ) {
            addMenu.classList.remove('hide-element');
            setTimeout(function() { window.addEventListener('click', closeAddMenu, false); }, 10);
        } else {
            addMenu.classList.add('hide-element');
        }
    }

    function reportMenu() {
        if ( reportDropdown.classList.contains('hide-element') ) {
            reportDropdown.classList.remove('hide-element');
            setTimeout(function() { window.addEventListener('click', closeReportMenu, false); }, 10);
        } else {
            reportDropdown.classList.add('hide-element');
        }
    }

    function closeShareMenu(e) {
        if ( e.target.classList.contains('share-m') === false ) {
            shareMenu.classList.add('hide-element');
            window.removeEventListener('click', closeShareMenu, false);
        }
    }

    function closeAddMenu(e) {
        if ( e.target.classList.contains('add-m') === false ) {
            addMenu.classList.add('hide-element');
            window.removeEventListener('click', closeAddMenu, false);
        }
    }

    function closeReportMenu(e) {
        if ( e.target.classList.contains('report') === false ) {
            reportDropdown.classList.add('hide-element');
            window.removeEventListener('click', closeReportMenu, false);
        }
    }

    function closeSortMenu(e) {
        if ( e.target.classList.contains('sort') === false ) {
            sortMenu.classList.add('hide-element');
            window.removeEventListener('click', closeSortMenu, false);
        }
    }

    function commentReplies(e) {
        if ( e.target.classList.contains('reveal-replies') ) {
            reveal.classList.add('hide-element');
            hide.classList.remove('hide-element');
            replies.classList.remove('hide-element');
        } else {
            reveal.classList.remove('hide-element');
            hide.classList.add('hide-element');
            replies.classList.add('hide-element');
        }
    }

    /***Event Listeners***/
    autoPlayBar.addEventListener('click', toggleAutoPlay, false);
    showMore.addEventListener('click', moreVideos, false);
    for ( var i = 0; i < detailsButton.length; i++ ) {
        detailsButton[i].addEventListener('click', videoDetails, false);
    }
    shareButton.addEventListener('click', shareToMenu, false);
    addButton.addEventListener('click', addToMenu, false);
    reportButton.addEventListener('click', reportMenu, false);
    sortComments.addEventListener('click', sortingComments, false);
    for ( var i = 0; i < viewReply.length; i++ ) {
        viewReply[i].addEventListener('click', commentReplies, false);
    }

})();