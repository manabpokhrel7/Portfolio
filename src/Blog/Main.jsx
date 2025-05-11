import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import cloudfrontImage from '../Images/cloudfront.png';
import s3image from '../Images/s3image.webp';
import selinux from './SELinux.png';

const BlogMainPage = () => {
  const blogPosts = [
    {
      title: 'Understanding CloudFront',
      description: 'A comprehensive guide to using Cloudfront effectively in your system.',
      image: cloudfrontImage,
      link: 'https://medium.com/@manabpokhrel7/aws-cloudfront-19b20bc8f239',
    },
    {
      title: 'Introduction to s3 Static Hosting',
      description: 'Learn how to host your static website in s3.',
      image: s3image,
      link: 'https://medium.com/@manabpokhrel7/hosting-a-static-website-on-amazon-s3-a-beginners-guide-3bd8ce47fc0f',
    },
    {
      title: 'Configuring vsftpd for Anonymous FTP Uploads',
      description: 'How to enable anonymous FTP uploads securely with SELinux settings.',
      image: selinux,
      link: 'https://medium.com/@manabpokhrel7/configuring-vsftpd-for-anonymous-ftp-uploads-with-selinux-booleans-0d8b4ef2ee3d',
    },
  ];

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {post.link ? (
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
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
              </a>
            ) : (
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
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogMainPage;
