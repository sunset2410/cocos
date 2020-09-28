cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'xin chao cac!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = "tran anh khoa";
    },

    // called every frame
    update: function (dt) {

    },
});
