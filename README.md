# ts-katas
WIP TS Katas


## Things I haven't tried / open questions.

* I've run these katas using Node 23.10.0. I'm not sure what other versions of
Node might or might not work with these Katas.
* I've currently set tsc to use module `node16`, which is the most recent
version of node available as a module on my machine. I don't want to use
`nodeNext` since that might change as features are added/removed, and might
break tests(?).
* Due to the way that tsc cli interprets commands, I'm unable to use
tsconfig.json at the same time that I specify only a single file to compile. If
someone can figure out how to get around this, it will save a LOT of copy/paste.