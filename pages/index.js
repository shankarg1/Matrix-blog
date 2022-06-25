

import { getBlogs } from '../pages/api/server'
export default function Home({ blogs }) {


  return (<>

    <div className="grid content-start justify-center xl:grid-cols-3 lg:grid-cols-2 sm:ml-24">

      {blogs.map((blog) => (

        <div className="my-10 duration-300 ease-in-out hover:shadow-xl hover:scale-105 card w-96 bg-base-100">

          <figure><img src={blog.image.url} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{blog.title}</h2>
            <p className='text-gray-300'>{blog.excerpt}</p>
            <div className="justify-end card-actions">
              <a href={blog.slug}>
                <button className="btn btn-primary">Read More !</button></a>
            </div>

          </div>


        </div>
      ))}
    </div>
  </>
  )

}
export async function getStaticProps() {
  const blogs = (await getBlogs()) || [];

  return {
    props: { blogs },
    revalidate: 5,

  }
}


