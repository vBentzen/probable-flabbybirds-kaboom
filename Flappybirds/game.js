kaboom ({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0, 0, 0, 1],
})


loadSprite('birdy', 'sprites/birdy.png')


scene("game", () => {
    
    const player = add([
        sprite('birdy'), solid(),
        pos(30, 0),

    ])

  
});

start("game")