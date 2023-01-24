import React from 'react'
import {useRouter} from "next/router"
// import {PostCard, Categories, Loader} from '../../components'
// import {getCategories, getCategoryPost} from '../../services'
const Category = () => {
// const Category = ({posts}) => {
  // const category = posts[0].node.categories[0].name
  // console.log(posts)
  const router = useRouter()
  // if (router.isFallback){
  //   return <Loader  />
  // }
  return (
    <div className='container mx-auto px-10 mb-8'>
      {/* <h1 className='w-full bg-[#00121e] text-xl font-bold text-center mt-2 py-5 uppercase text-white'>{category}</h1> */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          {/* {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))} */}
        </div>
        <div className='col-span-1 lg:col-span-4 mt-4'>
          <div className='relative lg:sticky top-8'>
            {/* <Categories /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category

// export async function getStaticProps({params}){
//   // const posts = await getCategoryPost(params.slug)
//   // return {
//   //   props: {posts}
//   // }
// }

// export async function getStaticPaths() {
//   // const categories = await getCategories()
//   // return {
//   //   paths: categories.map(({slug}) =>({params: {slug}})),
//   //   fallback: true
//   // }
// }