/* #6 start the #external #action and say hello */
console.log("App is alive");

// CHALLENGE 7


/*set global variables*/
var currentChannel;

var currentLocation = {
    longitude: 52.154778,
    latitude: 9.9579652,
    what3words: '<a href="https://map.what3words.com/abr%C3%BCstung.essbaren.schleife?utm_source=w3w&utm_medium=owned&utm_campaign=B2C_4561_W3_Pt_Map-Site_Org_WO_en_Main-Site-Explore-Map"><strong>abrüstung.essbaren.schleife</strong></a>'
}

    console.log(currentLocation)

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
    //Log the channel switch

    currentChannel = channelName;

    console.log("currentChannel", currentChannel)

    console.log("Tuning in to channel", channelName);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = channelName.location;

    /* #6 #liking channels on #click */
    if (channelName.starred == true){
        $('#channel-star').removeClass('far');
        $('#channel-star').addClass('fas')
    }
    else {
        $('#channel-star').removeClass('fas');
        $('#channel-star').addClass('far');
    }

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + currentChannel.name + ')').addClass('selected');
}

/* #7 #liking a channel on #click */
function star(){
    $(this).toggleClass('fas');
    $(this).toggleClass('far');
}

$('#channel-star').on('click', star)


/* toggle stars on click in channel list*/
function like(){
    $(this).toggleClass('far');
    $(this).toggleClass('fas');
}

$('.selected fa-star').on('click', like)


/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}


// CHALLENGE 8

/*create new messages*/

function Message(createdBy, latitude, longitude, createdOn, expiresOn, text, own) {
    this.createdBy = currentLocation.what3words;
    this.latitude = currentLocation.latitude;
    this.longitude = currentLocation.longitude;
    this.createdOn = Date.now();
    this.expiresOn = this.createdOn + (1000 /*sec*/ * 60 /*min*/ * 15 /*hour*/ * 1 /*day*/ * 1);
    this.text = text;
    this.own = true;
 
}


/*sendMessage function*/
function sendMessage() {

   
    var sentMessage = new Message ($('#message-text').val());
    $('#message-text[type=text]').val('')

    console.log(sentMessage)

    $('#messages').append(createMessageElement());
    $('#messages').scrollTop($('#messages').prop('scrollHeight'))
}

/* Create message element function*/
function createMessageElement(_messageObject){
    return $('<div>').addClass('message own').append('<h3><a href="message.createdBy" target="_blank"><strong>escapes.pitch.saucepan</strong></a> Wed, June 20th, 14:07 <em>14 min. left</em></h3><p>Message.text</p><button>+5 min.</button>');
}

/*channel list*/
/*call channel list on load*/
function listChannels(){
    $('#channel-list').append(createChannelElement(yummy));
    $('#channel-list').append(createChannelElement(SevenContinents));
    $('#channel-list').append(createChannelElement(KillerApp));
    $('#channel-list').append(createChannelElement(FirstPersonOnMars));
    $('#channel-list').append(createChannelElement(Octoberfest));

    console.log('channels loaded')
}

/*create channel element*/
function createChannelElement(channelObject){
    return $('<li>').append(channelObject) 
}