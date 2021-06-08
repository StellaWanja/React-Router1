import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '../components/card';

const Posts = () => {

  const [posts, setPosts] = useState([]);
  const param = useParams();

  useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts?id=${param.id}`)
			.then((response) => response.json())
			.then((result) => {
				setPosts(result);
			});
	}, [param]);

  return (
    <div>
      {posts.map(({userId, id, title, body}) => {
        return <Card key={id} userId={userId} title={title} body={body} />
      })}
    </div>
  )
}

export default Posts;