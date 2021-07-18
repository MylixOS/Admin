import PostsController from './posts';

const TYPES = [{
    name: '所有页面',
    value: null
}, {
    name: '草稿',
    value: 'draft'
}, {
    name: '已发布',
    value: 'published'
}, {
    name: '定时发布',
    value: 'scheduled'
}, {
    name: '特色页面',
    value: 'featured'
}];

const ORDERS = [{
    name: '最新页面',
    value: null
}, {
    name: '历史页面',
    value: 'published_at asc'
}, {
    name: '最近发布',
    value: 'updated_at desc'
}];

/* eslint-disable ghost/ember/alias-model-in-controller */
export default PostsController.extend({
    init() {
        this._super(...arguments);
        this.availableTypes = TYPES;
        this.availableOrders = ORDERS;
    },

    actions: {
        openEditor(page) {
            this.transitionToRoute('editor.edit', 'page', page.get('id'));
        }
    }
});
