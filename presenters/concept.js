'use strict';

const ConceptImagePresenter = require('./concept-image');
const ResponsiveGridsPresenter = require('./responsive-grids');

/**
* Combine both presenters for use with concepts
* @param {String} directType - see ConceptImagePresenter
* @param {Object} items - see ConceptImagePresenter
* @param {Object} show - see ResponsiveGridsPresenter
**/
class ConceptPresenter {
	constructor (data) {
		this.data = data;
	}
	get imageUrl () {
		if (this.data) {
			const image = new ConceptImagePresenter({
				directType: this.data.directType,
				items: this.data.items
			});
			return image.imageUrl;
		}
	}
	get responsiveGrids () {
		if (this.data && this.data.show) {
			const rgrids = new ResponsiveGridsPresenter({show: this.data.show});
			return rgrids.responsiveGrids;
		}
	}
}

module.exports = ConceptPresenter;
