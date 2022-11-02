import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{paddingHorizontal:15, paddingTop:10,}}
    horizontal showsHorizontalScrollIndicator={false}>
     
      <CategoryCard imgUrl="https://assets.gqindia.com/photos/6213cbed18140d747a9b0a6e/master/pass/new%20restaurant%20menus%20in%20Mumbai.jpg"title="Chinese Special"/>
      <CategoryCard imgUrl="https://images.unsplash.com/photo-1502998070258-dc1338445ac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80" title="Burger Special"/>
      <CategoryCard imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/16/62/37/d2/magic-foods.jpg" title="Rice Special"/>
      <CategoryCard imgUrl="https://www.holidify.com/images/cmsuploads/compressed/indian-1768906_1920_20180322173733.jpg" title="South Indian Special"/>
      <CategoryCard imgUrl="https://www.thespruceeats.com/thmb/I_M3fmEbCeNceaPrOP5_xNZ2xko=/3160x2107/filters:fill(auto,1)/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg" title="Veg Paneer Special"/>
      <CategoryCard imgUrl="https://www.foodiesfeed.com/wp-content/uploads/2022/07/pizza-with-pineapple-and-thin-crust-768x1024.jpg" title="Pizza Special"/>
    </ScrollView>
  )
}

export default Categories