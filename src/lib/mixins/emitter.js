function broadcast (componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}
export default {
  methods: {
    dispatch (componentName, eventName, params) {
      console.log('进入父组件')
      var parent = this.$parent || this.$root
      var name = parent.$options.componentName
      console.log('找到父组件')
      console.log(parent)
      console.log(name)
      console.log(params)

      while (parent && (!name || name !== componentName)) {
        console.log('进入循环')
        parent = parent.$parent

        if (parent) {
          name = parent.$options.componentName
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
