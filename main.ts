/**
 * Tutorial instructions help the player understand the movements, power ups, and how to activate them
 */
/**
 * These are the tilemaps that are used for the three levels. More tile maps were made but these are the final three
 */
/**
 * gravity and velocity settings are put under a forever loop in order to help them remain constant throughout the length of the program and different user inputs
 */
/**
 * This power up launches the player horizontally in either direction
 */
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    mySprite.setImage(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f 2 4 e 4 4 4 4 e 4 2 f . . 
        . . f 4 4 4 4 4 4 4 4 4 4 f . . 
        . f 4 4 2 2 4 e e 4 2 2 4 4 f . 
        . f 4 4 f f e e e e f f 4 4 f . 
        . f 2 2 f b f e e f b f 2 2 f . 
        . f 2 2 e 1 f 4 4 f 1 e 2 2 f . 
        f f 2 2 f 4 4 4 4 4 4 f 2 2 f f 
        f 2 2 f f f e e e e f f f 2 2 f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `)
    りんご = 2
    if (Red == 1) {
        RedTutorial()
        Red += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (ツ == 1) {
        game.showLongText("This tile lets you move on to the next level. ", DialogLayout.Bottom)
        ツ += 1
    }
    LevelComplete()
    Gravity = 500
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Gravity = 500
})
/**
 * This power up allows the user to perform a double jump
 */
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    mySprite.setImage(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f 6 7 e 4 4 4 4 e 7 6 f . . 
        . . f 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 6 6 7 e e 7 6 6 7 7 f . 
        . f 7 7 f f e e e e f f 7 7 f . 
        . f 6 6 f b f e e f b f 6 6 f . 
        . f 6 6 e 1 f 4 4 f 1 e 6 6 f . 
        f f 6 6 f 4 4 4 4 4 4 f 6 6 f f 
        f 6 6 f f f e e e e f f f 6 6 f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `)
    りんご = 1
    if (Green == 1) {
        GreenTutorial()
        Green += 1
    }
})
function Level2 () {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
    mySprite.y += 2
    Level = 2
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    AButton()
})
function Level3 () {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
    mySprite.y += 2
    Level = 3
}
function RedTutorial () {
    game.showLongText("This is the red power. You can use it to launch yourself horizontally.", DialogLayout.Bottom)
}
/**
 * These animations help the game play run more smoothly
 */
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 2
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . f 3 e e e f b f b b b b f . . 
        . . f e 4 4 f 1 e b b b b f . . 
        . . . f 4 4 4 4 f b b b b f f . 
        . . . f e e e f f f b b b b f . 
        . . . f d d d e 4 4 f b b f . . 
        . . . f d d d e 4 4 e f f . . . 
        . . f b d b d b e e b f . . . . 
        . . f f 1 d 1 d 1 d f f . . . . 
        . . . . f f b b f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . . f e e e f b f b b b b f f . 
        . . . e 4 4 f 1 e b b b b b f . 
        . . . f 4 4 4 4 f b b b b b f . 
        . . . f d d d e 4 4 b b b f . . 
        . . . f d d d e 4 4 f f f . . . 
        . . f d d d b b e e b b f . . . 
        . . f b d 1 d 1 d d b f . . . . 
        . . . f f f b b f f f . . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    mySprite.setVelocity(0, 0)
    mySprite.setImage(img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b f 4 4 4 4 4 e e b b f . 
        . . f e f b d d d e 4 4 4 f . . 
        . . e 4 c d d d d e 4 4 e f . . 
        . . e f b b d b d d e e f . . . 
        . . . f f 1 1 d 1 d 1 f f . . . 
        . . . . . f b b f f f . . . . . 
        `)
    Gravity = 500
    りんご = 0
    game.setGameOverEffect(true, effects.confetti)
    game.showLongText("You won, thanks for playing!", DialogLayout.Center)
})
function Level1 () {
    if (tutorial == true) {
        game.splash("Now apply what", "you've learned")
    }
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 30))
    mySprite.y += 2
    Level = 1
}
function GreenTutorial () {
    game.showLongText("This is the green power. You can use it to double jump by pressing A.", DialogLayout.Bottom)
}
function AButton () {
    controller.moveSprite(mySprite, 100, 0)
    mySprite.setImage(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `)
    Gravity = 500
    if (りんご == 1) {
        mySprite.setVelocity(0, -225)
    } else if (りんご == 2) {
        controller.moveSprite(mySprite, 0, 0)
        if (direction == 1) {
            mySprite.setVelocity(200, -120)
        } else if (direction == 2) {
            mySprite.setVelocity(-200, -120)
        }
    } else if (りんご == 3) {
        mySprite.setVelocity(0, 0)
        Gravity = -300
    }
    りんご = 0
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 e b 3 e e 3 3 f . 
        . . f 3 3 3 3 f f e e e 3 3 f . 
        . . f b b b b f b f e e e 3 f . 
        . . f b b b b e 1 f 4 4 e f . . 
        . f f b b b b f 4 4 4 4 f . . . 
        . f b b b b f f f e e e f . . . 
        . . f b b f 4 4 e d d d f . . . 
        . . . f f e 4 4 e d d d f . . . 
        . . . . f b e e b d b d b f . . 
        . . . . f f d 1 d 1 d 1 f f . . 
        . . . . . . f f b b f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
        . . f 3 3 3 3 e b 3 e e 3 3 f . 
        . . f 3 3 3 3 f f e e e 3 3 f . 
        . f f b b b b f b f e e e f . . 
        . f b b b b b e 1 f 4 4 e . . . 
        . f b b b b b f 4 4 4 4 f . . . 
        . . f b b b 4 4 e d d d f . . . 
        . . . f f f 4 4 e d d d f . . . 
        . . . f b b e e b b d d d f . . 
        . . . . f b d d 1 d 1 d b f . . 
        . . . . . f f f b b f f f . . . 
        `],
    500,
    false
    )
})
function LevelComplete () {
    if (Level == 1) {
        Level2()
    } else if (Level == 2) {
        Level3()
    } else if (Level == 3) {
    	
    } else if (Level == 4) {
    	
    } else if (Level == 5) {
    	
    } else if (Level == 6) {
    	
    } else if (Level == 7) {
    	
    } else if (Level == 8) {
    	
    } else if (Level == 9) {
    	
    } else if (Level == 10) {
        game.gameOver(true)
    } else if (Level == 0) {
        Level1()
    } else if (Level == 3.2) {
    	
    } else if (Level == 5.9) {
    	
    } else {
        game.setGameOverMessage(true, "damn")
        game.gameOver(true)
    }
    mySprite.setVelocity(0, 0)
    mySprite.setImage(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `)
    Gravity = 500
    りんご = 0
}
/**
 * This power up turns off gravity temporarily
 */
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (Gravity == 500) {
        mySprite.setImage(img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f 8 9 e 4 4 4 4 e 9 8 f . . 
            . . f 9 9 9 9 9 9 9 9 9 9 f . . 
            . f 9 9 8 8 9 e e 9 8 8 9 9 f . 
            . f 9 9 f f e e e e f f 9 9 f . 
            . f 8 8 f b f e e f b f 8 8 f . 
            . f 8 8 e 1 f 4 4 f 1 e 8 8 f . 
            f f 8 8 f 4 4 4 4 4 4 f 8 8 f f 
            f 8 8 f f f e e e e f f f 8 8 f 
            . f e e f b d d d d b f e e f . 
            . . e 4 c d d d d d d c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `)
        りんご = 3
    }
    if (Blue == 1) {
        BlueTutorial()
        Blue += 1
    }
})
function Tutorial () {
    tiles.setCurrentTilemap(tilemap`level9`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 22))
    mySprite.y += 2
    Level = 0
    tutorial = true
    Green = 1
    Red = 1
    Blue = 1
    ツ = 1
}
function BlueTutorial () {
    game.showLongText("This is the blue power. You can use it to temporarily reverse gravity.", DialogLayout.Bottom)
}
let Blue = 0
let tutorial = false
let direction = 0
let Level = 0
let Green = 0
let ツ = 0
let Red = 0
let りんご = 0
let mySprite: Sprite = null
let Gravity = 0
Gravity = 500
mySprite = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
mySprite.y += 2401
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundImage(img`
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333d111d33333333333333333333333333333333333d111d33333333333333333333333333333333333d111d33333333333333333333333333333333333d111d3333333333333333333333333
    33333333d1111111d3333333333333333333333333333333d1111111d3333333333333333333333333333333d1111111d3333333333333333333333333333333d1111111d33333333333333333333333
    3333333d111111111d33333333333333333333333333333d111111111d33333333333333333333333333333d111111111d33333333333333333333333333333d111111111d3333333333333333333333
    3333333111111111113d111d33333333333333333333333111111111113d111d33333333333333333333333111111111113d111d33333333333333333333333111111111113d111d3333333333333333
    333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333
    33333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d3333
    33d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d33
    3111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d3
    11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d
    1111111111111111111a5a1111111119111111111111111111111111111a5a1111111119111111111111111111111111111a5a1111111119111111111111111111111111111a5a111111111911111111
    111111111111111133a353a33111119991111111111111111111111133a353a33111119991111111111111111111111133a353a33111119991111111111111111111111133a353a33111119991111111
    3111111111111111a3555553a11111191111113a3111111111111111a3555553a11111191111113a3111111111111111a3555553a11111191111113a3111111111111111a3555553a11111191111113a
    a1111111911111111a55555a11111111111111a5a1111111911111111a55555a11111111111111a5a1111111911111111a55555a11111111111111a5a1111111911111111a55555a11111111111111a5
    3a3111199911111111a555a11111111111113a353a3111199911111111a555a11111111111113a353a3111199911111111a555a11111111111113a353a3111199911111111a555a11111111111113a35
    55a111119111111111a535a1111111111111a55555a111119111111111a535a1111111111111a55555a111119111111111a535a1111111111111a55555a111119111111111a535a1111111111111a555
    5a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a55
    5a11111111111111111111111111111111111a535a11111111111111111111111111111111111a535a11111111111111111111111111111111111a535a11111111111111111111111111111111111a53
    a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3
    1111111111aa11111111111a355aa111111111111111111111aa11111111111a355aa111111111111111111111aa11111111111a355aa111111111111111111111aa11111111111a355aa11111111111
    111111111a35a1111191111a5555aa11aaaaa111111111111a35a1111191111a5555aa11aaaaa111111111111a35a1111191111a5555aa11aaaaa111111111111a35a1111191111a5555aa11aaaaa111
    11111111a555a1111999111a55555aaa35555a1111111111a555a1111999111a55555aaa35555a1111111111a555a1111999111a55555aaa35555a1111111111a555a1111999111a55555aaa35555a11
    111aaaaaa555a1111191111a5555533555555a11111aaaaaa555a1111191111a5555533555555a11111aaaaaa555a1111191111a5555533555555a11111aaaaaa555a3111191111a5555533555555a11
    11a555533955a1111111111a3555555995555a1111a555533955a1111111111a3555555995555a1111a555533955a1111111111a3555555995555a1111a555533955a3111111111a3555555995555a11
    11a5555555553a111111111aa55555599555aa1111a5555555553a311111111aa55555599555aa1111a5555555553a311111111aa55555599555aa1111a5555555553a311111111aa55555599555aa11
    11aa5555555553a11111111aa55555555553a31111aa5555555553a11111111aa55555555553a11111aa5555555553a31111111aa55555555553a11111aa5555555553a11111111aa55555555553a111
    111aa5555555555a111111aa355555555553aa11113aa5555555555a111111aa355555555553aa11111aa5555555555a111111aa355555555553aa11111aa5555555555a111111aa355555555553aa11
    111aa55555555555a1111aa55555555555553aa1113aa55555555555a1111aa55555555555553aa1111aa55555555555a1111aa55555555555553aa1111aa55555555555a1111aa55555555555553aa1
    11aa55555555555aaa11a35555555555555555a313aa55555555555aaa11a35555555555555555a111aa55555555555aaa11a35555555555555555a111aa55555555555aaa11a35555555555555555a1
    11a555555555553a39aa3555555555555555553399a555555555553a39aa3555555555555555553399a555555555553a39aa3555555555555555553311a555555555553a39aa35555555555555555533
    31a5555555553aaa993a5555555555555555539939a5555555553aaa993a5555555555555555539939a5555555553aaa993a5555555555555555539939a5555555553aaa993a55555555555555555399
    3333555335553339999a355555555555555533993333555335553339999a355555555555555533993333555335553339999a355555555555555533993333555335553339999a35555555555555553399
    9333aaaa35553335599a333aaa355555555539999333aaaa35553335599a333aaa355555555539999333aaaa35553335599a333aaa355555555539999333aaaa35553335599a333aaa35555555553999
    9333399aa55999955993aaaaaaa55555333339999333399aa55999955993aaaaaaa55555333339999333399aa55999955993aaaaaaa55555333339999333399aa55999955993aaaaaaa5555533333999
    99999399aa5999999999999a9aa55555a999999999999399aa5999999999999a9aa55555a999999999999399aa5999999999999a9aa55555a999999999999399aa5999999999999a9aa55555a9999999
    999933999aa399999999999393a55553a3999999999933999aa399999999999393a55553a3999999999933999aa399999999999393a55553a3999999999933999aa399999999999393a55553a3999999
    9993339999933999999999939335555a333999999993339999933999999999939335555a333999999993339999933999999999939335555a333999999993339999933999999999939335555a33399999
    9933399999933999999993339333553399339999993339999993399999999333933355339933999999333999999339999999933393335533993399999933399999933999999993339333553399339999
    9933999999939999999993399933333999339999993399999993999999999339993333399933999999339999999399999999933999333339993399999933999999939999999993399933333999339999
    9993999999939993399993999999339999399933999399999993999339999399999933999939993399939999999399933999939999993399993999339993999999939993399993999999339999399933
    3993999999939933339993999999999999399333399399999993993333999399999999999939933339939999999399333399939999999999993993333993999999939933339993999999999999399333
    3333999999933333333993999999999999333399333399999993333333399399999999999933339933339999999333333339939999999999993333993333999999933333333993999999999999333399
    3333999999933399933333999999999999333999333399999993339993333399999999999933399933339999999333999333339999999999993339993333999999933399933333999999999999333999
    9999999999999999993339999999999999999999999999999999999999333999999999999999999999999999999999999933399999999999999999999999999999999999993339999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999991119999999999999999999999999999999999999111999999999999999999999999999999999999911199999999999999999999999999999999999991119999999999
    9999999999999999999999999111111199999999999999999999999999999999911111119999999999999999999999999999999991111111999999999999999999999999999999999111111199999999
    9999999999999999999999991111111119999999999999999999999999999999111111111999999999999999999999999999999911111111199999999999999999999999999999991111111119999999
    9999999999999999999999911111111111991119999999999999999999999991111111111199111999999999999999999999999111111111119911199999999999999999999999911111111111991119
    1999999999999999999999911111111111911111199999999999999999999991111111111191111119999999999999999999999111111111119111111999999999999999999999911111111111911111
    1999911111199999999999911111111111111111199991111119999999999991111111111111111119999111111999999999999111111111111111111999911111199999999999911111111111111111
    1991111111111999999119991111111111111111199111111111199999911999111111111111111119911111111119999991199911111111111111111991111111111999999119991111111111111111
    1911111111111199911111191111111111111111191111111111119991111119111111111111111119111111111111999111111911111111111111111911111111111199911111191111111111111111
    1111111111111119111111119111111111111111111111111111111911111111911111111111111111111111111111191111111191111111111111111111111111111119111111119111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
game.splash("Princess Power Up!", "Press A to continue")
game.splash("Would you like a tutorial?")
story.showPlayerChoices("Yes please", "No thank you")
if (story.checkLastAnswer("Yes please")) {
    Tutorial()
}
if (story.checkLastAnswer("No thank you")) {
    Level1()
}
scene.cameraFollowSprite(mySprite)
forever(function () {
    mySprite.ay = Gravity
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vx = 0
        controller.moveSprite(mySprite, 100, 0)
    }
    if (mySprite.isHittingTile(CollisionDirection.Top)) {
        Gravity = 500
    }
    if (mySprite.isHittingTile(CollisionDirection.Right)) {
        mySprite.vx = 0
        controller.moveSprite(mySprite, 100, 0)
    }
    if (mySprite.isHittingTile(CollisionDirection.Left)) {
        mySprite.vx = 0
        controller.moveSprite(mySprite, 100, 0)
    }
})
