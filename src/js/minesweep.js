import * as Pi from 'pixi.js'
import unclicked from '@/images/tile_unclicked.png'
import clicked from '@/images/tile_clicked.png'


const Update = app => {
	let elapsed = 0.0

	app.ticker.add((delta) => {
		// console.log('D: ', delta)

	})
}

export const AppView = () => {
	const app = new Pi.Application({
		width: 600,
		height: 600
	})
	let unclickedSprite = Pi.Sprite.from(unclicked)
	let clickedSprite = Pi.Sprite.from(clicked)

	Update(app)

	app.stage.addChild(unclickedSprite)
	return app.view
}