export default {
  name: 'cdTableHeader',

  render: function (createElement) {
    // return createElement(
    //   'h' + this.level,
    //   [
    //     createElement(
    //       'a',
    //       {
    //         domProps: {
    //           href: '#' + this.title
    //         }
    //       },
    //       this.$slots.default
    //     )
    //   ]
    // )
    return createElement(
      'div',
      [
        createElement('div', '666', this.$slots.default),
        createElement('h1', '标题666', this.$slots.default)
      ]
    )
  }
}
