scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouth2, function (sprite, location) {
    tiles.placeOnRandomTile(Catty, sprites.dungeon.greenOuterNorth2)
    Catty.y += 20
    pause(100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorth2, function (sprite, location) {
    tiles.placeOnRandomTile(Catty, sprites.dungeon.greenOuterSouth2)
    Catty.y += 20
    pause(100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterSouth2, function (sprite, location) {
    tiles.placeOnRandomTile(Catty, sprites.dungeon.purpleOuterNorth2)
    Catty.y += 20
    pause(100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterNorth2, function (sprite, location) {
    tiles.placeOnRandomTile(Catty, sprites.dungeon.purpleOuterSouth2)
    Catty.y += 20
    pause(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    Cake.destroy()
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile4, function (sprite, location) {
    game.over(true)
})
let Cake: Sprite = null
let Catty: Sprite = null
Catty = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(Catty)
tiles.setTilemap(tilemap`level1`)
Catty.setPosition(9, 7)
scene.cameraFollowSprite(Catty)
Cake = sprites.create(img`
    . . . . . . . . . . b b b . . . 
    . . . . . . . . b e e 3 3 b . . 
    . . . . . . b b e 3 2 e 3 a . . 
    . . . . b b 3 3 e 2 2 e 3 3 a . 
    . . b b 3 3 3 3 3 e e 3 3 3 a . 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    b 3 3 3 d d d d 3 3 3 3 3 d d a 
    b b b b b b b 3 d d d d d d 3 a 
    b d 5 5 5 5 d b b b a a a a a a 
    b 3 d d 5 5 5 5 5 5 5 d d d d a 
    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
    b b b 3 d 5 5 5 5 5 5 5 d d b a 
    . . . b b b 3 d 5 5 5 5 d d 3 a 
    . . . . . . b b b b 3 d d d b a 
    . . . . . . . . . . b b b a a . 
    `, SpriteKind.Food)
Cake.setPosition(700, 5)
forever(function () {
    music.playMelody("E B C5 A B G A F ", 250)
})
