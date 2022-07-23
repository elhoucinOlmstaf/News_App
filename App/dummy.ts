<TouchableOpacity
onPress={() =>
  navigate('Details', {
    Data: item,
    Id: item.id,
    Img: item._embedded['wp:featuredmedia'][0].source_url,
  })
}>
<View style={{flex: 1, flexDirection: 'row'}}>
  <Image
    source={{
      uri: item._embedded['wp:featuredmedia'][0].source_url,
    }}
    style={{width: 100, height: 100}}
  />
  <Text>{item.title.rendered}</Text>
</View>
</TouchableOpacity>