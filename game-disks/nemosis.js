const nemoSis = () => ({
    roomId: 'title', // the ID of the room the player starts in
    rooms: [
      { // title
        id: 'title',
        img: `

                        
                        ░   ░░░  ░        ░  ░░░░  ░░      ░░░      ░░        ░░      ░░
                        ▒    ▒▒  ▒  ▒▒▒▒▒▒▒   ▒▒   ▒  ▒▒▒▒  ▒  ▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒▒▒▒▒▒
                        ▓  ▓  ▓  ▓      ▓▓▓        ▓  ▓▓▓▓  ▓▓      ▓▓▓▓▓  ▓▓▓▓▓      ▓▓
                        █  ██    █  ███████  █  █  █  ████  ███████  ████  ██████████  █
                        █  ███   █        █  ████  ██      ███      ██        ██      ██
                                                                         

                                                                                                                                                                                                                                             
        `,
        onEnter() {
          println('Type ***START*** to START');
          // println('You went outside');
          // enterRoom('island');
        },
      },
      { //island room 
        id: 'island', // unique ID for this room
        img: `
        GGGGGGGGGGGGGGGGGGGGGGGGGGBBBBBBBBBBBBBBBB#######################&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&@@@
        GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGBBBBBBBBBBBBBBBBBB######################&&&&&&&&&&&&&&&&&&&&&&&&&&&@@
        GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGBBBBBBBBBBBBBBBBBB####################&&&&&&&&&&&&&&&&&&&&&&&&&&@
        PPPPPPPPPPPPPPPPGGGGGGGGGGGGGGGGGGGGGBBBBBBBBBBBBBBBBB##B##################&&&&&&&&&&&&&&&&&&&&&&&&&
        PPPPPPPPPPPPPPPPPPPPPPGGGGGGGGGGGGGGGGGBBBBBBBBBPBBBBBPG####################&&&&&&&&&&&&&&&&&&&&&&&&
        5555555555PPPPPPPPPPPPPPPGGGGGGGGGGGGGGGY5GBGGGY^7GPP?^!?Y####################&&&&&&&&&&&&&&&&&&&&&&
        55555555555555555PPPPPPPPPPGGGGGGGGGGGG!:!?J77~::~!:...^!~YPBB##B###############&&&&&&&&&&&&&&&&&&&&
        55YYYY5555555555555555PPPPPPPPGGGGG5J7~.:^~!!~~^^~~:...:7~!7?JY5B#BG#############&&&&&&&&&&&&&&&&&&&
        YYYYYYYYYYYYYYYY55555555PPPPPPGPP?!^......^77!!~^^^~~::^~!!??77?JJ!!PGGB5B#########&&&&&&&&&&&&&&&&&
        JJJJJJJJJJJJJYYYYYY55555555PYJ7~^.........^~^~~^~^^~~~~^~~~~7?77!77!!7777Y###########&&&&&&&&&&&&&&&
        JJJJJJJ?JJJJJJJJJYYYYY55YY5J^:............~7!!7!~~^:^^^^~~!~^7!~77!~~7!!!7PBB##########&&&&&&&&&&&&&
        ??????????????JJJJJYYYJY7~^::.:............~!!~~~^^^~~^~^^~7~!7~!J7!7!!!!??Y?7YB##########&&&&&&&&&&
        77777777777??????JJJJJ7^..................:^^^::^^^^^^^^~^~!777?7?777!!~~!!!7!!JYYY###########&&&&&&
        7777777777777777????7^....:  ..... ......:~~~^..^^^^^::^^:^~!!!??J?J7!77~~~!J!Y??!~?G###############
        !!!!!!!!!!!!!77777::^:::::. ............:~!!!!~~::^:^^~~^::^~~~::~!7??~!7!!^!7?7!~:~JB##############
        !!!!!!!!!!!!!!!!!:..:^^^:..............^~77!~~~^~~~^^^:::::::.:...:~!7~~7!!!?!!5YJ7!Y55G############
        ~!~~~~~~~~~~~~^::..^~:^^... ..........^!~~!!!^^^^^^~^:.:~^::........^~~~!!77!7!~7JJJ?JJJGBG#########
        ~~~~~~~~~~~~~::.:..^~!:....... .......^!~^^^~~~^^^^^^:..^^:.....:...:^:~!7^~~^77777?7YY7Y5BBBBBBBBBB
        ~~~~~~~~^~^::^^:.::.:.... .. .........~~~^^^^7?!^^^^~^:.::::..........:^!7?~!7!!?JYJ?YGYJJJGBBBBBBBB
        ^^^^^^^^^^:........:..............:^~~~^~!!^^~~^^^^^^~::::::.:.:.......:::!7!7?J!7??J!JYY55PBBBBBBBB
        ^^^^^^^^^^7~^..::...............:~~??~~~!~^~!!^~^:^^^^:::::...........:...::^^7YY77?Y5!~!5GBBBBBBBGG
        ^^^::::::::::::....::......~:::^!~7!!^~^^7!^~7^!~::::^:::^:..........::...::::^!?J7Y??!~J5GBBGGGGGGG
        ::::::::::..::::^^::~^!^.::^~!~!7~:^~!!~^^!7!!?^!!~^^~^^^^^^:::::...........::^^^J?YYJYY?YGGGGGGGGGG
        :::::::::::...^^:::~7^:..:.:^7??!7!~^:^^:^~^~!5?????7?7~~~~^^^^::.....:::.:::::^^~:~P??YYJPGGGGGGPPP
        ::::...:::...:~:::::^:.:.^::^~!7!77!7~^~!JJ??7??Y??J??7~!!~^^^^^^::.::::::::.::.^~~~5Y^YGGGGGGPPPPPP
        .........:..^^::..::^~^..~!~^::^J7J!~^!7777??!??J???JJ?77?~~~~^^^::.::::.::^~~~^:^!!!YYJGPPPPPPPP555
        .............:...:.::.^^~~!7!!~~~^^?77^~!JJJ!77!7JJJJJ7?77~~!^^^:.:::..:^!~~!!?!~7?J7^5PPPPP55555555
        .............::.....::^7?:::~77Y57!???J?!7?7?JJJYY5JJ?JJJ?7!~^^:::::.^^^!^::?J~!7?Y?Y??J55555555YYYY
        ...............::....^.^J777~^??7~~^!??!??JJJY?YJ77?JYYYJJJ?7!~^^:::.^^:.....:::^^!757~J55555YYYYYYY
        ........................:~~?!?7^?5J77!J??JY?!JJ7JJ????J?JJJJ??7~~:^:..........:...:~?7YYYYYYYYYJJJJJ
        ..................::.:::.^~!J5??!!?!!7?77??!75J77????????JJ???7!~^^::::::....~^^^^7JJYYYJJJJJJJJJJJJ
        ...................::...:7?^7~7?~!Y7Y!!~J77YJYPY?JJJ???7??77777!!~~^::::::::^?!7?????JJJJJJJJ???????
        ......................:::^!^^.^~!?55G?:!!????7!YP?7J?77!!!!!!!!!!!~~^^^^^^^!!7777?77????????????????
        ....................::::..:.::~^~^7Y?7^7?J75?7!?7!777~J~~~~~!!!!!!~~~~~~~~~!!!7777777777777777777777
        .....................::....:::^!5^:!Y55BJ^~!.!!7!~~~~^!~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!777777777777777
        .................... ....:::.:7!^^:.:.:?7~~^^!!!~!7~~~^^~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!!!!!!!!!!!
        ............................ .   .....:.^~!!~~~~~7!^^^^!7~^^^^^^^^^^^~~~~~~~~~~~~~~!!!!!!!!!!!!!!!!!
        .............................   .... .:^~~?7^^^^^~!^^^^~^^^^^^^^^^^^^^^^^~~~~~~~~~~~~~~~!!!!!!!!!!!!
        ................................  ....:77^^^:::~7!~:::^:^^^^^^^^^^^^^^^^^^^^^~~~~~~~~~~~~~~~~~~~~~!!
        ........................................::::::::::::::::::::::^^^^^^^^^^^^^^^^^^^^^^~~~~~~~~~~~~~~~~
        .........................................::::^::::::::::::::::::::::::::^^^^^^^^^^^^^^^^^^^^~~~~~~~~
          . .......................................:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
                  ............................................::::::::::::::::::::::::::::::::::::::::::::::
                      .....................................................:::::::::::::::::::::::::::::::::
                            ..........................................................^~~~~~~~!~~~~~^!!^::::
                                      ..................................................::::::::::::::::::::
                                                    .......................................................:
        `,
                                             
        name: `The Outside`, 
        desc:  `
        *The Great Trash Island*. You mark the fact that it should be renamed to *"The Lesser Trash Island" since weather has splitted it in 10 pieces 9 of which are nowhere to be found. 

        There's nothing here. Only your *SHED* to the **EAST**. On the other side ocean is EVERYWHERE. The view is breathtaking but the novelty wears out pretty fast.

        Well actually there's a beach to the **NORTH**. It's made of garbage.

        Type **HELP** to say it out loud.`, 

        onLook: () => {
          const room = getRoom('island');
          room.desc = `You look at your island. Nothing to say except "You're doomed"
          
          Something is laying on the ground.`;
        },
        items: [
          {
            name: 'stick', // the item's name
            img: `

            .^!                                                    
           .?J?7:                                                  
             .7??!.                                                
               !???~.                                              
                ^7??7^                  .^!J5~                     
                 .~???7:              .7PGBB5.                     
                   .J?7?7^           .5BBGG5.                      
                    .Y5J??7^     J?..GBBGP7                        
                      ^JP5J?7:   G?75BP?^                          
                        .7PPJ?!. Y5?^                              
                          .?PPJ?~7GJ~                              
                            .JGPJ?YP?.                             
                              :YG5???7                             
                                ^5GY??!.                           
                                  ~PGJ??~                          
                                    !PPJ?7:                        
                                     .7P5??7:                      
                                       .?PY??!.                    
                                         ^5P5J?!.                  
                                           ~5G5J?!.                
                                             !PG5JJ!:              
                                              .?PP5J?!.            
                                                .?555J?!.          
                                                  .75P5J?!.        
                                                     ~YP5J?~.      
                                                       ^JP5?7~.    
                                                         :?5YJ?:   
                                                           .^~.    
       `,
            desc: `It's a wooden stick. Why?`, // description shown when player looks at the item
            isTakeable: true,
            onTake() {
                  println(`It's just a stick.`);}
          },
          {
            name: ['bottle'], // player can refer to this item by any of these names
            img: `

                                                            
    .~7YY:    .....                                         
   7?YPPYY~:~~~~~~!77~.                                     
   75P5?~777????7!~^^^7?!.                                  
     !7777???????J???7^:^?Y!                                
     !777777???..~7??J??~^JG.                               
    .?77777777?:   .:~7?YY?57:                              
    :J777777777?!^.   ~YJ?PB5~P?                            
     ??!77777777???~:~~^YG#BBP##B~..                        
      JJ!777777777J55J7P!:^G##B#&#GBBP7.                    
       ~Y?!7777??JYJYPBBP^!J:G##BBBBBB##P:                  
        .JY??J???J5GBBGG#&#~YY.?G#BBBBBBB#7                 
          ^J577GGBBBBBB#BBB##P:  !P##BBBB#G?!:              
               ~GBBBBB#BBBBBBBBP~  ^JGBBBBB#P5Y^            
                .~Y&###BBBBBBBBB#G7. :BBBB#P?7?G!           
                   .#BGGBBBBBBBBBBBBJ^..5#5???JGJ7~:        
                    J&GGGBBBBBBBBBBB#G7.?Y7?J?????JYY!.     
                     ?##GGGBBBBBBBBBBBGJ??JYJ????????JG:    
                      .Y##BBBBBBBBBBPJ7?J5Y???????7???JY    
                        .~~?&GBBGPY???JYJ?????????77?77Y~   
                            YBY?77??JJJ????????????7~~!^    
                             :J5JYP??????????????7Y~        
                               ...Y?777????????J?JG^        
                                  .YY?77777777^^^~.         
                                    ^YYJJ?77?7              
                                      .^^~77!.                                                               
                                                            
`,
            desc: `Rubbish. But you drink out of it every day.`, // optional reason player cannot pick up this item
            block: `You don't need this.`,
          },
          {
          name: ['baseball'], // player can refer to this item by any of these names
          img: `



                                                            
                                                            
                         ...........                        
                  .........      ...::^^^.                  
             .....                       :^~^               
          ....                              .~!.            
        ::             ~  :. ..                ^7.          
      :^      . ^  5. P. Y7 !^ :^  ..            !!         
     ~:      .5 G. B~:5Y.~Y:#: G..?.  .           :J        
    !:   ^ 5^ G^Y!!?Y7.B G..B  Y^~J ~:             .Y       
   ^^  : G:^G^B.G!~G!~ . .  ^  7:~.J7   .:.         ^?      
   Y ?.G.!GJG ??.: .            ~^:^. .7  ..         Y.     
  ^&^Y!???G.J?                    7 .^. :~...        :?     
  !#BJJ55.~7                        : .:?^^...:       Y     
  ~BPY5...                            :..J^^.         Y     
  :?..                                ...:7. .::      Y     
   5                                    ?:^?7::.      Y     
   ^7                                   ..:J7...     :7     
    ?~                                  ::.^^~~^    .Y      
     77                                 .!:7!~:     P.      
      7G.                               !J~^^.    .J:       
       ^G!                            ^~..::    :!^         
         ?P~                         :J!!:.  .~!:           
           !YJ!^.                  ~55J~..^~!^.             
              :!???7!^:.........:?PBGG?!~^.                 
                    .:^^^:::::::::..                        
                                                            
                                                            
             
`,
            desc: `Rubbish. But you play with it every day.`, // optional reason player cannot pick up this item
            block: `No.`,
          },
        ],
        // places the player can go from this room
        exits: [
          {dir: 'north', id: 'beach'},
          {dir: 'east', id: 'shed'},
        ],
      },
      {
        id: 'shed',
        img: `                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                          ....::^~~!77??JJYYYYYYYY?~.                               
        .^  ...:^^^^^~~!!7?JYPPGPPPPP5555555PPPGGGGGGGGPPPPP555PGBBBBG5YY5Y?!7
         7B&#GPGB&&BP5PPP555J?7~^:...                                     .5B7.         
         7&J    ..:...                                                     .5G~                     
         ~&J                                             :!JY5557.           :PG~                   
         !@J                                           ~PPP7^!Y75P?.           :PB!                 
         !@J                                          Y&PPJ^^^7 ~5GP^            :5B7               
         !@?                                         .#BYB?^77^7?P~Y~              .5P              
         !@7                                         :P~G&P!^!~P#?J@:                .              
         7@!                                          ^~G!.PPPP5!7G:                                
         ?@~                                           .!:^B#GPY7:                    ?~            
         Y@^                                              .::..                       P5            
         5@^                                                                          #7            
         P@^                                                                         .@?            
         G@:                                                                          GG            
         B&!^^:^~!777?JJJ?7!??YY5JJY!~~^::::................   .  ........::::.....   .#.           
         5#JY?7?YP55P5PP555GGPP5J??Y?~^:::::::::^^^^:::^^::::::.....:^7J7?!~:.....:::::BJ           
         ~@&&#BB#BGGGPPPGB555Y7JYJ??!~~^^~~~^~~~!!~~~~~~^^^^::....::^!?YPP5555P5J?J7?55G&.          
         ^&@@@@@@@@@@@@@@@@&&&&&&#G555JJ?77!!!!!!~~~~~~~~~^::::::::::^!!7!?JJJ7^:^^^^!?Y@J          
         ~@@@@@##@@@@@@@@@@@@@@@@@@@@&&&&&&#BBBBBGGGGPP5?7~^^^^^^^::::^^~~!!~^^~!!!!77??#&          
         !&##GPG#@@@@&@@@&#&&@&&&&&&&@@@@@&&&&&&@&&&&&#PJ7!!!~~~~~~!!77777!~~!??J?JJ??JJ5@^         
         ?&BBG#&@@@@@@&&#BGGPPBBB&&###GBBB#&&&&BGB#BBGP5J??77!!!7??JJYY???77?J5PPGGGP5YYY@J         
         ?@#&&&&&&##BP55PGGB55P55PP55P##&&&#BB#B###B####B5J??7??JYPGPP5?????J5G#&&&#BGP5P&G         
          ?#BGPPPY5PPGBBGGB5~:^!?5PGPPPP55YYY555YYYY55YJJYJY5GGPGBBBGGP5PPPGB##&&@&##BB#&@#         
           Y5YJJYPP55Y?J7~~:.  :!!!~~^:^:.:::^^^:::^^^^~~:.:^??!?Y5Y!^:~^~7??P7!PGPPPPGBBB#         
           :7~!7JJ7^~^::::.....   ...... .... . ...^^::^^^!?7777!~^:  .:....... ....~7~^:^G         
            !^^::^^^~~~~~~~^::^^^:^^:::::^~~::::.::^~~!!~~77!~~!^^:..^~~~~~~^::^~!^.......P         
            ^7^~~!!77777777~!~^~~~~~~~^^:::::.:::..^::^::^^:.:::::::^~~~~!!!~^..:^:::^~~^!B         
             Y!!!!!!777777!!7!!!!!7!~~^:^^:::::::::^^::^::::::^:::^^^^^^~!~~^:^^^^^^^^^~:P&         
             !PJJJJJJ??J????YY5P55J7!^^^^^^^~~~~~~~~~~~~~^^^^~~~~~~~^^:::^^^^~~~~^^^^^~^~&&.        
              GGGBBG5YJJJJYYYYYJ7!~~~~~~~~~!!!!77!77!!!!~~~~~~~~~~~~~^^^^^~~~~~~~~!!7?JYG@&         
              7B5P5?7!!!~~!77??????????77?????JJY55YYYYYJYYJJJ77!777??7?J??JJJY55PGYY5G5B@B         
               B!::::::..::...........:::^^^^^:::::^^^~!!!!!!!!!!!!!!!~^^^~~~~~~!!~~~~~^B@Y         
               ~B~!!~~~^^^:::.........:...:.............::.....:..........:^^^^^::::::::&@^         
                GJ::^::::::::..:....::^:.:^:::::^^::.:::::.:::::::::.......:.......... :&@          
                :&!:^::::........::::.................. ...................::.::...... ~@&          
                 PP!!!?J??7~^:::.::^^::..................:::............ ............  7@#          
                     .^!7?JY?:..... .:^~!7?Y5YJ??7!!~^^~~~~!~^::^:::::^::..::...:::::::Y@Y          
                                         ...^!?JY5?:...:................         ......BB           
                                                                                                 `,
        name: 'Your shed',
        desc: `Not bad for a bunch of cardboard boxes. Fortunately this cardboard is made out of plastic. You have your **Aliri** here. 
        Lone **MIRROR** is hanging on the wall. Through the hole in the wall you see the ocean and the sun.`,
        items: [
          {
            name: 'bed',
            desc: `An imaginary bed. (You sleep in the corner)`, 
            block: `I'm sick of sleeping.`,
          },
          {
            name: 'mirror',
            desc: `A Blu-Ray Disk. Ancient history.`,
            onUse() {
              println(`You see a guy. He is handsome. 
              
              
              (Should you try talking to him?)`)
            },
          },
        ],
        exits: [
          // exits with a BLOCK cannot be used, but print a message instead
          {dir: 'west', id: 'island'},
        ],
      },
      { // beach 
        id: 'beach',
        name: 'The Beach',
        desc: ``,
        exits: [
          {dir: 'south', id: 'island'},
        ],
      },
    ],
    characters: [
      { // you
        name: 'Yourself',
        roomId: 'shed',
        desc: 'Moron.', // printed when the player looks at the character
        img: `
                                  .:::.      .:^^^:.                                                
                               .~!!77?JY?^ :!!!!!!7?J?^.^!7??7^                                     
                          ^77!?5^     ^JB#55~   :^~^:7G5^. .:!55^ .::.                              
                        !PPY77PB7 ~!.P5:~J@~  ^5!~7PP.?#.:7?7^.J#?!7?JJ!.                           
                       ?G:  :7JPJYP. 5B?~7?   ~#5^..^:Y!YP:^?P:.&!  7YPGG7                          
                      .BP   GB7?&@5  .?PGY!: ^:.7BP5GG~ PB:    ?5^:7@PYY!#J                         
                     !77BP!:^!!!YB#.!G^.:!YBGY. JB..~5&~:BBJ7!!??!7?P&P^.G#?~                       
                    JY  ~5#&P7~: J@P7YYJ!  ~@J  !5Y7: #B!~!7JJ!~.    ^B&5?:~5P!                     
                   :#~ PP~~J&?  ?5^YGJ!^::^7GB~      !&P ~B7^!5#J755? !&^    !#J                    
                   .PG^~J7~:B7 YY   .!??7!^. ?P5J?77!^YB^^P7   P5P@?^:Y5!?7:  PG                    
                    7PPJ77!7^ Y5               ::::.  .JGY?7777~ .?5?!:  .!PJ^5^                    
                  :5^.!J5J:  JP                         .:^^:.      !G!~?!.~&#P~                    
                  PJ 5B!7#J 7B.                                     .G@&?YGYB5&@Y.                  
                  GP.:!~~G^:#~                                       !@#G??Y^ .P@Y                  
                  :YGY7!7. 5B                           .~777??YYJ?!^^#P^~~?5P!:##.                 
                   ^G^.    ??~!!!!~^:.                .~7!^:..:^~!?YPG&&!.G&:!#!PG                  
                   ~#?. ^J5??7!!7?JY5P5?^            ~Y7.            .?@##@@!.?JG^                  
                    ~5JP#J::         .~YBG7        .!G~               !#^~5&@&5!.                   
                      ~B! ^G:           .?&P.     .~G7    ..          7#. ^Y&@~                     
                     :B?  ~#:   .^~~~^:   ^&P.    ~YG.^!?J5PP5Y?!^    J&?!~!P@B:                    
                     JB^!?5#..77!777?J5PY~ ^@Y    7#Y~^::.:^~!?5B&P^: 7@!    5@5                    
                     B#!^~G#..::~!7??J5B@@BYP&55YYB&^:?PGBBBBBGBB&@@G ^@7    !#&:                   
                    .&G   J#:7P####BB@@@@@@#J@?~~~5&^~7777777P&&&&&&? :&?    7P&:                   
                    7@&^  5B.^^::.. ?@@@@@G~Y&.   ^@J        5###GJ:  :&?   !YB#:                   
                    5#BB: 5#.       ^PBPJ^ 7@P     J&J.       :^:     :&Y ~JJ~JB.                   
                    5B^PB?P#.            ^J5#~      ~GBJ~.          .:!&G7!:  B?                    
                    J@: ^JB@Y!:.    .^~7J?:JP         ^JPP5J????JJJJJ??@Y    JP                     
                    :&P.  7@JY55YJJJJ?!^. ^#:            .:^^^~~~~^:. :&?  .?Y.                     
                     ^GB?^7@^   ...       G?                          ^@P?77^                       
                       ~J5P@?            ~@^    :!~:                  ~@!.                          
                          .BP            .5GJ7~^J#@@B!                ?&.                           
                           J&:             :~7?5!.~7?^ .              G5                            
                           :#P        .:^^^^^^^^~~~^^~~~~~~~^^:..    !#:                            
                            !&Y    .^~~~~~~~~~~~~~~~~~~~~~~~~~~~~^  ^#!                             
                             !#P: ^~~~~~~~?55PPPP55YYJ?7~~~~~~~~~^ :B7                              
                              :5#Y!~~~~~~~!7??JJYYYYY5PY!~~~~~~^. !P~                               
                                ~PB57~^~~~~~~~~~~~~~~~~~~~~^:.  ^J?.                                
                                  ^JGG5YJ^:^^^^^^^^^^^^:::^^!777!:                                  
                                     7YY55GPYJY5YJJJJJJJJJ?7!^.                                     
                                         ??.::^^^^^::..                                                                                                      
        `,
        // optional callback, run when the player talks to this character
        onTalk: () => println(`Hi! (stop talking to yourself!)`),
        topics: [
          {
            option: `What's the **WEATHER** today?`,
            // optional callback, run when the player selects this option
            onSelected() {
              println(`Bad as usual.`)
            },
          },
          {
            option: `What's the **WEATHER** today?`,
            // optional callback, run when the player selects this option
            onSelected() {
              println(`Bad as usual.`)
            },
          },          {
            option: `What's the **WEATHER** today?`,
            // optional callback, run when the player selects this option
            onSelected() {
              println(`Bad as usual.`)
            },
          },          {
            option: `What's the **WEATHER** today?`,
            // optional callback, run when the player selects this option
            onSelected() {
              println(`Bad as usual.`)
            },
          },
        ],
      },
      { //radio  
        name: 'aliri',
        roomId: 'shed',
        img: '',
        desc: 'A physical device with a speaker that connects to rare satellites passing by. Has a taste of humor.',
        onTalk: () => println(`Hey, Aliri! 
        
        "Shhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh   BEEP! `),
        topics: [
          {
            option: `Aliri, what's the **WEATHER** today?`,
            line: `Shhhhhe weashhhhh is bad shhhhhhh exshhhhhhhh sun for a week!`
          },
          {
            option: `Aliri, **JAZZ** playlist`,
            line: `........A lot of hissing.`
          },
          {
            option: `Aliri, **NEWS** station`,
            line: `You hear a part of a news program: ".........Our government is ready to help anybody shshshhshshshshhfgdkjfghdflkgfdhlsfjgkhsl 
            Yes, the enemy is down, we are victorious`
          },
        ],
      },
      // { // fish-girlfriend
      //   name: 'Fish',
      //   roomId: 'beach',
      //   onTalk: () => println(``),
      //   topics: [
      //   ],
      // },
    ],
  });