
import './App.css';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Typography from '@mui/material/Typography';


export default function ShowPosts({ posts, editPost, deletePost }) {
  const handleEdit = (index) => {
    const displayedPosts = [...posts]
      .sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
    const originalIndex = posts.findIndex(post => post.id === displayedPosts[index].id && post.body === displayedPosts[index].body && post.tags === displayedPosts[index].tags);
    const updatedPost = prompt("Edit your post:", posts[originalIndex].post);
    if (updatedPost) {
      editPost(index, { ...posts[originalIndex], post: updatedPost });
    }
  };

  const handleDelete = (index) => {
    deletePost(index);
  };

  return (
    <React.Fragment>
      {posts
        .slice()
        .sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
        .map((post, index) => (
          <Card key={index} sx={{ marginBottom: 2, bgcolor: '#2D5D7B', borderRadius: 2 }}>
            <CardHeader
              avatar={<Avatar src={post.profPic}>P</Avatar>}
              title={<Typography variant="h6" color="white">{post.id}</Typography>}
              subheader={<Typography variant="body2" color="#ADB5BD">{new Date(post.dateCreated).toLocaleString()}</Typography>}
            />
            <CardContent>
              <Typography variant="h5" component="div" color="white">
                {post.post}
              </Typography>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post"
                  style={{
                    marginTop: '10px',
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              )}
              <Typography variant="body2" color="#ADB5BD">
                Tags: {post.tags}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{
                  ':hover': {
                    textDecoration: 'underline',
                  },
                }}
                onClick={() => handleEdit(index)}
              >
                Edit<EditIcon />
              </Button>
              <Button
                sx={{
                  ':hover': {
                    textDecoration: 'underline',
                  },
                }}
                onClick={() => handleDelete(index)}
              >
                Delete<DeleteForeverIcon />
              </Button>
            </CardActions>
          </Card>
        ))}
    </React.Fragment>
  );
}
