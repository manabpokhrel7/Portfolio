import React from 'react';
import {  Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

const BlogMainPage = () => {
  const blogPosts = [
    {
      title: 'Understanding CloudFront',
      description: 'A comprehensive guide to using Cloudfront effectively in your system.',
      image: 'src/Images/cloudfront.png',
      link: 'https://medium.com/@manabpokhrel7/aws-cloudfront-19b20bc8f239',
    },
    {
      title: 'Introduction to Kubernetes',
      description: 'Learn the basics of Kubernetes and how it can simplify container orchestration.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Mastering Material-UI',
      description: 'Tips and tricks for building beautiful React applications with Material-UI.',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogMainPage;
