import { UrlBuilder } from '../base.config'

class PagesUrl extends UrlBuilder {
	constructor() {
		super()
	}

	home(): string {
		return this.root('/')
	}

	favourites(): string {
		return this.root('/favourites')
	}

	movie(id: string): string {
		return this.root(`/movie/${id}`)
	}
}

export const pagesUrl = new PagesUrl()
