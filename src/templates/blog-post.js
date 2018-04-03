import React,{ Component } from "react";
// import { prototype } from "stream";

// const style = {}

class BlogPost extends Component {

    render(){
        console.log("props", this.props.data);
        const {
            title,
            author
        } = this.props.data.contentfulPost
        return (
            <div>
                <div>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <h1>
                    {title.title}
                </h1>
                {/* <div>{author}</div> */}
            </div>
        );
    }
}

// BlogPost.ReactPropTypes = {
//     data: ReactPropTypes.isRequired
// }

export default BlogPost;

export const pageQuery = graphql`
query PostQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
        id
        slug
        title {
          title
        }  
        author {
            name
            website
        }
    }
    
}
`
