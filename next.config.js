module.exports= {
    loaders: [
      {
        test: /flickity/,
        loader: 'imports?define=>false&this=>window'
      }
    ]
}