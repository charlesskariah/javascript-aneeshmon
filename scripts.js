const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

function jsonp(uri) {
    return new Promise(function(resolve, reject) {
        var id = '_' + Math.round(10000 * Math.random());
        var callbackName = 'jsonp_callback_' + id;
        window[callbackName] = function(data) {
            delete window[callbackName];
            var ele = document.getElementById(id);
            ele.parentNode.removeChild(ele);
            resolve(data);
        }

        var src = uri + '&callback=' + callbackName;
        var script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.addEventListener('error', reject);
        (document.getElementsByTagName('head')[0] || document.body || document.documentElement).appendChild(script)
    });
}

jsonp('http://www.mocky.io/v2/5c36e1c930000097001f608d').then(function(data){
    console.log({
        "responseHeader":{
          "zkConnected":true,
          "status":0,
          "QTime":0,
          "params":{
            "q":"*:*",
            "indent":"on",
            "fl":"*",
            "callback":"jsonp_callback__5919",
            "wt":"json"}},
        "response":{"numFound":4347841,"start":0,"docs":[
            {
              "id":"AnalystPat 1:596625",
              "pat_id":596625,
              "account_id":1,
              "patnum":"US7873863B2",
              "title":"Portable computing device with a non-volatile memory drive",
              "abstract_html_strip":"A portable computing device, in which an internal non-volatile memory drive that is used to boot to a functional device GUI is automatically swapped with a temporary RAM drive if the internal non-volatile memory drive is found to be corrupted. The non-volatile memory is typically Flash memory, but the principle of the present invention can be applied to any kind of non-volatile memory that could become corrupted. Default configuration files may be automatically copied to the RAM drive. These may, for example, allow at least emergency voice calls to be made.",
              "portfolio_ids":[502439,
                502689,
                20483],
              "_version_":1622204837564252161},
            {
              "id":"AnalystPat 1:590017",
              "pat_id":590017,
              "account_id":1,
              "patnum":"US20110054562A1",
              "title":"Neural stimulation system and method responsive to collateral neural activity",
              "abstract_html_strip":"A neural stimulation system responsive to collateral neural activity that may arise in association with a neural stimulation procedure includes a stimulation interface configured to deliver stimulation signals to a target neural population, a monitoring interface positioned to receive signals corresponding to a neural activity within the target neural population, a stimulus unit coupled to deliver stimulation singals to the stimulation interface, and a sensing unit coupled to the monitoring device and the stimulus unit. The neural stimulation procedure may be directed toward rehabilitating, restoring, and/or enhancing one or more neural functions by facilitating and/or effectuating a neuroplastic change or reorganization; and/or affecting a neurological condition that exists on a continuous or essentially continuous basis absent the stimulation procedure. The sensing unit determines whether evidence of an collateral neural activity exists, whereupon the stimulus unit attempts to abate the collateral neural activity.",
              "_version_":1622204837569495040},
            {
              "id":"AnalystPat 1:590030",
              "pat_id":590030,
              "account_id":1,
              "patnum":"US7912482B2",
              "title":"Mobile communication system and method for capturing information of other mobile communication terminals",
              "abstract_html_strip":"A mobile communication system and a method for capturing information of other mobile communication terminals located within a distance from the user's mobile communication terminal may include a first mobile communication terminal for transmitting capture signal, location information and identification information; the second mobile communication terminals for transmitting location information and identification information of the second mobile communication terminals; and a base station for transmitting the GPS driving signal to the second mobile communication terminals and capturing information of the second mobile communication terminals.",
              "portfolio_ids":[501673],
              "_version_":1622204837573689348},
            {
              "id":"AnalystPat 1:590038",
              "pat_id":590038,
              "account_id":1,
              "patnum":"US7903023B2",
              "title":"Obstacle detection system notably for an anticollision system",
              "abstract_html_strip":"The present invention relates to system for detecting obstacles (13, 55, 56, 57) on the ground (15) onboard a carrier (1). The detection system comprises at least two continuous-wave radars (2, 3, 4). The radars (2, 3, 4) are linked to a system (15) for utilizing the detection data arising from the radars (2, 3, 4). The detection system performs localization of an obstacle (13, 55, 56, 57): along a radial axis (12) between a radar (2, 3, 4) and the obstacle (13, 55, 56, 57), by calculating the distance between the radar (2, 3, 4) and the obstacle (13, 55, 56, 57); along a vertical axis (14) with respect to a radar (2, 3, 4), by calculating the elevation of the obstacle (13, 55, 56, 57) using monopulse deviation-measurement processing. The detection system performs localization of an obstacles along a horizontal axis (18) transverse with respect to a sighting axis (11) of a radar (2, 3, 4), by calculating the azimuthal position of the obstacle (13, 55, 56, 57). The invention applies notably in respect of the detection of obstacles on the ground so as to avoid any collision between a taxiing aircraft and these obstacles.",
              "portfolio_ids":[502163],
              "_version_":1622204837576835072},
            {
              "id":"AnalystPat 1:590074",
              "pat_id":590074,
              "account_id":1,
              "patnum":"US7865704B2",
              "title":"Selective instruction breakpoint generation based on a count of instruction source events",
              "abstract_html_strip":"A method includes generating an instruction address value in response to an instruction source event. The method further includes selectively generating a breakpoint request based on the instruction source event and responsive to a comparison of the instruction address value to a breakpoint address value. In one embodiment, selectively generating a breakpoint request includes comparing the instruction source event to an instruction source event type, comparing the instruction address value to a breakpoint address value, and generating the breakpoint request responsive to a match between the first instruction source event type and the instruction source event and a match between the instruction address value and the breakpoint address value.",
              "portfolio_ids":[21769],
              "_version_":1622204837579980800},
            {
              "id":"AnalystPat 1:590118",
              "pat_id":590118,
              "account_id":1,
              "patnum":"US7866869B2",
              "title":"Laser illuminated backlight for flat panel displays",
              "abstract_html_strip":"Laser lit flat panel displays are disclosed including edge-lit and direct lit backlights. In certain embodiments, laser assemblies are selected to obtain bandwidth distributions to reduce speckle.",
              "portfolio_ids":[21561],
              "_version_":1622204837583126528},
            {
              "id":"AnalystPat 1:590151",
              "pat_id":590151,
              "account_id":1,
              "patnum":"US7881439B1",
              "title":"Cross-channel communication of data collected by channel-specific user interfaces",
              "abstract_html_strip":"A method, system, computer system and computer program product to interact with a user of a computer system or service via more than one communication channel, such as a telephone channel and a web channel. A determination can be made based upon information gathered via the multiple communication channels that communication between a server and one communication channel is related to communication between the server and another communication channel. Related information gathered via the multiple communication channels can be identified to form a more complete picture of information about the user's problem with a problem entity. A potential action to help the user find a solution can be determined from information gathered from all communication channels. An automated option can be provided via one of the communication channels, and an automated suggestion to select the option can be made via a coordinated communication channel.",
              "portfolio_ids":[502248],
              "_version_":1622204837583126531},
            {
              "id":"AnalystPat 1:590205",
              "pat_id":590205,
              "account_id":1,
              "patnum":"US7912718B1",
              "title":"Method and system for enhancing a speech database",
              "abstract_html_strip":"A system, method and computer readable medium that enhances a speech database for speech synthesis is disclosed. The method may include labeling audio files in a primary speech database and a secondary speech database, enhancing the primary speech database by placing the labeled audio files from the secondary speech database into the primary speech database, and storing the enhanced primary speech database for use in speech synthesis.",
              "portfolio_ids":[21735],
              "_version_":1622204837587320833},
            {
              "id":"AnalystPat 1:590215",
              "pat_id":590215,
              "account_id":1,
              "patnum":"US7894238B2",
              "title":"Semiconductor memory device with stacked memory cell structure",
              "abstract_html_strip":"A semiconductor device including: a first memory cell including a non-volatile first variable resistance element that stores data by varying a resistance value and a selection transistor that selects the first variable resistance element; a first memory layer provided with more than one such first memory cell arranged in a plane; a second memory cell including a non-volatile second variable resistance element that stores data by varying a resistance value and a selection diode that selects the second variable resistance element; and a second memory layer provided with more than one such second memory cell arranged in a plane; wherein more than one such second memory layer is stacked over the first memory layer.",
              "portfolio_ids":[21044],
              "_version_":1622204837589417984},
            {
              "id":"AnalystPat 1:592962",
              "pat_id":592962,
              "account_id":1,
              "patnum":"US7903338B1",
              "title":"Method and system for managing light at an optical interface",
              "abstract_html_strip":"An interface between two different optical materials can comprise a stack of thin film layers that manage light incident on that interface. One of the optical materials can have a first composition and a first refractive index, while the other optical material can have a second composition and a second refractive index. The stack can comprise thin film layers of the first optical material interleaved between thin film layers of the second optical material. The layers of the stack can be configured to provide the stack with an aggregate composition of at least one of the optical materials that progressively varies from one end of the stack to the other end. To provide the progressive variation in composition, the layers of one of the optical materials can have a progressively increased thickness across the stack, or can progressively increase in number, for example.",
              "portfolio_ids":[502855,
                500064,
                21192],
              "_version_":1622204837591515138}]
        }});
});