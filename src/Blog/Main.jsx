import React from 'react';
// Importing Material UI components for layout and styling
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

// Importing images used in the blog cards
import cloudfrontImage from '../Images/cloudfront.png';
import selinux from './SELinux.png';

// BlogMainPage functional component
const BlogMainPage = () => {
  // Define an array of blog post objects with title, description, image, and link
  const blogPosts = [
    {
      title: 'Understanding CloudFront',
      description: 'A comprehensive guide to using Cloudfront effectively in your system.',
      image: cloudfrontImage,
      link: 'https://medium.com/@manabpokhrel7/aws-cloudfront-19b20bc8f239',
    },
    {
      title: 'Understanding SELinux and Apache',
      description: 'A practical walkthrough of working with SELinux in Apache configurations.',
      image: selinux,
      link: 'https://medium.com/@manabpokhrel7/understanding-selinux-and-apache-a-practical-guide-3bea5b8b450b',
    },
    {
      title: 'Configuring vsftpd for Anonymous FTP Uploads',
      description: 'How to enable anonymous FTP uploads securely with SELinux settings.',
      image: selinux,
      link: 'https://medium.com/@manabpokhrel7/configuring-vsftpd-for-anonymous-ftp-uploads-with-selinux-booleans-0d8b4ef2ee3d',
    },
  ];

  return (
    // Container sets the overall width and spacing
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      {/* Grid container to layout blog cards responsively */}
      <Grid container spacing={4}>
        {/* Map over each blog post to create a grid item */}
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {/* Each blog card is a clickable link opening in a new tab */}
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              {/* Card displays image, title, and description */}
              <Card
                sx={{
                  transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for hover effect
                  '&:hover': {
                    transform: 'scale(1.03)', // Scale up slightly on hover
                    boxShadow: 6, // Add box shadow on hover
                  },
                }}
              >
                {/* CardMedia displays the image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                {/* CardContent displays title and description */}
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
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// Exporting the component for use in the app
export default BlogMainPage;
