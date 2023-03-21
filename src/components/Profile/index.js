import React from "react";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";

// USANDO O useStaticQuery
const Profile = () => {
  const {
    site: { siteMetadata: { title, position, description, author } },
  } = useStaticQuery(graphql`
  query MySiteMetaData {
    site{
      siteMetadata{
        title
        description
        author
        position
      }
      }
  }
  `)
  return(
    <div className="profile-wrapper">
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{position}</h3>
      <p>{author}</p>
    </div>
  )
}

// USANDO O STATICQUERY

// const Profile = () => (
//   <StaticQuery
//     query={graphql`
//       query MySiteMetaData {
//       site{
//       siteMetadata{
//         title
//         description
//         author
//         position
//       }
//       }
//     }
//   `}
//     render={({ site: { siteMetadata: { title, position, description, author } } }) => (
//       <div className="profile-wrapper">
//         <h1>{title}</h1>
//         <h2>{description}</h2>
//         <h3>{position}</h3>
//         <p>{author}</p>
//       </div>
//     )}
//   />

// )

export default Profile